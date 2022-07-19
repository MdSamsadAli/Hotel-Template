window.onscroll = function(){
    myfunc();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myfunc(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menuitem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu(){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
hamburger.addEventListener("click", toggleMenu);