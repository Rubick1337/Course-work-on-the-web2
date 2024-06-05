document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('application-form');
    const submitBtn = document.getElementById('submit-btn');
    const errorMessage = document.getElementById('error-message');

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const sunpanel = document.getElementById('sunpanel').value.trim();
        const count = document.getElementById('count').value.trim();
        const tariff = document.getElementById('tariff').value.trim();

        if (!name || !phone || !sunpanel || !count || !tariff) {
            return false;
        }

        return true;
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function clearError() {
        errorMessage.style.display = 'none';
    }

    function getOrders() {
        const orders = localStorage.getItem('orders');
        return orders ? JSON.parse(orders) : [];
    }

    function saveOrder(order) {
        const orders = getOrders();
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        clearError();

        if (validateForm()) {
            const formData = {
                name: document.getElementById('name').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                sunpanel: document.getElementById('sunpanel').value.trim(),
                count: document.getElementById('count').value.trim(),
                region: document.getElementById('region').value.trim(), //
                discovery: document.getElementById('discovery').value.trim(),
                tariff: document.getElementById('tariff').value.trim()
            };

            saveOrder(formData);
            window.location.href = '../index-page/index_user.html'; 
        } else {
            showError('Пожалуйста, заполните все обязательные поля.');
        }
    });
});