// Premium Mobile App Developer Portfolio - JavaScript

// ============ Dark/Light Mode Toggle ============
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const newTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
});

// ============ Typing Animation ============
const typingText = document.querySelector('.typing-text');
const text = 'Mobile App Developer';
let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

// Reset and start typing animation when page loads
window.addEventListener('load', () => {
    typingText.textContent = '';
    index = 0;
    typeText();
});

// ============ Scroll Reveal Animation ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add scroll-reveal class to elements and observe them
document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
});

// ============ Smooth Scrolling for Navigation ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ Contact Form Handling ============
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        name: this.querySelector('input[placeholder="Your Name"]').value,
        email: this.querySelector('input[placeholder="Your Email"]').value,
        message: this.querySelector('textarea[placeholder="Your Message"]').value
    };

    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Show success message
    const originalText = this.querySelector('button').textContent;
    this.querySelector('button').textContent = '✓ Message Sent!';
    
    // Reset form
    this.reset();
    
    // Restore button text after 3 seconds
    setTimeout(() => {
        this.querySelector('button').textContent = originalText;
    }, 3000);
});

// ============ Navbar Scroll Effect ============
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 15, 30, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.8)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    lastScroll = currentScroll;
});

// ============ Ripple Effect on Buttons ============
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-animation 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ============ Add Ripple Animation Keyframes ============
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============ Project Card Hover Effects ============
document.querySelectorAll('.project-card').forEach(card => {
    const phoneScreen = card.querySelector('.phone-screen');
    
    card.addEventListener('mouseenter', function() {
        if (phoneScreen) {
            phoneScreen.style.animation = 'none';
            setTimeout(() => {
                phoneScreen.style.animation = 'screenGlow 3s ease-in-out infinite';
            }, 10);
        }
    });
});

// ============ Social Icons Animation ============
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============ Lazy Load Images (if needed) ============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============ Page Load Animation ============
document.addEventListener('DOMContentLoaded', () => {
    // Fade in hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }

    // Add fade-in animation to sections
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.opacity = '1';
    });
});

// ============ Keyboard Navigation ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any modals if they exist
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

// ============ Add Contact Information ============
// You can update these with your actual contact details
const contactInfo = {
    email: 'alex@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
};

console.log('%cPortfolio Loaded', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('Contact me at:', contactInfo.email);