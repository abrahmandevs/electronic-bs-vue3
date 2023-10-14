<script setup>
	import { ref, reactive, defineProps } from "vue"
	import { accordionStore } from "../../store/accordionStore"
	const accordion = accordionStore

	const props = defineProps({
		itemKey: {
			type: [String, Number],
			default: "defaultKey",
		},
		active: {
			type: [String, Boolean, Number],
			default: "",
		},
		buttonClass: {
			type: String,
			default: "bg-bg-gray-500 rounded",
		},
		contentClass: {
			type: String,
			default: "overflow-hidden",
		},
	})
	const keys = ref(JSON.stringify(props["itemKey"]).replace(" ", "").replace('"', "").replace('"', ""))
	const activePanel = ref(JSON.stringify(props["active"]).replace(" ", "").replace('"', "").replace('"', ""))

	if (keys.value == 0) {
		keys.value = "defaultKey"
	}

	if (activePanel.value > 0 || activePanel.value !== null) {
		accordion.isActive = activePanel.value
	}
	// console.log(activePanel.value)
	// console.log(localStorage.getItem("panel"))
	// onBeforeMount(() => {
	// 	accordion.isActive = activePanel.value ?? null
	// })
	// if (activePanel.value) {
	// 	accordion.isActive = activePanel.value ?? null
	// }

	accordion.status(keys.value, activePanel.value)
	// const isShow = ref(null)
	// const isActive = ref(null)
	// isActive.value ? (isShow.value = keys) : ""
	// function accordionSingleItem(role) {
	// 	isShow.value !== role ? (isShow.value = role)((isActive.value = true)) : (isShow.value = null)
	// }
</script>
<template>
	<div class="w-full">
		<!-- header -->
		<div ref="high" @click="accordion.toggle(keys)" class="hover:bg-[#161a1d]/50 bg-[#161a1d]/80 transition-all duration-500 cursor-pointer flex items-center justify-between h-8 px-2 rounded-md" :class="false ? 'hover:bg-opacity-10 bg-green-500/90 ' + buttonClass : ''">
			<slot name="header">
				<h3>{{ accordion.isActive }}</h3>
			</slot>
		</div>
		<!-- Content -->
		<Transition mode="out-in" name="slide-fade" :duration="550">
			<div ref="hight" class="overflow-hidden" v-show="accordion.isShow == keys">
				<div class="text-sm p-2" :class="contentClass">
					<slot name="body"> {{ accordion.isShow }} {{ accordion.isActive }} </slot>
				</div>
			</div>
		</Transition>
	</div>
</template>
