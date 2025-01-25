// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  components: true,
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts"
  ],
  runtimeConfig: {
    public: {
      accessToken: "rKtLEy19uWDlaPgfI5mmiMwBkmjbmxc9",
    },
  },
  css: ["~/assets/scss/main.scss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  googleFonts: {
    families: {
      "DM Sans": [400, 700],
    },
    display: "swap"
  },
});