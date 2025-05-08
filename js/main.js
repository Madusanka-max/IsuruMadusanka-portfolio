// Dark mode functionality
function initializeDarkMode() {
    const htmlElement = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved user preference, first in localStorage, then system setting
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Initial theme setup
    function setInitialTheme() {
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    }

    // Apply initial theme
    setInitialTheme();

    // Toggle theme function
    function toggleTheme() {
        htmlElement.classList.toggle('dark');
        const isDark = htmlElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

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

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                htmlElement.classList.add('dark');
            } else {
                htmlElement.classList.remove('dark');
            }
        }
    });
}

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', initializeDarkMode);

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
                "template_mgmu4kr",
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

    // About section enhanced animations
    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        }
    });

    aboutTimeline
        .from('.about-title', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.about-animation', {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.8)'
        }, '-=0.4')
        .from('#about .prose', {
            y: 20,
            opacity: 0,
            duration: 0.6
        }, '-=0.2')
        .from('#about .space-y-4', {
            x: -30,
            opacity: 0,
            duration: 0.6
        }, '-=0.3')
        .from('#about .bg-white\\/50', {
            y: 20,
            opacity: 0,
            duration: 0.6
        }, '-=0.2')
        .from('#about .grid > div', {
            scale: 0.8,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1
        }, '-=0.3')
        .from('#about .pt-4', {
            y: 20,
            opacity: 0,
            duration: 0.4
        }, '-=0.2');

    // Fun facts hover animations
    const funFacts = document.querySelectorAll('#about .grid > div');
    funFacts.forEach(fact => {
        fact.addEventListener('mouseenter', () => {
            gsap.to(fact, {
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        fact.addEventListener('mouseleave', () => {
            gsap.to(fact, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.in'
            });
        });
    });

    // About section animations
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

    // Education section animations
    gsap.from('#education h2', {
        scrollTrigger: {
            trigger: '#education',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8
    });

    // Animate education cards with stagger effect
    gsap.from('.education-card', {
        scrollTrigger: {
            trigger: '#education',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Add hover animations for education cards
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                duration: 0.3
            });
        });
    });

    // Awards section animations
    gsap.from('#awards h2', {
        scrollTrigger: {
            trigger: '#awards',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Awards timeline entries animation
    gsap.from('.award-item', {
        scrollTrigger: {
            trigger: '.awards-timeline',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
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

// Awards & Recognition Timeline
function initializeAwardsTimeline() {
    // Define awards data
    const awards = [
        {
            year: "2025",
            title: "Champion – Inter Faculty Volleyball",
            description: "Led the ICT Faculty team to victory in the university-wide tournament.",
            icon: "fa-volleyball-ball",
            iconColor: "text-yellow-500"
        },
        {
            year: "2024",
            title: "1st Runners-Up – Football (Freshers' Meet)",
            description: "Contributed to team strategy and defense in the inter-departmental tournament.",
            icon: "fa-soccer-ball",
            iconColor: "text-gray-400"
        },
        {
            year: "2024",
            title: "DevRel Lead – FOSS Community RUSL",
            description: "Organized tech talks, guided juniors on GitHub, promoted open source culture.",
            icon: "fa-users",
            iconColor: "text-green-500"
        },
        {
            year: "2023",
            title: "Chess Tournament – 2nd Runners-Up",
            description: "Qualified for finals and secured team bronze at the university chess championship.",
            icon: "fa-chess",
            iconColor: "text-yellow-700"
        },
    ];

    // Create timeline entries
    const timelineContainer = document.querySelector('.awards-timeline');
    if (!timelineContainer) return; // Guard clause
    
    // Clear existing entries
    timelineContainer.innerHTML = '';

    // Add timeline entries immediately without animation delay
    awards.forEach((award, index) => {
        const isEven = index % 2 === 0;
        const entry = document.createElement('article');
        entry.className = `award-item flex group relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`;
        entry.innerHTML = `
            <div class="flex-shrink-0 w-16 text-center z-10">
                <div class="w-4 h-4 bg-blue-500 rounded-full mx-auto ring-4 ring-white dark:ring-gray-900 pulse"></div>
                <time class="block text-sm text-gray-500 dark:text-gray-400 mt-2">${award.year}</time>
            </div>
            <div class="flex-grow ${isEven ? 'md:ml-6' : 'md:mr-6'} bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex items-center gap-2 mb-2">
                    <i class="fas ${award.icon} ${award.iconColor} text-xl"></i>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">${award.title}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-400">${award.description}</p>
            </div>
        `;
        timelineContainer.appendChild(entry);
    });
}

// Call initializeAwardsTimeline immediately after DOM is ready
document.addEventListener('DOMContentLoaded', initializeAwardsTimeline);

// Re-initialize on any theme changes
document.addEventListener('themeChanged', initializeAwardsTimeline);

// Terminal typing animation
async function initializeTerminal() {
    const terminalLines = [
        { prompt: '> whoami', output: '👨‍💻 Isuru Madusanka Rodrigo' },
        { prompt: '> passion', output: '🌐 Web Development, Open Source, Blockchain, IoT' },
        { prompt: '> mission', output: '🚀 Build secure, scalable tech that matters.' }
    ];
    
    const terminal = document.getElementById('terminal-text');
    const typeDelay = 50; // Delay between each character
    const lineDelay = 500; // Delay between lines
    const loopDelay = 3000; // Delay before starting the next loop

    async function typeTerminal() {
        // Clear previous content
        terminal.innerHTML = '';
        
        for (const line of terminalLines) {
            // Create and add prompt line
            const promptDiv = document.createElement('div');
            promptDiv.className = 'terminal-line';
            promptDiv.innerHTML = `<span class="terminal-prompt">${line.prompt}</span>`;
            terminal.appendChild(promptDiv);
            
            // Animate prompt appearing
            await new Promise(resolve => setTimeout(resolve, 100));
            promptDiv.classList.add('visible');
            
            await new Promise(resolve => setTimeout(resolve, lineDelay));
            
            // Create and add output line
            const outputDiv = document.createElement('div');
            outputDiv.className = 'terminal-line terminal-output';
            terminal.appendChild(outputDiv);
            
            // Type out each character of the output
            for (let i = 0; i < line.output.length; i++) {
                outputDiv.textContent = line.output.slice(0, i + 1);
                await new Promise(resolve => setTimeout(resolve, typeDelay));
            }
            
            outputDiv.classList.add('visible');
            await new Promise(resolve => setTimeout(resolve, lineDelay));
        }

        // Wait before starting the next loop
        await new Promise(resolve => setTimeout(resolve, loopDelay));

        // Fade out existing content
        const lines = terminal.querySelectorAll('.terminal-line');
        lines.forEach(line => {
            line.style.transition = 'opacity 0.5s';
            line.style.opacity = '0';
        });

        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Start the loop again
        typeTerminal();
    }

    // Start the initial loop
    typeTerminal();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Initialize EmailJS with a promise
        await emailjs.init("BweEaqR992ldwGz_3");
        console.log("EmailJS initialized successfully");
    } catch (error) {
        console.error("Failed to initialize EmailJS:", error);
    }
    
    initializeDarkMode();
    initializeTerminal();
    initializeContactSection();
    initializeAnimations();
    initializeAwardsTimeline();
});