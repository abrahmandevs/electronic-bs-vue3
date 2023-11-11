<script setup>
	import { ref, reactive, computed, onBeforeMount, onMounted, watch } from "vue"
	// #plugins/ package
	import axios from "axios"
	import { HeartIcon, ScaleIcon, StarIcon } from "@heroicons/vue/20/solid"
	import { SwiperSlide } from "swiper/vue"

	// #store
	// #components
	import Swiper from "../../components/swiper/Swiper.vue"

	// #variables
	const blogPost = reactive({})

	// #functions
	onMounted(async () => {
		const url = `https://dummyjson.com/posts`
		const response = await axios.get(url)
		if (200 == response.status) {
			Object.assign(blogPost, response.data.posts)
		}
	})
</script>

<template>
	<!--popular-blog-posts-section-->

	<section class="m-5"></section>
	<section id="popularBlogPosts">
		<div class="container-lg">
			<div class="py-2 my-1 d-flex justify-content-between align-items-center">
				<h4 class="fw-bolder m-0">Most Popular Blog Posts</h4>
				<h6 class="m-0 small">
					<a href="#" class="text-uppercase text-decoration-none text-secondary small">view more</a>
				</h6>
			</div>
			<Swiper name="blogPost" duration="3000" class="z-2 h-100" btnClass="text-white bg-secondary">
				<SwiperSlide v-for="(blog, index) in blogPost" :key="index" class="h-100">
					<div class="card rounded-0 border-0 group-hover">
						<div class="overflow-hidden position-relative">
							<img class="img-fluid" src="images/demo/blog-2.jpg " />
							<div class="card-img-overlay rounded-0 p-0 bg-dark bg-opacity-0 top-100 hover-bg-opacity-20 hover-top-0 transition-500"></div>
						</div>
						<div class="card-body small p-0 text-capitalize">
							<h6 class="my-1">info here</h6>
							<h6 class="fw-bolder">{{ blog["title"] }}</h6>
							<p class="text-muted lh-lg truncate">{{ blog["body"] }}</p>
							<button class="btn bg-white rounded-0 fw-bolder btn-sm p-0">
								<a class="text-black text-decoration-none text-uppercase" href="#"
									>read more
									<i class="ps-1 fas fa-long-arrow-alt-right"></i>
								</a>
							</button>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
	<section class="m-4"></section>
</template>
