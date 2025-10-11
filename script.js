// ================================
// Menu: hamburger toggle
// ================================
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
if (hamburger && nav){
  hamburger.addEventListener("click", () => {
    const open = hamburger.classList.toggle("open");
    nav.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(open));
  });
  // Close on nav link click (mobile)
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    nav.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }));
}

// ================================
// Reviews: auto slide every 5s (fixed)
// ================================
const track = document.querySelector(".reviews-track");
const reviews = document.querySelectorAll(".review");
let idx = 0;

function updateReviews() {
  if (!track || !reviews.length) return;
  track.style.transform = `translateX(-${idx * 100}%)`;
}

function next() {
  idx = (idx + 1) % reviews.length;
  updateReviews();
}

function prev() {
  idx = (idx - 1 + reviews.length) % reviews.length;
  updateReviews();
}

document.getElementById("nextReview")?.addEventListener("click", next);
document.getElementById("prevReview")?.addEventListener("click", prev);

// 🔹 bezpečnejší interval – nezhadzuje stránku
if (track && reviews.length > 0) {
  setInterval(() => {
    if (document.hasFocus()) next();
  }, 5000);
}

// ================================
// Smooth scroll (nice UX)
// ================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});