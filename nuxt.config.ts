import { motionPresets } from "./app/utils/motion";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@comark/nuxt", "motion-v", "@vueuse/nuxt"],
  css: ["~/assets/css/main.css"],

  colorMode: {
    preference: "dark",
  },

  // Registers `v-motion` plus every `motionPresets` key as a global directive.
  motionV: {
    directives: true,
    presets: motionPresets,
  },

  app: {
    // Route transition; keyframes live in assets/css/main.css.
    pageTransition: { name: "page", mode: "out-in" },

    head: {
      title: "PETER",

      htmlAttrs: {
        lang: "en",
      },

      meta: [
        {
          name: "description",
          content:
            "PETER is a web-app camera-based attendance management system designed to simplify attendance tracking, prevent fraudulent clock-ins, and provide organizations with a reliable and modern attendance experience.",
        },
        {
          name: "author",
          content: "yncynotdev",
        },
        {
          property: "og:title",
          content: "PETER — Attendance Management System",
        },
        {
          property: "og:description",
          content:
            "PETER is a web-app camera-based attendance management system designed to simplify attendance tracking, prevent fraudulent clock-ins, and provide organizations with a reliable and modern attendance experience.",
        },
        {
          property: "og:image",
          content: "https://peter-app-cf.pages.dev/og-image.jpg",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://peter-app-cf.pages.dev",
        },
        {
          property: "article:author",
          content: "yncynotdev",
        },
        {
          property: "article:published_time",
          content: "2026-08-31T00:00:00+08:00",
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
