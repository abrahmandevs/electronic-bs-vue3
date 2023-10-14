<script setup>
	import { ref, reactive, onBeforeMount } from "vue"
	import axios from "axios"
	import Layout from "../Layout.vue"
	import { cartStore } from "../../../store/cartStore"
	import { wishlistStore } from "../../../store/wishlistStore"
	import { HeartIcon, ScaleIcon, StarIcon } from "@heroicons/vue/24/outline"
	import { slug } from "../../../utilities/slug"
	import { useRouter } from "vue-router"

	const router = useRouter()
	const cart = cartStore
	const wishlist = wishlistStore

	const products = ref([])
	// const products = reactive([])

	onBeforeMount(() => {
		axios
			// .get("https://dummyjson.com/products?limit=30")
			.get("http://127.0.0.1:8000/api/products")
			.then((res) => {
				products.value = res.data
				// products.value = res.data.products
			})
			.catch((error) => console.log(error))
	})
	// onBeforeMount(() => {
	// 	async function productList() {
	// 		const url = "https://dummyjson.com/products?limit=30"
	// 		const res = await axios.get(url)
	// 		if (200 == res.status) {
	// 			res.data.products.forEach((product) => {
	// 				products.push({
	// 					id: product.id,
	// 					title: product.title,
	// 					description: product.description,
	// 					price: product.price,
	// 					thumbnail: product.thumbnail,
	// 					rating: product.rating,
	// 					stock: product.stock,
	// 					brand: product.brand,
	// 					category: product.category,
	// 				})
	// 			})
	// 		}
	// 	}
	// 	productList()
	// })
	const skipCount = ref(0)
	async function lodeMore() {
		skipCount.value += 30
		const url = `https://dummyjson.com/products?limit=30&skip=${skipCount.value}&select=id,title,description,price,thumbnail,rating,stock,brand,category`
		const res = await axios.get(url)
		if (200 == res.status) {
			res.data.products.forEach((product) => {
				products.push(product)
			})
		}
	}

	async function singelProducView(id) {
		console.log(id)
		await router.push({ name: "singleProduct", params: { id } })
	}
</script>

<template>
	<Layout>
		<!-- === product-item body ===  -->
		<section id="shopBody">
			<div class="container-lg mb-5">
				<div class="row">
					<!-- side-categories-area -->
					<div class="col-md-3">
						<div class="offcanvas offcanvas-end position-lg-static transform-translate-x-lg-0 visibility-lg-visible border-md-0" style="visibility: hidden" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
							<div class="offcanvas-body">
								<div class="row justify-content-center">
									<div class="col-12 mb-5 pe-2">
										<div class="d-flex justify-content-between align-items-center mb-3">
											<p class="text-uppercase fw-bold mb-0 small">shop by categories</p>
											<button type="button" class="btn-close text-reset box-shadow-none d-lg-none btn-sm p-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
										</div>
										<div class="accordion cursor-p" id="accordionPanelsStayOpenExample">
											<!--====== Accordion-Item collapse button ======-->
											<div class="accordion-item border-0 text-capitalize px-0">
												<div class="accordion-header d-flex justify-content-between box-shadow-none collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shoplist1">
													<!-- <input class="form-check-input  box-shadow-none rounded-0 m-0 " type="checkbox" value=""  checked> -->
													<a href="#" class="text-decoration-none text-body"><i class="fas fa-bars me-2"></i><span class="ps-1 text-secondary">All Shop</span></a>
													<div>
														<span class="accordion-toggle-open">+</span>
														<span class="accordion-toggle-close">-</span>
													</div>
												</div>
												<div id="shoplist1" class="accordion-collapse collapse transition-1000" aria-labelledby="panelsStayOpen-headingOne">
													<div class="accordion-body ps-2 p-0 small">
														<!--====== Accordion-Item computer & laptop ======-->
														<div class="accordion-item border-0 text-capitalize px-0">
															<div class="accordion-header d-flex justify-content-between box-shadow-none collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shoplist3">
																<a href="#" class="text-decoration-none">
																	<input class="form-check-input box-shadow-none rounded-0" type="checkbox" value="" />
																	<span class="ps-1 text-secondary">computer & laptop</span>
																</a>
																<div>
																	<span class="accordion-toggle-open">+</span>
																	<span class="accordion-toggle-close">-</span>
																</div>
															</div>
															<div id="shoplist3" class="accordion-collapse collapse transition-800 timing-function-ease-out" aria-labelledby="panelsStayOpen-headingOne">
																<div class="accordion-body p-0">
																	<ul class="list-group list-group-transparent list-group-border-0 ps-3">
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">backup charger</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">headphone</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">power socket</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">printer</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">USB</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wedcam</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wi-Fi router</a>
																	</ul>
																</div>
															</div>
														</div>
														<!--====== Accordion-Item eletronic & housewares ======-->
														<div class="accordion-item border-0 text-capitalize px-0">
															<div class="accordion-header d-flex justify-content-between box-shadow-none collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shoplist4">
																<a href="#" class="text-decoration-none">
																	<input class="form-check-input box-shadow-none rounded-0" type="checkbox" value="" />
																	<span class="ps-1 text-secondary">eletronic & houseware</span>
																</a>
																<div>
																	<span class="accordion-toggle-open">+</span>
																	<span class="accordion-toggle-close">-</span>
																</div>
															</div>
															<div id="shoplist4" class="accordion-collapse collapse transition-800 timing-function-ease-out" aria-labelledby="panelsStayOpen-headingOne">
																<div class="accordion-body p-0">
																	<ul class="list-group list-group-transparent list-group-border-0 ps-4">
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">backup charger</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">headphone</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">power socket</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">printer</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">USB</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wedcam</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wi-Fi router</a>
																	</ul>
																</div>
															</div>
														</div>
														<!--====== Accordion-Item games & accessories ======-->
														<div class="accordion-item border-0 text-capitalize px-0">
															<div class="accordion-header d-flex justify-content-between box-shadow-none collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shoplist5">
																<a href="#" class="text-decoration-none">
																	<input class="form-check-input box-shadow-none rounded-0" type="checkbox" value="" />
																	<span class="ps-1 text-secondary">games & accessories</span>
																</a>
																<div>
																	<span class="accordion-toggle-open">+</span>
																	<span class="accordion-toggle-close">-</span>
																</div>
															</div>
															<div id="shoplist5" class="accordion-collapse collapse transition-800 timing-function-ease-out" aria-labelledby="panelsStayOpen-headingOne">
																<div class="accordion-body p-0">
																	<ul class="list-group list-group-transparent list-group-border-0 ps-4">
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">backup charger</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">headphone</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">power socket</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">printer</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">USB</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wedcam</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wi-Fi router</a>
																	</ul>
																</div>
															</div>
														</div>
														<!--====== Accordion-Item smartphone & tablet ======-->
														<div class="accordion-item border-0 text-capitalize px-0">
															<div class="accordion-header d-flex justify-content-between box-shadow-none collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shoplist6">
																<a href="#" class="text-decoration-none">
																	<input class="form-check-input box-shadow-none rounded-0" type="checkbox" value="" />
																	<span class="ps-1 text-secondary">smartphone & tablet</span>
																</a>
																<div>
																	<span class="accordion-toggle-open">+</span>
																	<span class="accordion-toggle-close">-</span>
																</div>
															</div>
															<div id="shoplist6" class="accordion-collapse collapse transition-800 timing-function-ease-out" aria-labelledby="panelsStayOpen-headingOne">
																<div class="accordion-body p-0">
																	<ul class="list-group list-group-transparent list-group-border-0 ps-4">
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">backup charger</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">headphone</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">power socket</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">printer</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">USB</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wedcam</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wi-Fi router</a>
																	</ul>
																</div>
															</div>
														</div>
														<!--====== Accordion-Item TV & audio ======-->
														<div class="accordion-item border-0 text-capitalize px-0">
															<div class="accordion-header d-flex justify-content-between box-shadow-none collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shoplist7">
																<a href="#" class="text-decoration-none">
																	<input class="form-check-input box-shadow-none rounded-0" type="checkbox" value="" />
																	<span class="ps-1 text-secondary">TV & audio</span>
																</a>
																<div>
																	<span class="accordion-toggle-open">+</span>
																	<span class="accordion-toggle-close">-</span>
																</div>
															</div>
															<div id="shoplist7" class="accordion-collapse collapse transition-800 timing-function-ease-out" aria-labelledby="panelsStayOpen-headingOne">
																<div class="accordion-body p-0">
																	<ul class="list-group list-group-transparent list-group-border-0 ps-4">
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">backup charger</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">headphone</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">power socket</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">printer</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">USB</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wedcam</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wi-Fi router</a>
																	</ul>
																</div>
															</div>
														</div>
														<!--====== Accordion-Item uncategorized ======-->
														<div class="accordion-item border-0 text-capitalize px-0">
															<div class="accordion-header d-flex justify-content-between box-shadow-none collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shoplist8">
																<a href="#" class="text-decoration-none">
																	<input class="form-check-input box-shadow-none rounded-0" type="checkbox" value="" />
																	<span class="ps-1 text-secondary">uncategorized</span>
																</a>
																<div>
																	<span class="accordion-toggle-open">+</span>
																	<span class="accordion-toggle-close">-</span>
																</div>
															</div>
															<div id="shoplist8" class="accordion-collapse collapse transition-800 timing-function-ease-out" aria-labelledby="panelsStayOpen-headingOne">
																<div class="accordion-body p-0">
																	<ul class="list-group list-group-transparent list-group-border-0 ps-4">
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">backup charger</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">headphone</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">power socket</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">printer</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">USB</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wedcam</a>
																		<a href="#" class="list-group-item list-group-item-action text-muted py-1">wi-Fi router</a>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<!--====== Accordion-Item Cametas-&-Photos ======-->
											<div class="accordion-item border-0 text-capitalize px-0">
												<div class="accordion-header d-flex justify-content-between ccordion-button box-shadow-none collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shoplist2">
													<a href="#" class="text-decoration-none">
														<input class="form-check-input box-shadow-none rounded-0" type="checkbox" value="" />
														<span class="ps-1 text-secondary">cameras & photos</span>
													</a>
													<div>
														<span class="accordion-toggle-open">+</span>
														<span class="accordion-toggle-close">-</span>
													</div>
												</div>
												<div id="shoplist2" class="accordion-collapse collapse transition-800 timing-function-ease-out" aria-labelledby="panelsStayOpen-headingOne">
													<div class="accordion-body p-0">
														<ul class="list-group list-group-transparent list-group-border-0 ps-4">
															<a href="#" class="list-group-item list-group-item-action text-muted py-1">backup charger</a>
															<a href="#" class="list-group-item list-group-item-action text-muted py-1">headphone</a>
															<a href="#" class="list-group-item list-group-item-action text-muted py-1">power socket</a>
															<a href="#" class="list-group-item list-group-item-action text-muted py-1">printer</a>
															<a href="#" class="list-group-item list-group-item-action text-muted py-1">USB</a>
															<a href="#" class="list-group-item list-group-item-action text-muted py-1">wedcam</a>
															<a href="#" class="list-group-item list-group-item-action text-muted py-1">wi-Fi router</a>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!--====== Accordion-End ======-->
									<!--== section products-on-sale ==-->
									<div class="col-12 d-lg-none mb-4 pe-4">
										<div class="form-check small">
											<input class="form-check-input box-shadow-none rounded-0" type="checkbox" value="" />
											<label class="form-check-label text-uppercase fw-bold small" for="flexCheckDefault">show only products on sale</label>
										</div>
									</div>
									<!--== section sort-list ==-->
									<div class="col-12 d-md-none mb-5 pe-4">
										<select class="form-select box-shadow-none rounded-0 border-0 bg-light text-capitalize" aria-label="Default select example">
											<option selected>sort by latest</option>
											<option value="1">sort by popularity</option>
											<option value="2">sort by average rating</option>
											<option value="3">sort by price: low to high</option>
											<option value="4">sort by price: high to low</option>
										</select>
									</div>
									<!--== section price ==-->
									<div class="col-12 mb-5 pe-4">
										<label for="customRange1" class="form-label text-uppercase fw-bold mt-1 mb-1">price</label>
										<input type="range" class="form-range" id="customRange1" />
									</div>
									<!--== section colors ==-->
									<div class="col-12 mb-5 pe-4">
										<p class="text-uppercase fw-bold mt-1 mb-2">colors</p>
										<div class="row g-2">
											<div class="col-auto"><a href="#" class="rounded-2 border d-inline-block h-6 w-6 bg-white d-block"></a></div>
											<div class="col-auto"><a href="#" class="rounded-2 border d-inline-block h-6 w-6 bg-light d-block"></a></div>
											<div class="col-auto"><a href="#" class="rounded-2 border d-inline-block h-6 w-6 bg-secondary d-block"></a></div>
											<div class="col-auto"><a href="#" class="rounded-2 border d-inline-block h-6 w-6 bg-black d-block"></a></div>
											<div class="col-auto"><a href="#" class="rounded-2 border d-inline-block h-6 w-6 bg-primary d-block"></a></div>
											<div class="col-auto"><a href="#" class="rounded-2 border d-inline-block h-6 w-6 bg-success d-block"></a></div>
											<div class="col-auto"><a href="#" class="rounded-2 border d-inline-block h-6 w-6 bg-danger d-block"></a></div>
											<div class="col-auto"><a href="#" class="rounded-2 border d-inline-block h-6 w-6 bg-warning d-block"></a></div>
										</div>
									</div>
									<!--== section cpu ==-->
									<div class="col-12 mb-5 pe-4">
										<p class="text-uppercase fw-bold mt-1 mb-2">cpu</p>
										<div class="row g-2 text-center small">
											<div class="col-auto"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">Rayzen</a></div>
											<div class="col-auto"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">Xeon</a></div>
											<div class="col-auto"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">Althion</a></div>
											<div class="col-auto"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">Core i3</a></div>
											<div class="col-auto"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">Core i5</a></div>
											<div class="col-auto"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">Core i7</a></div>
											<div class="col-auto"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">Core i9</a></div>
											<div class="col-auto"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">Core i10</a></div>
										</div>
									</div>
									<!--== section storage ==-->
									<div class="col-12 mb-5 pe-4">
										<p class="text-uppercase fw-bold mt-1 mb-2">storage</p>
										<div class="row g-2 text-center text-capitalize small">
											<div class="col-4"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">16GB</a></div>
											<div class="col-4"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">32GB</a></div>
											<div class="col-4"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">64GB</a></div>
											<div class="col-4"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">128GB</a></div>
											<div class="col-4"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">256GB</a></div>
											<div class="col-4"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">512BG</a></div>
											<div class="col-4"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">1TB</a></div>
											<div class="col-4"><a href="#" class="d-block text-muted text-decoration-none px-2 py-2 bg-light">2TB</a></div>
										</div>
									</div>
									<!--== section brands ==-->
									<div class="col-12 mb-5 pe-4">
										<p class="text-uppercase fw-bold mt-1 mb-2">brands</p>
										<ul class="list-group list-group-border-0 text-capitalize box-shadow-none rounded-0">
											<a href="#" class="list-group-item text-muted px-0 py-1" v-for="(item, index) in 10" :key="index"><input class="box-shadow-none rounded-0 form-check-input me-2" type="checkbox" value="" />brand {{ index + 1 }}</a>
										</ul>
									</div>
									<!--== section avarage-rating ==-->
									<div class="col-12 mb-5 pe-4">
										<p class="text-uppercase fw-bold mt-1 mb-2">avarage rating</p>
										<div class="small py-1">
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<span class="text-secondary">(24)</span>
										</div>
										<div class="small py-1">
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="far fa-star text-warning"></i>
											<span class="text-secondary">(10)</span>
										</div>
										<div class="small py-1">
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="far fa-star text-warning"></i>
											<i class="far fa-star text-warning"></i>
											<span class="text-secondary">(4)</span>
										</div>
										<div class="small py-1">
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="far fa-star text-warning"></i>
											<i class="far fa-star text-warning"></i>
											<i class="far fa-star text-warning"></i>
											<span class="text-secondary">(2)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--===== Product-Items-area =====-->
					<div class="col-12 col-lg-9 px-3">
						<div class="row justify-content-between align-items-center mt-2 mb-1 small">
							<div class="col-auto d-lg-none ps-0">
								<button class="btn box-shadow-none text-info transition-800 hover-bg-danger bg-transparent border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
									<i class="fas fa-sliders-h"></i>
								</button>
							</div>
							<div class="col-auto form-check d-none d-lg-block">
								<input class="form-check-input box-shadow-none rounded-0" type="checkbox" value="" id="flexCheckDefault" />
								<label class="form-check-label text-uppercase fw-bold small" for="flexCheckDefault">show only products on sale </label>
							</div>
							<div class="col-auto d-none d-md-block">
								<select class="form-select box-shadow-none rounded-0 border-0 bg-light" aria-label="Default select example">
									<option selected>sort by latest</option>
									<option value="1">sort by popularity</option>
									<option value="2">sort by average rating</option>
									<option value="3">sort by price: low to high</option>
									<option value="4">sort by price: high to low</option>
								</select>
							</div>
						</div>
						<div class="row justify-content-center gap-2 gap-sm-0 pb-4">
							<div class="col-8 col-sm-4 col-md-3 p-0" v-for="(product, index) in products" :key="index">
								<div class="card rounded-0 group-hover p-2 h-100">
									<div @click.stop="singelProducView(product.id)" class="overflow-hidden position-relative">
										<div class="overflow-hidden text-center w-100" style="height: 100px">
											<img class="h-100 w-100 object-fit-contain" :src="product['image']" />
											<!-- <img class="h-100 w-100 object-fit-contain" :src="product['thumbnail']" /> -->
										</div>
										<div class="card-img-overlay rounded-0 d-flex p-0 bg-opacity-0 justify-content-end align-items-end bg-dark hover-bg-opacity-10 transition-1000">
											<div class="position-absolute top- bottom-0 end-0 btn-group-vertical transform-rotateY-90 hover-transform-rotateY-0 transition-500" style="z-index: 100">
												<button class="btn text-light p-1 border-0 rounded-0 bg-secondary" style="height: 30px; width: 30px">
													<ScaleIcon class="w-full h-full" />
												</button>
												<button @click="wishlist.addItem(product)" class="btn text-light p-1 border-0 rounded-0" :class="wishlist.items[product['id']]?.wishlist ? 'bg-success' : 'bg-secondary'" style="height: 30px; width: 30px">
													<HeartIcon class="w-full h-full" />
												</button>
											</div>
										</div>
									</div>
									<div class="card-body text-capitalize small px-0">
										<p class="mb-1">{{ product["id"] }}</p>
										<p class="mb-1">{{ product["title"] }}</p>
										<p class="my-2 small truncate">{{ product["description"] }}</p>
										<strong class="mt-2">$ {{ product["price"] }}</strong>
										<div class="d-flex jusitify-items-center gap-1 small py-1">
											<StarIcon class="w-4 h-4 text-warning" />
											<StarIcon class="w-4 h-4 text-warning" />
											<StarIcon class="w-4 h-4 text-warning" />
											<StarIcon class="w-4 h-4 text-warning" />
											<StarIcon class="w-4 h-4 text-warning" />
											<span class="text-secondary">({{ product["rating"] }})</span>
										</div>
									</div>
									<div class="card-footer border-0 bg-transparent h-6 overflow-hidden p-0">
										<div class="hover-mt-n transition-500 small">
											<div class="d-flex align-items-center text-uppercase small cursor-pointer">
												<button @click="cart.addItem(product)" class="text-decoration-none text-dark fw-bold">add to cart</button>
												<div class="mx-auto"></div>
												<!-- <router-link :to="{ name: 'singleProduct' }">quick view</router-link> -->
												<!-- <router-link :to="{ name: 'singleProduct', params: { id: product['id'], slug: slug.slugTxt(product['title']) } }" class="text-decoration-none text-dark fw-bold">quick view</router-link> -->
											</div>
										</div>
									</div>
								</div>
								<!-- Modal -->
								<div class="modal fade" id="product-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<!-- ====== including php (productCategory-modal.php) ====== -->
								</div>
							</div>
						</div>
						<div class="text-center">
							<p class="mb-2">You're viewed 20 of 79 products</p>
							<button v-if="products.length > 0" @click="lodeMore()" class="fw-bold text-white bg-dark hover-border-red hover-text-red hover-bg-transparent btn rounded-0 text-uppercase box-shadow-none" type="button"><small>load more...</small></button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
</template>
<style scoped>
	.truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 2;
		-webkit-box-orient: vertical;
		text-wrap: wrap;
	}
	.group-hover:hover .hover-mt-n15,
	.hover-mt-n15:hover {
		margin-top: -1.5rem;
	}
	.accordion-toggle-open {
		display: none;
	}

	.collapsed .accordion-toggle-open {
		display: block;
	}

	.collapsed .accordion-toggle-close {
		display: none;
	}

	.accordion-toggle-close {
		display: block;
	}
</style>
