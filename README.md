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

Directory / File,Description
/,Root Directory
├── index.html,Login Page (Entry Point).
├── dashboard.html,Main Dashboard (KPIs & Charts).
├── cars.html,Vehicle Inventory Page.
├── rentals.html,Rental Transaction Logs.
├── customers.html,Customer Database.
├── maintenance.html,Service & Repair Logs.
├── profile.html,Admin Profile Settings.
├── settings.html,System Configuration.
├── css/,Styling Assets Directory
│ ├── style.css,Main Layout & Component Styles.
│ └── themes.css,Color Variables & Dark Mode Logic.
├── js/,JavaScript Logic Directory
│ ├── auth.js,Login/Logout & Session Logic.
│ ├── dashboard.js,Charts & KPI Calculations.
│ ├── data.js,Data Storage (LocalStorage Engine).
│ ├── logic.js,CRUD Operations (Add/Edit/Delete).
│ ├── main.js,Global Initialization & Sidebar Logic.
│ └── render.js,HTML Table Generators.
└── images/,"Assets (Car photos, User avatars, Logo)."
---

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


