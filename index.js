const hamburger = document.querySelector("i.hamburger");
const navUl = document.querySelector("ul.nav-links");
hamburger.addEventListener("click", ()=>{
    navUl.classList.toggle("show");
})