// ===============================
// NextGen Learning - App Configuration
// ===============================
// Each chapter can carry these fields:
//   available     -> true only if a matching question-bank file exists at
//                     public-questions/<classId>/<subjectId>/<chapterId>.js
//   questionCount -> how many questions that file contains
//   timeMinutes   -> exam duration for that specific test
//   negativeMarking -> marks deducted per wrong answer (0 = no negative marking)
//   showReview    -> after submitting, can the student see correct answers
//                    + explanations? (set false for a "no review" test)
//
// TO ADD A NEW TEST LATER:
//   1. Write the full question bank (with correct answers) in
//      question-source-private/<classId>/<subjectId>/<newChapterId>.js
//   2. Run:  node tools/build-public-questions.js
//      This creates the answer-free file students load, and an answer-key
//      JSON file to paste into the "AnswerKeys" tab of your Google Sheet.
//   3. Add a chapter entry below with the same id, available:true, and the
//      correct questionCount/timeMinutes.

const APP_CONFIG = {

    // Global settings - one place to tune behaviour across the whole app
    settings: {

        // If true, answers are checked on the server (Google Apps Script)
        // and never sent to the student's browser - the secure option.
        // Requires the Google Sheet + AnswerKeys tab to be set up first
        // (see GOOGLE_SHEET_SETUP.md). If you haven't done that yet, leave
        // this as false so the app keeps working the old (simpler) way.
        serverSideScoring: false,

        // Shuffle the order questions appear in for each student, so
        // students sitting near each other don't see the same question at
        // the same time. Answer options are NOT shuffled (kept in original
        // order) to keep answer-checking simple and reliable.
        randomizeQuestionOrder: true,

        // Number of anti-cheating violations (see js/anticheat.js) allowed
        // before the test is auto-submitted.
        maxViolations: 3,

        // Block a student from taking the same chapter test twice, based
        // on their mobile number. Requires serverSideScoring to be on
        // (checked against your Google Sheet).
        preventReattempts: false

    },

    classes: [

        {
            id: "class8",
            name: "Class 8",

            subjects: [

                {
                    id: "science",
                    name: "Science",
                    chapters: [
                        {
                            id: "crop",
                            title: "Crop Production and Management",
                            available: false,
                            questionCount: 0,
                            timeMinutes: 0,
                            negativeMarking: 0,
                            showReview: true
                        }
                    ]
                },

                {
                    id: "math",
                    name: "Mathematics",
                    chapters: [
                        {
                            id: "number",
                            title: "Rational Numbers",
                            available: false,
                            questionCount: 0,
                            timeMinutes: 0,
                            negativeMarking: 0,
                            showReview: true
                        }
                    ]
                }

            ]
        },

        {
            id: "class9",
            name: "Class 9",

            subjects: [

                {
                    id: "science",
                    name: "Science",
                    chapters: [

                        {
                            id: "cell",
                            title: "Cell: The Building Block of Life",
                            available: true,
                            questionCount: 60,
                            timeMinutes: 60,
                            negativeMarking: 0,
                            showReview: true
                        },

                        {
                            id: "tissues",
                            title: "Tissues",
                            available: true,
                            questionCount: 75,
                            timeMinutes: 75,
                            negativeMarking: 0,
                            showReview: true
                        }

                    ]
                },

                {
                    id: "math",
                    name: "Mathematics",
                    chapters: [

                        {
                            id: "number",
                            title: "Number Systems",
                            available: false,
                            questionCount: 0,
                            timeMinutes: 0,
                            negativeMarking: 0,
                            showReview: true
                        }

                    ]
                }

            ]
        },

        {
            id: "class10",
            name: "Class 10",

            subjects: [

                {
                    id: "science",
                    name: "Science",
                    chapters: [

                        {
                            id: "life",
                            title: "Life Processes",
                            available: true,
                            questionCount: 60,
                            timeMinutes: 60,
                            negativeMarking: 0,
                            showReview: true
                        }

                    ]
                },

                {
                    id: "math",
                    name: "Mathematics",
                    chapters: [

                        {
                            id: "real",
                            title: "Real Numbers",
                            available: false,
                            questionCount: 0,
                            timeMinutes: 0,
                            negativeMarking: 0,
                            showReview: true
                        }

                    ]
                }

            ]
        }

    ]

};