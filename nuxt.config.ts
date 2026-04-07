export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/i18n', '@vercel/analytics/nuxt'],
  css: ['~/assets/css/keero-docs.css'],
  runtimeConfig: {
    public: {
      assistant: {
        enabled: false,
        apiPath: '/__docus__/assistant'
      }
    }
  },
  ogImage: {
    enabled: false
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English'
      }
    ]
  }
})
