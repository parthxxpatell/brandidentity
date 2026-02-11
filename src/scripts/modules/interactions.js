// === Interactions ===

export function initInteractions() {
    initProductCards();
    initSampleKitBtn();
    initProcessSteps();
    initProductImagePlaceholders();
}

function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function initSampleKitBtn() {
    const sampleKitBtn = document.querySelector('.form-actions .btn-secondary');

    if (sampleKitBtn) {
        sampleKitBtn.addEventListener('click', () => {
            alert('Sample kit request feature coming soon! Please fill out the form and mention "Sample Kit" in your message.');
        });
    }
}

function initProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step');

    processSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', function () {
            this.style.background = 'linear-gradient(135deg, var(--color-soft-cream) 0%, var(--color-pastel-petal) 100%)';
        });

        processSteps.forEach((step, index) => {
            step.addEventListener('mouseleave', function () {
                this.style.background = 'var(--color-warm-cream)'; // Fixed: use variable instead of hardcoded
            });
        });
    });
}

function initProductImagePlaceholders() {
    const productImages = document.querySelectorAll('.product-image');

    productImages.forEach((img, index) => {
        if (img.querySelector('div')) return; // Avoid processing twice

        const pattern = document.createElement('div');
        pattern.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%);
            pointer-events: none;
        `;
        img.appendChild(pattern);
    });
}
