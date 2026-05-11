import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Claude-User',
        allow: '/',
      },
    ],
    sitemap: 'https://jibaroeats.com/sitemap.xml',
  };
}
