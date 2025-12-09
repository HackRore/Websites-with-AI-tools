/*==========================================================================================
    Author: Ravindra Pandit Ahire
    Portfolio: https://ravinwebtech.web.app
    Github: https://github.com/HackRore
    LinkedIn: https://www.linkedin.com/in/ravindra-ahire-a43902296/
    Enhanced Certifications Page
============================================================================================*/

document.addEventListener('DOMContentLoaded', () => {

    //---------------------------------
    //      CERTIFICATIONS DATA
    //---------------------------------
    const certifications = [
        {
            id: 1,
            imgSrc: "./img/Certifications/Kali Linux.png",
            title: "Introduction to Kali Linux Basics",
            description: "Mastered the fundamentals of Kali Linux, a powerful penetration testing platform used in cybersecurity.",
            category: "cybersecurity",
            issuer: "Cybersecurity Institute",
            date: "2024"
        },
        {
            id: 2,
            imgSrc: "./img/Certifications/Intro Cyber Security.png",
            title: "Introduction to Cyber Security Essentials",
            description: "Comprehensive introduction to cybersecurity principles, threats, and defense mechanisms.",
            category: "cybersecurity",
            issuer: "Security Academy",
            date: "2024"
        },
        {
            id: 3,
            imgSrc: "./img/Certifications/Cyber Security National Seminar.png",
            title: "National Level Seminar on Cyber Security and Data Privacy",
            description: "Participated in a prestigious national seminar covering advanced cybersecurity and data privacy topics.",
            category: "cybersecurity",
            issuer: "National Level",
            date: "2024"
        },
        {
            id: 4,
            imgSrc: "./img/Certifications/Linux_Tutorial.png",
            title: "Working with Linux (Ubuntu) Operating System",
            description: "Advanced knowledge of Linux and Ubuntu OS, including system administration and command-line proficiency.",
            category: "tools",
            issuer: "Linux Academy",
            date: "2024"
        },
        {
            id: 5,
            imgSrc: "./img/Certifications/Java_DSA_Intermediate.png",
            title: "Java DSA Intermediate",
            description: "Intermediate level Data Structures and Algorithms using Java programming language.",
            category: "programming",
            issuer: "Programming Institute",
            date: "2024"
        },
        {
            id: 6,
            imgSrc: "./img/Certifications/Java_DSA_Beginers.png",
            title: "Basic Java Data Structures",
            description: "Foundational knowledge of data structures and algorithms implemented in Java.",
            category: "programming",
            issuer: "Programming Institute",
            date: "2023"
        },
        {
            id: 7,
            imgSrc: "./img/Certifications/IOT.png",
            title: "IoT Components and Applications",
            description: "Comprehensive understanding of Internet of Things components, frameworks, and real-world applications.",
            category: "tools",
            issuer: "IoT Academy",
            date: "2024"
        },
        {
            id: 8,
            imgSrc: "./img/Certifications/Intro_Git_Copilot.png",
            title: "GitHub Copilot",
            description: "Proficiency with GitHub Copilot, an AI-powered coding assistant for enhanced development productivity.",
            category: "tools",
            issuer: "GitHub Academy",
            date: "2024"
        },
        {
            id: 9,
            imgSrc: "./img/Certifications/Intro_Digital_Marketing.png",
            title: "Digital Marketing Fundamentals",
            description: "Expertise in digital marketing strategies, social media marketing, and online brand management.",
            category: "tools",
            issuer: "Marketing Institute",
            date: "2024"
        },
        {
            id: 10,
            imgSrc: "./img/Certifications/Flutter for Beginners.png",
            title: "Flutter Framework Basics",
            description: "Introduction to Flutter framework for building cross-platform mobile applications using Dart.",
            category: "programming",
            issuer: "Mobile Development Academy",
            date: "2024"
        },
        {
            id: 11,
            imgSrc: "./img/Certifications/ChatGPT for Coders.png",
            title: "Programming with ChatGPT",
            description: "Advanced usage of ChatGPT for code generation, debugging, and improving development workflows.",
            category: "tools",
            issuer: "AI Academy",
            date: "2024"
        },
        {
            id: 12,
            imgSrc: "./img/Certifications/Basic_Java.png",
            title: "Java Programming Fundamentals",
            description: "Strong foundation in Java programming including OOP concepts and standard libraries.",
            category: "programming",
            issuer: "Java Academy",
            date: "2023"
        },
        {
            id: 13,
            imgSrc: "./img/Certifications/Android_Application_Development.png",
            title: "Android App Development",
            description: "Complete mastery of Android application development using Java and Android Studio.",
            category: "programming",
            issuer: "Mobile Development Academy",
            date: "2024"
        },
        {
            id: 14,
            imgSrc: "./img/Certifications/AI_&_IOT.png",
            title: "AI and IoT Integration",
            description: "Integration of Artificial Intelligence with Internet of Things for intelligent device applications.",
            category: "tools",
            issuer: "AI & IoT Institute",
            date: "2024"
        },
        {
            id: 15,
            imgSrc: "./img/Certifications/AI and Python.png",
            title: "AI with Python",
            description: "Deep learning and machine learning using Python, TensorFlow, and Keras frameworks.",
            category: "programming",
            issuer: "AI Academy",
            date: "2024"
        },
        {
            id: 16,
            imgSrc: "./img/Certifications/python_for_Data_Science.png",
            title: "Python for Data Science",
            description: "Advanced Python programming for data analysis, visualization, and predictive modeling.",
            category: "programming",
            issuer: "Data Science Academy",
            date: "2024"
        }
    ];

    //---------------------------------
    //      DOM ELEMENTS
    //---------------------------------
    const certGrid = document.getElementById('certGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const certModal = document.getElementById('certModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalCategory = document.getElementById('modalCategory');
    const downloadBtn = document.getElementById('downloadBtn');
    const shareBtn = document.getElementById('shareBtn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const noResults = document.querySelector('.no-results');

    //---------------------------------
    //      RENDER CERTIFICATES
    //---------------------------------
    function renderCertificates(certs) {
        certGrid.innerHTML = '';

        if (certs.length === 0) {
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';

        certs.forEach((cert, index) => {
            const certCard = document.createElement('div');
            certCard.className = 'cert-card';
            certCard.style.animationDelay = `${index * 0.1}s`;
            certCard.innerHTML = `
                <img src="${cert.imgSrc}" alt="${cert.title}" class="cert-image" loading="lazy">
                <div class="cert-info">
                    <h3 class="cert-title">${cert.title}</h3>
                    <p class="cert-description">${cert.description}</p>
                    <span class="cert-badge ${cert.category}">${capitalizeFirst(cert.category)}</span>
                </div>
            `;

            certCard.addEventListener('click', () => openModal(cert));
            certGrid.appendChild(certCard);
        });
    }

    //---------------------------------
    //      FILTER FUNCTIONALITY
    //---------------------------------
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const filtered = filter === 'all'
                ? certifications
                : certifications.filter(cert => cert.category === filter);

            renderCertificates(filtered);
        });
    });

    //---------------------------------
    //      MODAL FUNCTIONS
    //---------------------------------
    function openModal(cert) {
        modalImage.src = cert.imgSrc;
        modalImage.alt = cert.title;
        modalTitle.textContent = cert.title;
        modalDescription.textContent = cert.description;
        modalCategory.textContent = capitalizeFirst(cert.category);
        modalCategory.className = `category-badge ${cert.category}`;

        downloadBtn.onclick = () => downloadCertificate(cert);
        shareBtn.onclick = () => shareCertificate(cert);

        certModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        certModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    //---------------------------------
    //      DOWNLOAD CERTIFICATE
    //---------------------------------
    function downloadCertificate(cert) {
        const link = document.createElement('a');
        link.href = cert.imgSrc;
        link.download = `${cert.title}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showNotification('Certificate downloaded successfully!');
    }

    //---------------------------------
    //      SHARE CERTIFICATE
    //---------------------------------
    function shareCertificate(cert) {
        const shareText = `Check out my "${cert.title}" certification! Earned in ${cert.date}. Visit my portfolio: https://ravinwebtech.web.app`;

        if (navigator.share) {
            navigator.share({
                title: cert.title,
                text: shareText,
                url: window.location.href
            }).catch(err => console.log('Error sharing:', err));
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                showNotification('Shared text copied to clipboard!');
            }).catch(err => console.error('Copy failed:', err));
        }
    }

    //---------------------------------
    //      NOTIFICATION
    //---------------------------------
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #2a2a72, #009ffd);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            z-index: 9999;
            animation: slideInDown 0.3s ease-out;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutUp 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    //---------------------------------
    //      HELPER FUNCTIONS
    //---------------------------------
    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    //---------------------------------
    //      RESPONSIVE NAVBAR
    //---------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    //---------------------------------
    //      INITIAL RENDER
    //---------------------------------
    renderCertificates(certifications);

    //---------------------------------
    //      LAZY LOADING IMAGES
    //---------------------------------
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }

    //---------------------------------
    //      SCROLL ANIMATIONS
    //---------------------------------
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.cert-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    //---------------------------------
    //      SEARCH FUNCTIONALITY (Optional Enhancement)
    //---------------------------------
    function searchCertificates(query) {
        const filtered = certifications.filter(cert =>
            cert.title.toLowerCase().includes(query.toLowerCase()) ||
            cert.description.toLowerCase().includes(query.toLowerCase())
        );
        renderCertificates(filtered);
    }

    // Make search accessible globally if needed
    window.searchCerts = searchCertificates;

    //---------------------------------
    //      KEYBOARD NAVIGATION
    //---------------------------------
    document.addEventListener('keydown', (e) => {
        if (certModal.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
        }
    });

});

// CSS Animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOutUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);