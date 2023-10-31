import { reactive } from "vue";
import router from '../router/router'
import { authStore } from './authStore'
import axios from "axios";
import { useToast } from "vue-toastification"

const toast = useToast()
// // const auth = authStore


const wishlist = reactive({
    items: [],

    isWishlisted(product) {
        return this.items.includes(product.id)
    },
    async fetchWishlist() {
        const apiUrl = 'http://localhost:8000/api/wishlist'
        const token = authStore.getUserToken()
        if (!token) {
            router.push('/login')
            return
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": 'application/json'
                },
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const wishlistData = await response.json()
            this.items = wishlistData.wishlist

        } catch (error) {
            console.log('error fetching wishlist', error)
        }
    },


    async toggleWishlist(product) {
        let apiUrl = 'http://localhost:8000/api/wishlist'
        let method = 'POST'
        const token = authStore.getUserToken()
        if (!token) {
            router.push('/login')
            return
        }

        let payload = {
            product_id: product.id
        }
        if (!this.isWishlisted(product)) {
            // add items to wishlist
            this.items.push(product.id)

        } else {
            // remove item from wishlist
            this.items = this.items.filter(id => id != product.id)
            apiUrl += `/${product.id}`
            method = 'DELETE'
            payload: { }
        }

        try {
            const response = await fetch(apiUrl, {
                method: method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                toast.error(`Network response was not ok`)
                throw new Error('Network response was not ok')
            }
            //const data = await response.json()
            // console.log(data);
        } catch (error) {
            console.log('error toggle wishlist error', error)
        }
    },
    wishlistStatus(product) {
        return this.isWishlisted(product) ? true : false
    },
    // remove items
    async removeItem(index) {
        try {

            const apiUrl = `http://localhost:8000/api/wishlist/${index}`
            const token = authStore.getUserToken()
            if (!token) {
                console.log('token nay');
                return
            }

            let payload = {
                product_id: index
            }
            const response = await fetch(apiUrl, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(payload),
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            this.items = this.items.filter(id => id != index)
        } catch (error) {
            console.log(error);
        }
    },
    async clearItems() {

        try {
            const apiUrl = `http://localhost:8000/api/wishlist`
            const token = authStore.getUserToken()
            if (!token) {
                console.log('token nay');
                return
            }
            // let payload = {
            //     product_id: index
            // }
            const response = await fetch(apiUrl, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": 'application/json'
                },
                // body: JSON.stringify(payload),
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            this.items = this.items.filter(id => id != index)
        } catch (error) {
            console.log(error);
        }
        this.items = []
    }

})

export { wishlist }