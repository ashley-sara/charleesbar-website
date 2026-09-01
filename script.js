const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Smooth scrolling for in-page navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    const closeMenu = () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        navToggle.querySelector('.sr-only').textContent = 'Open navigation';
    };

    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isOpen));
        navMenu.classList.toggle('is-open', !isOpen);
        navToggle.querySelector('.sr-only').textContent = isOpen ? 'Open navigation' : 'Close navigation';
    });

    navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMenu();
            navToggle.focus();
        }
    });
}

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

// Display accurate open/closed information in the bar's Elko time zone.
(function() {
    const closingHourByDay = [2, 2, 2, 2, 4, 4, 4];

    const el = document.getElementById('todayHours');
    if (!el) return;

    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        weekday: 'short',
        hour: 'numeric',
        hour12: false
    }).formatToParts(new Date());
    const weekday = parts.find(part => part.type === 'weekday').value;
    const hour = Number(parts.find(part => part.type === 'hour').value) % 24;
    const dayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(weekday);
    const previousDayIndex = (dayIndex + 6) % 7;
    const previousClosingHour = closingHourByDay[previousDayIndex];
    const isAfterMidnightOpen = hour < previousClosingHour;
    const isSameDayOpen = hour >= 10;

    if (isAfterMidnightOpen) {
        el.textContent = `🍀 Open now — closes at ${previousClosingHour}:00 AM`;
    } else if (isSameDayOpen) {
        const closingHour = closingHourByDay[dayIndex];
        el.textContent = `🍀 Open now — closes at ${closingHour}:00 AM`;
    } else {
        el.textContent = '🍀 Closed now — opens at 10:00 AM';
    }
})();
// Scroll reveal for event tiles and spotlight
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});
