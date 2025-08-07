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
// const adminLinks = [
//     'adminLogin.html',
//     // 'adminPanel.html',
//     'adminDashboard.html'
// ];

// document.querySelectorAll('.admin-btn a').forEach((link, idx) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         open(adminLinks[idx], '_self');
//     });
// });

document.querySelector('.fa-user').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('adminLogin.html', '_self');
})

//todo: Access Cart Page-
document.querySelector('.fa-cart-shopping').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('cart.html', '_self');
});

//todo: Offers & Promotions -
document.querySelector('.offers-btn').addEventListener('click', (e) => {
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
    'wishlist.html',
    'monthlyOffers.html'
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


//todo: Search Box for Items -
const itemsName = {
    'flour': 'flour.html',
    'chips': 'chips.html',
    'candyman': 'candyman.html',
    'rice': 'rice.html',
    'colddrinks': 'coldDrinks.html',
    'facewash': 'facewash.html',
    'facecream': 'facecream.html',
    'handwash': 'handwash.html',
    'medicalkit': 'medicalKit.html',
    'perfumes': 'perfumes.html',
    'shoes': 'shoes.html',
    'mobile': 'mobiles.html',
    'refrigerator': 'refrigerator.html',
    'laptop': 'laptops.html',
    'handwatch': 'handwatch.html',
    'earphones': 'earphones.html',
    'eyeglass': 'eyeGlass.html',
    'shirts': 'shirts.html',
    'television': 'television.html',
    'bag': 'bags.html',
    'bulb': 'bulbs.html',
    'pants': 'pants.html',
    'notebook': 'notebook.html',
    'pen': 'pen.html',
    'geometry': 'geometry.html'
}
const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchBox = document.querySelector('#searchBox').value.toLowerCase();
    if (itemsName[searchBox]) {
        window.open(itemsName[searchBox], '_self');
    } else {
        alert(`Page isn't available`);
    }
});

//? Keypress Enter -
document.querySelector('#searchBox').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
})



//todo: Speech Recognition for Searching an Item -
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = false;
recognition.continuous = false;
recognition.lang = 'en-US';

document.querySelector('#startVoice').addEventListener('click', () => {
    recognition.start();
    console.log("Voice recognition started...");
});

const itemsPage = {
    'flour': { url: 'https://ciriportal.vercel.app/flour.html' },
    'chips': { url: 'https://ciriportal.vercel.app/chips.html' },
    'candyman': { url: 'https://ciriportal.vercel.app/candyman.html' },
    'rice': { url: 'https://ciriportal.vercel.app/rice.html' },
    'coldDrinks': { url: 'https://ciriportal.vercel.app/coldDrinks.html' },
    'facewash': { url: 'https://ciriportal.vercel.app/facewash.html' },
    'facecream': { url: 'https://ciriportal.vercel.app/facecream.html' },
    'handwash': { url: 'https://ciriportal.vercel.app/handwash.html' },
    'perfume': { url: 'https://ciriportal.vercel.app/perfume.html' },
    'medicalKit': { url: 'https://ciriportal.vercel.app/medicalKit.html' },
    'shoes': { url: 'https://ciriportal.vercel.app/shoes.html' },
    'mobiles': { url: 'https://ciriportal.vercel.app/mobiles.html' },
    'laptop': { url: 'https://ciriportal.vercel.app/laptops.html' },
    'refrigerator': { url: 'https://ciriportal.vercel.app/refrigerator.html' },
    'shirts': { url: 'https://ciriportal.vercel.app/shirts.html' },
    'eyeGlass': { url: 'https://ciriportal.vercel.app/eyeGlass.html' },
    'television': { url: 'https://ciriportal.vercel.app/television.html' },
    'handWatch': { url: 'https://ciriportal.vercel.app/handWatch.html' },
    'bags': { url: 'https://ciriportal.vercel.app/bags.html' },
    'pants': { url: 'https://ciriportal.vercel.app/pants.html' },
    'bulbs': { url: 'https://ciriportal.vercel.app/bulbs.html' },
    'earphones': { url: 'https://ciriportal.vercel.app/earphones.html' },
    'notebook': { url: 'https://ciriportal.vercel.app/notebook.html' },
    'pen': { url: 'https://ciriportal.vercel.app/pen.html' },
    'geometry': { url: 'https://ciriportal.vercel.app/geometry.html' }
};

recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
        .map(result => result[0].transcript)
        .join('')
        .toLowerCase();

    console.log("You said:", transcript);

    for (const [item, link] of Object.entries(itemsPage)) {
        if (transcript.includes(item)) {
            window.open(link.url, '_self');
            return;
        }
    }
});

//? Optional: Log errors
recognition.addEventListener('error', (e) => {
    console.error("Speech Recognition Error:", e.error);
});


//todo: Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('.action-btn, .view-all-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.style.pointerEvents = 'none';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
            }, 2000);
        }
    });
});


//todo: Access Pages -
document.querySelector('.btn-distributor').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('distributor.html', '_self');
})

document.querySelector('.btn-retailer').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('retailer.html', '_self');
})


//todo: Access Services program -
const programs = [
    'product-training.html',
    'loyalty-rewards.html',
    'returnPolicy.html',
    'business-culture.html',
    'seasonal-offers.html',
    'support-assistance.html'
];

document.querySelectorAll('.programs-grid .program-card button').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(programs[idx], '_self');
    })
})


document.querySelector('.view-all-btn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('laptops.html', '_self')
})


//todo: Access page
const chooseCard = [
    'manufacturer.html',
    'joinCiri.html',
    'member-request.html'
];

document.querySelectorAll('.choose-grid .choose-card button').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(chooseCard[idx], '_self');
    })
})


//todo: Sliding section
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to current slide and indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');

    // Move slider wrapper
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Indicator clicks
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-slide (optional)
setInterval(nextSlide, 5000);


//todo: Payment Sliding top -
const closeIcon = document.querySelector('.close-icon');
const paymentBox = document.querySelector('.payment-box');
document.querySelectorAll('.payment-btns .pay-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        paymentBox.style.display = 'block';
    });
    closeIcon.addEventListener('click', () => {
        paymentBox.style.display = 'none';
    });
});


//todo: Referral Code -
const closeIconReferral = document.querySelector('#close-icon');
const referralBox = document.querySelector('.referral-box');
document.querySelectorAll('.referral-btns .referral-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        referralBox.style.display = 'block';
    });
    closeIconReferral.addEventListener('click', () => {
        referralBox.style.display = 'none';
    });
});