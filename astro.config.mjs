// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// Yorkshire pages outside the Dales are noindexed (flag in the data file), so keep them out of the sitemap too.
const noindexYorkshire = JSON.parse(readFileSync(new URL('./src/data/yorkshire-dales-walks.json', import.meta.url), 'utf8'))
  .filter((w) => w.noindex)
  .map((w) => `/yorkshire-dales-walks/${w.slug}/`);

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
      filter: (page) => !noindexYorkshire.some((p) => page.endsWith(p)) && !page.includes('/404') && !page.includes('/contact/thanks') && !page.includes('/cookie-policy') && !page.includes('/privacy-policy') && !page.includes('/terms-of-service'),
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