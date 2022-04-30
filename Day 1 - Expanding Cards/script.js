const cardImgEl = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".container");

cardContainer.addEventListener("click", function (e) {
  const img = e.target;

  cardImgEl.forEach((img) => {
    img.classList.remove("card--active");
  });

  img.closest(".card")
    ? img.closest(".card").classList.add("card--active")
    : "";
});
