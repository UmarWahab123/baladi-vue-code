<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content my-account-page mt-60">
        <div class="container">
          <h3 class="text-center mb-4 pb-2 text-success fw-bold">FAQ's</h3>
          <div class="row">
            <section>
              <div class="site-module module-title small">
                <p class="text-center entry-subtitle mb-5">
                  Find the answers for the most frequently asked questions below
                </p>
              </div>

              <div class="row mt-60">
                <div
                  class="col-md-6 col-lg-4 mb-4"
                  v-for="(item, index) in results"
                >
                  <h6 class="mb-3">
                    <i class="far fa-paper-plane text-success pe-2"></i>
                    {{ item.question }}
                  </h6>
                  <p>
                    <strong><u></u></strong>
                    <span class="content-color" v-html="item.answer"></span>
                  </p>
                </div>

                <!-- <div class="col-md-6 col-lg-4 mb-4">
                  <h6 class="mb-3">
                    <i class="fas fa-pen-alt text-success pe-2"></i> Where's my
                    nearest store?
                  </h6>
                  <p>
                    <strong><u></u></strong> Please visit our Store Locator page
                    type in your area, and it will bring up the nearest stores
                    to you.
                  </p>
                </div>

                <div class="col-md-6 col-lg-4 mb-4">
                  <h6 class="mb-3">
                    <i class="fas fa-user text-success pe-2"></i> What type of
                    payment can I use in-store?
                  </h6>
                  <p>
                    We accept the following payment methods in our stores: Cash,
                    Credit cards, Gift Cards and Loyalty Voucher.
                  </p>
                </div>

                <div class="col-md-6 col-lg-4 mb-4">
                  <h6 class="mb-3">
                    <i class="fas fa-rocket text-success pe-2"></i> I have a
                    gift card; how can I use it?
                  </h6>
                  <p>
                    Baladi gift cards can be used for full or partial payment at
                    any Carrefour hypermarket or Carrefour Market stores in
                    Qatar. Any remaining balance will be stored on the card and
                    can be used against future purchases. Baladi Gift cards have
                    an expiry date of 1 year from the purchasing date.
                  </p>
                </div>

                <div class="col-md-6 col-lg-4 mb-4">
                  <h6 class="mb-3">
                    <i class="fas fa-home text-success pe-2"></i> I seem to have
                    been charged twice for the same transaction. What should I
                    do?
                  </h6>
                  <p>
                    <strong></strong> Please consult our customer service desk
                    or reach our customer service on 80073.
                  </p>
                </div>

                <div class="col-md-6 col-lg-4 mb-4">
                  <h6 class="mb-3">
                    <i class="fas fa-book-open text-success pe-2"></i> What
                    shall I do if I've been overcharged?
                  </h6>
                  <p>
                    Please consult our customer service desk or reach our
                    customer service on 80073.
                  </p>
                </div> -->
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    <div class="site-content">
      <div
        data-elementor-type="wp-page"
        data-elementor-id="1985"
        class="elementor elementor-1985"
        data-elementor-settings="[]"
      >
        <div class="elementor-section-wrap">
          <section
            class="
              elementor-section
              elementor-top-section
              elementor-element
              elementor-element-677addc
              elementor-section-boxed
              elementor-section-height-default
              elementor-section-height-default
            "
            data-id="677addc"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-extended">
              <div
                class="
                  elementor-column
                  elementor-col-100
                  elementor-top-column
                  elementor-element
                  elementor-element-45b25de
                "
                data-id="45b25de"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="
                      elementor-element
                      elementor-element-58f7dcf
                      elementor-widget
                      elementor-widget-machic-custom-title
                    "
                    data-id="58f7dcf"
                    data-element_type="widget"
                    data-widget_type="machic-custom-title.default"
                  >
                    <div class="elementor-widget-container">
                      <div class="site-module module-title small">
                        <h4 class="entry-subtitle">
                          You can ask us questions !
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            class="
              elementor-section
              elementor-top-section
              elementor-element
              elementor-element-187d03f
              elementor-section-boxed
              elementor-section-height-default
              elementor-section-height-default
            "
            data-id="187d03f"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-extended">
              <div
                class="
                  elementor-column
                  elementor-col-43
                  elementor-top-column
                  elementor-element
                  elementor-element-fa6036d
                "
                data-id="fa6036d"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="
                      elementor-element
                      elementor-element-4178a16
                      elementor-widget
                      elementor-widget-machic-contact-form-7
                    "
                    data-id="4178a16"
                    data-element_type="widget"
                    data-widget_type="machic-contact-form-7.default"
                  >
                    <div class="elementor-widget-container">
                      <div class="contact-form">
                        <h3 class="entry-title">Get in Touch</h3>
                        <p>
                          Quisque mattis tortor eu tristique sodales. Aenean sit
                          amet justo nec sem vestibulum.
                        </p>
                        <div
                          role="form"
                          class="wpcf7"
                          id="wpcf7-f2012-p1985-o1"
                          lang="en-US"
                          dir="ltr"
                        >
                          <div class="screen-reader-response">
                            <p
                              role="status"
                              aria-live="polite"
                              aria-atomic="true"
                            ></p>
                            <ul></ul>
                          </div>
                          <form
                            action="/machic/contact/#wpcf7-f2012-p1985-o1"
                            method="post"
                            class="wpcf7-form init"
                            novalidate="novalidate"
                            data-status="init"
                          >
                            <div style="display: none">
                              <input type="hidden" name="_wpcf7" value="2012" />
                              <input
                                type="hidden"
                                name="_wpcf7_version"
                                value="5.5.6"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_locale"
                                value="en_US"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_unit_tag"
                                value="wpcf7-f2012-p1985-o1"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_container_post"
                                value="1985"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_posted_data_hash"
                                value=""
                              />
                            </div>
                            <div class="row">
                              <div class="col-12 col-lg-6">
                                <label> Your name * </label><br />
                                <span class="wpcf7-form-control-wrap your-name"
                                  ><input
                                    type="text"
                                    name="your-name"
                                    value=""
                                    size="40"
                                    class="
                                      wpcf7-form-control
                                      wpcf7-text
                                      wpcf7-validates-as-required
                                    "
                                    aria-required="true"
                                    aria-invalid="false"
                                /></span>
                              </div>
                              <div class="col-12 col-lg-6">
                                <label> Your email *</label><br />
                                <span class="wpcf7-form-control-wrap your-email"
                                  ><input
                                    type="email"
                                    name="your-email"
                                    value=""
                                    size="40"
                                    class="
                                      wpcf7-form-control
                                      wpcf7-text
                                      wpcf7-email
                                      wpcf7-validates-as-required
                                      wpcf7-validates-as-email
                                    "
                                    aria-required="true"
                                    aria-invalid="false"
                                /></span>
                              </div>
                              <div class="col-12 col-lg-12">
                                <label> Subject * </label><br />
                                <span
                                  class="wpcf7-form-control-wrap your-subject"
                                  ><input
                                    type="text"
                                    name="your-subject"
                                    value=""
                                    size="40"
                                    class="
                                      wpcf7-form-control
                                      wpcf7-text
                                      wpcf7-validates-as-required
                                    "
                                    aria-required="true"
                                    aria-invalid="false"
                                /></span>
                              </div>
                              <div class="col-12 col-lg-12">
                                <label> Your question </label><br />
                                <span
                                  class="wpcf7-form-control-wrap your-message"
                                >
                                  <textarea
                                    name="your-message"
                                    cols="40"
                                    rows="10"
                                    class="wpcf7-form-control wpcf7-textarea"
                                    aria-invalid="false"
                                  ></textarea>
                                </span>
                              </div>
                              <div class="col-12 col-lg-12">
                                <input
                                  type="submit"
                                  value="Send Message"
                                  class="
                                    wpcf7-form-control
                                    has-spinner
                                    wpcf7-submit
                                  "
                                /><span class="wpcf7-spinner"></span>
                              </div>
                            </div>
                            <div
                              class="wpcf7-response-output"
                              aria-hidden="true"
                            ></div>
                          </form>
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
  </main>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
</script>
<script>
import TheLoader from "../Loader/TheLoader.vue";
import axios from "axios";

export default {
  components: { TheLoader },
  data() {
    return {
      isloading: true,
      results: [],
    };
  },
  mounted() {
    axios
      .get("http://baladi-v1.bteamwebs.com/api/web/faqs?locale=en")
      .then((response) => {
        this.results = response.data.data;
      })
      .catch((error) => {});
    setTimeout(() => (this.isloading = false), 1000);
  },
};
</script>
