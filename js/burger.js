document.addEventListener('DOMContentLoaded', function () {
    var burgerMenu = document.querySelector('.burger_menu');
    var burgerIcon = document.querySelector('.burger_icon');
    var burgerLink = document.querySelectorAll('.menu_hidden ul li a')

    burgerIcon.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
    });
    burgerLink.forEach(function (link) {
        link.addEventListener('click', function(){
        burgerMenu.classList.remove('active');
        });
    });
});