<script setup>
	import Layouts from "../../../components/layouts/Layouts.vue"
	//import CircleProgress from "../../../components/progress/CircleProgress.vue"

	import "vue3-circle-progress/dist/circle-progress.css"
	import CircleProgress from "vue3-circle-progress"
</script>
<template>
	<Layouts>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
			<!-- <CircleProgress /> -->

			<div class="flex items-center justify-center">
				<!-- Basic Usage -->
				<circle-progress class="text-5xl transition-all duration-700" show-percent :border-bg-width="10" :border-width="10" empty-color="gray" fill-color="#10b74d" :percent="40" />
			</div>
			<div class="flex items-center justify-center">
				<!-- Default Gradient -->
				<circle-progress class="text-5xl transition-all duration-700" show-percent :is-gradient="true" />
			</div>
			<div class="flex items-center justify-center">
				<!-- Customize Gradient -->
				<circle-progress
					class="text-5xl transition-all duration-700"
					show-percent
					:is-gradient="true"
					:gradient="{
						angle: 90,
						startColor: '#ff0000',
						stopColor: '#ffff00',
					}"
				/>
			</div>
			<div class="flex items-center justify-center">
				<!-- Default Shadow -->
				<circle-progress class="text-5xl transition-all duration-700" show-percent :is-bg-shadow="true" />
			</div>
			<div class="flex items-center justify-center">
				<!-- Customize Shadow -->
				<circle-progress
					class="text-5xl transition-all duration-700"
					show-percent
					:is-bg-shadow="true"
					:bg-shadow="{
						inset: true,
						vertical: 2,
						horizontal: 2,
						blur: 4,
						opacity: 0.4,
						color: '#000000',
					}"
					empty-color="#f7f7f7"
					:border-width="6"
					:border-bg-width="30"
				/>
			</div>
		</div>
	</Layouts>
</template>
