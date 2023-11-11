<script setup>
	import { ref, reactive, onBeforeMount } from "vue"
	import axios from "axios"
	import { ScaleIcon, StarIcon } from "@heroicons/vue/20/solid"

	import WishListIcon from "../../components/WishListIcon.vue"

	// #store
	import { cartStore } from "../../store/cartStore"

	const cart = cartStore
	const products = ref([])

	// #functions
	onBeforeMount(() => {
		axios
			.get("https://dummyjson.com/products?category=smartphones")
			// .get("http://127.0.0.1:8000/api/products")
			.then((res) => {
				// products.value = res.data
				products.value = res.data.products
			})
			.catch((error) => console.log(error))
	})
</script>

<template>
	<!--smartphone-Tablet -section-->

	<section id="smartPhoneTablet ">
		<div class="container-lg">
			<div class="py-2 my-1">
				<h4 class="h4 fw-bolder m-0">Groceries</h4>
			</div>
			<div class="row m-0 p-0 g-3 g-sm-0">
				<template v-for="(product, index) in products" :key="index">
					<div v-if="'groceries' == product.category" class="col-10 col-sm-4 col-md-3 p-0">
						<div class="card rounded-0 group-hover p-2 h-100">
							<div class="overflow-hidden position-relative w-100" style="height: 130px">
								<img class="w-100 h-100 object-fit-contain" :src="product.thumbnail ?? ' images/demo/electronic-smpt-2.jpg'" />
								<div class="card-img-overlay rounded-0 d-flex p-0 bg-opacity-0 justify-content-end align-items-end bg-dark hover-bg-opacity-10 duration-300">
									<div class="z-3 btn-group-vertical transform-rotateY-90 hover-transform-rotateY-0 duration-500">
										<wish-list-icon :product="product" />
										<a class="btn btn-light p-0 border-0">
											<ScaleIcon class="p-1 text-secondary bg-white border" style="height: 30px; width: 30px" />
										</a>
									</div>
									<router-link :to="'/shop/singleProduct/' + product['id']" class="stretched-link z-2"></router-link>
								</div>
							</div>
							<div class="card-body text-capitalize small px-0">
								<p class="mb-1">{{ product["title"] }}</p>
								<p class="my-2 small truncat">{{ product["description"] }}</p>
								<div class="d-flex jusitify-items-center gap-1 small py-1">
									<StarIcon class="w-4 h-4" v-for="(rate, index) in 5" :key="index" :class="product['rating'] > index ? 'text-warning' : 'text-secondary'" />
									<span class="text-secondary">({{ product["rating"] }})</span>
								</div>
							</div>
							<div class="card-footer border-0 bg-transparent h-6 overflow-hidden p-0">
								<div class="hover-mt-n25 duration-500 small">
									<h6 class="mb-4 pt-1 fw-semibold d-flex align-items-center gap-x-2">
										<del class="text-danger">${{ product["price"] }}</del>
										<span class="shrink-0 d-flex align-items-center gap-1">
											${{ (product["price"] - product["price"] * (product["discountPercentage"] / 100)).toFixed(2) }} <small>({{ product["discountPercentage"] }}%)</small>
										</span>
									</h6>
									<div class="d-flex gap-1 align-items-center text-uppercase small cursor-pointer text-white">
										<button @click="cart.addItem(product)" class="text-uppercase w-100 text-center px-2 py-1 text-decoration-none bg-primary rounded">Add to cart</button>
										<button class="w-100 text-center px-2 py-1 text-decoration-none bg-success rounded">Quick view</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>
