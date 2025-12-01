// Get modal elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

// Get button elements that open modals
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

// Get close buttons
const closeButtons = document.querySelectorAll('.close');

// Get links to switch between modals
const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');

// Show login modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Show signup modal
signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
});

// Close modals when clicking on close button
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    });
});

// Close modals when clicking outside of modal content
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Switch from login to signup modal
showSignupLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
});

// Switch from signup to login modal
showLoginLink.addEventListener('click', (event) => {
    event.preventDefault();
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
});

// Handle form submissions
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // In a real application, you would handle form submission here
        // For this demo, we'll just show an alert and close the modal
        alert('Form submitted successfully!');
        
        // Reset form
        form.reset();
        
        // Close modal
        const modal = form.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Simple animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .transformation-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .transformation-card, .testimonial-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
});