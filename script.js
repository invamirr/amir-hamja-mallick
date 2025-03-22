// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('nav-active');
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        body.classList.remove('nav-active');
        hamburger.classList.remove('active');
    });
});

// Close mobile menu when resizing to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        body.classList.remove('nav-active');
        hamburger.classList.remove('active');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add your form submission logic here
    // Example: Send data to a server or email service
    
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Scroll to Top Button (appears after scrolling)
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.scroll-top').style.display = "block";
    } else {
        document.querySelector('.scroll-top').style.display = "none";
    }
};

// Add animation to project cards on scroll
const projectCards = document.querySelectorAll('.project-card');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

projectCards.forEach(card => {
    observer.observe(card);
});

// Loading Screen
window.addEventListener('load', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loaderWrapper.style.opacity = '0';
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 500);
    }, 1000);
});

// Scroll Progress Bar
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
});

// Tech Overlay
const techOverlay = document.createElement('div');
techOverlay.className = 'tech-overlay';
document.body.appendChild(techOverlay);

// Typing effect for hero section
const heroText = document.querySelector('.hero-content h1');
const originalText = heroText.textContent;
heroText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < originalText.length) {
        heroText.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    typeWriter();
});

// Add glitch effect on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('h1, h2');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.style.animation = 'glitch 0.5s infinite';
            setTimeout(() => {
                element.style.animation = '';
            }, 1000);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navElements = document.querySelector('.nav-elements');

    hamburger.addEventListener('click', function() {
        // Toggle active class
        hamburger.classList.toggle('active');
        navElements.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navElements.classList.remove('active');
        });
    });
}); 