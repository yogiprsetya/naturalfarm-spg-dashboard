// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxtjs/tailwindcss"],
  router: {
    options: { linkExactActiveClass: "active" },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "SPG Dashboard - naturalfarm.id",
    },
  },
});
