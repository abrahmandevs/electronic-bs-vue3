import { ref, reactive } from 'vue'
import router from '../router/router'
import axios from 'axios'
import { dialog } from './dailogStore'
import { cartStore } from './cartStore'
const cart = cartStore
import { wishlistStore } from './wishlistStore'
const wishlist = wishlistStore

const authStore = reactive({

    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user')),
    // user: { role: ['admin'] },
    message: null,

    authenticate(name, password) {
        // async function authuser() {
        //     url = 'https://dummyjson.com/auth/login'
        //     const res = await axios.get(url, {
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({

        //             username: 'kminchelle',
        //             password: '0lelplR',
        //             // expiresInMins: 60, // optional
        //         })
        //     })
        // }

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: name,
                password: password,
                // expiresInMins: 60, // optional // user : kminchelle, pas: 0lelplR
            })
        }).then(res => res.json())
            .then((res) => {
                if (!res.message) {
                    Object.assign(res, { role: ['user', 'admin', 'editor'] }) // push static role

                    localStorage.setItem('user', JSON.stringify(res))
                    authStore.isAuthenticated = true
                    localStorage.setItem('auth', 1)
                    authStore.user = res
                    // dialog.closeModal()
                    // router.push('/dashboard')
                } else {
                    // dialog.openModal
                    // router.push('/login')
                    authStore.message = res.message
                }
            })
    },

    roseStatus: false,
    roleCecker(role) {
        if (authStore.user) {
            authStore.user.role.filter((roles) => {
                if (role == roles) {
                    authStore.roseStatus = true
                }
            })
        }
        return authStore.roseStatus
    },


    logout() {
        localStorage.setItem('auth', null)
        authStore.isAuthenticated = false
        authStore.user = null
        localStorage.setItem('user', null)
        // router.push('/login')
        // router.push('/')
        // ==== cart items clean ====
        cart.items = {}
        // cart.totalPrice = 0
        cart.saveCartInLocalStorage()

        // ==== cart items clean ====
        wishlist.items = {}
        wishlist.saveCartInLocalStorage()
    }
})

export { authStore }
