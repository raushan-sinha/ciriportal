const hamburger = document.getElementById("hamburger");
const navbarNav = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarNav.classList.toggle("open");
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

//todo: Select a Country Region  by API -
const countrySelect = document.getElementById('countrySelect');

fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    .then(response => response.json())
    .then(data => {
        // Sort countries alphabetically by name
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));

        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name.common;
            option.textContent = country.name.common;
            countrySelect.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching countries:', error);
        const errorOption = document.createElement('option');
        errorOption.textContent = 'Error loading countries';
        countrySelect.appendChild(errorOption);
    });



//todo: Footer Explore Links - 
const exploreLinks = [
    'flour.html',
    'facewash.html',
    'notebook.html',
    'media.html'
];

document.querySelectorAll('footer .explore-links a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(exploreLinks[idx], '_self');
    });
});


//todo: Login Portal -
const loginPages = [
    'distributor.html',
    'retailer.html'
];

document.querySelectorAll('.login-btn ul a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(loginPages[idx], '_blank');
    });
});