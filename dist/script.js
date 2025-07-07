"use strict";
var message = 'Bem-vindo à StocoPhotography!';
document.addEventListener('DOMContentLoaded', function () {
    var heading = document.getElementById('hero-heading');
    if (heading) {
        heading.textContent = message;
    }
});
