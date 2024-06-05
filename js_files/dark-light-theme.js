var switchInputs = document.querySelectorAll('.switch-input');
const body = document.body;
console.log(switchInputs)

// Проверяем, есть ли сохраненное значение в локальном хранилище
const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';

// Устанавливаем начальное значение в соответствии с сохраненным значением
if (isDarkThemeEnabled) {
  body.classList.add('dark-theme');
  switchInputs.forEach(input => input.checked = true);
}

// Функция для обновления темы
function updateTheme(isEnabled) {
  console.log("m1")
  if (isEnabled) {
    body.classList.add('dark-theme');
    localStorage.setItem('darkThemeEnabled', 'true');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('darkThemeEnabled', 'false');
  }
}

// Обработчик для всех переключателей
switchInputs.forEach(input => {
  input.addEventListener('change', function() {
    updateTheme(this.checked);
    // Синхронизируем все переключатели
    switchInputs.forEach(otherInput => {
      if (otherInput !== this) {
        otherInput.checked = this.checked;
      }
    });
  });
});
