import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import type { Strings } from './en';

export type Locale = 'en' | 'pt' | 'es';

const strings: Record<Locale, Strings> = { en, pt, es };

export const SUPPORTED_LOCALES: Locale[] = ['en', 'pt', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';
export const SITE_URL = 'https://dontstepwrong.com';

/**
 * Returns the UI strings object for a given locale.
 */
export function t(locale: Locale): Strings {
  return strings[locale] ?? strings[DEFAULT_LOCALE];
}

/**
 * Extracts the locale from a URL pathname.
 * /pt/anything → 'pt' | /es/anything → 'es' | otherwise → 'en'
 */
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/pt/') || pathname === '/pt') return 'pt';
  if (pathname.startsWith('/es/') || pathname === '/es') return 'es';
  return 'en';
}

/**
 * Page identifier — used to compute alternate URLs per locale.
 */
export type PageId =
  | 'home'
  | 'mechanics'
  | 'devlog'
  | 'devlogPost'
  | 'presskit'
  | 'privacy';

/**
 * URL mapping per page and locale.
 * Slugs follow seo/requisitos/requisitos-tecnicos-site.md.
 */
const URL_MAP: Record<PageId, Record<Locale, string>> = {
  home: {
    en: '/',
    pt: '/pt/',
    es: '/es/',
  },
  mechanics: {
    en: '/mechanics',
    pt: '/pt/mecanicas',
    es: '/es/mecanicas',
  },
  devlog: {
    en: '/devlog',
    pt: '/pt/devlog',
    es: '/es/devlog',
  },
  devlogPost: {
    // Use computeDevlogPostUrl() for actual post URLs (needs slug)
    en: '/devlog',
    pt: '/pt/devlog',
    es: '/es/devlog',
  },
  presskit: {
    en: '/presskit',
    pt: '/pt/presskit',
    es: '/es/presskit',
  },
  privacy: {
    en: '/privacy',
    pt: '/pt/privacidade',
    es: '/es/privacidad',
  },
};

/**
 * Returns the URL of a page in a specific locale.
 */
export function getUrl(page: PageId, locale: Locale): string {
  return URL_MAP[page][locale];
}

/**
 * Returns alternate URLs for hreflang for a page.
 */
export function getAlternateURLs(page: PageId): Record<Locale, string> {
  return URL_MAP[page];
}

/**
 * Computes a devlog post URL for a given locale and slug.
 * Slug is the same in all 3 languages (English).
 */
export function computeDevlogPostUrl(locale: Locale, slug: string): string {
  const base = URL_MAP.devlog[locale];
  return `${base}/${slug}`;
}

/**
 * Returns alternate URLs for a devlog post (3 locales, same slug).
 */
export function getDevlogPostAlternates(slug: string): Record<Locale, string> {
  return {
    en: computeDevlogPostUrl('en', slug),
    pt: computeDevlogPostUrl('pt', slug),
    es: computeDevlogPostUrl('es', slug),
  };
}

/**
 * Returns absolute URL by prefixing SITE_URL.
 */
export function toAbsolute(path: string): string {
  return `${SITE_URL}${path}`;
}
