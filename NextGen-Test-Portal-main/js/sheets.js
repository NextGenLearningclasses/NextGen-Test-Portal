// ===============================
// NextGen Learning - Google Sheet Backend Client
// ===============================
// Talks to the Google Apps Script Web App deployed from
// google-apps-script/Code.gs. See GOOGLE_SHEET_SETUP.md.
//
// Paste your deployed Web App URL below, replacing the placeholder.

const SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzL9gP8vHsSYrFoJvD5VwAZ4FOK7WzOcARrnvZCL8vV4KonFZAN_8YN-BOfQRjSqVX_/exec";

function isSheetConfigured() {
    return SHEET_WEBAPP_URL && SHEET_WEBAPP_URL.indexOf("PASTE_YOUR") === -1;
}

// Generic helper: POST JSON, read the JSON response back.
// Using Content-Type: text/plain avoids a CORS preflight request, which
// Apps Script Web Apps can't answer - this keeps the request "simple" so
// the browser sends it directly and can read the response normally.
async function callSheetBackend(payload) {

    if (!isSheetConfigured()) {
        return { status: "error", message: "not-configured" };
    }

    try {

        const response = await fetch(SHEET_WEBAPP_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(payload)
        });

        return await response.json();

    } catch (err) {
        console.error("Google Sheet backend request failed:", err);
        return { status: "error", message: "network-error" };
    }

}

// Fire-and-forget style result save (used when serverSideScoring is off -
// we've already scored locally, this just logs the result for the teacher)
function sendResultToSheet(payload) {

    if (!isSheetConfigured()) {
        console.warn("Google Sheet URL is not configured yet. Result was NOT sent online. See GOOGLE_SHEET_SETUP.md");
        return;
    }

    callSheetBackend(Object.assign({ action: "submit-log-only" }, payload))
        .catch(() => {});

}

// Server-side scoring: send the student's raw responses, get back the
// score + correct answers + explanations. Used when serverSideScoring is on.
async function submitForServerScoring(payload) {
    return callSheetBackend(Object.assign({ action: "submit" }, payload));
}

// Ask the server whether this mobile number has already completed this
// chapter. Fails open (returns attempted:false) on any network error so a
// connectivity hiccup never locks a student out unfairly.
async function checkPreviousAttempt(mobile, chapterKey) {

    if (!isSheetConfigured()) {
        return { attempted: false };
    }

    const result = await callSheetBackend({
        action: "checkAttempt",
        mobile: mobile,
        chapterKey: chapterKey
    });

    if (result.status !== "success") {
        return { attempted: false };
    }

    return result;

}

// Teacher dashboard: fetch all results (and per-question stats), password
// protected on the server side.
async function fetchDashboardResults(password, chapterKey) {

    return callSheetBackend({
        action: "getResults",
        password: password,
        chapterKey: chapterKey || null
    });

}
