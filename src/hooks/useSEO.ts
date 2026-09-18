import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  image?: string;
  noIndex?: boolean;
}

const SITE_ORIGIN = 'https://tappy.be';
const DEFAULT_IMAGE = '/tappy-og.png';

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function useSEO({
  title,
  description,
  keywords,
  ogType = 'website',
  image = DEFAULT_IMAGE,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    const pathname = window.location.pathname || '/';
    const canonicalUrl = new URL(pathname, SITE_ORIGIN).toString();
    const imageUrl = new URL(image, SITE_ORIGIN).toString();

    document.title = title;
    document.documentElement.lang = 'nl-BE';

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[name="robots"]', 'name', 'robots', noIndex ? 'noindex,follow' : 'index,follow');

    if (keywords) {
      upsertMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    upsertMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Tappy');
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'nl_BE');
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', 'Tappy online bestelplatform');

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
    upsertMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', 'Tappy online bestelplatform');
  }, [title, description, keywords, ogType, image, noIndex]);
}
