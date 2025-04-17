// Initialize loading state
let loadingIndicator = document.getElementById('loading-indicator');
if (loadingIndicator) {
    loadingIndicator.classList.add('active');
    document.body.classList.add('loading');
}

document.addEventListener('DOMContentLoaded', () => {
    // Remove loading state after content is loaded
    document.body.classList.remove('loading');
    if (loadingIndicator) {
        loadingIndicator.classList.remove('active');
    }

    // YouTube Data
    const youtubeData = {
        videos: [
            { id: "5YdWcMRMQag", title: "🔥 How to Install MinGW & Set Up C++ in 2024 ✅ Complete C++ Environment Setup + VS Code 💻", date: "2025-02-20" },
            { id: "5FY0ifeSeuk", title: "🔥 Install & Activate Office 2021 for FREE | 100% Working | Windows 10/11 🚀💻", date: "2025-02-19" },
            { id: "Fq-K8veA3lA", title: "🚀 How to Download & Install Jupyter Notebook ✅ | Full Step-by-Step Guide (Windows) 🖥️", date: "2025-02-18" },
            { id: "iR4PcZBkFak", title: "MSBTE Android Studio Practical No. 16 | DatePicker & TimePicker Dialog | Java + XML | Source Code", date: "2025-04-10" },
            { id: "Sb5nVMUbNMg", title: "✅ Custom Toast Alert in Android Studio | Practical No. 15 | Java | MSBTE Android App Development", date: "2025-03-27" },
            { id: "D0LJcQ6PZfc", title: "MSBTE Practical No. 14 – ListView, GridView, ImageView & ScrollView in Android Studio (Java + XML)", date: "2025-03-22" },
            { id: "KRHrmB8mJYg", title: "🔥 Android ProgressBar Implementation | Practical No. 13 🚀 | Android Studio Tutorial", date: "2025-03-18" },
            { id: "1L1a_jR1-H8", title: "Implementation of RadioGroups and RadioButtons in Android | Practical No. 12", date: "2025-03-14" },
            { id: "1VfAScE_R50", title: "MSBTE MAD Practical 11 | Implement Checkbox in Android Studio | Source Code & Output", date: "2025-03-10" },
            { id: "o2V7W9Ye3qo", title: "🧑‍💻 MSBTE Practical 10: Create a Login Window using TextView, EditText, and Button| CyberTechX|MSBTE", date: "2025-02-15" },
            { id: "-Uw9dBHJ37A", title: "🛠️Practical No. 9 | Button,ImageButton & ToggleButton Implementation 🚀 | MSBTE Playlist | CyberTechX", date: "2025-02-20" },
            { id: "G-MEdtWIF_w", title: "🛠️ Practical 8: Implementing AutoCompleteTextView in Android Studio using Java and XML 🚀", date: "2025-02-25" },
            { id: "zeBNnhSL-r8", title: "🚀 MSBTE MAD Practical 7: 📱 EditText & TextView Implementation | Android Studio Tutorial", date: "2025-03-01" },
            { id: "liH9v_aVtNw", title: "Frame Layout, Table Layout, and Relative Layout in Android Studio | Practical No. 6 Tutorial", date: "2025-03-05" },
            { id: "yrI-LYMQAKE", title: "Linear & Absolute Layout Implementation | MSBTE Mobile App Development Practical 5 | Android Studio", date: "2025-03-10" },
            { id: "8YkYJRdYZTM", title: "🔥 MSBTE Diploma Practical No. 4 | Create a Hello World App in Android Studio (Java & XML)", date: "2025-03-12" },
            { id: "FBOd7xsbCUc", title: "Hackers' Secret Windows Commands REVEALED! | Become a Windows Pro with These Tricks", date: "2025-03-15" },
            { id: "S8rC6iNGvvI", title: "🔥 MSBTE Practical 2: Full Android Setup | JDK + SDK Installation Step-by-Step 🚀", date: "2025-03-17" },
            { id: "S_tT3WLLcEs", title: "📱 Android vs Other OS: Why Android? 🤔 | Mobile App Development Series (MSBTE Diploma) 🎓", date: "2025-03-18" },
            { id: "LkhbS26NzRg", title: "How Hackers Secure Files: OpenSSL AES-256 + Bash Scripting", date: "2025-03-19" },
            { id: "yDQJnQDTXQk", title: "How do Hackers Spy on Android🚨 REAL Android Hacking Demo | ⚡ Cybersecurity Awareness 🔥📱", date: "2025-03-20" },
            { id: "nIVIbsznYXA", title: "Ventoy Multibootable🚀 Run Windows, Linux & More from ONE USB Drive! 🔥(Boot Multiple OS with Ventoy)🦹", date: "2025-03-21" },
            { id: "0dENGYgkbaQ", title: "📱 🔍 PhoneInfoga EXPOSED! | Get Info from Only Mobile Number 📲 [Live Demo]🛡️", date: "2025-03-22" },
            { id: "8HelHaAkAmc", title: "🔥 CamFish Ethical Hacking Tool – LIVE Camera Access via Phishing! 🎯 (For Educational Use Only)...🤫🤫🤩", date: "2025-03-16" },
            { id: "AdJEkzBPV1Q", title: "🖥️ Installing Kali Linux in Virtual Machine ⚡ Using ISO Image File 📂 | Complete Setup Guide ✅", date: "2025-03-14" },
            { id: "PIrmOKDw-eU", title: "🎯⚡ \"STOP Everything! You NEED to See Kali Linux 2024.4's New Features!\" 🚀🚀🔥", date: "2025-03-13" },
            { id: "YFLnbdX5Kg0", title: "🖥️💀 Turn Your USB into a Portable Hacking Machine! (Kali Linux Live + Persistence) 🚀", date: "2025-03-11" },
            { id: "PR_0nkFlJ8w", title: "Free Free 💻 Host Your Static Website for FREE on GitHub Pages 🌐 | Step-by-Step Guide + Error Fixes ✅", date: "2025-03-09" },
            { id: "Nz85OUgH5zc", title: "🤩🤫 Android Studio Setup 🤖✨🤩🚀 No Cost! Build Your Own App! 🔥 | Live Demo 📱 on Mobile 🤖✨", date: "2025-03-07" },
            { id: "Jdc6GEMAdiA", title: "Part-2✅ \"Kali Linux Commands for Beginners 🔥 Learn File Management, Networking & Hacking Tools 🚀\"", date: "2025-03-04" },
            { id: "ywoR-nNwWsI", title: "🔥 \"Kali Linux Setup in Oracle VirtualBox for FREE! 🚀 Easiest Guide for Beginners 🎯\"", date: "2025-03-02" },
            { id: "2Xi0kwbqitA", title: "Part:1 🚀 Master Linux Basics in Minutes! 🔥 File Navigation & Management Commands | CyberTechX", date: "2025-02-28" },
            { id: "O33OpaYARQo", title: "Free Free Free🔥 Host a Website on Firebase for FREE in 2025 | Step-by-Step Guide with Live Demo", date: "2025-02-26" },
            { id: "-xvuJMuncsA", title: "🚀 Install & Run Ubuntu on VMware Workstation | Boot from ISO + Fun Terminal Commands! 🖥️🐧", date: "2025-02-24" },
            { id: "tEVqxz_tvCc", title: "🔥 Kali Linux Installation on VMware Workstation | Step-by-Step Guide for Beginners", date: "2025-02-22" },
            { id: "t1uUmfUSh-4", title: "How to Set JDK Path in Windows | Step-by-Step Guide for Beginners", date: "2025-02-21" }
        ]
    };

    // Initialize YouTube Section
    const videoGrid = document.querySelector('.video-grid');
    if (!videoGrid) {
        console.error('Video grid container not found');
        return;
    }

    // Clear existing content
    videoGrid.innerHTML = '';

    // Create video items
    youtubeData.videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        
        videoItem.innerHTML = `
            <div class="video-thumbnail">
                <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${video.title}">
                <div class="video-play-icon">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <div class="video-meta">
                    <span class="video-date">
                        <i class="far fa-calendar"></i>
                        ${new Date(video.date).toLocaleDateString()}
                    </span>
                </div>
            </div>
        `;

        // Add click event to open video
        videoItem.addEventListener('click', () => {
            window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
        });

        videoGrid.appendChild(videoItem);
    });

    // Hide loading indicator after page load
    window.addEventListener('load', () => {
        if (loadingIndicator) {
            loadingIndicator.classList.add('hidden');
            setTimeout(() => {
                loadingIndicator.style.display = 'none';
            }, 500);
        }
    });

    // Show loading indicator for 2 seconds minimum
    setTimeout(() => {
        if (loadingIndicator) {
            loadingIndicator.classList.add('hidden');
            setTimeout(() => {
                loadingIndicator.style.display = 'none';
            }, 500);
        }
    }, 2000);

    // YouTube Data Structure
    const youtubeDataStructure = {
        channel: {
            name: "CyberTechX",
            url: "https://youtube.com/@cybertechx_ravin?si=QFyTKEv4OMbrqLlh",
            subscribeUrl: "https://youtube.com/@cybertechx_ravin?si=QFyTKEv4OMbrqLlh"
        },
        videos: [
            {
                id: "5YdWcMRMQag",
                title: "🔥 How to Install MinGW & Set Up C++ in 2024 ✅ Complete C++ Environment Setup + VS Code 💻",
                description: "Learn how to set up a complete C++ development environment with MinGW and VS Code in 2024.",
                date: "2025-02-20",
                views: "1.2K"
            },
            {
                id: "5FY0ifeSeuk",
                title: "🔥 Install & Activate Office 2021 for FREE | 100% Working | Windows 10/11 🚀💻",
                description: "Step-by-step guide to install and activate Microsoft Office 2021 for free on Windows 10/11.",
                date: "2025-02-19",
                views: "2.5K"
            },
            {
                id: "Fq-K8veA3lA",
                title: "🚀 How to Download & Install Jupyter Notebook ✅ | Full Step-by-Step Guide (Windows) 🖥️",
                description: "Complete guide to installing and setting up Jupyter Notebook on Windows.",
                date: "2025-02-18",
                views: "3.1K"
            },
            {
                id: "iR4PcZBkFak",
                title: "MSBTE Android Studio Practical No. 16 | DatePicker & TimePicker Dialog | Java + XML | Source Code",
                description: "Learn how to implement DatePicker and TimePicker dialogs in Android Studio.",
                date: "2025-04-10",
                views: "1.8K"
            },
            {
                id: "Sb5nVMUbNMg",
                title: "✅ Custom Toast Alert in Android Studio | Practical No. 15 | Java | MSBTE Android App Development",
                description: "Create custom toast alerts in Android Studio with Java.",
                date: "2025-03-27",
                views: "2.1K"
            }
        ]
    };

    // Helper Functions
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function createVideoElement(video) {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-item';

        videoElement.innerHTML = `
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${video.id}?rel=0&showinfo=0&autoplay=0" 
                    allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    title="${video.title}"
                    width="100%"
                    height="100%"
                    style="opacity: 1; visibility: visible; display: block; min-height: 200px;"
                ></iframe>
            </div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-date">${formatDate(video.date)}</div>
            </div>
        `;

        return videoElement;
    }

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

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;

    // Toggle mobile menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            isMenuOpen = false;
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            isMenuOpen = false;
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Update navbar on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('scrolled');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scrolled')) {
            // Scrolling down
            navbar.classList.add('scrolled');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scrolled')) {
            // Scrolling up
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
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
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', setActiveLink);

    // Initial active link check
    setActiveLink();

    // Initialize EmailJS
    (function() {
        emailjs.init("s5qh1KRxDGnmeh1lb"); // You'll need to replace this with your actual EmailJS user ID
    })();

    // Contact Form Handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Get form data
            const formData = {
                from_name: contactForm.querySelector('[name="name"]').value,
                from_email: contactForm.querySelector('[name="email"]').value,
                subject: contactForm.querySelector('[name="subject"]').value,
                message: contactForm.querySelector('[name="message"]').value
            };

            // Validate form data
            if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
                showToast('Please fill in all fields', 'error');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                return;
            }

            // Send email using EmailJS
            emailjs.send("service_pt9ab9e", "template_8nkgrjh", formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showToast('Message sent successfully!', 'success');
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    showToast('Failed to send message. Please try again.', 'error');
                })
                .finally(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                });
        });
    }

    // Toast notification function
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Add animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

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

    // Error handling for failed resource loading
    window.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.src = './img/placeholder.jpg';
            e.target.classList.add('error');
        }
    }, true);

    // Handle offline/online state
    window.addEventListener('offline', () => {
        showToast('You are currently offline. Some features may be limited.', 'info');
    });

    window.addEventListener('online', () => {
        showToast('You are back online!', 'success');
    });
}); 