// Dark mode functionality
function initializeDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved user preference, first in localStorage, then system setting
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // On page load, check if should be dark mode
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add('dark');
        updateThemeColor(true);
    }

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

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        const isDark = htmlElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeColor(isDark);

        // Animate icon
        const icon = isDark ? themeToggle.querySelector('.fa-moon') : themeToggle.querySelector('.fa-sun');
        gsap.fromTo(icon, 
            { rotation: -30, scale: 0.5, opacity: 0 },
            { rotation: 0, scale: 1, opacity: 1, duration: 0.3 }
        );
    });
}

// Update theme-color meta tag
function updateThemeColor(isDark) {
    const lightColor = '#ffffff';
    const darkColor = '#1f2937';
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
    gsap.from('#job-cards .job-card', {
        scrollTrigger: {
            trigger: '#job-cards',
            start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    gsap.from('#availability-badge', {
        scrollTrigger: {
            trigger: '#availability-badge',
            start: 'top 80%'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5
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

        try {
            submitStatus.textContent = 'Sending...';
            submitStatus.classList.remove('hidden', 'text-red-500');
            submitStatus.classList.add('text-blue-500');

            // Replace with your EmailJS configuration
            await emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    to_email: "isuru.rodrigo1243@gmail.com",
                    from_name: name.value,
                    from_email: email.value,
                    message: message.value,
                }
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
        }
    });

    ['name', 'email', 'message'].forEach(id => {
        document.getElementById(id).addEventListener('input', () => {
            showError(id, false);
        });
    });
}

// Initialize animations
function initializeAnimations() {
    // Hero section animations
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTl
        .from('#profile-container', {
            scale: 0.5,
            opacity: 0,
            duration: 1.2
        })
        .from('.hero-text', {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8
        }, '-=0.8')
        .from('.hero-buttons a', {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5
        }, '-=0.4');

    // Floating animation for profile image
    gsap.to('#profile-container', {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // Scroll trigger animations
    gsap.from('.about-title', {
        scrollTrigger: {
            trigger: '.about-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });

    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8
    });
}

// Mobile menu functionality
const mobileMenuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Make mobile theme toggle work the same as desktop
mobileThemeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    const isDark = htmlElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeColor(isDark);

    const icon = isDark ? mobileThemeToggle.querySelector('.fa-moon') : mobileThemeToggle.querySelector('.fa-sun');
    gsap.fromTo(icon, 
        { rotation: -30, scale: 0.5, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 1, duration: 0.3 }
    );
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    initializeContactSection();
    initializeAnimations();
    
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY");
});