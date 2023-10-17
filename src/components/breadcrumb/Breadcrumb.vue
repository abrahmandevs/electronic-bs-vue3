<script setup>
	import { reactive, ref, defineProps } from "vue"
	import { ChevronRightIcon } from "@heroicons/vue/24/outline"
	import { useRoute } from "vue-router"
	const route = useRoute()
	const fullPath = route.meta.breadcrumb
	const pathTitle = fullPath.slice(-1)
	// const pathTitle = fullPath[fullPath.length - 1]

	const props = defineProps({
		labelClass: {
			type: String,
			default: "",
		},
		pathClass: {
			type: String,
			default: "",
		},
		activeClass: {
			type: String,
			default: "text-gray-600",
		},
		iconClass: {
			type: String,
			default: "",
		},
	})
</script>
<template>
	<div class="space-y-0.5">
		<h1 class="text-xl font-medium capitalize" :class="labelClass">{{ pathTitle[0].text }}</h1>
		<div class="flex items-center gap-x-1 text-xs">
			<template v-for="(path, key, index) in fullPath">
				<router-link :to="{ name: path['route'] }" class="capitalize font-medium" :class="path == $route.name ? activeClass : pathClass"> {{ path["text"] }}</router-link>
				<ChevronRightIcon v-if="key !== fullPath.length - 1" class="h-3.5 w-auto" :class="iconClass" />
			</template>
		</div>
	</div>
</template>
