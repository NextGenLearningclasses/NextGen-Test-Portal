// ===============================
// NextGen Learning Result Engine
// ===============================

const optionLetters = ["A", "B", "C", "D"];

(async function () {

    // Load submitted answers
    const answers = JSON.parse(localStorage.getItem("finalAnswers"));

    if (!answers) {
        alert("No test data found.");
        window.location.href = "login.html";
        return;
    }

    const student = JSON.parse(localStorage.getItem("student") || "{}");
    const cheatLog = JSON.parse(localStorage.getItem("cheatLog") || "[]");
    const autoSubmitted = localStorage.getItem("autoSubmitted") === "true";

    const chapterKey = `${student.class}|${student.subject}|${student.chapter}`;

    // Look up this chapter's settings (negative marking / review visibility)
    let chapterConfig = { negativeMarking: 0, showReview: true };

    try {
        const classObj = APP_CONFIG.classes.find(c => c.id === student.class);
        const subjectObj = classObj.subjects.find(s => s.id === student.subject);
        const found = subjectObj.chapters.find(ch => ch.id === student.chapter);
        if (found) chapterConfig = found;
    } catch (e) {
        // fall back to defaults above if lookup fails for any reason
    }

    const serverSideScoring = !!(APP_CONFIG.settings && APP_CONFIG.settings.serverSideScoring);

    let score, total, correct, wrong, unanswered, percentage;
    let correctAnswers = {}, explanations = {};
    let scoringFailed = false;

    if (serverSideScoring) {

        const responses = answers.map(q => ({ id: q.id, answer: q.userAnswer }));

        const serverResult = await submitForServerScoring({
            studentInfo: {
                name: student.name,
                mobile: student.mobile,
                school: student.school,
                class: student.class,
                subject: student.subject,
                chapterTitle: student.chapterTitle || student.chapter
            },
            chapterKey: chapterKey,
            responses: responses,
            negativeMarking: chapterConfig.negativeMarking || 0,
            violations: cheatLog.length,
            autoSubmitted: autoSubmitted,
            violationDetails: cheatLog.map(v => v.type).join(", ")
        });

        if (serverResult.status === "success") {

            total = serverResult.total;
            correct = serverResult.correct;
            wrong = serverResult.wrong;
            unanswered = serverResult.unanswered;
            score = serverResult.score;
            percentage = serverResult.percentage;
            correctAnswers = serverResult.correctAnswers;
            explanations = serverResult.explanations;

        } else {

            scoringFailed = true;

            // Keep the raw answers saved so nothing is lost - the teacher
            // can ask the student to retry, or you can wire up a manual
            // resync later.
            localStorage.setItem("pendingSubmission", JSON.stringify({
                chapterKey: chapterKey,
                student: student,
                answers: answers,
                cheatLog: cheatLog,
                autoSubmitted: autoSubmitted
            }));

        }

    } else {

        // Local scoring (default) - the loaded question bank already
        // contains the correct "answer" field for each question.
        total = answers.length;
        correct = 0; wrong = 0; unanswered = 0;

        answers.forEach(q => {

            correctAnswers[q.id] = q.answer;
            explanations[q.id] = q.explanation;

            if (q.userAnswer === null) {
                unanswered++;
            } else if (q.userAnswer === q.answer) {
                correct++;
            } else {
                wrong++;
            }

        });

        const negativeMarking = chapterConfig.negativeMarking || 0;
        score = Math.max(0, correct - (wrong * negativeMarking));
        percentage = total > 0 ? ((score / total) * 100).toFixed(2) : "0.00";

        // Log this result to the Sheet (fire-and-forget)
        if (typeof sendResultToSheet === "function") {
            sendResultToSheet({
                timestamp: new Date().toISOString(),
                name: student.name || "",
                mobile: student.mobile || "",
                school: student.school || "",
                class: student.class || "",
                subject: student.subject || "",
                chapter: student.chapterTitle || student.chapter || "",
                chapterKey: chapterKey,
                totalQuestions: total,
                attempted: correct + wrong,
                correct: correct,
                wrong: wrong,
                unanswered: unanswered,
                percentage: percentage,
                violations: cheatLog.length,
                autoSubmitted: autoSubmitted,
                violationDetails: cheatLog.map(v => v.type).join(", ")
            });
        }

    }

    // ---------------- Render ----------------

    if (scoringFailed) {

        document.getElementById("score").innerHTML = `
            <h2>⚠ Could not score your test right now</h2>
            <p>Your answers have been saved on this device. Please check your internet
            connection and try again, or let your teacher know.</p>
            <button id="retryBtn">Retry</button>
        `;

        document.getElementById("retryBtn").addEventListener("click", function () {
            window.location.reload();
        });

        return;

    }

    const integrityHTML = autoSubmitted
        ? `<h3 style="color:#dc2626;">⚠ Auto-submitted due to ${cheatLog.length} violation(s)</h3>`
        : (cheatLog.length > 0
            ? `<h3 style="color:#f59e0b;">⚠ ${cheatLog.length} warning(s) recorded during this test</h3>`
            : `<h3 style="color:#16a34a;">✔ No integrity issues detected</h3>`);

    document.getElementById("score").innerHTML = `

        <h2>🎉 Test Completed</h2>

        <hr>

        <h3>Total Questions : ${total}</h3>

        <h3>Attempted : ${correct + wrong}</h3>

        <h3>Correct : ${correct}</h3>

        <h3>Wrong : ${wrong}</h3>

        <h3>Unanswered : ${unanswered}</h3>

        <hr>

        <h2>Score : ${score} / ${total}</h2>

        <h2>Percentage : ${percentage}%</h2>

        <hr>

        ${integrityHTML}

    `;

    // ---------------- Review ----------------

    if (chapterConfig.showReview) {

        const reviewDiv = document.getElementById("reviewSection");

        let html = `<hr><h2>Answer Review</h2>`;

        answers.forEach((q, i) => {

            const correctLetter = correctAnswers[q.id];
            const isCorrect = q.userAnswer === correctLetter;
            const explanation = explanations[q.id] || "";

            html += `
                <div class="review-card ${q.userAnswer === null ? 'review-unanswered' : (isCorrect ? 'review-correct' : 'review-wrong')}">
                    <p><strong>Q${i + 1}.</strong> ${q.question}</p>
                    <p>Your answer: ${q.userAnswer ? q.userAnswer + ". " + q.options[optionLetters.indexOf(q.userAnswer)] : "Not answered"}</p>
                    ${!isCorrect ? `<p>Correct answer: ${correctLetter}. ${q.options[optionLetters.indexOf(correctLetter)]}</p>` : ""}
                    ${explanation ? `<p class="review-explanation"><em>${explanation}</em></p>` : ""}
                </div>
            `;

        });

        reviewDiv.innerHTML = html;

    }

    // Clear exam data now that everything is safely scored/saved
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("timeLeft");
    localStorage.removeItem("answers");
    localStorage.removeItem("finalAnswers");
    localStorage.removeItem("examSubmitted");
    localStorage.removeItem("autoSubmitted");
    localStorage.removeItem("cheatLog");
    localStorage.removeItem("markedForReview");
    localStorage.removeItem("questionOrder");
    localStorage.removeItem("pendingSubmission");

})();
