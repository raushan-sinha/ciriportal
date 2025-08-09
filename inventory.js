// Sidebar toggle logic
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const toggleBtn = document.getElementById("mobileMenuToggle");

    // Open sidebar
    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Close sidebar when clicking outside
    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Optional: Close on window resize above 768px
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        }
    });
});