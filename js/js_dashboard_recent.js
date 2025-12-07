const TASKS_STORAGE_KEY = 'ttTasks';

document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('recentTasksList');
  if (!list) return;

  let tasks = [];
  const saved = localStorage.getItem(TASKS_STORAGE_KEY);
  if (saved) {
    try {
      tasks = JSON.parse(saved) || [];
    } catch (e) {
      tasks = [];
    }
  }

  // Take last tasks (most recently added)
  const recent = tasks.slice(-5).reverse(); // newest first

  list.innerHTML = '';

  if (recent.length === 0) {
    const li = document.createElement('li');
    li.className = 'list-group-item text-muted';
    li.textContent = 'No tasks yet. Add tasks on the Tasks page.';
    list.appendChild(li);
    return;
  }

  recent.forEach(t => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    // choose badge color by status
    let badgeClass = 'bg-primary';
    if (t.status === 'In Progress') badgeClass = 'bg-warning text-dark';
    if (t.status === 'Done') badgeClass = 'bg-success';

    li.innerHTML = `
      <span>${t.title}</span>
      <span class="badge ${badgeClass}">${t.status}</span>
    `;
    list.appendChild(li);
  });
});
