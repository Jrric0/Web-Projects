const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

function AddTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTasks();
}

addButton.addEventListener("click", AddTask);

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTasks();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTasks();
    }
  },
  false
);

function saveTasks() {
  localStorage.setItem("Tasks", listContainer.innerHTML);
}

function getTasks() {
  listContainer.innerHTML = localStorage.getItem("Tasks");
}
getTasks();
