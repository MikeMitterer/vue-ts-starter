import '@/assets/styles/main.scss'
import { LoggerFactory } from '@mmit/logging'
import Vue from 'vue'
import App from './App.vue'
import { wb } from './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$workbox = wb

const logger = LoggerFactory.getLogger('vue-ts-starter.main')
new Vue({
    router,
    store,

    created(): void {
        logger.info('Created!')
        wb?.addEventListener('waiting', () => {
            // this.showUpgradeUI = true
        })
    },

    mounted(): void {
        //
        // Hier wird der "readState" vom main-Store angestoßen...
        //
        // noinspection JSIgnoredPromiseFromCall
        this.$store.dispatch('readyState')
    },

    // tslint:disable-next-line:typedef
    render: (h) => h(App)
}).$mount('#app')
