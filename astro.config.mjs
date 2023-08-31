import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  site: 'https://scalvo.dev/',
  integrations: [
    solid(),
    sitemap({
      customPages: ['https://scalvo.dev', 'https://scalvo.dev/blog']
    }),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }),
    tailwind()
  ],
  vite: {
    ssr: {
      external: ['svgo'],
      noExternal: ["solid-js"]
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  output: 'server',
  adapter: deno()
});
