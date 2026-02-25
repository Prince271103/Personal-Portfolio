// Mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});
function closeMobile() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
}

// Scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Animate skill bars
        entry.target
          .querySelectorAll(".skill-bar-fill")
          .forEach((bar) => {
            const w = bar.dataset.width;
            bar.style.transform = `scaleX(${w})`;
            bar.classList.add("animated");
          });
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

// Also observe skill bars section directly
const skillSection = document.querySelector("#skills");
if (skillSection) {
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".skill-bar-fill").forEach((bar) => {
            const w = bar.dataset.width;
            setTimeout(() => {
              bar.style.transform = `scaleX(${w})`;
            }, 200);
          });
        }
      });
    },
    { threshold: 0.3 },
  ).observe(skillSection);
}

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  btn.textContent = "✓ Message sent!";
  btn.style.background = "var(--accent2)";
  setTimeout(() => {
    btn.textContent = "→ Send message";
    btn.style.background = "";
    e.target.reset();
  }, 3000);
}
