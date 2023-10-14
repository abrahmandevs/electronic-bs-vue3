import { reactive, computed } from "vue";
import { authStore } from './authStore'
// const auth = authStore


const cartStore = reactive({
    items: {},
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
        return parseFloat(total.toFixed(2))
    }),
    // add items
    addItem(product) {
        // if (auth.isAuthenticated) {
        if (this.items[product.id]) {
            this.items[product.id].quantity++
        } else {
            this.items[product.id] = {
                product,
                quantity: 1
            }
        }
        this.saveCartInLocalStorage()
        // }

    },
    // remove items
    removeItem(index) {
        if (this.items[index]) {
            delete this.items[index]
        }
    },
    emptyCart() {
        this.items = {}
        this.saveCartInLocalStorage()
    },

    // save in to localstorage
    saveCartInLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items))
    },
    // get data into localStorage
    getCartLocalStorage() {
        this.items = JSON.parse(localStorage.getItem('cart')) || {}
    },
})
cartStore.getCartLocalStorage()
export { cartStore }