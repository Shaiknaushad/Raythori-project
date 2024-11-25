import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Raythori-project/', // Replace <repository-name> with your GitHub repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
