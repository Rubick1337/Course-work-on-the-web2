var logoutButtonHeader = document.querySelector('#logoutButton-header');

function update() {
    var currentUser = localStorage.getItem('username');
    var loginRegisterMenuHeader = document.querySelector('.login-register-menu-header');
    var userMenuHeader = document.querySelector('.user-menu-header');
    var usernameDisplayHeader = document.querySelector('.username-display-header');

    // Если текущий пользователь определен, значит, кто-то вошел в систему
    if (currentUser) {
        // Скрываем меню входа/регистрации
        loginRegisterMenuHeader.style.display = 'none';
        // Показываем меню пользователя
        userMenuHeader.style.display = 'flex';
        // Отображаем имя пользователя
        usernameDisplayHeader.textContent = currentUser;
    } else {
        // Показываем меню входа/регистрации
        loginRegisterMenuHeader.style.display = 'block';
        // Скрываем меню пользователя
        userMenuHeader.style.display = 'none';
    }
}

// Вызываем функцию update сразу, чтобы обновить состояние на момент загрузки страницы
update();

// Обработчик события для кнопки выхода
logoutButtonHeader.addEventListener('click', function() {
    // Удаляем текущего пользователя из localStorage
    localStorage.removeItem('username');
    // После выхода вызываем update, чтобы обновить интерфейс
    update();
    window.location.reload();
});
