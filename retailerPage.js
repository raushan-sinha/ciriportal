// Mobile menu toggle functionality
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarNavItems = document.querySelectorAll('.sidebar-nav-item');
const contentSections = document.querySelectorAll('.content-section');

// Toggle mobile sidebar
mobileMenuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
});

// Close sidebar when clicking overlay
sidebarOverlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

// Handle navigation
sidebarNavItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all nav items
        sidebarNavItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Hide all content sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = this.getAttribute('data-section');
        const targetElement = document.getElementById(targetSection);
        if (targetElement) {
            targetElement.classList.add('active');
        }
        
        // Close mobile sidebar after navigation
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        }
    });
});

// Handle file upload
document.getElementById('upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatar').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Add to cart functionality
let cartCount = 0;
const cartCountElements = document.querySelectorAll('.cart-count');
const addToCartButtons = document.querySelectorAll('.btn-add');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        cartCountElements.forEach(element => {
            element.textContent = cartCount;
        });
        
        // Show success message (optional)
        this.textContent = 'Added!';
        this.style.background = '#27ae60';
        
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.background = '#667eea';
        }, 1000);
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }
});