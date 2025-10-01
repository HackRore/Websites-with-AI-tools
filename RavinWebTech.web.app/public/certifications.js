/*==========================================================================================
    Author: Ravindra Pandit Ahire
    Portfolio: https://ravinwebtech.web.app
    Github: https://github.com/HackRore
    LinkedIn: https://www.linkedin.com/in/ravindra-ahire-a43902296/
============================================================================================*/

document.addEventListener('DOMContentLoaded', () => {

    //---------------------------------
    //      BUBBLE EFFECT
    //---------------------------------
    const canvas = document.getElementById('bubble-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let bubbles = [];

    class Bubble {
        constructor(x, y, radius, dx, dy) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.dx = dx;
            this.dy = dy;
            this.color = `rgba(0, 198, 255, ${Math.random()})`;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }

            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }

    function init() {
        bubbles = [];
        for (let i = 0; i < 50; i++) {
            const radius = Math.random() * 10 + 5;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const dx = (Math.random() - 0.5) * 2;
            const dy = (Math.random() - 0.5) * 2;
            bubbles.push(new Bubble(x, y, radius, dx, dy));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        bubbles.forEach(bubble => {
            bubble.update();
        });
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    //---------------------------------
    //      RESPONSIVE NAVBAR
    //---------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    function handleNav() {
        const navWidth = navLinks.offsetWidth;
        let totalWidth = 0;
        const navItems = Array.from(navLinks.children);
        let hiddenItems = [];

        // Reset display for all items to measure accurately
        navItems.forEach(item => {
            item.style.display = 'list-item';
        });

        // Temporarily hide dropdown to measure other items
        if (dropdown) dropdown.style.display = 'none';

        // Calculate total width of visible items
        for (let i = 0; i < navItems.length; i++) {
            const item = navItems[i];
            if (item === dropdown) continue; // Skip dropdown itself
            totalWidth += item.offsetWidth;
        }

        // Check if items need to be moved to dropdown
        if (totalWidth > navWidth) {
            if (dropdown) dropdown.style.display = 'list-item';
            dropdownMenu.innerHTML = ''; // Clear previous items
            let currentTotalWidth = 0;
            let itemsToKeep = [];

            // Determine which items to keep visible and which to hide
            for (let i = 0; i < navItems.length; i++) {
                const item = navItems[i];
                if (item === dropdown) continue;

                if (currentTotalWidth + item.offsetWidth + (dropdown ? dropdown.offsetWidth : 0) > navWidth) {
                    hiddenItems.push(item);
                    item.style.display = 'none';
                } else {
                    itemsToKeep.push(item);
                    currentTotalWidth += item.offsetWidth;
                }
            }

            // Add hidden items to dropdown menu
            hiddenItems.forEach(item => {
                const clone = item.cloneNode(true);
                dropdownMenu.appendChild(clone);
            });
        } else {
            if (dropdown) dropdown.style.display = 'none';
        }
    }

    // Debounce resize handler
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleNav, 100);
    });

    // Initial check after a short delay to ensure rendering
    setTimeout(handleNav, 100);

    //---------------------------------
    //      CERTIFICATIONS
    //---------------------------------
    const certGrid = document.querySelector('.cert-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    const certifications = [
        { imgSrc: "./img/Certifications/Kali Linux.png", title: "Introduction to Kali Linux Basics", category: "cybersecurity" },
        { imgSrc: "./img/Certifications/Intro Cyber Security.png", title: "Introduction to Cyber Security Essentials", category: "cybersecurity" },
        { imgSrc: "./img/Certifications/Cyber Security National Seminar.png", title: "National Level Seminar on Cyber Security and Data Privacy", category: "cybersecurity" },
        { imgSrc: "./img/Certifications/Linux_Tutorial.png", title: "Working with Linux (Ubuntu) Operating System", category: "tools" },
        { imgSrc: "./img/Certifications/Java_DSA_Intermediate.png", title: "Java DSA Intermediate", category: "programming" },
        { imgSrc: "./img/Certifications/Java_DSA_Beginers.png", title: "Basic Java Data Structures", category: "programming" },
        { imgSrc: "./img/Certifications/IOT.png", title: "IoT Components and Applications", category: "tools" },
        { imgSrc: "./img/Certifications/Intro_Git_Copilot.png", title: "GitHub Copilot", category: "tools" },
        { imgSrc: "./img/Certifications/Intro_Digital_Marketing.png", title: "Digital Marketing Fundamentals", category: "tools" },
        { imgSrc: "./img/Certifications/Flutter for Beginners.png", title: "Flutter Framework Basics", category: "programming" },
        { imgSrc: "./img/Certifications/ChatGPT for Coders.png", title: "Programming with ChatGPT", category: "tools" },
        { imgSrc: "./img/Certifications/Basic_Java.png", title: "Java Programming Fundamentals", category: "programming" },
        { imgSrc: "./img/Certifications/Android_Application_Development.png", title: "Android App Development", category: "programming" },
        { imgSrc: "./img/Certifications/AI_&_IOT.png", title: "AI and IoT Integration", category: "tools" },
        { imgSrc: "./img/Certifications/AI and Python.png", title: "AI with Python", category: "programming" },
        { imgSrc: "./img/Certifications/python_for_Data_Science.png", title: "Python for Data Science", category: "programming" }
    ];

    if (certGrid) {
        certifications.forEach(cert => {
            const certCard = document.createElement('div');
            certCard.className = 'cert-card';
            certCard.innerHTML = `
                <img src="${cert.imgSrc}" alt="${cert.title}" class="cert-image">
                <div class="cert-info">
                    <h3 class="cert-title">${cert.title}</h3>
                </div>
            `;
            certGrid.appendChild(certCard);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayCerts(btn.dataset.filter);
        });
    });

    function displayCerts(filter = 'all') {
        certGrid.innerHTML = '';
        const filteredCerts = certifications.filter(cert => filter === 'all' || cert.category === filter);

        filteredCerts.forEach(cert => {
            const certCard = document.createElement('div');
            certCard.className = 'cert-card';
            certCard.innerHTML = `
                <img src="${cert.imgSrc}" alt="${cert.title}" class="cert-image">
                <div class="cert-info">
                    <h3 class="cert-title">${cert.title}</h3>
                </div>
            `;
            certGrid.appendChild(certCard);
        });
    }

    //---------------------------------
    //      HEADER SCROLL EFFECT
    //---------------------------------
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});