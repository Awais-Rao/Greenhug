// ===== Show Navbar =====

document.addEventListener("DOMContentLoaded", function () {

    const Navbar =  document.getElementById('navbar-top');

    window.addEventListener('scroll', function () {

        window.scrollY > 400 ? Navbar.classList.add('fixed-top', 'shadow') : Navbar.classList.remove('fixed-top', 'shadow');

    });
});



