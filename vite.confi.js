import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        devSourcemap: true, // Helps with debugging CSS
    },
    build: {
        cssCodeSplit: true, // Split CSS into separate files
        minify: 'esbuild',  // Minify using esbuild for better performance
    },
});
