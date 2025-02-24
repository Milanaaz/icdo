document.addEventListener("DOMContentLoaded", function () {
    const navbarMain = document.querySelector(".navbar-main");
    const navbarTop = document.querySelector(".navbar-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > navbarTop.offsetHeight) {
            navbarMain.classList.add("fixed-navbar");
        } else {
            navbarMain.classList.remove("fixed-navbar");
        }
    });
});


