<script setup>
	import "bootstrap"
	import Breadcrumb from "../breadcrumb/Breadcrumb.vue"
	import TopHeader from "./header/TopHeader.vue"
	import Footer from "./footer/Footer.vue"
</script>
<template>
	<div>
		<header>
			<TopHeader />
		</header>

		<!-- Default components loder under the slot -->
		<main class="pt-28 h-max px-3 sm:px-6 py-6 lg:px-8">
			<!-- <div class="h-full mx-auto px-3 sm:px-6 py-6 lg:px-8 space-y-5"> -->
			<div class="mt-5">
				<Breadcrumb v-if="$route.name != 'home'" class="container-lg" />
				<slot> </slot>
			</div>
			<!-- </div> -->
		</main>
		<footer>
			<Footer />
		</footer>
	</div>
</template>
<style>
	@import "bootstrap/dist/css/bootstrap.min.css";
	@import "../../assets/css/bootstrap-extensions.css";
	@import "../../assets/css/global.css";
	@import "../../assets/css/style.css";
</style>

