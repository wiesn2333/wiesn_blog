import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'file'
  },
  server: {
    host: true,
    port: 4000
  },
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/tailwind']
    }
  }
});