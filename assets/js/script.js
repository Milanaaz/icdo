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


document.addEventListener("scroll", function () {
    let contactTitle = document.querySelector(".contact-title");
    let scrollY = window.scrollY;
    let fadePoint = 150; 

    if (scrollY < fadePoint) {
        contactTitle.style.opacity = 1 - scrollY / fadePoint;
    } else {
        contactTitle.style.opacity = 0;
    }
});




function goToPage(pageNumber) {
    const links = document.querySelectorAll('.pagination a');
    links.forEach(link => link.classList.remove('active'));  
  
    const pageLink = Array.from(links).find(link => link.innerText == pageNumber);
    pageLink.classList.add('active');

    console.log("Loading content for page:", pageNumber);
  }















  document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarOptions = document.querySelector('.navbar-options');

    if (navbarToggle && navbarOptions) {
        navbarToggle.addEventListener('click', function () {
            navbarOptions.classList.toggle('active');
        });
    }
});