document.addEventListener("DOMContentLoaded", function () {
  const lang = getLanguage();
  const dropbtn = document.querySelector(".dropbtn");
  if (lang == "en") {
    dropbtn.textContent = "EN";
    dropbtn.style.backgroundImage = 'url("/images/flag-usa-icon.png")';
  } else if (lang == "ru") {
    dropbtn.textContent = "RU";
    dropbtn.style.backgroundImage = 'url("/images/Russia-Flag-icon.png")';
  }
  const dropdownContent = document.querySelector(".dropdown-content");
  dropbtn.addEventListener("click", function () {
    const computedStyle = getComputedStyle(dropdownContent);
    const displayValue = computedStyle.display;

    if (displayValue === "none") {
      dropdownContent.style.display = "flex";
    } else {
      dropdownContent.style.display = "none";
    }
  });
  function getLanguage() {
    return localStorage.getItem('lang') || 'ru';
  }
});
