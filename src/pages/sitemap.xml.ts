import type { APIRoute } from 'astro';
import { niches } from '~/data/niches';

const SITE = 'https://aiclientbuilder.com';

export const GET: APIRoute = () => {
  const urls = [
    { loc: `${SITE}/`, priority: '1.0' },
    ...niches.map((n) => ({ loc: `${SITE}/${n.slug}/`, priority: '0.9' })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
