//todo: Access each Navigation links -
const navLinks = [
    'manufacturer.html',
    'order.html',
    'customer.html',
    'helpDesk.html',
    'settings.html',
    'faqs.html',
    'returnPolicy.html',
    'shipping.html'
];
document.querySelectorAll('.navLinks a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(navLinks[idx], '_self');
    });
});


//todo: Image -
const avatar = document.querySelector('#avatar');
const uploadImage = document.querySelector('#uploadImage');
const savedImage = localStorage.getItem('adminImage');
if (savedImage) {
    avatar.src = savedImage;
}

uploadImage.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.onload = function() {
        avatar.src = reader.result;
        localStorage.setItem('adminImage', reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
})