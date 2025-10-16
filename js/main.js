// Smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


//Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });
});

// Add active class to current page nav link
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        // Handle home page
        if ((currentPath === '/' || currentPath === '/index.html') && 
            (linkPath === '/' || linkPath === '/index.html')) {
            link.classList.add('active');
        }
        
        // Handle about page
        else if (currentPath.includes('/about.html') && linkPath.includes('/about.html')) {
            link.classList.add('active');
        }
        
        // Handle portfolio section
        else if (currentPath.includes('/portfolio') && linkPath.includes('/portfolio')) {
            link.classList.add('active');
        }
        
        // Handle exact matches for other pages
        else if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
});

// Add animation trigger
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-slide-in');
    setTimeout(() => {
        animatedElements.forEach(element => {
            element.classList.add('show');
        });
    }, 100);
});