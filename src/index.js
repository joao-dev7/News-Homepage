const conteiner = document.querySelector(".conteiner")
const nav = document.querySelector("nav")
const menuIcon = document.createElement("img")

menuIcon.classList.add("nav-menu")
menuIcon.setAttribute('src', '../assets/images/icon-menu.svg')

const menuBar = document.createElement("div")
menuBar.classList.add("conteiner-menuBar")

const menuClose = document.createElement("img")
menuClose.classList.add("conteiner-menuBar-menuClose")
menuClose.setAttribute('src', '../assets/images/icon-menu-close.svg')

if (screen.width <= 990) {
    nav.appendChild(menuIcon)
    
    menuIcon.onclick = () => {
        conteiner.appendChild(menuBar)
        conteiner.appendChild(menuClose)
        menuClose.onclick = () => {
            conteiner.removeChild(menuBar)
            conteiner.removeChild(menuClose)
        }
    }
}