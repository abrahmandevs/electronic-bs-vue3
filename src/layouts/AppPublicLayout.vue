<script setup>
	import Breadcrumb from "../components/breadcrumb/Breadcrumb.vue"
	import AppPublicNavbar from "./AppPublicNavbar.vue"
	import AppPublicFooter from "./AppPublicFooter.vue"
	import "bootstrap/dist/js/bootstrap.bundle"
</script>
<template>
	<div>
		<header>
			<AppPublicNavbar />
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
			<AppPublicFooter />
		</footer>
	</div>
</template>
