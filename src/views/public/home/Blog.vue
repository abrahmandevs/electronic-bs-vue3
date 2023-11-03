<script setup>
	const baseUrl = window.location.origin
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
			<div class="row g-3 m-0">
				<div class="col-sm-12 col-md-4 m-0">
					<div class="card rounded-0 border-0 group-hover">
						<div class="overflow-hidden position-relative">
							<img class="img-fluid" :src="`${baseUrl}/assets/images/demo/blog-2.jpg `" />
							<div class="card-img-overlay rounded-0 p-0 bg-dark bg-opacity-0 top-100 hover-bg-opacity-20 hover-top-0 transition-500"></div>
						</div>
						<div class="card-body small p-0 text-capitalize">
							<h6 class="my-1">info here</h6>
							<h6 class="fw-bolder">ultra-thin laptop rentals and rivalry</h6>
							<p class="text-muted lh-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam alias maiores exercitationem?</p>
							<button class="btn bg-white rounded-0 fw-bolder btn-sm p-0">
								<a class="text-black text-decoration-none text-uppercase" href="#"
									>read more
									<i class="ps-1 fas fa-long-arrow-alt-right"></i>
								</a>
							</button>
						</div>
					</div>
				</div>
				<div class="d-none d-md-block col-md-4 m-0">
					<div class="card rounded-0 border-0 group-hover">
						<div class="overflow-hidden position-relative">
							<img class="img-fluid" :src="`${baseUrl}/assets/images/demo/blog-1.jpg `" />
							<div class="card-img-overlay rounded-0 p-0 bg-dark bg-opacity-0 top-100 hover-bg-opacity-20 hover-top-0 transition-500"></div>
						</div>
						<div class="card-body small text-capitalize p-0">
							<h6 class="my-1">info here</h6>
							<h6 class="fw-bolder">how to tag faces in the android gallery</h6>
							<p class="text-muted lh-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam alias maiores exercitationem?</p>
							<button class="btn bg-white rounded-0 fw-bolder btn-sm p-0">
								<a class="text-black text-decoration-none text-uppercase" href="#"
									>read more
									<i class="ps-1 fas fa-long-arrow-alt-right"></i>
								</a>
							</button>
						</div>
					</div>
				</div>
				<div class="d-none d-md-block col-md-4 m-0">
					<div class="card rounded-0 border-0 group-hover">
						<div class="overflow-hidden position-relative">
							<img class="img-fluid" :src="`${baseUrl}/assets/images/demo/blog-3.jpg `" />
							<div class="card-img-overlay rounded-0 p-0 bg-dark bg-opacity-0 top-100 hover-bg-opacity-20 hover-top-0 transition-500"></div>
						</div>
						<div class="card-body small text-capitalize p-0">
							<h6 class="my-1">info here</h6>
							<h6 class="fw-bolder">the new sony solo cinematic dream</h6>
							<p class="text-muted lh-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam alias maiores exercitationem?</p>
							<button class="btn bg-white rounded-0 fw-bolder btn-sm p-0">
								<a class="text-black text-decoration-none text-uppercase" href="#"
									>read more
									<i class="ps-1 fas fa-long-arrow-alt-right"></i>
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="m-4"></section>
</template>
