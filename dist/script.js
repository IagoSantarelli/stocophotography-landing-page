"use strict";
var message = 'Bem-vindo à StocoPhotography!';
document.addEventListener('DOMContentLoaded', function () {
    var heading = document.getElementById('hero-heading');
    if (heading) {
        heading.textContent = message;
    }
});
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        }
        else {
            header.classList.remove('scrolled');
        }
    }
});
