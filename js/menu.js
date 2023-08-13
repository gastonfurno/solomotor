const navbar = document.querySelector("#navbar");
const abrirmenu = document.querySelector("#abrirmenu");
const cerrarmenu = document.querySelector ("#cerrarmenu");

abrirmenu.addEventListener("click", () => {
    navbar.classList.add("active");
})
cerrarmenu.addEventListener("click", () => {
    navbar.classList.remove("active");
})