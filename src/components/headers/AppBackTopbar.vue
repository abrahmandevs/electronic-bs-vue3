<script setup>
	import { ref } from "vue"
	import { authStore } from "../../store/authStore"
	const auth = authStore

	import { AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, BellAlertIcon, Cog8ToothIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/vue/24/outline"
	import { menuConfigStore } from "../../store/menuConfigStore"

	const menuConfig = menuConfigStore

	import MenuDropdown from "../dropdown/MenuDropdown.vue"
</script>
<template>
	<div class="mx-auto px-3 sm:px-6 bg-[#262d33] w-full h-[50px] flex items-center justify-betwee shadow" @click.stop="manuToogelClose">
		<div class="w-[244px] sm:w-[230px] shrink-0 flex items-center justify-between overflow-hidden">
			<RouterLink to="/">
				<img class="h-full w-full aspect-[3/2]" src="../../assets/vue.svg" alt="" />
			</RouterLink>
			<button type="button" @click="menuConfig.menuToggle">
				<AdjustmentsVerticalIcon class="h-7 w-7" />
			</button>
		</div>
		<div class="grow flex items-center gap-x-2 justify-end">
			<!-- Notifications -->
			<form class="relative bg-gray-900/80 h-8 px-4 rounded-full overflow-hidden flex items-center">
				<button type="button" class="absolute inset-0 left-auto right-2 block text-sm font-medium leading-6 text-gray-900">
					<MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
				</button>
				<input
					id="search"
					name="search"
					type="text"
					required
					class="focus:w-64 mb-0.5 block h-full w-full border-0 bg-transparent text-white sm:text-sm font-light ring-transparent focus:ring-0 focus:outline-0 focus:right- placeholder:text-gray-400 placeholder:font-medium placeholder:text-xs transition-all duration-700"
					placeholder="Quick search..."
				/>
			</form>

			<MenuDropdown position="left" :labelIcon="false" class="text-white" buttonClass="hover:bg-gray-700 h-8 w-8 rounded-full">
				<template #button>
					<BellAlertIcon class="h-6 w-6" />
				</template>
				<div class="divide-y divide-gray-300 max-h-80 overflow-y-auto transition-all duration-300">
					<h3 class="text-center py-3 text-sm text-indigo-900">4 New Messages</h3>
					<div class="relative flex items-center gap-x-4 overflow-hidden p-4">
						<img v-if="auth.isAuthenticated" class="h-11 w-11 rounded-full object-cover" :src="auth.user.image" alt="" />
						<div class="space-y-2">
							<h2 class="text-blue-900 text-sm">Michelle Bilodeau</h2>
							<p class="text-xs text-gray-500">Nam pretium turpis et arcu. Duis arcu tortor</p>
							<p class="text-xs text-gray-500">5m ago</p>
						</div>
						<a href="#" class="absolute h-full w-full"></a>
					</div>
					<div class="relative flex items-center gap-x-4 overflow-hidden p-4">
						<img v-if="auth.isAuthenticated" class="h-11 w-11 rounded-full object-cover" :src="auth.user.image" alt="" />
						<div class="space-y-2">
							<h2 class="text-blue-900 text-sm">Kathie Burton</h2>
							<p class="text-xs text-gray-500">Nam pretium turpis et arcu. Duis arcu tortor</p>
							<p class="text-xs text-gray-500">30m ago</p>
						</div>
						<a href="#" class="absolute h-full w-full"></a>
					</div>
					<div class="relative flex items-center gap-x-4 overflow-hidden p-4">
						<img v-if="auth.isAuthenticated" class="h-11 w-11 rounded-full object-cover" :src="auth.user.image" alt="" />
						<div class="space-y-2">
							<h2 class="text-blue-900 text-sm">Alexander Groves</h2>
							<p class="text-xs text-gray-500">Nam pretium turpis et arcu. Duis arcu tortor</p>
							<p class="text-xs text-gray-500">2h ago</p>
						</div>
						<a href="#" class="absolute h-full w-full"></a>
					</div>
					<div class="relative flex items-center gap-x-4 overflow-hidden p-4">
						<img v-if="auth.isAuthenticated" class="h-11 w-11 rounded-full object-cover" :src="auth.user.image" alt="" />
						<div class="space-y-2">
							<h2 class="text-blue-900 text-sm">Disy Seger</h2>
							<p class="text-xs text-gray-500">Nam pretium turpis et arcu. Duis arcu tortor</p>
							<p class="text-xs text-gray-500">5h ago</p>
						</div>
						<a href="#" class="absolute h-full w-full"></a>
					</div>
					<div>
						<button class="text-xs text-gray-600 mx-auto block py-2">Show all messages</button>
					</div>
				</div>
			</MenuDropdown>
			<!-- settings -->
			<MenuDropdown position="left" :labelIcon="false" class="text-white" buttonClass="hover:bg-gray-700 h-8 w-8 rounded-full">
				<template #button>
					<Cog8ToothIcon class="h-6 w-6" />
				</template>
				<ul class="g-lime-600 mt-2">
					<li>link 1</li>
					<li>link 2</li>
					<li>link 3</li>
					<li>link 4</li>
				</ul>
			</MenuDropdown>
			<!-- settings profile -->
			<MenuDropdown position="left" :labelIcon="false" class="text-white" buttonClass="hover:bg-gray-700 h-8 w-8 rounded-full">
				<template #button>
					<UserIcon v-if="!auth.isAuthenticated" class="block p-1.5" aria-hidden="true" />
					<img v-if="auth.isAuthenticated" class="block object-cover" :src="auth.user.image" alt="" />
				</template>
				<div class="divide-y divide-gray-300">
					<div class="py-2" v-if="!auth.isAuthenticated">
						<router-link to="/login" class="block px-3 py-2 font-semibold text-black hover:text-gray-500 transition-all duration-300">login</router-link>
					</div>
					<div class="" v-if="auth.isAuthenticated">
						<router-link v-if="auth.roleCecker('admin')" to="/" class="block px-3 py-1.5 text-black hover:text-gray-500 transition-all duration-300">Profile</router-link>

						<router-link v-if="auth.roleCecker('admin')" to="/" class="block px-3 py-1.5 text-black hover:text-gray-500 transition-all duration-300">Settings</router-link>

						<router-link v-if="auth.roleCecker('admin')" to="/" class="block px-3 py-1.5 text-black hover:text-gray-500 transition-all duration-300">Analisys</router-link>
					</div>

					<div class="" v-if="auth.isAuthenticated">
						<button @click="auth.logout()" type="button" name="logout_submition" class="block px-3 py-2 text-black hover:text-gray-500 transition-all duration-300">
							<i class="fas fa-sign-out-alt text-gray-700"></i>
							<h4 class="text-gray-600 text-">Sign out</h4>
						</button>
					</div>
				</div>
			</MenuDropdown>
		</div>
	</div>
</template>

<style scoped>
	@import url("../../assets/css/scroll.css");
	.slide-fade-enter-from {
		transition: all 0.6s ease-out;
		transform: translateY(0px);
		opacity: 0;
	}
	.slide-fade-enter-active {
		transition: all 0.7s ease-out;
		transform: translateY(0px);
		opacity: 0;
	}

	.slide-fade-enter-to {
		transition: all 0.4s ease-out;
		transform: translateY(0px);

		opacity: 10;
	}

	.slide-fade-enter-from {
		transition: all 0.6s;
		transform: translateY(-20px);
		transform: skewX(-2deg);
		opacity: 0;
	}
	.slide-fade-leave-active {
		transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
		transform: translateY(0px);
		opacity: 10;
	}
	.slide-fade-leave-to {
		transform: translateY(30px);
		opacity: 0;
		transform: skewX(4deg);
	}
</style>
