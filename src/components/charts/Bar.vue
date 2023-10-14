<script setup>
	import { reactive, defineProps } from "vue"
	import { Bar } from "vue-chartjs"
	import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js"

	Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

	const data = reactive({
		labels: [],
		datasets: [{ label: "", backgroundColor: "", data: [] }],
	})
	const options = reactive({
		responsive: true,
		height: 400,
		maintainAspectRatio: true,
	})
	// const options = computed(() => {
	// 	const responsive = true
	// 	const height = 700
	// 	const maintainAspectRatio = true
	// })

	const props = defineProps({
		title: {
			type: String,
			default: "Bar Chart",
		},
		color: {
			type: [String, Array],
			default: ["#10b74d", "#059669"],
			// default: "#41b883",
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
		<Bar :data="data" :options="options" />
	</div>
</template>
