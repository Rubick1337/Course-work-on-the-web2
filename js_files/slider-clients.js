document.addEventListener('DOMContentLoaded', function() {
    var clients;
    const lang = getLanguage();
    fetch('/json/slider-clients.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ой, ошибка в fetch: ' + response.statusText);
        }
        return response.json();
      })
      .then(jsonData => {
        var language;
        if  (lang === 'ru') {
          language = 'ru';
        } else {
          language = 'en';
        }
        clients = jsonData[language];
        updateContent(currentClientIndex);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  
    var imgClients = document.querySelector('.img-clients');
    var titleClient = document.querySelector('.title-client h2');
    var local = document.querySelector('.local');
    var income = document.querySelector('.income');
    var date = document.querySelector('.date');
    var life = document.querySelector('.life');
  
    var currentClientIndex = 1;
  
    function updateContent(clientIndex) {
      if (clients) {
        var client = clients['client-' + clientIndex];
        imgClients.style.backgroundImage = 'url(' + client.img + ')';
        titleClient.textContent = client.title;
        local.textContent = client.local;
        income.textContent = client.income;
        date.textContent = client.date;
        life.textContent = client.life;
      }
    }
  

    document.getElementById('left-carret-client').addEventListener('click', function() {
      if (currentClientIndex > 1) {
        currentClientIndex--;
      } else {
        currentClientIndex = Object.keys(clients).length;
      }
      updateContent(currentClientIndex);
    });
  
    document.getElementById('right-carret-client').addEventListener('click', function() {
      if (currentClientIndex < Object.keys(clients).length) {
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