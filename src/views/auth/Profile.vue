<script setup>
	import { reactive } from "vue"
	import Layouts from "../../components/layouts/Layouts.vue"
</script>
<template>
	<Layouts>
		<form method="post" enctype="multipart/form-data" class="mb-36">
			<div class="relative h-64 rounded bg-[url(`../../assets/images/user-cover.jpg`)]">
				<div class="h-40 w-40 absolute inset-0 block mt-auto -mb-16 mx-auto group">
					<input type="file" id="profileImage" name="profileImage" class="hidden previewImage" value="" />
					<img class="w-full h-full object-cover rounded-full border-8 border-teal-100 hover:border-white transition-all duration-300 shadow-md shadow-teal-500/90" src="../../assets/images/user-cover.jpg" />
					<label class="hidden group-hover:block absolute inset-0 top-1/2 text-center font-bold text-3xl text-gray-300 cursor-pointer" for="profileImage">Upload</label>
					<button type="submit" name="profileImageUpload" class="h-8 absolute inset-0 top-full mt-7 text-white bg-blue-600 rounded-md hover:bg-rose-500 group-hover:animate-bounce">Save Image</button>
					<div class="absolute inset-0 top-full text-sm text-center mt-0.5 text-rose-600"></div>
				</div>
			</div>
		</form>
		<form method="post" class="grid grid-cols-12 gap-3 px-5 sm:px-8">
			<div class="col-span-full md:col-span-4">
				<label class="" for="user_name">Name</label>
			</div>
			<div class="col-span-full md:col-span-8">
				<input type="text" name="user_name" id="user_name" class="form-input rounded-md shadow-sm block bg-white bg-opacity-90 text-gray-700 w-full max-h-12 py-1 focus:ring-0 focus:border-none" value="" placeholder="User Name" />
				<div class="text-red-600 text-sm font-medium"></div>
			</div>
			<div class="col-span-full md:col-span-4">
				<label class="" for="user_profession">Profession</label>
			</div>
			<div class="col-span-full md:col-span-8">
				<input type="text" name="user_profession" id="user_profession" class="form-input rounded-md shadow-sm block bg-white bg-opacity-90 text-gray-700 w-full max-h-12 py-1 focus:ring-0 focus:border-none" value="" placeholder="User Profession" />
				<div class="text-red-600 text-sm font-medium"></div>
			</div>
			<div class="col-span-full md:col-span-4">
				<label class="" for="user_phone">Phone</label>
			</div>
			<div class="col-span-full md:col-span-8">
				<input type="text" name="user_phone" id="user_phone" class="form-input rounded-md shadow-sm block bg-white bg-opacity-90 text-gray-700 w-full max-h-12 py-1 focus:ring-0 focus:border-none" value="" placeholder="User Phone" />
				<div class="text-red-600 text-sm font-medium"></div>
			</div>
			<div class="col-span-full md:col-span-4">
				<label class="" for="user_address">Address</label>
			</div>
			<div class="col-span-full md:col-span-8">
				<input type="text" name="user_address" id="user_address" class="form-input rounded-md shadow-sm block bg-white bg-opacity-90 text-gray-700 w-full max-h-12 py-1 focus:ring-0 focus:border-none" value="" placeholder="User Address" />
				<div class="text-red-600 text-sm font-medium"></div>
			</div>
			<div class="col-span-full sm:col-span-4 md:col-span-2">
				<button name="profileUpdate" class="bg-blue-700 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">Update</button>
			</div>
		</form>
	</Layouts>
</template>
