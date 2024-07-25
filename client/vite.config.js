import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size limit
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Example of splitting vendor code
        },
      },
      external: ['/src/main.jsx'] // Exclude problematic import
    },
  },
});
