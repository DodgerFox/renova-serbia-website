export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'RENOVA | Apartment & House Renovation in Serbia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional renovation services in Belgrade and Novi Sad. Full turnkey renovation, bathrooms, kitchens, painting, tiling and more.' },
        { property: 'og:title', content: 'RENOVA | Professional Renovation in Serbia' },
        { property: 'og:description', content: 'Apartment and house renovation in Serbia — turnkey solutions.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://renova.rs' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'canonical', href: 'https://renova.rs' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
