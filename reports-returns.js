// Sidebar toggle logic
const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
const sidebar = document.getElementById("sidebar");

sidebarToggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});


 // Dashboard nav logic
 const dashboardNavLinks = [
    'distributorPage.html',
    'manufacturerPage.html',
    'distributorOrder.html',
    'inventory.html',
    'distributorRetail.html'
];
document.querySelectorAll('.sidebar-nav a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(dashboardNavLinks[idx], '_self');
    })
});