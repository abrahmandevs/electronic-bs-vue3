import { createRouter, createWebHistory } from "vue-router";

import { authStore } from '../store/authStore'

import NotFound from '../views/NotFound.vue'
// import Welcome from '../views/Welocme.vue'
import Home from '../components/views/Home.vue'
import Shop from '../components/views/shop/Shop.vue'
import SingleProduct from '../components/views/details/SingleProduct.vue'




import Login from '../views/auth/Login.vue'

import Dashboard from '../views/dashboard/Dashboard.vue'

import Chart from '../views/dashboard/components/Chart.vue'
import CircleProgress from '../views/dashboard/components/CircleProgress.vue'
import DataTable from '../views/dashboard/components/DataTable.vue'


import Product from '../views/dashboard/product/product.vue'
import Brand from '../views/dashboard/product/Brand.vue'
import Unit from '../views/dashboard/product/Unit.vue'

const routes = [
    // start public
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop
    },
    {
        path: '/shop/singleProduct/:id',
        name: 'singleProduct',
        component: SingleProduct
    },
    // {
    //     path: '/shop/:id',
    //     name: 'singleProduct',
    //     component: SingleProduct
    // },

    // end public


    // start authenticate
    {
        path: '/login', component: Login, name: 'login',
    },
    // end authenticate


    // ==== start dashboard ====
    {
        path: '/dashboard', name: 'dashboard', component: Dashboard,
        meta: { requiresAuth: true, role: 'admin' }
    },
    // ==== libery component
    {
        path: '/dashboard/chart', name: 'chart', component: Chart,
        meta: { requiresAuth: true, role: 'admin' }
    },
    {
        path: '/dashboard/circleProgress', name: 'circleProgress', component: CircleProgress,
        meta: { requiresAuth: true, role: 'admin' }
    },
    {
        path: '/dashboard/dataTable', name: 'dataTable', component: DataTable,
        meta: { requiresAuth: true, role: 'admin' }
    },

    // dashboard panel
    {
        path: '/dashboard/product', name: 'product', component: Product,
        meta: { requiresAuth: true, role: 'admin' }
    },
    {
        path: '/dashboard/brand', name: 'brand', component: Brand,
        meta: { requiresAuth: true, role: 'admin' }
    },
    {
        path: '/dashboard/unit', name: 'unit', component: Unit,
        meta: { requiresAuth: true, role: 'admin' }
    },
    // ==== end dashboard ====
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = authStore
    // to and from are both route objects. must call `next`.
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
        // dialog.openModal()
        next('/login')
    } else if (to.meta.requiresAuth && auth.isAuthenticated && auth.user) {
        auth.user.role.filter((role) => {
            if (role == to.meta.role) {
                next()
            }
        })
    } else {
        next()
    }
    if (transition.to.path === '/*') {
        window.location.href = '/404.html'
    }
})


export default router
