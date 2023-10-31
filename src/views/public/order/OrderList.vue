<script setup>
	import { ref, reactive, onBeforeMount } from "vue"
	import Layout from "../Layout.vue"
	import { cartStore } from "../../../store/cartStore"
	import { order } from "../../../store/productOrderStore"
	const carts = cartStore

	onBeforeMount(() => {
		order.fetchOrders()
	})
	const totalQuantity = ref(0)
	const totalAmountOf = ref(0)
</script>

<template>
	<Layout>
		<!-- order status bar -->
		<section id="shoppign-bag" class="py-3">
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
								<i class="fa-2x far fa-check-circle text-success mb-auto pe-0 pe-md-2"></i>
								<br class="d-block d-md-none" />
								<div class="py-1 py-md-0">
									<h6 class="fw-bold text-uppercase mb-1">shoping checkout</h6>
									<p class="text-capitalize text-muted mb-1 small d-none d-md-block">enter your details</p>
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
								<i class="fa-2x far fa-check-circle text-success mb-auto pe-0 pe-md-2"></i>
								<br class="d-block d-md-none" />
								<div class="py-1 py-md-0">
									<h6 class="fw-bold text-uppercase mb-1">payment confirmation</h6>
									<p class="text-capitalize text-muted mb-1 small d-none d-md-block">confirm payment</p>
								</div>
							</div>
							<div class="card-footer rounded-0 border-0 p-0">
								<div class="progress h-2 bg-danger rounded-0">
									<div class="progress-bar bg-danger" role="progressbar"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="order-details" class="py-3">
			<div class="container-lg">
				<p class="text-uppercase small fw-bold">thank you. your order has been received.</p>
				<div class="row align-items-center small">
					<div class="col-auto border-0 border-end border-dashed px-4">
						<p class="mb-0 text-uppercase text-muted">order number:</p>
						<p class="mb-0 fw-bold">{{ order.orders.length }}</p>
					</div>
					<div class="col-auto border-0 border-end border-dashed px-4">
						<p class="mb-0 text-uppercase text-muted">date:</p>
						<p class="mb-0 fw-bold text-capitalize">september 18, 2021</p>
					</div>
					<div class="col-auto border-0 border-end border-dashed px-4">
						<p class="mb-0 text-uppercase text-muted">total:</p>
						<p class="mb-0 fw-bold text-danger">$1200.00</p>
					</div>
					<div class="col-auto border-0 px-4">
						<p class="mb-0 text-uppercase text-muted">payment method:</p>
						<p class="mb-0 fw-bold text-capitalize">check payments</p>
					</div>
				</div>
				<!-- order details  -->
				<div class="py-5">
					<h3 class="text-uppercase fw-bold">order details</h3>
					<table class="table border-0 small">
						<thead class="text-uppercase">
							<tr class="border-bottom border-secondary">
								<th class="py-3 border-0" scope="col">product</th>
								<th class="py-3 border-0 text-end" scope="col">Net Price</th>
								<th class="py-3 border-0 text-end" scope="col">Quantity</th>
								<th class="py-3 border-0 text-end" scope="col">Total</th>
							</tr>
						</thead>
						<tbody>
							<template v-for="(items, index) in order.orders" :key="index">
								<template v-for="(product, index) in items.products" :key="index">
									<tr class="border-bottom border-light">
										<td class="py-3">
											{{ product.title }}
										</td>
										<td class="text-end py-3">
											{{ product.price }}
										</td>
										<td class="text-end py-3">
											<!-- {{ product.quantity }} -->
											{{ (totalQuantity += product.quantity) }}
										</td>
										<td class="text-end py-3">
											<!-- {{ product.price * product.quantity }} -->
											{{ (totalAmountOf += product.price * product.quantity) }}
										</td>
									</tr>
								</template>
							</template>
							<tr class="border-bottom border-light">
								<td colspan="2" class="py-3">
									<p class="mb-0 text-uppercase text-end fw-bold">Quantity:</p>
								</td>
								<td class="text-end py-3">
									<span>{{ totalQuantity }}</span>
								</td>
							</tr>
							<tr class="border-bottom border-light">
								<td colspan="2" class="py-3">
									<p class="mb-0 text-uppercase text-end fw-bold">shipping:</p>
								</td>
								<td class="text-end py-3">
									<span>free shippign</span>
								</td>
							</tr>
							<tr class="border-bottom border-light">
								<td colspan="2" class="py-3">
									<p class="mb-0 text-uppercase text-end fw-bold">payment method:</p>
								</td>
								<td class="text-end py-3">
									<span>check payments</span>
								</td>
							</tr>
							<tr class="border-bottom border-light">
								<td colspan="2" class="py-3">
									<p class="mb-0 text-uppercase text-end fw-bold">totals:</p>
								</td>
								<td class="text-end py-3">
									<span class="text-danger">${{ totalAmountOf }}</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	</Layout>
</template>

<style scoped></style>
