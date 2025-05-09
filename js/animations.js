// Initialize animations
export function initializeAnimations() {
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
}

// Initialize Lottie animation
export function initializeLottieAnimation() {
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