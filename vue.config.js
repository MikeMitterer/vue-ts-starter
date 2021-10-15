const moment = require('moment')
const package = require('./package')
const fs = require("fs")
const path = require('path')

const date = moment().format('YYYY.MM.DD HH:mm')

const { generateSW } = require('./.vue/pwa.config')

// const { BASE_PATH, SITE_ORIGIN, META } = require("./src/assets/constants.json");
const isProductionMode = process.env.NODE_ENV === 'production'
const isDevMode = !isProductionMode

const isAppInPWAMode = process.env.VUE_APP_USE_PWA_MODE ?? false

// vue inspect zeigt die webpack.js an
const templateParams = {
    VUE_APP_VERSION: package.version,
    VUE_APP_DEV_MODE: isDevMode,
    VUE_APP_PUBLISHED: date
}

// https://cli.vuejs.org/guide/mode-and-env.html#environment-variables
process.env.VUE_APP_VERSION = templateParams.VUE_APP_VERSION
process.env.VUE_APP_DEV_MODE = templateParams.VUE_APP_DEV_MODE
process.env.VUE_APP_PUBLISHED = templateParams.VUE_APP_PUBLISHED

const webPackPluginsToUse = []
if(isAppInPWAMode) {
    webPackPluginsToUse.push( generateSW)
}

// http://bit.ly/2P5Pzdu
module.exports = {
    // publicPath: process.env.NODE_ENV === "development" ? "/pwa/" : "",

    // By default babel-loader ignores all files inside node_modules.
    // If you want to explicitly transpile a dependency with Babel,
    // you can list it in this option.
    //
    // Ist diese Option nicht aktiv kommt es z.B. zum Fehler:
    //      Module parse failed: Unexpected token
    //
    // wenn 'optional chaining' oder so verwendet wird!!!
    //
    // https://cli.vuejs.org/config/#transpiledependencies
    //
    // Damit transpileDependencies funktioniert muss
    //      @vue/cli-plugin-babel
    //      babel-loader
    // installiert sein
    transpileDependencies: [
        // can be string or regex
        '@mmit\/.*'
    ],


    // Weitere Infos:
    //      https://webpack.js.org/configuration/dev-server/#devserverhttps
    devServer: {
        https: true,
        // host: "localhost",
        host: "mobiad.int.mikemitterer.at",
        cert: fs.readFileSync(path.join(__dirname, ".ssl/mobiad.int.pem")),
        key: fs.readFileSync(path.join(__dirname, ".ssl/mobiad.int.key"))
    },

    configureWebpack: {
        plugins: webPackPluginsToUse
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
        // config.entry('sw').filename("../sw.js").add('./src/sw.ts')
    }

    // // PWA-Plugin:
    // //      https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // pwa: {
    //     name: 'VUE TS-Starter',
    //     "display": "standalone",
    //     "start_url": "/index.html",
    //     themeColor: '#c84019',
    //     msTileColor: '#000000',
    //     appleMobileWebAppCapable: 'yes',
    //     appleMobileWebAppStatusBarStyle: 'black',
    //
    //     // configure the workbox plugin
    //     // workboxPluginMode: 'GenerateSW',
    //
    //     // workboxPluginMode: "InjectManifest",
    //     // workboxOptions: {
    //     //      // swSrc is required in InjectManifest mode.
    //     //      swSrc: 'src/sw.ts',
    //     //      // swDest: 'sw.js',
    //     // }
    // }

    // configure autoprefixer
    // autoprefixer: {
    //    browsers: ['last 2 versions'],
    //},
}
