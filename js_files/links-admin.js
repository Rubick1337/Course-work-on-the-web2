document.addEventListener('DOMContentLoaded', function() {
    const role = localStorage.getItem('role');

    const liNav = document.querySelector('.hide-for-admin-steps');
    const liNavAdmin = document.querySelector('.for-admin-users')

        if (role === 'admin') {
            liNav.classList.add('hidden')
            liNavAdmin.classList.remove('hidden')
        } else {
            liNav.classList.remove('hidden')
            liNavAdmin.classList.add('hidden')
        }
    
});
