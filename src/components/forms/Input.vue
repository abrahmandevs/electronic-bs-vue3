<script setup>
	import { ref, reactive, defineProps } from "vue"
	// const props = defineProps({
	// 	label: {
	// 		type: String,
	// 		default: "Input Lable",
	// 	},
	// 	labelClass: {
	// 		type: String,
	// 		default: "Input Lable",
	// 	},
	// 	type: {
	// 		type: String,
	// 		default: "text",
	// 	},
	// 	id: {
	// 		type: String,
	// 		default: "",
	// 	},
	// 	name: {
	// 		type: String,
	// 		default: "",
	// 	},
	// 	placeholder: {
	// 		type: String,
	// 		default: "input value",
	// 	},
	// 	required: {
	// 		type: String,
	// 		default: "",
	// 	},
	// 	disabled: {
	// 		type: String,
	// 		default: "",
	// 	},
	// 	inputClass: {
	// 		type: String,
	// 		default: "",
	// 	},
	// })
</script>
<template>
	<div>
		<!-- <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900" :class="labelClass">{{ label }}</label> -->
		<div class="mt-2.5">
			<!-- <input
				:type="type"
				:name="name"
				class="form-input block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-0"
				:class="inputClass"
				:placeholder="placeholder"
			/> -->
			<input class="form-input block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-0" />
		</div>
	</div>
</template>
