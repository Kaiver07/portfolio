import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: update to a custom domain once one is bought.
export default defineConfig({
  site: 'https://portfolio-nine-beta-dz180auglf.vercel.app',
  output: 'static',
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
