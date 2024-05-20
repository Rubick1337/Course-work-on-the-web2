const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const appLink = document.getElementById('application-link');

appLink.addEventListener('click', () => {
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('phone', phoneInput.value);
  window.location.href = '/pages_html/application_user.html';
});