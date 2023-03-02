import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // integrations: [vercel()],
  adapter: vercel({
    includeFiles: ['./src/pages/daniel.ts']
  })
});