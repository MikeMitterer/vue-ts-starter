import '@/assets/styles/main.scss'
import { loadGCharts } from '@/utils/gcharts'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,

    mounted(): void {
        //
        // Hier wird der "readState" vom main-Store angestoßen...
        //
        // noinspection JSIgnoredPromiseFromCall
        // this.$store.dispatch('readyState')

        // noinspection JSIgnoredPromiseFromCall
        store.init()
    },

    // tslint:disable-next-line:typedef
    render: (h) => h(App)
}).$mount('#app')
