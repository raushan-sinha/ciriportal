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

document.querySelector('#backPage').addEventListener('click', () => {
    window.history.back();
})


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

//todo: Payment Method -
const paymentBox = document.querySelector('.payment-box ');
document.querySelectorAll('.product-info .order-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        paymentBox.style.display = 'block';
    });
});


//todo: Close Payment Box -
document.querySelector('#closePaymentBox').addEventListener('click', () => {
    paymentBox.style.display = 'none';
});