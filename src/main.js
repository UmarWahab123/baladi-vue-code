import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// import '@/styles/index.css'
// import '@/styles/app.css'
import axios from "axios";

import i18n from "./i18n";

createApp(App)
  .use(i18n)
  .use(router)
  .use(VueSweetalert2)
  .use(createPinia())
  .mount("#app");
