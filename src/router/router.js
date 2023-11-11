import { createRouter, createWebHistory } from "vue-router";

import { authStore } from '../store/authStore'

import NotFound from '../pages/NotFound.vue'
// import Welcome from '../pages/Welocme.vue'
import Home from '../pages/Home.vue'
import Shop from '../pages/shop/Shop.vue'
import SingleProduct from '../pages/shop/SingleProduct.vue'
import Cart from '../pages/cart/Cart.vue'
import Checkout from '../pages/checkout/Checkout.vue'
import OrderList from '../pages/order/OrderList.vue'




import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/register.vue'
import Profile from '../pages/auth/Profile.vue'

import Dashboard from '../pages/dashboard/Dashboard.vue'

import Chart from '../pages/dashboard/components/Chart.vue'
import CircleProgress from '../pages/dashboard/components/CircleProgress.vue'
import DataTable from '../pages/dashboard/components/DataTable.vue'


import Product from '../pages/dashboard/product/product.vue'
import Brand from '../pages/dashboard/product/Brand.vue'
import Unit from '../pages/dashboard/product/Unit.vue'
import { onMounted } from "vue";

const baseURL = window.location.origin;
// const stylesheets = [
//     { public: '/node_modules/bootstrap/dist/css/bootstrap.min.css' },
//     { public: '/src/assets/css/bootstrap-extensions.css' },
//     { public: '/src/assets/css/style.css' },
//     { public: '/src/assets/css/global.css' },
//     { user: '/src/assets/css/tailwind.css' },
// ];
const stylesheets = {
    public: [
        `/node_modules/bootstrap/dist/css/bootstrap.min.css`,
        `/src/assets/css/bootstrap-extensions.css`,
        `/src/assets/css/style.css`,
        `/src/assets/css/global.css`,
    ],
    user: `/src/assets/css/tailwind.css`,
};

const cssElement1 = document.getElementById("stylesheet1");
const cssElement2 = document.getElementById("stylesheet2");
const cssElement3 = document.getElementById("stylesheet3");
const cssElement4 = document.getElementById("stylesheet4");

const defaultStylesheet = stylesheets.public;



const routes = [
    // start authenticate
    {
        path: '/login', component: Login, name: 'login',
        meta: {
            stylesheet: "public",
            breadcrumb: [
                {
                    text: 'Home',
                    route: 'home'
                }, {
                    text: 'Login',
                    route: 'login'
                }
            ]
        }
    },
    {
        path: '/register', component: Register, name: 'register',
        meta: {
            stylesheet: "public",
            breadcrumb: [
                {
                    text: 'Home',
                    route: 'home'
                }, {
                    text: 'Register',
                    route: 'register'
                }
            ]
        }
    },


    // start public
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { stylesheet: "public" }
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop,
        meta: {
            stylesheet: "public",
            breadcrumb: [
                {
                    text: 'Home',
                    route: 'home'
                }, {
                    text: 'Shop',
                    route: 'shop'
                }
            ]
        }
    },
    {
        path: '/shop/singleProduct/:id',
        name: 'singleProduct',
        component: SingleProduct,
        meta: {
            stylesheet: "public",
            breadcrumb: [
                {
                    text: 'Home',
                    route: 'home'
                }, {
                    text: 'Shop',
                    route: 'shop'
                },
                {
                    text: 'Single Product',
                    route: 'singleProduct'
                }
            ]
        }
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta: {
            stylesheet: "public",
            breadcrumb: [
                {
                    text: 'Home',
                    route: 'home'
                }, {
                    text: 'Cart',
                    route: 'cart'
                }
            ]
        }
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
        meta: {
            stylesheet: "public",
            breadcrumb: [
                {
                    text: 'Home',
                    route: 'home'
                }, {
                    text: 'Checkout',
                    route: 'checkout'
                }
            ],
            requiresAuth: true, role: 'admin'
        }
    },
    {
        path: '/confirm',
        name: 'comfirm',
        component: OrderList,
        meta: {
            stylesheet: "public",
            breadcrumb: [
                {
                    text: 'Home',
                    route: 'home'
                }, {
                    text: 'Comfirm',
                    route: 'comfirm'
                }
            ],
            requiresAuth: true, role: 'admin'
        }
    },


    {
        path: '/dashboard/profile', component: Profile, name: 'profile',
        meta: { stylesheet: "user", requiresAuth: true, role: 'admin' }
    },
    // end authenticate


    // ==== start dashboard ====
    {
        path: '/dashboard', name: 'dashboard', component: Dashboard,
        meta: { stylesheet: "user", requiresAuth: true, role: 'admin' }
    },
    // ==== libery component
    {
        path: '/dashboard/chart', name: 'chart', component: Chart,
        meta: { stylesheet: "user", requiresAuth: true, role: 'admin' }
    },
    {
        path: '/dashboard/circleProgress', name: 'circleProgress', component: CircleProgress,
        meta: { stylesheet: "user", requiresAuth: true, role: 'admin' }
    },
    {
        path: '/dashboard/dataTable', name: 'dataTable', component: DataTable,
        meta: { stylesheet: "user", requiresAuth: true, role: 'admin' }
    },

    // dashboard panel
    {
        path: '/dashboard/product', name: 'product', component: Product,
        meta: { stylesheet: "user", requiresAuth: true, role: 'admin' }
    },
    {
        path: '/dashboard/brand', name: 'brand', component: Brand,
        meta: { stylesheet: "user", requiresAuth: true, role: 'admin' }
    },
    {
        path: '/dashboard/unit', name: 'unit', component: Unit,
        meta: { stylesheet: "user", requiresAuth: true, role: 'admin' }
    },
    // ==== end dashboard ====
    {
        path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound,
        meta: { stylesheet: "user" }
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = authStore
    if (to.meta.stylesheet !== from.meta.stylesheet) {

        if (to.meta.stylesheet !== from.meta.stylesheet) {
            if (to.meta.stylesheet == 'public') {
                cssElement1.href = stylesheets[to.meta.stylesheet][0] || defaultStylesheet[0];
                cssElement2.href = stylesheets[to.meta.stylesheet][1] || defaultStylesheet[1];
                cssElement3.href = stylesheets[to.meta.stylesheet][2] || defaultStylesheet[2];
                cssElement4.href = stylesheets[to.meta.stylesheet][3] || defaultStylesheet[3];
            } else {
                cssElement1.href = stylesheets[to.meta.stylesheet];
                cssElement2.href = '';
                cssElement3.href = '';
                cssElement4.href = '';
            }
        }
        // onMounted(() => {
        //     const head = document.getElementsByTagName('head')
        //     stylesheets.forEach((sheets, index) => {
        //         if (sheets.hasOwnProperty('public' && to.meta.stylesheet == 'public')) {
        //             const link = document.createElement('link');
        //             link.rel = 'stylesheet';
        //             link.type = 'text/css';
        //             link.href = sheets.public;
        //             head.appendChild(link);
        //         } else {
        //             const link = document.createElement('link');
        //             link.rel = 'stylesheet';
        //             link.type = 'text/css';
        //             link.href = sheets.user;
        //             head.appendChild(link);
        //         }
        //     });
        // })
    }
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
})


export default router
