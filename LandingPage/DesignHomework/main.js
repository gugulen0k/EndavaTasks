import "./style.css";
import { init } from "./scripts/sphere";

init();

const items = document.querySelector(".features ul");
items.addEventListener("mouseover", (e) => {
  if (e.target.nodeName === "LI" || e.target.nodeName === "IMG") {
    document.querySelector(".description .text").textContent =
      e.target.dataset.text;
  }
});

window.onscroll = function () {
  let button = document.querySelector("#sticky-button button");
  let sticky = button.offsetTop;
  console.log(sticky);

  if (window.pageYOffset > sticky) {
    button.classList.add("sticky");
  }
  if (window.pageYOffset < 500) {
    button.classList.remove("sticky");
  }
};
