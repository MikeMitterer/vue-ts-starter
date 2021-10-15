import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'

// Router-Plugin wird verwendet
Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
        },
        {
            name: 'about',
            path: '/about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "about" */ './pages/About.vue'),
        },
        {
            name: 'charts',
            path: '/charts',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "charts" */ './pages/Charts.vue'),
        },
    ],
});
