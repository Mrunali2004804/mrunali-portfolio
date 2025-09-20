// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    // Set active class based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Animated counters
    function animateCounter() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = Math.ceil(target / speed);
            
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(() => animateCounter(), 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Animate skill bars
    function animateSkills() {
        const skills = document.querySelectorAll('.skill-progress');
        
        skills.forEach(skill => {
            const width = skill.getAttribute('data-width');
            skill.style.width = width;
        });
    }
    
    // Initialize animations when About page is active
    function initAnimations() {
        const aboutPage = document.getElementById('about');
        if (aboutPage && aboutPage.classList.contains('active')) {
            animateCounter();
            animateSkills();
        }
    }
    
    // Check for animations when page loads
    initAnimations();
});