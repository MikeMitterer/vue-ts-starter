const WorkboxPlugin = require('workbox-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

// Config-Options:
//      tslint:disable-next-line:max-line-length
//      https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW#GenerateSW
//
// Sample für das Manifest:
//     configureWebpack: {
//         plugins: [new InjectManifest({
//             swSrc: './src/sw.ts',
//             swDest: './sw.ts'
//         })]
//     },
//
// Strategien (StaleWhileRevalidate usw.)
//      https://developers.google.com/web/tools/workbox/modules/workbox-strategies?hl=en#using_strategies
//
const generateSW = new WorkboxPlugin.GenerateSW({
    maximumFileSizeToCacheInBytes: 5000000,

    runtimeCaching: [
        {
            handler: 'StaleWhileRevalidate',
            // urlPattern: /\.(?:js|css|html)$/,
            urlPattern: /\.(?:js|css|html)$/,
            options: {
                cacheName: 'static-assets-cache',
                cacheableResponse: {
                    statuses: [0, 200]
                },
                expiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 24 * 60 * 60 * 60
                }
            }
        },
        {
            // Komischerweise
            handler: 'StaleWhileRevalidate',
            urlPattern: /^https:\/\/code.iconify.design/,
            // urlPattern: /\.(js)$/,
            options: {
                cacheName: 'javascript'
            }
        },
        // {
        //     handler: 'StaleWhileRevalidate',
        //     "request.destination": 'script',
        //     options: {
        //         cacheName: 'static-resources',
        //     }
        // },
        {
            handler: 'CacheFirst',
            urlPattern: /\.(?:jp?g|png|svg|gif|raw|webp)$/,
            options: {
                cacheName: 'images-assets-cache',
                cacheableResponse: {
                    statuses: [200]
                },
                expiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 24 * 60 * 60 * 180
                }
            }
        },
        {
            handler: 'CacheFirst',
            urlPattern: /\.(?:woff|woff2|eot|ttf|otf)$/,
            options: {
                cacheName: 'fonts-assets-cache',
                cacheableResponse: {
                    statuses: [200]
                },
                expiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 24 * 60 * 60 * 180
                }
            }
        },
        {
            // Google-Fonts
            urlPattern: /^https:\/\/fonts/,
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'fonts'
            }
        }
    ],
    clientsClaim: true,
    skipWaiting: true,
    cleanupOutdatedCaches: true
})

module.exports = {
    generateSW
} 
