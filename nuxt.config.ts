export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  future: { compatibilityVersion: 4 },

  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
  ],

  hub: {
    cache: true,
  },

  runtimeConfig: {
    githubToken: import.meta.env.NUXT_GITHUB_TOKEN,
    public: {
      githubUsername: import.meta.env.NUXT_USERNAME,
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  devtools: {
    enabled: true,
  },
})
