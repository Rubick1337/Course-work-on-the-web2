const modal = document.querySelector('#modal-content');
switchInputs = document.querySelectorAll('.switch-input');

// Проверяем и применяем тему при загрузке страницы
switchInputs.forEach(switchInput => {
  if (isDarkThemeEnabled) {
    switchInput.checked = true;
    modal.classList.add('dark-theme');
  }

  // Добавляем обработчик события для каждого переключателя
  switchInput.addEventListener('change', function() {
    if (this.checked) {
      modal.classList.add('dark-theme');
    } else {
      modal.classList.remove('dark-theme');
    }
  });
});
