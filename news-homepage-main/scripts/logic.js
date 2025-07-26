const menu = document.getElementById("menu-mobile");
const menuIcon = document.getElementById("menu_icon");
const closeMenu = document.getElementById("close_menu_icon");

menuIcon.addEventListener("click", () => {
  menu.style.right = "0";
  closeMenu.style.right = "20px";
});

closeMenu.addEventListener("click", () => {
  menu.style.right = "-100%";
  closeMenu.style.right = "-100%";
});

