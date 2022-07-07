<template>
  <div class="header-addons cart-button">
    <a href="#/cart/">
      <div class="header-addons-icon">
        <i class="klbth-icon-simple-cart"></i>
        <div class="button-count cart-count">
          {{ productStore?.cartcount }}
        </div>
      </div>
      <!-- header-addons-icon -->
      <div class="header-addons-text hide-mobile header-setup-style">
        <div class="sub-text">{{ $t("total") }}</div>
        <div class="primary-text cart-subtotal">
          <span class="woocommerce-Price-amount amount">
            <bdi
              ><span class="woocommerce-Price-currencySymbol"
                >{{ $t("QAR") }}
              </span>
              {{ productStore.cartTotal }}
            </bdi>
          </span>
        </div>
      </div>
      <!-- header-addons-text -->
    </a>
    <div class="cart-dropdown hide">
      <div class="cart-dropdown-wrapper">
        <div class="fl-mini-cart-content" v-if="productStore?.cartcount > 0">
          <div
            class="
              products
              column-1
              mobile-1
              woocommerce-mini-cart
              cart_list
              product_list_widget
            "
          >
            <div
              class="
                cart-slider
                swiper-container
                klb-mini-cart
                swiper-container-initialized
                swiper-container-vertical
                swiper-container-pointer-events
                slider-loaded
              "
              data-effect="slide"
              data-direction="vertical"
              data-loop="false"
              data-speed="1000"
              data-spacebetween="0"
              data-autoplay="false"
              data-autospeed="300"
              data-items="2"
              data-mobileitems="2"
              data-tabletitems="2"
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
                class="swiper-wrapper cart-scroll"
                id="swiper-wrapper-20bf436108c0df10df"
                aria-live="polite"
                style="height: 30vh; overflow: auto"
              >
                <!-- swiper-slide -->
                <div
                  class="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="2 / 2"
                  style="height: 90px"
                  v-for="item in productStore.cartList"
                >
                  <div
                    class="product woocommerce-mini-cart-item mini_cart_item"
                  >
                    <div class="product-wrapper">
                      <div class="product-content">
                        <div class="thumbnail-wrapper">
                          <a
                            href="#product/apple-11-inch-ipad-pro-2021-wi-fi-128gb/"
                          >
                            <!-- <img
                              width="90"
                              height="90"
                              :src="
                                'http://baladi-v1.bteamwebs.com/storage/' +
                                item[0]?.product?.gallery?.gallery_images[0]
                                  ?.image_sm
                              "
                              class="
                                attachment-woocommerce_thumbnail
                                size-woocommerce_thumbnail
                              "
                              alt=""
                            /> -->
                          </a>
                        </div>
                        <!-- thumbnail-wrapper -->
                        <div class="content-wrapper">
                          <h3 class="product-title">
                            <a href="javascript:void(0)">
                              {{ item.uom_product.product.product_name }}</a
                            >
                          </h3>
                          <div class="entry-price">
                            <span class="quantity">
                              {{ item.quantity }}
                              ×
                              <span class="woocommerce-Price-amount amount">
                                <bdi
                                  ><span
                                    class="woocommerce-Price-currencySymbol"
                                    >QAR
                                  </span>
                                  {{
                                    item.quantity *
                                    item.uom_product.product.variant_base_price
                                  }}
                                </bdi>
                              </span></span
                            >
                          </div>
                          <a
                            href="javascript:void(0)"
                            class="remove remove_from_cart_button"
                            aria-label="Remove this item"
                            data-product_id="516"
                            data-cart_item_key="f3f27a324736617f20abbf2ffd806f6d"
                            data-product_sku="SR4JK74"
                            @click="removeItem(item.uom_product_id)"
                            ><i class="klbth-icon-cancel"></i
                          ></a>
                        </div>
                        <!-- content-wrapper -->
                      </div>
                      <!-- product-content -->
                    </div>
                    <!-- product-wrapper -->
                  </div>
                  <!-- product -->
                </div>
                <!-- swiper-slide -->
              </div>
              <div
                class="swiper-button-prev swiper-button"
                tabindex="-1"
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-20bf436108c0df10df"
                aria-disabled="true"
                @click="clickscrolldown"
              ></div>
              <div
                class="swiper-button-next swiper-button"
                tabindex="-1"
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-20bf436108c0df10df"
                aria-disabled="true"
                @click="clickscrollup"
              ></div>
              <span
                class="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span
              ><span
                class="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span
              ><span
                class="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
          <p class="woocommerce-mini-cart__total total">
            <strong>{{ $t("Subtotal") }}:</strong>
            <span class="woocommerce-Price-amount amount">
              <bdi
                ><span class="woocommerce-Price-currencySymbol"
                  >{{ $t("QAR") }}
                </span>
                {{ productStore.cartTotal }}
              </bdi>
            </span>
          </p>
          <p class="woocommerce-mini-cart__buttons buttons">
            <router-link
              class="button wc-forward"
              :to="'/' + langCode + '/cart'"
              >{{ $t("Viewcart") }}
            </router-link>

            <router-link
              class="button checkout wc-forward"
              :to="'/' + langCode + '/checkout'"
            >
              {{ $t("Checkout") }}
            </router-link>
          </p>
        </div>
        <div v-else>
          <div class="fl-mini-cart-content" style="opacity: 1">
            <div
              class="
                products
                column-1
                mobile-1
                woocommerce-mini-cart
                cart_list
                product_list_widget
              "
            >
              <div
                class="
                  cart-slider
                  swiper-container
                  klb-mini-cart
                  swiper-container-initialized
                  swiper-container-vertical
                  swiper-container-pointer-events
                  slider-loaded
                  swiper-initialized
                  swiper-vertical
                  swiper-pointer-events
                  swiper-backface-hidden
                "
                data-effect="slide"
                data-direction="vertical"
                data-loop="false"
                data-speed="1000"
                data-spacebetween="0"
                data-autoplay="false"
                data-autospeed="300"
                data-items="2"
                data-mobileitems="2"
                data-tabletitems="2"
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
                  class="swiper-wrapper cart-items"
                  id="swiper-wrapper-f78938cd85acf3c8"
                  aria-live="polite"
                  style="
                    transform: translate3d(0px, 0px, 0px);
                    transition-duration: 0ms;
                  "
                >
                  <div class="cart-empty">
                    <div class="empty-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M460 504H52c-24 0-44-20-44-44V138.4h496v320.8c0 24.8-20 44.8-44 44.8z"
                          fill="#FFBD27"
                        ></path>
                        <path
                          d="M52 472c-6.4 0-12-5.6-12-12V170.4h432v288.8c0 6.4-5.6 12-12 12H52v.8z"
                          fill="#fff"
                        ></path>
                        <path
                          fill="#E1E6E9"
                          d="M18.4 8h462.4v130.4H18.4z"
                        ></path>
                        <g fill="#fff">
                          <path
                            d="M504 138.4h-62.4v-64zM480.8 114.4V8l-39.2 66.4zM8 138.4h62.4v-64z"
                          ></path>
                          <path d="M18.4 8v120l52-53.6z"></path>
                        </g>
                        <g fill="#193651">
                          <path
                            d="M512 138.4c0-1.6-.8-4-2.4-5.6l-20.8-21.6V8c0-4.8-4-8-8-8H18.4c-4 0-8 4-8 8v116.8l-8 8.8c-1.6.8-2.4 3.2-2.4 4.8v320.8C0 488.8 23.2 512 52 512h407.2c28.8 0 52-23.2 52-52V138.4h.8zm-60-65.6l20.8-36v57.6L452 72.8zm20.8 44.8v12.8h-23.2V93.6l23.2 24zM467.2 16l-32 53.6c-.8.8-.8 3.2-.8 4v56.8h-356v-56c0-1.6-.8-3.2-1.6-4.8L35.2 16h432zM26.4 31.2l32.8 42.4L26.4 108V31.2zm36 62.4v36.8h-36l36-36.8zM496 460c0 20-16 36-36 36H52c-20 0-36-16-36-36V146.4h480V460z"
                          ></path>
                          <path
                            d="M372.8 429.6h16v16h-16zM428.8 429.6h16v16h-16zM67.2 429.6h16v16h-16zM123.2 429.6h16v16h-16zM140.8 264.8c5.6 89.6 55.2 160 115.2 160s108.8-70.4 115.2-160c5.6-2.4 9.6-8.8 9.6-15.2 0-9.6-8-17.6-17.6-17.6s-17.6 8-17.6 17.6c0 6.4 3.2 12 8.8 15.2-5.6 81.6-48 144.8-99.2 144.8s-93.6-63.2-99.2-144.8c4.8-3.2 8.8-8.8 8.8-15.2 0-9.6-8-17.6-17.6-17.6s-17.6 8-17.6 17.6c1.6 6.4 5.6 12 11.2 15.2z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <!-- empty-icon -->
                    <div class="empty-text">No products in the cart.</div>
                  </div>
                  <!-- cart-empty -->
                </div>
                <div
                  class="
                    swiper-button-prev swiper-button-lock swiper-button-disabled
                  "
                  tabindex="-1"
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-f78938cd85acf3c8"
                  aria-disabled="true"
                ></div>
                <div
                  class="
                    swiper-button-next swiper-button-lock swiper-button-disabled
                  "
                  tabindex="-1"
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-f78938cd85acf3c8"
                  aria-disabled="true"
                ></div>
                <span
                  class="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
                <span
                  class="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
            </div>

            <div id="view-cart-checkout"></div>
          </div>
        </div>

        <!-- cart-noticy -->
      </div>
      <!-- cart-dropdown-wrapper -->
    </div>
    <!-- cart-dropdown -->
  </div>
</template>

<script setup>
import { useProductStore } from "../../stores/ProductStore";

const productStore = useProductStore();
</script>
<script>
import axios from "axios";
import { useProductStore } from "../../stores/ProductStore";

export default {
  data: () => ({
    url: import.meta.env.VITE_API_URL + "/storage/",
    results: [],
    langCode: "en",
    cartTotal: 0,
    notificationheight: 0,
  }),
  mounted() {
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
    this.getCart();
  },
  methods: {
    down: function () {
      var height = document.querySelector(".sidebar-sticky").scrollHeight;
      var upheight = 0;
      if (this.notificationheight > upheight) {
        this.notificationheight -= 20;
        document.querySelector(".sidebar-sticky").scrollTop =
          this.notificationheight;
      }
    },
    up: function () {
      var height = document.querySelector(".sidebar-sticky").scrollHeight;
      if (height > this.notificationheight) {
        this.notificationheight += 20;
        document.querySelector(".sidebar-sticky").scrollTop =
          this.notificationheight;
      }
    },
    clickscrolldown: function () {
      var height = document.querySelector(".cart-scroll").scrollHeight;
      var upheight = 0;
      if (this.notificationheight > upheight) {
        this.notificationheight -= 20;
        document.querySelector(".cart-scroll").scrollTop =
          this.notificationheight;
      }
    },
    clickscrollup: function () {
      var height = document.querySelector(".cart-scroll").scrollHeight;
      if (height > this.notificationheight) {
        this.notificationheight += 20;
        document.querySelector(".cart-scroll").scrollTop =
          this.notificationheight;
      }
    },
    getCart() {
      if (localStorage.userInfo != null) {
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.token = userInfo.token;
        axios
          .get(
            "http://baladi-v1.bteamwebs.com/api/mobile/product/getUserCart",
            {
              headers: {
                Authorization: "Bearer " + this.token,
              },
            }
          )
          .then((response) => {
            this.results = response.data.data;
            console.log("results", this.results);
            const productStore = useProductStore();
            productStore.cartListData(this.results);
            // this.results.map((item, index) => {
            //   for (var i = 1; i <= item.quantity; i++) {
            //     console.log("item", index, item);
            //     cartStore.items.push(item.uom_product);
            //   }
            // });
            this.results.map((item) => {
              this.cartTotal +=
                item.quantity *
                parseInt(item.uom_product.product.variant_base_price);
            });
          })
          .catch((error) => {});
      }
    },
    removeItem(id) {
      axios
        .delete(
          "http://baladi-v1.bteamwebs.com/api/mobile/product/removeCart?uom_product_id=" +
            id,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then((response) => {
          this.getCart();
        })
        .catch((error) => {});
    },
  },
};
</script>