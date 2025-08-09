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


// Main Price Chart (top section)
const priceChartElem = document.getElementById('priceChart');
if (priceChartElem) {
    const ctxMain = priceChartElem.getContext('2d');
    new Chart(ctxMain, {
        type: 'line',
        data: {
            labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Price Index',
                data: [5.5, 7, 5.2, 6, 7.8, 6.9],
                fill: true,
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: '#3b82f6',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    min: 3,
                    max: 8
                }
            }
        }
    });
}

// Mini Chart (in card)
const miniChartElem = document.getElementById('miniChart');
if (miniChartElem) {
    const ctxMini = miniChartElem.getContext('2d');
    new Chart(ctxMini, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', ''],
            datasets: [{
                data: [7, 6.5, 6.8, 7.2, 6.9, 7.3],
                borderColor: '#3b82f6',
                borderWidth: 2,
                fill: false,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false }
            }
        }
    });
}

// Secondary Price Chart (in grid-section)
const priceChart2Elem = document.getElementById('priceChart2');
if (priceChart2Elem) {
    const ctx2 = priceChart2Elem.getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Quarterly Price',
                data: [6.2, 7.1, 6.5, 7.8],
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderColor: '#10b981',
                borderWidth: 2
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
}



