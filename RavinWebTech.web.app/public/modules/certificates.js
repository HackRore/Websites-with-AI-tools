/**
 * Certificates Module - Rewritten for Stability
 * Handles fetching and rendering of certificates with error reporting.
 */

export async function mountCertificates(container) {
    console.log('Mounting Certificates Module...');

    if (!container) {
        console.error('Certificates container not found!');
        return;
    }

    // Show loading state
    container.innerHTML = '<div class="loading-spinner">Loading certificates...</div>';

    try {
        console.log('Fetching data from ./data/certifications.json');
        const response = await fetch('./data/certifications.json');

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data received:', data);

        if (!Array.isArray(data) || data.length === 0) {
            container.innerHTML = '<div class="error-msg">No certificates found in data source.</div>';
            return;
        }

        // Initialize Singleton Lightbox
        const lightbox = getValidationLightbox();

        // Render Function
        window.renderCertificatesValues = (filter = 'all') => {
            console.log(`Rendering filter: ${filter}`);

            const filtered = filter === 'all'
                ? data
                : data.filter(item => {
                    const cat = item.category || 'other';
                    return cat.toLowerCase() === filter.toLowerCase();
                });

            if (filtered.length === 0) {
                container.innerHTML = '<div class="empty-state">No certificates match this filter.</div>';
                return;
            }

            container.innerHTML = filtered.map(cert => createCertCard(cert)).join('');

            // Re-bind click events for this batch
            // Note: Efficient event delegation is better, but direct binding is safer for "from scratch" verification
            // to ensure no bubbling issues interfere.
            bindCardEvents(container, lightbox);
        };

        // Initial Render
        window.renderCertificatesValues('all');

        // Setup Filter Buttons
        setupFilterButtons();

    } catch (error) {
        console.error('Certificate Load Error:', error);
        container.innerHTML = `
            <div class="error-msg" style="color: red; padding: 2rem; text-align: center;">
                <h3>Unable to load certificates</h3>
                <p>${error.message}</p>
                <p>Please check console for details.</p>
            </div>
        `;
    }
}

function createCertCard(cert) {
    // Sanitize paths
    const imgPath = cert.image ? encodeURI(cert.image) : 'img/placeholder.jpg';
    const title = cert.title || 'Untitled Certificate';

    return `
        <div class="cert-card fade-in">
            <div class="cert-img-wrapper" data-src="${imgPath}" data-title="${title}">
                <img src="${imgPath}" alt="${title}" loading="lazy" onerror="this.src='./img/placeholder.jpg'">
                <div class="cert-overlay">
                    <i class="fas fa-expand-alt"></i>
                </div>
            </div>
            <div class="cert-info">
                <h3>${title}</h3>
                <p class="cert-issuer">${cert.issuer || 'Unknown Issuer'}</p>
                <div class="cert-actions">
                    <button class="action-btn view-btn" data-src="${imgPath}" data-title="${title}">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <a href="${imgPath}" download="${title.replace(/\s+/g, '_')}.png" class="action-btn download-btn">
                        <i class="fas fa-download"></i> Save
                    </a>
                </div>
            </div>
        </div>
    `;
}

function bindCardEvents(container, lightbox) {
    const openLightbox = (src, title) => {
        const img = lightbox.querySelector('img');
        const caption = lightbox.querySelector('.lightbox-caption');
        img.src = src;
        caption.textContent = title;
        lightbox.classList.add('active');
    };

    // Bind Image Clicks
    container.querySelectorAll('.cert-img-wrapper').forEach(el => {
        el.addEventListener('click', () => openLightbox(el.dataset.src, el.dataset.title));
    });

    // Bind View Buttons
    container.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(btn.dataset.src, btn.dataset.title);
        });
    });
}

function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        // Clone to remove old listeners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            newBtn.classList.add('active');
            if (window.renderCertificatesValues) {
                window.renderCertificatesValues(newBtn.dataset.filter);
            }
        });
    });
}

function getValidationLightbox() {
    let box = document.getElementById('lightbox');
    if (!box) {
        box = document.createElement('div');
        box.id = 'lightbox';
        box.className = 'lightbox';
        box.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img src="" alt="Certificate Preview">
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(box);

        // Close events
        const close = () => box.classList.remove('active');
        box.querySelector('.lightbox-close').addEventListener('click', close);
        box.addEventListener('click', e => { if (e.target === box) close(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    }
    return box;
}

