// ===== Show Navbar =====

document.addEventListener("DOMContentLoaded", function () {

    const Navbar =  document.getElementById('navbar-top');

    window.addEventListener('scroll', function () {

        window.scrollY > 400 ? Navbar.classList.add('fixed-top', 'shadow') : Navbar.classList.remove('fixed-top', 'shadow');

    });
});



// === scroll for number cards ==

function checkScreenWidthAndRemoveClass() {
    // Get the elements
    const firstNumberCardRow = document.getElementById('number__card_wrapper_flex');
    const secondNumberCardRow = document.getElementById('second_number__card_wrapper_flex');

    // Check the screen width
    if (window.innerWidth <= 576) {
        // Remove the 'row' class if screen width is 576px or less
        if (firstNumberCardRow.classList.contains('row')) {
            firstNumberCardRow.classList.remove('row');
        }
        if (secondNumberCardRow.classList.contains('row')) {
            secondNumberCardRow.classList.remove('row');
        }
    } else {
        // Add the 'row' class if screen width is greater than 576px
        if (!firstNumberCardRow.classList.contains('row')) {
            firstNumberCardRow.classList.add('row');
        }
        if (!secondNumberCardRow.classList.contains('row')) {
            secondNumberCardRow.classList.add('row');
        }
    }
}

// Run the function on initial load
checkScreenWidthAndRemoveClass();

// Run the function on window resize
window.addEventListener('resize', checkScreenWidthAndRemoveClass);





document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.number__card_wrapper_flex');
    const cardWidth = document.querySelector('.number__card').offsetWidth;

    wrapper.addEventListener('scroll', () => {
        if (wrapper.scrollTimeout) {
            clearTimeout(wrapper.scrollTimeout);
        }

        wrapper.scrollTimeout = setTimeout(() => {
            const scrollLeft = wrapper.scrollLeft;
            const closestIndex = Math.round(scrollLeft / cardWidth);
            wrapper.scrollTo({
                left: closestIndex * cardWidth,
                behavior: 'smooth'
            });
        }, 100);  // Adjust the timeout as needed
    });
});
