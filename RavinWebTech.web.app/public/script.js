/*==========================================================================================
    Author: Ravindra Pandit Ahire
    Portfolio: https://ravinwebtech.web.app
============================================================================================*/

import { initThemeToggle } from './modules/theme.js';
import { mountVideoGrid } from './modules/videos.js';
import { initInteractions } from './modules/interactions.js';
import { initParticles } from './modules/canvas.js';
import { mountCertificates } from './modules/certificates.js';

document.addEventListener('DOMContentLoaded', () => {

    // Initialize Core Modules
    initThemeToggle(document.getElementById('theme-toggle'));
    initInteractions();

    // Responsive Navbar
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('.navbar');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Page Specific Visuals ---

    // 1. Home Page: Videos
    const videoGrid = document.getElementById('video-grid');
    if (videoGrid) {
        mountVideoGrid(videoGrid);
    }

    // 2. Home Page: Particle Canvas (Only on pages with the canvas)
    const canvas = document.getElementById('bubble-canvas');
    if (canvas) {
        initParticles(canvas);
    }

    // 3. Certificates Page
    const certGrid = document.getElementById('certificate-grid');
    if (certGrid) {
        mountCertificates(certGrid);
    }

    // Remove loading indicator global
    const loader = document.getElementById('loading-indicator');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 500);
            }, 500);
        });
    }
});