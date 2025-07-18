'use strict';

document.querySelector('#email').addEventListener('click', (e) => {
    e.preventDefault();
    open('mailto:ciriportal@gmail.com', '_self');
});