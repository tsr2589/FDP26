/* ============================================
   Smooth Scrolling for Navigation Links
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#') {
            return;
        }
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   Scroll to Features Function
   ============================================ */
function scrollToFeatures() {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
        featuresSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/* ============================================
   Form Validation
   ============================================ */
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

// Validation Functions
function validateName(name) {
    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        return false;
    }
    if (name.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        return false;
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
        nameError.textContent = 'Name can only contain letters and spaces';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        return false;
    }
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validateMessage(message) {
    if (message.trim() === '') {
        messageError.textContent = 'Message is required';
        return false;
    }
    if (message.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        return false;
    }
    if (message.trim().length > 1000) {
        messageError.textContent = 'Message cannot exceed 1000 characters';
        return false;
    }
    messageError.textContent = '';
    return true;
}

// Real-time validation
nameInput.addEventListener('blur', () => validateName(nameInput.value));
nameInput.addEventListener('input', () => {
    if (nameError.textContent) validateName(nameInput.value);
});

emailInput.addEventListener('blur', () => validateEmail(emailInput.value));
emailInput.addEventListener('input', () => {
    if (emailError.textContent) validateEmail(emailInput.value);
});

messageInput.addEventListener('blur', () => validateMessage(messageInput.value));
messageInput.addEventListener('input', () => {
    if (messageError.textContent) validateMessage(messageInput.value);
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous success message
    successMessage.textContent = '';

    // Validate all fields
    const isNameValid = validateName(nameInput.value);
    const isEmailValid = validateEmail(emailInput.value);
    const isMessageValid = validateMessage(messageInput.value);

    // If all validations pass
    if (isNameValid && isEmailValid && isMessageValid) {
        // Simulate form submission
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        console.log('Form Data:', formData);

        // Show success message
        successMessage.textContent = '✓ Message sent successfully! Thank you for contacting us.';
        successMessage.style.color = '#27ae60';

        // Reset form
        contactForm.reset();
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.textContent = '';
        }, 5000);
    }
});

/* ============================================
   Active Navigation Link Highlight
   ============================================ */
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'var(--text-dark)';
        link.style.borderBottomColor = 'transparent';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--pastel-pink)';
        }
    });
});

/* ============================================
   Intersection Observer for Fade-in Animation
   ============================================ */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and elements for fade-in effect
const fadeElements = document.querySelectorAll('.feature-card, .info-card, .about-wrapper');
fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

/* ============================================
   Navbar Highlight on Hover
   ============================================ */
const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navBar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navBar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
    }
});

/* ============================================
   Page Load Animation
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    console.log('ShopHub E-Commerce Landing Page loaded successfully!');
    
    // Add loading animation to hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.animation = 'fadeInUp 0.8s ease-out forwards';
    }
});

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   Input Focus Effects
   ============================================ */
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 0 4px rgba(255, 183, 217, 0.15)';
    });
    
    input.addEventListener('blur', function() {
        this.style.boxShadow = 'none';
    });
});

/* ============================================
   Debounce function for scroll events
   ============================================ */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounce for better performance
const debouncedScroll = debounce(() => {
    // Your scroll logic here
}, 100);

window.addEventListener('scroll', debouncedScroll);
