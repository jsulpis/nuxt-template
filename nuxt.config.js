require("dotenv").config();

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt.js Template",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Full-featured template for JAMstack websites using nuxt.js"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Environment variables
   */
  env: {
    appTitle: "Nuxt.js Template"
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/dotenv",
    [
      // Doc: https://github.com/nuxt-community/fontawesome-module
      "@nuxtjs/fontawesome",
      {
        icons: {
          solid: ["faHeart"]
        }
      }
    ],
    [
      // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
      "@nuxtjs/tailwindcss",
      {
        configPath: "../tailwind.config.js", // relative to the src folder
        cssPath: "@/assets/scss/tailwind.scss"
      }
    ],
    [
      "@nuxtjs/google-analytics",
      {
        id: process.env.GA_TRACKING_ID
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-i18n",
      {
        locales: [
          { code: "en", iso: "en-US", name: "English" },
          { code: "fr", iso: "fr-FR", name: "Français" }
        ],
        defaultLocale: "en",
        baseUrl: "https://jsulpis.github.io/nuxt-template/",
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: require("./src/locales/en.json"),
            fr: require("./src/locales/fr.json")
          }
        }
      }
    ]
  ],
  /*
   ** Change the source directory
   */
  srcDir: "src/",
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {}
  }
};
