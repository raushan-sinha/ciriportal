//todo: Access each Navigation links -
const navLinks = [
    'manageProd.html',
    'order.html',
    'customer.html',
    'helpDesk.html',
    'settings.html'
];
document.querySelectorAll('.navLinks a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(navLinks[idx], '_self');
    });
});

