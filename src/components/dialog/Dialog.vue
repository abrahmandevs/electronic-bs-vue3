<script setup>
	import { dialog } from "../store/dailogStore"
	import { Menu, MenuButton, MenuItems, MenuItem, Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from "@headlessui/vue"
</script>
<template>
	<TransitionRoot appear :show="dialog.isOpen" as="div">
		<Dialog as="div" @close="dialog.closeModal" class="relative z-20">
			<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 backdrop-blur-[2px] bg-black/10" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="relative flex min-h-full items-center justify-center p-4 text-center">
					<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
						<DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
							<button type="button" class="h-6 w-6 absolute inset-y-2 left-auto right-2 hover:text-rose-600 hover:rotate-180 transition-all duration-500" @click="dialog.closeModal">
								<XMarkIcon class="w-full h-full" />
							</button>
							<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900"> Sign in </DialogTitle>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
