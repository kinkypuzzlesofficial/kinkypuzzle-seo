const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const baseUrl = 'https://www.kinkypuzzle.com/pages';

const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.html'));

const urls = files.map(file => {
  return `<url>
    <loc>${baseUrl}/${file}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);

// ✅ Ping Google to reindex
require('https').get('https://www.google.com/ping?sitemap=https://www.kinkypuzzle.com/sitemap.xml');
