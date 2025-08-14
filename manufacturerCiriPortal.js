// Mobile sidebar toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Navigation handling
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        contentSections.forEach(s => s.classList.remove('active'));

        // Add active class to clicked link
        link.classList.add('active');

        // Show corresponding section
        const targetSection = document.getElementById(link.dataset.section);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Close sidebar on mobile after selection
        if (window.innerWidth <= 768) {
            sidebar.classList.add('collapsed');
        }
    });
});

// Close alerts
document.querySelectorAll('.alert-close').forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.closest('.alert').style.display = 'none';
    });
});

// Auto-collapse sidebar on mobile
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.add('collapsed');
    } else {
        sidebar.classList.remove('collapsed');
    }
});

// Initialize mobile state
if (window.innerWidth <= 768) {
    sidebar.classList.add('collapsed');
}