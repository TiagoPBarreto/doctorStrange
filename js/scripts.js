const menu = document.querySelector(".menu-burguer-container")

const active = () => menu.classList.toggle('active')

menu.addEventListener("click", active)