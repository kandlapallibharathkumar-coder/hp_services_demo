/* ==========================================
   GLOBAL DELL SERVICE CENTER SCRIPTS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading Screen Handler
    const loader = document.getElementById('loader-screen');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500); // 500ms fake load time for visual polish
    }

    // 2. Sticky Navbar Scroll Action
    const header = document.querySelector('.header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // 3. Mobile Navigation Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 4. Dark Theme Setup and Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply stored theme
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            let theme = 'light';
            if (document.body.classList.contains('dark-theme')) {
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
            showToast(`Theme changed to ${theme} mode.`, 'info');
        });
    }

    // 5. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 6. Typist Animation (Hero Banner)
    const typingSpan = document.getElementById('typing-text');
    if (typingSpan) {
        const words = ["Laptops", "Desktops", "Printers", "Monitors", "Accessories"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        const type = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingSpan.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingSpan.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500; // Pause before typing next word
            }

            setTimeout(type, typingSpeed);
        };
        setTimeout(type, 1000);
    }

    // 7. Testimonial Auto Slider
    const testSlider = document.querySelector('.testimonial-slider');
    const testCards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.querySelector('.testimonial-dots');

    if (testSlider && testCards.length > 0 && dotsContainer) {
        let currentSlide = 0;
        let slideInterval;

        // Create navigation dots
        testCards.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.classList.add('testimonial-dot');
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(idx);
                resetInterval();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.testimonial-dot');

        const goToSlide = (n) => {
            currentSlide = n;
            testSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        };

        const nextSlide = () => {
            let next = (currentSlide + 1) % testCards.length;
            goToSlide(next);
        };

        const startInterval = () => {
            slideInterval = setInterval(nextSlide, 5000); // Shift every 5 seconds
        };

        const resetInterval = () => {
            clearInterval(slideInterval);
            startInterval();
        };

        startInterval();
    }

    // 8. FAQ Accordion Click Handler
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentNode;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(faqItem => {
                faqItem.classList.remove('active');
                faqItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 9. Scroll Observer (Animations on Scroll)
    const animElements = document.querySelectorAll('.animate-on-scroll');
    if ('IntersectionObserver' in window && animElements.length > 0) {
        const observerOptions = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, observerOptions);

        animElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for browsers without IntersectionObserver support
        animElements.forEach(el => el.classList.add('animated'));
    }

    // 10. Stat Counter Animation
    const counterSection = document.querySelector('.statistics');
    const counters = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            let count = 0;
            const increment = target / 50; // Total duration ~1.5s
            
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    if (target === 98) {
                        counter.textContent = Math.ceil(count) + '%';
                    } else {
                        counter.textContent = Math.ceil(count) + '+';
                    }
                    setTimeout(updateCount, 30);
                } else {
                    if (target === 98) {
                        counter.textContent = target + '%';
                    } else {
                        counter.textContent = target + '+';
                    }
                }
            };
            updateCount();
        });
    };

    if (counterSection && counters.length > 0 && 'IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted) {
                    startCounters();
                    countersStarted = true;
                }
            });
        }, { threshold: 0.3 });

        counterObserver.observe(counterSection);
    } else if (counters.length > 0) {
        startCounters();
    }

    // 11. Custom Button Ripple Effect
    const rippleButtons = document.querySelectorAll('.btn');
    rippleButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            
            let rippleElement = document.createElement('span');
            rippleElement.classList.add('ripple');
            rippleElement.style.left = x + 'px';
            rippleElement.style.top = y + 'px';
            
            this.appendChild(rippleElement);
            
            setTimeout(() => {
                rippleElement.remove();
            }, 600);
        });
    });

    // 12. Modal Open / Close Handler & Form Submission
    const modalOverlay = document.getElementById('booking-modal');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const modalForm = document.getElementById('modal-booking-form');
    const modalDeviceSelect = document.getElementById('modal-device');

    // Make functions globally available
    window.openBookingModal = (serviceName = '') => {
        if (modalOverlay) {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock background scroll
            
            if (serviceName && modalDeviceSelect) {
                // Try matching selector or input
                const options = modalDeviceSelect.options;
                for (let i = 0; i < options.length; i++) {
                    if (serviceName.toLowerCase().includes(options[i].value.toLowerCase())) {
                        modalDeviceSelect.selectedIndex = i;
                        break;
                    }
                }
            }
        }
    };

    window.closeBookingModal = () => {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scroll
        }
    };

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', window.closeBookingModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                window.closeBookingModal();
            }
        });
    }

    // Booking modal submission logic
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('modal-name').value.trim();
            const phone = document.getElementById('modal-phone').value.trim();
            const email = document.getElementById('modal-email').value.trim();
            const issue = document.getElementById('modal-issue').value.trim();

            if (!name || !phone || !email || !issue) {
                showToast('Please fill out all fields in the booking form.', 'error');
                return;
            }

            if (!/^\d{10}$/.test(phone)) {
                showToast('Please enter a valid 10-digit mobile number.', 'error');
                return;
            }

            // Mock success
            showToast('Service Booked Successfully! Our expert team will call you shortly.', 'success');
            modalForm.reset();
            window.closeBookingModal();
        });
    }

    // 13. Newsletter Form Handlers (Footer)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('.newsletter-input');
            if (emailInput && emailInput.value.trim() !== '') {
                showToast('Thank you! You have successfully subscribed to our newsletter.', 'success');
                emailInput.value = '';
            } else {
                showToast('Please enter a valid email address.', 'error');
            }
        });
    }
});

// ==========================================
// TOAST NOTIFICATIONS SYSTEM
// ==========================================
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.setAttribute('id', 'toast-container');
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Choose icon based on type
    let iconSvg = '';
    if (type === 'success') {
        iconSvg = `<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`;
    } else if (type === 'error') {
        iconSvg = `<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>`;
    } else {
        iconSvg = `<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" clip-rule="evenodd"/></svg>`;
    }

    toast.innerHTML = `
        ${iconSvg}
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Auto-remove toast
    setTimeout(() => {
        toast.style.animation = 'toast-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) reverse forwards';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}
