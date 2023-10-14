<script setup>
	import { reactive, ref, defineProps } from "vue"

	import { ChevronRightIcon } from "@heroicons/vue/24/outline"
	import { useRoute } from "vue-router"
	const route = useRoute()

	const fullPath = ref(route.fullPath.replace("/", "").split("/"))

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
	/* ###
    Add Space between lowercase and uppercase letters in a string txt.replace(/([a-z])([A-Z])/g, "$1 $2") input: ARRahman output: A RRahman
    or
    txt.replace(/([A-Z])/g, ' $&') input: ARRahman output: A R Rahman
    [A-Z] means match only uppercase  
    letter from A-z 
    " $&" means put space first and then
    ### */
	const addSpaces = (txt) => txt.replace(/([a-z])([A-Z])/g, "$1 $2")
</script>
<template>
	<div class="space-y-0.5">
		<h1 class="text-xl font-medium capitalize" :class="labelClass">{{ addSpaces($route.name) }}</h1>
		<div class="flex items-center gap-x-1 text-xs">
			<template v-for="(path, key, index) in fullPath">
				<router-link :to="{ name: path }" class="capitalize font-medium" :class="path == $route.name ? activeClass : pathClass"> {{ addSpaces(path) }}</router-link>
				<ChevronRightIcon v-if="key !== fullPath.length - 1" class="h-3.5 w-auto" :class="iconClass" />
			</template>
		</div>
	</div>
</template>
