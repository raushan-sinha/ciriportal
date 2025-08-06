// Get references
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu'); // Adjust selector as per your navbar menu
const navLinks = document.querySelectorAll('.nav-menu a'); // All nav links inside the menu

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // You should define `.active` class in CSS to show/hide menu
});

// Hide menu when a link is clicked (for mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Optional: Only hide if screen width is less than or equal to 768px (mobile)
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });
});
