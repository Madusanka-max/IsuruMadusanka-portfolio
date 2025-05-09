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
            } else {
                htmlElement.classList.remove('dark');
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

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', initializeDarkMode);

// Export for use in other modules
export { initializeDarkMode, updateThemeColor };