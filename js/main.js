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

        // --- HOME ---
        if ((currentPath === '/' || currentPath === '/index.html') &&
            (linkPath === '/' || linkPath === '/index.html')) {
            link.classList.add('active');
        }

        // --- ABOUT ---
        else if ((currentPath === '/about' || currentPath === '/about.html') &&
            (linkPath === '/about' || linkPath === '/about.html')) {
            link.classList.add('active');
        }

        // --- PORTFOLIO SECTION ---
        else if (currentPath.includes('/portfolio') && linkPath.includes('/portfolio')) {
            // Highlight main portfolio nav item
            link.classList.add('active');
        }

        // --- PORTFOLIO PROJECT PAGES (sub-active) ---
        const portfolioPages = [
            '/portfolio/marquis-help-center-design',
            '/portfolio/life360-help-center-design',
            '/portfolio/stpaul-help-center-design'
        ];

        portfolioPages.forEach(page => {
            if (currentPath === page || currentPath === `${page}.html`) {
                if (linkPath === page || linkPath === `${page}.html`) {
                    link.classList.add('sub-active');
                }

                // Highlight nested links inside project nav (if present)
                const nestedLinks = document.querySelectorAll(`nav a[href^="${page}"]`);
                nestedLinks.forEach(nestedLink => nestedLink.classList.add('sub-active'));
            }
        });

        // --- OTHER EXACT MATCHES ---
        if (currentPath === linkPath) {
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