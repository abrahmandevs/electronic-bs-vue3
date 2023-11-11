<script setup>
	import { ref } from "vue"
	import AppPublicLayout from "../../layouts/AppPublicLayout.vue"
	import { authStore } from "../../store/authStore"
	const auth = authStore

	const userName = ref("")
	const userEmail = ref("")
	const userPassword = ref("")
</script>
<template>
	<AppPublicLayout>
		<div class="row w-50 m-auto d-flex flex-col align-items-center justify-content-center py-4">
			<h2 class="fw-bold mb-5">Sign up now</h2>
			<form @submit.prevent="auth.userRegister(userName, userEmail, userPassword)">
				<div class="">
					<label class="form-label">Name</label>
					<input type="text" name="userName" v-model="userName" class="form-control box-shadow-none" placeholder="User Name" />
				</div>
				<div class="">
					<label class="form-label">Email</label>
					<input type="text" name="userEmail" v-model="userEmail" class="form-control box-shadow-none" placeholder="Email" />
				</div>
				<div class="">
					<label class="form-label">Password</label>
					<input type="password" name="userPassword" autocomplete="" v-model="userPassword" class="form-control box-shadow-none" placeholder="Password" />
				</div>

				<!-- Checkbox -->
				<div class="form-check d-flex align-items-center my-2">
					<input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked="" />
					<label class="form-check-label" for="form2Example33"> Remember me </label>
				</div>

				<!-- Submit button -->
				<button type="submit" class="my-3 w-100 btn btn-primary text-black py-1 box-shadow-none hover-bg-primary hover-text-light">Sign up</button>

				<!-- Register buttons -->
				<div class="text-center">
					<p>or sign up with:</p>
					<button type="button" class="btn btn-link btn-floating mx-1">
						<i class="fab fa-facebook-f"></i>
					</button>

					<button type="button" class="btn btn-link btn-floating mx-1">
						<i class="fab fa-google"></i>
					</button>

					<button type="button" class="btn btn-link btn-floating mx-1">
						<i class="fab fa-twitter"></i>
					</button>

					<button type="button" class="btn btn-link btn-floating mx-1">
						<i class="fab fa-github"></i>
					</button>
				</div>
			</form>
		</div>
	</AppPublicLayout>
</template>
