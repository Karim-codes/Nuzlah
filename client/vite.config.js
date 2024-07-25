import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['./src/main.jsx'] // Prevent Rollup from including this module
    },
    // Optional: adjust chunk size warning limit if needed
    chunkSizeWarningLimit: 1000,
  },
});
