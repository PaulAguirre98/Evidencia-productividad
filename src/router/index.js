import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Cities from '@/views/cities/Cities'
import Categories from '@/views/categories/Categories'
import Users from '@/views/users/Users'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/cities',
        name: 'Cities',
        component: Cities
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
