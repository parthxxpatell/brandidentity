import { initUI } from './modules/ui.js';
import { initAnimations } from './modules/animations.js';
import { initInteractions } from './modules/interactions.js';

document.addEventListener('DOMContentLoaded', () => {
    initUI();
    initAnimations();
    initInteractions();

    // Console Signature
    console.log('%c🌾 Pravaahya - From Bharat\'s fields to India\'s tables', 'font-size: 16px; color: #b29361; font-weight: bold;');
    console.log('%cTransforming agricultural waste into engineered luxury.', 'font-size: 12px; color: #10443e;');
});
