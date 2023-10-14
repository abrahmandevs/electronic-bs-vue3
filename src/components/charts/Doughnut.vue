<script setup>
	import { reactive, defineProps } from "vue"
	import { Doughnut } from "vue-chartjs"
	import { Chart, ArcElement, Tooltip, Legend } from "chart.js"

	// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
	Chart.register(ArcElement, Tooltip, Legend)

	const data = reactive({
		labels: [],
		datasets: [{ label: "", backgroundColor: "", data: [] }],
	})
	const options = reactive({
		responsive: true,
		height: 400,
		maintainAspectRatio: true,
	})

	const props = defineProps({
		title: {
			type: String,
			default: "Doughnut Chart",
		},
		color: {
			type: [String, Array],
			default: ["#dc2626", "#ea580c", "#d97706", "#ca8a04", "#65a30d", "#10b74d", "#059669", "#14b8a6", "#0891b2", "#0284c7", "#2563eb", "#4f46e5", "#7c3aed", "#9333ea", "#c026d3", "#db2777", "#e11d48"],
		},
		label: {
			type: Array,
			default: ["January", "February", "March", "April", "May", "June", "July"],
		},
		data: {
			type: Array,
			default: [4, 20, 12, 33, 23, 12, 4],
		},
		height: {
			type: Number,
			default: 300,
		},
		responsive: {
			type: Boolean,
			default: true,
		},
		maintainAspectRatio: {
			type: Boolean,
			default: true,
		},
	})
	/// ==== data sets
	data["labels"] = props["label"]
	data["datasets"][0]["data"] = props["data"]
	data["datasets"][0]["label"] = props["title"]
	data["datasets"][0]["backgroundColor"] = props["color"]

	// ==== options set
	options["height"] = props["height"]
	options["responsive"] = props["responsive"]
	options["maintainAspectRatio"] = props["maintainAspectRatio"]
</script>
<template>
	<div class="">
		<Doughnut :data="data" :options="options" />
	</div>
</template>
