import { ref, reactive } from 'vue'

const dialog = reactive({
    isOpen: null,

    closeModal() {
        dialog.isOpen = null

    },
    openModal(e) {
        dialog.isOpen = e

    },
})

export { dialog }