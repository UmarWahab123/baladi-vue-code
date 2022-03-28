<template>
  <TheLoader v-show="this.isloading === true"></TheLoader>
  <Header v-show="this.isloading === false" />
  <main id="main" class="site-primary" v-show="this.isloading === false">
    <div class="site-content">
      <div
        data-elementor-type="wp-page"
        data-elementor-id="883"
        class="elementor elementor-883"
        data-elementor-settings="[]"
      >
        <div class="elementor-section-wrap">
          <section
            class="
              elementor-section
              elementor-top-section
              elementor-element
              elementor-element-17370978
              elementor-section-boxed
              elementor-section-height-default
              elementor-section-height-default
            "
            data-id="17370978"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-extended">
              <div
                class="
                  elementor-column
                  elementor-col-100
                  elementor-top-column
                  elementor-element
                  elementor-element-651ccb50
                "
                data-id="651ccb50"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="
                      elementor-element
                      elementor-element-19726f3e
                      elementor-widget
                      elementor-widget-shortcode
                    "
                    data-id="19726f3e"
                    data-element_type="widget"
                    data-widget_type="shortcode.default"
                  >
                    <div class="elementor-widget-container">
                      <div class="elementor-shortcode">
                        <div
                          class="tinv-wishlist woocommerce tinv-wishlist-clear"
                        >
                          <div class="tinv-header">
                            <h2>Wishlist</h2>
                          </div>
                          <items />
                          <Social />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <!-- site-content -->
  </main>
  <div v-show="this.isloading === false">
    <Footer />
  </div>
</template>

<script setup>
setTimeout(function () {
  document.getElementById("menu-sidebar-menu-1").classList.remove("show");
}, 500);
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import Items from "./Items.vue";
import Social from "./Social.vue";
</script>
<script>
import TheLoader from "../Loader/TheLoader.vue";
export default {
  components: { TheLoader },
  data() {
    return {
      isloading: true,
    };
  },
  mounted() {
    setTimeout(() => (this.isloading = false), 1000);
  },
};
</script>

