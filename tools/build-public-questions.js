/**
 * NextGen Learning - Build Script
 * --------------------------------
 * Run this with:   node tools/build-public-questions.js
 *
 * What it does:
 *   1. Reads every master question file from question-source-private/
 *      (these contain the full questions AND correct answers).
 *   2. Writes a matching "public" file into
 *      NextGen-Test-Portal-main/public-questions/ that has the questions
 *      and options ONLY - no answers, no explanations. This is the only
 *      file the student's browser ever downloads.
 *   3. Writes an answer-key JSON file per chapter into tools/answer-keys/
 *      - paste this into the "AnswerKeys" tab of your Google Sheet
 *        (see GOOGLE_SHEET_SETUP.md). This file is NOT part of the
 *        website and must never be uploaded to your host.
 *
 * Run this again every time you add or edit a chapter in
 * question-source-private/.
 */

const fs = require("fs");
const path = require("path");

const SOURCE_ROOT = path.join(__dirname, "..", "question-source-private");
const PUBLIC_ROOT = path.join(__dirname, "..", "NextGen-Test-Portal-main", "public-questions");
const LOCAL_MODE_ROOT = path.join(__dirname, "..", "NextGen-Test-Portal-main", "questions");
const KEYS_ROOT = path.join(__dirname, "answer-keys");

function loadQuestionBank(filePath) {
    const src = fs.readFileSync(filePath, "utf8");
    const sandbox = {};
    // The master files are plain "const QUESTION_BANK = [...]" scripts.
    const fn = new Function("global", src.replace("const QUESTION_BANK", "global.QUESTION_BANK") + "\nreturn global.QUESTION_BANK;");
    return fn(sandbox);
}

function walk(dir, base) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let chapters = [];

    entries.forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            chapters = chapters.concat(walk(fullPath, path.join(base, entry.name)));
        } else if (entry.name.endsWith(".js")) {
            const relPath = path.join(base, entry.name); // e.g. class9/science/tissues.js
            chapters.push(relPath);
        }
    });

    return chapters;
}

function main() {

    if (!fs.existsSync(SOURCE_ROOT)) {
        console.error("Could not find question-source-private/ - run this script from the project root.");
        process.exit(1);
    }

    fs.mkdirSync(PUBLIC_ROOT, { recursive: true });
    fs.mkdirSync(LOCAL_MODE_ROOT, { recursive: true });
    fs.mkdirSync(KEYS_ROOT, { recursive: true });

    const chapterFiles = walk(SOURCE_ROOT, "");

    chapterFiles.forEach(relPath => {

        const fullSourcePath = path.join(SOURCE_ROOT, relPath);
        const bank = loadQuestionBank(fullSourcePath);

        // chapterKey e.g. "class9|science|tissues"
        const parts = relPath.split(path.sep);
        const chapterId = parts[parts.length - 1].replace(".js", "");
        const subjectId = parts[parts.length - 2];
        const classId = parts[parts.length - 3];
        const chapterKey = `${classId}|${subjectId}|${chapterId}`;

        // ---- Public file: question + options ONLY ----
        const publicBank = bank.map(q => ({
            id: q.id,
            question: q.question,
            options: q.options,
            userAnswer: null
        }));

        const publicDir = path.join(PUBLIC_ROOT, classId, subjectId);
        fs.mkdirSync(publicDir, { recursive: true });

        const publicFilePath = path.join(publicDir, `${chapterId}.js`);
        fs.writeFileSync(
            publicFilePath,
            "const QUESTION_BANK = " + JSON.stringify(publicBank, null, 2) + ";\n"
        );

        // ---- Local-scoring copy: full bank WITH answers, but written to
        // NextGen-Test-Portal-main/questions/ so it's actually hosted and
        // available for the default (serverSideScoring:false) mode. This
        // is intentionally less secure than public-questions/ - it's what
        // powers the simpler "answers checked in the browser" mode. ----
        const localModeDir = path.join(LOCAL_MODE_ROOT, classId, subjectId);
        fs.mkdirSync(localModeDir, { recursive: true });

        const localModeFilePath = path.join(localModeDir, `${chapterId}.js`);
        fs.writeFileSync(
            localModeFilePath,
            "const QUESTION_BANK = " + JSON.stringify(bank, null, 2) + ";\n"
        );

        // ---- Answer key: id -> {answer, explanation} ----
        const answerKey = {};
        bank.forEach(q => {
            answerKey[q.id] = {
                answer: q.answer,
                explanation: q.explanation || ""
            };
        });

        const keyFilePath = path.join(KEYS_ROOT, `${classId}-${subjectId}-${chapterId}.json`);
        fs.writeFileSync(
            keyFilePath,
            JSON.stringify({ chapterKey: chapterKey, answers: answerKey }, null, 2)
        );

        console.log(`Built: ${chapterKey}  (${bank.length} questions)`);
        console.log(`  -> public file (secure mode):     ${path.relative(process.cwd(), publicFilePath)}`);
        console.log(`  -> local-mode file (default mode): ${path.relative(process.cwd(), localModeFilePath)}`);
        console.log(`  -> answer key export:              ${path.relative(process.cwd(), keyFilePath)}  (paste into the AnswerKeys sheet tab, only needed for secure mode)`);

    });

    console.log("\nDone. Public files are safe to upload. Answer-key files in tools/answer-keys/ must NOT be uploaded anywhere - paste their contents into the AnswerKeys tab of your Google Sheet instead.");

}

main();
