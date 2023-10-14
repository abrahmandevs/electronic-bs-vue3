<script setup>
	import { reactive } from "vue"
	import { authStore } from "../store/authStore"
	const auth = authStore
</script>
<template>
	<div class="h-screen">
		<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div class="text-center">
				<h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Welcome {{ auth.isAuthenticated ? auth.user.username : "" }}</h1>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<router-link to="/dashboard" v-if="auth.isAuthenticated" href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Go back Dashboard</router-link
					>
					<router-link to="/login" v-if="!auth.isAuthenticated" href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Login</router-link
					>
					<a href="#" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
				</div>
			</div>
		</main>
	</div>
</template>
