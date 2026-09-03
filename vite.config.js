import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** GitHub Pages project site: https://maringerov.github.io/nieuw-amsterdam-english/ */
const pagesBase = '/nieuw-amsterdam-english/';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || pagesBase,
  plugins: [react()],
});
