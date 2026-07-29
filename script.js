// =========================
// Toggle Mobile Menu
// =========================
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");

  if (navLinks) {
    navLinks.classList.toggle("open");
  }
  if (hamburger) {
    hamburger.classList.toggle("active"); // toggles ☰ ↔ ✖
  }
}

// =========================
// Close menu when clicking a link
// =========================
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");

    if (navLinks) {
      navLinks.classList.remove("open");
    }
    if (hamburger) {
      hamburger.classList.remove("active");
    }
  });
});


// =========================
    // Header Scroll Effect
    // =========================
    document.addEventListener("scroll", () => {
      const header = document.querySelector(".fixed-header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
// =========================
// Scroll Animations
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in, .slide-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
});

// =========================
// Back to Top + Logo Scroll
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  const logoLink = document.querySelector(".logo-link");

  window.addEventListener("scroll", () => {
    if (backToTop) {
      backToTop.style.display = (window.scrollY > 300) ? "block" : "none";
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// =========================
// Carousel Functionality
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel .slides img");
  const nextBtn = document.querySelector(".carousel-control-next");
  const prevBtn = document.querySelector(".carousel-control-prev");
  let index = 0;
  let autoSlide;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("active");
      if (idx === i) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  // Button controls
  if (nextBtn) nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  if (prevBtn) prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  // Auto slide every 5s
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  // Initialize
  if (slides.length > 0) {
    showSlide(index);
    startAutoSlide();
  }
});

 // Fly-in and Fly-out Animation for Project Cards
const projectCards = document.querySelectorAll(".project-card");

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Card enters viewport → fly in
      entry.target.classList.add("visible");
      entry.target.classList.remove("flyout");
    } else {
      // Card leaves viewport (scrolling up) → fly out right
      if (window.scrollY > entry.target.offsetTop) {
        entry.target.classList.add("flyout");
        entry.target.classList.remove("visible");
      }
    }
  });
}, { threshold: 0.2 });

projectCards.forEach(card => cardObserver.observe(card));

// =========================
    // Fly-in Section Animation
    // =========================
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
    sections.forEach(sec => observer.observe(sec));
