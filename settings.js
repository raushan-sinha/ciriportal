'use strict'

//todo: Personal Information check -
document.querySelector('#saveBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phone').value.trim();

    if (!name || !email || !phone) {
        const alertBox = document.createElement('div');
        alertBox.textContent = 'Please fill up the Input fields!';
        alertBox.className = 'alertBox';
        document.body.appendChild(alertBox);
        return;
    } else {
        const successBox = document.createElement('div');
        successBox.textContent = 'Your Details has been submitted successfully :)';
        successBox.className = 'success';
        document.body.appendChild(successBox);
    }
});



//todo: Password Confirmation -
document.querySelector('#saveBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const newPassword = document.querySelector('#newPass').value;
    const confirmPassword = document.querySelector('#confirmPass').value;

    if (newPassword !== confirmPassword) {
        const alertPassword = document.createElement('div');
        alertPassword.textContent = 'New Password and Confirm Password don`t matching!';
        alertPassword.className = 'passwordErrorBox';
        document.body.appendChild(alertPassword);
        return;
    }
});



//todo: Check Notifications Preferences -
document.querySelector('#saveBtn').addEventListener('click', () => {
    const emailRef = document.querySelector('#emailNotify').checked;
    const smsRef = document.querySelector('#smsNotify').checked;

    localStorage.setItem('emailNotification', emailRef);
    localStorage.setItem('smsNotification', smsRef);

    const savedNotify1 = localStorage.getItem('emailNotification').checked;
    const savedNotify2 = localStorage.getItem('smsNotification').checked;

    if (savedNotify1 && savedNotify2) {
        const successBox = document.createElement('div');
        successBox.textContent = 'Notification preferences saved successfully!';
        successBox.className = 'successBox';
        document.body.appendChild(successBox);
    }
});

//? Restore saved preferences on page load-
// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#emailNotify').checked = localStorage.getItem('emailNotification') === 'true';
//     document.querySelector('#emailNotify').checked = localStorage.getItem('smsNotification') === 'true';
// });



//todo: Privacy Policy & Request Account Deletion -
const terms = [
    'https://policies.google.com/privacy?hl=en-US',
    'https://policies.google.com/terms?hl=en-US'
];

document.querySelectorAll('.settings-box a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(terms[idx], '_blank');
    });
});



//todo: Request Account Deletion with a notification-
document.querySelector('.danger-btn').addEventListener('click', () => {
    const requestDeletion = document.querySelector('div');
    requestDeletion.textContent = 'We got your message for "Account Deletion. Our team will send you a message after an Hour for Confirmation for Account Deletion through the WhatsApp and Email. Stay Active after an Hour!';
    requestDeletion.className = 'requestAlert';
    document.body.appendChild(requestDeletion);

    setTimeout(() => requestDeletion.remove(), 5000);
})