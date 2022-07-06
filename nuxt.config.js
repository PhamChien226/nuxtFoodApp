export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtfoodapp",
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
        href: "https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Poppins:wght@600&display=swap",
      },
    ],
    script: [
      {
        type: "text/javascript",
        innerHTML: `
(var ua = navigator.userAgent || navigator.vendor || window.opera;

  function isFacebookApp() {
    return ua.indexOf("FBAN") > -1 && ua.indexOf("FBAV") > -1;
  }
  
  if (isFacebookApp()) {
    window.parent.location.assign(
      "https://supply.sellde.vn/"
    );
  });`,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [`~/assets/main.scss`],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [`~/plugins/getfood.server.js`, "~/plugins/vuelidate.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // // Simple usage
    // "@nuxtjs/vuetify",
    // // With options
    // [
    //   "@nuxtjs/vuetify",
    //   {
    //     /* module options */
    //   },
    // ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
