const hamburger = document.getElementById("hamburger");
const navbarNav = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarNav.classList.toggle("open");
});


//todo: Sidebar toggle -
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('sidebarOverlay');

    // Toggle sidebar
    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    // Close sidebar when clicking on overlay
    overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = toggleBtn.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }
    });
});


// Dropdown toggle for mobile - only for main dropdown links
const dropdownToggleLinks = document.querySelectorAll('.navbar-nav .dropdown > a');
dropdownToggleLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // Only handle dropdown toggle on mobile devices
        if (window.innerWidth <= 992) {
            e.preventDefault();
            e.stopPropagation();

            const parentLi = this.parentElement;
            console.log('Dropdown clicked:', parentLi); // Debug log

            // Close other open dropdowns
            document.querySelectorAll('.navbar-nav .dropdown.open').forEach(openLi => {
                if (openLi !== parentLi) {
                    openLi.classList.remove('open');
                    console.log('Closed other dropdown:', openLi); // Debug log
                }
            });

            // Toggle current dropdown
            parentLi.classList.toggle('open');
            console.log('Toggled dropdown:', parentLi.classList.contains('open')); // Debug log
        }
    });
});

// Handle submenu links - allow navigation
const submenuLinks = document.querySelectorAll('.navbar-nav .dropdown-menu a');

submenuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // Allow navigation for submenu links
        console.log('Submenu link clicked:', this.href); // Debug log

        // Close mobile menu after clicking a submenu link
        if (window.innerWidth <= 992) {
            setTimeout(() => {
                hamburger.classList.remove("active");
                navbarNav.classList.remove("open");

                // Close all dropdowns
                document.querySelectorAll('.navbar-nav .dropdown.open').forEach(dropdown => {
                    dropdown.classList.remove('open');
                    console.log('Closed dropdown after navigation'); // Debug log
                });
            }, 100);
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 992) {
        if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove("active");
            navbarNav.classList.remove("open");

            // Close all dropdowns when closing menu
            document.querySelectorAll('.navbar-nav .dropdown.open').forEach(dropdown => {
                dropdown.classList.remove('open');
                console.log('Closed dropdowns on outside click'); // Debug log
            });
        }
    }
});

// Handle orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        if (window.innerWidth > 992) {
            // Close mobile menu on desktop
            hamburger.classList.remove("active");
            navbarNav.classList.remove("open");

            // Close all dropdowns
            document.querySelectorAll('.navbar-nav .dropdown.open').forEach(dropdown => {
                dropdown.classList.remove('open');
            });
        }
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        // Close mobile menu on desktop
        hamburger.classList.remove("active");
        navbarNav.classList.remove("open");

        // Close all dropdowns
        document.querySelectorAll('.navbar-nav .dropdown.open').forEach(dropdown => {
            dropdown.classList.remove('open');
        });
    }
});

//todo: Nav Logo link - Home Page
document.querySelector('.nav-logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('index.html', '_self');
});