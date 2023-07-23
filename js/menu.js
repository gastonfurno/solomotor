const openMenu = document.querySelector("#abrir-menu");
const closeMenu = document.querySelector("#cerrar-menu");
const navbar = document.querySelector ("#navbar");

openMenu.addEventListener("click", () => {
    navbar.classList.add("active");
})
closeMenu.addEventListener("click", () => {
    navbar.classList.remove("active");
})