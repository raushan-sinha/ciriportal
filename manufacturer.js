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


//todo: Add New Product (Hidden) -
const addBtn = document.querySelector('.add-btn');
const modal = document.querySelector('#productModal');
const cancelBtn = document.querySelector('.cancel-btn');
const productContainer = document.querySelector('.product-container');
const productForm = document.querySelector('.product-form');

//? Open form -
addBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

//? Hidden form -
cancelBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

//? Product form -
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //? From details -
    const name = document.querySelector('#name').value.trim();
    const category = document.querySelector('select').value;
    const price = document.querySelector('#price').value.trim();
    const quantity = document.querySelector('#quantity').value.trim();
    // const desc = document.querySelector('#desc').value.trim();
    const fileInput = productForm.querySelector('input[type="file"]');
    const image = fileInput.files[0];

    if (!name || !category || !price || !quantity || !image) {
        showAlert('Please input full details of the Product')
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const imageUrl = e.target.result;

        //? Create Clone Card -
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${imageUrl}" class="product-img">
            <div class="product-info">
                <h2>${name}</h2>
                <p>Category: ${category}</p>
                <p>Price: ₹${price}</p>
                <p>Quantity: ${quantity}</p>
                 <p>Status: <span class="active">Active</span></p>
                <div class="product-actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            </div>
        `;

        productContainer.appendChild(card);
        modal.classList.add('hidden');
        productForm.reset();
    }

    reader.readAsDataURL(image);
});

//? Alert helper
function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 4000);
}


//todo: Delete Product's Card -
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const card = e.target.closest('.product-card');
        if (card) {
            card.remove(); // or card.style.display = 'none';
        }
    }
});
