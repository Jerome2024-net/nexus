let currentStep = 1;
const totalSteps = 3;
let formData = {}; // Store form data in memory instead of localStorage

// Form navigation
function updateProgress() {
    const dots = document.querySelectorAll('.progress-dot');
    const progressBar = document.querySelector('[role="progressbar"]');
    
    dots.forEach((dot, index) => {
        if (index < currentStep) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    if (progressBar) {
        progressBar.setAttribute('aria-valuenow', currentStep);
    }
}

function showStep(step) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    const targetStep = document.querySelector(`[data-step="${step}"]`);
    if (targetStep) {
        targetStep.classList.add('active');
    }
    updateProgress();
}

function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

// Enhanced validation
function validateField(field) {
    const group = field.closest('.form-group');
    const errorDiv = group.querySelector('.field-error');
    let isValid = true;
    let errorMessage = '';

    // Clear previous error
    group.classList.remove('error');
    errorDiv.classList.remove('show');

    if (field.hasAttribute('required') && (!field.value || field.value.trim() === '')) {
        isValid = false;
        errorMessage = 'Ce champ est obligatoire';
    } else if (field.type === 'email' && field.value) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            errorMessage = 'Veuillez saisir une adresse email valide';
        }
    } else if (field.type === 'tel' && field.value) {
        // Improved phone validation for French numbers
        const phoneRegex = /^(?:(?:\+|00)33[\s\-]?|0)[1-9](?:[\s\-]?\d{2}){4}$/;
        const cleanPhone = field.value.replace(/[\s\-\.\(\)]/g, '');
        if (!phoneRegex.test(field.value) && cleanPhone.length < 10) {
            isValid = false;
            errorMessage = 'Veuillez saisir un numéro de téléphone valide (ex: 01 23 45 67 89)';
        }
    } else if (field.tagName === 'SELECT' && field.hasAttribute('required') && field.value === '') {
        isValid = false;
        errorMessage = 'Veuillez faire une sélection';
    }

    if (!isValid) {
        group.classList.add('error');
        errorDiv.textContent = errorMessage;
        errorDiv.classList.add('show');
        field.setAttribute('aria-invalid', 'true');
    } else {
        field.setAttribute('aria-invalid', 'false');
    }

    return isValid;
}

function validateCurrentStep() {
    const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
    const requiredFields = currentStepElement.querySelectorAll('[required]');
    let allValid = true;

    requiredFields.forEach(field => {
        if (!validateField(field)) {
            allValid = false;
        }
    });

    return allValid;
}

// Real-time validation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        
        field.addEventListener('input', () => {
            if (field.closest('.form-group').classList.contains('error')) {
                validateField(field);
            }
            // Update form data and WhatsApp link
            updateFormDataAndWhatsApp(field.name, field.value);
        });

        // Track field interactions for analytics
        field.addEventListener('focus', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_field_focus', {
                    'event_category': 'Form Interaction',
                    'event_label': this.name,
                    'step': currentStep
                });
            }
        });
    });
});

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('consultationForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate current step before submission
            if (!validateCurrentStep()) {
                return;
            }

            const formDataObj = new FormData(this);
            const data = Object.fromEntries(formDataObj);
            
            // Get phone number for display
            const phoneNumber = data.phone || 'votre numéro';
            
            const submitBtn = document.querySelector('.btn-submit');
            
            // Loading state
            submitBtn.classList.add('btn-loading');
            submitBtn.textContent = '';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success toast notification first
                showSuccessToast();
                
                // Update success message with client phone
                const clientPhoneSpan = document.getElementById('clientPhone');
                const clientPhoneInline = document.getElementById('clientPhoneInline');
                
                if (clientPhoneSpan) {
                    clientPhoneSpan.textContent = phoneNumber;
                }
                if (clientPhoneInline) {
                    clientPhoneInline.textContent = phoneNumber;
                }
                
                // Smooth transition: replace form content with success content
                const formContent = document.getElementById('formContent');
                const successContainer = document.getElementById('successContainer');
                
                if (formContent && successContainer) {
                    // Add transition effect to container
                    const container = document.getElementById('formContainer');
                    container.classList.add('transitioning');
                    
                    // Fade out form content
                    formContent.style.opacity = '0';
                    formContent.style.transform = 'translateY(-10px)';
                    
                    setTimeout(() => {
                        // Hide form content and show success content
                        formContent.style.display = 'none';
                        successContainer.classList.add('show');
                        
                        // Remove transition class
                        container.classList.remove('transitioning');
                        
                        // Smooth scroll to success message (optional)
                        setTimeout(() => {
                            successContainer.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                        }, 200);
                        
                        // Auto-reset form after 8 seconds
                        setTimeout(() => {
                            resetFormToInitialState();
                        }, 8000);
                        
                    }, 300); // Wait for fade out animation
                }
                
                // Track conversion analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        'event_category': 'Lead Generation',
                        'event_label': 'Consultation Request',
                        'value': 1
                    });

                    if (data.revenue) {
                        gtag('event', 'lead_qualification', {
                            'event_category': 'Lead Scoring',
                            'event_label': data.revenue
                        });
                    }

                    if (data.sector) {
                        gtag('event', 'lead_sector', {
                            'event_category': 'Lead Segmentation',
                            'event_label': data.sector
                        });
                    }
                }

                // Clear form data
                formData = {};
                
            }, 1500);
        });
    }
});

// Function to reset form to initial state
function resetFormToInitialState() {
    const formContent = document.getElementById('formContent');
    const successContainer = document.getElementById('successContainer');
    const container = document.getElementById('formContainer');
    const form = document.getElementById('consultationForm');
    
    // Add fade out effect to success message
    if (successContainer) {
        successContainer.style.opacity = '0';
        successContainer.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            // Hide success container
            successContainer.classList.remove('show');
            successContainer.style.opacity = '1';
            successContainer.style.transform = 'translateY(0)';
            
            // Reset form
            if (form) {
                form.reset();
            }
            
            // Reset to step 1
            currentStep = 1;
            showStep(1);
            
            // Clear all error states
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });
            document.querySelectorAll('.field-error').forEach(error => {
                error.classList.remove('show');
                error.textContent = '';
            });
            
            // Reset button state
            const submitBtn = document.querySelector('.btn-submit');
            if (submitBtn) {
                submitBtn.classList.remove('btn-loading');
                submitBtn.textContent = 'Réserver ma consultation';
                submitBtn.disabled = false;
            }
            
            // Show form content again
            if (formContent) {
                formContent.style.display = 'block';
                formContent.style.opacity = '0';
                formContent.style.transform = 'translateY(10px)';
                
                // Animate form back in
                setTimeout(() => {
                    formContent.style.opacity = '1';
                    formContent.style.transform = 'translateY(0)';
                }, 100);
            }
            
            // Clear memory data
            formData = {};
            
            // Focus first input for accessibility
            setTimeout(() => {
                const firstInput = document.querySelector('.form-step.active input');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 300);
            
        }, 300);
    }
}

// Success Toast Functions
function showSuccessToast() {
    const toast = document.getElementById('successToast');
    if (toast) {
        toast.classList.add('show');
        
        // Auto-hide after 8 seconds
        setTimeout(() => {
            if (toast.classList.contains('show')) {
                toast.classList.remove('show');
            }
        }, 8000);
    }
}

function closeSuccessToast() {
    const toast = document.getElementById('successToast');
    if (toast) {
        toast.classList.remove('show');
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Enhanced header background on scroll
let ticking = false;
function updateHeader() {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        header.style.background = 'rgba(247, 242, 240, 0.95)';
        header.style.borderBottomColor = 'rgba(0, 0, 0, 0.08)';
        header.style.backdropFilter = 'saturate(180%) blur(25px)';
    } else {
        header.style.background = 'rgba(247, 242, 240, 0.8)';
        header.style.borderBottomColor = 'rgba(0, 0, 0, 0.05)';
        header.style.backdropFilter = 'saturate(180%) blur(20px)';
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
});

// Keyboard navigation improvements
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('btn-next')) {
        e.preventDefault();
        nextStep();
    } else if (e.key === 'Enter' && e.target.classList.contains('btn-prev')) {
        e.preventDefault();
        prevStep();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    
    // Set initial focus for accessibility
    const firstInput = document.querySelector('.form-step.active input');
    if (firstInput) {
        firstInput.focus();
    }

    // Update WhatsApp link dynamically
    updateWhatsAppLink();
});

// Update WhatsApp link with form data if available
function updateWhatsAppLink() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (!whatsappButton) return;

    const baseNumber = '22940000000'; // Remplacez par votre vrai numéro WhatsApp
    let message = 'Bonjour SUPERNOVA, je souhaite une consultation gratuite pour mon business. Pouvez-vous m\'aider ?';

    // Check if we have form data in memory
    if (formData && Object.keys(formData).length > 0) {
        const name = formData.firstName || formData.lastName ? 
            `${formData.firstName || ''} ${formData.lastName || ''}`.trim() : '';
        const company = formData.company || '';
        const sector = formData.sector || '';

        if (name || company) {
            message = `Bonjour SUPERNOVA, je suis ${name}${company ? ` de ${company}` : ''}${sector ? ` (secteur: ${sector})` : ''}. Je souhaite une consultation gratuite pour développer mon business avec l'IA. Pouvez-vous m'aider ?`;
        }
    }

    const encodedMessage = encodeURIComponent(message);
    whatsappButton.href = `https://wa.me/${baseNumber}?text=${encodedMessage}`;
}

// Update WhatsApp link when form data changes
function updateFormDataAndWhatsApp(fieldName, value) {
    formData[fieldName] = value;
    updateWhatsAppLink();
}
