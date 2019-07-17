import pkg from './package'

// handles router base depending on if its running in pages or on local
// REMOVE THIS WHEN THE DOMAIN HAS BEEN SWITCHEd TO NWPLUS.IO!!!!!!!!!!!!
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nwplus2020/'
  }
} : {}

// Handles production env variables when building (These can be public)
const envVars = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  env: {
    FIREBASE_API_KEY: 'AIzaSyBppAYPBZ6WxWdErM3smh6t9BEJPUM_NHU',
    FIREBASE_AUTH_DOMAIN: 'nwhacks-2019-dev.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://nwhacks-2019-dev.firebaseio.com',
    FIREBASE_PROJECT_ID: 'nwhacks-2019-dev',
    FIREBASE_STORAGE_BUCKET: 'nwhacks-2019-dev-sponsor-images',
    FIREBASE_MESSAGING_SENDER_ID: '5043243303',
    RECAPTCHA_SITE_KEY: '6Lf-PXcUAAAAAKqB-M3SNbBz5D67TtHAo94_YwyJ',
    WEBSITE_NAME: 'NwPlus_2020',
    mailingListUrl: ''
  }
} : {
  mailingListUrl: 'http://localhost:5000/nwhacks-2019-dev/us-central1/SubscribeToMailingList/'
}

export default {
  ...routerBase,
  ...envVars,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/firebase.js', '~plugins/vue-scrollto.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    'nuxt-buefy',
    [
      'nuxt-buefy',
      {
        /* buefy options */
      }
    ]
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
