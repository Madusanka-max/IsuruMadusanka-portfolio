// Dark mode functionality
function initializeDarkMode() {
    const htmlElement = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    // Check for saved user preference, first in localStorage, then system setting
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Initial theme setup
    function setInitialTheme() {
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            htmlElement.classList.add('dark');
            updateThemeColor(true);
        } else {
            htmlElement.classList.remove('dark');
            updateThemeColor(false);
        }
    }

    // Apply initial theme
    setInitialTheme();

    // Toggle theme function
    function toggleTheme() {
        htmlElement.classList.toggle('dark');
        const isDark = htmlElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeColor(isDark);

        // Animate icons
        const icon = isDark ? 
            themeToggle.querySelector('.fa-moon') : 
            themeToggle.querySelector('.fa-sun');

        gsap.fromTo(icon, 
            { rotation: -30, scale: 0.5, opacity: 0 },
            { rotation: 0, scale: 1, opacity: 1, duration: 0.3 }
        );
    }

    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    mobileThemeToggle.addEventListener('click', toggleTheme);

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                htmlElement.classList.add('dark');
                updateThemeColor(true);
            } else {
                htmlElement.classList.remove('dark');
                updateThemeColor(false);
            }
        }
    });
}

// Update theme-color meta tag
function updateThemeColor(isDark) {
    const lightColor = '#f9fafb';  // matches theme background color
    const darkColor = '#0f172a';   // matches theme darkBackground color
    document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').content = lightColor;
    document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').content = darkColor;
}

// Contact section functionality
function initializeContactSection() {
    setupJobCards();
    setupAvailabilityBadge();
    initializeLottieAnimation();
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

    // Enhance form interactions
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

    // Add social icons hover effect
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

    // Enhance submit button interaction
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
            message: `Hi Isuru,\n\nI'm reaching out regarding potential internship opportunities. Your experience in IoT and blockchain is exactly what we're looking for.\n\nLooking forward to your response`
        },
        {
            title: 'Want to Collaborate?',
            icon: '💡',
            message: `Hi Isuru,\n\nI came across your portfolio and I'm impressed by your work. I have an exciting project idea that combines IoT with blockchain, and I'd love to collaborate.\n\nBest regards`
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

function initializeLottieAnimation() {
    const animationContainer = document.getElementById('lottie-typing');
    
    if (!animationContainer) {
        console.warn('Lottie animation container not found');
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animationContainer.play();
            } else {
                animationContainer.pause();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(animationContainer);

    // Add scaling animation on hover
    animationContainer.addEventListener('mouseenter', () => {
        gsap.to(animationContainer, {
            scale: 1.05,
            duration: 0.3
        });
    });

    animationContainer.addEventListener('mouseleave', () => {
        gsap.to(animationContainer, {
            scale: 1,
            duration: 0.3
        });
    });
}

function scrollToForm() {
    const form = document.getElementById('contactForm');
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

            console.log("Attempting to send email with params:", templateParams);
            
            const response = await emailjs.send(
                "service_zr76d69",
                "template_mg475mf",
                templateParams
            );
            
            console.log("Email sent successfully:", response);

            submitStatus.textContent = 'Message sent successfully!';
            submitStatus.classList.remove('text-blue-500');
            submitStatus.classList.add('text-green-500');
            contactForm.reset();

            setTimeout(() => {
                submitStatus.classList.add('hidden');
            }, 5000);

        } catch (error) {
            console.error('Error sending email:', error);
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

// Initialize animations
function initializeAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Force content visibility
    const elements = document.querySelectorAll('.hero-text, .about-title, .education-card');
    elements.forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.classList.add('content-visible');
    });

    // Hero section animations
    const heroTl = gsap.timeline({ 
        defaults: { ease: 'power3.out' }
    });

    heroTl
        .from('#profile-container', {
            scale: 0.5,
            duration: 1.2
        })
        .from('.hero-buttons a', {
            y: 20,
            stagger: 0.1,
            duration: 0.5
        }, '-=0.4');

    // About section animations
    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    aboutTimeline
        .from('.about-animation', {
            scale: 0.8,
            duration: 1,
            ease: 'elastic.out(1, 0.8)'
        })
        .from('#about .prose', {
            y: 20,
            duration: 0.6
        })
        .from('#about .space-y-4', {
            x: -30,
            duration: 0.6
        });

    // Education section animations
    const educationTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#education',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    educationTimeline
        .from('#education h2', {
            y: 30,
            duration: 0.8
        })
        .from('.education-card', {
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4');
}

// Initialize on load
window.addEventListener('load', () => {
    if (typeof gsap !== 'undefined') {
        // Make content visible immediately
        const elements = document.querySelectorAll('.hero-text, .about-title, .education-card');
        elements.forEach(el => {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
            el.classList.add('content-visible');
        });
        // Initialize animations after content is visible
        setTimeout(initializeAnimations, 100);
    }
});

