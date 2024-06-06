document.addEventListener('DOMContentLoaded', function() {
    var tariffs;
    console.log("DOMContentLoaded event fired");

    const lang = getLanguage();
    console.log("Language:", lang);

    fetch('/json/Pangination.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ой, ошибка в fetch: ' + response.statusText);
            }
            return response.json();
        })
        .then(jsonData => {
            var language = lang === 'ru' ? 'ru' : 'en';
            tariffs = jsonData[language];
            console.log("Tariffs loaded:", tariffs);
            updateContent(currentClientIndex);
            updatePaginationInfo();
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });

    var currentClientIndex = 1;
    var imgTariff = document.getElementById("img-slider-tarrif");
    var textTariff = document.getElementById("text-slider").querySelector("h2");

    function updateContent(clientIndex) {
        if (tariffs) {
            var tariff = tariffs['tariff-' + clientIndex];
            console.log("Updating content for tariff:", tariff);

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

    function updatePaginationInfo() {
        if (tariffs) {
            const totalSlides = Object.keys(tariffs).length;
            const pageInfo = document.getElementById('page-info');
            pageInfo.textContent = `${currentClientIndex}/${totalSlides}`;
        }
    }

    document.getElementById('prev-slide').addEventListener('click', function(event) {
        event.preventDefault();
        if (currentClientIndex > 1) {
            currentClientIndex--;
        } else {
            currentClientIndex = Object.keys(tariffs).length;
        }
        updateContent(currentClientIndex);
        updatePaginationInfo();
    });

    document.getElementById('next-slide').addEventListener('click', function(event) {
        event.preventDefault();
        if (currentClientIndex < Object.keys(tariffs).length) {
            currentClientIndex++;
        } else {
            currentClientIndex = 1;
        }
        updateContent(currentClientIndex);
        updatePaginationInfo();
    });

    function getLanguage() {
        return localStorage.getItem('lang') || 'ru';
    }
});