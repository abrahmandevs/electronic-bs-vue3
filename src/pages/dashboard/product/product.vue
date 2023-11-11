<script setup>
	import { reactive, ref } from "vue"
	import AppDashboardLayout from "../../../layouts/AppDashboardLayout.vue"

	import { authStore } from "../../../store/authStore"
	const auth = authStore

	import { PlusSmallIcon } from "@heroicons/vue/24/outline"
	import { useRoute } from "vue-router"
	const route = useRoute()

	import { dialog } from "../../../store/dailogStore"
	const inputForm = reactive([
		{ name: "name", label: "Product Name", type: "text", placeholder: "Product Name", required: "required" },
		// { name: "icon", label: "Product Icon", type: "file", placeholder: "Icon", required: "" },
		// { name: "image", label: "Product Image", type: "file", placeholder: "Image ", required: "" },
	])

	import { createToaster } from "@meforma/vue-toaster"

	const toaster = createToaster({
		/* options */
	})

	const name = ref("jhggugugy")
	const icon = ref("")
	const image = ref("")

	const errors = reactive({})
	function getting(name) {
		if (name.length == 0) {
			toaster.show(`Something want Wrong`, { type: "error" })
			errors["name"] = "invalid name"
		}

		// if (errors.length > 0) {
		// 	dialog.openModal("product")
		// 	console.log("open koto")
		// } else {
		// 	dialog.closeModal()
		// }
	}
	let str = "RahmanRRobin"
</script>
<template>
	<AppDashboardLayout>
		<div class="space-y-1">
			<button type="button" @click="dialog.openModal('product')" class="flex items-center justify-center p-0.5 w-7 h-7 rounded bg-green-600">
				<PlusSmallIcon />
			</button>
			<Dialog name="product">
				{{ name }}
				<form @submit.prevent="getting(name)" class="space-y-3">
					<!-- <form @submit.prevent="auth.authenticate(name)" class="space-y-3"> -->
					<div v-for="(input, key, index) in inputForm" :key="index">
						<label :for="input['name']" class="block text-sm font-medium text-gray-900">{{ input["label"] }}</label>
						{{ key }}
						<div class="mt-1">
							<input :id="input['name']" :name="input['name']" :type="input['type']" v-model="name" :placeholder="input['placeholder']" value="" class="block w-full rounded-md p-1.5 text-black shadow shadow-cyan-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 sm:text-sm" />
						</div>
					</div>
					<div>
						<button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
					</div>
				</form>
			</Dialog>
		</div>

		<div>
			<!-- replace(/([a-z])([A-Z])/g, "$1 $2") -->
			{{ str.replace(/([a-z])([A-Z])/g, "$1 $2") }}
		</div>
	</AppDashboardLayout>
</template>
