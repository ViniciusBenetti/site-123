const menuOpened = document.querySelector("header i");
const menuClosed = document.querySelector(".menu i");
const returnToMain = document.querySelector(".return");



function openMenu(){
    const menu = document.querySelector(".menu");
    menu.style.transform = "translateX(0vw)";
    menu.style.transition = "all 0.5s ease-in-out";
    menu.style.visibility = "visible";
}
function closeMenu(){
    const menu = document.querySelector(".menu");
    menu.style.transition = "all 0.5s ease-in-out";
    menu.style.transform = "translateX(100vw)";
    menu.style.visibility = "hidden";

}