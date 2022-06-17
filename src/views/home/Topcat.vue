<template>
  <section
    class="
      elementor-section
      elementor-top-section
      elementor-element
      elementor-element-8dff6a0
      elementor-section-boxed
      elementor-section-height-default
      elementor-section-height-default
    "
    data-id="8dff6a0"
    data-element_type="section"
  >
    <div class="elementor-container elementor-column-gap-extended">
      <div
        class="
          elementor-column
          elementor-col-33
          elementor-top-column
          elementor-element
          elementor-element-1715083
        "
        data-id="1715083"
        data-element_type="column"
        v-for="(item, index) in results"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="
              elementor-element
              elementor-element-9ee7e40
              elementor-widget
              elementor-widget-machic-banner-box2
            "
            data-id="9ee7e40"
            data-element_type="widget"
            data-widget_type="machic-banner-box2.default"
          >
            <div class="elementor-widget-container">
              <div class="site-module banner-module">
                <div class="module-wrapper">
                  <div class="banner dark align-center price-banner">
                    <div class="banner-content">
                      <div class="banner-content-wrapper">
                        <!-- <div class="entry-description">
                          <p>Maecenas non erat</p>
                        </div> -->
                        <!-- entry-description -->
                        <h3 class="entry-title">{{ item.heading }}</h3>
                        <div class="banner-price-content">
                          <p>{{$t('Weekend_discount')}}</p>
                          <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>{{$t('QAR')}}
                            29.00</bdi></span></del><ins><span class="woocommerce-Price-amount amount"><bdi>
                            {{$t('QAR')}}
                            19.00</bdi></span></ins>
                          </span>
                          <!-- price -->
                        </div>
                        <!-- banner-price-content -->
                      </div>
                      <!-- banner-content-wrapper -->
                    </div>
                    
                    <!-- banner-content -->
                    <div class="banner-image">
                      <img
                        :src="url + item.image_url"
                        alt="banner"
                      />
                    </div>
                    <a href="javascript::void(0)" class="overlay-link"></a>
                  </div>
                  <!-- banner -->
                </div>
                <!-- module-wrapper -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script >
import axios from "axios";

export default {
  data: () => ({
    url: "http://baladi-v1.bteamwebs.com/storage/",
    results: [],
  }),
  mounted() {
    var langCode = localStorage.getItem("lang");
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/web/sliders?slider_name=web-offers&locale=" +
          langCode
      )
      .then((response) => {
        this.results = response.data.data.slider_slides;
        console.log("slider data", this.results);
      })
      .catch((error) => {});
  },
};
</script>