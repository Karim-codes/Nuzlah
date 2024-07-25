import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: '/src/main.jsx', // Path relative to the base
      },
      external: [], // If you have external dependencies, list them here
    },
  },
});
