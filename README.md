# Task Tracker Portal

Task Tracker is a responsive web application that helps users create, organize, and track their tasks through a clean dashboard, task list, and helpful visual charts.

🔗 **Live Demo:** https://megatnaufal.github.io/task_tracker/index.html  

---

## ✨ Features

### Dashboard
- Summary cards for:
  - Total tasks
  - Tasks to do
  - Tasks done
- Recent tasks list with hover effects
- Task status overview chart (e.g. To Do, In Progress, Done)
- Task priority chart (e.g. Low, Medium, High)
- Responsive layout for desktop and mobile

### Tasks Management
- View all tasks in one place
- Task metadata (title, description, status, priority, etc.)
- Integration with dashboard statistics and charts

### Guide
- Simple guide page to help new users understand how to use the portal

### UI & Experience
- Dark mode toggle (light / dark theme)
- Colorful, modern cards with hover animations
- Custom SVG-based logo in the navbar
- Mobile-friendly navbar:
  - Hamburger menu on the left on small screens
  - Collapsible navigation items (Dashboard, Tasks, Guide, Logout)

---

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript 
- **Framework:** Bootstrap 5.3.3 
- **Charts:** Chart.js
- **Hosting:** GitHub Pages

---

## 📁 Project Structure

task_tracker/
├── index.html          # Landing / Entry Page
├── dashboard.html      # Main Dashboard (Stats & Charts)
├── tasks.html          # Task List / Management Page
├── guide.html          # User Guide / Instructions
├── css/
│   ├── css_style.css   # Custom Styles (Layout, Colors, Dark Mode, etc.)
├── js/
    ├── js_dashboard_chart.js # Logic for dashboard charts (status & priority)
    ├── js_dashboard_recent.js# Rendering recent tasks on dashboard
    ├── js_darkmode.js       # Dark mode toggle handling
    └── js_tasks.js          # Task data and related logic

---
Project Screenshot
1. Secure Login
(Authentication page with validation and error handling)
<img width="1917" height="968" alt="image" src="https://github.com/user-attachments/assets/cd7b28fd-51bd-473f-b49a-84ac016d8cd8" />

2. Admin Dashboard
<img width="1901" height="973" alt="image" src="https://github.com/user-attachments/assets/77977c21-e2d8-406c-87de-e096cfe7f6f1" />
<img width="1901" height="967" alt="image" src="https://github.com/user-attachments/assets/350fc419-1f7b-4d1f-93f6-4af2d3d7eb3f" />
   
3. Tasks
<img width="1918" height="972" alt="image" src="https://github.com/user-attachments/assets/a28175ce-d951-4961-9b1f-a571ac93af2b" />

4.Guide Tasks
<img width="1918" height="971" alt="image" src="https://github.com/user-attachments/assets/31d77540-37d1-4f7e-8e7b-6f89eb8c865d" />




## 📱 Responsive Design

- Uses Bootstrap’s grid system and utility classes.

---

## 🌙 Dark Mode

- Dark mode toggle button in the navbar.
- Uses JavaScript (`js_darkmode.js`) to:
- Switch `body` between light and dark classes.
- Update the icon (e.g. moon/sun).
- Adjust card, text, and background colors accordingly.

---

---

## 👥 Authors

- Megat Naufal Syabil Bin Zamri (2025121211)
- Faris Afizuan Bin Abd Kaharmuzakir (2025136615)

📚 **Course:** IMS566  
📅 **Year:** 2025  

---

## 📄 License

This project is created for academic purposes (IMS566) and personal learning.  
You may fork and adapt it for your own study or practice.


