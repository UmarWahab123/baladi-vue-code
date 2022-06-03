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
                        <h3 class="entry-title">{{ item.name }}</h3>
                        <div class="banner-price-content">
                          <p>Weekend Discount</p>
                          <span class="price"
                            ><del aria-hidden="true"
                              ><span class="woocommerce-Price-amount amount"
                                ><bdi>QAR 399.00</bdi></span
                              ></del
                            ><ins
                              ><span class="woocommerce-Price-amount amount"
                                ><bdi>QAR 299.00</bdi></span
                              ></ins
                            ></span
                          >
                          <!-- price -->
                        </div>
                        <!-- banner-price-content -->
                      </div>
                      <!-- banner-content-wrapper -->
                    </div>
                    <!-- banner-content -->
                    <div class="banner-image">
                      <img
                        src="https://klbtheme.com/machic/wp-content/uploads/2021/09/banner-7.jpg"
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
    results: [],
  }),
  mounted() {
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/web/header/topCategories?locale=en"
      )
      .then((response) => {
        this.results = response.data.data;
      })
      .catch((error) => {});
  },
};
</script>