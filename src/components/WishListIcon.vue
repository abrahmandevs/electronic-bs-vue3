<script setup>
	import { defineProps } from "vue"
	import { wishlist } from "../store/wishlistStore"
	import { HeartIcon, ScaleIcon } from "@heroicons/vue/24/outline"

	const porps = defineProps(["product"])
</script>

<template>
	<button @click="wishlist.toggleWishlist(porps.product)" class="btn text-light p-1 border-0 rounded-0" :class="wishlist.wishlistStatus(product) ? 'bg-success' : 'bg-secondary'" style="height: 30px; width: 30px">
		<HeartIcon class="w-full h-full" />
	</button>
</template>

<style scoped></style>
