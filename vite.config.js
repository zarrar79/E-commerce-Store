import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['7952-2400-adcc-907-bf00-dae-d140-8877-2824.ngrok-free.app']
  }
});