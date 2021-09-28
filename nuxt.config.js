import bodyParser from 'body-parser'
import routes from './api'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  serverMiddleware: [bodyParser.json(), ...routes],
  head: {
    title: 'm9-backstore-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/atoms',
      prefix: 'atom'
    },
    {
      path: '~/components/molecules',
      prefix: 'mol'
    },
    {
      path: '~/components/organisms',
      prefix: 'org'
    },
    {
      path: '~/components/templates',
      prefix: 'tem'
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],
  styleResources: {
    scss: ['@/assets/styles/main.scss']
  },
  axios: {
    proxy: true
  },
  proxy: {},
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
