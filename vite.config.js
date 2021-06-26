import { defineConfig } from 'vite';

export default defineConfig({
    root: './src/',
    publicDir: 'static',
    plugins: ['@vitejs/plugin-legacy'],
    build: {
        outDir: '../website/',
    },
});
