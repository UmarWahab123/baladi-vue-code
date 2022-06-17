<template>
  <div class="header-addons cart-button">
    <a href="#/cart/">
      <div class="header-addons-icon icons-style">
        <i class="klbth-icon-simple-cart"></i>
        <div class="button-count cart-count">
          {{ cartStore.count }}
        </div>
      </div>
      <!-- header-addons-icon -->
      <div class="header-addons-text hide-mobile header-setup-style">
        <div class="sub-text">{{$t('total')}}</div>
        <div class="primary-text cart-subtotal">
          <span class="woocommerce-Price-amount amount">
            <bdi
              ><span class="woocommerce-Price-currencySymbol">{{$t('QAR')}} </span
              >{{ cartStore.total }}</bdi
            >
          </span>
        </div>
      </div>
      <!-- header-addons-text -->
    </a>
    <div class="cart-dropdown hide">
      <div class="cart-dropdown-wrapper">
        <div class="fl-mini-cart-content" v-if="!cartStore.isEmpty">
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
                  v-for="(item, name) in cartStore.grouped"
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
                                          'http://baladiweb.bteamwebs.com/storage/' +
                                            item[0].images.length >
                                          0
                                            ? item[0].images[0].photo
                                            : ''
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
                            <a href="javascript:void(0)">{{
                              item[0].product.product_name
                            }}</a>
                          </h3>
                          <div class="entry-price">
                            <span class="quantity">
                              {{ item.length }}
                              ×
                              <span class="woocommerce-Price-amount amount">
                                <bdi
                                  ><span
                                    class="woocommerce-Price-currencySymbol"
                                    >QAR
                                  </span>
                                  {{
                                    cartStore.groupedCount(name) *
                                    item[0].product.variant_base_price
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
                            @click="cartStore.clearItem(name)"
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
            <strong>Subtotal:</strong>
            <span class="woocommerce-Price-amount amount">
              <bdi
                ><span class="woocommerce-Price-currencySymbol">QAR </span
                >{{ cartStore.total }}</bdi
              >
            </span>
          </p>
          <p class="woocommerce-mini-cart__buttons buttons">
            <router-link
              class="button wc-forward"
              :to="'/' + langCode + '/cart'"
              >{{$t('Viewcart')}}
            </router-link>

            <router-link
              class="button checkout wc-forward"
              :to="'/' + langCode + '/checkout'"
            >
              {{$t('Checkout')}}
            </router-link>
          </p>
        </div>
        <div v-else>
          <h3 class="p-2">{{$t('Cart_is_Empty')}}</h3>
        </div>

        <!-- cart-noticy -->
      </div>
      <!-- cart-dropdown-wrapper -->
    </div>
    <!-- cart-dropdown -->
  </div>
</template>

<script setup >
import { computed } from "vue";
import { useCartStore } from "../../stores/CartStore";
import { useProductStore } from "../../stores/ProductStore";
// import { useCartStore } from "../../stores/cart";
const productStore = useProductStore();
const cartStore = useCartStore();
const count = computed(() => cartStore.count);
// console.log(" cartStore.grouped", cartStore.grouped);
</script>
<script>
import axios from "axios";
import { useProductStore } from "../../stores/ProductStore";

export default {
  data: () => ({
    userdata: { name: "" },
    id: "",
    showmenu: "",
    results: [],
    overflow: "",
    notificationheight: 0,
    isChecked: false,
    langCode: "en",
    searchResults: [],
  }),
  mounted() {
    axios
      .get("http://baladi-v1.bteamwebs.com/api/web/header/categories?locale=en")
      .then((response) => {
        this.results = response.data.data.data;
      })
      .catch((error) => {});

    if (localStorage.userInfo != null) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      // alert(userInfo);
      if (userInfo.name != null) {
        this.userdata.name = userInfo.name;
      } else if (userInfo.token != null) {
        this.userdata.name = "Guest";
      }
    }
    if (this.$route.name == "Home") {
      this.showmenu = "show";
    }
    var lang = localStorage.getItem("lang");
    // console.log(lang);
    if (lang == null) {
      localStorage.setItem("lang", "en");
      this.isChecked = false;
    }
    if (lang == "en") {
      this.isChecked = false;
    } else if (lang == "ar") {
      this.isChecked = true;
    }
    this.langCode = lang;
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
  },
};
</script>
