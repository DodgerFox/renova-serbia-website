# RENOVA Serbia Website

Nuxt 3 website for RENOVA renovation company with advanced SEO and basic admin panel.

## Features
- Modern landing page inspired by Dribbble construction designs
- Editable content via `data/content.json`
- Admin panel at `/admin`
- SEO optimized with @nuxtjs/seo (sitemap, robots, meta, schema)
- Tailwind CSS
- Responsive design

## Setup
```bash
npm install
npm run dev
```

## Admin
Visit `/admin` to edit content. Download the JSON and replace `data/content.json` then redeploy.

For production CMS, recommend integrating Nuxt Content, Sanity or Strapi.

## SEO
- Automatic sitemap.xml
- robots.txt
- Open Graph
- Structured data
- Optimized meta tags
