<script setup>
	import { reactive } from "vue"
	import AppDashboardLayout from "../../../layouts/AppDashboardLayout.vue"
	import { authStore } from "../../../store/authStore"
	import Swiper from "../../../components/swiper/Swiper.vue"
	import { SwiperSlide } from "swiper/vue"
	const auth = authStore
</script>
<template>
	<AppDashboardLayout>
		<div>
			<Swiper name="mySwiper" duration="200">
				<SwiperSlide v-for="(slideContent, index) in 10" :key="index" :virtualIndex="index">
					{{ index }}
				</SwiperSlide>
			</Swiper>
		</div>
	</AppDashboardLayout>
</template>
