// Chart configuration
const DASHBOARD_CHART_TYPE = 'polarArea'; // Options: 'bar', 'polarArea', 'pie', 'doughnut', 'line'
const PRIORITY_CHART_TYPE = 'bar';        // Options: 'bar', 'polarArea', 'pie', 'doughnut', 'line'

document.addEventListener('DOMContentLoaded', function () {
  const TASKS_STORAGE_KEY = 'ttTasks'; // Moved inside to avoid conflict
  // Get all DOM elements
  const ctx = document.getElementById('taskStatusChart');
  const priorityCtx = document.getElementById('taskPriorityChart');
  const totalEl = document.getElementById('totalTasksText');
  const todoEl = document.getElementById('tasksTodoText');
  const doneEl = document.getElementById('tasksDoneText');

  console.log('DOM loaded, Chart.js available:', typeof Chart !== 'undefined');
  console.log('Status canvas found:', !!ctx);
  console.log('Priority canvas found:', !!priorityCtx);

  // Load tasks from localStorage
  let tasks = [];
  const saved = localStorage.getItem(TASKS_STORAGE_KEY);
  if (saved) {
    try {
      tasks = JSON.parse(saved) || [];
    } catch (e) {
      console.error('Error parsing tasks:', e);
    }
  }

  console.log('Tasks loaded:', tasks.length);
  console.log('First 3 tasks:', tasks.slice(0, 3));

  // Count task statuses
  const counts = {
    total: tasks.length,
    todo: 0,
    inProgress: 0,
    done: 0,
    highPriority: 0,
    mediumPriority: 0,
    lowPriority: 0
  };

  tasks.forEach(task => {
    // Count by status
    if (task.status === 'To Do') counts.todo++;
    else if (task.status === 'In Progress') counts.inProgress++;
    else if (task.status === 'Done') counts.done++;

    // Count by priority (excluding done tasks)
    if (task.status !== 'Done') {
      console.log('Task priority:', task.priority, 'Status:', task.status); // Debug log
      if (task.priority === 'High') counts.highPriority++;
      else if (task.priority === 'Medium') counts.mediumPriority++;
      else if (task.priority === 'Low') counts.lowPriority++;
    }
  });

  console.log('Final counts:', counts);

  // Update summary cards
  if (totalEl) totalEl.textContent = counts.total;
  if (todoEl) todoEl.textContent = counts.todo;
  if (doneEl) doneEl.textContent = counts.done;

  console.log('Summary counts:', counts);

  // Create Task Status Chart
  if (ctx) {
    console.log('Creating status chart...');
    new Chart(ctx, {
      type: DASHBOARD_CHART_TYPE,
      data: {
        labels: ['To Do', 'In Progress', 'Done'],
        datasets: [{
          label: 'Number of Tasks',
          data: [counts.todo, counts.inProgress, counts.done],
          backgroundColor: [
            'rgba(129, 140, 248, 0.8)',
            'rgba(251, 191, 36, 0.8)',
            'rgba(52, 211, 153, 0.8)'
          ],
          borderColor: [
            'rgba(129, 140, 248, 1)',
            'rgba(251, 191, 36, 1)',
            'rgba(52, 211, 153, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 15,
              font: { size: 12 }
            }
          }
        }
      }
    });
    console.log('Status chart created successfully');
  } else {
    console.error('Status chart canvas not found!');
  }

  // Create Priority Chart (excluding completed tasks)
  if (priorityCtx) {
    console.log('Creating priority chart...');
    console.log('Priority counts:', counts.highPriority, counts.mediumPriority, counts.lowPriority);
    
    const priorityChart = new Chart(priorityCtx, {
      type: PRIORITY_CHART_TYPE,
      data: {
        labels: ['High', 'Medium', 'Low'],
        datasets: [{
          label: 'Active Tasks by Priority',
          data: [counts.highPriority, counts.mediumPriority, counts.lowPriority],
          backgroundColor: [
            'rgba(239, 68, 68, 0.8)',
            'rgba(234, 179, 8, 0.8)',
            'rgba(34, 197, 94, 0.8)'
          ],
          borderColor: [
            'rgba(239, 68, 68, 1)',
            'rgba(234, 179, 8, 1)',
            'rgba(34, 197, 94, 1)'
          ],
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: PRIORITY_CHART_TYPE === 'bar' ? {
          y: {
            beginAtZero: true,
            ticks: { 
              precision: 0,
              font: { size: 11 }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: { display: false },
            ticks: {
              font: { size: 11 }
            }
          }
        } : undefined,
        plugins: {
          legend: { 
            display: PRIORITY_CHART_TYPE !== 'bar',
            position: 'bottom',
            labels: {
              padding: 15,
              font: { size: 12 }
            }
          }
        }
      }
    });
    console.log('Priority chart created successfully:', priorityChart);
  } else {
    console.error('Priority chart canvas not found!');
  }
});