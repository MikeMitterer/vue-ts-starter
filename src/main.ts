import '@/assets/styles/main.scss'
import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp({
    mounted(): void {
        //
        // Hier wird der "readState" vom main-Store angestoßen...
        //
        // noinspection JSIgnoredPromiseFromCall
        this.$store.dispatch('readyState')
    },

    // tslint:disable-next-line:typedef
    render: () => h(App)
})
    .use(router)
    .use(store)
    .mount('#app')
