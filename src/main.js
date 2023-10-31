import { createApp } from 'vue'

import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router/router'

// toast notification

import Toast, { POSITION } from "vue-toastification";
const options = { position: POSITION.BOTTOM_RIGHT };

createApp(App)
    .use(Toast, options)
    .use(router)
    .mount('#app')
