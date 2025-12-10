// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],
  devtools: {
    enabled: true
  },

  app: {
    baseURL: '/gluten-free-recipes/', // nombre EXACTO del repo
    head: {
      title: 'Recetas sin gluten',
      meta: [
        { name: 'description', content: 'Recetario sin gluten con filtros, categorías y creador de recetas.' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/**': { prerender: true }
  },

  compatibilityDate: '2025-01-15',
  nitro: {
    preset: 'github-pages'
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
        semi: true
      }
    }
  }
});
