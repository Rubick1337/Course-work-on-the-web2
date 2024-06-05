var userslocal = JSON.parse(localStorage.getItem('users')) || []; // Предполагая, что userslocal - это массив пользователей из локального хранилища
var usersjson;
var users = [];

fetch('/json/users.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ой, ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
  .then(jsonData => {
    usersjson = jsonData;

    // Объединение массивов usersjson и userslocal
    var usersfetch = usersjson.concat(userslocal);
    users = usersfetch;

    // Вывод последних 6 никнеймов
    displayLastSixUsers(users);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });

function displayLastSixUsers(users) {
    // Получаем последние 6 пользователей
    var lastSixUsers = users.slice(-6);

    // Выводим их в span элементы
    lastSixUsers.forEach((user, index) => {
        var userSpan = document.getElementById((index + 1) + '-user');
        if (userSpan) {
            userSpan.textContent = user.nickname;
        }
    });
}
