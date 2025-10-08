import { defineConfig } from '#q-app/wrappers'

export default defineConfig((ctx) => ({
  boot: ['axios'],

  css: ['app.scss'],

  extras: [
    'roboto-font',
    'material-icons',
  ],

  build: {
    publicPath: '/6704101413-Sirawut-Sangkawadee/', // ✅ สำคัญสุด
  },

  devServer: {
    server: {
      type: 'http'
    },
    open: true
  },

  framework: {
    config: {},
    plugins: ['Notify']
  },

  animations: [],

  ssr: {
    prodPort: 3000,
    middlewares: ['render'],
    pwa: false
  },

  pwa: {
    workboxMode: 'GenerateSW'
  },

  capacitor: {
    hideSplashscreen: true
  },

  electron: {
    preloadScripts: ['electron-preload'],
    inspectPort: 5858,
    bundler: 'packager',
    builder: {
      appId: '6704101413-sirawut-sangkawadee'
    }
  },

  bex: {
    extraScripts: []
  }
}))
