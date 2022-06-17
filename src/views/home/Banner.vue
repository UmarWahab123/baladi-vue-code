<template>
  <section
    class="
      elementor-section
      elementor-top-section
      elementor-element
      elementor-element-04d99c7
      elementor-section-boxed
      elementor-section-height-default
      elementor-section-height-default
    "
    data-id="04d99c7"
    data-element_type="section"
  >
    <div class="elementor-container elementor-column-gap-extended">
      <div
        class="
          elementor-column
          elementor-col-50
          elementor-top-column
          elementor-element
          elementor-element-ceef594
          elementor-hidden-tablet
          elementor-hidden-mobile
        "
        data-id="ceef594"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap"></div>
      </div>

      <div
        class="
          elementor-column
          elementor-col-50
          elementor-top-column
          elementor-element
          elementor-element-0434920
        "
        data-id="0434920"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="
              elementor-element
              elementor-element-7b0fb40
              elementor-widget
              elementor-widget-machic-home-slider
            "
            data-id="7b0fb40"
            data-element_type="widget"
            data-widget_type="machic-home-slider.default"
          >
            <div class="elementor-widget-container">
              <div class="site-module slider-module">
                <div
                  class="
                    swiper-container
                    swiper-container-initialized
                    swiper-container-horizontal
                    swiper-container-pointer-events
                    slider-loaded
                  "
                  data-effect="slide"
                  data-direction="horizontal"
                  data-loop="true"
                  data-speed="1000"
                  data-spacebetween="0"
                  data-autoplay=""
                  data-autospeed=""
                  data-items="1"
                  data-mobileitems="1"
                  data-tabletitems="1"
                >
                  <div class="slider-loader">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="spinner"
                      width="50"
                      height="50"
                      viewBox="0 0 44 44"
                    >
                      <circle
                        class="spinner-path"
                        cx="22"
                        cy="22"
                        r="20"
                        fill="none"
                        stroke-width="3"
                      ></circle>
                    </svg>
                  </div>
                  <div
                    class="swiper-wrapper"
                    id="swiper-wrapper-9ee650d332e1a04f"
                    aria-live="polite"
                    style="
                      transform: translate3d(-938px, 0px, 0px);
                      transition-duration: 0ms;
                    "
                  >
                    <div
                      class="
                        swiper-slide swiper-slide-duplicate swiper-slide-prev
                      "
                      data-swiper-slide-index="2"
                      role="group"
                      aria-label="1 / 5"
                      style="width: 938px"
                    ></div>
                    <div
                      class="swiper-slide swiper-slide-active"
                      data-swiper-slide-index="0"
                      role="group"
                      aria-label="2 / 5"
                      style="width: 938px"
                    >
                      <Splide :options="{ rewind: true, autoplay: true }">
                        <!-- <SplideSlide>
                              <img
                                src="@/assets/img/slider-banner-1.jpg"
                                alt="Sample 1"
                              />
                            </SplideSlide>
                            <SplideSlide>
                              <img
                                src="@/assets/img/slider-banner-2.jpg"
                                alt="Sample 2"
                              />
                            </SplideSlide> -->
                        <SplideSlide
                          :data="item"
                          :key="indextr"
                          v-for="(item, indextr) in results"
                        >
                          <div
                            class="banner dark align-center large"
                            :key="indextr"
                          >
                            <div class="banner-content">
                              <div class="banner-content-wrapper">
                                <h6 class="entry-subtitle style-3">
                                  Weekend Discount2
                                </h6>
                                <h3 class="entry-title">
                                  {{ item.heading }}
                                  <strong> {{ item.subheading }}</strong>
                                </h3>
                                <div class="entry-description">
                                  <p>
                                   {{$t('Last_call_for_up_to')}}
                                    <strong>%20</strong>{{$t('off')}}
                                  </p>
                                </div>
                                <div class="entry-button">
                                  <a
                                    href="#"
                                    class="btn small rounded link-color"
                                    >{{$t('Shop_now')}}
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="banner-image">
                              <img
                                src="@/assets/img/slider-banner-3.jpg"
                                alt="Sample 2"
                              />
                            </div>
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
    </div>
  </section>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import.meta.env.VITE_API_KEY;
import axios from "axios";
export default defineComponent({
  components: { Splide, SplideSlide },
  data: () => ({
    url: import.meta.env.VITE_API_URL + "/storage/",
    results: [],
  }),
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/web/home/mainslider")
      .then((response) => {
        this.results = response.data.data;
        // console.log(this.results);
      })
      .catch((error) => {});
  },
});
</script>
