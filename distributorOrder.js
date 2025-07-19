// Sidebar toggle logic
const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
const sidebar = document.getElementById('sidebar');

sidebarToggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

