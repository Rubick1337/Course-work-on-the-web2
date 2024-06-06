document.addEventListener('DOMContentLoaded', function() {
  var tariffs;
  const lang = getLanguage();
  fetch('../json/slider-green-tariff.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ой, ошибка в fetch: ' + response.statusText);
      }
      return response.json();
    })
    .then(jsonData => {
      var language = lang === 'ru' ? 'ru' : 'en';
      tariffs = jsonData[language];
      updateContent(currentClientIndex);
    })
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);
    });

  var currentClientIndex = 1;
  var imgTariff = document.querySelector(".img-slider-tarrif");
  var textTariff = document.querySelector(".text-slider");

  function updateContent(clientIndex) {
    if (tariffs) {
      var tariff = tariffs['tariff-' + clientIndex];

      imgTariff.classList.remove('show');
      textTariff.classList.remove('show');


      setTimeout(() => {
        imgTariff.style.backgroundImage = 'url(' + tariff.img + ')';
        textTariff.textContent = tariff.title;

        setTimeout(() => {
          imgTariff.classList.add('show');
          textTariff.classList.add('show');
        }, 700);
      }, 50);
    }
  }

  document.getElementById('left-caret-tariff').addEventListener('click', function() {
    if (currentClientIndex > 1) {
      currentClientIndex--;
    } else {
      currentClientIndex = Object.keys(tariffs).length;
    }
    updateContent(currentClientIndex);
  });

  document.getElementById('right-caret-tariff').addEventListener('click', function() {
    if (currentClientIndex < Object.keys(tariffs).length) {
      currentClientIndex++;
    } else {
      currentClientIndex = 1;
    }
    updateContent(currentClientIndex);
  });

  function getLanguage() {
    return localStorage.getItem('lang') || 'ru';
  }
});