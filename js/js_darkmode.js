document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('darkModeToggle');
  const iconSpan = document.getElementById('darkModeIcon');
  if (!toggleBtn || !iconSpan) return;

  const savedMode = localStorage.getItem('ttDarkMode');

  function setIcon(isDark) {
    iconSpan.textContent = isDark ? '☀' : '☾';
  }

  if (savedMode === 'on') {
    document.body.classList.add('dark-mode');
    setIcon(true);
  } else {
    setIcon(false);
  }

  toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('ttDarkMode', isDark ? 'on' : 'off');
    setIcon(isDark);
  });
});
