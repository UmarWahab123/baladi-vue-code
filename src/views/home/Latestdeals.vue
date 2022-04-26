<template>
  <section
    class="elementor-section elementor-top-section elementor-element elementor-element-4cd6823 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
    data-id="4cd6823"
    data-element_type="section"
  >
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-3f452c4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="3f452c4"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-extended">
        <div
          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3eeb54d"
          data-id="3eeb54d"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-d055bda elementor-widget elementor-widget-machic-product-list2"
              data-id="d055bda"
              data-element_type="widget"
              data-widget_type="machic-product-list2.default"
            >
              <div class="elementor-widget-container">
                <div class="site-module list-products">
                  <div class="module-header">
                    <h4 class="entry-title">Hot Deals</h4>
                    <a href="" class="btn link"
                      >View All <i class="klbth-icon-right-arrow"></i
                    ></a>
                  </div>
                  <div class="module-wrapper">
                    <div class="products list-style column-3 mobile-1">
                      <div
                        class="product custom-hover"
                        :data="item"
                        :key="indextr"
                        v-for="(item, indextr) in results"
                      >
                        <div class="product-wrapper">
                          <div class="product-content">
                            <div class="thumbnail-wrapper">
                              <div class="product-badges">
                                <span class="badge onsale">11%</span>
                              </div>
                              <router-link
                                :to="{
                                  name: 'product-detail',
                                  params: { id: item.id },
                                }"
                              >
                                <div
                                  class="product-card"
                                  style="position: relative"
                                >
                                  <div
                                    class="hover-slider-images-toggler"
                                    style="
                                      position: absolute;
                                      inset: 0px;
                                      display: flex;
                                    "
                                  >
                                    <div
                                      class="hover-slider-toggle-pane"
                                      data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                      data-hover-slider-i="44"
                                      style="flex-grow: 1"
                                    ></div>
                                    <div
                                      class="hover-slider-toggle-pane"
                                      data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                      data-hover-slider-i="45"
                                      style="flex-grow: 1"
                                    ></div>
                                    <div
                                      class="hover-slider-toggle-pane"
                                      data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                      data-hover-slider-i="46"
                                      style="flex-grow: 1"
                                    ></div>
                                    <div
                                      class="hover-slider-toggle-pane"
                                      data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                      data-hover-slider-i="47"
                                      style="flex-grow: 1"
                                    ></div>
                                    <div
                                      class="hover-slider-toggle-pane"
                                      data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                      data-hover-slider-i="48"
                                      style="flex-grow: 1"
                                    ></div>
                                  </div>
                                  <div class="hover-slider-indicator">
                                    <div
                                      data-hover-slider-i="44"
                                      class="hover-slider-indicator-dot"
                                    ></div>
                                    <div
                                      data-hover-slider-i="45"
                                      class="hover-slider-indicator-dot"
                                    ></div>
                                    <div
                                      data-hover-slider-i="46"
                                      class="hover-slider-indicator-dot active"
                                    ></div>
                                    <div
                                      data-hover-slider-i="47"
                                      class="hover-slider-indicator-dot"
                                    ></div>
                                    <div
                                      data-hover-slider-i="48"
                                      class="hover-slider-indicator-dot"
                                    ></div>
                                  </div>
                                  <img
                                    :src="this.url + item.images[0].photo"
                                    class="hover-slider-init"
                                    data-options='{"touch":"end","preloadImages": true }'
                                  />
                                </div>
                              </router-link>
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
                                    class="tinvwl_add_to_wishlist_button tinvwl-icon-heart tinvwl-position-after"
                                    data-tinv-wl-list="[]"
                                    data-tinv-wl-product="521"
                                    data-tinv-wl-productvariation="0"
                                    data-tinv-wl-productvariations="[0]"
                                    data-tinv-wl-producttype="simple"
                                    data-tinv-wl-action="add"
                                    ><span class="tinvwl_add_to_wishlist-text"
                                      >Add to Wishlist</span
                                    ></a
                                  >
                                  <div class="tinv-wishlist-clear"></div>
                                  <div class="tinvwl-tooltip">
                                    Add to Wishlist
                                  </div>
                                </div>
                                <a href="#?featured=yes" class="most-comments"
                                  ><img
                                    src="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                    alt="featured" /></a
                                ><a
                                  href="#"
                                  class="woosc-btn woosc-btn-521"
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
                                <a
                                  href="#apple-10-9-inch-ipad-air-wi-fi-cellular-64gb/"
                                  >{{ item.name }}</a
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
                                      item.rating
                                    }}</strong>
                                    out of 5</span
                                  >
                                </div>
                                <div class="count-rating">
                                  1 <span class="rating-text">Ratings</span>
                                </div>
                              </div>
                              <span class="price"
                                ><del aria-hidden="true"
                                  ><span class="woocommerce-Price-amount amount"
                                    ><bdi
                                      ><span
                                        class="woocommerce-Price-currencySymbol"
                                        >$</span
                                      >{{ item.previous_price }}</bdi
                                    ></span
                                  ></del
                                >
                                <ins
                                  ><span class="woocommerce-Price-amount amount"
                                    ><bdi
                                      ><span
                                        class="woocommerce-Price-currencySymbol"
                                        >$</span
                                      >{{ item.sale_price }}</bdi
                                    ></span
                                  ></ins
                                ></span
                              >
                              <div class="product-details">
                                <ul>
                                  <li class="SpecHighlights-list-label">
                                    Screen Size 10.9 in
                                  </li>
                                  <li>Operating System Apple iOS</li>
                                  <li>Product Length 9.74 in</li>
                                </ul>
                                &nbsp;
                              </div>
                            </div>
                          </div>
                          <div class="product-footer">
                            <div class="product-footer-buttons">
                              <a
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
                        <div
                          class="product-content-fade"
                          style="margin-bottom: -68px"
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

      <div class="elementor-container elementor-column-gap-extended">
        <div
          class="elementor-column col-md-3 elementor-top-column elementor-element elementor-element-40ba9c6 elementor-hidden-tablet"
          data-id="40ba9c6"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-0e25223 elementor-widget elementor-widget-machic-banner-box3"
              data-id="0e25223"
              data-element_type="widget"
              data-widget_type="machic-banner-box3.default"
            >
              <div class="elementor-widget-container">
                <div class="klb-banner-box3 product-category-detail">
                  <div
                    class="category-banner"
                    style="background-color: #f5f5f7"
                  >
                    <div class="banner dark align-top">
                      <div class="banner-content">
                        <div class="banner-content-wrapper">
                          <h6 class="entry-subtitle style-2">Best Seller</h6>
                          <h3 class="entry-title thin">
                            Buy The Latest
                            <strong>iPhone XS Pro</strong>
                          </h3>
                          <div class="entry-description">
                            <p>
                              Pellentesque habitant morbi tristique senectus.
                            </p>
                          </div>
                          <div class="entry-button">
                            <a href="#" class="btn small rounded link-color"
                              >Shop Now</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="banner-image">
                        <img
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/banner-10.jpg"
                          alt="banner"
                        />
                      </div>
                      <a href="#" class="overlay-link"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-column col-md-9 elementor-top-column elementor-element elementor-element-08eed1f"
          data-id="08eed1f"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-4760d3f elementor-widget elementor-widget-machic-product-grid"
              data-id="4760d3f"
              data-element_type="widget"
              data-widget_type="machic-product-grid.default"
            >
              <div class="elementor-widget-container">
                <div class="site-module products-module">
                  <div class="module-wrapper">
                    <div class="products column-4 mobile-2 total-8">
                      <div class="product custom-hover" v-for="n in 8">
                        <div class="product-wrapper product-type-1">
                          <div class="product-content">
                            <div class="thumbnail-wrapper">
                              <div class="product-badges">
                                <span class="badge onsale">11%</span>
                              </div>
                              <a href="#">
                                <div
                                  class="product-card"
                                  style="position: relative"
                                >
                                  <div
                                    class="hover-slider-images-toggler"
                                    style="
                                      position: absolute;
                                      inset: 0px;
                                      display: flex;
                                    "
                                  >
                                    <div
                                      class="hover-slider-toggle-pane"
                                      data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                      data-hover-slider-i="60"
                                      style="flex-grow: 1"
                                    ></div>
                                    <div
                                      class="hover-slider-toggle-pane"
                                      data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                      data-hover-slider-i="61"
                                      style="flex-grow: 1"
                                    ></div>
                                    <div
                                      class="hover-slider-toggle-pane"
                                      data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                      data-hover-slider-i="62"
                                      style="flex-grow: 1"
                                    ></div>
                                    <div
                                      class="hover-slider-toggle-pane"
                                      data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                      data-hover-slider-i="63"
                                      style="flex-grow: 1"
                                    ></div>
                                    <div
                                      class="hover-slider-toggle-pane"
                                      data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                      data-hover-slider-i="64"
                                      style="flex-grow: 1"
                                    ></div>
                                  </div>
                                  <div class="hover-slider-indicator">
                                    <div
                                      data-hover-slider-i="60"
                                      class="hover-slider-indicator-dot"
                                    ></div>
                                    <div
                                      data-hover-slider-i="61"
                                      class="hover-slider-indicator-dot"
                                    ></div>
                                    <div
                                      data-hover-slider-i="62"
                                      class="hover-slider-indicator-dot active"
                                    ></div>
                                    <div
                                      data-hover-slider-i="63"
                                      class="hover-slider-indicator-dot"
                                    ></div>
                                    <div
                                      data-hover-slider-i="64"
                                      class="hover-slider-indicator-dot"
                                    ></div>
                                  </div>
                                  <img
                                    src="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                    class="hover-slider-init"
                                    data-options='{"touch":"end","preloadImages": true }'
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
                                    class="tinvwl_add_to_wishlist_button tinvwl-icon-heart tinvwl-position-after"
                                    data-tinv-wl-list="[]"
                                    data-tinv-wl-product="521"
                                    data-tinv-wl-productvariation="0"
                                    data-tinv-wl-productvariations="[0]"
                                    data-tinv-wl-producttype="simple"
                                    data-tinv-wl-action="add"
                                    ><span class="tinvwl_add_to_wishlist-text"
                                      >Add to Wishlist</span
                                    ></a
                                  >
                                  <div class="tinv-wishlist-clear"></div>
                                  <div class="tinvwl-tooltip">
                                    Add to Wishlist
                                  </div>
                                </div>
                                <a href="#?featured=yes" class="most-comments"
                                  ><img
                                    src="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                                    alt="featured" /></a
                                ><a
                                  href="#"
                                  class="woosc-btn woosc-btn-521"
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
                                <a href="#"
                                  >Apple 10.9-inch iPad Air Wi-Fi Cellular
                                  64GB</a
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
                                    ><span
                                      class="woocommerce-Price-amount amount"
                                      ><bdi
                                        ><span
                                          class="woocommerce-Price-currencySymbol"
                                          >$</span
                                        >699.99</bdi
                                      ></span
                                    ></del
                                  >
                                  <ins
                                    ><span
                                      class="woocommerce-Price-amount amount"
                                      ><bdi
                                        ><span
                                          class="woocommerce-Price-currencySymbol"
                                          >$</span
                                        >629.99</bdi
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
                                  Screen Size 10.9 in
                                </li>
                                <li>Operating System Apple iOS</li>
                                <li>Product Length 9.74 in</li>
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
  </section>
</template>
<script>
import.meta.env.VITE_API_KEY;
import TheLoader from "../Loader/TheLoader.vue";
import axios from "axios";
export default {
  components: { TheLoader },
  data() {
    return {
      isloading: true,
      url: import.meta.env.VITE_API_URL + "/storage/",
      results: [],
    };
  },
  mounted() {
    setTimeout(() => (this.isloading = false), 1000);
    axios
      .get(import.meta.env.VITE_API_URL + "/api/web/home/hotdeals")
      .then((response) => {
        this.results = response.data.data;
        // console.log(this.results);
      })
      .catch((error) => {});
  },
};
</script>
