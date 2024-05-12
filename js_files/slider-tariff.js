document.addEventListener('DOMContentLoaded', function() {
    var tariffs;
  
    fetch('/json/slider-green-tariff.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ой, ошибка в fetch: ' + response.statusText);
        }
        return response.json();
      })
      .then(jsonData => {
        var language;
        if (window.location.hash === '#ru') {
          language = 'ru';
        } else {
          language = 'en';
        }
        tariffs = jsonData[language];
        updateContent(currentClientIndex);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });

  
    var currentClientIndex = 1;
    var imgTariff = document.querySelector(".img-slider-tarrif")
    var textTariff = document.querySelector(".text-slider")
    function updateContent(clientIndex) {
      if (tariffs) {
        var tariff = tariffs['tariff-' + clientIndex];
        imgTariff.style.backgroundImage = 'url(' + tariff.img + ')';
        textTariff.textContent = tariff.title;
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
  });