/* ─── Navbar scroll state ─── */
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveLink();
  toggleBackToTop();
}, { passive: true });

/* ─── Active nav link on scroll ─── */
function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

/* ─── Mobile menu ─── */
const navToggle = document.querySelector('.nav-toggle');
navToggle?.addEventListener('click', () => nav.classList.toggle('menu-open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('menu-open'));
});

/* ─── Theme toggle ─── */
const themeBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

themeBtn?.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

/* ─── Scroll-triggered fade-in ─── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.project-item, .timeline-item, .contact-link-item').forEach(el => {
  observer.observe(el);
});

/* ─── Back to top ─── */
const btt = document.getElementById('back-to-top');

function toggleBackToTop() {
  btt?.classList.toggle('visible', window.scrollY > 300);
}

btt?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
