const btnsEl = document.querySelector(".progress__btn");
const progressEl = document.querySelector(".progress");
const progressItemEl = document.querySelectorAll(".progress__list__item");
const progressLineEl = document.querySelectorAll(".progress__list__item--line");

let count = 1;
document.getElementById("btn__next").disabled = false;
btnsEl.addEventListener("click", function (e) {
  const btn = e.target;

  if (btn.closest(".progress__btn--next")) {
    document.getElementById("btn__prev").disabled = false;

    progressItemEl.forEach((item) => {
      if (item.dataset.item == count) {
        console.log(count);
        if (item.classList.contains("active--item")) {
          const line = item.querySelector(".progress__list__item--line");
          line.classList.add("active--line");
          count++;

          if (count === 4) {
            document.getElementById("btn__next").disabled = true;
          }
        }
        if (item.dataset.item == count) {
          item.classList.add("active--item");
        }
      }
    });
  }

  if (btn.closest(".progress__btn--prev")) {
    progressItemEl.forEach((item) => {
      if (item.dataset.item == count && count > 0) {
        if (item.classList.contains("active--item")) {
          const line = item.querySelector(".progress__list__item--line");
          if (line !== null) {
            line.classList.remove("active--line");
          }

          if (count > 1) {
            item.classList.remove("active--item");
          }
          count--;

          if (count === 0) {
            document.getElementById("btn__prev").disabled = true;
            document.getElementById("btn__next").disabled = false;
          }
        }
      }
    });
  }
});
