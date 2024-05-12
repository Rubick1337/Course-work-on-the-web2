const switchInput = document.querySelector('.switch-input');
const body = document.body;

// Проверяем, есть ли сохраненное значение в локальном хранилище
const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';

// Устанавливаем начальное значение в соответствии с сохраненным значением
if (isDarkThemeEnabled) {
  body.classList.add('dark-theme');
  switchInput.checked = true;
}

switchInput.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-theme');
    // Сохраняем значение в локальном хранилище при изменении
    localStorage.setItem('darkThemeEnabled', 'true');
  } else {
    body.classList.remove('dark-theme');
    // Сохраняем значение в локальном хранилище при изменении
    localStorage.setItem('darkThemeEnabled', 'false');
  }
});