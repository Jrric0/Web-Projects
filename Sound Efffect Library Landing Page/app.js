function updateColspan() {
  const th = document.getElementById("table-heading");
  const isMobole = window.innerWidth <= 768;

  if (isMobole) {
    th.colSpan = 4;
  } else {
    th.colSpan = 6;
  }
}

window.addEventListener("load", updateColspan);
window.addEventListener("resize", updateColspan);
