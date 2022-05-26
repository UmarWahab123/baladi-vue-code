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
          elementor-column
          elementor-col-100
          elementor-top-column
          elementor-element
          elementor-element-b24b142
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
                  <Splide
                    :options="{
                      perPage: 5,
                      arrows: false,
                      gap: '1rem',
                      type: 'loop',
                      drag: 'free',
                      autoplay: true,
                    }"
                  >
                    <SplideSlide v-for="(brand, indextr) in results">
                      <div class="brand-item">
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
                    </SplideSlide>
                  </Splide>
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
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import axios from "axios";
export default {
  components: { Splide, SplideSlide },
  data: () => ({
    url: "http://baladiweb.bteamwebs.com/storage/",
    results: [],
  }),
  mounted() {
    axios
      .get("http://baladiweb.bteamwebs.com/api/web/header/getBrands")
      .then((response) => {
        this.results = response.data.data;
      })
      .catch((error) => {});
  },
};
</script>
