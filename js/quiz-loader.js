// ===============================
// NextGen Learning - Quiz Loader
// ===============================
// Loads the correct question-bank file for the class/subject/chapter the
// student picked, then loads timer.js and quiz.js in the right order.
//
// If APP_CONFIG.settings.serverSideScoring is true, it loads the ANSWER-FREE
// file from public-questions/ (answers are checked later by the server).
// If false, it loads the full file from questions/ (hosted, with answers
// included) and the quiz is scored locally in the browser - simpler, but
// answers are visible in the page source. This is the default mode.

(function () {

    const classId = localStorage.getItem("selectedClass");
    const subjectId = localStorage.getItem("selectedSubject");
    const chapterId = localStorage.getItem("selectedChapter");

    if (!classId || !subjectId || !chapterId) {
        alert("Test session data is missing. Please login again.");
        window.location.href = "login.html";
        return;
    }

    const serverSideScoring =
        window.APP_CONFIG &&
        APP_CONFIG.settings &&
        APP_CONFIG.settings.serverSideScoring;

    window.SERVER_SIDE_SCORING = !!serverSideScoring;

    const questionBankSrc = serverSideScoring
        ? `../public-questions/${classId}/${subjectId}/${chapterId}.js`
        : `../questions/${classId}/${subjectId}/${chapterId}.js`;

    function loadScript(src, onLoad) {

        const script = document.createElement("script");

        script.src = src;
        script.onload = onLoad;

        script.onerror = function () {
            alert("Could not load the question paper for this chapter. Please contact your teacher.\n\nMissing file: " + src);
        };

        document.body.appendChild(script);

    }

    loadScript(questionBankSrc, function () {

        // Optionally shuffle question order (per student, per attempt).
        // Options themselves are never shuffled, so answer-checking by
        // question id stays simple and reliable on both the client and
        // the server.
        const randomize =
            window.APP_CONFIG &&
            APP_CONFIG.settings &&
            APP_CONFIG.settings.randomizeQuestionOrder;

        if (randomize && window.QUESTION_BANK) {

            // Use a per-attempt seed stored in localStorage so the order
            // stays stable if the page refreshes mid-test.
            let order = JSON.parse(localStorage.getItem("questionOrder") || "null");

            if (!order || order.length !== QUESTION_BANK.length) {

                order = QUESTION_BANK.map((q, i) => i);

                // Fisher-Yates shuffle
                for (let i = order.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [order[i], order[j]] = [order[j], order[i]];
                }

                localStorage.setItem("questionOrder", JSON.stringify(order));

            }

            window.QUESTION_BANK = order.map(i => QUESTION_BANK[i]);

        }

        loadScript("../js/timer.js", function () {
            loadScript("../js/quiz.js", function () {
                // quiz.js initialises itself once loaded
            });
        });

    });

})();
