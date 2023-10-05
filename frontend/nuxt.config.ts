// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  srcDir: "frontend/",
  spaLoadingTemplate: "./spa-loading-template.html",
  modules: [
    [
      '@nuxtjs/i18n',
      { /* module options */ },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
