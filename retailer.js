document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        
        if (!email || !password) {
            alert('Please fill up the Input fields!');
        }else {
            open('retailerPage.html', '_self');
        }
    });
});