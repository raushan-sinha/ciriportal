'use strict';

document.querySelectorAll('.accordion-item button').forEach((btn) => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const isOpen = btn.classList.contains('active');
        //? open & close sections -
        if (isOpen) {
            btn.classList.remove('active');
            content.style.display = 'none';
        } else {
            btn.classList.add('active');
            content.style.display = 'block';
            content.style.backgroundColor = 'black';
            content.style.color = 'white';
        }
        //? close all sections-
        document.querySelectorAll('.accordion-item button').forEach((otherBtn) => {
            if (otherBtn !== btn) {
                otherBtn.classList.remove('active');
                if (otherBtn.nextElementSibling) {
                    otherBtn.nextElementSibling.style.display = 'none';
                }
            }
        });
    });
});
