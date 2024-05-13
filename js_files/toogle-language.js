document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn");
  if (location.href.includes("#en")) {
    dropbtn.textContent = "EN";
    dropbtn.style.backgroundImage = 'url("/images/flag-usa-icon.png")';
  } else if (location.href.includes("#ru")) {
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
});
