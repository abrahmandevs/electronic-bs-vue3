import { createApp } from 'vue'

// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
// end bootstrap
// import './assets/css/tailwind.css'

import App from './App.vue'
import router from './router/router'

createApp(App)
    .use(router)
    .mount('#app')
