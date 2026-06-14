import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://reunion.sweetbriarai.com',
  // Default static output. Files are emitted to ./dist, which the gmktek
  // builder rsyncs to the volume nginx serves.
});
