import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// Router-Plugin wird verwendet
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            name: 'sw',
            path: './sw.js',
        },        {
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
                import(/* webpackChunkName: "about" */ './views/About.vue'),
        }
    ],
});
