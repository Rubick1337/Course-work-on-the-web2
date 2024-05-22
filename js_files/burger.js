document.addEventListener("DOMContentLoaded", function() {
    var navigationItems = document.querySelectorAll('.navigation li');
    var burgerMenu = document.querySelector('.burger-menu');
    var navigation = document.querySelector('.navigation');
    var overlay = document.querySelector('.overlay');
    var buttonsBurger = document.querySelector('.buttons-burger');

    document.querySelector('.burger-menu').addEventListener('click', function() {
        this.classList.toggle('active');
        navigation.classList.toggle('open');
        overlay.classList.toggle('open-overlay');
    });

    navigationItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navigation.classList.remove('open');
            burgerMenu.classList.remove('active');
            overlay.classList.remove('open-overlay');
        });
    });

    document.addEventListener('click', function(event) {
        var targetElement = event.target;
        // console.log(targetElement);
        var isClickInsideBurgerMenu = burgerMenu.contains(targetElement);
        var isClickInsideButtonsBurger = buttonsBurger.contains(targetElement);
        var isNavigation = targetElement.classList.contains('navigation');
        if (!isClickInsideBurgerMenu && !isClickInsideButtonsBurger && !isNavigation) {
            navigation.classList.remove('open');
            burgerMenu.classList.remove('active');
            overlay.classList.remove('open-overlay');
        }
    });

    document.addEventListener('scroll', function() {
        navigation.classList.remove('open');
        burgerMenu.classList.remove('active');
        overlay.classList.remove('open-overlay');
    });
});
