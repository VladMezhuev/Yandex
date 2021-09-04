const menu = document.getElementsByClassName("js-menu")[0];
const navOpen = document.getElementsByClassName("js-open")[0];
const navClose = document.getElementsByClassName("js-close")[0];
const menuLink = [...document.getElementsByClassName("js-link")];

// Open menu
function openMenu() {
  menu.classList.add("is-active");
  navOpen.classList.add("is-active");
}

if (navOpen) {
  navOpen.addEventListener("click", openMenu);
}

// Close menu
function closeMenu() {
  menu.classList.remove("is-active");
  navOpen.classList.remove("is-active");
}

if (navClose) {
  navClose.addEventListener("click", closeMenu);
}

menuLink.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
window.addEventListener("scroll", closeMenu);
