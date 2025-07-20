'use strict';

document.querySelector('.copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText('CIRI-USER-4567');
    setTimeout(() => {
        alert('Copied your Referral Code. Now You can share. :)')
    }, 100);
})