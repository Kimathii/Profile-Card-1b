// ── THEME ──
(function () {
  const saved = localStorage.getItem('profile-theme') || 'light';
  applyTheme(saved, true);
})();

function applyTheme(theme, init) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn  = document.getElementById('theme-btn');
  const icon = document.getElementById('theme-icon');
  const lbl  = document.getElementById('theme-label');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  if (lbl)  lbl.textContent  = theme === 'dark' ? 'Light mode' : 'Dark mode';
  if (btn)  btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  if (!init) localStorage.setItem('profile-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// ── EPOCH TIME ──
function updateTime() {
  const el = document.getElementById('epoch-time');
  if (el) el.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);