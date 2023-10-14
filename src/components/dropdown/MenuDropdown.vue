<script setup>
	import { ref, defineProps } from "vue"
	import { ChevronDownIcon } from "@heroicons/vue/24/outline"

	const props = defineProps({
		label: {
			type: String,
			default: "Button",
		},
		labelIcon: {
			type: Boolean,
			default: true,
		},
		position: {
			type: String,
			default: "right",
		},
		buttonClass: {
			type: String,
			default: "",
		},
		contentClass: {
			type: String,
			default: "overflow-hidden",
		},
	})

	const menu = ref(false)

	const manuToogel = () => {
		menu.value = !menu.value
	}
	const manuToogelClose = () => {
		menu.value = false
	}
</script>
<template>
	<div class="relative text-black dark:text-white">
		<button @click="manuToogel" class="flex items-center justify-center overflow-hidden" :class="props['labelIcon'] ? 'gap-x-2' + props['buttonClass'] : props['buttonClass']">
			<slot name="button">{{ props["label"] }}</slot>
			<ChevronDownIcon v-if="props['labelIcon']" class="h-5 w-5 transform transition-all duration-500" :class="menu ? 'rotate-180' : ''" />
		</button>
		<Transition mode="out-in" name="slide-fade" :duration="550">
			<div v-show="menu" class="absolute top-8 inset-0" :class="props['position'] && props['position'] == 'left' ? 'left-auto origin-top-left' : 'right-auto origin-top-right'">
				<div class="mt-1 bg-white dark:bg-black dark:text-white text-black w-52 rounded shadow" :class="props['contentClass'] ?? ''" role="none">
					<slot></slot>
				</div>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
	/* @import url("../../assets/css/scroll.css"); */
	.slide-fade-enter-from {
		transition: all 0.6s ease-out;
		transform: translateY(0px);
		opacity: 0;
	}
	.slide-fade-enter-active {
		transition: all 0.7s ease-out;
		transform: translateY(0px);
		opacity: 0;
	}

	.slide-fade-enter-to {
		transition: all 0.4s ease-out;
		transform: translateY(0px);

		opacity: 10;
	}

	.slide-fade-enter-from {
		transition: all 0.6s;
		transform: translateY(-20px);
		transform: skewX(-2deg);
		opacity: 0;
	}
	.slide-fade-leave-active {
		transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
		transform: translateY(0px);
		opacity: 10;
	}
	.slide-fade-leave-to {
		transform: translateY(30px);
		opacity: 0;
		transform: skewX(4deg);
	}
</style>
