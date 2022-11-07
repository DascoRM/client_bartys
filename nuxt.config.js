import { resolve } from 'path'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    host: '0.0.0.0',
    port: '3000'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],


  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    './static/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios-accessor',
    '~/plugins/fontawesome.ts',
    '~/plugins/flowbite.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-leaflet',
    '@nuxtjs/auth-next'
  ],
  pageTransition: "fade",

  layoutTransition: {
    name: "fade",
    mode: "in-out"
},
  // router: {
  //   middleware: ['auth']
  // },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // check inside /utils/api
  },
  auth: {
    // Options
    strategies: {
      local: {
        token: {
          property: 'jwt',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: 'auth/local',
            method: 'post',
          },
          user: {
            url: 'users/me',
            method: 'get',
          },
          logout: false,
        },
      },
      vuex: false
    },
  },
  //white list leaflet css
  purgeCSS: {
    whitelist: ['lvml'],
    whitelistPatterns: [/leaflet-.+$/],
    whitelistPatternsChildren: [/leaflet-.+$/]
  },
  alias: {
    'icon': resolve(__dirname, './assets/icon'),
    'img': resolve(__dirname, './assets/img'),
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Click',
      author: 'Dasco',
    },
    manifest: {
      name: 'Click app',
      short_name: 'Click',
      lang: 'fr',
    },
    icon: {
      fileName: 'click-icon.png',
      size: [64, 120, 144, 152, 192, 384, 512],
    },
    workbox: {
      enabled: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
