import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://8this.org',
  output: 'static',
  // The home page is the only top-level page; old and alias URLs land there.
  redirects: {
    '/about': '/',
    '/articles': '/',
    '/tags': '/',
    '/milla': '/',
  },
});
