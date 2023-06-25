// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@myturborepo/ui'],
  nitro: {
    preset: 'netlify',
  },
  ssr: false
})
