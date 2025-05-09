// Contact section functionality
export function initializeContactSection() {
    setupJobCards();
    setupAvailabilityBadge();
    setupContactForm();

    // Add scroll animations
    const contactTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        }
    });

    contactTimeline
        .from('.contact-title', {
            y: 30,
            opacity: 0,
            duration: 0.6
        })
        .from('#availability-badge', {
            scale: 0.8,
            opacity: 0,
            duration: 0.5
        })
        .from('#job-cards .job-card', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        })
        .from('.contact-info', {
            x: -50,
            opacity: 0,
            duration: 0.6
        })
        .from('#contactForm', {
            x: 50,
            opacity: 0,
            duration: 0.6
        }, '-=0.6');

    setupFormInteractions();
    setupSocialIcons();
    setupSubmitButton();
}

function setupJobCards() {
    const jobOffers = [
        {
            title: 'GSoC Mentor?',
            icon: '🎯',
            message: `Hi Isuru,\n\nI'm interested in having you as a GSoC mentor for my project. Would love to discuss potential collaboration opportunities.\n\nBest regards`
        },
        {
            title: 'Tech Internship?',
            icon: '🏢',
            message: `Hi Isuru,\n\nI'm reaching out regarding potential internship opportunities. Your experience in Web Development is exactly what we're looking for.\n\nLooking forward to your response`
        },
        {
            title: 'Want to Collaborate?',
            icon: '💡',
            message: `Hi Isuru,\n\nI came across your portfolio and I'm impressed by your work. I have an exciting project idea in Web Development, and I'd love to collaborate.\n\nBest regards`
        }
    ];

    const cardsContainer = document.getElementById('job-cards');
    jobOffers.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer';
        card.innerHTML = `
            <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">${job.icon}</span>
                <h3 class="text-lg font-semibold dark:text-white">${job.title}</h3>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">Click to autofill message</p>
        `;
        card.dataset.message = job.message;
        card.addEventListener('click', () => {
            document.getElementById('message').value = job.message;
            document.getElementById('message').focus();
            scrollToForm();
            
            // Add a flash effect to highlight the form
            const form = document.getElementById('contactForm');
            form.classList.add('ring-4', 'ring-blue-500', 'ring-opacity-50');
            setTimeout(() => {
                form.classList.remove('ring-4', 'ring-blue-500', 'ring-opacity-50');
            }, 1000);
        });
        cardsContainer.appendChild(card);
    });
}

function setupAvailabilityBadge() {
    const isAvailable = true;
    const availabilityTexts = {
        available: '✅ Currently open for new opportunities',
        unavailable: '🚫 Not accepting new projects at the moment'
    };

    const badge = document.getElementById('availability-badge');
    badge.textContent = isAvailable ? availabilityTexts.available : availabilityTexts.unavailable;
    badge.className = `px-4 py-2 rounded-full text-sm font-medium ${
        isAvailable 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 animate-pulse' 
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    }`;
}

function scrollToForm() {
    const form = document.getElementById('contactForm');
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function setupFormInteractions() {
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    
    formInputs.forEach(input => {
        // Add focus animations
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.2
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.2
            });
        });

        // Add typing effect
        input.addEventListener('input', () => {
            if (!input.classList.contains('typing')) {
                input.classList.add('typing');
                gsap.to(input, {
                    borderColor: '#3B82F6',
                    duration: 0.2
                });
            }
        });
    });
}

function setupSocialIcons() {
    const socialIcons = document.querySelectorAll('.social-links a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                y: -3,
                scale: 1.1,
                duration: 0.2
            });
        });

        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.2
            });
        });
    });
}

function setupSubmitButton() {
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    submitButton.addEventListener('mouseenter', () => {
        gsap.to(submitButton.querySelector('i'), {
            x: 5,
            duration: 0.2
        });
    });

    submitButton.addEventListener('mouseleave', () => {
        gsap.to(submitButton.querySelector('i'), {
            x: 0,
            duration: 0.2
        });
    });
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitStatus = document.getElementById('submitStatus');

    function showError(inputId, show = true) {
        const errorElement = document.getElementById(`${inputId}Error`);
        errorElement.classList.toggle('hidden', !show);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;

        // Validate inputs
        if (!name.value.trim()) {
            showError('name', true);
            isValid = false;
        } else {
            showError('name', false);
        }

        if (!email.value.trim() || !validateEmail(email.value)) {
            showError('email', true);
            isValid = false;
        } else {
            showError('email', false);
        }

        if (!message.value.trim()) {
            showError('message', true);
            isValid = false;
        } else {
            showError('message', false);
        }

        if (!isValid) return;

        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        
        try {
            submitStatus.textContent = 'Sending...';
            submitStatus.classList.remove('hidden', 'text-red-500', 'text-green-500');
            submitStatus.classList.add('text-blue-500');

            const templateParams = {
                from_name: name.value.trim(),
                reply_to: email.value.trim(),
                message: message.value.trim()
            };

            await emailjs.send(
                "service_zr76d69",  // EmailJS service ID
                "template_mg475mf", // EmailJS template ID
                templateParams
            );

            submitStatus.textContent = 'Message sent successfully!';
            submitStatus.classList.remove('text-blue-500');
            submitStatus.classList.add('text-green-500');
            contactForm.reset();

            setTimeout(() => {
                submitStatus.classList.add('hidden');
            }, 5000);

        } catch (error) {
            console.error('Error:', error);
            submitStatus.textContent = 'Failed to send message. Please try again.';
            submitStatus.classList.remove('text-blue-500');
            submitStatus.classList.add('text-red-500');
        } finally {
            submitButton.disabled = false;
        }
    });

    // Clear errors on input
    ['name', 'email', 'message'].forEach(id => {
        document.getElementById(id).addEventListener('input', () => {
            showError(id, false);
        });
    });
}