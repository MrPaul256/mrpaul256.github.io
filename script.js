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

 // =========================
// Fly-in and Fly-out Animation for Project Cards
// =========================
const projectCards = document.querySelectorAll(".project-card");
let lastScrollY = window.scrollY; // track scroll direction

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Detect scroll direction
      if (window.scrollY > lastScrollY) {
        // Scrolling down → fly in from left
        entry.target.classList.add("visible-left");
        entry.target.classList.remove("visible-right", "flyout");
      } else {
        // Scrolling up → fly in from right
        entry.target.classList.add("visible-right");
        entry.target.classList.remove("visible-left", "flyout");
      }
    } else {
      // Card leaves viewport → reset
      entry.target.classList.add("flyout");
      entry.target.classList.remove("visible-left", "visible-right");
    }
  });

  // Update scroll position after processing
  lastScrollY = window.scrollY;
}, { threshold: 0.2 });

// Force initial check on page load
window.addEventListener("load", () => {
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      card.classList.add("visible-left"); // default direction
    }
  });
});

// =========================
// Typewriter Animation with Fade
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const typewriterElement = document.getElementById("typewriter");

  // Paragraphs to cycle through
  const paragraphs = [
  "Welcome to My Digital Portfolio.",
  "I'm Paul Ssekanaabi, aka Mr. Paul 🇺🇬",
  "I'm an ICT Educator.",
  "I Build Websites and Digital Solutions.",
  "Let's Connect 🤝",
  "Share your Tech Challenge, and Let's Build Solutions Together.",
    "Thank you for Visiting 🤝🤝".
  ];

  let paragraphIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = paragraphs[paragraphIndex];

    if (!isDeleting) {
      // Typing forward
      typewriterElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        // Pause before fade out
        setTimeout(() => {
          typewriterElement.classList.add("fade-out");
          setTimeout(() => {
            isDeleting = true;
            typeEffect();
          }, 1000); // fade duration
        }, 2000); // pause before fade
        return;
      }
    } else {
      // Reset after fade out
      typewriterElement.textContent = "";
      charIndex = 0;
      isDeleting = false;
      paragraphIndex = (paragraphIndex + 1) % paragraphs.length;

      // Fade back in before typing next
      typewriterElement.classList.remove("fade-out");
    }

    const speed = 100; // typing speed
    setTimeout(typeEffect, speed);
  }

  typeEffect();
});

projectCards.forEach(card => cardObserver.observe(card));
