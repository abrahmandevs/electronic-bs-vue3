<script setup>
	import { ref, reactive, computed, onBeforeMount } from "vue"
	import axios from "axios"

	import Layout from "../Layout.vue"
	import { wishlist } from "../../../store/wishlistStore"
	import { cartStore } from "../../../store/cartStore"

	import { HeartIcon, StarIcon } from "@heroicons/vue/24/solid"
	import WishListIcon from "../../../components/WishListIcon.vue"

	import { useRoute } from "vue-router"
	const route = useRoute()
	const id = route.params.id
	const cart = cartStore

	const productData = reactive({
		id: "",
		title: "",
		description: "",
		price: "",
		images: "",
		thumbnail: "",
		rating: "",
		stock: "",
		brand: "",
		category: "",
	})

	onBeforeMount(async () => {
		const url = `https://dummyjson.com/products/${id}`
		const res = await axios.get(url)
		if (200 == res.status) {
			Object.assign(productData, res.data)
		}
	})

	const cartItemQuantity = computed(() => cart.items?.[productData.id]?.quantity ?? 1)

	const updateCartItemQuantity = (event) => {
		let newQuantity = event.target.value
		if (newQuantity > 0) {
			if (!cart.items[productData.id]) {
				cart.addItem(productData)
			}
			cart.items[productData.id].quantity = newQuantity
		} else {
			event.target.value = 1
		}
		cart.saveCartInLocalStorage()
	}

	// temp

	const baseUrl = window.location.origin
</script>
<template>
	<Layout>
		<!-- productData details -->
		<section id="productData-Details-ProductData">
			<div class="container-lg">
				<div class="row py-5">
					<div class="col-md-6">
						<div id="productDetailsImageSlider" class="carousel slide" data-bs-ride="carousel">
							<div class="carousel-inner border">
								<div v-for="(image, index) in productData['images']" :key="index" class="carousel-item zoom-productData cursor-zoom-in" :class="0 == index ? 'active' : ''">
									<img :src="image" class="d-block w-100" alt="image" />
								</div>
							</div>
							<div class="carousel-indicators position-static m-2">
								<button v-for="(image, index) in productData['images']" :key="index" type="button" data-bs-target="#productDetailsImageSlider" :data-bs-slide-to="index" class="w-auto border" :class="0 == index ? 'active' : ''" style="height: 50px">
									<img :src="image" class="d-block h-100 w-100" alt="image" />
								</button>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row">
							<div class="col-10">
								<h3 class="h3 text-capitalize fw-bold mb-3">{{ productData["title"] }}</h3>
								<p class="text-capitalize fst-italic small">{{ productData["description"] }}</p>
								<div class="d-flex align-items-center">
									<StarIcon class="w-4 h-4" v-for="(rate, index) in 5" :key="index" :class="productData['rating'] > index ? 'text-warning' : 'text-secondary'" />
									<p class="m-0 ms-1">({{ productData["rating"] }})</p>
								</div>
							</div>
							<div class="col">
								<wish-list-icon :product="productData" />
							</div>
						</div>
						<div class="py-4 border-bottom">
							<div class="btn-toolbar gap-2 btn-sm">
								<div class="btn-group w-100 w-sm-auto d-flex gap-0 border border-secondary">
									<button @click="cart.increment(productData)" class="p-0 btn rounded-0 box-shadow-none btn-success">+</button>
									<input type="number" class="p-0 h-6 block form-control-sm border-0 rounded-0 outline-0 text-center" @input="updateCartItemQuantity" :value="cartItemQuantity ?? 1" />
									<button @click="cart.decrement(productData)" class="p-0 btn rounded-0 box-shadow-none btn-danger">-</button>
								</div>
								<button type="button" @click="cart.addItem(productData)" class="btn btn-primary btn-outline-primary rounded-1 fw-bold text-uppercase px-3 py-2 w-100 w-sm-auto"><small>+ add to cart</small></button>
								<router-link :to="{ name: 'checkout' }" class="btn rounded-1 box-shadow-none border rounded-0 fw-bold text-uppercase px-3 py-2 btn-success w-100 w-sm-auto"><small>Buy Now</small></router-link>
								<!-- <router-link :to="{ name: 'cart' }" class="btn rounded-1 box-shadow-none border rounded-0 fw-bold text-uppercase px-3 py-2 btn-success w-100 w-sm-auto"><small>buy now</small></router-link> -->
							</div>
						</div>
						<div class="my-3">
							<p class="text-capitalize my-1">
								availability: <span class="text-success">{{ productData["stock"] }}</span>
							</p>
							<p class="text-capitalize my-1">SKU: <span class="text-secondary">0001</span></p>
							<p class="text-capitalize my-1">
								brands: <span class="text-secondary">{{ productData["brand"] }}</span>
							</p>
						</div>
						<nav>
							<ul class="nav my-3 gap-2">
								<li class="nav-item">
									<a href="" class="py-1 nav-link bg-primary text-white"><i class="fab fa-facebook-f"></i> Facebook</a>
								</li>
								<li class="nav-item">
									<a href="" class="py-1 nav-link bg-info text-white"><i class="fab fa-twitter"></i> Twitter</a>
								</li>
								<li class="nav-item">
									<a href="" class="py-1 nav-link bg-danger text-white"><i class="fab fa-pinterest-square"></i> Pinterest</a>
								</li>
								<li class="nav-item">
									<a href="" class="py-1 nav-link bg-success text-white"><i class="fab fa-linkedin-in"></i> Linkedin </a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</section>
		<!-- combo package offer -->
		<section id=" productData-details-combo">
			<div class="container-lg mb-5">
				<div class="border-2 border-danger p-4">
					<h5 class="text-uppercase fw-bold">Frequently Bought Together</h5>
					<div class="row align-items-center justify-content-between">
						<div class="col-md-8 col-sm-12">
							<div class="row align-items-center justify-content-center">
								<div class="col">
									<a href="#" class="h-100 w-100"><img class="img-fluid" :src="`${baseUrl}/public/images/demo/electronic-lp7.jpg`" alt="" /></a>
								</div>
								<div class="col-auto">+</div>
								<div class="col">
									<a href="#" class="h-100 w-100"><img class="img-fluid" :src="`${baseUrl}/public/images/demo/electronic-60.jpg`" alt="" /></a>
								</div>
								<div class="col-auto">+</div>
								<div class="col">
									<a href="#" class="h-100 w-100"><img class="img-fluid" :src="`/public/images/demo/electronic-64.jpg`" alt="" /></a>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-lg-2 d-none d-md-block">
							<p class="text-capitalize mb-1">price for all</p>
							<p class="h4 text-red-danger">$ 980.00</p>
							<a href="#" class="btn text-white bg-red-danger border border-danger hover-border-red hover-text-red hover-bg-transparent btn rounded-0 text-uppercase box-shadow-none w-100" type="button"><small class="fw-bold">add all to cart</small></a>
						</div>
					</div>
					<div class="text-muted small text-capitalize my-3">
						<p class="mb-0">This ProductData: Microsoft Surface Laptop 3-15” Touch-Screen – Core i5 – $750.00</p>
						<p class="mb-0">Desktop Webcam, HD 720p Widescreen – $200.00</p>
						<p class="mb-0">Verbatim Optical Mouse USB Accessibility – $30.00</p>
					</div>
					<div class="d-block d-md-none text-center border-top">
						<div class="d-flex justify-content-between py-3">
							<p class="text-capitalize mb-0">price for all</p>
							<p class="h4 text-red-danger mb-0">$ 980.00</p>
						</div>
						<a href="#" class="btn w-100 fw-bold text-white border border-danger bg-red-danger hover-border-red hover-text-red hover-bg-transparent btn rounded-0 text-uppercase box-shadow-none" type="button"><small>add all to cart</small></a>
					</div>
				</div>
			</div>
		</section>
		<!-- productData spacification -->
		<section id=" productDetailsdetails">
			<div class="container-lg">
				<div class="row justify-content-center">
					<div class="col-10">
						<ul class="nav nav-pills mb-3 gap-1 small" id="pills-tab" role="tablist">
							<li class="nav-item" role="presentation">
								<button class="p-0 nav-link bg-transparent active text-uppercase text-secondary fw-bold" id="" data-bs-toggle="pill" data-bs-target="#description" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
							</li>
							<li class="nav-item breadcrumb-hr" role="presentation">
								<button class="p-0 nav-link bg-transparent text-uppercase text-secondary fw-bold" id="" data-bs-toggle="pill" data-bs-target="#additionalInformation" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">additional information</button>
							</li>
							<li class="nav-item breadcrumb-hr" role="presentation">
								<button class="p-0 nav-link bg-transparent text-uppercase text-secondary fw-bold" id="" data-bs-toggle="pill" data-bs-target="#specification" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">specification</button>
							</li>
							<li class="nav-item breadcrumb-hr" role="presentation">
								<button class="p-0 nav-link bg-transparent text-uppercase text-secondary fw-bold" id="" data-bs-toggle="pill" data-bs-target="#reviews" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">reviews</button>
							</li>
						</ul>
						<div class="tab-content" id="pills-tabContent">
							<div class="tab-pane fade show active small" id="description" role="tabpanel">
								<p class="text-muted lh-lg">
									A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast flash storage. High-performance graphics. Great built-in apps. And now in the 13-inch model, a revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine,
									MacBook Pro with Retina display gives you the power to create.
									<br />
									<br />
									The design of MacBook Pro packs a lot of power into not a lot of space. Because we believe that high performance shouldn’t come at the expense of portability. And despite being so compact, the new 13-inch and 15-inch MacBook Pro with Retina display models now deliver up to 10 hours
									and nine hours of battery life, respectively — an hour more than the previous models.
								</p>
								<div class="mb-3">
									<p class="fw-bold text-center">12.9” And 11” Liquid Retina Display With Promotion</p>
									<img class="img-fluid d-block m-auto pb-3" :src="`${baseUrl}/public/images/demo/productData-detai-electronic.jpg`" alt="image" />
								</div>
								<div class="row align-items-center">
									<div class="col-lg-6 col-md-12 mb-3">
										<div class="me-3 text-capialize">
											<p class="text-uppercase fw-bold mb-2">technical details</p>
											<ul class="list-group list-group-flush text-secondary text-capitalize">
												<li class="list-group-item px-0 text-muted">opetating system: <span class="text-black">android 8.1 oreo</span></li>
												<li class="list-group-item px-0 text-muted">item weight: <span class="text-black">2.07 pounds</span></li>
												<li class="list-group-item px-0 text-muted">item dimensions lxWxH: <span class="text-black">9.5 x 6.69 x 0.39</span></li>
												<li class="list-group-item px-0 text-muted">Rear Webcam Resolution: <span class="text-black">2 MP</span></li>
												<li class="list-group-item px-0 text-muted">Processor Brand: <span class="text-black">MediaTek</span></li>
												<li class="list-group-item px-0 text-muted">Processor Count: <span class="text-black">4 Computer</span></li>
												<li class="list-group-item px-0 text-muted">Memory Type: <span class="text-black"> DDR3 SDRAM</span></li>
												<li class="list-group-item px-0 text-muted">Flash Memory Size: <span class="text-black">16 GB</span></li>
											</ul>
										</div>
									</div>
									<div class="col-lg-6 col-md-12 mb-3">
										<div class="me-3">
											<p class="text-uppercase fw-bold mb-2">summary</p>
											<ul class="list-group list-group-flush text-capitalize">
												<li class="list-group-item px-0 text-muted">Standing screen display size: <span class="text-black">10.1</span></li>
												<li class="list-group-item px-0 text-muted">Inches Screen Resolution: <span class="text-black"> 1280×800</span></li>
												<li class="list-group-item px-0 text-muted">Max Screen Resolution: <span class="text-black">1280×800</span></li>
												<li class="list-group-item px-0 text-muted">Memory Speed: <span class="text-black">1.3 GHz</span></li>
												<li class="list-group-item px-0 text-muted">Graphics Coprocessor: <span class="text-black">ARM Mali-T720</span></li>
												<li class="list-group-item px-0 text-muted">Wireless Type: <span class="text-black">802.11bgn</span></li>
												<li class="list-group-item px-0 text-muted">Number of USB 2.0 Ports: <span class="text-black">1</span></li>
												<li class="list-group-item px-0 text-muted">Average Battery Life (in hours): <span class="text-black">6 Hours</span></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade show" id="additionalInformation" role="tabpanel">
								<div class="d-flex gap-3 align-items-center">
									<h6 class="fw-bold mb-0">Serice CPU</h6>
									<p class="text-secondary mb-0">core i3 / core i5 / core i7 / core i9</p>
								</div>
							</div>
							<div class="tab-pane fade text-secondary mb-4" id="specification" role="tabpanel">
								<div class="row align-items-center">
									<div class="col-lg-6 col-md-12 mb-3">
										<div class="me-3 small">
											<ul class="list-group list-group-flush text-capitalize">
												<li class="list-group-item px-0 text-muted">Liquid Retina display</li>
												<li class="list-group-item px-0 text-muted">11-inch (diagonal) LED-backlit Multi‑Touch display with IPS technology</li>
												<li class="list-group-item px-0 text-muted">2388-by-1668-pixel resolution at 264 pixels per inch (ppi)</li>
												<li class="list-group-item px-0 text-muted">ProMotion technology</li>
												<li class="list-group-item px-0 text-muted">Wide color display (P3)</li>
												<li class="list-group-item px-0 text-muted">True Tone display</li>
												<li class="list-group-item px-0 text-muted">Fingerprint-resistant oleophobic coating</li>
												<li class="list-group-item px-0 text-muted">Fully laminated display</li>
												<li class="list-group-item px-0 text-muted">Antireflective coating</li>
												<li class="list-group-item px-0 text-muted">1.8% reflectivity</li>
												<li class="list-group-item px-0 text-muted">600 nits brightness</li>
											</ul>
										</div>
									</div>
									<div class="col-lg-6 col-md-12 mb-3">
										<div class="me-2 small">
											<ul class="list-group list-group-flush text-capitalize">
												<li class="list-group-item px-0 text-muted">Wide: 12MP, ƒ/1.8 aperture</li>
												<li class="list-group-item px-0 text-muted">Ultra Wide: 10MP, ƒ/2.4 aperture, and 125° field of view</li>
												<li class="list-group-item px-0 text-muted">2x optical zoom out; digital zoom up to 5x</li>
												<li class="list-group-item px-0 text-muted">Five‑element lens (Wide and Ultra Wide)</li>
												<li class="list-group-item px-0 text-muted">Brighter True Tone flash</li>
												<li class="list-group-item px-0 text-muted">Panorama (up to 63MP)</li>
												<li class="list-group-item px-0 text-muted">Sapphire crystal lens cover</li>
												<li class="list-group-item px-0 text-muted">Backside illumination sensor</li>
												<li class="list-group-item px-0 text-muted">Hybrid IR filter</li>
												<li class="list-group-item px-0 text-muted">Autofocus with Focus Pixels (Wide)</li>
												<li class="list-group-item px-0 text-muted">Tap to focus with Focus Pixels (Wide)</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade text-capitalize" id="reviews" role="tabpanel">
								<p class="fw-bold">3 reviews for microsoft surface laptop 3-15" touch-Screen</p>
								<div class="row">
									<div class="col-12 col-md-4 p-0">
										<div class="d-flex flex-column align-items-center small bg-light p-3">
											<p class="text-uppercase fw-bold small mb-0">customer reviews</p>
											<div class="d-inline-block py-3">
												<div class="bg-red h-9 w-9 d-flex justify-content-center align-items-center text-center rounded-circle">
													<h4 class="fw-bold text-white mb-0">4.35</h4>
												</div>
											</div>
											<div class="small py-2">
												<i class="fas fa-star text-warning"></i>
												<i class="fas fa-star text-warning"></i>
												<i class="fas fa-star text-warning"></i>
												<i class="fas fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<span class="text-secondary">(3)</span>
											</div>
											<p class="text-capitalize">based on 3 reviews</p>
										</div>
									</div>
									<div class="col-12 col-md-8 border p-4">
										<div class="d-flex align-items-center p-1">
											<div class="small text-nowrap">
												<i class="fas fa-star text-warning"></i>
												<i class="fas fa-star text-warning"></i>
												<i class="fas fa-star text-warning"></i>
												<i class="fas fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<span class="text-secondary">(4)</span>
											</div>
											<div class="ms-2 small progress bg-secondary rounded-pill w-100 h-100 h-2">
												<div class="progress-bar rounded-pill bg-warning w-75 h-100"></div>
											</div>
										</div>
										<div class="d-flex align-items-center p-1">
											<div class="small text-nowrap">
												<i class="fas fa-star text-warning"></i>
												<i class="fas fa-star text-warning"></i>
												<i class="fas fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<span class="text-secondary">(3)</span>
											</div>
											<div class="ms-2 small progress bg-secondary rounded-pill w-100 h-100 h-2">
												<div class="progress-bar rounded-pill bg-warning w-50 h-100"></div>
											</div>
										</div>
										<div class="d-flex align-items-center p-1">
											<div class="small text-nowrap">
												<i class="fas fa-star text-warning"></i>
												<i class="fas fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<span class="text-secondary">(2)</span>
											</div>
											<div class="ms-2 small progress bg-secondary rounded-pill w-100 h-100 h-2">
												<div class="progress-bar rounded-pill bg-warning w-25 h-100"></div>
											</div>
										</div>
										<div class="d-flex align-items-center p-1">
											<div class="small text-nowrap">
												<i class="fas fa-star text-warning"></i>
												<i class="fas fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<span class="text-secondary">(2)</span>
											</div>
											<div class="ms-2 small progress bg-secondary rounded-pill w-100 h-100 h-2">
												<div class="progress-bar rounded-pill bg-warning w-25 h-100"></div>
											</div>
										</div>
										<div class="d-flex align-items-center p-1">
											<div class="small text-nowrap">
												<i class="far fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<i class="far fa-star text-warning"></i>
												<span class="text-secondary">(0)</span>
											</div>
											<div class="ms-2 small progress bg-secondary rounded-pill w-100 h-100 h-2">
												<div class="progress-bar rounded-pill bg-warning w-0 h-100"></div>
											</div>
										</div>
									</div>
								</div>
								<!-- buttons -->
								<div class="gap-2 d-flex flex-column flex-sm-row justify-content-center text-uppercase py-4">
									<button class="hover-btn-bg-black btn rounded-0 border-dark bg-transparent text-uppercase box-shadow-none fw-bold px-3" type="button"><i class="fas fa-camera"> </i> <small> with images (0)</small></button>
									<button class="hover-btn-bg-black btn rounded-0 border-dark bg-transparent text-uppercase box-shadow-none fw-bold px-3" type="button"><i class="fas fa-award"> </i> <small> verified (0)</small></button>
									<div class="dropdown">
										<button class="hover-btn-bg-black btn rounded-0 border-dark bg-transparent text-uppercase dropdown-toggle box-shadow-none fw-bold px-3 w-100 w-sm-auto" type="button" id="reviews-rating" data-bs-toggle="dropdown"><small>all stars(11)</small></button>
										<ul class="dropdown-menu bg-light border-0 rounded-0 w-100 min-width-auto" aria-labelledby="reviews-rating">
											<a class="dropdown-item small" href="#">all stars(11)</a>
											<a class="dropdown-item small" href="#">5 stars(4)</a>
											<a class="dropdown-item small" href="#">4 stars(3)</a>
											<a class="dropdown-item small" href="#">3 stars(2)</a>
											<a class="dropdown-item small" href="#">2 stars(2)</a>
											<a class="dropdown-item small" href="#">1 stars(0)</a>
										</ul>
									</div>
								</div>
								<!-- submit-reviews -->
								<div id="reviews">
									<div class="d-flex gap-3 align-items-center py-4 border-bottom w-auto">
										<div class="d-block mb-auto">
											<img class="rounded-circle" :src="`${baseUrl}/public/images/demo/reviews-1.jpeg`" alt="image" />
										</div>
										<div class="small">
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<p class="fw-bold d-inline-block mb-2">MD. Sharif Ullah<span class="text-secondary">- september 13, 2021</span></p>
											<p class="text-muted mb-0">I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.</p>
										</div>
									</div>
									<div class="d-flex gap-3 align-items-center py-4 border-bottom">
										<div class="d-block mb-auto">
											<img class="rounded-circle" :src="`${baseUrl}/public/images/demo/reviews-1.jpeg`" alt="image" />
										</div>
										<div class="small">
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<p class="fw-bold d-inline-block mb-2">M H Shagor<span class="text-secondary">- september 13, 2021</span></p>
											<p class="text-muted mb-0">Everything is perfect. I would recommend</p>
										</div>
									</div>
									<div class="d-flex gap-3 align-items-center py-4 border-bottom">
										<div class="d-block mb-auto">
											<img class="rounded-circle" :src="`${baseUrl}/public/images/demo/reviews-1.jpeg`" alt="image" />
										</div>
										<div class="small">
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<p class="fw-bold d-inline-block mb-2">Dewan<span class="text-secondary">- september 13, 2021</span></p>
											<p class="text-muted mb-0">I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.</p>
										</div>
									</div>
									<div class="d-flex gap-3 align-items-center py-4">
										<div class="d-block mb-auto">
											<img class="rounded-circle" :src="`${baseUrl}/public/images/demo/reviews-1.jpeg`" alt="image" />
										</div>
										<div class="small">
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<i class="fas fa-star text-warning"></i>
											<p class="fw-bold d-inline-block mb-2">Rahman <span class="text-secondary">- september 13, 2021</span></p>
											<p class="text-muted mb-0">There was a small mistake in the order. In return, I got the correct order and I could keep the wrong one for myself.</p>
										</div>
									</div>
									<!-- form --text -->
									<div class="small pt-3">
										<p class="fw-bold mb-2">Add a review</p>
										<p class="text-muted">Your email address will not be published. Required fields are marked *</p>
									</div>
									<div class="text-nowrap">
										<p class="d-inline-block text-bold text-muted">your rating *</p>
										<small class="small">
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
										</small>
									</div>
									<!-- ==== submit-reviews-form === -->
									<form class="row g-3">
										<div class="col-12">
											<label for="exampleFormControlTextarea1" class="form-label text-bold text-muted">your review</label>
											<textarea class="form-control rounded-0 box-shadow-none" id="exampleFormControlTextarea1" rows="2" required></textarea>
										</div>
										<div class="col-12">
											<label for="exampleFormControlTextarea1" class="form-label text-bold text-muted">Choose pictures (maxsize: 50 kB, max files: 2)</label>
											<input type="file" class="form-control rounded-0 box-shadow-none" aria-label="file example" required />
											<div class="invalid-feedback">Example invalid form file feedback</div>
										</div>
										<div class="col-md-6">
											<label class="form-label text-bold text-muted">Name</label>
											<input type="name" class="form-control rounded-0 box-shadow-none" required />
										</div>
										<div class="col-md-6">
											<label class="form-label text-bold text-muted">Email</label>
											<input type="email" class="form-control rounded-0 box-shadow-none" required />
										</div>
										<div class="col-12">
											<button type="submit" class="hover-btn-bg-black btn rounded-0 border border-dark bg-transparent text-uppercase small box-shadow-none btn-sm px-4">submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- recomanded productData -->
		<!-- <SwiperC> -->
		<!-- <swiper-slide v-for="(slideContent, index) in 10" :key="index" :virtualIndex="index">
				<div class="card rounded-0 group-hover p-3">
					<div class="overflow-hidden position-relative">
						<img class="w-100" src="public/images/demo/electronic-lp4.jpg" />
						<div class="card-img-overlay rounded-0 d-flex p-0 bg-opacity-0 justify-content-end align-items-end bg-dark hover-bg-opacity-10 transition-1000">
							<div class="btn-group-vertical transform-rotateY-90 hover-transform-rotateY-0 transition-500">
								<a class="btn btn-light p-0 border-0"><i class="p-2 fas fa-random bg-white border"></i></a>
								<a class="btn btn-light p-0 border-0"><i class="p-2 far fa-heart bg-white border"></i></a>
							</div>
						</div>
					</div>
					<div class="card-body text-capitalize small px-0">
						<p class="mb-0 text-truncate">
							samsung electronics <br />
							samsung galaxy s21 5G
						</p>
					</div>
					<div class="card-footer border-0 bg-transparent h-6 overflow-hidden p-0">
						<div class="hover-mt-n25 transition-500 small">
							<p class="mt-2 text-red-danger"><del class="text-secondary small">$799.00</del> $599.00</p>
							<div class="text-uppercase small cursor-p">
								<a class="text-decoration-none text-dark fw-bold">add to cart</a>
								<div class="vr mx-1"></div>
								<a class="text-decoration-none text-dark fw-bold">quick view</a>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide> -->
		<!-- </SwiperC> -->
		<section class="py-4 px-3">
			<h4 class="fw-bolder text-capitalize text-center py-2">you may also like</h4>
			<div class="container-lg position-relative group-btn-hover overflow-hidden group-hover-btn-opacity border p-0" id="autoCarousel"></div>
		</section>
	</Layout>
</template>
