document.addEventListener("DOMContentLoaded", function () {
  const russianButton = document.getElementById("button-ru");
  const englishButton = document.getElementById("button-en");
  const russianButtonburger = document.getElementById("button-ru-burger");
  const englishButtonburger = document.getElementById("button-en-burger");
  const allLang = ['en', 'ru'];
  var langArr;

  // Загрузка данных локализации из JSON-файла
  fetch('../json/localization.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ой, ошибка в fetch: ' + response.statusText);
      }
      return response.json();
    })
    .then(jsonData => {
      langArr = jsonData;
      console.log(langArr);
      changeLanguage();
    })
    .catch(error => console.error('Ошибка при исполнении запроса: ', error));

  // Обработчик клика на кнопку русского языка
  russianButton.addEventListener("click", function () {
    setLanguage("ru");
  });

  // Обработчик клика на кнопку английского языка
  englishButton.addEventListener("click", function () {
    setLanguage("en");
  });

  russianButtonburger.addEventListener("click", function () {
    setLanguage("ru");
  });


  englishButtonburger.addEventListener("click", function () {
    setLanguage("en");
  });

  function changeLanguage() {
    let lang = getLanguage();
    if (!allLang.includes(lang)) {
      lang = "ru";
      setLanguage(lang);
    }
    for (let key in langArr) {
      const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
      elements.forEach(element => {
        element.innerHTML = langArr[key][lang];
      });
    }
  }

  function getLanguage() {
    return localStorage.getItem("lang") || "ru";
  }

  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    let url = new URL(window.location.href);
    url.hash = lang !== "ru" ? "#" + lang : "";
    window.history.replaceState(null, '', url.toString());
    location.reload();
  }
});