<script setup>
	import { ref } from "vue"

	import ToggleButton from "primevue/togglebutton"
	import { themesStore } from "../store/themesStore"
	import { usePrimeVue } from "primevue/config"
	const themes = themesStore
	const PrimeVue = usePrimeVue()

	const checked = ref(false)

	let currentTheme = "lara-light-teal"
	const toggleTheme = () => {
		// What is next theme? (2nd parameter)
		let nextTheme = ""
		if (currentTheme === "lara-light-teal") nextTheme = "lara-dark-teal"
		else if (currentTheme === "lara-dark-teal") nextTheme = "lara-light-teal"

		// 1. Current theme name
		// 2. Next theme name
		// 3. id of <link>, what reference to where set theme css file --> fix, single id to <link>
		PrimeVue.changeTheme(currentTheme, nextTheme, "theme-link", () => {
			console.log("theme changed")
		})
		// So current theme now:
		currentTheme = nextTheme
	}
</script>
<template>
	<div>
		<ToggleButton @change="toggleTheme" v-model="checked" onLabel="Dark" offLabel="Light" class="w-16rem" />
		<!-- <ToggleButton @change="themes.toggleTheme('lara-light-teal', 'lara-dark-teal', PrimeVue)" v-model="checked" onLabel="Dark" offLabel="Light" class="w-16rem" /> -->
	</div>
</template>

