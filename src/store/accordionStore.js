import { ref, reactive } from "vue"

const accordionStore = reactive({
    isShow: null,
    isActive: null,
    status: (accesskey, panel) => {
        // console.log(panelActive);
        // accordionStore.isActive = panelActive
        accordionStore.isActive !== null ? (accordionStore.isShow = accesskey) : "" // get parameter from accordion.vue component 
    },
    toggle: (role) => {
        accordionStore.isShow !== role ? (accordionStore.isShow = role) : (accordionStore.isShow = null)
        /* panelStatus.forEach((e) => { //check
            if (e == activePanel.value) {
                isActive.value = true
            } else {
                isActive.value = false
            }
            // console.log(e)
            console.log(isActive.value)
        }) */
        console.log(accordionStore.isActive)
    },

})

export { accordionStore }