module.exports = {
  telemetry: false,
  head: {
    title: 'personal-twitter-archive',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jaldi:wght@100;400;700&display=swap' }
    ]
  },
  css: ['~/assets/theme.scss'],
  // plugins: ['~/plugins/v-calendar.js'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    // '@nuxtjs/firebase'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true
  },
  axios: {
    browserBaseURL: '//localhost:3000'
  },
  // firebase: {
  //   services: { firestore: true },
  //   config: {
  //     apiKey: process.env.FIRE_KEY,
  //     appId: process.env.FIRE_APP_ID
  //   },
  //   onFirebaseHosting: true
  // },
  build: {}
}
