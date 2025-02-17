// Select the navbar and menu items
const navbar = document.getElementById('navbar');
const menuItems = document.querySelectorAll('#navbar ul li a');

// Add event listener to the window to change the navbar's style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Darken navbar when scrolling
        navbar.style.padding = '5px 0'; // Shrink the navbar
    } else {
        navbar.style.backgroundColor = '#333'; // Reset to original color
        navbar.style.padding = '10px 0'; // Reset padding
    }
});

// Change the background color of the navbar when hovering over menu items
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        navbar.style.backgroundColor = '#444'; // Change navbar color on hover
    });

    item.addEventListener('mouseout', () => {
        if (window.scrollY <= 50) {
            navbar.style.backgroundColor = '#333'; // Reset color if not scrolled
        } else {
            navbar.style.backgroundColor = '#222'; // Keep dark color when scrolled
        }
    });
});
