import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,   // bind to 0.0.0.0 so Android on same Wi-Fi can reach it
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
