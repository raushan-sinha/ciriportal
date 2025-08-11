'use strict';

document.querySelector('.copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText('CIRI-USER-4567');
    setTimeout(() => {
        alert('Copied your Referral Code. Now You can share. :)')
    }, 100);
})


const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.navbar-nav');
const dropdowns = document.querySelectorAll('.navbar-nav .dropdown');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
});

// Handle dropdown toggling for mobile only
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');

    link.addEventListener('click', function (e) {
        // Check if it's mobile view (based on CSS breakpoint 992px)
        if (window.innerWidth <= 992) {
            e.preventDefault();

            // Close other dropdowns
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('open');
                }
            });

            // Toggle current dropdown
            dropdown.classList.toggle('open');
        }
    });
});

// Close nav menu when clicking outside (optional)
document.addEventListener('click', function (e) {
    const isClickInsideNav = e.target.closest('.nav-container');
    if (!isClickInsideNav) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
        dropdowns.forEach(d => d.classList.remove('open'));
    }
});

// On resize, reset dropdowns and nav
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        dropdowns.forEach(d => d.classList.remove('open'));
    }
});

//todo: Nav Logo link - Home Pa
document.querySelector('.nav-logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('index.html', '_self');
});
