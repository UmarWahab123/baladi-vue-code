<template>
<div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="site-module list-products">
          <div class="module-header">
            <h4 class="entry-title">{{ $t("Budget_deals") }}</h4>
            <a href="" class="btn link move-to-left"
              >{{ $t("View_all") }} <i class="klbth-icon-right-arrow"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>

   <section
    class="
      elementor-section
      elementor-top-section
      elementor-element
      elementor-element-c6d108d
      elementor-section-boxed
      elementor-section-height-default
      elementor-section-height-default
    "
    data-id="c6d108d"
    data-element_type="section"
  >
    <div class="elementor-container elementor-column-gap-extended">
      <div
        class="
          elementor-column
          col-md-3
          elementor-top-column
          elementor-element
          elementor-element-b922ff9
          elementor-hidden-tablet d-none
        "
        data-id="b922ff9"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="
              elementor-element
              elementor-element-ea676eb
              elementor-widget
              elementor-widget-machic-counter-product2
            "
            data-id="ea676eb"
            data-element_type="widget"
            data-widget_type="machic-counter-product2.default"
          >
            <div class="elementor-widget-container">
              <div class="products special-offer-product">
                <div class="product most-commented">
                  <div class="product-wrapper">
                    <div class="product-content">
                      <div class="special-counter">
                        <h4 class="entry-title">{{ $t("Special_offer") }}</h4>
                        <div class="product-countdown">
                          <div class="countdown-text">
                            {{ $t("Coca_cola_spacial") }}
                          </div>
                          <div
                            class="countdown"
                            data-date="2022/04/12"
                            data-text="Expired"
                          >
                            <div class="count-item dayscount"></div>
                            <span>:</span>
                            <div class="count-item hourscount"></div>
                            <span>:</span>
                            <div class="count-item minutescount"></div>
                            <span>:</span>
                            <div class="count-item secondcount"></div>
                          </div>
                          <!-- countdown -->
                        </div>
                        <!-- product-countdown -->
                      </div>
                      <!-- special-counter -->
                      <div class="thumbnail-wrapper">
                        <div class="product-badges">
                          <span class="badge onsale">32%</span>
                        </div>
                        <a href=""
                          ><img
                            src="http://english-template.bteamwebs.com/src/img/cocacolajpeg.jpeg"
                            alt="Dragon Touch Max10 Tablet Android 10.0 OS"
                        /></a>
                        <div class="product-buttons">
                          <div
                            class="
                              tinv-wraper
                              woocommerce
                              tinv-wishlist
                              tinvwl-shortcode-add-to-cart
                            "
                            data-product_id="400"
                          >
                            <div class="tinv-wishlist-clear"></div>
                            <a
                              :onclick="clickmodal"
                              role="button"
                              tabindex="0"
                              aria-label="Add to Wishlist"
                              class="d-none tinvwl-position-after"
                              data-tinv-wl-list="[]"
                              data-tinv-wl-product="478"
                              data-tinv-wl-productvariation="0"
                              data-tinv-wl-productvariations="[0]"
                              data-tinv-wl-producttype="simple"
                              data-tinv-wl-action="add"
                              ><span class="tinvwl_add_to_wishlist-text"
                                >Add to Wishlist</span
                              ></a
                            >
                            <a
                              href="javascript:void(0)"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                              ><span class="tinvwl_add_to_wishlist-text"
                                >Add to Wishlist</span
                              ></a
                            >

                            <div class="tinv-wishlist-clear"></div>
                            <div class="tinvwl-tooltip">Add to Wishlist</div>
                          </div>
                          <a href="#" class="most-comments"
                            ><img
                              src="https://klbtheme.com/machic/wp-content/themes/machic/assets/images/featured.png"
                              alt="featured" /></a
                          ><a
                            href="javascript::void(0)"
                            class="
                              woosc-btn
                              woosc-btn-521
                              woosc-btn-added
                              woosc-added
                            "
                            data-id="521"
                            >Compare</a
                          ><span
                            v-bind:topSeller_id="specialoffer?.product?.slug"
                            class="detail-bnt quickview animated"
                            ><i class="klbth-icon-eye-empty"></i
                          ></span>
                        </div>
                        <!-- product-buttons -->
                      </div>
                      <!-- thumbnail-wrapper -->
                      <div class="content-wrapper">
                        <div class="product-rating">
                          <div
                            class="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style="width: 100%"
                              >Rated
                              <strong class="rating">{{
                                specialoffer?.product?.rating
                              }}</strong>
                              out of 5</span
                            >
                          </div>
                          <div class="count-rating">
                            {{ specialoffer?.product?.review_count }}
                            <span class="rating-text">Ratings</span>
                          </div>
                        </div>
                        <h3 class="product-title">
                          <a
                            href="javascript::void(0)"
                            title="Dragon Touch Max10 Tablet Android 10.0 OS"
                            >{{ specialoffer?.product?.product_name }}</a
                          >
                        </h3>
                        <span class="price"
                          ><del aria-hidden="true"
                            ><span class="woocommerce-Price-amount amount"
                              ><bdi
                                ><span class="woocommerce-Price-currencySymbol"
                                  >{{$t('QAR')}} </span
                                >{{
                                  specialoffer?.product?.uom_products[0]
                                    ?.previous_price
                                }}</bdi
                              ></span
                            ></del
                          >
                          <ins
                            ><span class="woocommerce-Price-amount amount"
                              ><bdi
                                ><span class="woocommerce-Price-currencySymbol"
                                  >{{$t('QAR')}} </span
                                >{{
                                  specialoffer?.product?.uom_products[0]
                                    ?.regular_price
                                }}</bdi
                              ></span
                            ></ins
                          ></span
                        >
                        <!-- price -->

                        <div class="product-offer-count">
                          <div class="product-progress">
                            <span style="width: 69%"></span>
                          </div>
                          <div class="product-count-detail">
                            <div class="available">
                              Available:
                              <strong>11</strong>
                            </div>
                            <div class="sold">Sold: <strong>25</strong></div>
                          </div>
                          <!-- product-count-detail -->
                        </div>
                        <!-- product-offer-count -->
                      </div>
                      <!-- content-wrapper -->
                    </div>
                    <!-- product-content -->
                  </div>
                  <!-- product-wrapper -->
                  <br /><br /><br />
                </div>
                <!-- product -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          elementor-column
          col-md-12
          elementor-top-column elementor-element elementor-element-ace6d3a
        "
        data-id="ace6d3a"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="
              elementor-element
              elementor-element-eb5a69d
              elementor-widget
              elementor-widget-machic-product-grid
            "
            data-id="eb5a69d"
            data-element_type="widget"
            data-widget_type="machic-product-grid.default"
          >
            <div class="elementor-widget-container">
              <div class="site-module products-module">
                <div class="module-wrapper">
                  <div class="products column-4 mobile-2 total-8">
                    <div
                      class="product custom-hover"
                      :data="item"
                      :key="indextr"
                      v-for="(item, indextr) in productStore.budgetDealProducts"
                    >
                      <div
                        class="product-wrapper product-type-1"
                        :key="indextr"
                      >
                        <div class="product-content">
                          <div class="thumbnail-wrapper">
                            <div class="product-badges">
                              <span class="badge onsale">11%</span>
                            </div>
                            <a href="#">
                              <div class="product-card">
                                <div id="slidingWindow" ontouchstart="">
                                  <div class="slidingSection">
                                    <img
                                      class="img"
                                     :src="url + item?.product?.gallery?.gallery_images[0].image_md"
                                    />
                                    <div class="hover-slider-indicator">
                                      <div
                                        data-hover-slider-i="45"
                                        class="
                                          hover-slider-indicator-dot
                                          active
                                        "
                                      ></div>
                                      <div
                                        data-hover-slider-i="46"
                                        class="hover-slider-indicator-dot"
                                      ></div>
                                    </div>
                                  </div>
                                  <div class="slidingSection">
                                    <img
                                       :src="url + item?.product?.gallery?.gallery_images[0].image_md"
                                    />
                                    <div class="hover-slider-indicator">
                                      <div
                                        data-hover-slider-i="45"
                                        class="hover-slider-indicator-dot"
                                      ></div>
                                      <div
                                        data-hover-slider-i="46"
                                        class="
                                          hover-slider-indicator-dot
                                          active
                                        "
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <div class="product-buttons">
                              <div
                                class="
                                  tinv-wraper
                                  woocommerce
                                  tinv-wishlist
                                  tinvwl-shortcode-add-to-cart
                                "
                                data-product_id="521"
                              >
                                <div class="tinv-wishlist-clear"></div>
                                <a
                                  role="button"
                                  v-bind:wishlist_id="item.product.id"
                                  tabindex="0"
                                  aria-label="Add to Wishlist"
                                  class="
                                    tinvwl_add_to_wishlist_button
                                    d-none
                                    tinvwl-icon-heart
                                    tinvwl-position-after
                                    tinvwl-product-in-list
                                  "
                                  data-tinv-wl-list='{"423":{"ID":423,"title":"","status":"share","share_key":"f30715","in":[0]}}'
                                  data-tinv-wl-product="521"
                                  data-tinv-wl-productvariation="0"
                                  data-tinv-wl-productvariations="[0]"
                                  data-tinv-wl-producttype="simple"
                                  data-tinv-wl-action="addto"
                                  ><span class="tinvwl_add_to_wishlist-text"
                                    >Add to Wishlist</span
                                  ></a
                                >
                                <a
                                  :onclick="clickmodal"
                                  v-bind:wishlist_id="item.product.id"
                                  href="javascript::void(0)"
                                  ><i class="fa fa-heart" aria-hidden="true"></i
                                  ><span class="tinvwl_add_to_wishlist-text"
                                    >Add to Wishlist</span
                                  ></a
                                >
                                <div class="tinv-wishlist-clear"></div>
                                <div class="tinvwl-tooltip">
                                  Add to Wishlist
                                </div>
                              </div>
                              <a href="" class="most-comments"
                                ><img
                                  src="https://klbtheme.com/machic/wp-content/themes/machic/assets/images/featured.png"
                                  alt="featured" /></a
                              ><a
                                href="javascript::void(0)"
                                :onclick="clickcomparemodal"
                                class="
                                  woosc-btn
                                  woosc-btn-521
                                  woosc-btn-added
                                  woosc-added
                                "
                                data-id="521"
                                >Compare</a
                              ><span
                                v-bind:topSeller_id="item.product.slug"
                                :onclick="clickbigmodal"
                                class="detail-bnt quickview animated"
                                ><i class="klbth-icon-eye-empty"></i
                              ></span>
                            </div>
                          </div>
                          <div class="content-wrapper">
                            <h3 class="product-title">
                              <router-link
                                :to="
                                  '/' +
                                  langCode +
                                  '/product-detail/' +
                                  item.product.slug
                                "
                                >{{ item.product.product_name }}</router-link
                              >
                            </h3>
                            <div class="product-rating">
                              <div
                                class="star-rating"
                                role="img"
                                aria-label="Rated 5.00 out of 5"
                              >
                                <span style="width: 100%"
                                  >Rated
                                  <strong class="rating">{{
                                    item.product.rating
                                  }}</strong>
                                  out of 5</span
                                >
                              </div>
                              <div class="count-rating">
                                {{ item.product.review_count }}
                                <span class="rating-text">Ratings</span>
                              </div>
                            </div>
                            <div class="product-price-cart">
                              <span class="price"
                                ><del aria-hidden="true"
                                  ><span class="woocommerce-Price-amount amount"
                                    ><bdi
                                      ><span
                                        class="woocommerce-Price-currencySymbol"
                                        >{{$t('QAR')}} </span
                                      >{{
                                        item.product?.uom_products[0]
                                          ?.previous_price
                                      }}</bdi
                                    ></span
                                  ></del
                                >
                                <ins
                                  ><span
                                    class="woocommerce-Price-amount amount"
                                    style="margin: 4px"
                                    ><bdi
                                      ><span
                                        class="woocommerce-Price-currencySymbol"
                                        >{{$t('QAR')}} </span
                                      >{{
                                        item.product?.uom_products[0]
                                          ?.regular_price
                                      }}</bdi
                                    ></span
                                  ></ins
                                ></span
                              >
                 
                             </div>
                            </div>
                          </div>
                        <div class="product-footer">
                          <div class="product-footer-buttons">
                         
                              <a
                                href="javascript:void(0)"
                                data-quantity="1"
                                class="
                                  button
                                  product_type_simple
                                  add_to_cart_button
                                  ajax_add_to_cart
                                "
                                @click="addtoCart(item,indextr)"
                                ><i class="klbth-icon-shop-1"></i> Add to
                                cart</a
                              >
                                  <router-link
                                  v-if="item?.check"
                                  :to="
                                    '/' +
                                    langCode +
                                    '/cart'"
                                  class="added_to_cart wc-forward"
                                  title="View cart"
                                  >View cart</router-link
                                >
                          </div>
                          <div class="product-footer-details">
                            <ul>
                              <li class="SpecHighlights-list-label d-none">
                                {{ item.product.lg_description }}
                              </li>
                            </ul>
                            &nbsp;
                          </div>
                        </div>
                      </div>
                      <div
                        class="product-content-fade"
                        style="margin-bottom: -109px"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
 
</template>
<style scoped>
#slidingWindow {
  display: flex;
  /* margin: 1em 4em; */
  overflow: hidden;
  width: 210px;
  height: 250px;
  border: 1px solid hsl(44, 25, 50);
  @include background-image(
    linear-gradient(to bottom, hsl(50, 60, 60), hsl(50, 40, 50))
  );
  box-shadow: 0 2px 3px hsla(0, 0, 12, 0.8);
}

#slidingWindow,
.slidingSection,
img {
  border-radius: 2px;
}
.slidingSection {
  margin: 4px;
  @include background-image(
    linear-gradient(to bottom, hsl(62, 52, 75) 60%, hsl(82, 45, 35))
  );
  width: 200px;
  min-width: 200px;
  height: 240px;
  text-align: center;
  border: 1px solid hsl(32, 25, 55);
  transform: translate3d(0, 0, 0);
  transition: transform 450ms linear;
}

#slidingWindow:hover > .slidingSection {
  transform: translate3d(-210px, 0, 0);
  transition: transform 450ms linear;
}

.img {
  display: block;
  width: 200px;
  height: 200px;
  border: 0;
  outline: 0;
  vertical-align: middle;
  box-shadow: 0 1px 0 hsla(0, 0, 25, 0.4);
}
</style>
<script setup>
import { useCartStore } from "../../stores/CartStore";
import { useProductStore } from "../../stores/ProductStore";
const productStore = useProductStore();
const cartStore = useCartStore();
defineEmits(["addToCart"]);
</script>
<script>
import.meta.env.VITE_API_KEY;
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import axios from "axios";
export default {
  components: { Splide, SplideSlide },
  data: () => ({
    showmodal: "",
    showmodalstyle: "",
      url: "http://baladi-v1.bteamwebs.com/storage/",
    showbigmodal: "",
    showbigmodalstyle: "",
    showcomparemodal: "",
    showcomparemodalstyle: "",
    results: [],
    specialoffer: [],
    quantity: 0,
    showmessage: "Loading...",
    activeImage: 0,
    //Hold the timeout, so we can clear it when it is needed
    autoSlideTimeout: null,
    //If the timer is stopped e.g. when hovering over the carousel
    stopSlider: false,
    //Hold the time left until changing to the next image
    timeLeft: 0,
    //Hold the interval so we can clear it when needed
    timerInterval: null,
    //Every 10ms decrease the timeLeft
    countdownInterval: 10,
    langCode: "en",
    images: {
      0: {
        thumb:
          "https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg",
        length: 1,
      },
      1: {
        thumb:
          "https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg",
        length: 1,
      },
      2: {
        thumb:
          "https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg",
        length: 1,
      },
    },
    singleProduct: [],
    sub_products: [],
    token: "",
    wistlist: [],
  }),
  // computed: {
   
  //   currentImage() {
  //     this.timeLeft = this.autoSlideInterval;
  //     return this.images[this.activeImage].thumb;
  //   },
  //   progressBar() {
  //     return 100 - (this.timeLeft / this.autoSlideInterval) * 100;
  //   },
  // },
  mounted() {
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  // Update the count down every 1 second
    var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.querySelector(".dayscount").innerHTML = days;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".hourscount").innerHTML = hours;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".minutescount").innerHTML = minutes;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".secondcount").innerHTML = seconds;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
    var langCode = localStorage.getItem("lang");
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/web/product/getcampaign?campaign_name=budget-deals&locale=" +
          langCode
      )
      .then((response) => {
        this.results = response.data.data[0].products;
        // console.log(this.results);
        const productStore = useProductStore();
        productStore.BudgetDealData(this.results);
      
      })
      .catch((error) => {});
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/web/product/getcampaign?campaign_name=special-offer&locale=" +
          langCode
      )
      .then((response) => {
        this.specialoffer = response.data.data[0].products[0];
      })
      .catch((error) => {});
    if (localStorage.userInfo != null) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.token = userInfo.token;
    }
    var lang = localStorage.getItem("lang");
    this.langCode = lang;

  },
  methods: {
    addtoCart(item,index) {
      const cartStore = useCartStore();
      cartStore.addcartapi(item);
      this.results[index].check = true;
    },
    clickmodal(event) {
      const wishlistid = event.currentTarget.getAttribute("wishlist_id");
      const payload = {
        product_id: wishlistid,
      };
      axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/mobile/product/addWishlist",
          payload,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then((response) => {
          this.showmessage = response.data.message;
          // console.log(this.showmessage);
        })
        .catch((error) => {});
      this.showmodal = "show";
      this.showmodalstyle = "display:block";
    },
    closemodal() {
      this.showmessage = "Loading...";
      this.showmodal = "";
      this.showmodalstyle = "";
    },
  
    clickbigmodal(event) {
      const topseller_id = event.currentTarget.getAttribute("topseller_id");
      // alert(topseller_id);
      axios
        .get(
          "http://baladi-v1.bteamwebs.com/api/mobile/product/getproductbyslug?slug=" +
            topseller_id + '&locale='+this.langCode
        )
        .then((response) => {
          this.singleProduct = response.data.data[0];
          this.sub_products = response.data.data[0].uom_products[0];
          // console.log("response.data.data", this.singleProduct);
        })
        .catch((error) => {});
      this.showbigmodal = "show";
      this.showbigmodalstyle = "display:block";
    },
    closebigmodal() {
      this.showbigmodal = "";
      this.showbigmodalstyle = "";
    },
    clickcomparemodal(index) {
      this.showcomparemodal = "show";
      this.showcomparemodalstyle = "display:block";
    },
    closecomparemodal() {
      this.showcomparemodal = "";
      this.showcomparemodalstyle = "";
    },
    increment: function () {
      // const input_index = event.currentTarget.getAttribute("input_Index");
      this.quantity = this.quantity + 1;
    },
    decrement: function () {
      // const input_index = event.currentTarget.getAttribute("input_Index");

      this.quantity = this.quantity - 1;
    },
    nextImage() {
      var active = this.activeImage + 1;
      if (active >= 3) {
        active = 0;
      }
      this.activateImage(active);
    },
    // Go backwards on the images array
    // or go at the last image
    prevImage() {
      var active = this.activeImage - 1;
      if (active < 0) {
        active = 3 - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    },
    //Wait until 'interval' and go to the next image;
    startTimer(interval) {
      if (interval && interval > 0 && !this.stopSlider) {
        var self = this;
        clearTimeout(this.autoSlideTimeout);
        this.autoSlideTimeout = setTimeout(function () {
          self.nextImage();
          self.startTimer(self.autoSlideInterval);
        }, interval);
      }
    },
    //Stop the timer when hovering over the carousel
    stopTimer() {
      clearTimeout(this.autoSlideTimeout);
      this.stopSlider = true;
      clearInterval(this.timerInterval);
    },
    //Restart the timer(with 'timeLeft') when leaving from the carousel
    restartTimer() {
      this.stopSlider = false;
      clearInterval(this.timerInterval);
      this.startCountdown();
      this.startTimer(this.timeLeft);
    },
    //Start countdown from 'autoSlideInterval' to 0
    startCountdown() {
      if (!this.showProgressBar) return;
      var self = this;
      this.timerInterval = setInterval(function () {
        self.timeLeft -= self.countdownInterval;
        if (self.timeLeft <= 0) {
          self.timeLeft = self.autoSlideInterval;
        }
      }, this.countdownInterval);
    },
  },
  created() {
    //Check if startingImage prop was given and if the index is inside the images array bounds
    if (
      this.startingImage &&
      this.startingImage >= 0 &&
      this.startingImage < this.images.length
    ) {
      this.activeImage = this.startingImage;
    }
    //Check if autoSlideInterval prop was given and if it is a positive number
    if (
      this.autoSlideInterval &&
      this.autoSlideInterval > this.countdownInterval
    ) {
      //Start the timer to go to the next image
      this.startTimer(this.autoSlideInterval);
      this.timeLeft = this.autoSlideInterval;
      //Start countdown to show the progressbar
      this.startCountdown();
    }
  },
  // props: ["startingImage", "autoSlideInterval", "showProgressBar"],
};
</script>



<style scoped>
.card-carousel {
  user-select: none;
  position: relative;
}
.progressbar {
  display: block;
  width: 100%;
  height: 5px;
  position: absolute;
  background-color: rgba(221, 221, 221, 0.25);
  z-index: 1;
}
.progressbar > div {
  background-color: rgba(255, 255, 255, 0.52);
  height: 100%;
}
.thumbnails {
  display: flex;
  /* justify-content: space-evenly; */
  flex-direction: row;
}
.thumbnail-image {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
}
.thumbnail-image > img {
  width: 100%;
  height: auto;
  transition: all 250ms;
}
.thumbnail-image:hover > img,
.thumbnail-image.active > img {
  opacity: 0.6;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}
.card-img {
  position: relative;
  margin-bottom: 15px;
}
.card-img > img {
  display: block;
  margin: 0 auto;
}
.actions {
  font-size: 1.5em;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #585858;
}
.actions > span {
  cursor: pointer;
  transition: all 250ms;
  font-size: 45px;
}
.actions > span.prev {
  margin-left: 5px;
}
.actions > span.next {
  margin-right: 5px;
}
.actions > span:hover {
  color: #eee;
}
</style>

