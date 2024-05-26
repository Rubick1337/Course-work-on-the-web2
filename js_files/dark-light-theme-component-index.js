const modal = document.querySelector('#modal-content');
const black_navigation = querySelector("navigation")
if (isDarkThemeEnabled) {
    switchInput.checked = true;
    modal.classList.add('dark-theme');
    navigation.classList.add('dark-theme');
  }
  switchInput.addEventListener('change', function() {
    if (this.checked) {
      modal.classList.add('dark-theme');
      navigation.classList.add('dark-theme');
    } else {
      modal.classList.remove('dark-theme');
      navigation.classList.remove('dark-theme');
    }
  });