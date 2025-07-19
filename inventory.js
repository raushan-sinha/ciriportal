const sidebarBtn = document.getElementById('sidebarToggleBtn');
const sidebar = document.getElementById('sidebar');
sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});