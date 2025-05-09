// Import modules
import { initializeDarkMode } from '/js/theme.js';
import { initializeAnimations, initializeLottieAnimation } from '/js/animations.js';
import { initializeContactSection } from '/js/contact.js';
import { initializeAwardsTimeline } from '/js/awards.js';
import { initializeTerminal } from '/js/terminal.js';
import { initializeSkillsAndProjects } from '/js/projects.js';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await emailjs.init("BweEaqR992ldwGz_3");
        console.log("EmailJS initialized successfully");
    } catch (error) {
        console.error("Failed to initialize EmailJS:", error);
    }
    
    // Initialize all modules
    initializeDarkMode();
    initializeTerminal();
    initializeContactSection();
    initializeAnimations();
    initializeLottieAnimation();
    initializeAwardsTimeline();
    initializeSkillsAndProjects();
    initializeMobileMenu();
});