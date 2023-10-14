<script setup>
	import { ref, reactive, defineProps } from "vue"
	import { accordionStore } from "../../store/accordionStore"
	const accordion = accordionStore

	const props = defineProps({
		itemKey: {
			type: [String, Boolean, Number],
			default: "",
		},
		active: {
			type: [String, Boolean, Number],
			default: "",
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
	const keys = ref(JSON.stringify(props["itemKey"]).replace(" ", "").replace('"', "").replace('"', ""))
	const activePanel = ref(JSON.stringify(props["active"]).replace('"', "").replace('"', ""))

	const isShow = ref(null)
	const isActive = ref(null)

	isActive.value ? (isShow.value = keys) : ""

	function toggle(role) {
		isShow.value !== role ? (isShow.value = role) : (isShow.value = null)
	}
</script>
<template>
	<div class="transition hover:bg-indigo-500">
		<!-- header -->
		<div @click="toggle(keys)" class="cursor-pointer transition flex space-x-5 px-5 items-center h-16" :class="isActive ? 'bg-red-400 font-bold bg-opacity-20' : 'bg-opacity-10'">
			<slot name="header">
				<h3>{{ isActive }}</h3>
			</slot>
		</div>
		<!-- Content -->
		<div class="" v-show="isShow == keys">
			<div>
				<slot name="body"> {{ isShow }} {{ isActive }} </slot>
			</div>
		</div>
	</div>
	<!--     <div class="transition hover:bg-indigo-500">
		
		<div @click="accordion.toggle(keys)" class="cursor-pointer transition flex space-x-5 px-5 items-center h-16" :class="active ? 'bg-red-400 font-bold bg-opacity-20' : 'bg-opacity-10'">
			<slot name="header">
				<h3>{{ accordion.isActive }}</h3>
			</slot>
		</div>
		
		<div class="" v-show="accordion.isShow == keys">
			<div>
				<slot name="body"> {{ accordion.isShow }} {{ accordion.isActive }} </slot>
			</div>
		</div>
	</div> -->
</template>
