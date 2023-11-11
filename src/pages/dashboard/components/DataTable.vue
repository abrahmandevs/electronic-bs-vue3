<script setup>
	import { ref, reactive, computed, onMounted } from "vue"

	import AppDashboardLayout from "../../../layouts/AppDashboardLayout.vue"

	// dataTable
	import Vue3EasyDataTable from "vue3-easy-data-table"
	import "vue3-easy-data-table/dist/style.css"
	import axios from "axios"

	const headers = ref([
		{ text: "Title", value: "title" },
		{ text: "Description", value: "description" },
		{ text: "Price", value: "price" },
		{ text: "Rating", value: "rating" },
		{ text: "Stock", value: "stock" },
		{ text: "Brand", value: "brand" },
		{ text: "Category", value: "category" },
	])

	const items = ref([])

	const searchField = ref("")
	const searchValue = ref("")
	const itemsSelected = ref([])
	const dataTable = ref()

	// rows per page related
	const rowsPerPageOptions = computed(() => dataTable.value?.rowsPerPageOptions)
	const rowsPerPageActiveOption = computed(() => dataTable.value?.rowsPerPageActiveOption)

	products("https://dummyjson.com/product")
	async function products(url) {
		let res = await axios.get(url)
		if (res.status == 200) {
			return (items.value = res.data["products"])
		}
	}
</script>
<template>
	<AppDashboardLayout>
		<span>search field:</span>
		<select v-model="searchField" class="bg-slate-900">
			<option>player</option>
			<option>team</option>
		</select>
		<span>search value: </span>
		<input type="text" v-model="searchValue" class="bg-slate-700" />

		<Vue3EasyDataTable show-index @click-row="showRow" :headers="headers" :items="items" :search-field="searchField" :search-value="searchValue" v-model:items-selected="itemsSelected" #empty-message />
		<div id="row-clicked"></div>
		<!-- <a href="https://google.com">nothing here</a> -->
		<!-- 
		<option v-for="item in rowsPerPageOptions" :key="item" :selected="item === rowsPerPageActiveOption" :value="item">{{ item }} rows per page {{ item }}</option> -->
	</AppDashboardLayout>
</template>
