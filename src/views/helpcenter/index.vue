<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content my-account-page mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="row content-wrapper sidebar-right">
              <div class="col-12 col-md-12 col-lg-12 content-primary">
                <div class="my-account-wrapper">
                  <sidebar />
                  <div class="woocommerce-MyAccount-content">
                    <div class="woocommerce-notices-wrapper"></div>
                    <p>{{$t('hello_baladi_express')}}</p>

                    <section
                      class="
                        elementor-section
                        elementor-inner-section
                        elementor-element
                        elementor-element-dae2cc1
                        elementor-section-boxed
                        elementor-section-height-default
                        elementor-section-height-default
                      "
                      data-id="dae2cc1"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="
                            elementor-column
                            elementor-col-100
                            elementor-inner-column
                            elementor-element
                            elementor-element-769fd1d
                          "
                          data-id="769fd1d"
                          data-element_type="column"
                        >
                          <div
                            class="
                              elementor-widget-wrap elementor-element-populated
                            "
                          >
                            <div
                              class="
                                elementor-element
                                elementor-element-563075f
                                elementor-widget
                                elementor-widget-heading
                              "
                              data-id="563075f"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div class="elementor-widget-container">
                                <p
                                  class="
                                    elementor-heading-title
                                    elementor-size-default
                                  "
                                >
                                 {{$t('souq_albaladi_online_hypermarket')}}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <!-- my-account-wrapper -->
              </div>
              <!-- content-primary -->
            </div>
            <!-- row -->
          </div>
        </div>
      </div>
      <!--WPFC_FOOTER_START-->
    </div>
    <!-- site-content -->
  </main>
  <Footer />
</template>

<script setup>
import sidebar from "./sidebar.vue";
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
</script>
