document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn");
  if (this.location.href.includes("#en")) {
    dropbtn.textContent = "EN";
    dropbtn.style.backgroundImage = "/images/flag-usa-icon.png";
  }
  else if(this.location.href.includes("#en"))
    {
      dropbtn.textContent = "RU"
        dropbtn.style.backgroundImage = "/images/Russia-Flag-icon.png"
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
