<script setup>
	import { ref, reactive } from "vue"
	import { menuConfigStore } from "../store/menuConfigStore"
	import OverlayPanel from "primevue/overlaypanel"
	import TieredMenu from "primevue/tieredmenu"
	import Button from "primevue/button"

	const menuConfig = menuConfigStore

	const op = ref()
	const toggle = (event) => {
		op.value.toggle(event)
	}

	// Notification

	const menu = ref()
	const items = ref([
		{
			label: "5 Notification",
			icon: "pi pi-fw pi-file",
			style: "bg-blue-700",
		},
		{
			label: "5 Notification",
			icon: "pi pi-fw pi-file",
		},
		{
			label: "5 Notification",
			icon: "pi pi-fw pi-file",
		},
	])

	const toggleMenu = (event) => {
		menu.value.toggle(event)
	}

	const userMenu = ref()
	const userMenuItems = ref([
		{
			label: "5 Notification",
			icon: "pi pi-fw pi-file",
			style: "bg-blue-700",
		},
		{
			label: "5 Notification",
			icon: "pi pi-fw pi-file",
		},
		{
			label: "5 Notification",
			icon: "pi pi-fw pi-file",
		},
	])

	const userMenuToggle = (event) => {
		userMenu.value.toggle(event)
	}

	// NavBar
</script>
<template>
	<nav v-if="false == true" class="w-full px-6 py-3 fixed fixed-top z-50 flex items-center justify-between transition-all duration-700 bg-[#2d353c]">
		<div class="flex items-center gap-x-4">
			<button type="button" class="text-gray-200 hover:text-white focus:outline-none transition-all duration-300 outline-none focus:outline-o" @click="menuConfig.menuToggle">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
			<input type="text" id="" name="" class="hidden sm:block text-white placeholder-gray-500 bg-transparent outline-none" value="" placeholder="Search projects.." />
		</div>
		<div class="flex items-center gap-x-2.5">
			<!-- OverlayPanel -->
			<Button type="button" icon="pi pi-image" label="Image" class="w-12" @click="toggle">Image</Button>
			<button type="button" icon="pi pi-image" label="Image" @click="toggle($event)" />
			<OverlayPanel ref="op" class="bg-rose-600 w-96 p-0">
				<div class="divide-y divide-gray-300">
					<h3 class="text-center py-3 text-sm text-indigo-900">4 New Messages</h3>
					<div class="relative flex items-center gap-x-4 p-4">
						<img class="h-11 rounded-full" src="images/demo/avatar-1.jpg" alt="avatar" />
						<div class="space-y-2">
							<h2 class="text-blue-900 text-sm">Michelle Bilodeau</h2>
							<p class="text-xs text-gray-500">Nam pretium turpis et arcu. Duis arcu tortor</p>
							<p class="text-xs text-gray-500">5m ago</p>
						</div>
						<a href="#" class="absolute h-full w-full"></a>
					</div>
					<div class="relative flex items-center gap-x-4 p-4">
						<img class="h-11 rounded-full" src="images/demo/avatar-2.jpg" alt="avatar" />
						<div class="space-y-2">
							<h2 class="text-blue-900 text-sm">Kathie Burton</h2>
							<p class="text-xs text-gray-500">Nam pretium turpis et arcu. Duis arcu tortor</p>
							<p class="text-xs text-gray-500">30m ago</p>
						</div>
						<a href="#" class="absolute h-full w-full"></a>
					</div>
					<div class="relative flex items-center gap-x-4 p-4">
						<img class="h-11 rounded-full" src="images/demo/avatar-3.jpg" alt="avatar" />
						<div class="space-y-2">
							<h2 class="text-blue-900 text-sm">Alexander Groves</h2>
							<p class="text-xs text-gray-500">Nam pretium turpis et arcu. Duis arcu tortor</p>
							<p class="text-xs text-gray-500">2h ago</p>
						</div>
						<a href="#" class="absolute h-full w-full"></a>
					</div>
					<div class="relative flex items-center gap-x-4 p-4">
						<img class="h-11 rounded-full" src="images/demo/avatar-1.jpg" alt="avatar" />
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
			</OverlayPanel>

			<!-- TieredMenu -->
			<Button type="button" label="Toggle" @click="toggleMenu" aria-haspopup="true" aria-controls="overlay_tmenu">
				<svg :class="notification == true ? 'text-white' : ''" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
					<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
				</svg>
			</Button>
			<TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup class="w-80 inset-0 inset-y-auto mt-3" />

			<!-- user TieredMenu -->
			<Button type="button" icon="pi pi-image" label="Image" class="w-12" @click="toggle">Image</Button>
			<button type="button" icon="pi pi-image" label="Image" @click="toggle" />
			<OverlayPanel ref="op" class="p-0">
				<div class="py-2">
					<a href="settings-profile.php" class="flex items-center gap-x-3 pl-8 hover:bg-gray-100 py-1.5 transition-all duration-300">
						<i class="fas fa-user text-gray-700"></i>
						<h4 class="text-gray-600">View Profile</h4>
					</a>
					<a href="#" class="flex items-center gap-x-3 pl-8 hover:bg-gray-100 py-1.5 transition-all duration-300">
						<i class="fas fa-comments text-gray-700"></i>
						<h4 class="text-gray-600 text-">Contacts</h4>
					</a>
					<a href="#" class="flex items-center gap-x-3 pl-8 hover:bg-gray-100 py-1.5 transition-all duration-300">
						<i class="fas fa-chart-pie text-gray-700"></i>
						<h4 class="text-gray-600 text-">Analytics</h4>
					</a>
					<a href="#" class="flex items-center gap-x-3 pl-8 hover:bg-gray-100 py-1.5 transition-all duration-300">
						<i class="fas fa-cogs text-gray-700"></i>
						<h4 class="text-gray-600 text-">Settings</h4>
					</a>
				</div>
				<div class="py-2">
					<form method="post">
						<button name="logout_submition" class="w-full flex items-center gap-x-3 pl-8 hover:bg-gray-100 py-1.5 transition-all duration-300">
							<i class="fas fa-sign-out-alt text-gray-700"></i>
							<h4 class="text-gray-600 text-">Sign out</h4>
						</button>
					</form>
				</div>
			</OverlayPanel>
			<!-- user TieredMenu -->
			<Button type="button" label="Toggle" @click="userMenuToggle" aria-haspopup="true" aria-controls="overlay_tmenu">
				<svg :class="setting == true ? 'text-white' : ''" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
						clip-rule="evenodd"
					/>
				</svg>
			</Button>
			<TieredMenu ref="userMenu" id="overlay_tmenu" :model="userMenuItems" popup class="mt-3" />
		</div>
	</nav>
</template>
