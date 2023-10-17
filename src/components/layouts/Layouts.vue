<script setup>
	import { menuConfigStore } from "../../store/menuConfigStore"
	import AppBackTopbar from "../headers/AppBackTopbar.vue"
	import AppSidebar from "../sidebers/AppSidebar.vue"
	import Breadcrumb from "../breadcrumb/Breadcrumb.vue"

	const menuConfig = menuConfigStore
</script>
<template>
	<div id="" class="flex flex-col bg-[#161a1d] text-white h-screen">
		<div class="grow fixed w-full z-[1000]">
			<AppBackTopbar />
		</div>
		<div class="grow transition-all duration-700 relative" :class="menuConfig.activeMenu == true ? 'w-full' : 'ml-64'">
			<!-- Sidebar Page Content -->
			<nav class="transition-all duration-700" id="mainsidebar">
				<div class="bg-[#262d33] fixed inset-0 pt-[50px] z-[999] flex flex-col w-64 h-full transition-all duration-700 shadow" :class="menuConfig.activeMenu == true ? '-ml-64 lg:-ml-64' : 'ml-0'">
					<AppSidebar />
				</div>
			</nav>
			<!-- Default components loder under the slot -->
			<main class="pt-10 bg-[#161a1d] h-max">
				<section v-if="false == true" class="shadow">
					<div class="h-12 shadow px-6 py-2.5 font-semibold text-lg leading-0">{{ pagetitle }}</div>
				</section>
				<div class="h-full mx-auto px-3 sm:px-6 py-6 lg:px-8 space-y-5">
					<Breadcrumb />
					<div>
						<slot> </slot>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>
<style scoped>
	@import "../../assets/css/tailwind.css";
</style>
