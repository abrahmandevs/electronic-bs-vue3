import { reactive } from "vue";
import { authStore } from "./authStore";
import { useToast } from "vue-toastification"

const toast = useToast()

const order = reactive({
    orders: [],
    async fetchOrders() {
        let apiUrl = 'http://127.0.0.1:8000/api/orders'

        const token = authStore.getUserToken()
        if (!token) {
            router.push('/login')
            return
        }

        try {
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": 'application/json'
                },
            })
            if (!response.ok) {
                toast.error(`Network response was not ok`)
                throw new Error('Network response was not ok')
            }
            const ordersData = await response.json()
            this.orders = ordersData.map(order => ({
                id: order.id,
                userId: order.user_id,
                showProducts: false,
                totalAmount: order.total_amount,
                products: order.products.map(porductInfo => ({
                    id: porductInfo.id,
                    title: porductInfo.title,
                    price: porductInfo.price,
                    quantity: porductInfo.pivot.quantity,
                    totalPrice: porductInfo.pivot.price,
                })),
            }))
        } catch (error) {
            console.log('error fetching wishlist', error)
        }
    },
    async placeOrder(totalPrice, items) {
        const apiUrl = 'http://127.0.0.1:8000/api/orders'
        const token = authStore.getUserToken()
        if (!token) {
            router.push('/login')
            return
        }

        // format data
        const products = Object.values(items).map(item => ({
            product_id: item.product.id,
            quantity: item.quantity,
            price: item.product.price
        }))
        const payload = {
            total_amount: totalPrice,
            products: products
        }
        // console.log(payload);
        // create order
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
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
            toast.success(`Order Place Successfull`)
        } catch (error) {
            console.error('Error placing order:', error);
        }
    }
})
export { order }
