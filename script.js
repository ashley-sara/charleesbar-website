// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add enhanced glow effect on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.4)';
    } else {
        navbar.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.3)';
    }
});

// Welcome message
console.log('%c🍀 Welcome to Charlee\'s Bar! 🍀', 'font-size: 16px; color: #00ff41; text-shadow: 0 0 10px rgba(0, 255, 65, 0.5); font-weight: bold;');