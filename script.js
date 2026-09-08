const backToTop = document.querySelector('[data-back-to-top]');
const year = document.querySelector('#year');
const scrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ? 'auto'
  : 'smooth';

year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-scroll]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
  });
});

const toggleBackToTop = () => {
  backToTop.classList.toggle('is-visible', window.scrollY > 500);
};

window.addEventListener('scroll', toggleBackToTop, { passive: true });
toggleBackToTop();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: scrollBehavior });
});
