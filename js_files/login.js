
    var userslocal = JSON.parse(localStorage.getItem('users')) || [];
    var usersjson;
    var users = [];
    const lang = localStorage.getItem('lang') || 'ru';
    fetch('/json/users.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ой, ошибка в fetch: ' + response.statusText);
            }
            return response.json();
        })
        .then(jsonData => {
            usersjson = jsonData;
            var usersfetch = usersjson.concat(userslocal);
            users = usersfetch;
            login(users);
        })


function login(users) {
    console.log(users);
    document.getElementById('submit').addEventListener('click', function() {
        const nickname = document.getElementById('nicknamelogin').value.trim();
        const password = document.getElementById('passwordlogin').value.trim();
        
        const nicknameError = document.getElementById('nicknameErrorlogin');
        const passwordError = document.getElementById('passwordErrorlogin');

        const user = users.find(user => user.nickname === nickname);

        if (!user) {
            // Выбираем сообщение об ошибке в зависимости от языка
            if (lang === 'ru') {
                nicknameError.textContent = 'Пользователь не найден';
            } else {
                nicknameError.textContent = 'User not found';
            }
            passwordError.textContent = '';
        } else if (user.password !== password) {
            // Выбираем сообщение об ошибке в зависимости от языка
            if (lang === 'ru') {
                passwordError.textContent = 'Неправильный пароль';
            } else {
                passwordError.textContent = 'Incorrect password';
            }
            nicknameError.textContent = '';
        }
        else {
            nicknameError.textContent = '';
            passwordError.textContent = '';
            alert('Вход успешен');
            localStorage.setItem('username', user.nickname);
            localStorage.setItem('role', user.role);
            window.location.href = "/pages_html/index_user.html";
        }
    });

    document.getElementById('eye-icon-login').addEventListener('click', function() {
        const passwordField = document.getElementById('passwordlogin');
        const eyeIcon = document.getElementById("eye-icon-login");
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeIcon.src = '/images/icons8-eye-50.png';  // Open eye icon
        } else {    
            passwordField.type = 'password';
            eyeIcon.src = '/images/icons8-closed-eye-50.png';  // Closed eye icon
        }
    });

    document.getElementById('passwordlogin').addEventListener("paste", function(e) {
        e.preventDefault();
    });
}
