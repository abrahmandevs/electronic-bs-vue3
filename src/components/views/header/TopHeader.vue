<script setup>
	import { ref } from "vue"
	import { authStore } from "../../../store/authStore"
	const auth = authStore
	import { cartStore } from "../../../store/cartStore"
	const cart = cartStore
	import { wishlistStore } from "../../../store/wishlistStore"
	const wishlist = wishlistStore

	const userEmail = ref("kminchelle")
	const userPassword = ref("0lelplR")
	import "bootstrap/dist/css/bootstrap.min.css"
	import "bootstrap"

	// if (true) {
	// 	var myModal = new bootstrap.Modal(document.getElementById("userLoginModal")).show()
	// }

	/*
	<?php
			<?php

				if (isset($signup_data['signup_modalErrors'])) {
					?>
						var myModal = new bootstrap.Modal(document.getElementById("<?php echo($signup_data['signup_modalErrors']?? ''); ?>")).show();
					<?php
				}
	 */
</script>
<template>
	<!--header-section-->
	<div class="fixed-top bg-light transition-700" id="affix">
		<section id="homeAdHeader" class="d-none d-md-block container-fluid bg-no-repeat bg-position-center bg-size-cover" style="background-image: url('/images/demo/store-noted-1.jpg')">
			<!-- ad section -->
			<div class="container-lg py-3">
				<p class="mb-0 h5 font-monospace text-center text-uppercase fw-semibold">
					<b class="text-red-danger">SENIOR’S MEMBER</b> DISCOUNT DAYS! SAVE <b class="text-red-danger">25%</b>
					EACH TUESDAY
				</p>
			</div>
		</section>
		<!-- ad section end -->
		<section id="homeHeader" class="bg-light border-bottom shadow-sm">
			<div class="container-lg">
				<!-- header " logo, search-bar, language, usd, icons "  end-->
				<div class="row align-items-center">
					<div class="col-12 col-md-3 order-2 order-md-1 text-center text-md-start">
						<svg class="img-fluid max-h-7 ps-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								d="M502.9 266v69.7c0 62.1-50.3 112.4-112.4 112.4-61.8 0-112.4-49.8-112.4-111.3v-70.2l34.3 16 51.1-15.2V338c0 14.7 12 26.5 26.7 26.5S417 352.7 417 338v-72h85.9zm-224.7-58.2l34.3 16 51.1-15.2V173c0-60.5-51.1-109-112.1-109-60.8 0-112.1 48.2-112.1 108.2v162.4c0 14.9-12 26.7-26.7 26.7S86 349.5 86 334.6V266H0v69.7C0 397.7 50.3 448 112.4 448c61.6 0 112.4-49.5 112.4-110.8V176.9c0-14.7 12-26.7 26.7-26.7s26.7 12 26.7 26.7v30.9z"
							/>
						</svg>
						<!-- <img class="img-fluid max-h-7 ps-2" src="../../../assets/vue.svg" alt="logo" /> -->
					</div>
					<div class="col-12 col-md-9 order-1 order-md-2">
						<div class="row g-0 justify-content-center align-items-center">
							<!-- header " search-bar" -->
							<div id="homeLinkButton" class="col-auto py-2 d-md-none">
								<button class="btn box-shadow-none text-body bg-transparent border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
									<i class="fas fa-bars"></i>
								</button>
							</div>
							<div class="col col-xl-8 px-0">
								<form action="" class="row g-0 border" id="category-search-box">
									<div class="col-4 d-none d-lg-block border-end">
										<select name="" id="" class="form-select placeholder-sm rounded-0 border-0">
											<option>All Category</option>
											<option value="">Accessories</option>
											<option value="backup-charger">Backup Charger</option>
											<option value="headphone">Headphone</option>
											<option value="powre-socket">Powre Socket</option>
											<option value="printer">Printer</option>
											<option value="usb">USB</option>
											<option value="webcam">Webcam</option>
											<option value="wi-fi-router">Wi-Fi Router</option>
											<option value="">Accessories</option>
											<option value="backup-charger">Backup Charger</option>
											<option value="headphone">Headphone</option>
											<option value="powre-socket">Powre Socket</option>
											<option value="printer">Printer</option>
											<option value="usb">USB</option>
											<option value="webcam">Webcam</option>
											<option value="wi-fi-router">Wi-Fi Router</option>
											<option value="">Accessories</option>
											<option value="backup-charger">Backup Charger</option>
											<option value="headphone">Headphone</option>
											<option value="powre-socket">Powre Socket</option>
											<option value="printer">Printer</option>
											<option value="usb">USB</option>
											<option value="webcam">Webcam</option>
											<option value="wi-fi-router">Wi-Fi Router</option>
											<option value="cameras-photos">Cameras & Photos</option>
										</select>
									</div>
									<div class="col input-group">
										<input type="text " class="form-control rounded-0 border-0 placeholder-sm" placeholder="Search for Product" />
										<button class="input-group-text border-0 rounded-0 bg-white"><i class="fa fa-search"></i></button>
									</div>
								</form>
							</div>
							<!-- "User Access" start-->
							<div id="main-nav-user" class="col-auto py-2 ms-auto">
								<ul class="nav text-uppercase small align-items-center">
									<li class="nav-item d-none d-md-block">
										<a class="nav-link text-s" href=" # ">english</a>
									</li>
									<li class="nav-item d-none d-md-block">
										<a class="nav-link" href="# ">usd</a>
									</li>
									<!-- user login / register -->
									<li class="nav-item d-none d-md-block">
										<div class="dropdown text-end" v-if="auth.isAuthenticated">
											<button class="d-block link-body-emphasis text-decoration-none data-toggle" data-bs-toggle="dropdown">
												<img class="block object-cover rounded-circle" :src="auth.user.image" alt="image" width="32" height="32" />
											</button>
											<ul class="dropdown-menu text-small" style="">
												<li><router-link :to="{ name: 'dashboard' }" class="dropdown-item" href="#">Dashboard</router-link></li>
												<li><a class="dropdown-item" href="#">Settings</a></li>
												<li><a class="dropdown-item" href="#">Profile</a></li>
												<li><hr class="dropdown-divider" /></li>
												<li><a class="dropdown-item" type="button" @click="auth.logout">Log Out</a></li>
											</ul>
										</div>
										<a v-if="!auth.isAuthenticated" class="nav-link" data-bs-toggle="modal" href="#userLoginModal" role="button">
											<svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512">
												<path
													d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
												/>
											</svg>
										</a>
									</li>
									<li class="nav-item d-none d-md-block">
										<button class="nav-link position-relative" data-bs-toggle="offcanvas" data-bs-target="#wishlistProduct">
											<svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512">
												<path
													d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
												/>
											</svg>
											<span v-if="wishlist.totalItems" class="position-absolute ms-n2 mt-2 top-0 start-100 translate-middle badge rounded-pill bg-red-danger">{{ wishlist.totalItems }}</span>
										</button>
									</li>
									<li class="nav-item">
										<button class="nav-link position-relative" data-bs-toggle="offcanvas" data-bs-target="#cartProduct">
											<svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 640 512">
												<path
													d="M0 32C0 14.3 14.3 0 32 0H48c44.2 0 80 35.8 80 80V368c0 8.8 7.2 16 16 16H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H541.3c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H253.3c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H144c-44.2 0-80-35.8-80-80V80c0-8.8-7.2-16-16-16H32C14.3 64 0 49.7 0 32zM432 96V56c0-4.4-3.6-8-8-8H344c-4.4 0-8 3.6-8 8V96h96zM288 96V56c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56V96 320H288V96zM512 320V96h16c26.5 0 48 21.5 48 48V272c0 26.5-21.5 48-48 48H512zM240 96h16V320H240c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
												/>
											</svg>
											<span v-if="cart.totalItems" class="position-absolute ms-n2 mt-2 top-0 start-100 translate-middle badge rounded-pill bg-red-danger">{{ cart.totalItems }}</span>
										</button>
									</li>
								</ul>
							</div>
							<!-- header " language, usd, icons " end -->
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- header " main-manu, nav-bar, information --start- " -->
		<section id="homeNav" class="d-none d-md-block">
			<!-- main-manu-icon and category    start       -->
			<div class="container-lg">
				<div class="row justify-content-center align-items-center">
					<!-- nav-bar and pages-link start-->
					<div class="col small">
						<nav class="d-flex">
							<button class="btn btn-light box-shadow-none p-0 border-0 bg-transparent me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
								<i class="fas fa-bars"></i>
							</button>
							<ul class="nav text-uppercase small">
								<li class="nav-item"><router-link to="/" class="nav-link px-3 text-black">Homepages</router-link></li>
								<li class="nav-item"><a href="# " class="nav-link px-3 text-black">Blog</a></li>
								<li class="nav-item"><a href="#" class="nav-link px-3 text-black">Page</a></li>
								<li class="nav-item"><router-link :to="{ name: 'shop' }" class="nav-link px-3 text-black">Shop</router-link></li>
								<li class="nav-item"><a href="testing.html" class="nav-link px-3 text-black">About us</a></li>
								<li class="nav-item"><a href="# " class="nav-link px-3 text-black">Contact us</a></li>
								<li class="nav-item"><a href="# " class="nav-link px-3 fw-bold h6 mb-0 text-red-danger">hot deals!</a></li>
							</ul>
						</nav>
					</div>
					<!-- nav-bar and pages-link end-->
					<!-- nav-bar and pages-link start-->
					<div class="col-auto text-end p-0">
						<nav class="small">
							<ul class="nav text-uppercase small">
								<li class="nav-item">
									<a href="# " class="nav-link text-black py-3">Recently Viewed</a>
								</li>
								<li class="nav-item d-none d-lg-block text-black">
									<a href="# " class="nav-link py-3"> <i class="fas fa-mobile-alt text-red-danger"></i> +8801909055573</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<!-- main-manu-icon and category    end       -->
			</div>
		</section>
		<!-- header " main-manu, nav-bar, information --end " -->
		<div class="offcanvas offcanvas-start text-start" tabindex="-1" id="offcanvasExample">
			<div class="offcanvas-header pt-4 px-4">
				<h5 class="offcanvas-title small fw-bolder" id="offcanvasExampleLabel">ALL DEPARTMENTS</h5>
				<button type="button" class="btn-close text-reset box-shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body text-uppercase small py-1 scroll-sm px-4 scroll-sm">
				<div class="accordion accordion-flush opacity-100 scroll-lg" id="accordionPanelsStayOpenExample">
					<div class="accordion-item">
						<div class="accordion-header h6 py-2">
							<a href="#" class="text-decoration-none small text-black d-block">hot deals!</a>
						</div>
					</div>
					<div class="accordion-item">
						<div class="accordion-header h6 py-2">
							<a href="" class="text-decoration-none small text-black d-block">top 100 offers</a>
						</div>
					</div>
					<div class="accordion-item">
						<div class="accordion-header accordion-button collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
							<h6 class="small mb-0">smartphone & tablet</h6>
						</div>
						<div id="collapseThree" class="accordion-collapse collapse transition-1000" aria-labelledby="panelsStayOpen-headingOne">
							<div class="accordion-body">
								<ul class="list-group text-muted list-group-transparent list-group-border-0 text-capitalize ps-0">
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">samsung</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">xiaomi</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">ipad</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">realme</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">vivo</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">iphone</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">oppo</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">nokia</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">symphony</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">motorola</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">onePlus</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">google</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">lenovo</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">sony</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">LG</a>
								</ul>
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<div class="accordion-header accordion-button py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
							<h6 class="small mb-0">computer & laptop</h6>
						</div>
						<div id="collapseFour" class="accordion-collapse collapse transition-1000" aria-labelledby="panelsStayOpen-headingOne">
							<div class="accordion-body text-capitalize">
								<ul class="list-group text-muted list-group-transparent list-group-border-0 text-capitalize ps-0">
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">dell</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">Acer</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">apple</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">hp</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">google</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">microsoft</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">asus</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">samsung</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">lenovo</a>
								</ul>
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<div class="accordion-header accordion-button py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
							<h6 class="small mb-0">tv & audio</h6>
						</div>
						<div id="collapseFive" class="accordion-collapse collapse transition-1000" aria-labelledby="panelsStayOpen-headingOne">
							<div class="accordion-body">
								<ul class="list-group text-muted list-group-transparent list-group-border-0 text-capitalize ps-0">
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">sony</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">samsung</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">LG</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">Mi</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">walton</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">singer</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">acer</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">minister</a>
								</ul>
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<div class="accordion-header accordion-button py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
							<h6 class="small mb-0">games & accessories</h6>
						</div>
						<div id="collapseSix" class="accordion-collapse collapse transition-1000" aria-labelledby="panelsStayOpen-headingOne">
							<div class="accordion-body">
								<ul class="list-group text-muted list-group-transparent list-group-border-0 text-capitalize">
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">gaming chair</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">gaming sofa</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">keyboard</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">mouse</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">headphone</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">mouse pad</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">gamepad</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">gaming console</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">gaming desk</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">games</a>
								</ul>
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<div class="accordion-header accordion-button py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSaven">
							<h6 class="small mb-0">electronic & housewares</h6>
						</div>
						<div id="collapseSaven" class="accordion-collapse collapse transition-1000" aria-labelledby="panelsStayOpen-headingOne">
							<div class="accordion-body">
								<ul class="list-group text-muted list-group-transparent list-group-border-0 text-capitalize ps-0">
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">induction cooker</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">electronic cooker</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">diswasher</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">humidifier</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">air purifier</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">sewing maching</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">washing maching</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">fruit maching</a>
								</ul>
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<div class="accordion-header accordion-button py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
							<h6 class="small mb-0">cameras & photos</h6>
						</div>
						<div id="collapseEight" class="accordion-collapse collapse transition-1000" aria-labelledby="panelsStayOpen-headingOne">
							<div class="accordion-body">
								<ul class="list-group text-muted list-group-transparent list-group-border-0 text-capitalize ps-0">
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">iphone</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">ipad</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">samsung</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">realme</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">nokia</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">ipad</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">samsung</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">vivo</a>
								</ul>
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<div class="accordion-header accordion-button py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine">
							<h6 class="small mb-0">accessories</h6>
						</div>
						<div id="collapseNine" class="accordion-collapse collapse transition-1000" aria-labelledby="panelsStayOpen-headingOne">
							<div class="accordion-body">
								<ul class="list-group text-muted transition-1000 list-group-transparent list-group-border-0 text-capitalize ps-0">
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">iphone</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">ipad</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">samsung</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">items</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">items</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">ipad</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">samsung</a>
									<a href="#" class="list-group-item list-group-item-action text-muted px-0">items</a>
								</ul>
							</div>
						</div>
					</div>
					<!-- Accoridion item end-->
				</div>
			</div>
		</div>
	</div>

	<!-- product wishlist offcancvas -->
	<div class="offcanvas offcanvas-end" tabindex="-1" id="wishlistProduct" aria-labelledby="wishlistProductLabel">
		<div class="offcanvas-header px-3 py-2 border-b">
			<h5 class="offcanvas-title" id="wishlistProductLabel">Wishlist</h5>
			<button type="button" data-bs-dismiss="offcanvas">X</button>
		</div>
		<div class="offcanvas-body d-flex flex-column w-100 py-2">
			<div class="flex-grow-1">
				<div v-for="(item, index) in wishlist.items" :key="index" class="w-100 m-auto relative row overflow-hidden border mb-1 group-hover" style="height: 80px">
					<button @click="wishlist.removeItem(item.product.id)" class="absolute top-0 bottom-0 end-0 start-0 m-auto text-center bg-danger text-light invisible hover-visible rounded-circle h-6 w-6">X</button>
					<div class="col-4 p-0">
						<img :src="item.product.thumbnail ?? ''" class="h-100 w-100 object-fit-cover" alt="..." />
					</div>
					<div class="col-8 p-0 px-2">
						<h5 class="card-title">{{ item.product.title }}</h5>
						<p class="small flex just:ify-items-center justify-content-between"><strong>Price:</strong> $ {{ item.product.price }}</p>
						<p class="small flex justify-items-center justify-content-between"><strong>InStock:</strong> {{ item.product.stock }}</p>
					</div>
				</div>
				<h1 v-if="0 == Object.entries(wishlist.items).length" class="text-secondary text-center fw-700">No Wishlist Found</h1>
			</div>
		</div>
		<div class="w-100 border-top px-3 py-2">
			<div class="mb-2 w-100 shrink-0 d-flex justify-items-center justify-content-between">
				<strong>Quantity</strong>
				<strong>{{ wishlist.totalItems }}</strong>
			</div>
			<button @click="wishlist.emptyCart()" type="button" class="hover-text-white rounded-none block w-100 btn text-danger btn-danger">Empty Wishlist</button>
		</div>
	</div>
	<!-- product cart offcancvas -->
	<div class="offcanvas offcanvas-end" tabindex="-1" id="cartProduct" aria-labelledby="cartProductLabel">
		<div class="offcanvas-header px-3 py-2 border-b">
			<h5 class="offcanvas-title" id="cartProductLabel">Cart List</h5>
			<button type="button" data-bs-dismiss="offcanvas">X</button>
		</div>
		<div class="offcanvas-body d-flex flex-column py-2">
			<div class="flex-grow-1">
				<div v-for="(item, index) in cart.items" :key="index" class="w-full mx-auto relative row overflow-hidden border mb-1 group-hover" style="height: 80px">
					<button @click="cart.removeItem(item.product.id)" class="absolute top-0 bottom-0 end-0 start-0 m-auto text-center bg-danger text-light invisible hover-visible rounded-circle h-6 w-6">X</button>
					<div class="col-4 p-0">
						<img :src="item.product.thumbnail ?? ''" class="h-100 w-100 object-fit-cover" alt="..." />
					</div>
					<div class="col-7 p-0 px-2">
						<h5 class="card-title">{{ item.product.title }}</h5>
						<p class="small flex just:ify-items-center justify-content-between"><strong>Price:</strong> $ {{ item.product.price }}</p>
						<p class="small flex justify-items-center justify-content-between"><strong>InStock:</strong> {{ item.product.stock }}</p>
					</div>
					<div class="col-1 p-0">
						<div class="h-100 d-flex flex-column w-100 gap-0 border border-secondary">
							<button @click="item.quantity++" class="p-0 h-5 btn rounded-0 box-shadow-none btn-success">+</button>
							<input type="text" readonly class="p-0 h-6 block form-control-sm border-0 rounded-0 outline-0 text-center" v-model="item.quantity" />
							<button @click="item.quantity--" class="p-0 h-5 btn rounded-0 box-shadow-none btn-danger">-</button>
						</div>
					</div>
				</div>
				<h1 v-if="0 == Object.entries(cart.items).length" class="text-secondary text-center fw-700">No Cart Found</h1>
			</div>
		</div>
		<div class="w-100 border-top px-3 py-2">
			<div class="w-100 shrink-0 d-flex justify-items-center justify-content-between">
				<strong>Quantity</strong>
				<strong>{{ cart.totalItems }}</strong>
			</div>
			<div class="mb-2 w-100 shrink-0 d-flex justify-items-center justify-content-between">
				<strong>Total Pirce</strong>
				<strong>$ {{ cart.totalPrice }}</strong>
			</div>
			<div class="w-full d-flex align-items-center justify-content-between gap-1">
				<button @click="cart.saveCartInLocalStorage()" type="button" class="rounded-none block w-100 btn text-secondary btn-secondary hover-text-white" style="--bs-link-hover-color-rgb: 25, 135, 84">Update</button>
				<button @click="cart.emptyCart()" type="button" class="hover-text-white rounded-none block w-100 btn text-danger btn-danger">Empty Cart</button>
			</div>
		</div>
	</div>
	<!-- user auth -->
	<div class="modal fade" id="userLoginModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header bg-success border-0 py-2 text-white">
					<h4 class="modal-title ps-3 ms-auto" id="login_modal">Login</h4>
					<a class="ms-auto text-decoration-none text-white" data-bs-dismiss="modal" type="button" aria-label="Close"><i class="fas fa-times d-block fs-4"></i>X</a>
				</div>
				<div class="modal-body">
					<!-- login form-->
					<form @submit.prevent="auth.authenticate(userEmail, userPassword)" class="row">
						<div class="">
							<label class="form-label">Email</label>
							<input type="text" name="userEmail" v-model="userEmail" class="form-control box-shadow-none" placeholder="Email" />
							<div class="text-danger fw-bold">{{ auth.message }}</div>
						</div>
						<div class="">
							<label class="form-label">Password</label>
							<input type="password" name="userPassword" autocomplete="" v-model="userPassword" class="form-control box-shadow-none" placeholder="Password" />
							<div class="text-danger fw-bold"></div>
						</div>
						<div class="d-flex flex-column py-3 gap-3">
							<button class="w-100 btn btn-primary py-1 box-shadow-none text-primary hover-bg-primary hover-text-light">Login</button>
							<a class="w-100 text-secondary" data-bs-target="#userRegisterModal" data-bs-toggle="modal" type="button">Click here for reginster</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade" id="userRegisterModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">Hide this modal and show the first with the button below.</div>
				<div class="modal-footer">
					<button class="btn btn-primary" data-bs-target="#userLoginModal" data-bs-toggle="modal">Back to first</button>
				</div>
			</div>
		</div>
	</div>
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
