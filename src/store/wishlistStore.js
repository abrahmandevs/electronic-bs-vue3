import { reactive, computed } from "vue";
import { authStore } from './authStore'
// const auth = authStore


const wishlistStore = reactive({

    items: {},
    totalItems: computed(() => {
        let total = 0
        for (let id in wishlistStore.items) {
            total += wishlistStore.items[id].quantity
        }
        return total
    }),
    // add items
    addItem(product) {
        if (!this.items[product.id]) {
            this.items[product.id] = {
                product,
                quantity: 1,
                wishlist: true
            }
        } else {
            delete this.items[product.id]
        }
        this.saveCartInLocalStorage()
    },
    // remove items
    removeItem(index) {
        if (this.items[index]) {
            delete this.items[index]
        }
        this.saveCartInLocalStorage()
    },
    emptyCart() {
        this.items = {}
        this.saveCartInLocalStorage()
    },

    // save in to localstorage
    saveCartInLocalStorage() {
        localStorage.setItem('wishlist', JSON.stringify(this.items))
    },
    // get data into localStorage
    getCartLocalStorage() {
        this.items = JSON.parse(localStorage.getItem('wishlist')) || {}
    },
})
wishlistStore.getCartLocalStorage()
export { wishlistStore }