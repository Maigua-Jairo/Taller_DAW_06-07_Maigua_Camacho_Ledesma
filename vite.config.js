import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
 
  base: '/Taller_DAW_06-07_Maigua_Camacho_Ledesma/', 
  server: {
    host: '0.0.0.0',
  }
})
