import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Taller_DAW_06-07_Maigua_Camacho_Ledesma/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})
