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
});


