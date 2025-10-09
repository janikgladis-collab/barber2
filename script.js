// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Animácia hamburgera
hamburger.addEventListener('click', () => {
  const spans = hamburger.querySelectorAll('span');
  spans[0].classList.toggle('rotate1');
  spans[1].classList.toggle('hide');
  spans[2].classList.toggle('rotate2');
});

// ========== RECENZIE SLIDER ==========
const track = document.querySelector('.reviews-track');
const slides = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  if (i < 0) index = slides.length - 1;
  else if (i >= slides.length) index = 0;
  else index = i;

  track.style.transform = `translateX(-${index * 100}%)`;
}

// Tlačidlá
prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

// Automatické posúvanie
setInterval(() => showSlide(index + 1), 7000);

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
      nav.classList.remove('active');
    }
  });
});
