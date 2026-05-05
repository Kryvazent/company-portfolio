import { useEffect } from 'react';

export function SEOHead() {
  useEffect(() => {
    // Set page title
    document.title = 'Kryvazent - Software Engineering Company | Custom Development & Teams';

    // Create or update meta tags
    const metaTags = [
      // Basic Meta Tags
      { name: 'description', content: 'Kryvazent delivers professional software engineering solutions. Fixed-price projects ($12k-$200k) or dedicated teams ($8k-$18k/mo). No BS, just clean code that works.' },
      { name: 'keywords', content: 'software development, custom software, web development, mobile apps, SaaS development, dedicated development team, software engineering, react development, node.js development, fixed price projects' },
      { name: 'author', content: 'Kryvazent' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },

      // Viewport
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://kryvazent.com/' },
      { property: 'og:title', content: 'Kryvazent - Software That Actually Works' },
      { property: 'og:description', content: 'Professional software engineering with transparent pricing. Fixed-price projects or dedicated teams. No fluff, just results.' },
      { property: 'og:image', content: 'https://kryvazent.com/og-image.svg' },
      { property: 'og:site_name', content: 'Kryvazent' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://kryvazent.com/' },
      { name: 'twitter:title', content: 'Kryvazent - Software That Actually Works' },
      { name: 'twitter:description', content: 'Professional software engineering with transparent pricing. Fixed-price projects or dedicated teams.' },
      { name: 'twitter:image', content: 'https://kryvazent.com/twitter-image.svg' },

      // Additional SEO
      { name: 'theme-color', content: '#2563eb' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'format-detection', content: 'telephone=no' },
    ];

    metaTags.forEach(tag => {
      const key = tag.name ? 'name' : 'property';
      const value = tag.name || tag.property;

      let element = document.querySelector(`meta[${key}="${value}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(key, value!);
        document.head.appendChild(element);
      }

      element.setAttribute('content', tag.content);
    });

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://kryvazent.com/');

    // Add favicon links
    const faviconLinks = [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternate icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.svg' },
    ];

    faviconLinks.forEach(({ rel, type, href }) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (type) link.setAttribute('type', type);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    });

    // Add JSON-LD structured data
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kryvazent",
      "description": "Professional software engineering company providing custom development and dedicated teams",
      "url": "https://kryvazent.com",
      "logo": "https://kryvazent.com/logo.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "email": "kryvazent@gmail.com",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "streetAddress": "123 Tech Avenue, Innovation District"
      },
      "sameAs": [
        "https://linkedin.com/company/kryvazent",
        "https://twitter.com/kryvazent",
        "https://github.com/kryvazent"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "12000",
        "highPrice": "200000",
        "offerCount": "3",
        "availability": "https://schema.org/InStock"
      }
    };

    script.textContent = JSON.stringify(structuredData);

  }, []);

  return null;
}
