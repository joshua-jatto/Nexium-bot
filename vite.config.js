/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  root: 'src', // Project root is src
  publicDir: '../public', // Public assets outside src
  base: '/', // Adjust to '/repo-name/' if hosting in a subdirectory
  build: {
    outDir: '/dist', // Output to project_root/dist
    emptyOutDir: true, // Clear dist before building
    assetsDir: 'assets',
    
    sourcemap: false, // Disable sourcemaps for production
    minify: 'terser', // Use terser for minification
    rollupOptions: {
      input: {
        main: '/index.html', // Entry point 1
        addVolume: '/add-volume.html' // Entry point 2
      }
    }
  },
  server: {
    open: '/index.html' // Open index.html in dev
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  optimizeDeps: {
    include: ['ethers'] // Pre-bundle ethers for faster dev
  }
});