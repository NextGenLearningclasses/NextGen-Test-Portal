// ===============================
// NextGen Learning - Chapter Selection
// ===============================

const classId = localStorage.getItem("selectedClass");
const subjectId = localStorage.getItem("selectedSubject");

const selectedClass = APP_CONFIG.classes.find(c => c.id === classId);
const selectedSubject = selectedClass.subjects.find(s => s.id === subjectId);

const container = document.getElementById("chapterContainer");

selectedSubject.chapters.forEach(chapter => {

    const card = document.createElement("div");

    card.className = "card";

    if (chapter.available) {

        card.innerHTML = `
            <h2>${chapter.title}</h2>
            <p>${chapter.questionCount} Questions &bull; ${chapter.timeMinutes} Minutes</p>
            <button>Select</button>
        `;

        card.querySelector("button").addEventListener("click", () => {

            localStorage.setItem("selectedChapter", chapter.id);
            localStorage.setItem("selectedChapterTitle", chapter.title);
            localStorage.setItem("selectedQuestionCount", chapter.questionCount);
            localStorage.setItem("selectedTimeMinutes", chapter.timeMinutes);

            window.location.href = "login.html";

        });

    } else {

        card.innerHTML = `
            <h2>${chapter.title}</h2>
            <p>Coming Soon</p>
            <button disabled style="opacity:.5;cursor:not-allowed;">Not Available</button>
        `;

    }

    container.appendChild(card);

});
