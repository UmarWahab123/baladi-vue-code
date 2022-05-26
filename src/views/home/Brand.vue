<template>
  <div
    class="
      elementor-section
      elementor-top-section
      elementor-element
      elementor-element-b2529f3
      elementor-section-boxed
      elementor-section-height-default
      elementor-section-height-default
    "
    data-id="b2529f3"
    data-element_type="section"
  >
    <div class="elementor-container elementor-column-gap-extended">
      <div
        class="
          elementor-column elementor-col-100
          text-center
          elementor-top-column elementor-element elementor-element-b24b142
        "
        data-id="b24b142"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="
              elementor-element
              elementor-element-5de25eb
              elementor-widget
              elementor-widget-machic-clients-box
            "
            data-id="5de25eb"
            data-element_type="widget"
            data-widget_type="machic-clients-box.default"
          >
            <div class="elementor-widget-container">
              <div class="site-module logos-module">
                <div class="module-body">
                  <div class="site-brands column-6 opacity">
                    <div
                      class="
                        swiper
                        mySwiper
                        swiper-container-initialized
                        swiper-container-horizontal
                        swiper-container-pointer-events
                      "
                    >
                      <div
                        class="swiper-wrapper"
                        id="swiper-wrapper-2ba9e1027610af998d"
                        aria-live="off"
                        style=""
                      >
                        <div
                          class="swiper-slide"
                          style="width: 175px; margin-right: 50px"
                          role="group"
                          aria-label="1 / 20"
                          :data="brand"
                          :key="indextr"
                          v-for="(brand, indextr) in results"
                        >
                          <router-link
                            class=""
                            :to="{
                              name: 'brandsProduct',
                              params: { id: brand.id },
                            }"
                            ><img
                              class="logo-client"
                              :src="url + brand.photo"
                              alt=""
                          /></router-link>
                        </div>
                      </div>
                      <div class="swiper-pagination"></div>
                      <span
                        class="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import axios from "axios";
export default {
  data: () => ({
    url: "http://baladiweb.bteamwebs.com/storage/",
    results: [],
  }),
  mounted() {
    axios
      .get("http://baladiweb.bteamwebs.com/api/web/header/getBrands")
      .then((response) => {
        this.results = response.data.data;
        console.log(this.results);
      })
      .catch((error) => {});
  },
};
</script>
