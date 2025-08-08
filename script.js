
// Dark/light mode toggle
const toggle = document.getElementById('mode-toggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

toggle.addEventListener('click', () => {
  const next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'dark' ? '☀️' : '🌙';
});
