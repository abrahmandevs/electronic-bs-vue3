<script setup>
	const baseUrl = window.location.origin
</script>
<template>
	<!-- carousel-section-start -->

	<section id="MainCarousel ">
		<div class="container-lg">
			<div class="row gx-lg-2 gap-3 gap-lg-0">
				<div class="col-lg-8">
					<div id="carouselExampleIndicators" class="carousel slide carousel-fade bg-no-repeat bg-size-cover bg-position-center" data-bs-ride="carousel" style="background-image: url('/images/demo/bg-main-slide.jpg'); height: 445px; width: auto; overflow: hidden">
						<div class="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
						</div>
						<div class="carousel-inner">
							<div class="carousel-item active">
								<div class="row">
									<div class="col-9 col-md-5 text-white align-self-center text-center text-lg-start mt-5 ps-md-5 m-auto m-md-0">
										<div class="text-capitalize">
											<!-- <div class="mb-md-5 pb-md-5"> -->
											<h3 class="h-md2">First slide label</h3>
											<p class="text-capitalize mb-2">Some representative placeholder content for the first slide.</p>
											<a class="btn btn-primary text-white btn-sm text-uppercase">shop now</a>
										</div>
									</div>
									<div class="col-md-7 p-0">
										<div class="mt-5 pt-md-3 mt-xl-0 pt-xl-0">
											<img class="d-block img-fluid mt-5 pt-lg-5" src="images/demo/slide1-electronic-2.png" alt="image " />
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-item">
								<div class="row">
									<div class="col-9 col-md-5 text-white align-self-center text-center text-lg-start mt-5 ps-md-5 m-auto m-md-0">
										<div class="text-capitalize">
											<h3 class="h-md2">second slide label</h3>
											<p class="mb-2">Some representative placeholder content for the first slide.</p>
											<a class="btn btn-primary text-white btn-sm text-uppercase">shop now</a>
										</div>
									</div>
									<div class="col-md-7 p-0">
										<div class="mt-4 mx-auto" style="max-height: 500px !important; max-width: 300px !important">
											<img class="d-block img-fluid" src="images/demo/slide2-electronic2.png" alt="image " />
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-item">
								<div class="row">
									<div class="col-9 col-md-5 text-white align-self-center text-center text-lg-start mt-5 ps-md-5 m-auto m-md-0">
										<div class="mb-md-5 pb-md-5 text-capitalize">
											<h3 class="h-md2">third slide label</h3>
											<p class="mb-2">Some representative placeholder content for the first slide.</p>
											<a class="btn btn-primary text-white btn-sm text-uppercase">shop now</a>
										</div>
									</div>
									<div class="col-md-7 p-0">
										<div class="mt-4 mt-md-5 pt-md-5 mx-auto m-auto" style="max-height: 500px !important; max-width: 300px !important">
											<img class="d-block img-fluid" src="images/demo/slide3-electronic2.png" alt="image " />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="row gap-2 gap-sm-0 gap-lg-2">
						<div class="col-sm-6 col-lg-12">
							<div class="card rounded-0 border-0 position-relative overflow-hidden group-hover h-100">
								<img class="img-fluid hover-scale-115 transition-500" src="images/demo/banner-1-electronic-1.jpg" alt="icon" />
								<div class="card-img-overlay position-absolute text-start mt-4 ms-3">
									<p class="text-uppercase text-red-danger mb-0 fw-bold">new arrivals</p>
									<p class="text-uppercase text-black mb-3 h4 fw-bolder">
										high bass <br class=" " />
										headphone
									</p>
									<button class="btn btn-dark rounded-0 mb-4 fw-bolder btn-sm text-uppercase">
										<a class="text-white text-decoration-none px-2 small" href=" "
											>shop now
											<i class="ps-1 fas fa-long-arrow-alt-right m-auto"></i>
										</a>
									</button>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-lg-12">
							<div class="card rounded-0 border-0 position-relative overflow-hidden group-hover h-100">
								<img class="img-fluid hover-scale-115 transition-500" src="images/demo/banner-5-electronic-1.jpg" alt="icon" />
								<div class="card-img-overlay position-absolute text-start mt-4 ms-3">
									<p class="text-uppercase text-red-danger mb-0 fw-bold">lg life good</p>
									<p class="text-uppercase text-black mb-3 h4 fw-bolder">a perfect <br class=" " />wash</p>
									<button class="btn btn-dark rounded-0 mb-4 fw-bolder btn-sm text-uppercase">
										<a class="text-white text-decoration-none px-2 small" href=" "
											>shop now
											<i class="ps-1 fas fa-long-arrow-alt-right m-auto"></i>
										</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- carousel-section-end -->
</template>
