const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector("nav-ul");
const closeIcon = document.getElementById("close");
if(window.matchMedia("(max-width: 740px)")){
hamburger.addEventListener("click", ()=>{
    navUl.classList.add("show");
    hamburger.style.display="none";
    closeIcon.classList.replace("close", "close2");
})
closeIcon.addEventListener("click",()=>{
    navUl.classList.remove("show");
hamburger.style.display="block";
closeIcon.classList.replace("close2", "close");
})}
else{
    hamburger.style.display = "none"
    closeIcon.style.display = "none"
}