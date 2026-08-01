const classId = localStorage.getItem("selectedClass");

const selectedClass = APP_CONFIG.classes.find(c => c.id === classId);

const container = document.getElementById("subjectContainer");

selectedClass.subjects.forEach(subject => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
    
        <h2>${subject.name}</h2>
        
        <button>Select</button>
        
    `;

    card.querySelector("button").onclick = function(){

        localStorage.setItem("selectedSubject",subject.id);

        window.location.href="chapter.html";

    }

    container.appendChild(card);

});