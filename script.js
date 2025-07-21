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
    'media.html',
    'blogs.html',
    'security.html'
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


//todo: Admin Control -
const adminLinks = [
    'adminLogin.html',
    // 'adminPanel.html',
    'adminDashboard.html'
];

document.querySelectorAll('.admin-btn a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(adminLinks[idx], '_self');
    });
});


//todo: Offers & Promotions -
document.querySelector('#offers').addEventListener('click', (e) => {
    e.preventDefault();
    open('offers.html', '_blank');
});


//todo: Cookie Settings -
window.addEventListener('load', () => {
    setTimeout(() => {
        if (!localStorage.getItem('cookies')) {
            document.querySelector('#cookieBanner').style.display = 'flex';
            document.querySelector('#cookieBanner').style.flexDirection = 'column';
        }

        //? set storage when user accepted Cookies -
        document.querySelector('#acceptCookies').addEventListener('click', () => {
            localStorage.setItem('cookies', 'accepted');
            document.querySelector('#cookieBanner').style.display = 'none';
        });

        document.querySelector('#rejectCookies').addEventListener('click', () => {
            localStorage.setItem('cookies', 'rejected');
            document.querySelector('#cookieBanner').style.display = 'none';
        });
    }, 3000);
});


//todo: Privacy Policy -
document.querySelector('#privacyPolicy').addEventListener('click', (e) => {
    e.preventDefault();
    open('privacyPolicy.html', '_blank');
});


//todo: Sidebar Links access -
const sideBarLinks = [
    'referralPage.html',
    'missionPage.html',
    'helpCenter.html',
    'wallet.html',
    'wishlist.html'
];

document.querySelectorAll('.sidebar-nav a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(sideBarLinks[idx], '_self');
    });
});


// Chatbot toggle and close
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbox = document.getElementById("chatbox");
const closeChatbox = document.getElementById("closeChatbox");

chatbotToggle.addEventListener("click", () => {
    chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
});

closeChatbox.addEventListener("click", () => {
    chatbox.style.display = "none";
});


//todo: Search box Camera Open -
const video = document.querySelector('#cameraPreview');
const cameraBtn = document.querySelector('#cameraBtn');

if (video && cameraBtn) {
    cameraBtn.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.style.display = 'block';
        } catch (error) {
            alert('Camera access is unavailable in your devices');
            console.error('Camera Access Denied:', error);
        }
    });
}


