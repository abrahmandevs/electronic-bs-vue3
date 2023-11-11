<script setup>
	import { authStore } from "./store/authStore"
	const auth = authStore
</script>

<template>
	<div>
		<RouterView />
	</div>
</template>
<style>
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Martian+Mono:wght@300&family=Open+Sans&family=Raleway&family=Roboto:wght@300;400&family=Rubik:wght@300;400&display=swap");

	@import url("https://fonts.googleapis.com/css2?family=Oxygen&family=Poppins&family=Raleway&display=swap");
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "Oxygen", sans-serif;
	}
	body {
		font-family: "Poppins", sans-serif;
	}
	p {
		font-family: "Raleway", sans-serif;
	}
</style>
