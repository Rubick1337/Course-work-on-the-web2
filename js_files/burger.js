document.addEventListener("DOMContentLoaded", function() {
    var navigationItems = document.querySelectorAll('.navigation li');
    var burgerMenu = document.querySelector('.burger-menu');
    var navigation = document.querySelector('.navigation');
    var overlay = document.querySelector('.overlay');
    var buttonsBurger = document.querySelector('.buttons-burger');
    var profileBurger = document.querySelector('.img-profile-burger');
    var dropdownMenu = document.getElementById('dropdownMenuBurgers');
// Функция для обновления меню
function updateMenu() {
    var loginRegisterMenu = document.querySelector('.login-register-menu');
    var userMenu = document.querySelector('.user-menu');
    var usernameDisplay = document.querySelector('.username-display');

    var username = localStorage.getItem('username');

    if (username) {
        // Если имя пользователя есть, скрываем пункты меню "Login" и "Register"
        loginRegisterMenu.style.display = 'none';
        // Отображаем меню пользователя и отображаем имя пользователя
        userMenu.style.display = 'flex';
        usernameDisplay.textContent = username;
    } else {
        // Если имя пользователя отсутствует, показываем пункты меню "Login" и "Register"
        loginRegisterMenu.style.display = 'block';
        // Скрываем меню пользователя
        userMenu.style.display = 'none';
    }
}

// Вызываем функцию обновления меню при загрузке страницы
window.onload = updateMenu;

// Обработчик кнопки "Log out"
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('username');
    // После выхода из системы обновляем меню
    updateMenu();
    window.location.reload();
});
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

    profileBurger.addEventListener('click', function(event) {
        event.stopPropagation();
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        var targetElement = event.target;
        var isClickInsideBurgerMenu = burgerMenu.contains(targetElement);
        var isClickInsideButtonsBurger = buttonsBurger && buttonsBurger.contains(targetElement);
        var isClickInsideProfileBurger = profileBurger.contains(targetElement) || dropdownMenu.contains(targetElement);
        var isNavigation = targetElement.classList.contains('navigation');
        if (!isClickInsideBurgerMenu && !isClickInsideButtonsBurger && !isClickInsideProfileBurger && !isNavigation) {
            navigation.classList.remove('open');
            burgerMenu.classList.remove('active');
            overlay.classList.remove('open-overlay');
            dropdownMenu.style.display = 'none';
        }
    });
    document.addEventListener('scroll', function() {
        navigation.classList.remove('open');
        burgerMenu.classList.remove('active');
        overlay.classList.remove('open-overlay');
        dropdownMenu.style.display = 'none';
    });
});



