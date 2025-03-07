document.addEventListener('DOMContentLoaded', () => {
    // Certificates data
    const certificates = [
        {
            imgSrc: "./img/Certifications/Kali Linux.png",
            title: "Introduction to Kali Linux Basics",
            description: "Course on Kali Linux Basics with kali linux working and commands and basics of tools for pentesting.",
            category: "cybersecurity"
        },
        {
            imgSrc: "./img/Certifications/Intro Cyber Security.png",
            title: "Introduction to Cyber Security Essentials",
            description: "Foundation and Fundamentals of Cyber Security practices and techniques.",
            category: "cybersecurity"
        },
        {
            imgSrc: "./img/Certifications/Cyber Security National Seminar.png",
            title: "National Level Seminar on Cyber Security and Data Privacy",
            description: "Brief Discussion about the Cyber Security and Data Privacy by considering the latest trends and technologies.",
            category: "cybersecurity"
        },
        {
            imgSrc: "./img/Certifications/Linux_Tutorial.png",
            title: "Working with Linux (Ubuntu) Operating System",
            description: "Introduction to Linux OS and its fundamentals.",
            category: "tools"
        },
        {
            imgSrc: "./img/Certifications/Java_DSA_Intermediate.png",
            title: "Java DSA Intermediate",
            description: "Advanced concepts in Java Data Structures and Algorithms.",
            category: "programming"
        },
        {
            imgSrc: "./img/Certifications/Java_DSA_Beginers.png",
            title: "Basic Java Data Structures",
            description: "Fundamentals of Data Structures using Java.",
            category: "programming"
        },
        {
            imgSrc: "./img/Certifications/IOT.png",
            title: "IoT Components and Applications",
            description: "Comprehensive overview of Internet of Things technology.",
            category: "tools"
        },
        {
            imgSrc: "./img/Certifications/Intro_Git_Copilot.png",
            title: "GitHub Copilot",
            description: "Mastering AI-powered code completion with GitHub Copilot.",
            category: "tools"
        },
        {
            imgSrc: "./img/Certifications/Intro_Digital_Marketing.png",
            title: "Digital Marketing Fundamentals",
            description: "Introduction to digital marketing strategies and tools.",
            category: "tools"
        },
        {
            imgSrc: "./img/Certifications/Flutter for Beginners.png",
            title: "Flutter Framework Basics",
            description: "Getting started with Flutter mobile development.",
            category: "programming"
        },
        {
            imgSrc: "./img/Certifications/ChatGPT for Coders.png",
            title: "Programming with ChatGPT",
            description: "Leveraging AI for efficient coding practices.",
            category: "tools"
        },
        {
            imgSrc: "./img/Certifications/Basic_Java.png",
            title: "Java Programming Fundamentals",
            description: "Core concepts of Java programming language.",
            category: "programming"
        },
        {
            imgSrc: "./img/Certifications/Android_Application_Development.png",
            title: "Android App Development",
            description: "Building mobile applications for Android platform.",
            category: "programming"
        },
        {
            imgSrc: "./img/Certifications/AI_&_IOT.png",
            title: "AI and IoT Integration",
            description: "Implementing AI in IoT applications.",
            category: "tools"
        },
        {
            imgSrc: "./img/Certifications/AI and Python.png",
            title: "AI with Python",
            description: "Python programming for artificial intelligence.",
            category: "programming"
        },
        {
            imgSrc: "./img/Certifications/python_for_Data_Science.png",
            title: "Python for Data Science",
            description: "Data analysis and manipulation using Python.",
            category: "programming"
        }
    ];

    const certGrid = document.querySelector('.cert-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.querySelector('.cert-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Reset mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Create and display certificate cards with staggered animation
    function displayCertificates(filter = 'all') {
        certGrid.innerHTML = '';
        certificates.forEach((cert, index) => {
            if (filter === 'all' || cert.category === filter) {
                const certCard = document.createElement('div');
                certCard.className = 'cert-card';
                certCard.style.animationDelay = `${index * 0.1}s`;
                certCard.innerHTML = `
                    <img src="${cert.imgSrc}" alt="${cert.title}" class="cert-image">
                    <div class="cert-info">
                        <h3 class="cert-title">${cert.title}</h3>
                        <p class="cert-description">${cert.description}</p>
                    </div>
                `;
                certGrid.appendChild(certCard);

                // Add click event for modal
                certCard.addEventListener('click', () => {
                    document.querySelector('.modal-image').src = cert.imgSrc;
                    document.querySelector('.modal-title').textContent = cert.title;
                    document.querySelector('.modal-description').textContent = cert.description;
                    document.querySelector('.download-btn').href = cert.imgSrc;
                    modal.classList.add('active');
                });
            }
        });
    }

    // Filter buttons click handlers
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayCertificates(btn.dataset.filter);
        });
    });

    // Modal close handlers
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modalOverlay.addEventListener('click', () => modal.classList.remove('active'));

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

    // Initial display
    displayCertificates();
}); 