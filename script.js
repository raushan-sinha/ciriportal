const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("open");
});

// Mobile dropdown toggle
const mobileDropdownLinks = document.querySelectorAll('.mobile-nav .dropdown a');

mobileDropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const parentLi = this.parentElement;
        // Close other open dropdowns
        document.querySelectorAll('.mobile-nav .dropdown.open').forEach(openLi => {
            if (openLi !== parentLi) {
                openLi.classList.remove('open');
            }
        });
        // Toggle current dropdown
        parentLi.classList.toggle('open');
    });
});