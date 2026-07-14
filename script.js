const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.navlinks');
if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.reveal').forEach((el) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  observer.observe(el);
});

const filters = document.querySelectorAll('[data-filter]');
const items = document.querySelectorAll('[data-category]');
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((b) => b.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  items.forEach((item) => {
    item.style.display = filter === 'toate' || item.dataset.category === filter ? '' : 'none';
  });
}));

const form = document.querySelector('#booking-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('.form-status');
    status.textContent = 'Solicitarea a fost înregistrată. Revenim cu o confirmare a intervalului ales.';
    form.reset();
  });
}
