// Header scroll effect with smooth transition
const header = document.querySelector('header');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header background transition
    if (scrollY > 100) {
        header.style.background = 'rgba(26, 12, 6, 0.98)';
        header.style.padding = '1rem 2rem';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    } else {
        header.style.background = 'linear-gradient(to bottom, rgba(26, 12, 6, 0.97), transparent)';
        header.style.padding = '2rem';
        header.style.boxShadow = 'none';
    }

    // Parallax effect on hero background
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg && scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`;
    }

    lastScrollY = scrollY;
}, { passive: true });

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll-triggered animations with IntersectionObserver
const animateElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animateElements.forEach(el => observer.observe(el));

// Ken Burns effect on hero background image
const heroImg = document.querySelector('.hero-bg img');
if (heroImg) {
    heroImg.style.animation = 'kenBurns 20s ease-in-out infinite';
}

// Glow pulse on reservation phone button
const btnTel = document.querySelector('.btn-tel');
if (btnTel) {
    const telObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'glowPulse 3s ease-in-out infinite';
                telObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    telObserver.observe(btnTel);
}

// Concept image hover zoom
const conceptImg = document.querySelector('.concept-image img');
if (conceptImg) {
    conceptImg.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    conceptImg.parentElement.addEventListener('mouseenter', () => {
        conceptImg.style.transform = 'scale(1.05)';
    });
    conceptImg.parentElement.addEventListener('mouseleave', () => {
        conceptImg.style.transform = 'scale(1)';
    });
}

// Hero panel image hover zoom
const panelImg = document.querySelector('.hero-panel-image img');
if (panelImg) {
    panelImg.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    panelImg.parentElement.addEventListener('mouseenter', () => {
        panelImg.style.transform = 'scale(1.05)';
    });
    panelImg.parentElement.addEventListener('mouseleave', () => {
        panelImg.style.transform = 'scale(1)';
    });
}
