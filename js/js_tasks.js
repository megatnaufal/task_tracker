const STORAGE_KEY = 'ttTasks';  // name for localStorage

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('taskForm');
  const tbody = document.querySelector('#tasksTable tbody');
  const submitBtn = document.getElementById('taskSubmitBtn');
  const formTitle = document.getElementById('taskFormTitle');

  if (!form || !tbody) return;

  let tasks = [];
  let editingIndex = null; // null = add mode, number = edit mode

  // Load from localStorage
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      tasks = JSON.parse(saved) || [];
    } catch (e) {
      tasks = [];
    }
  }

  // If no tasks saved yet, add sample tasks
if (!tasks || tasks.length === 0) {
  tasks = [
    {
      title: 'Prepare IMS566 Task Tracker',
      dueDate: '2025-06-01',
      priority: 'High',
      status: 'In Progress'
    },
    {
      title: 'Review weekly lecture notes',
      dueDate: '2025-05-30',
      priority: 'Medium',
      status: 'To Do'
    },
    {
      title: 'Submit Assignment Elective',
      dueDate: '2025-06-05',
      priority: 'Low',
      status: 'To Do'
    },
    {
      title: 'Update project documentation',
      dueDate: '2025-06-03',
      priority: 'High',
      status: 'Done'
    }
  ];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}


  // Render all tasks into table
  function renderTable() {
    tbody.innerHTML = '';
    tasks.forEach((t, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${t.title}</td>
        <td>${t.dueDate}</td>
        <td>${t.priority}</td>
        <td>${t.status}</td>
        <td>
          <button class="btn btn-sm btn-warning btn-edit" data-index="${index}">Edit</button>
          <button class="btn btn-sm btn-danger btn-delete" data-index="${index}">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Save array to localStorage
  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  // Reset form back to "Add mode"
  function resetForm() {
    form.reset();
    editingIndex = null;
    formTitle.textContent = 'Add New Task';
    submitBtn.textContent = 'Add';
  }

  // Initial render
  renderTable();

  // Add or Update task
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('taskTitle').value.trim();
    const dueDate = document.getElementById('taskDueDate').value;
    const priority = document.getElementById('taskPriority').value;
    const status = document.getElementById('taskStatus').value;

    if (!title || !dueDate || !priority || !status) {
      return;
    }

    const data = { title, dueDate, priority, status };

    if (editingIndex === null) {
      // Add mode
      tasks.push(data);
    } else {
      // Edit mode
      tasks[editingIndex] = data;
    }

    saveTasks();
    renderTable();
    resetForm();
  });

  // Handle Edit and Delete buttons
  tbody.addEventListener('click', function (e) {
    const target = e.target;
    const indexAttr = target.getAttribute('data-index');
    if (indexAttr === null) return;
    const index = parseInt(indexAttr, 10);

    // Delete
    if (target.classList.contains('btn-delete')) {
      tasks.splice(index, 1);
      saveTasks();
      renderTable();
      resetForm();
    }

    // Edit
    if (target.classList.contains('btn-edit')) {
      const item = tasks[index];
      if (!item) return;

      document.getElementById('taskTitle').value = item.title;
      document.getElementById('taskDueDate').value = item.dueDate;
      document.getElementById('taskPriority').value = item.priority;
      document.getElementById('taskStatus').value = item.status;

      editingIndex = index;
      formTitle.textContent = 'Edit Task';
      submitBtn.textContent = 'Update';
    }
  });
});
