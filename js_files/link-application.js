const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const appLink = document.getElementById('application-link');
const authModal = document.getElementById('authModal');
const closeModal = document.querySelector('.close');
const appLink2 = document.querySelector('#modallink');
// Функция для открытия модального окна
function openModal() {
    authModal.style.display = 'block';
    document.body.classList.add('no-scroll');
}

// Закрытие модального окна при нажатии на крестик
closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
    document.body.classList.remove('no-scroll');
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target == authModal) {
        authModal.style.display = 'none';
    }
});

appLink.addEventListener('click', () => {
    // Проверка роли пользователя
    const userRole = localStorage.getItem('role'); // Предполагается, что роль хранится в localStorage

    // Проверка роли на наличие и соответствие
    if (userRole && (userRole === 'user' || userRole === 'admin')) {
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('phone', phoneInput.value);
        window.location.href = '../applictation/application_user.html';
    } else {
        openModal();
    }
});
appLink2.addEventListener('click', () => {
    // Проверка роли пользователя
    const userRole = localStorage.getItem('role'); // Предполагается, что роль хранится в localStorage

    // Проверка роли на наличие и соответствие
    if (userRole && (userRole === 'user' || userRole === 'admin')) {
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('phone', phoneInput.value);
        window.location.href = '../applictation/application_user.html';
    } else {
        openModal();
    }
});
