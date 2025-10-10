document.addEventListener('DOMContentLoaded', () => {
  /* ==========================
     🔹 HAMBURGER MENU
  =========================== */
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('header nav');
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY || 0;
  let ticking = false;

  function toggleMenu(open = null) {
    const isOpen = nav.classList.contains('active');
    const shouldOpen = open !== null ? open : !isOpen;
    nav.classList.toggle('active', shouldOpen);
    hamburger.classList.toggle('open', shouldOpen);
    hamburger.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => toggleMenu());
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
  }

  document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY || 0;
        if (currentScroll > lastScrollY && currentScroll > 50) {
          header.style.top = '-120px';
        } else {
          header.style.top = '0';
        }
        if (nav.classList.contains('active')) {
          toggleMenu(false);
        }
        lastScrollY = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });

  /* ==========================
     🔹 RECENZIE – KARUSEL
  =========================== */
  const track = document.querySelector('.reviews-track');
  const reviews = document.querySelectorAll('.review');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (track && reviews.length > 0) {
    let index = 0;
    const total = reviews.length;
    const intervalTime = 5000; // 5 sekúnd medzi automatickými posunmi
    let autoSlide;

    function showSlide(i) {
      index = (i + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }

    function startAuto() {
      stopAuto();
      autoSlide = setInterval(nextSlide, intervalTime);
    }

    function stopAuto() {
      clearInterval(autoSlide);
    }

    // Ovládacie tlačidlá
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAuto();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAuto();
      });
    }

    // Pozastavenie automatického posúvania pri hoveri
    const slider = document.querySelector('.reviews-slider');
    if (slider) {
      slider.addEventListener('mouseenter', stopAuto);
      slider.addEventListener('mouseleave', startAuto);
      slider.addEventListener('touchstart', stopAuto, { passive: true });
      slider.addEventListener('touchend', startAuto, { passive: true });
    }

    // Spusti automatické posúvanie
    startAuto();
  }
});
