const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuIcon.classList.toggle("bx-menu");
  menuIcon.classList.toggle("bx-x");
});
