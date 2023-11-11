<script setup>
	import { defineProps } from "vue"
	import { ChevronRightIcon, HomeIcon } from "@heroicons/vue/20/solid"
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
		<div class="d-flex align-items-center gap-x-1 text-xs">
			<div v-for="(path, key, index) in fullPath" class="shrink-0 d-flex align-items-center" :key="index">
				<router-link :to="{ name: path['route'] }" class="capitalize font-medium h6 mb-0" :class="path == $route.name ? activeClass : pathClass">
					<HomeIcon v-if="'home' == path['route']" class="h-4 w-auto" :class="iconClass" />
					<template v-if="'home' != path['route']">{{ path["text"] }} </template>
				</router-link>
				<ChevronRightIcon v-if="key !== fullPath.length - 1" class="h-4 w-auto" :class="iconClass" />
			</div>
		</div>
	</div>
</template>
