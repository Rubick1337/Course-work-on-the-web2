document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.services, .green-tariff, .clients, .five-steps, .info-clients');

    function checkAnimation() {
        const triggerHeight = window.innerHeight * 0.75;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerHeight) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', checkAnimation);
    window.addEventListener('resize', checkAnimation);

    // Проверяем анимацию при загрузке страницы
    checkAnimation();
});