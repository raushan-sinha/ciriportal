document.addEventListener('DOMContentLoaded', () => {
    //todo: Confirm all inputs are filled or not -
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const distributorID = document.querySelector('#distributorID').value.trim();
        const distributorPass = document.querySelector('#distributorPass').value.trim();

        if (!distributorID || !distributorPass) {
            alert('Please fill up the Input fields!');
            return;
        } else {
            open('distributorPage.html', '_self');
        }
    });
});

