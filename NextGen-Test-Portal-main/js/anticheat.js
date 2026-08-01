// ===============================
// NextGen Learning - Anti-Cheating Module
// ===============================
// Loaded only on the quiz page. It:
//   1. Blocks right-click, text selection, copy/cut/paste and drag.
//   2. Blocks common Developer Tools / save / print keyboard shortcuts.
//   3. Watches for the student leaving full-screen mode.
//   4. Watches for the student switching tabs / minimising the window.
//   5. Logs every violation (with a timestamp) to localStorage so it can be
//      sent to the teacher along with the result.
//   6. Auto-submits the test if violations cross MAX_VIOLATIONS.
//
// IMPORTANT (please read): this is client-side protection. It stops casual
// cheating (copying questions, opening a new tab, using shortcut keys) but
// it CANNOT stop a student from using a second phone/device to look up
// answers, since that happens outside the browser. For high-stakes exams,
// pair this with in-person invigilation.

const MAX_VIOLATIONS =
    (window.APP_CONFIG && APP_CONFIG.settings && APP_CONFIG.settings.maxViolations) || 3;

let violations = JSON.parse(localStorage.getItem("cheatLog") || "[]");

function logViolation(type) {

    violations.push({
        type: type,
        time: new Date().toISOString()
    });

    localStorage.setItem("cheatLog", JSON.stringify(violations));

    showWarning();
}

// ---------- 1. Block copy / right-click / text selection ----------

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("cut", e => e.preventDefault());
document.addEventListener("paste", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("dragstart", e => e.preventDefault());

// ---------- 2. Block common Developer Tools / save / print shortcuts ----------

document.addEventListener("keydown", function (e) {

    const key = e.key.toLowerCase();

    const blockedCombo =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        (e.ctrlKey && ["u", "s", "p"].includes(key)) ||
        (e.metaKey && e.altKey && ["i", "j", "c"].includes(key)); // Mac

    if (blockedCombo) {
        e.preventDefault();
        logViolation("blocked-shortcut:" + e.key);
    }

});

// ---------- 3. Full-screen enforcement ----------

function enterFullscreen() {

    const el = document.documentElement;

    if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();

}

function isFullscreen() {
    return !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
    );
}

function handleFullscreenChange() {
    if (!isFullscreen()) {
        logViolation("exited-fullscreen");
    }
}

document.addEventListener("fullscreenchange", handleFullscreenChange);
document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
document.addEventListener("msfullscreenchange", handleFullscreenChange);

// ---------- 4. Tab switch / window blur detection ----------

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        logViolation("tab-switched");
    }
});

window.addEventListener("blur", function () {
    logViolation("window-blur");
});

// ---------- 5. Warning overlay ----------

function showWarning() {

    const count = violations.length;

    let overlay = document.getElementById("cheatOverlay");

    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "cheatOverlay";
        overlay.className = "cheat-overlay";
        document.body.appendChild(overlay);
    }

    if (count >= MAX_VIOLATIONS) {

        overlay.innerHTML = `
            <div class="cheat-box">
                <h2>&#9888; Test Auto-Submitted</h2>
                <p>${count} violations were recorded (leaving full-screen / switching tabs / blocked shortcuts). Your test has been submitted automatically.</p>
            </div>
        `;

        overlay.style.display = "flex";

        setTimeout(() => {
            if (typeof window.forceSubmitExam === "function") {
                window.forceSubmitExam();
            }
        }, 1500);

        return;
    }

    overlay.innerHTML = `
        <div class="cheat-box">
            <h2>&#9888; Warning ${count} of ${MAX_VIOLATIONS}</h2>
            <p>Leaving full-screen mode, switching tabs, or using shortcut keys is not allowed during the test.</p>
            <p>This has been recorded. Further attempts will auto-submit your test.</p>
            <button id="resumeExamBtn">Resume Test</button>
        </div>
    `;

    overlay.style.display = "flex";

    document.getElementById("resumeExamBtn").onclick = function () {
        overlay.style.display = "none";
        enterFullscreen();
    };

}

// If the page loads (e.g. a refresh) while not in full-screen, try to
// re-enter automatically; browsers may block this silently since it's not
// a direct user gesture, in which case the warning overlay above will
// prompt the student to click back in.
window.addEventListener("load", function () {
    if (!isFullscreen()) {
        enterFullscreen();
    }
});
