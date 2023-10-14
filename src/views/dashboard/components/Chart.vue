<script setup>
	import { ref, reactive, computed } from "vue"
	import Layouts from "../../../components/layouts/Layouts.vue"
	import Bar from "../../../components/charts/Bar.vue"
	import Line from "../../../components/charts/Line.vue"
	import Pie from "../../../components/charts/Pie.vue"
	import Doughnut from "../../../components/charts/Doughnut.vue"
</script>
<template>
	<Layouts>
		<div class="grid grid-cols-2 gap-x-8 gap-y-8">
			<div class="relativ">
				<Bar />
			</div>
			<div class="relativ">
				<Line />
			</div>
			<div class="relativ">
				<Pie />
			</div>
			<div class="relativ">
				<Doughnut />
			</div>
		</div>
	</Layouts>
</template>
