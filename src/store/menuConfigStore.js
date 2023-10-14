import { reactive } from 'vue'


const menuConfigStore = reactive({
    activeMenu: false,
    menuToggle: () => {
        menuConfigStore.activeMenu = !menuConfigStore.activeMenu
    }

})

export { menuConfigStore }