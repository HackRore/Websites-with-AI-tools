document.addEventListener('DOMContentLoaded', () => {
    // Offline Support
    const offlineMessage = document.createElement('div');
    offlineMessage.className = 'offline-message';
    offlineMessage.textContent = 'You are currently offline. Some features may be limited.';
    document.body.appendChild(offlineMessage);

    window.addEventListener('online', () => {
        offlineMessage.classList.remove('show');
    });

    window.addEventListener('offline', () => {
        offlineMessage.classList.add('show');
    });

    // Performance Optimization: Debounce scroll events
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

    // Error handling for failed resource loading
    window.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            handleImageError(e.target);
        }
    }, true);

    // Navbar scroll effect with debounce
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    const handleScroll = debounce(() => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when scrolling down
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    }, 100);

    window.addEventListener('scroll', handleScroll);

    // Mobile menu functionality
    const menuBtn = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Section Title Visibility Detection with debounce
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkTitleVisibility() {
        const titles = document.querySelectorAll('.section-title');
        titles.forEach(title => {
            if (isElementInViewport(title)) {
                title.classList.add('visible');
            }
        });
    }

    const debouncedCheckVisibility = debounce(checkTitleVisibility, 100);
    document.addEventListener('scroll', debouncedCheckVisibility);
    checkTitleVisibility();

    // Error handling for images
    function handleImageError(img) {
        img.onerror = null; // Prevent infinite loop
        img.src = './img/placeholder.jpg'; // Fallback image
        img.classList.add('error');
    }

    // Add error handling to all images
    document.querySelectorAll('img').forEach(img => {
        img.onerror = () => handleImageError(img);
    });

    // Form submission handling with validation
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Basic form validation
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'error-message';
                    errorMessage.textContent = 'This field is required';
                    input.parentNode.appendChild(errorMessage);
                } else {
                    input.classList.remove('error');
                    const errorMessage = input.parentNode.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.remove();
                    }
                }
            });

            if (!isValid) {
                alert('Please fill in all fields');
                return;
            }

            try {
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.classList.add('loading');
                submitButton.disabled = true;

                const formData = new FormData(contactForm);
                // Add your form submission logic here
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
                
                contactForm.reset();
                alert('Message sent successfully!');
            } catch (error) {
                console.error('Form submission failed:', error);
                alert('Failed to send message. Please try again.');
            } finally {
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.classList.remove('loading');
                submitButton.disabled = false;
            }
        });
    }

    // Loading state handling
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        let resourcesLoaded = 0;
        const totalResources = document.querySelectorAll('img, link[rel="stylesheet"], script').length;

        function updateLoadingProgress() {
            resourcesLoaded++;
            if (resourcesLoaded >= totalResources) {
                setTimeout(() => {
                    loadingIndicator.classList.add('hidden');
                    setTimeout(() => {
                        loadingIndicator.style.display = 'none';
                    }, 500);
                }, 500);
            }
        }

        // Track resource loading
        document.querySelectorAll('img').forEach(img => {
            if (img.complete) {
                updateLoadingProgress();
            } else {
                img.addEventListener('load', updateLoadingProgress);
                img.addEventListener('error', updateLoadingProgress);
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 