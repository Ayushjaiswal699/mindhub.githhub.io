/*--Toggle Sideshow*/
let navBar = document.querySelector("nav");
let myNav = document.getElementById("nav-bar");
let navLinks = document.querySelectorAll("li");
let hamMenu = document.getElementById("ham-menu");
hamMenu.addEventListener("click", () => {
    myNav.classList.toggle("active");
    hamMenu.classList.toggle("fa-times");
});

navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        myNav.classList.remove('active');
        hamMenu.classList.toggle("fas fa-bars");
    });
});

window.onscroll = function() {
    // scroll indicator

    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight;
    document.documentElement.clientHeight;
    let scroll = (pos * 100) / calcHeight;
    document.getElementById("progress").style.width = `${ scroll }%`;

    // scroll To top button

    let scrollTopButton = document.getElementById("scroll-top-btn");
    if (pos > 300) {
        scrollTopButton.style.display = "grid";
    } else {
        scrollTopButton.style.display = "none";
    }

    scrollTopButton.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
};