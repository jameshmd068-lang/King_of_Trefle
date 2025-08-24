const switchBtn = document.getElementById('modeSwitch');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Switch dark/light mode
switchBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Charger le thème enregistré
window.addEventListener('load', () => {
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});

// Menu hamburger
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
