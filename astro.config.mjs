import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';

// import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://scalvo.dev/',
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
    tailwind(),
  ],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
});
