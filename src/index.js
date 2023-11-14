const conteiner = document.querySelector(".conteiner");
const nav = document.querySelector("nav");

/* SetIcons */
const menuIcon = document.createElement("img");
menuIcon.classList.add("nav-menu");
menuIcon.src = "../assets/images/icon-menu.svg";

const menuClose = document.createElement("img");
menuClose.classList.add("nav-menuClose");
menuClose.src = "../assets/images/icon-menu-close.svg";

/* CloneUl*/
const ul = document.querySelector("ul");
const menuUl = ul.cloneNode(true);
menuUl.classList.add("menuBar-ul");

/* SetMenuBar*/
const menuBar = document.createElement("div");
menuBar.classList.add("conteiner-menuBar");

/* Menu display add */
if (window.innerWidth <= 420) {
  nav.appendChild(menuIcon);
  menuIcon.onclick = () => {
    nav.removeChild(menuIcon);
    addMenuBar();
    menuClose.onclick = () => {
      nav.appendChild(menuIcon);
      removeMenuBar();
    };
  };
}

/* Refactor functions */

function addMenuBar() {
  nav.appendChild(menuClose);
  conteiner.appendChild(menuBar);
  menuBar.appendChild(menuUl);
}

function removeMenuBar() {
  conteiner.removeChild(menuBar);
  nav.removeChild(menuClose);
}
