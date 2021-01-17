// lib
import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import Login from '@/views/login'
import Orders from '@/views/orders'
import NotFound from '@/views/not-found'

Vue.use(VueRouter)

const routes = [
    {
        path: '/orders',
        alias: '/',
        name: 'Orders',
        component: Orders,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/*',
        redirect: '/404'
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
