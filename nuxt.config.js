import pkg from './package'

// handles router base depending on if its running in pages or on local
// REMOVE THIS WHEN THE DOMAIN HAS BEEN SWITCHEd TO NWPLUS.IO!!!!!!!!!!!!
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nwplus2020/'
  }
} : {}

// Handles production env variables when building (These can be public)
const envVars = process.env.DEPLOY_ENV === 'GH_PAGES' || process.env.DEPLOY_ENV === 'PRODUCTION' ? {
  env: {
    FIREBASE_API_KEY: 'AIzaSyCBkQHeikIsiYZ2yOHiqH_mGJKDWMDU500',
    FIREBASE_AUTH_DOMAIN: 'nwhacks-2019.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://nwhacks-2019.firebaseio.com',
    FIREBASE_PROJECT_ID: 'nwhacks-2019',
    FIREBASE_STORAGE_BUCKET: 'nwhacks-2019',
    FIREBASE_MESSAGING_SENDER_ID: '98283589440',
    FIREBASE_APP_ID: '1:98283589440:web:5421c41be3ccf2235d34a5',
    RECAPTCHA_SITE_KEY: '6Lf-PXcUAAAAAKqB-M3SNbBz5D67TtHAo94_YwyJ',
    WEBSITE_NAME: 'NwPlus_2020',
    mailingListUrl: 'https://us-central1-nwplus-ubc-dev.cloudfunctions.net/addToMailingList'
  }
} : {
  env: {
    mailingListUrl: 'https://us-central1-nwplus-ubc-dev.cloudfunctions.net/addToMailingList'
  }
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
  css: [
    { src: '~/css/main.scss', lang: 'scss' }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/firebase.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    'nuxt-buefy',
    '@nuxtjs/toast',
    [
      'nuxt-buefy',
      {
        /* buefy options */
      }
    ],
    ['@nuxtjs/google-analytics', {
      id: 'UA-144737203-1',
      dev: false
    }],
    ['vue-scrollto/nuxt', { offset: -80 }]
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
