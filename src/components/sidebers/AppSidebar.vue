<script setup>
	import { RouterLink } from "vue-router"
	import Accordion from "../accordion/Accordion.vue"
	import AccordionToggle from "../accordion/AccordionToggle.vue"
</script>
<template>
	<div class="w-full mx-auto px-3 sm:pl-5 text-white space-y-1 overflow-y-auto">
		<Accordion class="block w-full" itemKey="d2" :active="true">
			<template #header> Product </template>
			<template #body>
				<router-link :to="{ name: 'product' }" class="block px-2 py-1 hover:text-orange-100 transition-all duration-300">Product</router-link>
				<router-link :to="{ name: 'brand' }" class="block px-2 py-1 hover:text-orange-100 transition-all duration-300">Brand</router-link>
				<router-link :to="{ name: 'unit' }" class="block px-2 py-1 hover:text-orange-100 transition-all duration-300">Unit</router-link>
			</template>
		</Accordion>
		<Accordion class="block w-full" itemKey="33" :active="false">
			<template #header> Product </template>
			<template #body>
				<router-link :to="{ name: 'product' }" class="block px-2 py-1 hover:text-orange-100 transition-all duration-300">Product</router-link>
				<router-link :to="{ name: 'brand' }" class="block px-2 py-1 hover:text-orange-100 transition-all duration-300">Brand</router-link>
				<router-link :to="{ name: 'unit' }" class="block px-2 py-1 hover:text-orange-100 transition-all duration-300">Unit</router-link>
			</template>
		</Accordion>
		<Accordion class="block w-full" itemKey="chart" :active="false">
			<template #header> Components </template>
			<template #body>
				<router-link :to="{ name: 'chart' }" class="block px-2 py-1 hover:text-orange-100 transition-all duration-300">Chart Js</router-link>
				<router-link :to="{ name: 'circleProgress' }" class="block px-2 py-1 hover:text-orange-100 transition-all duration-300">Circle Progress</router-link>
				<router-link :to="{ name: 'dataTable' }" class="block px-2 py-1 hover:text-orange-100 transition-all duration-300">DataTable</router-link>
			</template>
		</Accordion>
	</div>
	<div>
		<AccordionToggle class="block w-full" itemKey="33" active="b">
			<template #header> headekreal </template>
			<template #body> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis atque corporis, incidunt obcaecati officiis expedita vel suscipit fuga nostrum. </template>
		</AccordionToggle>
		<AccordionToggle class="block w-full" itemKey="33" active="a">
			<template #header> headekreal </template>
			<template #body> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis atque corporis, incidunt obcaecati officiis expedita vel suscipit fuga nostrum. </template>
		</AccordionToggle>
	</div>
</template>

<style scoped>
	@import url("../../assets/css/scroll.css");
</style>
