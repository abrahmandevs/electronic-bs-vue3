import { reactive, computed } from "vue";
import { authStore } from './authStore'
import { order } from "./productOrderStore";
import { useToast } from "vue-toastification"
import router from '../router/router'

const toast = useToast()
// const auth = authStore


const cartStore = reactive({
    items: {},
    couponCode: '',
    discountInPersentare: 0,
    discountApplied: false,
    originalPrice: 0,
    async applyCoupon() {
        let apiUrl = 'http://127.0.0.1:8000/api/coupon'

        const token = authStore.getUserToken()
        if (!token) {
            router.push('/login')
            return
        }
        if (0 == Object.keys(this.items).length) {
            toast.info(`Add products`)
            console.log(router.currentRoute.value.meta.requiresAuth);
            return true
        }
        const payload = {
            coupon: this.couponCode
        }

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(payload)
            })
            if (!response.ok) {
                toast.error(`Network response was not ok`)
                throw new Error('Network response was not ok')
            }
            const couponData = await response.json()

            if (couponData.error == 1) {
                this.discountApplied = false
                this.discountInPersentare = 0
                toast.error(`${couponData.error}`)
            }
            if (couponData.value != 0) {
                this.discountApplied = true
                this.discountInPersentare = couponData.value
                toast.success(`You get ${couponData.value}% discount`)
            }
        } catch (error) {
            console.log('error fetching wishlist', error)
        }
    },
    removeCoupon() {
        this.couponCode = ''
        this.discountApplied = false
        this.discountInPersentare = 0
        toast.info("Coupon has Removed")

    },

    totalItems: computed(() => {
        let total = 0
        for (let id in cartStore.items) {
            total += cartStore.items[id].quantity
        }
        return total
    }),
    // total price
    totalPrice: computed(() => {
        let total = 0
        for (let id in cartStore.items) {
            total += cartStore.items[id].product.price * cartStore.items[id].quantity
        }
        // discount price
        cartStore.originalPrice = parseFloat(total.toFixed(2))
        if (cartStore.discountApplied) {
            total = total - (total * (cartStore.discountInPersentare / 100))
        }

        return parseFloat(total.toFixed(2))
    }),
    // add items
    addItem(product) {
        if (this.items[product.id]) {
            this.items[product.id].quantity++
        } else if (!this.items[product.id] || undefined !== this.items[product.id]) {
            this.items[product.id] = {
                product,
                quantity: 1
            }
        }
        this.saveCartInLocalStorage()
        toast.success(`Add to cart SUccessfull`)

    },
    increment(product) {
        this.addItem(product)
    },
    decrement(product) {
        if (this.items[product.id]) {
            this.items[product.id].quantity > 0 ? this.items[product.id].quantity-- : ''
            0 == this.items[product.id].quantity ? delete this.items[product.id] : ''
        }
        this.saveCartInLocalStorage()
        toast.success(`Removed from cart Successfull`)
    },
    // remove items
    removeItem(index) {
        if (this.items[index]) {
            delete this.items[index]
        }
        toast.success(`Removed from cart Successfull`)
    },
    emptyCart() {
        this.items = {}
        this.saveCartInLocalStorage()
        toast.success(`Empty Cart Successfull`)
    },

    // save in to localstorage
    saveCartInLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items))
        // toast.success(`Update Cart Successfull`)
    },
    // get data into localStorage
    getCartLocalStorage() {
        this.items = JSON.parse(localStorage.getItem('cart')) || {}
    },
    // checkOut product
    checkOut() {
        if (0 == Object.keys(this.items).length) {
            toast.info(`Add products`)
            router.push(router.currentRoute.value.name)
            return true
        }
        order.placeOrder(this.totalPrice, this.items)
    }
})
cartStore.getCartLocalStorage()
export { cartStore }