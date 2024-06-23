// ===== Show Navbar =====

document.addEventListener("DOMContentLoaded", function () {
    
    const Navbar =  document.getElementById('navbar-top');

    window.addEventListener('scroll', function () {

        window.scrollY > 300 ? Navbar.classList.add('fixed-top', 'shadow') : Navbar.classList.remove('fixed-top', 'shadow');

    });
});


// ===== Preloader =====


document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener to run once the page is fully loaded
    window.addEventListener('load', function() {
        // Fade out the preloader
        let preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';

        // Once the preloader is fully faded out, remove it from the DOM
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500); // Match this duration to the transition duration
    });
});