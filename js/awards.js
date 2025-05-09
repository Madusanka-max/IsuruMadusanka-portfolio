// Awards & Recognition Timeline
export function initializeAwardsTimeline() {
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

    // Add timeline entries with animations
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

    // Initialize animations
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