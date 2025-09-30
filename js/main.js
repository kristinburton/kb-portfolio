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


// Image popup functionality
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('.image-popup');
    const popupContent = popup.querySelector('.popup-content');
    const popupImg = popup.querySelector('.popup-content img');
    const triggers = document.querySelectorAll('.grid-item img');
    const closeBtn = popup.querySelector('.close-popup');
    let isZoomed = false;

    // Open popup
    triggers.forEach(img => {
        img.addEventListener('click', () => {
            popupImg.src = img.src;
            popupImg.alt = img.alt;
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
            isZoomed = false;
            popupImg.classList.remove('zoomed');
            popupContent.classList.remove('scrollable');
        });
    });

    // Toggle zoom
    popupImg.addEventListener('click', (e) => {
        e.stopPropagation();
        isZoomed = !isZoomed;
        popupImg.classList.toggle('zoomed');
        popupContent.classList.toggle('scrollable');
        
        if (isZoomed) {
            // Center the click point when zooming in
            const rect = popupContent.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            popupContent.scrollLeft = (popupImg.offsetWidth * 1.5 - rect.width) / 2;
            popupContent.scrollTop = (popupImg.offsetHeight * 1.5 - rect.height) / 2;
        }
    });

    // Close popup
    const closePopup = () => {
        popup.classList.remove('active');
        popupImg.classList.remove('zoomed');
        popupContent.classList.remove('scrollable');
        document.body.style.overflow = '';
        isZoomed = false;
    };

    closeBtn.addEventListener('click', closePopup);
    popup.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            closePopup();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });
});