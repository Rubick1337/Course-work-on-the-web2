const modal = document.querySelector('#modal-content');
const black_navigation = querySelector("navigation");
if (isDarkThemeEnabled) {
    switchInput.checked = true;
    modal.classList.add('dark-theme');
    black_navigation.classList.add('dark-theme');
  }
  switchInput.addEventListener('change', function() {
    if (this.checked) {
      modal.classList.add('dark-theme');
      black_navigation.classList.add('dark-theme');
    } else {
      modal.classList.remove('dark-theme');
      black_navigation.classList.remove('dark-theme');
    }
  });