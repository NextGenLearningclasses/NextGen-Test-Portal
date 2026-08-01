# What's new in this version

## 1. Question navigator + mark for review

The quiz page now shows a clickable grid of every question (green =
answered, amber = marked for review, white = not answered) so students
can jump around and review before submitting, plus a **"Mark for
Review"** button.

## 2. Low-time warning + a real bug fix

The timer now flashes red in the last 5 minutes. Also fixed a real bug:
previously, when time ran out, the app jumped straight to the results
page **without saving the student's answers** - anyone who ran out of
time lost their whole test. It now submits properly through the normal
flow.

## 3. Question randomization

Each student sees questions in a shuffled order (stored per-attempt, so
it stays consistent if they refresh). This stops students sitting near
each other from copying off the same question at the same time. Answer
option order is intentionally left unshuffled to keep scoring reliable.

## 4. Post-submission review with explanations

After submitting, students can see which answers were right/wrong along
with the explanation for each question (the `explanation` field you
already write for every question). Turn this off per-chapter by setting
`showReview: false` in `data/config.js`.

## 5. Negative marking (optional, per chapter)

Set `negativeMarking` in a chapter's config entry (e.g. `0.25`) to deduct
that many marks per wrong answer. Default is `0` (no negative marking),
matching the old behaviour.

## 6. Secure server-side scoring (optional)

Previously, the full answer key was sent to the student's browser inside
the question file - a technically savvy student could view it. Now:

- **`question-source-private/`** holds your master files (with answers) -
  keep this on your own computer, never upload it.
- **`public-questions/`** holds answer-free files (auto-generated) - this
  is the only version that ever reaches the browser.
- Run `node tools/build-public-questions.js` to regenerate both, plus an
  answer-key export you paste into your Google Sheet's "AnswerKeys" tab.
- Turn it on with `serverSideScoring: true` in `data/config.js`. When on,
  the Apps Script backend scores the test and only reveals correct
  answers after submission.

This is **off by default** so nothing breaks if you don't set it up -
the app keeps working exactly as before (client-side scoring) until you
opt in. See `GOOGLE_SHEET_SETUP.md` Step 5 for the full walkthrough.

## 7. Block repeat attempts (optional)

Set `preventReattempts: true` (alongside `serverSideScoring: true`) in
`data/config.js` to stop a student from completing the same chapter test
twice, checked by mobile number against your Google Sheet. Fails open (
lets them proceed) if the check can't reach the server, so a connectivity
hiccup never wrongly locks someone out.

## 8. Teacher dashboard

A new password-protected page (`pages/teacher-dashboard.html`, linked
from the homepage footer) shows:
- All results in a sortable table
- Summary cards (attempts, average score, how many had integrity warnings)
- A "Most Missed Questions" breakdown per chapter, so you can see exactly
  what to re-teach

Set the password once via Apps Script → Project Settings → Script
Properties → `DASHBOARD_PASSWORD` (see `GOOGLE_SHEET_SETUP.md` Step 6).

## 9. Chapter selection actually works + new Tissues test

(Carried over from the previous update, still true here.) The quiz page
dynamically loads `<class>/<subject>/<chapter>` based on what the student
actually picked, instead of always loading the same file. Class 9 →
Science → Tissues (75 questions) is included.

---

## Deferred for a future round (flagging honestly, not built yet)

- A CSV/spreadsheet importer UI for adding questions without hand-writing
  JS - `tools/build-public-questions.js` is a step in this direction, but
  there's no upload interface yet.
- Hindi language toggle
- PDF result certificates
- Dark mode / theme toggle

## Folder structure at a glance

```
NextGen-Test-Portal-main/       <- upload ONLY this folder's contents to your host
  questions/                    <- with-answers files, used by the default mode (serverSideScoring:false)
  public-questions/             <- answer-free question files, used when serverSideScoring:true
  google-apps-script/Code.gs    <- paste into script.google.com
  data/config.js                <- all your settings live here
  ...

question-source-private/        <- KEEP LOCAL, your master files (edit these)
tools/
  build-public-questions.js     <- run: node tools/build-public-questions.js
  answer-keys/                  <- generated, paste into the Sheet's AnswerKeys tab (only needed for secure mode)
```

Note: in the default mode (`serverSideScoring: false`), `NextGen-Test-Portal-main/questions/` **does** contain the correct answers, because that's how local/in-browser scoring works. This is fine to host - it's the same trade-off the original portal always had. If you want answers to never reach the browser, turn on `serverSideScoring: true` (see `GOOGLE_SHEET_SETUP.md`), which uses `public-questions/` instead.
