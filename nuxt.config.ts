// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "PETER",

      htmlAttrs: {
        lang: "en",
      },

      meta: [
        {
          name: "description",
          content: "A web camera-based attendance.",
        },
        {
          name: "author",
          content: "yncynotdev",
        },
      ],

      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      demoUrl: import.meta.env.NUXT_DEMO_URL,
    },
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
    preset: "cloudflare_pages",
  },
});
