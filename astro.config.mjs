import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://dontstepwrong.com';

// Pages where slugs differ across locales — the plugin can't auto-infer
// correct hreflang for these. We clear the auto-generated links and rely
// solely on the <head> hreflang tags (Hreflang.astro), which are correct.
const TRANSLATED_SLUG_PAGES = new Set([
  `${SITE}/mechanics`,
  `${SITE}/pt/mecanicas`,
  `${SITE}/es/mecanicas`,
  `${SITE}/privacy`,
  `${SITE}/pt/privacidade`,
  `${SITE}/es/privacidad`,
]);

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const url = page.replace(/\/$/, '');
        return !url.endsWith('/credits') && !url.endsWith('/creditos');
      },
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        if (TRANSLATED_SLUG_PAGES.has(url)) {
          item.links = [];
        }
        return item;
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          pt: 'pt',
          es: 'es',
        },
      },
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
});
