# Setting up the Google Sheet backend

This connects your test portal to a Google Sheet so results appear there
automatically, and (optionally) enables secure server-side scoring,
duplicate-attempt blocking, and the teacher dashboard. Takes about
10 minutes, one-time setup.

## Step 1 — Create the results Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new,
   blank spreadsheet.
2. Name it something like **"NextGen Test Results"**.

## Step 2 — Add the Apps Script

1. In that Sheet, click **Extensions → Apps Script**.
2. Delete anything in the editor (the default `myFunction() {}` stub).
3. Open `google-apps-script/Code.gs` from this project, copy its entire
   contents, and paste it into the Apps Script editor.
4. Click the **Save** icon (or Ctrl+S).

## Step 3 — Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me (your account)
   - **Who has access:** Anyone
4. Click **Deploy**.
5. The first time, Google will ask you to authorize the script - click
   through the consent screen (your account → Advanced →
   "Go to (project name)" → Allow). This is normal for scripts you own.
6. Copy the **Web app URL**. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## Step 4 — Connect the portal to your Sheet

1. Open `js/sheets.js`.
2. Replace the placeholder:
   ```js
   const SHEET_WEBAPP_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
   ```
   with your actual Web App URL.

At this point, results will log to your Sheet even with the default
settings (`serverSideScoring: false` in `data/config.js`). The rest of the
steps below are only needed if you want the extra security/features.

---

## Step 5 (optional but recommended) — Turn on server-side scoring

By default the app checks answers in the student's browser, which means
the correct answers technically travel to their device (though the review
screen only shows them after submission). For higher-stakes tests, turn on
server-side scoring so answers never reach the browser until after the
test is locked in.

1. **Set a dashboard password** (needed either way, see Step 6) and fill
   in the AnswerKeys tab:
   - In the Apps Script editor, run `node tools/build-public-questions.js`
     locally first (from the project root) - this creates a JSON file per
     chapter inside `tools/answer-keys/`.
   - In your Sheet, add a new tab named exactly **AnswerKeys** with two
     columns: `ChapterKey` and `AnswerKeyJSON`.
   - For each chapter, add a row: put the chapter key (e.g.
     `class9|science|tissues`) in column A, and paste the **entire
     contents** of the matching file from `tools/answer-keys/` into
     column B.
2. In `data/config.js`, set:
   ```js
   settings: {
     serverSideScoring: true,
     ...
   }
   ```
3. Make sure the quiz loads from `public-questions/` (this happens
   automatically once `serverSideScoring` is `true` - see
   `js/quiz-loader.js`).

**Important:** `question-source-private/` (your master files, with
answers) must **never** be uploaded to your live site/host - only the
`NextGen-Test-Portal-main` folder should be hosted. Keep
`question-source-private/` and `tools/` on your own computer.

## Step 6 — Set the teacher dashboard password

1. In the Apps Script editor, click the gear icon (**Project Settings**).
2. Scroll to **Script Properties** → **Add script property**.
3. Name: `DASHBOARD_PASSWORD`, Value: any password you choose.
4. Save.
5. Open `pages/teacher-dashboard.html` in your browser (or click "Teacher
   Dashboard" in the footer of the home page), enter that password, and
   you'll see all results plus per-question analytics.

## Step 7 (optional) — Block repeat attempts

In `data/config.js`, set:
```js
settings: {
  serverSideScoring: true,
  preventReattempts: true,
  ...
}
```
This requires `serverSideScoring: true` as well, since it checks against
the Sheet before letting a student start.

---

## If you ever change the Apps Script

Every time you edit `Code.gs`, you must create a **new deployment
version** (Deploy → Manage deployments → Edit (pencil icon) → New
version → Deploy) for the changes to take effect - saving alone is not
enough.

## Adding a new test after server-side scoring is on

1. Write the full question bank (with correct answers) in
   `question-source-private/<class>/<subject>/<newChapterId>.js`.
2. Run `node tools/build-public-questions.js` - this regenerates every
   public file and answer-key export.
3. Add the new chapter to `data/config.js`.
4. Paste the new chapter's answer-key JSON (from `tools/answer-keys/`)
   into a new row in the **AnswerKeys** tab.
5. Re-upload the updated `NextGen-Test-Portal-main` folder.

## Notes

- Requests use `Content-Type: text/plain` to avoid CORS preflight issues
  with Apps Script; this is standard practice for Apps Script Web Apps.
- If a result doesn't appear, check the browser console for errors and
  confirm the URL in `js/sheets.js` is correct and ends in `/exec`.
