const switchInput = document.querySelector('.switch-input');
const body = document.body;

switchInput.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});
