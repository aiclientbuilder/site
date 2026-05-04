import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aiclientbuilder.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
