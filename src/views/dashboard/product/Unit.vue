<script setup>
	import { reactive } from "vue"
	import Layouts from "../../../components/layouts/Layouts.vue"
	import { authStore } from "../../../store/authStore"
	const auth = authStore
</script>
<template>
	<Layouts>
		{{ apis.productList("https://dummyjson.com/products") }}
	</Layouts>
</template>
