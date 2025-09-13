const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function shownotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    addEvents(); // bind events after loading notes
}
shownotes();

function saveNotes() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "img/delete-removebg-preview.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    inputBox.onkeyup = saveNotes;
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveNotes();
    }
});

// Rebind events after loading from localStorage
function addEvents() {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.onkeyup = saveNotes;
    });
}
