// ===============================
// NextGen Learning - Exam Timer
// ===============================

let timeLeft =

parseInt(localStorage.getItem("timeLeft"))

|| (parseInt(localStorage.getItem("selectedTimeMinutes")) || 60) * 60;

const LOW_TIME_WARNING_SECONDS = 5 * 60; // flash red in the last 5 minutes

const timer = setInterval(function () {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    const timerEl = document.getElementById("timer");

    timerEl.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (timeLeft <= LOW_TIME_WARNING_SECONDS) {
        timerEl.classList.add("timer-warning");
    }

    timeLeft--;

    localStorage.setItem("timeLeft", timeLeft);

    if (timeLeft < 0) {

        clearInterval(timer);

        alert("Time is up! Your test is being submitted.");

        // Submit through the normal flow so answers are actually saved -
        // previously this jumped straight to the result page and lost
        // the student's answers.
        if (typeof window.forceSubmitExam === "function") {
            window.forceSubmitExam();
        } else {
            window.location.href = "result.html";
        }

    }

}, 1000);
