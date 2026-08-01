/**
 * NextGen Learning - Backend (Google Apps Script)
 * -------------------------------------------------
 * Paste this entire file into script.google.com (bound to your results
 * Google Sheet) and deploy it as a Web App. See GOOGLE_SHEET_SETUP.md for
 * step-by-step instructions.
 *
 * This single endpoint handles three actions, chosen by the "action"
 * field in the JSON body the app sends it:
 *
 *   "submit"       -> score a submitted test using the AnswerKeys tab,
 *                      save the result + per-question responses, and
 *                      return the score/correct answers/explanations.
 *   "checkAttempt" -> look up whether a mobile number has already
 *                      completed a given chapter (used to block repeat
 *                      attempts).
 *   "getResults"   -> (password protected) return all saved results and
 *                      per-question "most missed" stats, for the teacher
 *                      dashboard.
 *
 * SHEET TABS THIS SCRIPT EXPECTS/CREATES:
 *   AnswerKeys      - you fill this in (see GOOGLE_SHEET_SETUP.md)
 *                      columns: ChapterKey | AnswerKeyJSON
 *   Results         - created automatically
 *   ResponseDetails - created automatically
 *
 * ONE-TIME SETUP FOR THE TEACHER DASHBOARD PASSWORD:
 *   In the Apps Script editor: Project Settings (gear icon) -> Script
 *   Properties -> Add property -> name it DASHBOARD_PASSWORD, value =
 *   whatever password you want to use to view results in the dashboard.
 */

function doPost(e) {

    const data = JSON.parse(e.postData.contents);
    const action = data.action || "submit";

    let result;

    if (action === "checkAttempt") {
        result = handleCheckAttempt(data);
    } else if (action === "getResults") {
        result = handleGetResults(data);
    } else if (action === "submit-log-only") {
        result = handleLogOnly(data);
    } else {
        result = handleSubmit(data);
    }

    return ContentService
        .createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);

}

function doGet(e) {
    return ContentService
        .createTextOutput("NextGen Learning result endpoint is active.")
        .setMimeType(ContentService.MimeType.TEXT);
}

// ---------------------------------------------------------------
// Sheet helpers
// ---------------------------------------------------------------

function getOrCreateSheet(name, headers) {

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(name);

    if (!sheet) {
        sheet = ss.insertSheet(name);
        sheet.appendRow(headers);
    } else if (sheet.getLastRow() === 0) {
        sheet.appendRow(headers);
    }

    return sheet;

}

function sheetToObjects(sheet) {

    const values = sheet.getDataRange().getValues();

    if (values.length < 2) return [];

    const headers = values[0];

    return values.slice(1).map(row => {
        const obj = {};
        headers.forEach((h, i) => obj[h] = row[i]);
        return obj;
    });

}

// ---------------------------------------------------------------
// Action: submit-log-only (used when serverSideScoring is OFF - the app
// already scored the test in the browser and just wants this result
// logged, in the same simple shape as the original version of this app)
// ---------------------------------------------------------------

function handleLogOnly(data) {

    const resultsSheet = getOrCreateSheet("Results", [
        "Timestamp", "Name", "Mobile", "School", "Class", "Subject", "Chapter",
        "ChapterKey", "Total Questions", "Attempted", "Correct", "Wrong",
        "Unanswered", "Score", "Percentage", "Violations", "Auto Submitted",
        "Violation Details"
    ]);

    resultsSheet.appendRow([
        data.timestamp || new Date(),
        data.name || "",
        data.mobile || "",
        data.school || "",
        data.class || "",
        data.subject || "",
        data.chapter || "",
        data.chapterKey || "",
        data.totalQuestions || 0,
        data.attempted || 0,
        data.correct || 0,
        data.wrong || 0,
        data.unanswered || 0,
        data.correct || 0,
        data.percentage || "0.00",
        data.violations || 0,
        data.autoSubmitted || false,
        data.violationDetails || ""
    ]);

    return { status: "success" };

}

// ---------------------------------------------------------------
// Action: submit
// ---------------------------------------------------------------

function handleSubmit(data) {

    const answerKeySheet = getOrCreateSheet("AnswerKeys", ["ChapterKey", "AnswerKeyJSON"]);
    const answerKeyRows = sheetToObjects(answerKeySheet);

    const keyRow = answerKeyRows.find(r => r.ChapterKey === data.chapterKey);

    if (!keyRow) {
        return {
            status: "error",
            message: "No answer key found on the server for chapterKey: " + data.chapterKey +
                      ". Add it to the AnswerKeys tab (see GOOGLE_SHEET_SETUP.md)."
        };
    }

    const answerKey = JSON.parse(keyRow.AnswerKeyJSON).answers; // { id: {answer, explanation} }
    const negativeMarking = Number(data.negativeMarking) || 0;

    let correct = 0, wrong = 0, unanswered = 0;
    const correctAnswers = {};
    const explanations = {};

    const responseRows = [];

    Object.keys(answerKey).forEach(id => {

        const keyEntry = answerKey[id];
        correctAnswers[id] = keyEntry.answer;
        explanations[id] = keyEntry.explanation;

        const studentResponse = (data.responses || []).find(r => String(r.id) === String(id));
        const studentAnswer = studentResponse ? studentResponse.answer : null;

        let isCorrect = null;

        if (studentAnswer === null || studentAnswer === undefined) {
            unanswered++;
        } else if (studentAnswer === keyEntry.answer) {
            correct++;
            isCorrect = true;
        } else {
            wrong++;
            isCorrect = false;
        }

        responseRows.push([
            new Date(),
            data.studentInfo.mobile || "",
            data.chapterKey,
            id,
            studentAnswer,
            keyEntry.answer,
            isCorrect
        ]);

    });

    const total = Object.keys(answerKey).length;
    const score = Math.max(0, correct - (wrong * negativeMarking));
    const percentage = total > 0 ? ((score / total) * 100).toFixed(2) : "0.00";

    // Save the summary result
    const resultsSheet = getOrCreateSheet("Results", [
        "Timestamp", "Name", "Mobile", "School", "Class", "Subject", "Chapter",
        "ChapterKey", "Total Questions", "Attempted", "Correct", "Wrong",
        "Unanswered", "Score", "Percentage", "Violations", "Auto Submitted",
        "Violation Details"
    ]);

    resultsSheet.appendRow([
        new Date(),
        data.studentInfo.name || "",
        data.studentInfo.mobile || "",
        data.studentInfo.school || "",
        data.studentInfo.class || "",
        data.studentInfo.subject || "",
        data.studentInfo.chapterTitle || "",
        data.chapterKey,
        total,
        correct + wrong,
        correct,
        wrong,
        unanswered,
        score,
        percentage,
        data.violations || 0,
        data.autoSubmitted || false,
        data.violationDetails || ""
    ]);

    // Save per-question responses (used for "most missed question" analytics)
    const detailsSheet = getOrCreateSheet("ResponseDetails", [
        "Timestamp", "Mobile", "ChapterKey", "QuestionId", "StudentAnswer", "CorrectAnswer", "IsCorrect"
    ]);

    if (responseRows.length > 0) {
        detailsSheet.getRange(
            detailsSheet.getLastRow() + 1, 1, responseRows.length, responseRows[0].length
        ).setValues(responseRows);
    }

    return {
        status: "success",
        total: total,
        correct: correct,
        wrong: wrong,
        unanswered: unanswered,
        score: score,
        percentage: percentage,
        correctAnswers: correctAnswers,
        explanations: explanations
    };

}

// ---------------------------------------------------------------
// Action: checkAttempt
// ---------------------------------------------------------------

function handleCheckAttempt(data) {

    const resultsSheet = getOrCreateSheet("Results", [
        "Timestamp", "Name", "Mobile", "School", "Class", "Subject", "Chapter",
        "ChapterKey", "Total Questions", "Attempted", "Correct", "Wrong",
        "Unanswered", "Score", "Percentage", "Violations", "Auto Submitted",
        "Violation Details"
    ]);

    const rows = sheetToObjects(resultsSheet);

    const attempted = rows.some(r =>
        String(r.Mobile) === String(data.mobile) &&
        r.ChapterKey === data.chapterKey
    );

    return { status: "success", attempted: attempted };

}

// ---------------------------------------------------------------
// Action: getResults (teacher dashboard)
// ---------------------------------------------------------------

function handleGetResults(data) {

    const expectedPassword = PropertiesService.getScriptProperties().getProperty("DASHBOARD_PASSWORD");

    if (!expectedPassword || data.password !== expectedPassword) {
        return { status: "error", message: "Incorrect dashboard password." };
    }

    const resultsSheet = getOrCreateSheet("Results", [
        "Timestamp", "Name", "Mobile", "School", "Class", "Subject", "Chapter",
        "ChapterKey", "Total Questions", "Attempted", "Correct", "Wrong",
        "Unanswered", "Score", "Percentage", "Violations", "Auto Submitted",
        "Violation Details"
    ]);

    let results = sheetToObjects(resultsSheet);

    if (data.chapterKey) {
        results = results.filter(r => r.ChapterKey === data.chapterKey);
    }

    // Most-missed-question stats
    const detailsSheet = getOrCreateSheet("ResponseDetails", [
        "Timestamp", "Mobile", "ChapterKey", "QuestionId", "StudentAnswer", "CorrectAnswer", "IsCorrect"
    ]);

    let details = sheetToObjects(detailsSheet);

    if (data.chapterKey) {
        details = details.filter(r => r.ChapterKey === data.chapterKey);
    }

    const statsMap = {}; // questionId -> { attempts, wrong }

    details.forEach(r => {
        const id = String(r.QuestionId);
        if (!statsMap[id]) statsMap[id] = { questionId: id, attempts: 0, wrong: 0 };
        statsMap[id].attempts++;
        if (r.IsCorrect === false) statsMap[id].wrong++;
    });

    const questionStats = Object.values(statsMap).sort((a, b) => b.wrong - a.wrong);

    return {
        status: "success",
        results: results,
        questionStats: questionStats
    };

}
