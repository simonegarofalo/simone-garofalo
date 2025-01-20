import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  vite: {
    server: {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
      },
    },
  },
  integrations: [tailwind()],
});
