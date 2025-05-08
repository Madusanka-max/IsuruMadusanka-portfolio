// Skills and Projects Data
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Dart",
  "Next.js",
  "Flutter",
  "JavaFX",
  "C",
  "PHP",
  "SQL",
  "Tailwind CSS",
  "Arduino IDE",
  "ESP32-CAM",
  "MUX Streaming",
  "Hyperledger Fabric",
  "Ethereum",
  "Corda",
  "Blockchain",
  "RESEND",
  "YOLOv8",
];

const projects = [
  {
    title: "ESP32-CAM CCTV System",
    description:
      "AI-based camera with YOLOv8, global live streaming, SD storage, and Flutter app.",
    skills: [
      "ESP32-CAM",
      "YOLOv8",
      "Flutter",
      "Arduino IDE",
      "MUX Streaming",
      "Dart",
    ],
    github:
      "https://github.com/Madusanka-max/Intelligent-Indoor-OR-Outdoor-Surveillance-Camera-with-AI-Detection-and-Programmable-Relay-Control.git",
    caseStudy: {
      problem:
        "Traditional CCTV systems lack AI capabilities and are expensive to scale globally.",
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
      images: ["esp32-setup.jpg", "mobile-app.jpg", "detection-demo.jpg"],
    },
  },
  {
    title: "Cinnamon Traceability Blockchain",
    description:
      "Blockchain-based system to trace cinnamon from cultivation to export using QR codes and Flutter app.",
    skills: ["Hyperledger Fabric", "Flutter", "Blockchain", "Dart", "QR Code"],
    github: "#",
    caseStudy: {
      problem:
        "Lack of transparency and traceability in the cinnamon supply chain reduces trust in export quality.",
      role: "UI/UX Designer",
      challenges: [
        "Mapping real-world supply chain to digital records",
        "Ensuring stakeholder usability with minimal tech literacy",
        "Generating real-time QR code tracking at every stage",
      ],
      solutions: [
        "Modeled all entities using Hyperledger Fabric smart contracts",
        "Built a user-friendly mobile app with Flutter",
        "Auto-generated QR codes for each batch and updated in real-time",
      ],
      learnings: [
        "Practical use of blockchain in agriculture",
        "Stakeholder-centric design principles",
        "Data consistency across multiple actors",
      ],
      images: ["cinnamon-flow.jpg", "qr-scan.jpg", "mobile-dashboard.jpg"],
    },
  },
  {
    title: "Blockchain Medical Records System",
    description:
      "Research project comparing Ethereum, Corda, and Hyperledger for storing secure medical data.",
    skills: ["Ethereum", "Corda", "Hyperledger Fabric", "Blockchain Security"],
    github: "#",
    caseStudy: {
      problem:
        "Medical records systems are vulnerable to breaches, lack interoperability, and face regulatory issues.",
      role: "Team Lead & Blockchain Analyst",
      challenges: [
        "Evaluating compliance with GDPR/HIPAA",
        "Analyzing scalability under patient load",
        "Balancing decentralization with speed",
      ],
      solutions: [
        "Benchmarked 3 blockchain platforms for performance and security",
        "Modeled healthcare workflows on-chain for comparison",
        "Proposed best-fit architecture for Sri Lankan health records",
      ],
      learnings: [
        "Deep understanding of blockchain consensus models",
        "Compliance requirements for health data",
        "Interoperability in decentralized health systems",
      ],
      images: [
        "blockchain-health.jpg",
        "platform-comparison.jpg",
        "architecture.png",
      ],
    },
  },
  {
    title: "Vehicle Repair Center Website",
    description:
      "A booking and management platform for vehicle repair services with backend database integration.",
    skills: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Madusanka-max/vehicle-repair-centers-website-using-PHP-HTML-CSS-JAVASCRIPT.git",
    caseStudy: {
      problem:
        "Vehicle owners lacked a centralized, digital system to schedule repair services easily.",
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
      images: ["repair-home.jpg", "service-form.jpg", "admin-panel.jpg"],
    },
  },
  {
    title: "Grocery Shop Management System",
    description:
      "A POS system for managing inventory, sales, and customer tracking in local grocery shops.",
    skills: ["JavaFX", "SQL"],
    github: "https://github.com/Madusanka-max/GroceryShopManagementSystem.git",
    caseStudy: {
      problem:
        "Small retailers lacked a system to track inventory and generate sales reports efficiently.",
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
      images: ["pos-ui.jpg", "inventory-table.jpg", "sales-report.jpg"],
    },
  },
  {
    title: "Library Management System",
    description:
      "A command-line system for handling book lending, returning, and catalog tracking.",
    skills: ["C", "File Handling"],
    github:
      "https://github.com/Madusanka-max/library-management-system-in-C.git",
    caseStudy: {
      problem:
        "Libraries lacked a digital system for managing lending and return operations.",
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
      images: ["cli-ui.jpg", "Menu.jpg", "book-menu.jpg"],
    },
  },
  {
    title: "Healthy Farm Crops Website",
    description:
      "Marketplace web app connecting local farmers with consumers for direct sales.",
    skills: ["PHP", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Madusanka-max/HEALTHY-FARM-CROPS-Website-Using-PHP-HTML-CSS-JavaScript-SQL.git",
    caseStudy: {
      problem:
        "Farmers couldn't easily connect with local buyers or list available produce online.",
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
      images: ["farm-landing.jpg", "product-list.jpg", "seller-dashboard.jpg"],
    },
  },
  {
    title: "EXTRU Exhibition Website",
    description:
      "Official website for Rajarata University's EXTRU Exhibition, highlighting events, projects, and schedules.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/samaraEdirisooriya/Extrue-2025-website-.git",
    caseStudy: {
      problem:
        "No centralized online hub for attendees and project presenters during the exhibition.",
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
      images: ["extru-home.jpg", "schedule.jpg", "gallery.jpg"],
    },
  },
];

// Skills and Projects functionality
function initializeSkillsAndProjects() {
  const skillsGrid = document.getElementById("skills-grid");
  const filteredProjects = document.getElementById("filtered-projects");
  const selectedSkillsContainer = document.getElementById("selected-skills");
  const noProjectsMessage = document.getElementById("no-projects-message");
  let selectedSkills = new Set();

  // Create skill buttons
  function createSkillButtons() {
    skills.forEach((skill) => {
      const button = document.createElement("button");
      button.className =
        "skill-filter-btn px-4 py-2 rounded-full bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all";
      button.dataset.skill = skill;
      button.textContent = skill;
      skillsGrid.appendChild(button);
    });
  }

  // Create project cards
  function createProjectCard(project) {
    return `
            <div class="project-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden" data-skills="${project.skills.join(
              ","
            )}">
                <div class="relative overflow-hidden group">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">${
                          project.title
                        }</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">${
                          project.description
                        }</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.skills
                              .map(
                                (skill) => `
                                <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors" 
                                      data-skill="${skill}">${skill}</span>
                            `
                              )
                              .join("")}
                        </div>
                        <div class="flex items-center space-x-4">
                            <a href="${
                              project.github
                            }" target="_blank" rel="noopener noreferrer" 
                               class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                                <i class="fab fa-github mr-2"></i> View Code
                            </a>
                            ${
                              project.caseStudy
                                ? `
                                <button class="view-case-study inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                                        data-project="${project.title}">
                                    <i class="fas fa-book-open mr-2"></i> View Case Study
                                </button>
                            `
                                : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  function renderProjects() {
    const projectsHTML = projects
        .filter((project) => {
            if (selectedSkills.size === 0) return true;
            return Array.from(selectedSkills).every((skill) =>
                project.skills.includes(skill)
            );
        })
        .map(createProjectCard)
        .join("");

    const timeline = gsap.timeline();
    const projectCards = document.querySelectorAll("#filtered-projects .project-card");

    if (projectCards.length > 0) {
        timeline.to(projectCards, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.1,
            onComplete: () => {
                filteredProjects.innerHTML = projectsHTML;

                if (projectsHTML === "") {
                    noProjectsMessage.classList.remove("hidden");
                    gsap.to(noProjectsMessage, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                    });
                } else {
                    noProjectsMessage.classList.add("hidden");
                    const newProjectCards = document.querySelectorAll("#filtered-projects .project-card");
                    if (newProjectCards.length > 0) {
                        gsap.from(newProjectCards, {
                            opacity: 0,
                            y: 20,
                            duration: 0.3,
                            stagger: 0.1,
                        });
                    }
                }
            },
        });
    } else {
        filteredProjects.innerHTML = projectsHTML;
    }
  }

  function updateSelectedSkills() {
    selectedSkillsContainer.innerHTML = Array.from(selectedSkills)
      .map(
        (skill) => `
            <span class="px-3 py-1 bg-blue-500 text-white rounded-full text-sm flex items-center gap-2">
                ${skill}
                <button class="remove-skill" data-skill="${skill}">
                    <i class="fas fa-times"></i>
                </button>
            </span>
        `
      )
      .join("");
  }

  function updateButtonStates() {
    document.querySelectorAll(".skill-filter-btn").forEach((btn) => {
      const skill = btn.dataset.skill;
      if (skill === "all") {
        btn.classList.toggle("active", selectedSkills.size === 0);
      } else {
        btn.classList.toggle("active", selectedSkills.has(skill));
      }
    });
  }

  // Initialize Case Study Modal functionality
  function initializeCaseStudyModal() {
    const modal = document.getElementById("case-study-modal");
    const closeBtn = document.getElementById("close-modal");
    const content = document.getElementById("case-study-content");

    // Create zoom overlay
    const zoomOverlay = document.createElement('div');
    zoomOverlay.className = 'zoomed-image-overlay';
    document.body.appendChild(zoomOverlay);

    function showCaseStudy(projectTitle) {
      const project = projects.find((p) => p.title === projectTitle);
      if (!project || !project.caseStudy) return;

      const cs = project.caseStudy;
      content.querySelector("h2").textContent = project.title;
      content.querySelector(":nth-child(2) p").textContent = cs.problem;
      content.querySelector(":nth-child(3) p").textContent = cs.role;

      const challengesList = content.querySelector(".challenges ul");
      challengesList.innerHTML = cs.challenges
        .map((c) => `<li>${c}</li>`)
        .join("");

      const solutionsList = content.querySelector(".solutions ul");
      solutionsList.innerHTML = cs.solutions
        .map((s) => `<li>${s}</li>`)
        .join("");

      const learningsList = content.querySelector("div:last-child ul");
      learningsList.innerHTML = cs.learnings
        .map((l) => `<li>${l}</li>`)
        .join("");

      const imagesContainer = document.getElementById("case-study-images");
      imagesContainer.innerHTML = cs.images
        .map(
          (img) => `
                <img src="assets/images/${img}" alt="Project screenshot" 
                     class="rounded-lg shadow-md hover:scale-105 transition-transform cursor-zoom-in w-full h-48 object-cover"
                     onclick="handleImageZoom(this)">
            `
        )
        .join("");

      modal.classList.remove("hidden");
      gsap.from(content, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }

    // Handle image zoom
    window.handleImageZoom = function(img) {
      const zoomedImg = document.createElement('img');
      zoomedImg.src = img.src;
      zoomedImg.alt = img.alt;
      
      zoomOverlay.innerHTML = '';
      zoomOverlay.appendChild(zoomedImg);
      zoomOverlay.classList.add('active');
      
      // Close on click
      zoomOverlay.onclick = function() {
          zoomOverlay.classList.remove('active');
      };

      // Close on escape key
      document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
              zoomOverlay.classList.remove('active');
          }
      }, { once: true });
    }

    document.addEventListener("click", (e) => {
      const caseStudyButton = e.target.closest(".view-case-study");
      if (caseStudyButton) {
        showCaseStudy(caseStudyButton.dataset.project);
      }
    });

    closeBtn.addEventListener("click", () => {
      gsap.to(content, {
        y: 50,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          modal.classList.add("hidden");
          content.style.transform = "none";
          content.style.opacity = "1";
        },
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeBtn.click();
      }
    });
  }

  // Initialize everything
  createSkillButtons();
  renderProjects();
  initializeCaseStudyModal();

  // Event delegation for skill buttons and tags
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("skill-filter-btn")) {
      const skill = e.target.dataset.skill;
      if (skill === "all") {
        selectedSkills.clear();
      } else if (selectedSkills.has(skill)) {
        selectedSkills.delete(skill);
      } else {
        selectedSkills.add(skill);
      }
      updateSelectedSkills();
      updateButtonStates();
      renderProjects();
    }

    if (e.target.classList.contains("bg-blue-100")) {
      const skill = e.target.dataset.skill;
      if (!selectedSkills.has(skill)) {
        selectedSkills.add(skill);
        updateSelectedSkills();
        updateButtonStates();
        renderProjects();
      }
    }

    if (
      e.target.classList.contains("remove-skill") ||
      e.target.parentElement?.classList.contains("remove-skill")
    ) {
      const skillToRemove = e.target.closest("[data-skill]").dataset.skill;
      selectedSkills.delete(skillToRemove);
      updateSelectedSkills();
      updateButtonStates();
      renderProjects();
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeSkillsAndProjects);
