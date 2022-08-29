import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/serverless';

// export default {
//   // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
//   // pages: './src/pages', // Path to Astro components, pages, and data
//   // dist: './dist',       // When running `astro build`, path to final static output
//   // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
//   site: 'https://sncalvo.github.io',
//   // sitemap: true, // Generate sitemap (set to "false" to disable)
//   // devOptions: {
//   // hostname: 'localhost',  // The hostname to run the dev server on.
//   // port: 3000,             // The port to run the dev server on.
//   // },
//   integrations: [solid()],
//   vite: {
//     ssr: {
//       external: ['svgo'],
//     },
//   },
//   adapter: vercel(),
// };

export default defineConfig({
  site: 'https://sncalvo.github.io',
  integrations: [solid()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  output: 'server',
  adapter: vercel(),
});
