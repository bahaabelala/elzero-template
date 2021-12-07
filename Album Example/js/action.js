var menuIcon = document.querySelector('.menu-icon'),
    menuSection = document.querySelector('.menu-section'),
    logoSection = document.querySelector('.logo-section'),
    header = document.querySelector('header'),
    pageUpLink = document.querySelector('.page-up-link');

menuIcon.addEventListener('click', function () {
    menuSection.classList.toggle('open-menu');
});
