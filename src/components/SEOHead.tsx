import { useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';

export function SEOHead() {
  const { t, language } = useI18n();

  useEffect(() => {
    // Update document title
    document.title = t('seo.title');

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.description'));
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('seo.keywords'));
    }

    // Update OG meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('seo.ogTitle'));
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('seo.ogDescription'));
    }

    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', t('seo.twitterTitle'));
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t('seo.twitterDescription'));
    }

    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language, t]);

  return null;
}
