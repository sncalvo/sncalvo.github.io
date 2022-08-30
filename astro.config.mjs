import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://scalvo.dev',
  integrations: [
    solid(),
    sitemap({
      customPages: ['https://scalvo.dev', 'https://scalvo.dev/blog'],
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  output: 'server',
  adapter: vercel(),
});
