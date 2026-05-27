import '@fortawesome/fontawesome-free/css/all.min.css';

const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector(".header .flex .nav");

menuBtn.addEventListener('click',()=>{
    nav.classList.toggle("active");
})