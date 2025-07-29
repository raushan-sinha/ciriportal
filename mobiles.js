document.querySelector('#backPage').addEventListener('click', () => {
    window.history.back();
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

//todo: Sidebar Links access -
const sideBarLinks = [
    'repairDevice.html'
];

document.querySelectorAll('.sidebar-nav a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(sideBarLinks[idx], '_self');
    });
});


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



