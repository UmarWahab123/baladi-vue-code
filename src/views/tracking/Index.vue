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
                        <div class="woocommerce mt-4 row">
                          <div class="col-md-8 mx-auto text-center">
                            <h3>{{$t('Track_Your_Order')}}</h3>
                          </div>
                          <div class="col-sm-6 col-md-5 mx-auto shadow p-4">
                            <form
                              action="javascript:void(0)"
                              method="post"
                              class="
                                woocommerce-form woocommerce-form-track-order
                                track_order
                              "
                            >
                              <p class="form-row form-row-first">
                                <label for="orderid">{{$t('Order_ID')}}</label>
                                <input
                                  class="input-text"
                                  type="text"
                                  name="orderid"
                                  id="orderid"
                                  v-model="trakingId"
                                  placeholder="Found in your order confirmation email."
                                />
                              </p>

                              <div class="clear"></div>

                              <p class="form-row">
                                <a
                                  href="javascript:void(0)"
                                  @click="trackOrder"
                                >
                                  <button
                                    type="submit"
                                    class="button"
                                    name="track"
                                    value="Track"
                                  >
                                    {{$t('Track')}}
                                  </button>
                                </a>
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
  <main style="display:none" v-if="results" id="main" :style="trackingdetailstyle" class="site-primary my-5">
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
                            {{$t('Order')}} #<mark class="order-number">{{
                              results?.id
                            }}</mark>
                           {{$t('was_placed_on')}}
                            <mark class="order-date">{{
                              results?.created_at
                            }}</mark>
                           {{$t('is_currently')}}
                            <mark class="order-status badge bg-success"
                              >Processing</mark
                            >.
                          </p>

                          <section class="woocommerce-order-details">
                            <h2 class="woocommerce-order-details__title">
                              {{$t('Order_details')}}
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
                                    {{$t('Product')}}
                                  </th>
                                  <th
                                    class="
                                      woocommerce-table__product-table
                                      product-total
                                    "
                                  >
                                    {{$t('total')}}
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
                                          >{{$t('QAR')}} </span
                                        >{{ item?.net_product_amount }}</bdi
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </tbody>

                              <tfoot>
                                <tr>
                                  <th scope="row">{{$t('Subtotal')}}:</th>
                                  <td>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                      ><span
                                        class="woocommerce-Price-currencySymbol"
                                        >{{$t('QAR')}} </span
                                      >{{ results.net_amount }}</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">{{$t('Shipping')}}:</th>
                                  <td>Free shipping</td>
                                </tr>
                                <tr>
                                  <th scope="row">{{$t('Payment_method')}}:</th>
                                  <td>Cash on delivery</td>
                                </tr>
                                <tr>
                                  <th scope="row">{{$t('total')}}:</th>
                                  <td>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                      ><span
                                        class="woocommerce-Price-currencySymbol"
                                        >{{$t('QAR')}} </span
                                      >{{ results?.sale_amount }}</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <th>{{$t('Note')}}:</th>
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
                  <router-link to="/shipping">
                    <i class="klbth-icon-shipment"></i
                  ></router-link>
                </div>
                <!-- icon -->
                <div class="content">
                  <h4 class="entry-title">{{ $t("Free_Delivery") }}</h4>
                  <p>{{$t("Free_shipping")}}</p>
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
                  <router-link :to="'/' + langCode + '/helpcenter'">
                    <i class="klbth-icon-operator-1"> </i
                  ></router-link>
                </div>
                <!-- icon -->
                <div class="content">
                  <h4 class="entry-title">{{$t('Online_Support')}}</h4>
                  <p>{{$t('Support_online_hours')}}</p>
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
                  <router-link :to="'/' + langCode + '/refund'"
                    ><i class="klbth-icon-credit-card-2"></i
                  ></router-link>
                </div>
                <!-- icon -->
                <div class="content">
                  <h4 class="entry-title">{{$t('Money_Return')}}</h4>
                  <p>{{$t('Back_guarantee')}}</p>
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
                <div class="icon"><i class="klbth-icon-discount34"></i></div>
                <!-- icon -->
                <div class="content">
                  <h4 class="entry-title">{{$t('Member_discount')}}</h4>
                  <p>{{$t('Onevery_order')}}</p>
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
      trakingId: "",
      langCode: "en",
      results: [],
      moment: moment,
      trackingdetailstyle:"",
      ordernotfound: false,

    };
  },
  mounted() {
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
    
  },
  methods: {
    trackOrder() {
      if (this.trakingId == "") {
        alert("Please enter order id");
        return;
      }
    var id = this.trakingId;
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.token = userInfo.token;
    // alert(this.token);
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
        if(response.data.data == ""){
           const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: 'Order Not Found',
          });

        }else{
          this.ordernotfound = false;
        }
        this.trackingdetailstyle="display:block";
      })
      .catch((error) => {});
      
    },
  },
};
</script>
