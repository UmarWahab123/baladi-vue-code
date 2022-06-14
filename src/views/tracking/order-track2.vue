<template>
  <Header />
  <main id="main" class="site-primary my-5">
    <div class="site-content">
      <div
        data-elementor-type="wp-page"
        data-elementor-id="2019"
        class="elementor elementor-2019"
        data-elementor-settings="[]"
      >
        <!--Google map-->
        <div class="container bg-light p-3 rounded shadow">
          <div class="row">
            <div class="col-md-12">
              <div
                id="map-container-google-2"
                class="z-depth-1-half map-container"
                style="height: 400px"
              >
                <iframe
                  src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  style="height: 400px"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <!--Google Maps-->

        <div class="elementor-section-wrap">
          <section
            class="
              elementor-section
              elementor-top-section
              elementor-element
              elementor-element-a8dca56
              elementor-section-boxed
              elementor-section-height-default
              elementor-section-height-default
            "
            data-id="a8dca56"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-extended">
              <div
                class="
                  elementor-column
                  elementor-col-100
                  elementor-top-column
                  elementor-element
                  elementor-element-e346431
                "
                data-id="e346431"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="
                      elementor-element
                      elementor-element-16bb66b
                      elementor-widget
                      elementor-widget-shortcode
                    "
                    data-id="16bb66b"
                    data-element_type="widget"
                    data-widget_type="shortcode.default"
                  >
                    <div class="elementor-widget-container">
                      <div class="elementor-shortcode">
                        <div class="woocommerce">
                          <p class="order-info">
                            Order #<mark class="order-number">{{
                              results?.id
                            }}</mark>
                            was placed on
                            <mark class="order-date">{{
                              results?.created_at
                            }}</mark>
                            and is currently
                            <mark class="order-status badge bg-success"
                              >Processing</mark
                            >.
                          </p>

                          <section class="woocommerce-order-details">
                            <h2 class="woocommerce-order-details__title">
                              Order details
                            </h2>

                            <table
                              class="
                                woocommerce-table
                                woocommerce-table--order-details
                                shop_table
                                order_details
                              "
                            >
                              <thead>
                                <tr>
                                  <th
                                    class="
                                      woocommerce-table__product-name
                                      product-name
                                    "
                                  >
                                    Product
                                  </th>
                                  <th
                                    class="
                                      woocommerce-table__product-table
                                      product-total
                                    "
                                  >
                                    Total
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr
                                  class="
                                    woocommerce-table__line-item
                                    order_item
                                  "
                                  v-for="(item, index) in results?.cart"
                                >
                                  <td
                                    class="
                                      woocommerce-table__product-name
                                      product-name
                                    "
                                  >
                                    <a
                                      href="https://klbtheme.com/machic/product/cubitt-smart-watch-ct2s-waterproof-fitness-tracker/"
                                      >{{
                                        item?.uom_product?.product?.product_name
                                      }}</a
                                    >
                                    <strong class="product-quantity"
                                      >×&nbsp;{{ item.quantity }}</strong
                                    >
                                  </td>

                                  <td
                                    class="
                                      woocommerce-table__product-total
                                      product-total
                                    "
                                  >
                                    <span
                                      class="woocommerce-Price-amount amount"
                                      ><bdi
                                        ><span
                                          class="
                                            woocommerce-Price-currencySymbol
                                          "
                                          >QAR </span
                                        >{{ item?.net_product_amount }}</bdi
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </tbody>

                              <tfoot>
                                <tr>
                                  <th scope="row">Subtotal:</th>
                                  <td>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                      ><span
                                        class="woocommerce-Price-currencySymbol"
                                        >QAR </span
                                      >{{ results.net_amount }}</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Shipping:</th>
                                  <td>Free shipping</td>
                                </tr>
                                <tr>
                                  <th scope="row">Payment method:</th>
                                  <td>Cash on delivery</td>
                                </tr>
                                <tr>
                                  <th scope="row">Total:</th>
                                  <td>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                      ><span
                                        class="woocommerce-Price-currencySymbol"
                                        >QAR </span
                                      >{{ results?.sale_amount }}</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <th>Note:</th>
                                  <td>{{ results?.delivery_note }}</td>
                                </tr>
                              </tfoot>
                            </table>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section
          class="
            elementor-section
            elementor-top-section
            elementor-element
            elementor-element-3b0d1a1
            elementor-section-boxed
            elementor-section-height-default
            elementor-section-height-default
          "
          data-id="3b0d1a1"
          data-element_type="section"
        >
          <div class="elementor-container elementor-column-gap-extended">
            <div
              class="
                elementor-column
                elementor-col-25
                elementor-top-column
                elementor-element
                elementor-element-5bbc87b
              "
              data-id="5bbc87b"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="
                    elementor-element
                    elementor-element-97892be
                    elementor-widget
                    elementor-widget-machic-icon-box
                  "
                  data-id="97892be"
                  data-element_type="widget"
                  data-widget_type="machic-icon-box.default"
                >
                  <div class="elementor-widget-container">
                    <div class="klb-icon-box site-module iconbox-module">
                      <div class="icon">
                        <i class="klbth-icon-shipment"></i>
                      </div>
                      <!-- icon -->
                      <div class="content">
                        <h4 class="entry-title">Free Delivery</h4>
                        <p>Free shipping on all order</p>
                      </div>
                      <!-- content -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                elementor-column
                elementor-col-25
                elementor-top-column
                elementor-element
                elementor-element-065ec1c
              "
              data-id="065ec1c"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="
                    elementor-element
                    elementor-element-3f0d5e3
                    elementor-widget
                    elementor-widget-machic-icon-box
                  "
                  data-id="3f0d5e3"
                  data-element_type="widget"
                  data-widget_type="machic-icon-box.default"
                >
                  <div class="elementor-widget-container">
                    <div class="klb-icon-box site-module iconbox-module">
                      <div class="icon">
                        <i class="klbth-icon-operator-1"></i>
                      </div>
                      <!-- icon -->
                      <div class="content">
                        <h4 class="entry-title">Online Support 24/7</h4>
                        <p>Support online 24 hours a day</p>
                      </div>
                      <!-- content -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                elementor-column
                elementor-col-25
                elementor-top-column
                elementor-element
                elementor-element-0dcd911
              "
              data-id="0dcd911"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="
                    elementor-element
                    elementor-element-c73a023
                    elementor-widget
                    elementor-widget-machic-icon-box
                  "
                  data-id="c73a023"
                  data-element_type="widget"
                  data-widget_type="machic-icon-box.default"
                >
                  <div class="elementor-widget-container">
                    <div class="klb-icon-box site-module iconbox-module">
                      <div class="icon">
                        <i class="klbth-icon-credit-card-2"></i>
                      </div>
                      <!-- icon -->
                      <div class="content">
                        <h4 class="entry-title">Money Return</h4>
                        <p>Back guarantee under 7 days</p>
                      </div>
                      <!-- content -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                elementor-column
                elementor-col-25
                elementor-top-column
                elementor-element
                elementor-element-3f15ab8
              "
              data-id="3f15ab8"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="
                    elementor-element
                    elementor-element-5143c60
                    elementor-widget
                    elementor-widget-machic-icon-box
                  "
                  data-id="5143c60"
                  data-element_type="widget"
                  data-widget_type="machic-icon-box.default"
                >
                  <div class="elementor-widget-container">
                    <div class="klb-icon-box site-module iconbox-module">
                      <div class="icon">
                        <i class="klbth-icon-discount34"></i>
                      </div>
                      <!-- icon -->
                      <div class="content">
                        <h4 class="entry-title">Member Discount</h4>
                        <p>Onevery order over QAR 20.00</p>
                      </div>
                      <!-- content -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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


<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      results: [],
      moment: moment,
    };
  },
  mounted() {
    var id = this.$route.params.id;
    console.log(id);
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.token = userInfo.token;
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/mobile/driver/orderdetails?order_id=" +
          id,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      )
      .then((response) => {
        this.results = response.data.data[0];
        console.log(this.results);
      })
      .catch((error) => {});
  },
};
</script>
