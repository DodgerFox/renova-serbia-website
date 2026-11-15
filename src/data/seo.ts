import {
  EMAIL,
  PHONE_DISPLAY,
  TELEGRAM_URL,
  faqs,
  openings,
  services,
  ui,
  type Lang,
} from "@/data/site";

const paths: Record<Lang, string> = { ru: "/", en: "/en", sr: "/sr" };

export function langFromPath(pathname: string): Lang {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/sr" || pathname.startsWith("/sr/")) return "sr";
  return "ru";
}

export function seoHead(lang: Lang, origin: string) {
  const copy = ui[lang];
  const path = paths[lang];
  const url = origin ? `${origin}${path}` : path;
  const image = origin ? `${origin}/og.jpg` : "/og.jpg";
  const locale = lang === "ru" ? "ru_RU" : lang === "sr" ? "sr_RS" : "en_GB";

  return {
    meta: [
      { title: copy.meta },
      { name: "description", content: copy.description },
      {
        name: "keywords",
        content:
          lang === "en"
            ? "apartment renovation Belgrade, Novi Sad renovation, bathroom remodel Serbia, tile, plaster, electrician"
            : lang === "sr"
              ? "renoviranje stanova Beograd, Novi Sad, kupatilo, pločice, malterisanje, električar"
              : "ремонт квартир Белград, ремонт Нови-Сад, санузел под ключ, плитка, штукатурка, электрик",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "RENOVA" },
      { name: "geo.region", content: "RS" },
      { name: "geo.placename", content: "Belgrade, Novi Sad" },
      { property: "og:title", content: copy.meta },
      { property: "og:description", content: copy.description },
      { property: "og:locale", content: locale },
      { property: "og:locale:alternate", content: "ru_RU" },
      { property: "og:locale:alternate", content: "en_GB" },
      { property: "og:locale:alternate", content: "sr_RS" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "RENOVA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: copy.meta },
      { name: "twitter:description", content: copy.description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      ...(["ru", "en", "sr"] as const).map((code) => ({
        rel: "alternate",
        hrefLang: code,
        href: origin ? `${origin}${paths[code]}` : paths[code],
      })),
      { rel: "alternate", hrefLang: "x-default", href: origin ? `${origin}/` : "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd(lang, origin, url)),
      },
    ],
  };
}

function jsonLd(lang: Lang, origin: string, url: string) {
  const copy = ui[lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        name: "RENOVA",
        url,
        image: origin ? `${origin}/og.jpg` : undefined,
        telephone: PHONE_DISPLAY,
        email: EMAIL,
        priceRange: "€€",
        currenciesAccepted: "EUR",
        areaServed: [
          { "@type": "City", name: "Belgrade" },
          { "@type": "City", name: "Novi Sad" },
        ],
        address: { "@type": "PostalAddress", addressCountry: "RS" },
        knowsLanguage: ["ru", "sr", "en"],
        sameAs: [TELEGRAM_URL],
        description: copy.description,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: copy.servicesTitle,
          itemListElement: services.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title[lang],
              description: item.text[lang],
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: item.low,
              maxPrice: item.high,
              priceCurrency: "EUR",
              unitText: "m2",
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q[lang],
          acceptedAnswer: { "@type": "Answer", text: item.a[lang] },
        })),
      },
      ...openings.map((role) => ({
        "@type": "JobPosting",
        title: role.title[lang],
        description: `${role.text[lang]} Belgrade and Novi Sad. Pay for completed stages, in euros.`,
        datePosted: "2026-11-15",
        employmentType: "CONTRACTOR",
        hiringOrganization: {
          "@type": "Organization",
          name: "RENOVA",
          sameAs: url,
          email: EMAIL,
          telephone: PHONE_DISPLAY,
        },
        jobLocation: [
          {
            "@type": "Place",
            address: { "@type": "PostalAddress", addressLocality: "Belgrade", addressCountry: "RS" },
          },
          {
            "@type": "Place",
            address: { "@type": "PostalAddress", addressLocality: "Novi Sad", addressCountry: "RS" },
          },
        ],
        applicantLocationRequirements: { "@type": "Country", name: "Serbia" },
      })),
    ],
  };
}

export function sitemapXml(origin: string) {
  const urls = (["ru", "en", "sr"] as const)
    .map((lang) => {
      const alternates = (["ru", "en", "sr"] as const)
        .map(
          (code) =>
            `    <xhtml:link rel="alternate" hreflang="${code}" href="${origin}${paths[code]}"/>`,
        )
        .join("\n");
      return `  <url>\n    <loc>${origin}${paths[lang]}</loc>\n${alternates}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}/"/>\n    <changefreq>weekly</changefreq>\n    <priority>${lang === "ru" ? "1.0" : "0.8"}</priority>\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

export function robotsTxt(origin: string) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
}
