import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Define o formato das classes geradas pelos CSS Modules
      generateScopedName: '[name]__[local]__[hash:base64:5]',
      // Comportamento: local por padrão (evita conflito com classes globais)
      scopeBehaviour: 'local',
    },
  },
});