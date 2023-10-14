<script setup>
	import { ref } from "vue"
	import "../../assets/css/tailwind.css"
	import SwiperController from "./SwiperController.vue"

	import "swiper/css"
	import "swiper/css/navigation"
	import "swiper/css/pagination"
	import "swiper/css/effect-fade"
	import "swiper/css/free-mode"

	// import function to register Swiper custom elements
	//import { register } from "swiper/element/bundle"
	// register Swiper custom elements
	//register()

	import { Navigation, Pagination, Virtual, EffectFade, Autoplay } from "swiper/modules"
	import { Swiper, SwiperSlide } from "swiper/vue"

	import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline"

	const modules = [Navigation, Autoplay, Pagination]
	const slider = ref(null)
	const onSwiper = (swiper) => {
		slider.value = swiper
	}

	// const slides = Array.from({ length: 10 }).map((el, index) => `Slide ${index + 1}`)

	const props = defineProps({
		name: {
			type: String,
			default: "mySwiper",
		},
		// btn - btn group class
		btnGroupClass: {
			type: String,
			default: "",
		},
		btnClass: {
			type: String,
			default: "",
		},
		stroke: {
			type: [Number],
			default: 2,
		},

		// Slide per view
		slidesPerView: {
			type: [String, Number],
			default: 3,
		},
		// Space between
		spaceBetween: {
			type: [String, Number],
			default: 20,
		},
		// loop
		isLoop: {
			type: Boolean,
			default: true,
		},
		// loop
		isFreeMode: {
			type: Boolean,
			default: true,
		},

		// autoplay
		duration: {
			type: [Number, String],
			default: 2500,
		},
		isDisableOnInteraction: {
			type: Boolean,
			default: false,
		},
		pushOnMouse: {
			type: Boolean,
			default: true,
		},
		reverse: {
			type: Boolean,
			default: false,
		},
		// pagination

		isDynamicBullets: {
			type: Boolean,
			default: false,
		},
		isClickable: {
			type: Boolean,
			default: false,
		},
	})
</script>

<template>
	<Layouts>
		<Swiper
			:class="name"
			class=""
			:autoplay="{
				delay: duration,
				disableOnInteraction: isDisableOnInteraction,
				pauseOnMouseEnter: pushOnMouse,
				reverseDirection: reverse,
			}"
			:pagination="{
				dynamicBullets: isDynamicBullets,
				clickable: isClickable,
			}"
			:loop="isLoop"
			:freeMode="isFreeMode"
			:minimumVelocity="1"
			@swiper="onSwiper"
			:modules="modules"
			effect="fade"
			:slides-per-view="slidesPerView"
			:space-between="spaceBetween"
		>
			<!-- <SwiperController :slider="slider" /> -->
			<slot name="controller">
				<div class="absolute inset-0 z-10 flex items-center justify-between gap-1">
					<button class="px-3 py-1 rounded text-black bg-white shrink-0 flex items-center justify-center" @click.stop="slider.slidePrev()">
						<ChevronLeftIcon class="h-6 w-auto" :style="`stroke-width:${stroke} ;`" />
					</button>
					<button class="px-3 py-1 rounded text-black bg-white shrink-0 flex items-center justify-center" @click.stop="slider.slideNext()">
						<ChevronRightIcon class="h-6 w-auto" :style="`stroke-width:${stroke} ;`" />
					</button>
				</div>
			</slot>

			<slot>
				<swiper-slide v-for="(slideContent, index) in 10" :key="index" :virtualIndex="index"> sthis is{{ index }} </swiper-slide>
			</slot>
		</Swiper>
	</Layouts>
</template>
