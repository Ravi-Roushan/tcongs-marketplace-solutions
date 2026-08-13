/* ============================================================
   TCONGS — main.js
   Preloader | Navbar | Mobile Menu | Scroll Reveal
   Skill Bars | FAQ Accordion
   ============================================================ */

/* ── Preloader ────────────────────────────────────────────── */
const preloaderAtStart = document.getElementById('preloader');
if (preloaderAtStart) {
  document.body.style.overflow = 'hidden';
}

window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hide');
    }
    document.body.style.overflow = '';
  }, preloaderAtStart ? 2400 : 0);
});


/* ── Scroll Reveal (IntersectionObserver) ─────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ── Skill Bars ───────────────────────────────────────────── */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        setTimeout(() => {
          bar.style.width = targetWidth + '%';
        }, 200);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillList = document.querySelector('.skill-list');
if (skillList) skillObserver.observe(skillList);

/* ── FAQ Accordion ────────────────────────────────────────── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const currentItem = btn.closest('.faq-item');
    const isAlreadyOpen = currentItem.classList.contains('active');

    // Close all items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    // Open clicked item only if it was closed
    if (!isAlreadyOpen) {
      currentItem.classList.add('active');
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const heroBg = document.getElementById("heroBg");
  if (!heroBg) return;

  // Define an array containing the URLs of the images you want to rotate through
  const images = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80", // Your default image
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80", // Second background image choice
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80"  // Third background image choice
  ];

  let currentIndex = 0;
  const changeInterval = 5000; // Time in milliseconds before changing the image (5 seconds)

  function changeBackground() {
    // 1. Apply the next image from the array while keeping your linear gradient overlay intact
    heroBg.style.backgroundImage = `linear-gradient(135deg, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.72) 50%, rgba(13,17,23,0.88) 100%), url('${images[currentIndex]}')`;

    // 2. Increment index counter and wrap back around to 0 when reaching the end
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Run once immediately to set up the initial background image
  changeBackground();

  // Initialize the loop to update the background image repeatedly over time
  setInterval(changeBackground, changeInterval);
});

