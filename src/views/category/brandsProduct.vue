<template>
  <Header />
  <!-- 5th section  -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="site-module list-products">
          <div class="module-header">
            <h4 class="entry-title mt-3">Brands Product</h4>
            <a href="" class="btn link"
              >View All <i class="klbth-icon-right-arrow"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section
    class="elementor-section elementor-top-section elementor-element elementor-element-c6d108d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
    data-id="c6d108d"
    data-element_type="section"
  >
    <div class="elementor-container elementor-column-gap-extended">
      <div
        class="elementor-column col-md-12 elementor-top-column elementor-element elementor-element-ace6d3a"
        data-id="ace6d3a"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="elementor-element elementor-element-eb5a69d elementor-widget elementor-widget-machic-product-grid"
            data-id="eb5a69d"
            data-element_type="widget"
            data-widget_type="machic-product-grid.default"
          >
            <div class="elementor-widget-container">
              <div class="site-module products-module">
                <div class="module-wrapper">
                  <div class="products column-4 mobile-2 total-8">
                    <div
                      :data="item"
                      :key="indextr"
                      v-for="(item, indextr) in results"
                      class="product custom-hover"
                    >
                      <div class="product-wrapper product-type-1">
                        <div class="product-content">
                          <div class="thumbnail-wrapper">
                            <div class="product-badges">
                              <span class="badge onsale">11%</span>
                            </div>
                            <a href="#">
                              <div class="product-card">
                                <img
                                  :src="this.url + item.images[0].photo"
                                  data-hover-slides='["./src/img/products/Tea/ahmad tea english breakfast 100 bags_.jpg ", "./src/img/products/Tea/ahmad tea english breakfast 100 bags_.jpg "]'
                                />
                              </div>
                            </a>
                            <div class="product-buttons">
                              <div
                                class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart"
                                data-product_id="521"
                              >
                                <div class="tinv-wishlist-clear"></div>
                                <a
                                  role="button"
                                  tabindex="0"
                                  aria-label="Add to Wishlist"
                                  class="tinvwl_add_to_wishlist_button tinvwl-icon-heart tinvwl-position-after tinvwl-product-in-list"
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
                                href="#"
                                class="woosc-btn woosc-btn-521 woosc-btn-added woosc-added"
                                data-id="521"
                                >Compare</a
                              ><a
                                href="521"
                                class="detail-bnt quickview animated"
                                ><i class="klbth-icon-eye-empty"></i
                              ></a>
                            </div>
                          </div>
                          <div class="content-wrapper">
                            <h3 class="product-title">
                              <a href=""> {{ item.name }}</a>
                            </h3>
                            <div class="product-rating">
                              <div
                                class="star-rating"
                                role="img"
                                aria-label="Rated 5.00 out of 5"
                              >
                                <span style="width: 100%"
                                  >Rated
                                  <strong class="rating">5.00</strong> out of
                                  5</span
                                >
                              </div>
                              <div class="count-rating">
                                1 <span class="rating-text">Ratings</span>
                              </div>
                            </div>
                            <div class="product-price-cart">
                              <span class="price"
                                ><del aria-hidden="true"
                                  ><span class="woocommerce-Price-amount amount"
                                    ><bdi
                                      ><span
                                        class="woocommerce-Price-currencySymbol"
                                        >QAR </span
                                      >{{ item.previous_price }}</bdi
                                    ></span
                                  ></del
                                >
                                <ins
                                  ><span class="woocommerce-Price-amount amount"
                                    ><bdi
                                      ><span
                                        class="woocommerce-Price-currencySymbol"
                                        >QAR </span
                                      >{{ item.sale_price }}</bdi
                                    ></span
                                  ></ins
                                ></span
                              ><a
                                href="?add-to-cart=521"
                                data-quantity="1"
                                class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                data-product_id="521"
                                data-product_sku="BE45VGRT"
                                aria-label="Add “Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB” to your cart"
                                rel="nofollow"
                                ><i class="klbth-icon-shop-1"></i> Add to
                                cart</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="product-footer">
                          <div class="product-footer-details">
                            <ul>
                              <li class="SpecHighlights-list-label">
                                Breakfast
                              </li>
                              <li>Fresh</li>
                              <li>3kg</li>
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
  <Footer />
</template>
<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
</script>
<script>
import.meta.env.VITE_API_KEY;
import axios from "axios";
export default {
  data: () => ({
    url: import.meta.env.VITE_API_URL + "/storage/",
    results: [],

    errors: "",
  }),
  mounted() {
    var id = this.$route.params.id;
    axios
      .get(import.meta.env.VITE_API_URL + "/api/web/header/brandProducts/" + id)
      .then((response) => {
        this.results = response.data.data.data;
        console.log(this.results);
      })
      .catch((error) => {});
  },
};
</script>
