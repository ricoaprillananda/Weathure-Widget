import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  base: '/WEATHURE-WIDGET/', // required for GitHub Pages project sites
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Weathure Widget',
        short_name: 'Weathure',
        description: 'Production-grade weather widget UI',
        theme_color: '#0ea5e9',
        background_color: '#f9fafb',
        display: 'standalone',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,json}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  }
});
