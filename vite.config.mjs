import { defineConfig } from 'vite';
import htmlInject from 'vite-plugin-html-inject';

export default defineConfig({
    plugins: [
        htmlInject(),
    ],
    server: {
        port: 3000,
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                partner: 'partner.html',
                story: 'story.html',
                process: 'process.html',
                products: 'products.html',
                impact: 'impact.html',
                contact: 'contact.html',
            },
        },
    },
});
