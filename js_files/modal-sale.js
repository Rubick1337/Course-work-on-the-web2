// Функция для показа модального окна
function showModal() {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflow = "hidden"; // Запрет прокрутки
}

// Функция для скрытия модального окна
function hideModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto"; // Разрешение прокрутки
}

// Получение роли пользователя из localStorage
var userRole = localStorage.getItem("role");

// Проверка, должен ли показываться модальное окно
if (userRole === "user" || userRole === "admin") {
    var isModalShown = localStorage.getItem("modalShown");

    // Проверка, показывалось ли модальное окно ранее
    if (!isModalShown) {
        if (window.pageYOffset >= 1500) {
            showModal();
            localStorage.setItem("modalShown", true);
        }
    }

    // Обработчик события прокрутки
    window.onscroll = function() {
        isModalShown = localStorage.getItem("modalShown"); // Обновляем значение переменной
        if (!isModalShown && window.pageYOffset >= 1500) {
            showModal();
            localStorage.setItem("modalShown", true);
        }
    };

    // Обработчик события клика по кнопке закрытия
    document.getElementById("close-btn").onclick = function() {
        hideModal();
    };

    // Обработчик события клика вне модального окна для его закрытия
    document.addEventListener('click', function(event) {
        var modal = document.getElementById("modal-content");
        var target = event.target;
        var isClickInside = modal.contains(target);
        if (!isClickInside) {
            hideModal();
        }
    });
}