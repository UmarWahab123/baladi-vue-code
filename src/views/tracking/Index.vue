<template>
  <Header />

  <main id="main" class="site-primary">
    <div class="site-content">
      <div
        data-elementor-type="wp-page"
        data-elementor-id="2019"
        class="elementor elementor-2019"
        data-elementor-settings="[]"
      >
        <div class="elementor-section-wrap">
          <section
            class="elementor-section elementor-top-section elementor-element elementor-element-a8dca56 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="a8dca56"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-extended">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e346431"
                data-id="e346431"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-16bb66b elementor-widget elementor-widget-shortcode"
                    data-id="16bb66b"
                    data-element_type="widget"
                    data-widget_type="shortcode.default"
                  >
                    <div class="elementor-widget-container">
                      <div class="elementor-shortcode">
                        <div class="woocommerce mt-4 row">
                          <div class="col-md-8 mx-auto text-center">
                            <h3>Track Your Order</h3>
                            <p>
                              To track your order please enter your Order ID in
                              the box below and press the "Track" button. This
                              was given to you on your receipt and in the
                              confirmation email you should have received.
                            </p>
                          </div>
                          <div class="col-sm-6 col-md-5 mx-auto shadow p-4">
                            <form
                              action="https://klbtheme.com/machic/order-tracking/"
                              method="post"
                              class="woocommerce-form woocommerce-form-track-order track_order"
                            >
                              <p class="form-row form-row-first">
                                <label for="orderid">Order ID</label>
                                <input
                                  class="input-text"
                                  type="text"
                                  name="orderid"
                                  id="orderid"
                                  value=""
                                  placeholder="Found in your order confirmation email."
                                />
                              </p>
                              <p class="form-row form-row-last">
                                <label for="order_email">Billing email</label>
                                <input
                                  class="input-text"
                                  type="text"
                                  name="order_email"
                                  id="order_email"
                                  value=""
                                  placeholder="Email you used during checkout."
                                />
                              </p>
                              <div class="clear"></div>

                              <p class="form-row">
                                <button
                                  type="submit"
                                  class="button"
                                  name="track"
                                  value="Track"
                                >
                                  Track
                                </button>
                              </p>
                              <input
                                type="hidden"
                                id="woocommerce-order-tracking-nonce"
                                name="woocommerce-order-tracking-nonce"
                                value="657d0f0970"
                              /><input
                                type="hidden"
                                name="_wp_http_referer"
                                value="/machic/order-tracking/?d=rtl"
                              />
                            </form>
                          </div>
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
  <Footer />
</template>

<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
</script>
