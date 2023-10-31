import { ref, reactive } from 'vue'
import router from '../router/router'
import axios from 'axios'
import { dialog } from './dailogStore'
import { cartStore } from './cartStore'
import { wishlist } from './wishlistStore'
import { useToast } from "vue-toastification"

const toast = useToast()
const cart = cartStore
const authStore = reactive({

    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user')),
    // user: { role: ['admin'] },
    message: null,
    status: null,

    authenticate(name, password) {
        fetch('http://127.0.0.1:8000/api/login', {
            // fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // username: name,
                // password: password,
                email: name, password
                // expiresInMins: 60, // optional // user : kminchelle, pas: 0lelplR
            })
        }).then(res => res.json())
            .then((res) => {
                console.log(res);
                if (!res.error) {
                    //Object.assign(res, { role: ['user', 'admin', 'editor'] }) // push static role

                    localStorage.setItem('user', JSON.stringify(res))
                    authStore.isAuthenticated = true
                    localStorage.setItem('auth', 1)
                    authStore.user = res
                    // dialog.closeModal()
                    toast.success(`Log in SUccessfull`)
                    router.push('/')
                } else {
                    toast.error(`${res.message}`)
                    authStore.status = res.error
                }
            })
    },
    userRegister(Name, Email, Password) {
        fetch('http://127.0.0.1:8000/api/users', {
            // fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: Name, email: Email, password: Password
            })
        }).then(res => res.json())
            .then((res) => {
                console.log(res);
                if (!res.error) {
                    //Object.assign(res, { role: ['user', 'admin', 'editor'] }) // push static role

                    // localStorage.setItem('user', JSON.stringify(res))
                    // authStore.isAuthenticated = true
                    // localStorage.setItem('auth', 1)
                    // authStore.user = res
                    // dialog.closeModal()
                    toast.success(`Registratin in SUccessfull`)
                    router.push('/login')
                } else {
                    toast.error(`${res.message}`)
                    authStore.status = res.error
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
        wishlist.clearItems()
        // wishlist.saveCartInLocalStorage()

    },
    getUserToken() {
        return !authStore.user?.token ? null : authStore.user.token
    }
})

export { authStore }
