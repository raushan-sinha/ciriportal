const contactLinks = [
    'mailto:ciriportal@gmail.com',
    'tel:+971 XXX XXXX'
];

document.querySelectorAll('.plain li').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(contactLinks[idx], '_self');
    });
});