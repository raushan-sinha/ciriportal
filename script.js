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
const countrySelect = document.querySelector('#countrySelect');
async function loadCountriesName() {
    try {
        const data = await fetch('countries.json');
        if (!data.ok) {
            throw new Error(`Your Internet connection is Poor! ${data.status}`);
        }
        const result = await data.json();
        countrySelect.innerHTML = '<option value="">Country</option>';
        //? Access each Countries using forEach() -
        result.forEach((country) => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        })
    } catch (error) {
        console.error('Failed to load countries', error);
        countrySelect.innerHTML = '<option value="">Country</option>';
    }
}
loadCountriesName();