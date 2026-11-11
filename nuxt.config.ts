export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo'
  ],
  site: {
    url: 'https://renova.rs',
    name: 'RENOVA',
    description: 'Apartment and house renovation in Serbia. Turnkey solutions in Belgrade and Novi Sad.',
    defaultLocale: 'en'
  },
  seo: {
    // Advanced SEO config
  },
  app: {
    head: {
      title: 'RENOVA | Apartment & House Renovation in Serbia',
      meta: [
        { name: 'description', content: 'Professional renovation services in Belgrade and Novi Sad. Full turnkey renovation, bathrooms, kitchens, painting, tiling and more.' }
      ]
    }
  }
})
