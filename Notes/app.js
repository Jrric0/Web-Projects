const createNoteBtn = document.getElementById("create-note");
const notesContainer = document.querySelector(".notes-container");

let note = document.querySelectorAll(".inputbox");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("Notes");
}

function updateStorage() {
  localStorage.setItem("Notes", notesContainer.innerHTML);
}

createNoteBtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "inputbox";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputbox).appendChild(img);
});

notesContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    event.target.parentElement.remove();
    updateStorage();
  } else if (event.target.tagName === "P") {
    notes = document.querySelectorAll(".inputbox");
    notes.forEach((note) => {
      note.onkeyup = () => {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
