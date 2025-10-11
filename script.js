// script.js - main site scripts

// Menu: hamburger toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
if (hamburger && nav){
  hamburger.addEventListener("click", () => {
    const open = hamburger.classList.toggle("open");
    nav.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    nav.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }));
}

// Reviews slider
const track = document.querySelector(".reviews-track");
const reviews = document.querySelectorAll(".review");
let idx = 0;
function updateReviews() {
  if (!track || !reviews.length) return;
  track.style.transform = `translateX(-${idx * 100}%)`;
}
function next() { idx = (idx + 1) % reviews.length; updateReviews(); }
function prev() { idx = (idx - 1 + reviews.length) % reviews.length; updateReviews(); }
document.getElementById("nextReview")?.addEventListener("click", next);
document.getElementById("prevReview")?.addEventListener("click", prev);
if (track && reviews.length > 0) {
  setInterval(() => { if (document.hasFocus()) next(); }, 5000);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (nav && nav.classList.contains('active')) {
        hamburger.classList.remove('open');
        nav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Fade-in on scroll (IntersectionObserver)
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in, .fade-in .fade-in");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  fadeEls.forEach(el => observer.observe(el));
});