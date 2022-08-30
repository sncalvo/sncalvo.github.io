import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scalvo.dev',
  integrations: [solid(), sitemap()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  output: 'server',
  adapter: vercel(),
});
