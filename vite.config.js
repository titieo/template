import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
export default defineConfig({
    root: './src/',
    publicDir: 'static',
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
    build: {
        outDir: '../website/',
    },
    server: {
        open: true,
    },
});
