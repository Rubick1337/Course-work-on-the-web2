document.addEventListener("DOMContentLoaded", function () {
    const russianButton = document.getElementById("button-ru");
    const englishButton = document.getElementById("button-en");
    const allLang = ['en','ru'];
    var langArr;
    fetch('/json/localization.json') 
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
    russianButton.addEventListener("click", function () {
      const language = "ru";
      location.href = window.location.pathname + '#' + language;
      location.reload();
    });
  
    englishButton.addEventListener("click", function () {
      const language = "en";
      location.href = window.location.pathname + '#' + language;
      location.reload();
    });
    function changeLanguage()
    {
      let hash = window.location.hash;
      hash = hash.substring(1);
      if(!allLang.includes(hash))
        {
            location.href = window.location.pathname + "#ru"
            location.reload();
        }
        for (let key in langArr) {  
            const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
            elements.forEach(element => {
              element.innerHTML = langArr[key][hash];
            });}
    }
  });
