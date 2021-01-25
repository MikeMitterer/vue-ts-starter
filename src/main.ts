import '@/assets/styles/main.scss'
import Vue from 'vue'
import App from './App.vue'
import { workbox } from './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$workbox = workbox

new Vue({
    router,
    store,

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
