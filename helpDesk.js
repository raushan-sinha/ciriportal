'use strict';

//todo: Create an API to get a User Complain -
const complaintForm = document.querySelector('#complaintForm');
const formResponse = document.querySelector('#formResponse');

complaintForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !phone || !message) {
        alert('Please Fill up the Blank fields!');
        return;
    }

    // Display the message 'Sending Message ....'
    formResponse.textContent = 'Sending Message ....';
    formResponse.className = 'form-response';
    formResponse.style.display = 'block';

    try {
        const formData = new FormData(complaintForm);
        formData.append('access_key', '5143b6c7-937d-4119-adad-50746bc81d3b');
        formData.append('from_name', `This complaint is sent by ${name}`);

        //? use API to send the message -
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        console.log('API Response', result);
        if (result.success) {
            formResponse.textContent = `Thanks ${name} for your message. Our team CiriPortal reply to you soon!`;
            formResponse.className = 'form-response success';
            formResponse.style.display = 'block';
            complaintForm.reset();
        } else {
            throw new Error(result.message || "Failed to send message");
        }
    } catch (error) {
        console.error('Error', error);
        formResponse.textContent = `Failed to send the message! Please try again. (${error.message})`;
        formResponse.className = 'form-response error';
        formResponse.style.display = 'block';
    }
    setTimeout(() => {
        formResponse.style.display = 'none';
    }, 5000);
});


//todo: Email & Phone Open -
const helpContact = [
    'mailto:ciriportal@gmail.com',
    'tel:+971 XXX XXX'
];

document.querySelectorAll('.help-contact p').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        open(helpContact[idx], '_blank');
    });
});