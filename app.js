const hamburger = document.querySelector("#hamburger");

const menu = document.querySelector("#menu");

const line = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  line.forEach((el) => {
    el.classList.toggle("bg-black");
    el.classList.toggle("bg-white");
  });
});
