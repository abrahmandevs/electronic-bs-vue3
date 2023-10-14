<script setup>
	import { defineProps } from "vue"

	const props = defineProps({
		slider: {
			type: [Array, Object],
			default: "",
		},
	})
</script>
<template>
	<div class="absolute inset-0 z-10 flex items-center justify-between gap-1">
		<button class="px-3 py-1 rounded text-black bg-white shrink-0 flex items-center justify-center" @click.stop="slider.slidePrev()">prev</button>
		<button class="px-3 py-1 rounded text-black bg-white shrink-0 flex items-center justify-center" @click.stop="slider.slideNext()">next</button>
	</div>
</template>
