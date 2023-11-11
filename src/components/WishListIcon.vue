<script setup>
	import { defineProps } from "vue"
	import { wishlist } from "../store/wishlistStore"
	import { authStore } from "../store/authStore"
	import { HeartIcon, ScaleIcon } from "@heroicons/vue/24/outline"

	const auth = authStore

	const porps = defineProps(["product"])
</script>

<template>
	<button @click="wishlist.toggleWishlist(porps.product)" class="btn text-light p-1 border-0 rounded-0" :class="auth.isAuthenticated && wishlist.wishlistStatus(product) ? 'bg-success' : 'bg-secondary'" style="height: 30px; width: 30px">
		<HeartIcon class="w-full h-full" />
	</button>
</template>

<style scoped></style>
