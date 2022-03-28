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
                      rewind: true,
                      autoplay: true,
                      perPage: 5,
                      arrows: false,
                      gap: '10rem',
                      type: 'loop',
                    }"
                  >
                    <SplideSlide>
                      <div class="brand-item">
                        <img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/1.png"
                          alt="Sample 1"
                        />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div class="brand-item">
                        <img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/2.png"
                          alt="Sample 1"
                        />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div class="brand-item">
                        <img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/3.png"
                          alt="Sample 1"
                        />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div class="brand-item">
                        <img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/4.png"
                          alt="Sample 1"
                        />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div class="brand-item opacity">
                        <img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/5.png"
                          alt="Sample 1"
                        />
                      </div>
                    </SplideSlide>
                  </Splide>
                  <!-- <div class="site-brands column-6 opacity">
                    <div class="brand-item">
                      <a href="#"
                        ><img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/1.png"
                          alt="client"
                      /></a>
                    </div>
                    <div class="brand-item">
                      <a href="#?filter_brands=asus"
                        ><img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/2.png"
                          alt="client"
                      /></a>
                    </div>
                    <div class="brand-item">
                      <a href="#?opt=right-sidebar"
                        ><img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/3.png"
                          alt="client"
                      /></a>
                    </div>
                    <div class="brand-item">
                      <a href="#?filter_brands=samsung"
                        ><img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/4.png"
                          alt="client"
                      /></a>
                    </div>
                    <div class="brand-item">
                      <a href="#?column=5&amp;opt=wide"
                        ><img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/5.png"
                          alt="client"
                      /></a>
                    </div>
                    <div class="brand-item">
                      <a href="#?column=5&amp;opt=full-width"
                        ><img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/5.png"
                          alt="client"
                      /></a>
                    </div>
                  </div> -->
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

export default defineComponent({
  components: { Splide, SplideSlide },
});
</script>