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
window.onload = function () {
  var swiper = new Swiper(".testimonials-section", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBulets: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1,
      },
      950: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  const menu_btn = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const body = document.body;
  menu_btn.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    menu_btn.classList.toggle("is-active");

    if (visibility === "false") {
      nav.setAttribute("data-visible", true);
      menu_btn.setAttribute("aria-expanded", true);
      body.style.overflowY = "hidden";
    } else if (visibility === "true") {
      nav.setAttribute("data-visible", false);
      menu_btn.setAttribute("aria-expanded", false);
      body.style.overflowY = "auto";
    }
  });
};
