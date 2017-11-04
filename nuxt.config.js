const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname),
  srcDir: 'client/',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3030'
  },
  dev: process.env.NODE_ENV !== 'production',
  head: {
    title: 'Управление университетом',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  loading: {
    color: '#92D3CE',
  },
  build: {
    vendor: [
      'vue-class-component',
      'vue-property-decorator',
      'vuex-class',
      'vuetify'
    ],
  },
  extractCSS: true,
  css: [
    '~/assets/style/app.styl'
  ],
  modules: [
    '~modules/typescript.ts',
  ],
  plugins: [
    '~/plugins/vuetify.js'
  ],
};
