const conteiner = document.querySelector(".conteiner");
const nav = document.querySelector("nav");

/* SetIcons */
const menuIcon = document.createElement("img");
const menuClose = document.createElement("img");
setMenu();
setClose();

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
    addMenuBar();
    menuClose.onclick = () => {
      removeMenuBar();
      nav.appendChild(menuIcon);
    };
  };
}

/* Refactor functions */
function setMenu() {
  menuIcon.classList.add("nav-menu");
  menuIcon.setAttribute("src", "../assets/images/icon-menu.svg");
}

function setClose() {
    menuClose.classList.add("nav-menuClose");
    menuClose.setAttribute("src", "../assets/images/icon-menu-close.svg");
}

function addMenuBar() {
    nav.removeChild(menuIcon);
  nav.appendChild(menuClose);
  conteiner.appendChild(menuBar);
  menuBar.appendChild(menuUl);
}

function removeMenuBar() {
    conteiner.removeChild(menuBar);
    nav.removeChild(menuClose);
}