<script setup>
	import { ref } from "vue"
	import AppPublicLayout from "../../layouts/AppPublicLayout.vue"
	import { authStore } from "../../store/authStore"
	const auth = authStore

	const userEmail = ref("kminchelle") //kminchelle , john@doe.com
	const userPassword = ref("0lelplR") //0lelplR, 12345
</script>

<template>
	<AppPublicLayout>
		<div class="w-50 m-auto d-flex flex-col align-items-center justify-content-center py-4">
			<!-- login form-->
			<form @submit.prevent="auth.authenticate(userEmail, userPassword)" class="row m-auto">
				<div class="">
					<label class="form-label">Email</label>
					<input type="text" name="userEmail" v-model="userEmail" class="form-control box-shadow-none" placeholder="Email" />
				</div>
				<div class="">
					<label class="form-label">Password</label>
					<input type="password" name="userPassword" autocomplete="" v-model="userPassword" class="form-control box-shadow-none" placeholder="Password" />
				</div>
				<div class="d-flex flex-column py-3 gap-3">
					<button class="w-100 btn btn-primary py-1 box-shadow-none hover-bg-primary hover-text-light">Login</button>
					<router-link :to="{ name: 'register' }" class="w-100 text-danger">Click here for reginster</router-link>
				</div>
			</form>
		</div>
	</AppPublicLayout>
</template>

<style scoped></style>
