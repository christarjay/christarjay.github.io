// add sticky bar
let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

window.onscroll = function navScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}