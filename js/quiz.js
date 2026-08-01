// ===============================
// NextGen Learning Quiz Engine
// ===============================

// Restore current question
let currentQuestion = parseInt(localStorage.getItem("currentQuestion")) || 0;

// Restore previous answers (if any)
const savedAnswers = localStorage.getItem("answers");

if (savedAnswers) {
    const data = JSON.parse(savedAnswers);

    data.forEach((q, i) => {
        if (QUESTION_BANK[i]) {
            QUESTION_BANK[i].userAnswer = q.userAnswer;
        }
    });
}

// Restore "marked for review" flags
let markedForReview = JSON.parse(localStorage.getItem("markedForReview") || "[]");

if (markedForReview.length !== QUESTION_BANK.length) {
    markedForReview = QUESTION_BANK.map(() => false);
}

// Option Labels
const optionLetters = ["A", "B", "C", "D"];

// ===============================
// Question Navigator (palette)
// ===============================
function renderNavigator() {

    const nav = document.getElementById("navigator");

    if (!nav) return;

    nav.innerHTML = "";

    QUESTION_BANK.forEach((q, i) => {

        const btn = document.createElement("button");

        btn.type = "button";
        btn.innerText = i + 1;
        btn.className = "nav-btn";

        if (i === currentQuestion) {
            btn.classList.add("nav-current");
        } else if (markedForReview[i]) {
            btn.classList.add("nav-marked");
        } else if (q.userAnswer !== null) {
            btn.classList.add("nav-answered");
        } else {
            btn.classList.add("nav-unanswered");
        }

        btn.addEventListener("click", function () {
            currentQuestion = i;
            localStorage.setItem("currentQuestion", currentQuestion);
            loadQuestion();
        });

        nav.appendChild(btn);

    });

    const answeredCount = QUESTION_BANK.filter(q => q.userAnswer !== null).length;
    const markedCount = markedForReview.filter(Boolean).length;

    const summary = document.getElementById("navSummary");

    if (summary) {
        summary.innerHTML =
            `<span class="nav-legend nav-answered">&nbsp;</span> Answered (${answeredCount})
             &nbsp;&nbsp;
             <span class="nav-legend nav-marked">&nbsp;</span> Marked for review (${markedCount})
             &nbsp;&nbsp;
             <span class="nav-legend nav-unanswered">&nbsp;</span> Not answered (${QUESTION_BANK.length - answeredCount})`;
    }

}

// ===============================
// Load Question
// ===============================
function loadQuestion() {

    const q = QUESTION_BANK[currentQuestion];

    document.getElementById("progress").innerHTML =
        `Question ${currentQuestion + 1} of ${QUESTION_BANK.length}`;

    document.getElementById("question").innerHTML = q.question;

    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {

        const optionLetter = optionLetters[index];

        const div = document.createElement("div");

        div.style.margin = "10px 0";

        div.innerHTML = `
            <label style="cursor:pointer;font-size:18px;">
                <input
                    type="radio"
                    name="option"
                    value="${optionLetter}"
                    ${q.userAnswer === optionLetter ? "checked" : ""}
                >
                <strong>${optionLetter}.</strong>
                ${option}
            </label>
        `;

        const radio = div.querySelector("input");

        radio.addEventListener("change", function () {

            QUESTION_BANK[currentQuestion].userAnswer = optionLetter;

            localStorage.setItem(
                "answers",
                JSON.stringify(QUESTION_BANK)
            );

            localStorage.setItem(
                "currentQuestion",
                currentQuestion
            );

            renderNavigator();

        });

        optionsDiv.appendChild(div);

    });

    const reviewBtn = document.getElementById("markReviewBtn");

    if (reviewBtn) {
        reviewBtn.innerText = markedForReview[currentQuestion]
            ? "Unmark Review"
            : "Mark for Review";
    }

    renderNavigator();

}

// Initial Load
loadQuestion();

// ===============================
// Mark for Review Button
// ===============================
const markReviewBtn = document.getElementById("markReviewBtn");

if (markReviewBtn) {
    markReviewBtn.addEventListener("click", function () {
        markedForReview[currentQuestion] = !markedForReview[currentQuestion];
        localStorage.setItem("markedForReview", JSON.stringify(markedForReview));
        loadQuestion();
    });
}

// ===============================
// Next Button
// ===============================
document.getElementById("nextBtn").addEventListener("click", function () {

    if (currentQuestion < QUESTION_BANK.length - 1) {

        currentQuestion++;

        localStorage.setItem(
            "currentQuestion",
            currentQuestion
        );

        loadQuestion();

    }

});

// ===============================
// Previous Button
// ===============================
document.getElementById("prevBtn").addEventListener("click", function () {

    if (currentQuestion > 0) {

        currentQuestion--;

        localStorage.setItem(
            "currentQuestion",
            currentQuestion
        );

        loadQuestion();

    }

});

// ===============================
// Submit Logic (shared by the Submit button and the anti-cheat
// auto-submit trigger)
// ===============================
function submitExam(isAuto) {

    // Count attempted questions
    const attempted = QUESTION_BANK.filter(
        q => q.userAnswer !== null
    ).length;

    const remaining = QUESTION_BANK.length - attempted;

    if (!isAuto) {

        const confirmSubmit = confirm(

`You are about to submit your test.

Attempted Questions : ${attempted}

Remaining Questions : ${remaining}

After submission you cannot change your answers.

Do you want to continue?`

        );

        if (!confirmSubmit) {
            return;
        }

    }

    // Disable the button
    const submitBtn = document.getElementById("submitBtn");

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = isAuto ? "Auto-Submitting..." : "Submitting...";
    }

    localStorage.setItem(
        "finalAnswers",
        JSON.stringify(QUESTION_BANK)
    );

    localStorage.setItem(
        "examSubmitted",
        "true"
    );

    if (isAuto) {
        localStorage.setItem("autoSubmitted", "true");
    }

    window.location.href = "result.html";

}

document.getElementById("submitBtn").addEventListener("click", function () {
    submitExam(false);
});

// Exposed so js/anticheat.js can force a submit after repeated violations
window.forceSubmitExam = function () {
    submitExam(true);
};

// ===============================
// Prevent Reopening Submitted Exam
// ===============================
if (localStorage.getItem("examSubmitted") === "true") {

    window.location.href = "result.html";

}

// ===============================
// Warn Before Leaving
// ===============================
window.onbeforeunload = function () {

    return "Your exam is still in progress.";

};
