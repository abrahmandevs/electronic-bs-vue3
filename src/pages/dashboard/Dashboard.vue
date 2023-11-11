<script setup>
	import { reactive } from "vue"
	import AppDashboardLayout from "../../layouts/AppDashboardLayout.vue"

	import { authStore } from "../../store/authStore"
	const auth = authStore

	const headers = [
		{ text: "PLAYER", value: "player" },
		{ text: "TEAM", value: "team" },
		{ text: "NUMBER", value: "number" },
		{ text: "POSITION", value: "position" },
		{ text: "HEIGHT", value: "indicator.height" },
		{ text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true },
		{ text: "LAST ATTENDED", value: "lastAttended", width: 200 },
		{ text: "COUNTRY", value: "country" },
	]

	const items = [
		{ player: "Stephen Curry", team: "GSW", number: 30, position: "G", indicator: { height: "6-2", weight: 185 }, lastAttended: "Davidson", country: "USA" },
		{ player: "Lebron James", team: "LAL", number: 6, position: "F", indicator: { height: "6-9", weight: 250 }, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA" },
		{ player: "Kevin Durant", team: "BKN", number: 7, position: "F", indicator: { height: "6-10", weight: 240 }, lastAttended: "Texas-Austin", country: "USA" },
		{ player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: "F", indicator: { height: "6-11", weight: 242 }, lastAttended: "Filathlitikos", country: "Greece" },
	]
</script>
<template>
	<AppDashboardLayout>
		<div class="border border-blue-100 shadow rounded-md p-4 max-w-sm w-full mx-auto opacity-40">
			<div class="animate-pulse flex space-x-4">
				<div class="rounded-full bg-slate-200 h-10 w-10"></div>
				<div class="flex-1 space-y-6 py-1">
					<div class="h-2 bg-slate-200 rounded"></div>
					<div class="space-y-3">
						<div class="grid grid-cols-3 gap-4">
							<div class="h-2 bg-slate-200 rounded col-span-2"></div>
							<div class="h-2 bg-slate-200 rounded col-span-1"></div>
						</div>
						<div class="h-2 bg-slate-200 rounded"></div>
					</div>
				</div>
			</div>
		</div>
		<EasyDataTable :headers="headers" :items="items" />
	</AppDashboardLayout>
</template>
