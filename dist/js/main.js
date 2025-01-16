// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

// right side
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  showMenu = !showMenu;
  menu.classList.toggle("show", showMenu);
  menuNav.classList.toggle("show", showMenu);
  menuBranding.classList.toggle("show", showMenu);
  navItems.forEach((item) => item.classList.toggle("show", showMenu));
  menuBtn.classList.toggle("close", showMenu);
}
