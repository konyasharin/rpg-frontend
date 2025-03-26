/* eslint-disable */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  envPrefix: 'APP_',
  resolve: {
    alias: {
      '@app': '/src/app',
      '@modules': '/src/modules',
      '@core': '/src/core',
      '@shared': '/src/shared',
    },
  },
});
