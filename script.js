// =======================================
// 🔹 MENU A HAMBURGER
// =======================================
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("active");
});

// Zavrie menu po kliknutí na odkaz
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    nav.classList.remove("active");
  });
});

// =======================================
// 🔹 RECENZIE – automatický slider
// =======================================
const track = document.querySelector(".reviews-track");
const reviews = document.querySelectorAll(".review");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const total = reviews.length;

function showReview(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    showReview(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    showReview(index);
  });
}

setInterval(() => {
  index = (index + 1) % total;
  showReview(index);
}, 6000);

// =======================================
// 🔹 PLYNULÉ SCROLL
// =======================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
