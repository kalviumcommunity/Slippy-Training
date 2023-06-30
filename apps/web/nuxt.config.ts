// https://v3.nuxtjs.org/api/configuration/nuxt.config


export default defineNuxtConfig({
  modules: ["@myturborepo/ui", "@nuxtjs/tailwindcss"],
  nitro: {
    preset: "netlify",
  },
  ssr: false,

  runtimeConfig: {
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: ""
  },
});
