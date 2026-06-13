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

// Display today's hours dynamically
(function() {
    const hours = {
        0: { day: 'Sunday', close: '2:00 AM' },
        1: { day: 'Monday', close: '2:00 AM' },
        2: { day: 'Tuesday', close: '2:00 AM' },
        3: { day: 'Wednesday', close: '2:00 AM' },
        4: { day: 'Thursday', close: '4:00 AM' },
        5: { day: 'Friday', close: '4:00 AM' },
        6: { day: 'Saturday', close: '4:00 AM' }
    };

    const el = document.getElementById('todayHours');
    if (!el) return;

    const now = new Date();
    let dayIndex = now.getDay();

    // After midnight (before bar opens at 10am), still showing previous day's closing hours
    if (now.getHours() < 10) {
        dayIndex = (dayIndex + 6) % 7; // previous day
    }

    const today = hours[dayIndex];
    el.textContent = `🕐 Open Today (${today.day}): 10:00 AM \u2013 ${today.close}`;
})();