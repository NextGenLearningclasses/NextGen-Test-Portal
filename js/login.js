document.getElementById("loginBtn").onclick = async function () {

    const student = {

        name: document.getElementById("name").value,

        mobile: document.getElementById("mobile").value,

        school: document.getElementById("school").value,

        class: localStorage.getItem("selectedClass"),

        subject: localStorage.getItem("selectedSubject"),

        chapter: localStorage.getItem("selectedChapter"),

        chapterTitle: localStorage.getItem("selectedChapterTitle")

    };

    // Check all fields
    if (
        student.name.trim() === "" ||
        student.mobile.trim() === "" ||
        student.school.trim() === ""
    ) {

        alert("Please fill all the details.");

        return;

    }

    // Optional: block a student from taking the same chapter test twice.
    // Requires serverSideScoring + preventReattempts to both be enabled in
    // data/config.js, and the Google Sheet backend to be set up. Fails
    // open (lets the student proceed) on any error, so a network hiccup
    // never wrongly locks someone out.
    const settings = (window.APP_CONFIG && APP_CONFIG.settings) || {};

    if (settings.preventReattempts && settings.serverSideScoring) {

        const loginBtn = document.getElementById("loginBtn");
        loginBtn.disabled = true;
        loginBtn.innerText = "Checking...";

        const chapterKey = `${student.class}|${student.subject}|${student.chapter}`;

        try {

            const check = await checkPreviousAttempt(student.mobile, chapterKey);

            if (check.attempted) {
                alert("Our records show this mobile number has already completed this test. Please contact your teacher if you think this is a mistake.");
                loginBtn.disabled = false;
                loginBtn.innerText = "START EXAM";
                return;
            }

        } finally {
            loginBtn.disabled = false;
            loginBtn.innerText = "START EXAM";
        }

    }

    // Clear previous exam data
    localStorage.removeItem("answers");
    localStorage.removeItem("finalAnswers");
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("timeLeft");
    localStorage.removeItem("examSubmitted");
    localStorage.removeItem("autoSubmitted");
    localStorage.removeItem("cheatLog");
    localStorage.removeItem("markedForReview");
    localStorage.removeItem("questionOrder");

    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );

    window.location.href = "instructions.html";

};
