"use strict";
var message = 'Welcome to StocoPhotography!';
document.addEventListener('DOMContentLoaded', function () {
    var heading = document.getElementById('hero-heading');
    if (heading) {
        heading.textContent = message;
    }
});
