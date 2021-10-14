/* tslint:disable */
/* eslint-disable no-console */

import { Workbox } from 'workbox-window'

// import { register } from 'register-service-worker'
//
// const serviceWorker = "sw.js"
//
// // if (process.env.NODE_ENV === 'production') {
// register(`${process.env.BASE_URL}${serviceWorker}`, {
//     ready() {
//         console.log(
//             'App is being served from cache by a service worker.\n' +
//                 'For more details, visit https://goo.gl/AFskqB'
//         )
//     },
//     registered() {
//         console.log(`Service worker has been registered! (${process.env.BASE_URL}${serviceWorker})`)
//     },
//     cached() {
//         console.log('Content has been cached for offline use.')
//     },
//     updatefound() {
//         console.log('New content is downloading.')
//     },
//     updated() {
//         console.log('New content is available; please refresh...')
//     },
//     offline() {
//         console.log('No internet connection found. App is running in offline mode.')
//     },
//     error(error) {
//         console.error('Error during service worker registration:', error)
//     }
// })
// // }

interface ServiceWorkerMessage {
    message: string;
}

// process.env.BASE_URL = /
// console.log(`${process.env.BASE_URL}`)
export const wb = new Workbox(`${process.env.BASE_URL}service-worker.js`)

export const isServiceWorkerSupported: () => boolean = () => ('serviceWorker' in navigator)

export const registerServiceWorker = (): void => {
    if (isServiceWorkerSupported()) {
        wb.register()
            .then(() => {
                console.log('Service Worker registration completed')
            })
            .catch((err) => {
                console.error('Service Worker registration failed:', err)
            })
    }
}

export const sendMessageToServiceWorker = (message: ServiceWorkerMessage): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        wb.messageSW(message).then((event: MessageEvent): void => {
            if (event.data) {
                if (event.data.error) {
                    reject(event.data.error)
                } else {
                    resolve(event.data)
                }
            }
        })
    })
}



