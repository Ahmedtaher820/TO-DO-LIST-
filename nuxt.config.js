export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "To-Do-List",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
      },
      {
        rel:"stylesheet",
        href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      },
      {
        rel:"stylesheet",
        href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      },
      {
        rel:"shortcut icon",
        href:"https://i.pinimg.com/564x/6e/bf/6f/6ebf6f1eea0f9e8245e1f4a941af2e64--icon-check-kill-list.jpg"
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/static/main.css','@/static/auth.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
  },
  buildDir: 'nuxt-dist'
};
