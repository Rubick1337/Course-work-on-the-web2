var users = [JSON.parse(localStorage.getItem('users'))];
console.log(users);

function User(mail, password, telephone, birthdate, firstname, secondname, middlename, nickname,role) {
  this.mail = mail;
  this.password = password;
  this.telephone = telephone;
  this.birthdate = birthdate;
  this.firstname = firstname;
  this.secondname = secondname;
  this.middlename = middlename;
  this.nickname = nickname;
  this.role = "";
}

let button = document.querySelector("#submit");
button.disabled = true; // Делаем кнопку "Зарегистрироваться" неактивной изначально

function validateForm() {
  // Очищаем предыдущие ошибки
  const agreementError = document.querySelector('#agreementError');
  agreementError.textContent = "";

  var invalidnicknamehard = false;
  var invalidmailhard = false;
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
  var existingUser = users.find(function(user) {
    return user.mail === email;
  });
    if (existingUser) {
      console.log("занят");
        invalidmailhard = true;
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
  var existingNickname = users.find(function(user) {
    return user.nickname === nickname;
  });

  if (existingNickname) {
    console.log("занят");
      invalidnicknamehard = true;
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
    console.log(invalidmail)
    console.log(invalidmailhard)
    var errorMessagemail = "";
    if (invalidmail) {
      errorMessagemail += "Email неверного формата. ";
    } 
    if(invalidmailhard)
      {
        errorMessagemail += "Email уже зарегистрирован."; 
      }
      if (errorMessagemail !== "") {
        mailError.textContent = errorMessagemail;
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

    var nicknameErrorMessage = "";

    if (invalidnickname) {
      nicknameErrorMessage += "Введите никнейм. ";
    }
    
    if (invalidnicknamehard) {
      nicknameErrorMessage += "Никнейм занят.";
    }
    
    if (invalidnickname || invalidnicknamehard) {
      nicknameError.textContent = nicknameErrorMessage;
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
function generateRandomNickname() {
  const adjectives = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Black", "White"];
  const nouns = ["Cat", "Dog", "Bird", "Lion", "Tiger", "Elephant", "Monkey", "Snake", "Bear"];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return randomAdjective + randomNoun;
}

var generateButton = document.getElementById('generate-nick');
generateButton.addEventListener("click", () => {
  var nickname_random = generateRandomNickname();
  console.log(nickname_random);
  var nickname = document.getElementById('nickname');
  nickname.value = nickname_random;
  nicknameError.textContent = "";
  console.log(nickname)
});

function generatePassword() {
  const minLength = 8; // Минимальная длина пароля
  const maxLength = 20; // Максимальная длина пароля
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+-=";

  const length = getRandomNumber(minLength, maxLength);
  let password = "";

  // Гарантированное включение по одному символу каждого типа
  password += getRandomChar(lowercaseChars);
  password += getRandomChar(uppercaseChars);
  password += getRandomChar(numericChars);
  password += getRandomChar(specialChars);

  // Генерация остальных символов пароля
  for (let i = 4; i < length; i++) {
    const charsets = [lowercaseChars, uppercaseChars, numericChars, specialChars];
    const randomIndex = Math.floor(Math.random() * charsets.length);
    password += getRandomChar(charsets[randomIndex]);
  }

  return password;
}

function getRandomChar(charset) {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset.charAt(randomIndex);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validatePassword(password) {
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumeric = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=]/.test(password);

  return hasLowercase && hasUppercase && hasNumeric && hasSpecial;
}

var generateButtonpassword = document.getElementById('generate-password');
generateButtonpassword.addEventListener("click", () => {
  var generatedPassword = generatePassword();

  while (!validatePassword(generatedPassword)) {
    generatedPassword = generatePassword();
  }

  password.value = generatedPassword;
  repeatpassword.value = generatedPassword;
  passwordError.textContent = "";
  console.log(password.value);
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
  console.log(users);
  const user = new User(email, password, phone, birthdate, firstname, lastname, middlename, nickname);
  users.push(user);
  console.log(users);
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
  // window.location.href = "index_user.html";
});

password.addEventListener("paste", function(e) {
  e.preventDefault();
});
repeatpassword.addEventListener("paste", function(e) {
  e.preventDefault();
});

var inputIcon = document.querySelector(".input-icon");
var eyeIcon = document.getElementById("eye-icon");
var isPasswordVisible = false;

inputIcon.addEventListener("click", function() {
  if (!isPasswordVisible) {
    password.type = "text";
    eyeIcon.src = "/images/icons8-eye-50.png";
    isPasswordVisible = true;
  } else {
    password.type = "password";
    eyeIcon.src = "/images/icons8-closed-eye-50.png";
    isPasswordVisible = false;
  }
});

var inputIcon2 = document.querySelector(".input-icon2");
var eyeIcon2 = document.getElementById("eye-icon2");
var isPasswordVisible2 = false;

inputIcon2.addEventListener("click", function() {
  if (!isPasswordVisible2) {
    repeatpassword.type = "text";
    eyeIcon2.src = "/images/icons8-eye-50.png";
    isPasswordVisible2 = true;
  } else {
    repeatpassword.type = "password";
    eyeIcon2.src = "/images/icons8-closed-eye-50.png";
    isPasswordVisible2 = false;
  }
});