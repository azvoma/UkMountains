// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ukmountainsdirectory.co.uk',
  output: 'static',
  trailingSlash: 'always',
  
  // This authorizes your remote image sources
  image: {
    domains: [
      'upload.wikimedia.org', 
      'live.staticflickr.com'
    ],
  },

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
      customPages: [],
      serialize(item) {
        if (item.url.includes('/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        if (item.url.endsWith('/blog')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        return item;
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
        },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      minify: 'esbuild',
    },
  },
});