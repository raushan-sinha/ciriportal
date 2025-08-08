document.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.querySelector('#uploadImage');
    const avatar = document.querySelector('#avatarPreview');
    const savedImage = localStorage.getItem('userImage');
    if (savedImage) {
        avatar.src = savedImage;
    }

    uploadInput.addEventListener('change', (e) => {
        const reader = new FileReader();
        reader.onload = function () {
            avatar.src = reader.result;
            localStorage.setItem('userImage', reader.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    });
});



const ctx1 = document.getElementById('salesChart');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Monthly Sales ($)',
            data: [5300, 6200, 5800, 6400, 7100, 7425],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } }
    }
});

/* Inventory Doughnut Chart */
const ctx2 = document.getElementById('inventoryChart');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['In Stock', 'Low Stock', 'Out of Stock'],
        datasets: [{
            data: [195, 35, 8],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});


//todo: dashboard Nav -
const dashboardNavLinks = [
    'distributorPage.html',
    'manufacturerPage.html',
    'distributorOrder.html',
    'inventory.html',
    'distributorRetail.html',
    'reports-returns.html',
    'geo-analytics.html',
    'retailer-territory.html'
];

document.querySelectorAll('.sidebar-nav a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(dashboardNavLinks[idx], '_self');
    })
})


const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
const sidebar = document.getElementById('sidebar');

sidebarToggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


const ctx = document.getElementById('salesChart').getContext('2d');

const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales ($)',
            data: [1200, 1900, 3000, 2200, 3500, 4200],
            fill: true,
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderColor: '#3b82f6',
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#0f172a'
                }
            },
            x: {
                ticks: {
                    color: '#0f172a'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#0f172a'
                }
            }
        }
    }
});
