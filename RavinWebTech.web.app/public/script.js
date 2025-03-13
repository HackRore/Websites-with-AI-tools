document.addEventListener('DOMContentLoaded', () => {
    // YouTube videos data
    const videos = [
        {id: "S_tT3WLLcEs", title: "Compare Android with Different Opearating System"},
        { id: "LkhbS26NzRg", title: "AES-256 Encryption technique using OpenSSL with automation" },
        { id: "O33OpaYARQo", title: "Free Host a Website on Firebase for FREE in 2025" },
        { id: "5FY0ifeSeuk", title: "Install & Activate Office 2021 for FREE" },
        { id: "tEVqxz_tvCc", title: "Kali Linux Installation Guide" },
        { id: "Fq-K8veA3lA", title: "How to Download & Install Jupyter Notebook" },
        { id: "5YdWcMRMQag", title: "How to Download & Install Jupyter Notebook" },
        { id: "-xvuJMuncsA", title: "Install & Run Ubuntu on VMware Workstation" },
        { id: "t1uUmfUSh-4", title: "How to Set JDK Path in Windows" },
        { id: "Jdc6GEMAdiA", title: "MinGW & C++ Setup in 2024 with VS Code" },
        { id: "2Xi0kwbqitA", title: "Kali linux cammands part 1" },
        { id: "ywoR-nNwWsI", title: "Kali Linux Setup in Oracle VB" },
        { id: "Nz85OUgH5zc", title: "Android Studio Setup" },
        { id: "PR_0nkFlJ8w", title: "Host Website on GitHub Page" },
        { id: "PIrmOKDw-eU", title: "Kali 2024.4 latest updetes tutorial" },
        { id: "0dENGYgkbaQ", title: "PhoneInfoga Tool Tutorial" },
        { id: "8HelHaAkAmc", title: "CamPhish Tool Tutorial" },
        { id: "AdJEkzBPV1Q", title: "kali ISO boot in VirtualBox" },
        { id: "YFLnbdX5Kg0", title: "Make USB pendrive Hacking Machine" },
        { id: "nIVIbsznYXA", title: "Ventoy Multiboot PenDrive" },
        { id: "yDQJnQDTXQk", title: "Android Payload Demonstration" }

    ];

    // Certificates data with categories
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

    // Initialize video carousel
    const carouselTrack = document.querySelector('.carousel-track');
    let currentIndex = 0;

    // Create video elements
    videos.forEach(video => {
        const videoItem = createVideoItem(video);
        carouselTrack.appendChild(videoItem);
    });

    // Carousel Navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function updateCarousel() {
        const slideWidth = document.querySelector('.video-item').offsetWidth;
        carouselTrack.style.transform = `translateX(-${currentIndex * (slideWidth + 16)}px)`; // 16px is the gap
        
        // Update button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex === videos.length - 1 ? '0.5' : '1';
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < videos.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initial carousel setup
    updateCarousel();

    // Update carousel on window resize
    window.addEventListener('resize', updateCarousel);

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;

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

    // Active link handling
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href').includes(sectionId)) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId === '#home') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                // Close mobile menu after clicking
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', setActiveLink);
    
    // Initial active link check
    setActiveLink();

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Add animation to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        observer.observe(section);
    });

    const certGrid = document.querySelector('.cert-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.querySelector('.cert-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Create and display certificate cards
    function displayCertificates(filter = 'all') {
        certGrid.innerHTML = '';
        certificates.forEach(cert => {
            if (filter === 'all' || cert.category === filter) {
                const certCard = document.createElement('div');
                certCard.className = 'cert-card';
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

    // Initial display
    displayCertificates();

    // Section Title Visibility Detection
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkTitleVisibility() {
        const titles = document.querySelectorAll('.section-title');
        titles.forEach(title => {
            if (isElementInViewport(title)) {
                title.classList.add('visible');
            }
        });
    }

    // Check title visibility on scroll
    document.addEventListener('scroll', checkTitleVisibility);
    // Initial check for titles in viewport
    checkTitleVisibility();

    // Update the createVideoItem function
    function createVideoItem(video) {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <iframe
                src="https://www.youtube.com/embed/${video.id}"
                title="${video.title}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <h3 class="video-title">${video.title}</h3>
        `;

        // Add click event to display resources when video is selected
        videoItem.addEventListener('click', () => {
            // Update active video styling
            document.querySelectorAll('.video-item').forEach(item => item.classList.remove('active'));
            videoItem.classList.add('active');
            
            // Display resources for the selected video
            window.videoResources.displayResources(video.id);
        });

        return videoItem;
    }
}); 