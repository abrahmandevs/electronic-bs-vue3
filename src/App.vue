<script setup>
	import { authStore } from "./store/authStore"
	const auth = authStore
</script>

<template>
	<div class="font-rubik font-ligh">
		<RouterView />
	</div>
</template>
<style>
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Martian+Mono:wght@300&family=Open+Sans&family=Raleway&family=Roboto:wght@300;400&family=Rubik:wght@300;400&display=swap");

	.font-inter {
		font-family: "Inter", sans-serif;
	}
	.font-martian-mono {
		font-family: "Martian Mono", monospace;
	}
	.font-openSans {
		font-family: "Open Sans", sans-serif;
	}
	.font-railway {
		font-family: "Raleway", sans-serif;
	}
	.font-roboto {
		font-family: "Roboto", sans-serif;
	}
	.font-rubik {
		font-family: "Rubik", sans-serif;
	}
</style>

