document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn");
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
  document.querySelectorAll(".language-btn").forEach((item) => {
    item.addEventListener("click", function () {
      const computedStyle = getComputedStyle(item);
      const backgroundValue = computedStyle.backgroundImage;

      dropbtn.textContent = this.textContent;
      dropbtn.style.backgroundImage = backgroundValue;
      dropdownContent.style.display = "none";
      dropbtn.style.animation = "slide-up-sun 500ms ease-in-out forwards";
      setTimeout(() => {
        dropbtn.style.animation = "";
      }, 700);
    });
  });
});
