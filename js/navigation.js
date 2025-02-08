const navEl = document.querySelector(".nav-links");
const btnHamBurgerEl = document.querySelector(".hamburger-menu");

btnHamBurgerEl.addEventListener("click", () => {
  btnHamBurgerEl.classList.toggle("open");
  navEl.classList.toggle("open");
});
