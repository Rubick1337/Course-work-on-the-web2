window.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
  
    nameInput.value = localStorage.getItem('name') || '';
    phoneInput.value = localStorage.getItem('phone') || '';
  });