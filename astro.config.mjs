import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: set to the final domain once one is bought, or to the *.vercel.app URL after first deploy.
export default defineConfig({
  site: 'https://yerai-jimenez.vercel.app',
  output: 'static',
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
