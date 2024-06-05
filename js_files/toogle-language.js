document.addEventListener("DOMContentLoaded", function () {
  const lang = getLanguage();
  const dropbtns = document.querySelectorAll(".dropbtn");
  const languageButtons = document.querySelectorAll(".language-btn");

  dropbtns.forEach(dropbtn => {
    if (lang == "en") {
      dropbtn.textContent = "EN";
      dropbtn.style.backgroundImage = 'url("/images/flag-usa-icon.png")';
    } else if (lang == "ru") {
      dropbtn.textContent = "RU";
      dropbtn.style.backgroundImage = 'url("/images/Russia-Flag-icon.png")';
    }

    dropbtn.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      const computedStyle = getComputedStyle(dropdownContent);
      const displayValue = computedStyle.display;

      if (displayValue === "none") {
        dropdownContent.style.display = "flex";
      } else {
        dropdownContent.style.display = "none";
      }
    });
  });

  languageButtons.forEach(button => {
    button.addEventListener("click", function () {
      const selectedLang = this.textContent;
      localStorage.setItem('lang', selectedLang.toLowerCase());
      updateDropbtns(selectedLang);
    });
  });

  function updateDropbtns(selectedLang) {
    dropbtns.forEach(dropbtn => {
      if (selectedLang === "EN") {
        dropbtn.textContent = "EN";
        dropbtn.style.backgroundImage = 'url("/images/flag-usa-icon.png")';
      } else if (selectedLang === "RU") {
        dropbtn.textContent = "RU";
        dropbtn.style.backgroundImage = 'url("/images/Russia-Flag-icon.png")';
      }
    });
  }

  function getLanguage() {
    return localStorage.getItem('lang') || 'ru';
  }
});
