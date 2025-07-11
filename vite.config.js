import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ['acg-n128.onrender.com'] // ✅ Add your Render hostname here
  }
});
