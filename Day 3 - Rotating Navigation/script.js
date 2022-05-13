const toggleEl = document.querySelector(".toggle");
const btnCont = document.querySelector(".toggle__cont");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const blogEl = document.querySelector(".blog");

menuBtn.addEventListener("click", function () {
  toggleEl.classList.add("rotate");
  blogEl.classList.add("blog-rotate");
});

closeBtn.addEventListener("click", function () {
  toggleEl.classList.remove("rotate");
  blogEl.classList.remove("blog-rotate");
});
