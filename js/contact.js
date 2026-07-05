/* ==========================================
   CONTACT FORM VALIDATION & URL QUERY PARSING
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('dell-contact-form');
    const modelInput = document.getElementById('contact-model');

    // 1. URL Query Parameter Auto-population
    const getQueryParam = (param) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    };

    const prefilledDevice = getQueryParam('device');
    if (prefilledDevice && modelInput) {
        modelInput.value = decodeURIComponent(prefilledDevice);
        // Dispatch focus event to style nicely
        modelInput.focus();
        modelInput.blur();
    }

    // 2. Validation Helpers
    const showError = (inputEl, message) => {
        inputEl.classList.add('error');
        const errMessageEl = inputEl.parentNode.querySelector('.error-message');
        if (errMessageEl) {
            errMessageEl.textContent = message;
            errMessageEl.style.display = 'block';
        }
    };

    const clearError = (inputEl) => {
        inputEl.classList.remove('error');
        const errMessageEl = inputEl.parentNode.querySelector('.error-message');
        if (errMessageEl) {
            errMessageEl.style.display = 'none';
        }
    };

    // Live clear of error indicators on typing
    const formFields = document.querySelectorAll('.form-control');
    formFields.forEach(field => {
        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                clearError(field);
            }
        });
        field.addEventListener('change', () => {
            if (field.classList.contains('error')) {
                clearError(field);
            }
        });
    });

    // 3. Form Validation logic
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let hasErrors = false;
            
            // Gather elements
            const nameEl = document.getElementById('contact-name');
            const phoneEl = document.getElementById('contact-phone');
            const emailEl = document.getElementById('contact-email');
            const modelEl = document.getElementById('contact-model');
            const dateEl = document.getElementById('contact-date');
            const timeEl = document.getElementById('contact-time');
            const issueEl = document.getElementById('contact-issue');

            // Name checks
            if (nameEl.value.trim().length < 3) {
                showError(nameEl, 'Full Name must be at least 3 characters.');
                hasErrors = true;
            } else {
                clearError(nameEl);
            }

            // Phone checks (10-digit)
            if (!/^\d{10}$/.test(phoneEl.value.trim())) {
                showError(phoneEl, 'Please enter a valid 10-digit mobile number.');
                hasErrors = true;
            } else {
                clearError(phoneEl);
            }

            // Email checks
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailEl.value.trim())) {
                showError(emailEl, 'Please enter a valid email address.');
                hasErrors = true;
            } else {
                clearError(emailEl);
            }

            // Device Model checks
            if (modelEl.value.trim().length < 2) {
                showError(modelEl, 'Please enter your Dell device model.');
                hasErrors = true;
            } else {
                clearError(modelEl);
            }

            // Date checks
            if (!dateEl.value) {
                showError(dateEl, 'Please choose a preferred appointment date.');
                hasErrors = true;
            } else {
                // Verify not in past
                const selectedDate = new Date(dateEl.value);
                const today = new Date();
                today.setHours(0,0,0,0);
                
                if (selectedDate < today) {
                    showError(dateEl, 'Appointment date cannot be in the past.');
                    hasErrors = true;
                } else {
                    // Check if Saturday or Sunday (closed)
                    const day = selectedDate.getDay();
                    if (day === 0 || day === 6) {
                        showError(dateEl, 'We are closed on Saturdays and Sundays. Please choose a weekday.');
                        hasErrors = true;
                    } else {
                        clearError(dateEl);
                    }
                }
            }

            // Time checks
            if (!timeEl.value) {
                showError(timeEl, 'Please select your preferred time slot.');
                hasErrors = true;
            } else {
                clearError(timeEl);
            }

            // Issue description checks
            if (issueEl.value.trim().length < 10) {
                showError(issueEl, 'Issue description must be at least 10 characters long.');
                hasErrors = true;
            } else {
                clearError(issueEl);
            }

            // Prevent submit if invalid, otherwise trigger mock success
            if (hasErrors) {
                // Scroll to the first error
                const firstError = document.querySelector('.form-control.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
                showToast('Please correct the highlighted form errors.', 'error');
            } else {
                // Mock success message via Toast
                if (typeof window.parent.showToast === 'function') {
                    window.parent.showToast('Request Submitted! We will contact you shortly.', 'success');
                } else {
                    showToast('Request Submitted! Our service coordinator will contact you shortly to confirm the slot.', 'success');
                }
                
                contactForm.reset();
            }
        });
    }
});
