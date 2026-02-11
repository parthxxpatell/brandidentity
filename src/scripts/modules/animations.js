// === Animations ===
// Note: Lenis and AOS should be imported from node_modules if possible, or assumed global if loaded via script tags.
// Since we are moving to Vite, we should try to import them.
// Ensure 'lenis' and 'aos' are installed or available. 
// For now, assuming they might be global or we need to add imports.
// The original code used CDN links. In Vite, we should install them: `npm install @studio-freight/lenis aos`
// But for now, we'll assume globals to minimize breakage if packages aren't installed yet, 
// OR we can rely on the CDN links still present in HTML until we remove them.
// Ideally, we import them.

export function initAnimations() {
    initLenis();
    initScrollReveal();
    initAOS();
    initParallax();
    initStatCounters();
}

function initLenis() {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 0.1, /* Much faster - reduced from 0.23 */
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .section-rise');
    revealElements.forEach(el => observer.observe(el));
}

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 200, /* Faster animations - reduced from 330ms */
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 0 /* Removed delay for instant animations */
        });
    }
}

function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');

        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / 700);
        }
    });
}

function initStatCounters() {
    const statsSection = document.querySelector('.why-stats, .impact-section'); // Added impact-section selector just in case
    if (!statsSection) return;

    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = formatStatNumber(target, element.dataset.originalText);
                clearInterval(timer);
            } else {
                element.textContent = formatStatNumber(Math.floor(current), element.dataset.originalText);
            }
        }, 16);
    };

    const formatStatNumber = (num, originalText) => {
        // Simple formatting to keep M/K suffix if originally present
        if (originalText && originalText.includes('M')) return (num / 1000000).toFixed(0) + 'M';
        if (originalText && originalText.includes('K')) return (num / 1000).toFixed(0) + 'K';
        if (originalText && originalText.includes('+')) return num + '+';
        return num.toString();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const statNumbers = entry.target.querySelectorAll('.stat-number');

                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    stat.dataset.originalText = text; // Store original
                    let targetValue;

                    if (text.includes('M')) {
                        targetValue = parseFloat(text) * 1000000;
                        animateCounter(stat, targetValue);
                    } else if (text.includes('+')) {
                        targetValue = parseInt(text);
                        const timer = setInterval(() => {
                            let current = parseInt(stat.textContent) || 0;
                            if (current >= targetValue) {
                                stat.textContent = targetValue + '+';
                                clearInterval(timer);
                            } else {
                                stat.textContent = current + 10;
                            }
                        }, 30);
                    } else if (text.includes('₹')) {
                        stat.textContent = '₹0';
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}
