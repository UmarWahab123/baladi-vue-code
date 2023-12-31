import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import axios from "axios";
// import '@/styles/index.css'
var langCode = localStorage.getItem("lang");
if (langCode == "ar") {
  document.getElementById("body").classList.add("rtl");

  import("@/assets/rtl/wc-blocks-style-rtl.css");
  import("@/assets/rtl/styles-rtl.css");
  import("@/assets/rtl/webfont-rtl.min.css");
  import("@/assets/rtl/public-rtl.min.css");
  import("@/assets/rtl/style-rtl.css");
  import("@/assets/rtl/frontend-lite-rtl.min.css");
  import("@/assets/rtl/style-rtl.min.css");
  import("@splidejs/splide/dist/css/themes/splide-default.min.css");
  import("@/assets/rtl/base-rtl.css");

  // import("@/assets/rtl/style.css");
} else {
  import("@/assets/style/style.min.css");
  import("@/assets/style/wc-blocks-style.css");
  import("@/assets/style/styles.css");
  import("@/assets/style/webfont.min.css");
  import("@/assets/style/public.min.css");
  import("@/assets/style/base.css");
  import("@/assets/style/style.css");
  import("@/assets/style/frontend-lite.min.css");
  import("@splidejs/splide/dist/css/themes/splide-default.min.css");
}

import i18n from "./i18n";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
  .use(i18n)
  .use(router)
  .use(VueSweetalert2)
  .use(pinia)
  .mount("#app");
