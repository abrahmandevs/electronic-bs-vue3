<script setup>
	import { reactive } from "vue"
	import AppDashboardLayout from "../../../layouts/AppDashboardLayout.vue"
	import { authStore } from "../../../store/authStore"
	const auth = authStore
</script>
<template>
	<AppDashboardLayout>
		{{ apis.productList("https://dummyjson.com/products") }}
	</AppDashboardLayout>
</template>
