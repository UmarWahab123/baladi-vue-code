<template>
  <!-- 3rd section  -->
  <section
    class="elementor-section elementor-top-section elementor-element elementor-element-55ef817 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
    data-id="55ef817"
    data-element_type="section"
  >
    <div class="elementor-container elementor-column-gap-extended">
      <div
        class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64c48a6"
        data-id="64c48a6"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="elementor-element elementor-element-57bc36c elementor-widget elementor-widget-machic-product-grid"
            data-id="57bc36c"
            data-element_type="widget"
            data-widget_type="machic-product-grid.default"
          >
            <div class="elementor-widget-container">
              <div class="site-module products-module">
                <div class="module-header">
                  <h4 class="entry-title">Top Sellers</h4>
                  <div class="product-countdown">
                    <div
                      class="countdown"
                      data-date="2022/04/15"
                      data-text="Expired"
                    >
                      <div class="count-item days">51</div>
                      <span>:</span>
                      <div class="count-item hours">13</div>
                      <span>:</span>
                      <div class="count-item minutes">11</div>
                      <span>:</span>
                      <div class="count-item second">51</div>
                    </div>
                    <!-- countdown -->
                    <div class="countdown-text">
                      Remains until the end of the offer
                    </div>
                  </div>
                  <a href="" class="btn link"
                    >View All <i class="klbth-icon-right-arrow"></i
                  ></a>
                </div>
                <div class="module-wrapper">
                  <div class="products column-5 mobile-2 total-5">
                    <div
                      class="product custom-hover"
                      :data="item"
                      :key="indextr"
                      v-for="(item, indextr) in results"
                    >
                      <div class="product-wrapper product-type-3">
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
                              <div class="product-card">
                                <div id="slidingWindow" ontouchstart="">
                                  <div class="slidingSection">
                                    <img
                                      class="img"
                                      :src="this.url + item.images[0].photo"
                                    />
                                  </div>
                                  <div class="slidingSection">
                                    <img
                                      :src="this.url + item.images[0].photo"
                                    />
                                  </div>
                                </div>
                              </div>
                            </router-link>

                            <div class="product-buttons">
                              <div
                                class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart"
                                data-product_id="478"
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
                                  :onclick="clickmodal"
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
                              <a href="#?featured=yes" class="most-comments"
                                ><img
                                  src="https://klbtheme.com/machic/wp-content/themes/machic/assets/images/featured.png"
                                  alt="featured" /></a
                              ><a
                                href="javascript::void(0)"
                                class="woosc-btn woosc-btn-521 woosc-btn-added woosc-added"
                                :onclick="clickcomparemodal"
                                data-id="521"
                                >Compare</a
                              ><span
                                :onclick="clickbigmodal"
                                class="detail-bnt quickview animated"
                                ><i class="klbth-icon-eye-empty"></i
                              ></span>
                            </div>
                            <!-- product-buttons -->
                          </div>
                          <!-- thumbnail-wrapper -->
                          <div class="content-wrapper">
                            <h3 class="product-title">
                              <a
                                href="https://klbtheme.com/machic/product/apple-10-9-inch-ipad-air-wi-fi-cellular-64gb/"
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
                                1
                                <span class="rating-text">Ratings </span>
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
                            <!-- price -->
                            <div class="product-meta">
                              <div class="product-message color-light">
                                2-day Delivery
                              </div>
                            </div>
                            <!-- product-meta -->
                          </div>
                          <!-- content-wrapper -->
                        </div>
                        <!-- product-content -->
                        <div class="product-footer">
                          <div class="product-footer-buttons">
                            <a
                              data-quantity="1"
                              class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              ><i class="klbth-icon-shop-1"></i> Add to cart</a
                            >
                          </div>

                          <!-- product-footer-buttons -->
                          <div class="product-footer-details">
                            <ul>
                              <li class="SpecHighlights-list-label">laban</li>
                              <li>Fresh</li>
                              <li>2 kg</li>
                            </ul>
                            &nbsp;
                          </div>
                        </div>
                        <!-- product-footer -->
                      </div>
                      <!-- product-wrapper -->
                      <div
                        class="product-content-fade"
                        style="margin-bottom: -177px"
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

  <!-- logo slider  -->

  <div
    id="wishlist"
    :class="showmodal"
    style="display: none"
    :style="showmodalstyle"
    class="tinv-wishlist"
  >
    <div class="tinvwl_added_to_wishlist tinv-modal tinv-modal-open">
      <div class="tinv-overlay"></div>
      <div class="tinv-table">
        <div class="tinv-cell">
          <div class="tinv-modal-inner">
            <i class="icon_big_heart_check"></i>
            <div class="tinv-txt">
              Apple iPhone 11 64GB Yellow Fully Unlocked added to Wishlist
            </div>
            <div class="tinvwl-buttons-group tinv-wishlist-clear">
              <button
                class="button tinvwl_button_view tinvwl-btn-onclick"
                data-url="https://klbtheme.com/machic/wishlist/990457/"
                type="button"
              >
                <i class="ftinvwl ftinvwl-heart-o"></i>View Wishlist
              </button>
              <button
                @click="closemodal"
                class="button tinvwl_button_close"
                type="button"
              >
                <i class="ftinvwl ftinvwl-times"></i>Close
              </button>
            </div>
            <div class="tinv-wishlist-clear"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    style="display: none"
    :class="showbigmodal"
    :style="showbigmodalstyle"
    id="myDIV"
  >
    <div class="mfp-bg mfp-ready"></div>
    <div class="mfp-wrap mfp-auto-cursor mfp-ready" tabindex="-1">
      <div class="mfp-container mfp-s-ready">
        <div class="mfp-content">
          <div
            class="quickview-product single-product-wrapper product white-popup"
          >
            <div class="quick-product-wrapper single-product-container">
              <button
                @click="closebigmodal"
                title="Close (Esc)"
                type="button"
                class="mfp-close"
              >
                ×
              </button>
              <div class="row">
                <div class="col col-12 col-lg-6">
                  <div class="single-thumbnails default">
                    <div class="woocommerce-product-gallery">
                      <div class="images-wrapper">
                        <div
                          id="product-images"
                          class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-autoheight swiper-container-rtl slider-loaded"
                          data-effect="slide"
                          data-direction="horizontal"
                          data-loop="false"
                          data-speed="1000"
                          data-spacebetween="0"
                          data-autoplay="false"
                          data-autospeed="300"
                          data-items="1"
                          data-mobileitems="1"
                          data-tabletitems="1"
                        >
                          <div
                            class="swiper-wrapper"
                            id="swiper-wrapper-39f31b07e93eaefa"
                            aria-live="polite"
                            style="
                              height: 455px;
                              transform: translate3d(0px, 0px, 0px);
                            "
                          >
                            <div
                              class="swiper-slide swiper-slide-active"
                              role="group"
                              aria-label="1 / 3"
                              style="width: 455px"
                            >
                              <a href="#"
                                ><img
                                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-4.jpg"
                              /></a>
                            </div>
                            <!-- swiper-slide -->
                            <div
                              class="swiper-slide swiper-slide-next"
                              role="group"
                              aria-label="2 / 3"
                              style="width: 455px"
                            >
                              <a href="#"
                                ><img
                                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/cubitt2.jpg"
                              /></a>
                            </div>
                            <!-- swiper-slide -->
                            <div
                              class="swiper-slide"
                              role="group"
                              aria-label="3 / 3"
                              style="width: 455px"
                            >
                              <a href="#"
                                ><img
                                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/cubitt3.jpg"
                              /></a>
                            </div>
                            <!-- swiper-slide -->
                          </div>
                          <!-- swiper-wrapper -->
                          <div
                            class="swiper-button-prev swiper-button-disabled"
                            tabindex="-1"
                            role="button"
                            aria-label="Previous slide"
                            aria-controls="swiper-wrapper-39f31b07e93eaefa"
                            aria-disabled="true"
                          ></div>
                          <div
                            class="swiper-button-next"
                            tabindex="0"
                            role="button"
                            aria-label="Next slide"
                            aria-controls="swiper-wrapper-39f31b07e93eaefa"
                            aria-disabled="false"
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
                        <!-- product-images -->
                      </div>
                      <!-- images-wrapper -->
                      <div class="thumbnails-wrapper">
                        <div
                          id="product-thumbnails"
                          class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-free-mode swiper-container-rtl swiper-container-thumbs slider-loaded"
                          data-effect="slide"
                          data-direction="horizontal"
                          data-loop="false"
                          data-speed="1000"
                          data-spacebetween="5"
                          data-autoplay="false"
                          data-autospeed="300"
                          data-items="4"
                          data-mobileitems="1"
                          data-tabletitems="1"
                        >
                          <div
                            class="swiper-wrapper"
                            id="swiper-wrapper-8e71d9468d4e35e1"
                            aria-live="polite"
                            style="transform: translate3d(0px, 0px, 0px)"
                          >
                            <div
                              class="swiper-slide swiper-slide-thumb-active swiper-slide-visible swiper-slide-active"
                              role="group"
                              aria-label="1 / 3"
                              style="width: 85.8px; margin-left: 7px"
                            >
                              <a href="#"
                                ><img
                                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-4.jpg"
                              /></a>
                            </div>
                            <!-- swiper-slide -->
                            <div
                              class="swiper-slide swiper-slide-visible swiper-slide-next"
                              role="group"
                              aria-label="2 / 3"
                              style="width: 85.8px; margin-left: 7px"
                            >
                              <a href="#"
                                ><img
                                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/cubitt2.jpg"
                              /></a>
                            </div>
                            <!-- swiper-slide -->
                            <div
                              class="swiper-slide swiper-slide-visible"
                              role="group"
                              aria-label="3 / 3"
                              style="width: 85.8px; margin-left: 7px"
                            >
                              <a href="#"
                                ><img
                                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/cubitt3.jpg"
                              /></a>
                            </div>
                            <!-- swiper-slide -->
                          </div>
                          <!-- swiper-wrapper --><span
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
                        <!-- product-thumbnails -->
                      </div>
                      <!-- thumbnails-wrapper -->
                    </div>
                    <!-- woocommerce-product-gallery -->
                  </div>
                  <!-- single-thumbnails -->
                </div>
                <!-- col -->
                <div class="col col-12 col-lg-6">
                  <h1 class="product_title entry-title">
                    Cubitt Smart Watch CT2S Waterproof Fitness Tracker
                  </h1>
                  <div class="product-meta">
                    <div class="product-model">
                      <span>Model:</span>
                      A248458
                    </div>
                    <!-- product-model -->
                    <div class="sku-wrapper">
                      <span>SKU:</span>
                      <span class="sku">KM45VGRT</span>
                    </div>
                    <!-- sku-wrapper -->
                  </div>
                  <!-- product-meta -->

                  <div class="product-ratings">
                    <div class="product-rating">
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 3.00 out of 5"
                      >
                        <span style="width: 60%"
                          >Rated <strong class="rating">3.00</strong> out of 5
                          based on <span class="rating">1</span> customer
                          rating</span
                        >
                      </div>
                      <div class="count-rating">
                        <a
                          href="#reviews"
                          class="woocommerce-review-link"
                          rel="nofollow"
                          ><span class="count">1</span> review</a
                        >
                      </div>
                    </div>
                  </div>

                  <div class="klb-single-stock">
                    <div class="product-stock in-stock">In Stock</div>
                  </div>
                  <div class="product-price">
                    <span class="price"
                      ><del
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >95.00</bdi
                          ></span
                        ></del
                      >
                      <ins
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >65.00</bdi
                          ></span
                        ></ins
                      ></span
                    >
                  </div>
                  <div class="product-stock in-stock">In Stock</div>

                  <div class="product-info">
                    <div class="product-info-top">
                      <form
                        class="cart single-ajax"
                        action="https://klbtheme.com/machic/product/cubitt-smart-watch-ct2s-waterproof-fitness-tracker/"
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <div class="quantity">
                          <label
                            class="screen-reader-text"
                            for="quantity_61f6cbce294fd"
                            >Cubitt Smart Watch CT2S Waterproof Fitness Tracker
                            quantity</label
                          >
                          <div class="quantity-button minus"></div>
                          <input
                            type="text"
                            id="quantity_61f6cbce294fd"
                            class="input-text qty text"
                            step="1"
                            min="1"
                            max="56"
                            name="quantity"
                            value="1"
                            title="Qty"
                            size="4"
                            placeholder=""
                            inputmode="numeric"
                          />
                          <div class="quantity-button plus"></div>
                        </div>

                        <button
                          type="submit"
                          name="add-to-cart"
                          value="408"
                          class="button button-primary add_to_cart_button single_add_to_cart_button button alt"
                        >
                          <span>Add to cart</span>
                        </button>
                        <button
                          type="submit"
                          name="add-to-cart"
                          value="408"
                          class="button button-primary add_to_cart_button single_add_to_cart_button button alt"
                        >
                          <span>Buy Now</span>
                        </button>

                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart"
                          data-product_id="408"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <div class="tinvwl-tooltip">Add to Wishlist</div>
                        </div>
                      </form>

                      <div class="product-actions">
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart"
                          data-product_id="408"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart tinvwl-position-after"
                            data-tinv-wl-product="408"
                          ></a>
                          <div class="tinvwl-tooltip">Add to Wishlist</div>
                        </div>
                        <a
                          href="#"
                          class="woosc-btn woosc-btn-408"
                          data-id="408"
                          >Compare</a
                        >
                      </div>
                    </div>

                    <div class="product-info-bottom">
                      <div class="">
                        <div class="social-share site-social colored mt-0">
                          <ul class="social-container">
                            <li>
                              <a href="" class="facebook" target="_blank"
                                ><i class="klbth-icon-facebook"></i
                              ></a>
                            </li>
                            <li>
                              <a href="" class="twitter" target="_blank"
                                ><i class="klbth-icon-twitter"></i
                              ></a>
                            </li>
                            <li>
                              <a href="" class="youtube" target="_blank"
                                ><i class="klbth-icon-youtube"></i
                              ></a>
                            </li>
                            <li>
                              <a href="" class="instag" target="_blank"
                                ><i class="klbth-icon-instagram"></i
                              ></a>
                            </li>
                            <li>
                              <a href="" class="whatsapp" target="_blank"
                                ><i class="klbth-icon-whatsapp"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="info-message m-4 mt-2">
                        <i
                          class="fa share-icon fa-share"
                          aria-hidden="true"
                        ></i>
                        <strong>Share</strong>
                      </div>
                    </div>
                  </div>
                  <div class="people-have product-message warning">
                    <i class="klbth-icon-shopping-bag-3"></i
                    ><strong>Other people want this. </strong>5 people have this
                    in their carts right now.
                  </div>
                  <div class="product_meta product-categories">
                    <span class="sku_wrapper"
                      >SKU: <span class="sku">KM45VGRT</span></span
                    >

                    <span class="posted_in"
                      >Category:
                      <a
                        href="https://klbtheme.com/machic/product-category/smartwatches/"
                        rel="tag"
                        >Smartwatches</a
                      ></span
                    >
                  </div>
                </div>
                <!-- col -->
              </div>
              <!-- row -->
            </div>
            <!-- quick-product-wrapper -->
          </div>
          <!-- quickview-product -->
        </div>
      </div>
    </div>
  </div>
  <!-- compare model  -->
  <div
    style="display: none"
    :class="showcomparemodal"
    :style="showcomparemodalstyle"
    id="newDiv"
    class="woosc-area woosc-bar-bottom woosc-bar-right woosc-bar-click-outside-yes woosc-hide-checkout woosc-area-open-bar woosc-area-open-table"
    data-bg-color="#292a30"
    data-btn-color="#00a0d2"
    data-count="3"
  >
    <div class="woosc-inner">
      <div
        class="woosc-table woosc-table-open"
        style="background-color: rgb(41, 42, 48)"
      >
        <div class="woosc-table-inner">
          <a
            href="javascript:void(0);"
            id="woosc-table-close"
            class="woosc-table-close hint--left"
            aria-label="Close"
            ><span
              @click="closecomparemodal"
              class="woosc-table-close-icon fa fa-times"
              aria-hidden="true"
              style="padding: 20px"
            ></span
          ></a>
          <div
            class="woosc-table-items woosc-table-items-loaded ps-container ps-theme-wpc ps-active-y"
            style="overflow: auto"
            data-ps-id="d26f5069-dad8-fe4f-e843-16cb75c95a96"
          >
            <table id="woosc_table" class="woosc_table has-3">
              <thead>
                <tr>
                  <th
                    style="
                      background-color: rgb(247, 247, 247);
                      position: relative;
                      z-index: 1;
                      top: 0px;
                      left: 0px;
                    "
                  ></th>
                  <th
                    style="
                      background-color: rgb(247, 247, 247);
                      position: relative;
                      top: 0px;
                    "
                  >
                    <a
                      href="https://klbtheme.com/machic/product/dragon-touch-max10-tablet-android-10-0-os/"
                      draggable="false"
                      >Dragon Touch Max10 Tablet Android 10.0 OS</a
                    >
                  </th>
                  <th
                    style="
                      background-color: rgb(247, 247, 247);
                      position: relative;
                      top: 0px;
                    "
                  >
                    <a
                      href="https://klbtheme.com/machic/product/apple-10-9-inch-ipad-air-wi-fi-cellular-64gb/"
                      draggable="false"
                      >Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB</a
                    >
                  </th>
                  <th
                    style="
                      background-color: rgb(247, 247, 247);
                      position: relative;
                      top: 0px;
                      padding: 15px;
                    "
                  >
                    <a
                      href="https://klbtheme.com/machic/product/apple-iphone-11-64gb-fully-unlocked-yellow/"
                      draggable="false"
                      >Apple iPhone 11 64GB Yellow Fully Unlocked</a
                    >
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="tr-default tr-image">
                  <td
                    class="td-label"
                    style="
                      background-color: white;
                      position: relative;
                      left: 0px;
                    "
                  >
                    Image
                  </td>
                  <td>
                    <a
                      href="https://klbtheme.com/machic/product/dragon-touch-max10-tablet-android-10-0-os/"
                      draggable="false"
                      ><img
                        width="600"
                        height="600"
                        src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-600x600.jpg"
                        class="attachment-woosc-large size-woosc-large"
                        alt=""
                        loading="lazy"
                        draggable="false"
                        srcset="
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-600x600.jpg    600w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-90x90.jpg       90w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-54x54.jpg       54w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-64x64.jpg       64w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-300x300.jpg    300w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-1024x1024.jpg 1024w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-150x150.jpg    150w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-768x768.jpg    768w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-450x450.jpg    450w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-96x96.jpg       96w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6.jpg           1200w
                        "
                        sizes="(max-width: 600px) 100vw, 600px"
                    /></a>
                  </td>
                  <td>
                    <a
                      href="https://klbtheme.com/machic/product/apple-10-9-inch-ipad-air-wi-fi-cellular-64gb/"
                      draggable="false"
                      ><img
                        width="600"
                        height="600"
                        src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-600x600.jpg"
                        class="attachment-woosc-large size-woosc-large"
                        alt=""
                        loading="lazy"
                        draggable="false"
                        srcset="
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-600x600.jpg 600w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-90x90.jpg    90w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-54x54.jpg    54w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-64x64.jpg    64w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-300x300.jpg 300w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-150x150.jpg 150w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-450x450.jpg 450w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg    96w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg         760w
                        "
                        sizes="(max-width: 600px) 100vw, 600px"
                    /></a>
                  </td>
                  <td>
                    <a
                      href="https://klbtheme.com/machic/product/apple-iphone-11-64gb-fully-unlocked-yellow/"
                      draggable="false"
                      ><img
                        width="600"
                        height="600"
                        src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-600x600.jpg"
                        class="attachment-woosc-large size-woosc-large"
                        alt=""
                        loading="lazy"
                        draggable="false"
                        srcset="
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-600x600.jpg    600w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-90x90.jpg       90w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-54x54.jpg       54w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-64x64.jpg       64w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-300x300.jpg    300w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-1024x1024.jpg 1024w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-150x150.jpg    150w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-768x768.jpg    768w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-450x450.jpg    450w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg       96w,
                          https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2.jpg           1200w
                        "
                        sizes="(max-width: 600px) 100vw, 600px"
                    /></a>
                  </td>
                </tr>
                <tr class="tr-default tr-sku">
                  <td
                    class="td-label"
                    style="
                      background-color: rgb(251, 251, 251);
                      position: relative;
                      left: 0px;
                    "
                  >
                    SKU
                  </td>
                  <td>ZR45VGRT</td>
                  <td>BE45VGRT</td>
                  <td>SO4JK74</td>
                </tr>
                <tr class="tr-default tr-rating">
                  <td
                    class="td-label"
                    style="
                      background-color: white;
                      position: relative;
                      left: 0px;
                    "
                  >
                    Rating
                  </td>
                  <td>
                    <div
                      class="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span style="width: 100%"
                        >Rated <strong class="rating">5.00</strong> out of
                        5</span
                      >
                    </div>
                  </td>
                  <td>
                    <div
                      class="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span style="width: 100%"
                        >Rated <strong class="rating">5.00</strong> out of
                        5</span
                      >
                    </div>
                  </td>
                  <td>
                    <div
                      class="star-rating"
                      role="img"
                      aria-label="Rated 4.00 out of 5"
                    >
                      <span style="width: 80%"
                        >Rated <strong class="rating">4.00</strong> out of
                        5</span
                      >
                    </div>
                  </td>
                </tr>
                <tr class="tr-default tr-price">
                  <td
                    class="td-label"
                    style="
                      background-color: rgb(251, 251, 251);
                      position: relative;
                      left: 0px;
                    "
                  >
                    Price
                  </td>
                  <td>
                    <del aria-hidden="true"
                      ><span class="woocommerce-Price-amount amount"
                        ><bdi
                          ><span class="woocommerce-Price-currencySymbol"
                            >$</span
                          >189.99</bdi
                        ></span
                      ></del
                    >
                    <ins
                      ><span class="woocommerce-Price-amount amount"
                        ><bdi
                          ><span class="woocommerce-Price-currencySymbol"
                            >$</span
                          >129.99</bdi
                        ></span
                      ></ins
                    >
                  </td>
                  <td>
                    <del aria-hidden="true"
                      ><span class="woocommerce-Price-amount amount"
                        ><bdi
                          ><span class="woocommerce-Price-currencySymbol"
                            >$</span
                          >699.99</bdi
                        ></span
                      ></del
                    >
                    <ins
                      ><span class="woocommerce-Price-amount amount"
                        ><bdi
                          ><span class="woocommerce-Price-currencySymbol"
                            >$</span
                          >629.99</bdi
                        ></span
                      ></ins
                    >
                  </td>
                  <td>
                    <del aria-hidden="true"
                      ><span class="woocommerce-Price-amount amount"
                        ><bdi
                          ><span class="woocommerce-Price-currencySymbol"
                            >$</span
                          >478.67</bdi
                        ></span
                      ></del
                    >
                    <ins
                      ><span class="woocommerce-Price-amount amount"
                        ><bdi
                          ><span class="woocommerce-Price-currencySymbol"
                            >$</span
                          >438.67</bdi
                        ></span
                      ></ins
                    >
                  </td>
                </tr>
                <tr class="tr-default tr-stock">
                  <td
                    class="td-label"
                    style="
                      background-color: white;
                      position: relative;
                      left: 0px;
                    "
                  >
                    Stock
                  </td>
                  <td>
                    <div class="product-stock in-stock">In Stock</div>
                  </td>
                  <td>
                    <div class="product-stock in-stock">In Stock</div>
                  </td>
                  <td>
                    <div class="product-stock in-stock">In Stock</div>
                  </td>
                </tr>
                <tr class="tr-default tr-availability">
                  <td
                    class="td-label"
                    style="
                      background-color: rgb(251, 251, 251);
                      position: relative;
                      left: 0px;
                    "
                  >
                    Availability
                  </td>
                  <td>In Stock</td>
                  <td>In Stock</td>
                  <td>In Stock</td>
                </tr>
                <tr class="tr-default tr-add_to_cart">
                  <td
                    class="td-label"
                    style="
                      background-color: white;
                      position: relative;
                      left: 0px;
                    "
                  >
                    Add to cart
                  </td>
                  <td>
                    <p class="product woocommerce add_to_cart_inline" style="">
                      <a
                        href=""
                        data-quantity="1"
                        class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="400"
                        data-product_sku="ZR45VGRT"
                        aria-label="Add “Dragon Touch Max10 Tablet Android 10.0 OS” to your cart"
                        rel="nofollow"
                        ><i class="klbth-icon-shop-1"></i> Add to cart</a
                      >
                    </p>
                  </td>
                  <td>
                    <p class="product woocommerce add_to_cart_inline" style="">
                      <a
                        href=""
                        data-quantity="1"
                        class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="521"
                        data-product_sku="BE45VGRT"
                        aria-label="Add “Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB” to your cart"
                        rel="nofollow"
                        ><i class="klbth-icon-shop-1"></i> Add to cart</a
                      >
                    </p>
                  </td>
                  <td>
                    <p class="product woocommerce add_to_cart_inline" style="">
                      <a
                        href=""
                        data-quantity="1"
                        class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="500"
                        data-product_sku="SO4JK74"
                        aria-label="Add “Apple iPhone 11 64GB Yellow Fully Unlocked” to your cart"
                        rel="nofollow"
                        ><i class="klbth-icon-shop-1"></i> Add to cart</a
                      >
                    </p>
                  </td>
                </tr>
                <tr class="tr-default tr-description">
                  <td
                    class="td-label"
                    style="
                      background-color: rgb(251, 251, 251);
                      position: relative;
                      left: 0px;
                    "
                  >
                    Description
                  </td>
                  <td>
                    <ul>
                      <li>3GB RAM</li>
                      <li>10 inch Android Tablets</li>
                      <li>32GB Storage</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li class="SpecHighlights-list-label">
                        Screen Size 10.9 in
                      </li>
                      <li>Operating System Apple iOS</li>
                      <li>Product Length 9.74 in</li>
                    </ul>
                    &nbsp;
                  </td>
                  <td>
                    <ul>
                      <li>Fully Unlocked</li>
                      <li>iPhone 11 Pro Max</li>
                      <li>6.50 in</li>
                    </ul>
                  </td>
                </tr>
                <tr class="tr-default tr-content">
                  <td
                    class="td-label"
                    style="
                      background-color: white;
                      position: relative;
                      left: 0px;
                    "
                  >
                    Content
                  </td>
                  <td>
                    The Aspire 5 is a compact laptop in a thin case with a metal
                    cover, a high-quality Full HD IPS display and a rich set of
                    interfaces. Thanks to its powerful components, the laptop
                    can handle resource-intensive tasks perfectly and is also
                    suitable for most games. Key Features:
                    <ul>
                      <li>slim body with metal cover</li>
                      <li>
                        latest Intel Core i5-1135G7 processor (4 cores / 8
                        threads)
                      </li>
                      <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                      <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
                      <li>backlit keyboard, touchpad with gesture support</li>
                    </ul>
                  </td>
                  <td>
                    The Aspire 5 is a compact laptop in a thin case with a metal
                    cover, a high-quality Full HD IPS display and a rich set of
                    interfaces. Thanks to its powerful components, the laptop
                    can handle resource-intensive tasks perfectly and is also
                    suitable for most games. Key Features:
                    <ul>
                      <li>slim body with metal cover</li>
                      <li>
                        latest Intel Core i5-1135G7 processor (4 cores / 8
                        threads)
                      </li>
                      <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                      <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
                      <li>backlit keyboard, touchpad with gesture support</li>
                    </ul>
                  </td>
                  <td>
                    The Aspire 5 is a compact laptop in a thin case with a metal
                    cover, a high-quality Full HD IPS display and a rich set of
                    interfaces. Thanks to its powerful components, the laptop
                    can handle resource-intensive tasks perfectly and is also
                    suitable for most games. Key Features:
                    <ul>
                      <li>slim body with metal cover</li>
                      <li>
                        latest Intel Core i5-1135G7 processor (4 cores / 8
                        threads)
                      </li>
                      <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                      <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
                      <li>backlit keyboard, touchpad with gesture support</li>
                    </ul>
                  </td>
                </tr>
                <tr class="tr-default tr-weight" style="display: none">
                  <td
                    class="td-label"
                    style="
                      background-color: rgb(251, 251, 251);
                      position: relative;
                      left: 0px;
                    "
                  >
                    Weight
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr class="tr-default tr-dimensions">
                  <td
                    class="td-label"
                    style="
                      background-color: white;
                      position: relative;
                      left: 0px;
                    "
                  >
                    Dimensions
                  </td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr class="tr-default tr-additional" style="display: none">
                  <td
                    class="td-label"
                    style="
                      background-color: rgb(251, 251, 251);
                      position: relative;
                      left: 0px;
                    "
                  >
                    Additional information
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px">
              <div
                class="ps-scrollbar-x"
                tabindex="0"
                style="left: 0px; width: 0px"
              ></div>
            </div>
            <div
              class="ps-scrollbar-y-rail"
              style="top: 0px; height: 756px; right: 1654px"
            >
              <div
                class="ps-scrollbar-y"
                tabindex="0"
                style="top: 0px; height: 446px"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="woosc-bar woosc-bar-open"
        data-count="3"
        style="background-color: rgb(41, 42, 48)"
      >
        <div class="woosc-bar-notice">
          Click outside to hide the compare bar
        </div>
        <a
          onclick="myFunctiontwo()"
          class="woosc-bar-search hint--top"
          aria-label="Add product"
        ></a>
        <div class="woosc-bar-items woosc-bar-items-loaded ui-sortable">
          <div class="woosc-bar-item" data-id="400">
            <span
              class="woosc-bar-item-img hint--top"
              aria-label="Dragon Touch Max10 Tablet Android 10.0 OS"
              ><img
                width="96"
                height="96"
                src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-96x96.jpg"
                class="attachment-woosc-small size-woosc-small"
                alt=""
                loading="lazy"
                srcset="
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-96x96.jpg       96w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-90x90.jpg       90w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-54x54.jpg       54w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-600x600.jpg    600w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-64x64.jpg       64w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-300x300.jpg    300w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-1024x1024.jpg 1024w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-150x150.jpg    150w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-768x768.jpg    768w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-450x450.jpg    450w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6.jpg           1200w
                "
                sizes="(max-width: 96px) 100vw, 96px" /></span
            ><span
              class="woosc-bar-item-remove hint--top"
              aria-label="Remove"
              data-id="400"
            ></span>
          </div>
          <div class="woosc-bar-item" data-id="521">
            <span
              class="woosc-bar-item-img hint--top"
              aria-label="Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB"
              ><img
                width="96"
                height="96"
                src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg"
                class="attachment-woosc-small size-woosc-small"
                alt=""
                loading="lazy"
                srcset="
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg    96w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-90x90.jpg    90w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-54x54.jpg    54w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-600x600.jpg 600w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-64x64.jpg    64w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-300x300.jpg 300w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-150x150.jpg 150w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-450x450.jpg 450w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg         760w
                "
                sizes="(max-width: 96px) 100vw, 96px" /></span
            ><span
              class="woosc-bar-item-remove hint--top"
              aria-label="Remove"
              data-id="521"
            ></span>
          </div>
          <div class="woosc-bar-item" data-id="500">
            <span
              class="woosc-bar-item-img hint--top"
              aria-label="Apple iPhone 11 64GB Yellow Fully Unlocked"
              ><img
                width="96"
                height="96"
                src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg"
                class="attachment-woosc-small size-woosc-small"
                alt=""
                loading="lazy"
                srcset="
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg       96w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-90x90.jpg       90w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-54x54.jpg       54w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-600x600.jpg    600w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-64x64.jpg       64w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-300x300.jpg    300w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-1024x1024.jpg 1024w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-150x150.jpg    150w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-768x768.jpg    768w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-450x450.jpg    450w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2.jpg           1200w
                "
                sizes="(max-width: 96px) 100vw, 96px" /></span
            ><span
              class="woosc-bar-item-remove hint--top"
              aria-label="Remove"
              data-id="500"
            ></span>
          </div>
        </div>
        <div
          class="woosc-bar-btn woosc-bar-btn-text woosc-bar-btn-open"
          style="background-color: rgb(0, 160, 210)"
        >
          <div class="woosc-bar-btn-icon-wrapper">
            <div class="woosc-bar-btn-icon-inner">
              <span></span><span></span><span></span>
            </div>
          </div>
          Compare
        </div>
      </div>
    </div>
  </div>
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

<script>
import.meta.env.VITE_API_KEY;
import axios from "axios";
export default {
  data: () => ({
    showmodal: "",
    url: import.meta.env.VITE_API_URL + "/storage/",
    showmodalstyle: "",
    showbigmodal: "",
    showbigmodalstyle: "",
    showcomparemodal: "",
    showcomparemodalstyle: "",
    results: [],
  }),
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/web/home/topsellers")
      .then((response) => {
        this.results = response.data.data;
        // console.log(this.results);
      })
      .catch((error) => {});
  },
  methods: {
    clickmodal(index) {
      this.showmodal = "show";
      this.showmodalstyle = "display:block";
    },
    closemodal() {
      this.showmodal = "";
      this.showmodalstyle = "";
    },
    clickbigmodal(index) {
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
  },
};
</script>
