// users for Task Tracker
const USERS = [
  { username: 'user123',  password: 'task123' },
  { username: 'lecturer', password: 'abcd' },
  { username: 'megat', password: 'megat123' },
  { username: 'admin',    password: 'admin123' }
];

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const errorBox = document.getElementById('error');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Use USERS (not users)
    const user = USERS.find(function (u) {
      return u.username === username && u.password === password;
    });

    if (user) {
      errorBox.classList.add('d-none');
      sessionStorage.setItem('loggedInUser', user.username);
      window.location.href = 'dashboard.html';
    } else {
      errorBox.textContent = 'Invalid username or password.';
      errorBox.classList.remove('d-none');
    }
  });
});
