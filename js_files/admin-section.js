document.addEventListener('DOMContentLoaded', function() {
    const role = localStorage.getItem('role');

    const adminElement = document.querySelector('.footer-container-admin');
    const userElement = document.querySelector('.footer-container');
    const footer = document.querySelector('footer');
    const liNav = document.querySelector('.hide-for-admin-steps');


        if (role === 'admin') {
            adminElement.classList.remove('hidden');
            userElement.classList.add('hidden');
            footer.classList.remove('background-footer');
            footer.classList.add('background-footer-admin')
            liNav.classList.add('hidden')
        } else {
            userElement.classList.remove('hidden');
            adminElement.classList.add('hidden');
            footer.classList.add('background-footer');
            footer.classList.remove('background-footer-admin')
            liNav.classList.remove('hidden')
        }
    
});
