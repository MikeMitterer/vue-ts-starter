const moment = require('moment')
const package = require('./package')

// const { BASE_PATH, SITE_ORIGIN, META } = require("./src/assets/constants.json");
const devMode = process.env.NODE_ENV !== 'production'
const date = moment().format('YYYY.MM.DD HH:mm')

// vue inspect zeigt die webpack.js an
const templateParams = {
    VUE_APP_VERSION: package.version,
    VUE_APP_DEV_MODE: devMode,
    VUE_APP_PUBLISHED: date
}

// https://cli.vuejs.org/guide/mode-and-env.html#environment-variables
process.env.VUE_APP_VERSION = templateParams.VUE_APP_VERSION
process.env.VUE_APP_DEV_MODE = templateParams.VUE_APP_DEV_MODE
process.env.VUE_APP_PUBLISHED = templateParams.VUE_APP_PUBLISHED

// http://bit.ly/2P5Pzdu
module.exports = {
    devServer: {
        https: true,
        host: "mobiad.int.mikemitterer.at",
        cert: ".ssl/cert.pem",
        key: ".ssl/privkey.pem"
    },
    configureWebpack: (config) => {
        config.entry = {
            app: './src/main.ts',
            mobile: './src/mobile.ts'
            // pwa: './src/registerServiceWorker.ts'
        }
    },
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            return args.map((arg) => {
                return Object.assign({}, arg, {
                    templateParameters(params) {
                        return Object.assign({}, arg.templateParameters(params), templateParams)
                    }
                })
            })
        })
    },

    // PWA-Plugin:
    //      https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {
        name: 'My App1',
        "display": "standalone",
        "start_url": "/index.html",
        themeColor: '#c84019',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        // workboxPluginMode: 'GenerateSW'
        
        // workboxPluginMode: "InjectManifest",
        // workboxOptions: {
        //      // swSrc is required in InjectManifest mode.
        //      swSrc: './sw.js',
        //      // swDest: 'service-worker.js',
        // }
    }

    // configure autoprefixer
    // autoprefixer: {
    //    browsers: ['last 2 versions'],
    //},
}
