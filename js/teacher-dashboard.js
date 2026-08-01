// ===============================
// NextGen Learning - Teacher Dashboard
// ===============================
// Password-protected view of all results saved in your Google Sheet,
// plus "most missed question" analytics per chapter.
//
// Note: this dashboard calls the same Apps Script Web App configured in
// js/sheets.js. It works whether or not serverSideScoring is turned on -
// results are logged to the Sheet either way.

const chapterSelect = document.getElementById("dashChapter");

// Populate the chapter dropdown from config
APP_CONFIG.classes.forEach(cls => {
    cls.subjects.forEach(subject => {
        subject.chapters.forEach(chapter => {
            if (!chapter.available) return;
            const opt = document.createElement("option");
            opt.value = `${cls.id}|${subject.id}|${chapter.id}`;
            opt.innerText = `${cls.name} - ${subject.name} - ${chapter.title}`;
            chapterSelect.appendChild(opt);
        });
    });
});

document.getElementById("loadResultsBtn").addEventListener("click", async function () {

    const password = document.getElementById("dashPassword").value;
    const chapterKey = chapterSelect.value || null;

    const errorDiv = document.getElementById("dashError");
    const summaryDiv = document.getElementById("dashSummary");
    const statsDiv = document.getElementById("dashStats");
    const tableWrap = document.getElementById("dashTableWrap");

    errorDiv.innerHTML = "";
    summaryDiv.innerHTML = "";
    statsDiv.innerHTML = "";
    tableWrap.innerHTML = "Loading...";

    if (!password) {
        errorDiv.innerText = "Please enter the dashboard password.";
        tableWrap.innerHTML = "";
        return;
    }

    if (!isSheetConfigured()) {
        errorDiv.innerText = "The Google Sheet backend isn't configured yet - paste your Web App URL into js/sheets.js first.";
        tableWrap.innerHTML = "";
        return;
    }

    const data = await fetchDashboardResults(password, chapterKey);

    if (data.status !== "success") {
        errorDiv.innerText = data.message || "Could not load results.";
        tableWrap.innerHTML = "";
        return;
    }

    renderSummary(data.results);
    renderTable(data.results);

    if (chapterKey) {
        renderQuestionStats(data.questionStats, chapterKey);
    } else {
        statsDiv.innerHTML = "<p><em>Select a specific chapter above to see a most-missed-questions breakdown.</em></p>";
    }

});

function renderSummary(results) {

    const summaryDiv = document.getElementById("dashSummary");

    if (results.length === 0) {
        summaryDiv.innerHTML = "<p>No results found for this filter.</p>";
        return;
    }

    const avgPercent = (
        results.reduce((sum, r) => sum + (parseFloat(r.Percentage) || 0), 0) / results.length
    ).toFixed(2);

    const violationCount = results.filter(r => Number(r.Violations) > 0).length;

    summaryDiv.innerHTML = `
        <div class="dash-summary-cards">
            <div class="dash-card"><h2>${results.length}</h2><p>Attempts</p></div>
            <div class="dash-card"><h2>${avgPercent}%</h2><p>Average Score</p></div>
            <div class="dash-card"><h2>${violationCount}</h2><p>With Warnings</p></div>
        </div>
    `;

}

function renderTable(results) {

    const tableWrap = document.getElementById("dashTableWrap");

    if (results.length === 0) {
        tableWrap.innerHTML = "";
        return;
    }

    const sorted = [...results].sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));

    let html = `
        <table class="dash-table">
            <thead>
                <tr>
                    <th>Time</th><th>Name</th><th>Mobile</th><th>School</th>
                    <th>Class</th><th>Subject</th><th>Chapter</th>
                    <th>Score</th><th>%</th><th>Violations</th><th>Auto-Submitted</th>
                </tr>
            </thead>
            <tbody>
    `;

    sorted.forEach(r => {
        html += `
            <tr>
                <td>${new Date(r.Timestamp).toLocaleString()}</td>
                <td>${r.Name}</td>
                <td>${r.Mobile}</td>
                <td>${r.School}</td>
                <td>${r.Class}</td>
                <td>${r.Subject}</td>
                <td>${r.Chapter}</td>
                <td>${r.Score} / ${r["Total Questions"]}</td>
                <td>${r.Percentage}%</td>
                <td>${r.Violations || 0}</td>
                <td>${r["Auto Submitted"] ? "Yes" : "No"}</td>
            </tr>
        `;
    });

    html += "</tbody></table>";

    tableWrap.innerHTML = html;

}

async function renderQuestionStats(questionStats, chapterKey) {

    const statsDiv = document.getElementById("dashStats");

    if (!questionStats || questionStats.length === 0) {
        statsDiv.innerHTML = "<p>No response data yet for this chapter.</p>";
        return;
    }

    // Try to load question text from the public question bank so the
    // list is readable instead of just showing question IDs.
    const [classId, subjectId, chapterId] = chapterKey.split("|");
    let questionText = {};

    try {
        const resp = await fetch(`../public-questions/${classId}/${subjectId}/${chapterId}.js`);
        const text = await resp.text();
        const sandbox = {};
        new Function("global", text.replace("const QUESTION_BANK", "global.QUESTION_BANK") + "\nreturn global.QUESTION_BANK;")(sandbox);
        (sandbox.QUESTION_BANK || []).forEach(q => questionText[q.id] = q.question);
    } catch (e) {
        // If this fails, we just show IDs instead of text below.
    }

    const top = questionStats.slice(0, 10);
    const maxWrong = Math.max(...top.map(s => s.wrong), 1);

    let html = "<h2>Most Missed Questions</h2>";

    top.forEach(s => {
        const label = questionText[s.questionId] || `Question ID ${s.questionId}`;
        const widthPct = Math.round((s.wrong / maxWrong) * 100);
        html += `
            <div class="stat-row">
                <div class="stat-label">${label}</div>
                <div class="stat-bar-track">
                    <div class="stat-bar-fill" style="width:${widthPct}%;"></div>
                    <span class="stat-bar-count">${s.wrong} wrong / ${s.attempts} attempts</span>
                </div>
            </div>
        `;
    });

    statsDiv.innerHTML = html;

}
