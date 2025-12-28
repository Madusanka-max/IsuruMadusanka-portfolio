/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
// Get the modal
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

// When the user clicks on the button, open the modal
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== PROJECTS DATA ===============*/
const projects = [
  {
    id: 1,
    title: "ESP32-CAM CCTV System",
    category: "ai mobile iot",
    img: "assets/img/esp32-setup.jpg",
    description: "AI-based camera with YOLOv8, global live streaming, SD storage, and Flutter app.",
    skills: ["ESP32-CAM", "YOLOv8", "Flutter", "Arduino", "Python"],
    github: "https://github.com/Madusanka-max/Intelligent-Indoor-OR-Outdoor-Surveillance-Camera-with-AI-Detection-and-Programmable-Relay-Control.git",
    caseStudy: {
      problem: "Traditional CCTV systems lack AI capabilities and are expensive to scale globally.",
      role: "Lead Developer & Hardware Engineer",
      challenges: [
        "Implementing YOLOv8 on resource-constrained ESP32",
        "Achieving real-time streaming with minimal latency",
        "Managing power consumption for 24/7 operation",
      ],
      solutions: [
        "Optimized YOLOv8 model for edge deployment",
        "Used MUX for efficient video streaming",
        "Implemented smart power management system",
      ],
      learnings: [
        "Edge AI optimization techniques",
        "Real-time video streaming architecture",
        "Hardware-software integration best practices",
      ],
      images: ["assets/img/esp32-setup.jpg", "assets/img/mobile-app.jpg", "assets/img/detection-demo.jpg"],
    },
  },
  {
    id: 2,
    title: "Cinnamon Traceability",
    category: "blockchain mobile",
    img: "assets/img/cinnamon-flow.jpg",
    description: "Blockchain-based system to trace cinnamon from cultivation to export.",
    skills: ["Hyperledger Fabric", "Flutter", "Blockchain"],
    github: "#",
    caseStudy: {
      problem: "Lack of transparency and traceability in the cinnamon supply chain reduces trust in export quality.",
      role: "UI/UX Designer",
      challenges: [
        "Mapping real-world supply chain to digital records",
        "Ensuring stakeholder usability with minimal tech literacy",
        "Generating real-time QR code tracking at every stage",
      ],
      solutions: [
        "Modeled all entities using Hyperledger Fabric smart contracts",
        "Built a user-friendly mobile app with Flutter",
        "Auto-generated QR codes: Used MUX for efficient video streaming",
      ],
      learnings: [
        "Practical use of blockchain in agriculture",
        "Stakeholder-centric design principles",
        "Data consistency across multiple actors",
      ],
      images: ["assets/img/cinnamon-flow.jpg", "assets/img/mobile-dashboard.jpg"],
    },
  },
  {
    id: 3,
    title: "Medical Records System",
    category: "blockchain desktop",
    img: "assets/img/cinnamon-flow.jpg", // Placeholder
    description: "Research project comparing Ethereum, Corda, and Hyperledger for secure medical data.",
    skills: ["Ethereum", "Corda", "Hyperledger", "Security"],
    github: "#",
    caseStudy: {
      problem: "Medical records systems are vulnerable to breaches, lack interoperability, and face regulatory issues.",
      role: "Team Lead & Blockchain Analyst",
      challenges: [
        "Evaluating compliance with GDPR/HIPAA",
        "Analyzing scalability under patient load",
        "Balancing decentralization with speed",
      ],
      solutions: [
        "Benchmarked 3 blockchain platforms",
        "Modeled healthcare workflows on-chain",
        "Proposed best-fit architecture for Sri Lankan health records",
      ],
      learnings: [
        "Deep understanding of blockchain consensus models",
        "Compliance requirements for health data",
        "Interoperability in decentralized health systems",
      ],
      images: ["assets/img/cinnamon-flow.jpg"],
    },
  },
  {
    id: 4,
    title: "Vehicle Repair Center",
    category: "web",
    img: "assets/img/repair-home.jpg",
    description: "Booking and management platform for vehicle repair services.",
    skills: ["PHP", "SQL", "Web"],
    github: "https://github.com/Madusanka-max/vehicle-repair-centers-website-using-PHP-HTML-CSS-JAVASCRIPT.git",
    caseStudy: {
      problem: "Vehicle owners lacked a centralized, digital system to schedule repair services easily.",
      role: "Full Stack Developer",
      challenges: [
        "Handling real-time booking availability",
        "Designing for mobile and desktop users",
        "Securing customer data and repair logs",
      ],
      solutions: [
        "Built dynamic forms and booking workflows using PHP and JS",
        "Used SQL to manage appointments, customers, and mechanics",
        "Responsive UI with CSS and Bootstrap",
      ],
      learnings: [
        "PHP and SQL integration for full-stack apps",
        "User experience design for service apps",
        "Database schema design for real-world operations",
      ],
      images: ["assets/img/repair-home.jpg", "assets/img/service-form.jpg", "assets/img/admin-panel.jpg"],
    },
  },
  {
    id: 5,
    title: "Grocery POS System",
    category: "desktop",
    img: "assets/img/pos-ui.jpg",
    description: "POS system for managing inventory, sales, and customer tracking.",
    skills: ["JavaFX", "SQL"],
    github: "https://github.com/Madusanka-max/GroceryShopManagementSystem.git",
    caseStudy: {
      problem: "Small retailers lacked a system to track inventory and generate sales reports efficiently.",
      role: "Desktop App Developer",
      challenges: [
        "Designing an intuitive GUI for non-tech users",
        "Ensuring accuracy in stock updates",
        "Generating printable receipts and reports",
      ],
      solutions: [
        "Used JavaFX for desktop GUI interface",
        "Connected to SQL database for live inventory control",
        "Created custom PDF receipts and charts",
      ],
      learnings: [
        "Desktop UX principles for point-of-sale",
        "Real-time DB sync in standalone apps",
        "JavaFX layout and scene management",
      ],
      images: ["assets/img/pos-ui.jpg", "assets/img/inventory-table.jpg", "assets/img/sales-report.jpg"],
    },
  },
  {
    id: 6,
    title: "Library Management",
    category: "desktop",
    img: "assets/img/cli-ui.jpg",
    description: "Command-line system for handling book lending and return operations.",
    skills: ["C", "File Handling"],
    github: "https://github.com/Madusanka-max/library-management-system-in-C.git",
    caseStudy: {
      problem: "Libraries lacked a digital system for managing lending and return operations.",
      role: "Systems Programmer",
      challenges: [
        "Implementing structured file storage",
        "Building a user menu with basic terminal tools",
        "Preventing data loss on crashes",
      ],
      solutions: [
        "Used structured C programs with file read/write operations",
        "Created interactive menu-driven app",
        "Backup and restore logic built using text dumps",
      ],
      learnings: [
        "File handling and struct usage in C",
        "Building maintainable console-based tools",
        "Error handling without databases",
      ],
      images: ["assets/img/cli-ui.jpg", "assets/img/Menu.jpg", "assets/img/book-menu.jpg"],
    },
  },
  {
    id: 7,
    title: "Healthy Farm Crops",
    category: "web",
    img: "assets/img/farm-landing.jpg",
    description: "Marketplace connecting farmers with consumers for direct sales.",
    skills: ["PHP", "Web Marketplace"],
    github: "https://github.com/Madusanka-max/HEALTHY-FARM-CROPS-Website-Using-PHP-HTML-CSS-JavaScript-SQL.git",
    caseStudy: {
      problem: "Farmers couldn’t easily connect with local buyers or list available produce online.",
      role: "Full Stack Developer",
      challenges: [
        "Making listings editable by farmers with little tech experience",
        "Handling product availability in real-time",
        "Mobile-friendly design for rural users",
      ],
      solutions: [
        "PHP and JavaScript for listing forms and validation",
        "SQL backend with category-based filtering",
        "Used Bootstrap + CSS for mobile-responsiveness",
      ],
      learnings: [
        "Building CRUD systems in PHP",
        "Accessibility for underserved communities",
        "Frontend/backend separation for low-bandwidth use",
      ],
      images: ["assets/img/farm-landing.jpg", "assets/img/product-list.jpg", "assets/img/seller-dashboard.jpg"],
    },
  },
  {
    id: 8,
    title: "EXTRU Exhibition 2025",
    category: "web",
    img: "assets/img/extru-home.jpg",
    description: "Official website for Rajarata University's EXTRU Exhibition.",
    skills: ["HTML", "CSS", "JS"],
    github: "https://github.com/samaraEdirisooriya/Extrue-2025-website-.git",
    caseStudy: {
      problem: "No centralized online hub for attendees and project presenters during the exhibition.",
      role: "Front-End Web Designer",
      challenges: [
        "Creating a visually engaging layout in a short deadline",
        "Embedding a responsive event schedule",
        "Keeping navigation simple for mobile users",
      ],
      solutions: [
        "Built static site using semantic HTML and responsive CSS",
        "Added JS-based schedule toggles and countdowns",
        "Deployed via GitHub Pages for ease of access",
      ],
      learnings: [
        "Rapid frontend prototyping",
        "Optimizing for public university audiences",
        "Cross-device UI testing",
      ],
      images: ["assets/img/extru-home.jpg", "assets/img/schedule.jpg", "assets/img/gallery.jpg"],
    },
  },
  {
    id: 9,
    title: "Weather Dashboard Application",
    category: "web",
    img: "assets/img/weather-dashboard.jpg",
    description: "Real-time weather dashboard with secure API integration and responsive UI.",
    skills: ["Angular", "Node.js", "WeatherAPI", "REST API"],
    github: "#",
    caseStudy: {
      problem: "Users needed a simple, real-time weather monitoring interface with reliable data and error handling.",
      role: "Frontend Developer",
      challenges: [
        "Secure API integration without exposing keys",
        "Handling API failures and rate limits",
        "Displaying dynamic data cleanly across screen sizes",
      ],
      solutions: [
        "Integrated WeatherAPI via environment-based configuration",
        "Implemented error handling and fallback UI states",
        "Built responsive Angular components for live updates",
      ],
      learnings: [
        "Angular component architecture",
        "API-driven UI design",
        "Frontend error handling strategies",
      ],
      images: [
        "assets/img/weather-dashboard.jpg",
        "assets/img/weather-mobile.jpg",
        "assets/img/weather-error-state.jpg",
      ],
    },
  },
  {
    id: 10,
    title: "ALO-BOT (Albion Online Vision Bot)",
    category: "ai desktop",
    img: "assets/img/alobot-demo.jpg",
    description: "Computer vision bot for detecting in-game resources and automating actions for research purposes.",
    skills: ["Python", "YOLO", "OpenCV", "Computer Vision"],
    github: "#",
    caseStudy: {
      problem: "Manual resource harvesting in games is repetitive and inefficient for research-based automation studies.",
      role: "AI Research Developer",
      challenges: [
        "Detecting in-game assets accurately under varying lighting conditions",
        "Maintaining performance in real-time detection",
        "Avoiding false positives during automation",
      ],
      solutions: [
        "Trained YOLO models on custom-labeled game screenshots",
        "Used OpenCV pipelines for frame preprocessing",
        "Implemented confidence thresholds and action cooldowns",
      ],
      learnings: [
        "Real-world computer vision limitations",
        "YOLO model tuning and dataset preparation",
        "Ethical considerations in automation research",
      ],
      images: [
        "assets/img/alobot-demo.jpg",
        "assets/img/alobot-detection.jpg",
        "assets/img/alobot-training.jpg",
      ],
    },
  },
  {
    id: 11,
    title: "Travel Portfolio Platform",
    category: "web",
    img: "assets/img/traveller-portfolio.jpg",
    description: "Modern travel portfolio platform with YouTube integration, live stats, and interactive maps.",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "YouTube Data API",
      "React Leaflet",
    ],
    github: "#",
    caseStudy: {
      problem: "Travel content creators lacked a centralized platform to showcase videos, locations, and channel growth.",
      role: "Full Stack Web Developer",
      challenges: [
        "Integrating live YouTube subscriber and video statistics",
        "Displaying travel locations interactively on a map",
        "Ensuring fast performance and smooth animations",
      ],
      solutions: [
        "Integrated YouTube Data API for real-time channel metrics",
        "Built interactive maps using React Leaflet",
        "Used Next.js and Framer Motion for optimized performance and UI animations",
      ],
      learnings: [
        "API quota management and caching",
        "Performance optimization in Next.js",
        "Building creator-focused digital platforms",
      ],
      images: [
        "assets/img/traveller-portfolio.jpg",
        "assets/img/traveller-map.jpg",
        "assets/img/traveller-dashboard.jpg",
      ],
    },
  },
];

/*=============== RENDER PROJECTS ===============*/
const workContainer = document.querySelector(".work__container");
const portfolioModal = document.getElementById("portfolio-modal");
const portfolioBody = document.getElementById("portfolio-modal-body");
const portfolioClose = document.getElementById("portfolio-modal-close");
const loadMoreBtn = document.getElementById("load-more-btn");

let mixer; // Global mixer instance
const INITIAL_PROJECTS = 12;

function createProjectCard(project) {
    return `
        <div class="work__card mix ${project.category}">
            <img src="${project.img}" alt="${project.title}" class="work__img">
            <h3 class="work__title">${project.title}</h3>
            <span class="work__button" onclick="openModal(${project.id})">
                See Details <i class='bx bx-right-arrow work__icon'></i>
            </span>
        </div>
    `;
}

function renderProjects() {
    let html = '';
    
    // Render initial projects
    const initialProjects = projects.slice(0, INITIAL_PROJECTS);
    initialProjects.forEach(project => {
        html += createProjectCard(project);
    });
    
    workContainer.innerHTML = html;

    // Initialize Mixitup
    mixer = mixitup(".work__container", {
        selectors: {
            target: ".work__card",
        },
        animation: {
            duration: 300,
        },
    });

    // Hide button if no more projects
    if (projects.length <= INITIAL_PROJECTS && loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

// Load More Click Handler
if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
        const remainingProjects = projects.slice(INITIAL_PROJECTS);
        
        remainingProjects.forEach(project => {
            // Create temp container to parse HTML string
            const div = document.createElement('div');
            div.innerHTML = createProjectCard(project).trim();
            
            // Append to mixer
            mixer.append(div.firstChild);
        });

        // Hide button after loading
        loadMoreBtn.style.display = 'none';
    });
}

// Call render on load
renderProjects();

/*=============== PORTFOLIO MODAL LOGIC ===============*/
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // Generate Case Study HTML
    const galleryHtml = project.caseStudy.images.map(img => `<img src="${img}" class="portfolio-img">`).join('');
    const skillsHtml = project.skills.map(skill => `<span class="portfolio-tag">${skill}</span>`).join('');
    const challengesHtml = project.caseStudy.challenges.map(c => `<li>${c}</li>`).join('');
    const solutionsHtml = project.caseStudy.solutions.map(s => `<li>${s}</li>`).join('');
    const learningsHtml = project.caseStudy.learnings.map(l => `<li>${l}</li>`).join('');

    const content = `
        <div class="portfolio-header">
            <h2 class="portfolio-title">${project.title}</h2>
            <span class="portfolio-role">${project.caseStudy.role}</span>
             <div class="portfolio-tags">
                ${skillsHtml}
            </div>
        </div>

        <div class="portfolio-grid">
            <div class="portfolio-left">
                <div class="portfolio-section">
                    <h3 class="portfolio-section-title">The Problem</h3>
                    <p class="portfolio-text">${project.caseStudy.problem}</p>
                </div>
                
                 <div class="portfolio-section">
                    <h3 class="portfolio-section-title">Challenges</h3>
                    <ul class="portfolio-list">
                        ${challengesHtml}
                    </ul>
                </div>

                 <div class="portfolio-section">
                    <h3 class="portfolio-section-title">Solutions</h3>
                    <ul class="portfolio-list">
                        ${solutionsHtml}
                    </ul>
                </div>
            </div>

            <div class="portfolio-right">
                <div class="portfolio-section">
                    <h3 class="portfolio-section-title">Key Learnings</h3>
                    <ul class="portfolio-list">
                        ${learningsHtml}
                    </ul>
                </div>
                 <a href="${project.github}" target="_blank" class="portfolio-link-btn">
                    <i class='bx bxl-github' ></i> View on GitHub
                </a>
            </div>
            
            <div class="portfolio-gallery">
                ${galleryHtml}
            </div>
        </div>
    `;

    portfolioBody.innerHTML = content;
    portfolioModal.classList.add("active-modal");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Close Modal
if(portfolioClose){
    portfolioClose.addEventListener("click", () => {
        portfolioModal.classList.remove("active-modal");
        document.body.style.overflow = "auto";
    });
}
// Close on click outside
if(portfolioModal){
    portfolioModal.addEventListener("click", (e) => {
        if(e.target === portfolioModal){
            portfolioModal.classList.remove("active-modal");
            document.body.style.overflow = "auto";
        }
    });
}

const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.nav__menu`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {
  delay: 100,
});

sr.reveal(`.home__social, .home__scroll`, {
  delay: 100,
  origin: "bottom",
});

sr.reveal(`.about__img`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about__data, .about__description, .about__button-contact`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.skills__content`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.services__title, services__button`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.work__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.testimonial__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.contact__info, .contact__title-info`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
});

sr.reveal(`.contact__form, .contact__title-form`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.footer, footer__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});
