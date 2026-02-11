// === UI Management ===

export function initUI() {
    initNavbar();
    initSmoothScrollAnchors();
    initTextureOverlay();
    initPreloader();
    initFailSafe();
    initActiveNavLink();
}

function initActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Handle root path
        if (currentPath === '/' && href === 'index.html') {
            link.classList.add('active');
        } else if (currentPath.includes(href) && href !== 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Special handling for Partner CTA
    const partnerCta = document.querySelector('.nav-cta');
    if (partnerCta && currentPath.includes('partner.html')) {
        partnerCta.classList.add('active'); // Ensure styles support this if needed
    }
}

function initNavbar() {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

function initSmoothScrollAnchors() {
    const navbar = document.querySelector('.navbar');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);

            if (target) {
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initTextureOverlay() {
    // === Add texture overlay to hero on load ===
    const hero = document.querySelector('.hero, .page-hero, .team-hero');

    if (hero && !document.querySelector('.grain-overlay')) {
        // Add animated grain effect
        const grainOverlay = document.createElement('div');
        grainOverlay.classList.add('grain-overlay');
        grainOverlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('data:image/svg+xml,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)" opacity="0.05"/></svg>');
            pointer-events: none;
            opacity: 0.3;
            z-index: 1;
        `;
        hero.appendChild(grainOverlay);
    }
}

function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Ensure animation plays fully (approx 2.5s total animation time)
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');

            // Remove from DOM after transition
            setTimeout(() => {
                preloader.remove();
            }, 1000);
        }, 2800);
    }
}

function initFailSafe() {
    // === Fail-Safe: Force Visibility ===
    // If JS hangs or animations fail, ensure content is visible after 1.5s
    setTimeout(() => {
        document.querySelectorAll('.reveal, .fade-in-up').forEach(el => {
            if (getComputedStyle(el).opacity === '0') {
                el.style.opacity = '1';
                el.style.transform = 'none';
            }
        });
    }, 1500);
}
