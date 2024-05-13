let users = JSON.parse(localStorage.getItem('users')) || [];
let pathJson = 'data.json';
console.log(users);
function CreatedId(users) {
  return Object.keys(users).length;
}

function User(id, mail, password, telephone, birthdate, firstname, secondname, middlename, nickname) {
  this.id = id;
  this.mail = mail;
  this.password = password;
  this.telephone = telephone;
  this.birthdate = birthdate;
  this.firstname = firstname;
  this.secondname = secondname;
  this.middlename = middlename;
  this.nickname = nickname;
}

let button = document.querySelector("#submit");
button.disabled = true; // Делаем кнопку "Зарегистрироваться" неактивной изначально

function validateForm() {
  // Очищаем предыдущие ошибки
  const agreementError = document.querySelector('#agreementError');
  agreementError.textContent = "";


  var invalidmail = false;
  var invalidphone = false;
  var invalidbirthdate = false;
  var invalidpassword = false;
  var invalidpasswordtwo = false;
  var invalidage = false;
  var invalidagreement = false;
  var invalidfirstname = false;
  var invalidlastname = false;
  var invalidmiddlename = false;
  var invalidnickname = false;
  var arrayError = [];

  // Проверка валидности и добавление ошибок в массив arrayError
  var email = document.getElementById('mail').value;
  var password = document.getElementById('password').value;
  var phone = document.getElementById('phone').value;
  var birthdate = document.getElementById('birthdate').value;
  var repeatpassword = document.getElementById('repeatpassword').value;
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var middlename = document.getElementById('middlename').value;
  var nickname = document.getElementById('nickname').value;
  const date = new Date(birthdate);
  const year = date.getFullYear();
  const currentyear = new Date().getFullYear();
  // Проверка email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    invalidmail = true;
    arrayError.push('email');
  }

  // Проверка номера телефона
  var phoneRegex = /^\+375\d{9}$/;
  if (!phoneRegex.test(phone)) {
    invalidphone = true;
    arrayError.push('phone');
  }
  if (!(1940 < year) || year > currentyear) {
    arrayError.push("Некорректно введена дата");
    invalidbirthdate = true;
  } else if (!(year < currentyear - 16)) {
    arrayError.push("Вам меньше 16 лет");
    invalidage = true;
  }
  // Проверка пароля
  if (password.length < 7 || password.length >20) {
    invalidpassword = true;
    arrayError.push('password');
  }
  if (!/[A-Z]/.test(password) || !!/[А-Я]/.test(password)) {
    invalidpassword = true;
  }
  // Проверка наличия строчной буквы
  if (!/[a-z]/.test(password)) {
    invalidpassword = true;
  }
  // Проверка наличия цифры
  if (!/\d/.test(password)) {
    invalidpassword = true;
  }
  if (!/[@$!%*?&]/.test(password)) {
    invalidpassword = true;
  }
  // Проверка повторного пароля
  if (password !== repeatpassword) {
    invalidpasswordtwo = true;
    arrayError.push('repeatpassword');
  }

  // Проверка соглашения
  var agreementChecked = document.getElementById('agreement').checked;
  if (!agreementChecked) {
    invalidagreement = true;
    arrayError.push('agreement');
  }

  // Проверка имени
  if (firstname.trim() === "") {
    invalidfirstname = true;
    arrayError.push('firstname');
  }

  // Проверка фамилии
  if (lastname.trim() === "") {
    invalidlastname = true;
    arrayError.push('lastname');
  }

  // Проверка никнейма
  if (nickname.trim() === "") {
    invalidnickname = true;
    arrayError.push('nickname');
  }

  if (arrayError.length !== 0) {
    // Отображаем ошибки рядом с соответствующими полями ввода
    const mailError = document.querySelector('#mailError');
    const phoneError = document.querySelector('#phoneError');
    const birthdateError = document.querySelector('#birthdateError');
    const ageError = document.querySelector('#ageError');
    const passwordError = document.querySelector('#passwordError');
    const repeatPasswordError = document.querySelector('#repeatPasswordError');
    const agreementError = document.querySelector('#agreementError');
    const firstnameError = document.querySelector('#firstnameError');
    const lastnameError = document.querySelector('#lastnameError');
    const nicknameError = document.querySelector('#nicknameError');

    if (invalidmail) {
      mailError.textContent = "Email неверного формата";
    } else {
      mailError.textContent = "";
    }

    if (invalidphone) {
      phoneError.textContent = "Номер телефона должен быть в формате '+375123456789'";
    } else {
      phoneError.textContent = "";
    }

    if (invalidbirthdate) {
      birthdateError.textContent = "Некорректно введена дата рождения";
    } else {
      birthdateError.textContent = "";
    }

    if (invalidage) {
      ageError.textContent = "Вам должно быть больше 16 лет";
    } else {
      ageError.textContent = "";
    }

    if (invalidpassword) {
      passwordError.textContent = "Некорректно введен пароль";
    } else {
      passwordError.textContent = "";
    }

    if (invalidpasswordtwo) {
      repeatPasswordError.textContent = "Пароли не совпадают";
    } else {
      repeatPasswordError.textContent = "";
    }

    if (invalidagreement) {
      agreementError.textContent = "Необходимо принять соглашение";
    } else {
      agreementError.textContent = "";
    }

    if (invalidfirstname) {
      firstnameError.textContent = "Введите имя";
    } else {
      firstnameError.textContent = "";
    }

    if (invalidlastname) {
      lastnameError.textContent = "Введите фамилию";
    } else {
      lastnameError.textContent = "";
    }

    if (invalidmiddlename) {
      middlenameError.textContent = "Введите отчество";
    } else {
      middlenameError.textContent = "";
    }

    if (invalidnickname) {
      nicknameError.textContent = "Введите никнейм";
    } else {
      nicknameError.textContent = "";
    }
  }

  // Возвращаем true, если нет ошибок, иначе false
  return arrayError.length === 0;
}

let inputs = document.querySelectorAll("input");
inputs.forEach(input => {
  input.addEventListener('input', () => {
    validateForm();

    // Проверяем, все ли поля валидны и активируем кнопку "Зарегистрироваться"
    const isValid = validateForm();
    button.disabled = !isValid;
  });
});

button.addEventListener("click", () => {
  var email = document.getElementById('mail').value;
  var password = document.getElementById('password').value;
  var phone = document.getElementById('phone').value;
  var birthdate = document.getElementById('birthdate').value;
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var middlename = document.getElementById('middlename').value;
  var nickname = document.getElementById('nickname').value;
  const UserId = CreatedId(users);
  const user = new User(UserId, email, password, phone, birthdate, firstname, lastname, middlename, nickname);
  console.log(user);
  localStorage.setItem('users', JSON.stringify(user));
  document.getElementById('mail').value = "";
  document.getElementById('password').value = "";
  document.getElementById('phone').value = "";
  document.getElementById('birthdate').value = "";
  document.getElementById('repeatpassword').value = "";
  document.getElementById('agreement').checked = false;
  document.getElementById('firstname').value = "";
  document.getElementById('lastname').value = "";
  document.getElementById('middlename').value = "";
  document.getElementById('nickname').value = "";
  alert("Вы успешно зарегистрировались");
  window.location.href = "index_user.html";
});