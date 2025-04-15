document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const mainNav = document.getElementById("main-nav");

  burgerMenu.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
});
