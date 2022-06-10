import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// import '@/styles/index.css'
var langCode = localStorage.getItem("lang");
console.log(langCode);
if (langCode == "ar") {
    import ("@/assets/rtl/wc-blocks-style-rtl.css");
    import ("@/assets/rtl/style-rtl.min.css");
    import ("@/assets/rtl/styles-rtl.css");
    import ("@/assets/rtl/webfont-rtl.min.css");
    import ("@/assets/rtl/public-rtl.min.css");
    import ("@/assets/rtl/base-rtl.css");
    import ("@/assets/rtl/style-rtl.css");
    import ("@/assets/rtl/frontend-lite-rtl.min.css");
    // import("@/assets/rtl/style.css");
} else {
    import ("@/assets/style/style.min.css");
    import ("@/assets/style/wc-blocks-style.css");
    import ("@/assets/style/styles.css");
    import ("@/assets/style/webfont.min.css");
    import ("@/assets/style/public.min.css");
    import ("@/assets/style/base.css");
    import ("@/assets/style/style.css");
    import ("@/assets/style/frontend-lite.min.css");
}

import axios from "axios";

import i18n from "./i18n";

createApp(App)
    .use(i18n)
    .use(router)
    .use(VueSweetalert2)
    .use(createPinia())
    .mount("#app");