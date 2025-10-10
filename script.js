// script.js

// Hamburger menu pre mobil
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Plynulé scrollovanie medzi sekciami
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('active'); // zavrie menu po kliknutí
    }
  });
});
