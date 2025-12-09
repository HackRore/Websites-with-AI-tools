/*==========================================================================================
    Author: Ravindra Pandit Ahire
    Portfolio: https://ravinwebtech.web.app
    Github: https://github.com/HackRore
    LinkedIn: https://www.linkedin.com/in/ravindra-ahire-a43902296/
============================================================================================*/

document.addEventListener('DOMContentLoaded', () => {

    //---------------------------------
    //      BUBBLE EFFECT (optional)
    //---------------------------------
    // Only initialize the bubble canvas if it exists on the page.
    const canvas = document.getElementById('bubble-canvas');
    if (canvas && canvas.getContext) {
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
    }

    //---------------------------------
    //      RESPONSIVE NAVBAR
    //---------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

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
    if (typeof handleNav === 'function') setTimeout(() => { if (navLinks) handleNav(); }, 100);

    //---------------------------------
    //      SKILLS SECTION
    //---------------------------------
    const skillsGrid = document.querySelector('.skills-grid');
    const skills = [
        { name: 'IT Hardware', icon: 'fas fa-desktop', description: 'Installation, troubleshooting, and repair of desktops, laptops, and peripherals.' },
        { name: 'Networking', icon: 'fas fa-network-wired', description: 'Cabling, configuration, and troubleshooting of network infrastructure.' },
        { name: 'Android Dev', icon: 'fab fa-android', description: 'Java and XML based native Android application development.' },
        { name: 'Web Design', icon: 'fas fa-code', description: 'Responsive UI/UX design with HTML, CSS, and JavaScript.' },
        { name: 'Cloud Computing', icon: 'fab fa-aws', description: 'Experience with AWS services like IAM, EC2, and S3.' },
        { name: 'Version Control', icon: 'fab fa-github', description: 'Proficient in Git and GitHub for version control and collaboration.' },
        { name: 'Content Creation', icon: 'fab fa-youtube', description: 'Creating engaging and informative content for YouTube.' },
        { name: 'AI Integration', icon: 'fas fa-robot', description: 'Integrating AI tools and platforms to create intelligent solutions.' },
    ];

    if (skillsGrid) {
        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.innerHTML = `
                <i class="${skill.icon}"></i>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            `;
            skillsGrid.appendChild(skillCard);
        });
    }

    //---------------------------------
    //      WORK SECTION
    //---------------------------------
    const workGrid = document.querySelector('.work-grid');
    const works = [
        { imgSrc: 'https://via.placeholder.com/300x200', title: 'SNORT based Network Intrusion Detection System', description: 'A comprehensive Intrusion Detection System built on Snort, featuring real-time network traffic analysis, custom rule creation, and automated threat response capabilities.', link: '#' },
        { imgSrc: 'https://via.placeholder.com/300x200', title: 'Caesar Cipher Implementation', description: 'A Python program implementing the classic Caesar Cipher technique for message encryption and decryption with customizable shift keys.', link: '#' },
        { imgSrc: 'https://via.placeholder.com/300x200', title: 'Image Encryption Tool', description: 'A Python-based image encryption tool using pixel-level manipulation techniques for secure image transformation.', link: '#' },
    ];

    if (workGrid) {
        workGrid.innerHTML = '';
        works.forEach(work => {
            const workItem = document.createElement('div');
            workItem.className = 'work-item';
            workItem.innerHTML = `
                <img src="${work.imgSrc}" alt="${work.title}">
                <div class="work-item-content">
                    <h3>${work.title}</h3>
                    <p>${work.description}</p>
                    <a href="${work.link}" class="cta-button">View Project</a>
                </div>
            `;
            workGrid.appendChild(workItem);
        });
    }

    //---------------------------------
    //      CERTIFICATIONS SECTION
    //---------------------------------
    const certGrid = document.querySelector('.cert-grid');
    const certifications = [
        { imgSrc: './img/Certifications/Kali Linux.png', title: 'Introduction to Kali Linux Basics', category: 'cybersecurity' },
        { imgSrc: './img/Certifications/Intro Cyber Security.png', title: 'Introduction to Cyber Security Essentials', category: 'cybersecurity' },
        { imgSrc: './img/Certifications/Cyber Security National Seminar.png', title: 'National Level Seminar on Cyber Security and Data Privacy', category: 'cybersecurity' },
        { imgSrc: './img/Certifications/Linux_Tutorial.png', title: 'Working with Linux (Ubuntu) Operating System', category: 'tools' },
        { imgSrc: './img/Certifications/Java_DSA_Intermediate.png', title: 'Java DSA Intermediate', category: 'programming' },
        { imgSrc: './img/Certifications/Java_DSA_Beginers.png', title: 'Basic Java Data Structures', category: 'programming' },
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

    //---------------------------------
    //      HEADER SCROLL EFFECT
    //---------------------------------
    // Prefer .header, fallback to .navbar or <header>
    const header = document.querySelector('.header') || document.querySelector('.navbar') || document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    //---------------------------------
    //      AI ASSISTANT WIDGET
    //---------------------------------
    function createAIWidget() {
        // Build widget container
        const widget = document.createElement('div');
        widget.className = 'ai-widget';

        widget.innerHTML = `
            <button class="ai-fab" aria-label="Open AI Assistant" title="Ask AI"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.1 2 5 5.1 5 9c0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.9-3.1-7-7-7z" fill="white" opacity="0.12"/><path d="M12 6.5c.96 0 1.75.79 1.75 1.75S12.96 10 12 10s-1.75-.79-1.75-1.75S11.04 6.5 12 6.5z" fill="white"/><path d="M11 12h2v5h-2z" fill="white"/></svg></button>
            <div class="ai-panel" role="dialog" aria-modal="false" aria-hidden="true">
                <div class="ai-header">
                    <div>
                        <div class="ai-title">AI Portfolio Assistant</div>
                        <div class="ai-sub">Ask about projects, certificates, or site features</div>
                    </div>
                </div>
                <div class="ai-messages" aria-live="polite"></div>
                <div class="ai-quick">
                    <button data-q="Show my top projects">Top projects</button>
                    <button data-q="Show my certifications">My certificates</button>
                    <button data-q="How to contact you?">Contact info</button>
                </div>
                <form class="ai-input" action="#">
                    <input type="text" aria-label="Message to AI" placeholder="Ask me (e.g. 'show certificates')" />
                    <button class="ai-send" aria-label="Send">Ask</button>
                </form>
            </div>
        `;

        document.body.appendChild(widget);

        const fab = widget.querySelector('.ai-fab');
        const panel = widget.querySelector('.ai-panel');
        const messages = widget.querySelector('.ai-messages');
        const form = widget.querySelector('.ai-input');
        const input = form.querySelector('input');
        const quick = widget.querySelector('.ai-quick');

        function appendMessage(content, who='bot') {
            const m = document.createElement('div');
            m.className = 'msg ' + (who === 'user' ? 'user' : 'bot');
            m.textContent = content;
            messages.appendChild(m);
            messages.scrollTop = messages.scrollHeight;
        }

        function botReplyFor(text) {
            const t = text.toLowerCase();
            if (t.includes('cert')) {
                return 'I can show your certifications. Try visiting the Certificates page or say "download certificate" to simulate a download.';
            }
            if (t.includes('project') || t.includes('work') || t.includes('top')) {
                return 'Top projects: SNORT IDS, Image Encryption Tool, Brain Tumor Detection. Want links or a summary of one?';
            }
            if (t.includes('contact')) {
                return 'You can reach out via email: RavindraAhire897@gmail.com or visit the Contact section on this page.';
            }
            if (t.includes('ai') || t.includes('chatgpt') || t.includes('how')) {
                return 'This demo shows an AI assistant embedded in the site. For a production assistant we can connect to an LLM via secure server-side integration (OpenAI, Azure or self-hosted models).';
            }
            // default
            return 'Nice question — here is a short answer: this portfolio highlights cybersecurity, AI, and web development work. Ask me for specifics like "show certificates" or "top projects".';
        }

        function simulateResponse(text) {
            // show typing indicator
            const typing = document.createElement('div');
            typing.className = 'msg bot';
            typing.textContent = 'AI is typing…';
            messages.appendChild(typing);
            messages.scrollTop = messages.scrollHeight;

            setTimeout(() => {
                typing.remove();
                appendMessage(botReplyFor(text), 'bot');
            }, 700 + Math.min(2000, text.length * 30));
        }

        fab.addEventListener('click', () => {
            const open = panel.classList.toggle('open');
            panel.setAttribute('aria-hidden', !open);
            if (open) {
                // greet
                appendMessage('Hello! I am your on-site AI assistant. Ask me about projects, certificates, or site features.');
            }
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = input.value && input.value.trim();
            if (!val) return;
            appendMessage(val, 'user');
            input.value = '';
            simulateResponse(val);
        });

        quick.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const q = e.target.getAttribute('data-q');
                appendMessage(q, 'user');
                simulateResponse(q);
            }
        });
    }

    // Create widget once DOM is ready
    try { createAIWidget(); } catch (err) { console.warn('AI widget failed to initialize', err); }

});