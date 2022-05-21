import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'

// import '@/styles/index.css'
// import '@/styles/app.css'
import axios from 'axios'

import i18n from './i18n'

createApp(App).use(i18n)
.use(router)
.use(createPinia())
.mount('#app')
