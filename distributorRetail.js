document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('retailOrderChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Retail Orders',
                data: [8, 15, 10, 18, 22, 20],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
});


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