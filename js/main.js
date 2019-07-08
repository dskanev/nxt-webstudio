// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu2");
const menuNav = document.querySelector(".main-menu");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item2");
const arrowBtn = document.querySelector(".arrow-btn");
//Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
arrowBtn.addEventListener("click", scrollTo);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

function scrollTo() {
  window.scrollBy({
    top: 800,
    behavior: "smooth"
  });
}
