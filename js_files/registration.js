var userslocal = JSON.parse(localStorage.getItem('users')); // Предполагая, что userslocal - это массив пользователей из локального хранилища
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
    reg();
  })
  .catch(error => console.error('Ошибка при исполнении запроса: ', error));
  function reg()
  {
    Register();
  }
  function Register()
  {

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
  
      var emailInput = document.getElementById('mail');
      var phoneInput = document.getElementById('phone');
      var birthdateInput = document.getElementById('birthdate');
      var passwordInput = document.getElementById('password');
      var repeatPasswordInput = document.getElementById('repeatpassword');
      var firstNameInput = document.getElementById('firstname');
      var lastNameInput = document.getElementById('lastname');
      var middleNameInput = document.getElementById('middlename');
      var nicknameInput = document.getElementById('nickname');
      var agreementCheckbox = document.getElementById('agreement');
      var submitButton = document.getElementById('submit');
    
    
      console.log(users);
      emailInput.addEventListener('blur', function() {
        console.log("gqe")
          validateEmail();
          updateSubmitButtonState();
      });
    
      phoneInput.addEventListener('blur', function() {
          validatePhone();
          updateSubmitButtonState();
      });
    
      birthdateInput.addEventListener('input', function() {
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
    
      function validateEmail() {
          var email = emailInput.value;
          var invalidMailHard = false;
          var invalidMail = false;
          var emailError = document.getElementById('mailError');
          var errorMessage = "";
    
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
              invalidMail = true;
            }
            var existingUser = users.find(function(user) {
              return user.mail === email;
            });
              if (existingUser) {
                console.log("занят");
                invalidMailHard = true;
              }
    
          if (invalidMail) {
              errorMessage += "Email неверного формата. ";
          }
          if (invalidMailHard) {
              errorMessage += "Email уже зарегистрирован.";
          }
             if (errorMessage !== "") {
              emailError.textContent = errorMessage;
              emailInput.style.borderColor = "red";
                  } else {
                    emailError.textContent = "";
                    emailInput.style.borderColor = "black";
                  }
      }
    
      function validatePhone() {
          var phone = phoneInput.value;
          var phoneError = document.getElementById('phoneError');
          var invalidPhone = !/^\+375\d{9}$/.test(phone); // Пример проверки формата номера телефона
          if (invalidPhone) {
            phoneError.textContent = "Номер телефона должен быть в формате '+375123456789'";
            phoneInput.style.borderColor = "red";
        } else {
            phoneError.textContent = "";
            phoneInput.style.borderColor = "black";
        }
      }
    
      function validateBirthdate() {
          var birthdate = birthdateInput.value;
            const date = new Date(birthdate);
      const year = date.getFullYear();
      const currentyear = new Date().getFullYear();
      var invalidbirthdate = false;
      var invalidAge = false;
          var birthdateError = document.getElementById('birthdateError');
          var ageError = document.getElementById('ageError');
      if (!(1940 < year) || year > currentyear) {
        invalidbirthdate = true;
      } else if (!(year < currentyear - 16)) {
        invalidAge = true;
      }
    
          if (invalidbirthdate) {
              birthdateError.textContent = "Некорректно введена дата рождения";
              birthdateInput.style.borderColor = "red";
          } else {
              birthdateError.textContent = "";
              birthdateInput.style.borderColor = "black";
          }
    
          if (invalidAge) {
              ageError.textContent = "Вам должно быть больше 16 лет";
              birthdateInput.style.borderColor = "red";
          } else {
              ageError.textContent = "";
              birthdateInput.style.borderColor = "black";
          }
      }
    
      function validatePassword() {
          var password = passwordInput.value;
          var passwordError = document.getElementById('passwordError');
          var invalidPassword = false;
          if (password.length < 7 || password.length >20) {
            invalidPassword = true;
              }
              if (!/[A-Z]/.test(password) || !!/[А-Я]/.test(password)) {
                invalidPassword = true;
              }
              // Проверка наличия строчной буквы
              if (!/[a-z]/.test(password)) {
                invalidPassword = true;
              }
              // Проверка наличия цифры
              if (!/\d/.test(password)) {
                invalidPassword = true;
              }
              if (!/[@$!%*?&]/.test(password)) {
                invalidPassword = true;
              }
    
              if (invalidPassword) {
                passwordError.textContent = "Некорректно введен пароль";
                passwordInput.style.borderColor = "red";
            } else {
                passwordError.textContent = "";
                passwordInput.style.borderColor = "black";
            }
            
      }
    
      function validateRepeatPassword() {
          var password = passwordInput.value;
          var repeatPassword = repeatPasswordInput.value;
          var repeatPasswordError = document.getElementById('repeatPasswordError');
          var invalidPasswordTwo = password !== repeatPassword; // Проверка на совпадение паролей
    
          if (invalidPasswordTwo) {
            repeatPasswordError.textContent = "Пароли не совпадают";
            repeatPasswordInput.style.borderColor = "red";
        } else {
            repeatPasswordError.textContent = "";
            repeatPasswordInput.style.borderColor = "black";
        }
        
      }
    
      function validateFirstName() {
          var firstName = firstNameInput.value;
          var firstNameError = document.getElementById('firstnameError');
          var invalidFirstName = firstName.trim() === ""; // Проверка на пустое значение
    
          if (invalidFirstName) {
            firstNameError.textContent = "Введите имя";
            firstNameInput.style.borderColor = "red";
        } else {
            firstNameError.textContent = "";
            firstNameInput.style.borderColor = "black";
        }
        
      }
    
      function validateLastName() {
          var lastName = lastNameInput.value;
          var lastNameError = document.getElementById('lastnameError');
          var invalidLastName = lastName.trim() === ""; // Проверка на пустое значение
    
          if (invalidLastName) {
            lastNameError.textContent = "Введите фамилию";
            lastNameInput.style.borderColor = "red";
        } else {
            lastNameError.textContent = "";
            lastNameInput.style.borderColor = "black";
        }
        
      }
    
      function validateNickname() {
          var nickname = nicknameInput.value;
          var invalidNicknameHard = false;
          var invalidNickname = false;
          var nicknameError = document.getElementById('nicknameError');
          var errorMessage = "";
    // Проверка на пустое значение
      if (nickname.trim() === "") {
        invalidNickname = true;
      }
      var existingNickname = users.find(function(user) {
        return user.nickname === nickname;
      });
    
      if (existingNickname) {
        console.log("занят");
        invalidNicknameHard = true;
      }
    
          if (invalidNickname) {
              errorMessage += "Введите никнейм. ";
          }
          if (invalidNicknameHard) {
              errorMessage += "Никнейм занят.";
          }
          if (errorMessage !== "") {
            nicknameError.textContent = errorMessage;
            nicknameInput.style.borderColor = "red";
                } else {
                  nicknameError.textContent = "";
                  nicknameInput.style.borderColor = "black";
                }
      }
    
      function validateAgreement() {
          var agreementChecked = agreementCheckbox.checked;
          var agreementError = document.getElementById('agreementError');
          var invalidAgreement = !agreementChecked; // Проверка на принятие соглашения
    
          agreementError.textContent = invalidAgreement ? "Необходимо принять соглашение" : "";
      }
    
      function updateSubmitButtonState() {
          var isFormValid = validateForm();
          submitButton.disabled = !isFormValid;
      }
    
      function updateSubmitButtonState() {
        var isFormValid = validateForm();
        submitButton.disabled = !isFormValid;
        
        if (isFormValid && agreementCheckbox.checked) {
            button.disabled = false; // Включаем кнопку, если форма валидна и согласие дано
        } else {
            button.disabled = true; // Иначе отключаем кнопку
        }
    }
    
    function validateForm() {
        // Проверяем наличие непустых значений во всех полях формы
        var inputs = [emailInput, phoneInput, birthdateInput, passwordInput, repeatPasswordInput, firstNameInput, lastNameInput, middleNameInput, nicknameInput];
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === '') {
                return false; // Если хоть одно поле пустое, возвращаем false
            }
        }
        return true; // Возвращаем true, если все поля заполнены
    }
    
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
      var repeatPasswordError = document.getElementById('repeatPasswordError');
      var generatedPassword = generatePassword();
    
      while (!validatePassword(generatedPassword)) {
        generatedPassword = generatePassword();
      }
    
      password.value = generatedPassword;
      repeatpassword.value = generatedPassword;
      repeatPasswordError.textContent = "";
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
      var  user = new User(email, password, phone, birthdate, firstname, lastname, middlename, nickname);
      localStorage.setItem('username', user.nickname);
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
      window.location.href = "/pages_html/index_user.html";
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
  }