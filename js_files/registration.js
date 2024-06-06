document.addEventListener("DOMContentLoaded", function () {
  const lang = localStorage.getItem('lang') || 'ru';
  const emailInput = document.getElementById('mail');
  const phoneInput = document.getElementById('phone');
  const birthdateInput = document.getElementById('birthdate');
  const passwordInput = document.getElementById('password');
  const repeatPasswordInput = document.getElementById('repeatpassword');
  const firstNameInput = document.getElementById('firstname');
  const lastNameInput = document.getElementById('lastname');
  const middleNameInput = document.getElementById('middlename');
  const nicknameInput = document.getElementById('nickname');
  const agreementCheckbox = document.getElementById('agreement');
  const submitButton = document.getElementById('submit');
  submitButton.disabled
 console.log(submitButton)
  const emailError = document.getElementById('mailError');
  const phoneError = document.getElementById('phoneError');
  const birthdateError = document.getElementById('birthdateError');
  const passwordError = document.getElementById('passwordError');
  const repeatPasswordError = document.getElementById('repeatPasswordError');
  const firstNameError = document.getElementById('firstnameError');
  const lastNameError = document.getElementById('lastnameError');
  const nicknameError = document.getElementById('nicknameError');
  const agreementError = document.getElementById('agreementError');

  const userslocal = JSON.parse(localStorage.getItem('users')) || [];
  let users = [];

  fetch('/json/users.json')
      .then(response => response.json())
      .then(jsonData => {
          users = jsonData.concat(userslocal);
      })
      .catch(error => console.error('Ошибка при исполнении запроса: ', error));

  function showError(element, message) {
      element.textContent = message;
      element.classList.add('show');
  }

  function hideError(element) {
      element.textContent = "";
      element.classList.remove('show');
  }

  function validateEmail() {
      const email = emailInput.value.trim();
      let errorMessage = "";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          if (lang === 'ru') {
              errorMessage += "Email неверного формата. ";
          } else {
              errorMessage += "Invalid email format. ";
          }
      }

      if (users.some(user => user.mail === email)) {
          if (lang === 'ru') {
              errorMessage += "Email уже зарегистрирован.";
          } else {
              errorMessage += "Email already registered.";
          }
      }

      if (errorMessage) {
          showError(emailError, errorMessage);
          emailInput.classList.add('error');
      } else {
          hideError(emailError);
          emailInput.classList.remove('error');
      }
  }

  function validatePhone() {
      const phone = phoneInput.value.trim();
      const phoneRegex = /^\+375\d{9}$/;
      let errorMessage = "";

      if (!phoneRegex.test(phone)) {
          if (lang === 'ru') {
              errorMessage = "Номер телефона должен быть в формате '+375123456789'";
          } else {
              errorMessage = "Phone number must be in the format '+375123456789'";
          }
      }

      if (errorMessage) {
          showError(phoneError, errorMessage);
          phoneInput.classList.add('error');
      } else {
          hideError(phoneError);
          phoneInput.classList.remove('error');
      }
  }

  function validateBirthdate() {
      const birthdate = birthdateInput.value;
      const date = new Date(birthdate);
      const year = date.getFullYear();
      const currentYear = new Date().getFullYear();
      let errorMessage = "";

      if (year < 1950 || year > currentYear) {
          if (lang === 'ru') {
              errorMessage += "Некорректно введена дата рождения. ";
          } else {
              errorMessage += "Incorrect birthdate format. ";
          }
      }

      if (currentYear - year < 16) {
          if (lang === 'ru') {
              errorMessage += "Вам должно быть больше 16 лет.";
          } else {
              errorMessage += "You must be over 16 years old.";
          }
      }

      if (errorMessage) {
          showError(birthdateError, errorMessage);
          birthdateInput.classList.add('error');
      } else {
          hideError(birthdateError);
          birthdateInput.classList.remove('error');
      }
  }

  function validatePassword() {
      const password = passwordInput.value;
      let errorMessage = "";

      if (password.length < 7 || password.length > 20) {
          if (lang === 'ru') {
              errorMessage += "Пароль должен быть от 7 до 20 символов. ";
          } else {
              errorMessage += "Password must be between 7 and 20 characters. ";
          }
      }
      if (!/[A-Z]/.test(password)) {
          if (lang === 'ru') {
              errorMessage += "Пароль должен содержать хотя бы одну заглавную букву. ";
          } else {
              errorMessage += "Password must contain at least one uppercase letter. ";
          }
      }
      if (!/[a-z]/.test(password)) {
          if (lang === 'ru') {
              errorMessage += "Пароль должен содержать хотя бы одну строчную букву. ";
          } else {
              errorMessage += "Password must contain at least one lowercase letter. ";
          }
      }
      if (!/\d/.test(password)) {
          if (lang === 'ru') {
              errorMessage += "Пароль должен содержать хотя бы одну цифру. ";
          } else {
              errorMessage += "Password must contain at least one digit. ";
          }
      }
      if (!/[@$!%*?&]/.test(password)) {
          if (lang === 'ru') {
              errorMessage += "Пароль должен содержать хотя бы один специальный символ. ";
          } else {
              errorMessage += "Password must contain at least one special character. ";
          }
      }

      if (errorMessage) {
          showError(passwordError, errorMessage);
          passwordInput.classList.add('error');
      } else {
          hideError(passwordError);
          passwordInput.classList.remove('error');
      }


      validateRepeatPassword();
  }

  function validateRepeatPassword() {
      const password = passwordInput.value;
      const repeatPassword = repeatPasswordInput.value;
      let errorMessage = "";

      if (password !== repeatPassword) {
          if (lang === 'ru') {
              errorMessage = "Пароли не совпадают.";
          } else {
              errorMessage = "Passwords do not match.";
          }
      }

      if (errorMessage) {
          showError(repeatPasswordError, errorMessage);
          repeatPasswordInput.classList.add('error');
      } else {
          hideError(repeatPasswordError);
          repeatPasswordInput.classList.remove('error');
      }
  }

  function validateFirstName() {
      const firstName = firstNameInput.value.trim();
      let errorMessage = "";

      if (firstName === "") {
          if (lang === 'ru') {
              errorMessage = "Введите имя.";
          } else {
              errorMessage = "Enter first name.";
          }
      }

      if (errorMessage) {
          showError(firstNameError, errorMessage);
          firstNameInput.classList.add('error');
      } else {
          hideError(firstNameError);
          firstNameInput.classList.remove('error');
      }
  }

  function validateLastName() {
      const lastName = lastNameInput.value.trim();
      let errorMessage = "";

      if (lastName === "") {
          if (lang === 'ru') {
              errorMessage = "Введите фамилию.";
          } else {
              errorMessage = "Enter last name.";
          }
      }

      if (errorMessage) {
          showError(lastNameError, errorMessage);
          lastNameInput.classList.add('error');
      } else {
          hideError(lastNameError);
          lastNameInput.classList.remove('error');
      }
  }

  function validateNickname() {
      const nickname = nicknameInput.value.trim();
      let errorMessage = "";

      if (nickname === "") {
          if (lang === 'ru') {
              errorMessage += "Введите никнейм. ";
          } else {
              errorMessage += "Enter nickname. ";
          }
      }

      if (users.some(user => user.nickname === nickname)) {
          if (lang === 'ru') {
              errorMessage += "Никнейм уже занят.";
          } else {
              errorMessage += "Nickname already taken.";
          }
      }

      if (errorMessage) {
          showError(nicknameError, errorMessage);
          nicknameInput.classList.add('error');
      } else {
          hideError(nicknameError);
          nicknameInput.classList.remove('error');
      }
  }

  function validateAgreement() {
      let errorMessage = "";

      if (!agreementCheckbox.checked) {
           if (lang === 'ru') {
            errorMessage = "Необходимо принять соглашение.";
        } else {
            errorMessage = "You must accept the agreement.";
        }
    }

    if (errorMessage) {
        showError(agreementError, errorMessage);
    } else {
        hideError(agreementError);
    }
}

function updateSubmitButtonState() {
    const isFormValid = [
        emailInput,
        phoneInput,
        birthdateInput,
        passwordInput,
        repeatPasswordInput,
        firstNameInput,
        lastNameInput,
        nicknameInput
    ].every(input => input.value.trim() !== '' && !input.classList.contains('error'));
    console.log(isFormValid)
    submitButton.disabled = !isFormValid || !agreementCheckbox.checked;
}

emailInput.addEventListener('blur', function() {
    validateEmail();
    updateSubmitButtonState();
});
phoneInput.addEventListener('blur', function() {
    validatePhone();
    updateSubmitButtonState();
});
birthdateInput.addEventListener('blur', function() {
    validateBirthdate();
    updateSubmitButtonState();
});
passwordInput.addEventListener('blur', function() {
    validatePassword();
    updateSubmitButtonState();
});
repeatPasswordInput.addEventListener('blur', function() {
    validateRepeatPassword();
    updateSubmitButtonState();
});
firstNameInput.addEventListener('blur', function() {
    validateFirstName();
    updateSubmitButtonState();
});
lastNameInput.addEventListener('blur', function() {
    validateLastName();
    updateSubmitButtonState();
});
nicknameInput.addEventListener('blur', function() {
    validateNickname();
    updateSubmitButtonState();
});
agreementCheckbox.addEventListener('change', function() {
    validateAgreement();
    updateSubmitButtonState();
});

emailInput.addEventListener('input', updateSubmitButtonState);
phoneInput.addEventListener('input', updateSubmitButtonState);
birthdateInput.addEventListener('input', updateSubmitButtonState);
passwordInput.addEventListener('input', function() {
    validatePassword();
    validateRepeatPassword();
    updateSubmitButtonState();
});
repeatPasswordInput.addEventListener('input', function() {
    validatePassword();
    validateRepeatPassword();
    updateSubmitButtonState();
});
firstNameInput.addEventListener('input', updateSubmitButtonState);
lastNameInput.addEventListener('input', updateSubmitButtonState);
nicknameInput.addEventListener('input', updateSubmitButtonState);
agreementCheckbox.addEventListener('change', updateSubmitButtonState);

submitButton.addEventListener('click', function () {
    if (!submitButton.disabled) {
        const user = {
            mail: emailInput.value.trim(),
            password: passwordInput.value.trim(),
            telephone: phoneInput.value.trim(),
            birthdate: birthdateInput.value.trim(),
            firstname: firstNameInput.value.trim(),
            secondname: lastNameInput.value.trim(),
            middlename: middleNameInput.value.trim(),
            nickname: nicknameInput.value.trim(),
            role: "user"
        };

        users.push(user);
        localStorage.setItem('users', JSON.stringify(user));
        localStorage.setItem('username', user.nickname);
        localStorage.setItem('role', user.role);

        // Очищаем поля формы
        emailInput.value = "";
        phoneInput.value = "";
        birthdateInput.value = "";
        passwordInput.value = "";
        repeatPasswordInput.value = "";
        firstNameInput.value = "";
        lastNameInput.value = "";
        middleNameInput.value = "";
        nicknameInput.value = "";
        agreementCheckbox.checked = false;

        // Перенаправляем пользователя на главную страницу или страницу пользователя
        alert(lang === 'ru' ? "Вы успешно зарегистрировались" : "Registration successful");
        window.location.href = "../index-page/index_user.html";
    }
});

// Генерация случайного никнейма
function generateRandomNickname() {
    const adjectives = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Black", "White"];
    const nouns = ["Cat", "Dog", "Bird", "Lion", "Tiger", "Elephant", "Monkey", "Snake", "Bear"];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return randomAdjective + randomNoun;
}

const generateNicknameButton = document.getElementById('generate-nick');
generateNicknameButton.addEventListener("click", function () {
    const nickname = generateRandomNickname();
    nicknameInput.value = nickname;
    nicknameError.textContent = "";
    nicknameInput.style.borderColor = "black";
    updateSubmitButtonState();
});

// Генерация случайного пароля
function generatePassword() {
    const minLength = 8;
    const maxLength = 20;
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

function validatePasswordRandom(password) {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumeric = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=]/.test(password);

    return hasLowercase && hasUppercase && hasNumeric && hasSpecial;
}

const generatePasswordButton = document.getElementById('generate-password');
generatePasswordButton.addEventListener("click", function () {
    let generatedPassword = generatePassword();

    while (!validatePasswordRandom(generatedPassword)) {
        generatedPassword = generatePassword();
    }

    passwordInput.value = generatedPassword;
    repeatPasswordInput.value = generatedPassword;
    passwordError.textContent = "";
    repeatPasswordError.textContent = "";
    passwordInput.style.borderColor = "black";
    repeatPasswordInput.style.borderColor = "black";
    updateSubmitButtonState();
});

// Обработчики для показа/скрытия пароля
const inputIcon = document.querySelector(".input-icon");
const eyeIcon = document.getElementById("eye-icon");
let isPasswordVisible = false;

inputIcon.addEventListener("click", function () {
    if (!isPasswordVisible) {
        passwordInput.type = "text";
        eyeIcon.src = "/images/icons8-eye-50.png";
        isPasswordVisible = true;
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "/images/icons8-closed-eye-50.png";
        isPasswordVisible = false;
    }
});

const inputIcon2 = document.querySelector(".input-icon2");
const eyeIcon2 = document.getElementById("eye-icon2");
let isPasswordVisible2 = false;

inputIcon2.addEventListener("click", function () {
    if (!isPasswordVisible2) {
        repeatPasswordInput.type = "text";
        eyeIcon2.src = "/images/icons8-eye-50.png";
        isPasswordVisible2 = true;
    } else {
        repeatPasswordInput.type = "password";
        eyeIcon2.src = "/images/icons8-closed-eye-50.png";
        isPasswordVisible2 = false;
    }
});

// Обработка вставки пароля
passwordInput.addEventListener("paste", function (e) {
    e.preventDefault(); 
});

repeatPasswordInput.addEventListener("paste", function (e) {
    e.preventDefault();
});
});