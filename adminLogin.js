document.addEventListener('DOMContentLoaded', () => {
    //todo: Confirm all inputs are filled or not -
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.querySelector('#username').value.trim();
        const password = document.querySelector('#password').value.trim();

        if (!username || !password) {
            alert('Please fill up the Input fields!');
            return;
        } else {
            open('adminDashboard.html', '_self');
        }
    });
});

