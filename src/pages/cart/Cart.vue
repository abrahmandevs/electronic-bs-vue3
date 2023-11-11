<script setup>
	import { ref, reactive } from "vue"
	import AppPublicLayout from "../../layouts/AppPublicLayout.vue"
	import { cartStore } from "../../store/cartStore"
	const cart = cartStore

	import { HeartIcon, StarIcon } from "@heroicons/vue/24/solid"
</script>

<template>
	<AppPublicLayout>
		<!-- start lavel -->
		<section class="py-3">
			<div class="container-lg px-4">
				<div class="row">
					<div class="col-4 p-0">
						<div class="card h-100 rounded-0 border-0">
							<div class="card-body d-flex flex-column flex-md-row align-items-center text-center text-md-start p-0">
								<i class="fa-2x far fa-check-circle text-success mb-auto pe-0 pe-md-2"></i>
								<br class="d-block md-md-none" />
								<div class="py-1 py-md-0">
									<h6 class="fw-bold text-uppercase mb-1">shoping bag</h6>
									<p class="text-capitalize text-muted mb-1 small d-none d-md-block">view your items</p>
								</div>
							</div>
							<div class="card-footer rounded-0 border-0 p-0">
								<div class="progress h-2 bg-danger rounded-0">
									<div class="progress-bar bg-danger" role="progressbar"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-4 p-0">
						<div class="card h-100 rounded-0 border-0">
							<div class="card-body d-flex flex-column flex-md-row align-items-center text-center text-md-start p-0">
								<i class="fa-2x far fa-check-circle mb-auto pe-0 pe-md-2"></i>
								<br class="d-block d-md-none" />
								<div class="py-1 py-md-0">
									<h6 class="fw-bold text-uppercase mb-1">shoping checkout</h6>
									<p class="text-capitalize text-muted mb-1 small d-none d-md-block">enter your details</p>
								</div>
							</div>
							<div class="card-footer rounded-0 border-0 p-0">
								<div class="progress h-2 rounded-0">
									<div class="progress-bar bg-danger" role="progressbar"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-4 p-0">
						<div class="card h-100 rounded-0 border-0">
							<div class="card-body d-flex flex-column flex-md-row align-items-center text-center text-md-start p-0">
								<i class="fa-2x far fa-check-circle mb-auto pe-0 pe-md-2"></i>
								<br class="d-block d-md-none" />
								<div class="py-1 py-md-0">
									<h6 class="fw-bold text-uppercase mb-1">payment confirmation</h6>
									<p class="text-capitalize text-muted mb-1 small d-none d-md-block">confirm payment</p>
								</div>
							</div>
							<div class="card-footer rounded-0 border-0 p-0">
								<div class="progress h-2 rounded-0">
									<div class="progress-bar bg-danger" role="progressbar"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- end lavel -->
		<!-- start table -->
		<section class="py-5">
			<div class="container-lg">
				<div class="row gap-3 gap-md-0">
					<div class="col-md-8">
						<table class="table border">
							<thead class="text-uppercase">
								<tr class="d-none d-md-table-row">
									<th class="d-md-table-cell py-3" scope="col"><small>product</small></th>
									<th class="d-md-table-cell py-3" scope="col"><small>price</small></th>
									<th class="d-md-table-cell py-3" scope="col"><small>quantity</small></th>
									<th class="d-md-table-cell py-3 text-nowrap" scope="col"><small>total Price</small></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in cart.items" :key="index" class="group-hover d-block d-md-table-row position-relative">
									<td class="d-block d-md-table-cell">
										<div class="row align-items-center">
											<div class="col-4">
												<img class="img-fluid" :src="item.product.thumbnail" />
											</div>
											<div class="col">
												<p class="text-capitalize mb-0">{{ item.product.title }}</p>
											</div>
										</div>
									</td>
									<td class="d-flex justify-content-between d-md-table-cell align-middle">
										<span class="d-md-none">Price</span>
										<span class="text-nowrap">${{ item.product.price }}</span>
									</td>
									<td class="d-flex justify-content-between d-md-table-cell align-middle">
										<span class="d-md-none">Quantity</span>
										<div class="btn-group btn-group-sm w-auto">
											<button @click="cart.increment(item.product)" class="btn rounded-0 box-shadow-none btn-success">+</button>
											<input type="text" class="form-controle form-control-sm border rounded-0 outline-0 text-center" v-model="item.quantity" style="max-width: 3rem" />
											<button @click="cart.decrement(item.product)" class="btn rounded-0 box-shadow-none btn-danger">-</button>
										</div>
									</td>
									<td class="d-flex justify-content-between d-md-table-cell align-middle">
										<span class="d-md-none">Subtotal</span>
										<span class="text-nowrap">${{ item.product.price * item.quantity }}</span>
									</td>
									<button @click="cart.removeItem(item.product.id)" class="absolute top-0 bottom-0 end-0 m-auto me-1 d-flex align-items-center justify-content-center bg-danger text-light invisible hover-visible rounded-circle h-8 w-8">X</button>
								</tr>
							</tbody>
						</table>
						<div class="d-flex gap-2 flex-column flex-lg-row align-items-center justify-content-between fw-light">
							<div class="d-flex w-100 justify-content-between border-bottom border-dark pb-1">
								<input v-model="cart.couponCode" type="text" class="w-100 outline-0 border-0" placeholder="coupon code '20OFF, 15OFF'" />
								<button v-if="!cart.discountApplied" @click="cart.applyCoupon" class="btn-sm text-success text-nowrap text-uppercase box-shadow-none border-0 p-0" type="button">apply coupon</button>
								<button v-if="cart.discountApplied" @click="cart.removeCoupon" class="btn-sm text-danger fw-bold text-nowrap text-uppercase box-shadow-none border-0 p-0" type="button">Remove Coupon</button>
							</div>
							<div class="text-nowrap lg-w-100 gap-2 pb-1">
								<button @click="cart.emptyCart()" class="inline-block btn btn-sm btn-transparent text-uppercase box-shadow-none hover-bg-dark border border-dark rounded-0 px-3">enpty cart</button>
								<button @click="cart.saveCartInLocalStorage()" class="btn btn-sm btn-transparent text-uppercase box-shadow-none hover-disabled border text-secondary rounded-0 px-3">update cart</button>
							</div>
						</div>
					</div>
					<div class="col-md-4 pt-5 pt-md-0">
						<div class="text-uppercase border-dashed border-1 p-3 border-danger">
							<h6 class="fw-bold">cart totals</h6>
							<div class="d-flex justify-content-between align-items-center border-bottom small">
								<p class="pt-2">subtotal</p>
								<div class="d-flex align-items-center justify-content-end gap-2">
									<p v-if="cart.discountApplied" class="pt-2 small text-danger fw-bold text-decoration-line-through">${{ cart.originalPrice }}</p>
									<p class="pt-2">
										${{ cart.totalPrice }}
										<span v-if="cart.discountApplied"> ({{ cart.discountInPersentare }}%)</span>
									</p>
								</div>
							</div>
							<div class="d-flex justify-content-between align-items-center border-bottom small pt-3">
								<p class="align-self-start pe-4">shipping</p>
								<div class="text-capitalize">
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
										<label class="form-check-label" for="flexRadioDefault1">free shipping</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
										<label class="form-check-label" for="flexRadioDefault2"
											>local pickup: <span class="fw-bold">$10:00</span>
											<p class="fst-italic">Shipping options will be updated during checkout</p>
											<a href="#" class="text-decoration-none text-uppercase"
												><i class="fas fa-shipping-fast text-muted"></i>
												<p class="ps-1 fw-bold text-body d-inline-block">calculate shipping</p>
											</a>
										</label>
									</div>
								</div>
							</div>
							<div class="text-center border-top">
								<div class="d-flex justify-content-between align-items-center border-bottom small pt-3">
									<p>subtotal</p>
									<p>${{ cart.totalPrice }}</p>
								</div>
								<router-link :to="{ name: 'checkout' }" @click="cart.checkOut()" class="w-100 fw-bold text-white bg-danger hover-border-red hover-text-red hover-bg-transparent btn rounded-0 text-uppercase box-shadow-none" type="button"><small>order and shipping</small></router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- end table -->
	</AppPublicLayout>
</template>

<style scoped>
	.hover-text-white:hover {
		color: white !important;
	}
	.group-hover:hover .hover-visible,
	.hover-visible:hover {
		visibility: visible !important;
		z-index: 50;
	}
</style>
