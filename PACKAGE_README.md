# NextGen Test Portal - Package Contents

There are three top-level folders in this zip. They are NOT all meant to
be uploaded to your host.

## 📤 NextGen-Test-Portal-main/  — upload this one

This is the actual website. Upload the **contents** of this folder to
your host (GitHub Pages, Netlify, etc). Everything a student's browser
needs is in here, including `public-questions/` (answer-free question
files - safe to publish).

## 💻 question-source-private/  — keep on your computer only

Your master question files, **with the correct answers included**. This
is what you edit when writing or changing questions. Never upload this
folder anywhere public - if you do, students could find the answer key.

## 🔧 tools/  — keep on your computer only

Run `node tools/build-public-questions.js` from this folder (needs
Node.js installed) whenever you add or edit a chapter in
`question-source-private/`. It regenerates the answer-free files in
`NextGen-Test-Portal-main/public-questions/`, and writes answer-key
exports to `tools/answer-keys/` for you to paste into your Google Sheet.

---

## Where to start

- First time setting up? Read **GOOGLE_SHEET_SETUP.md** (inside
  `NextGen-Test-Portal-main/`) - it walks through connecting your Google
  Sheet, and optionally turning on secure server-side scoring.
- Want a rundown of everything new in this version? Read
  **README_UPDATES.md** (also inside `NextGen-Test-Portal-main/`).
