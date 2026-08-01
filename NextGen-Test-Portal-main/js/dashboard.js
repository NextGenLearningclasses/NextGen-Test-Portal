const container = document.getElementById("classContainer");

APP_CONFIG.classes.forEach(cls => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h2>${cls.name}</h2>
        <button>Select</button>
    `;

    card.querySelector("button").addEventListener("click", () => {

        localStorage.setItem("selectedClass", cls.id);

        window.location.href="subject.html";

    });

    container.appendChild(card);

});