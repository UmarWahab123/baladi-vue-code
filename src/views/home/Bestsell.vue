<template>
  <div
    class="
      elementor-element
      elementor-element-13ab871
      elementor-widget
      elementor-widget-machic-product-grid
    "
    data-id="13ab871"
    data-element_type="widget"
    data-widget_type="machic-product-grid.default"
  >
    <div class="elementor-widget-container">
      <div class="site-module products-module">
        <div class="module-header">
          <h4 class="entry-title">Best Sellers</h4>
          <a href="#?orderby=popularity&amp;paged=1" class="btn link"
            >View All <i class="klbth-icon-right-arrow"></i
          ></a>
        </div>
        <div class="module-wrapper">
          <div class="products column-4 mobile-2 total-4">
            <div
              class="product custom-hover"
              :data="item"
              :key="indextr"
              v-for="(item, indextr) in productStore.BestSellerProducts"
            >
              <div class="product-wrapper product-type-1">
                <div class="product-content">
                  <div class="thumbnail-wrapper">
                    <div class="product-badges">
                      <span class="badge onsale">11%</span>
                    </div>
                    <router-link
                      :to="'/' + langCode + '/product-detail' + item.product.id"
                    >
                      <div class="product-card" style="position: relative">
                        <div
                          class="hover-slider-images-toggler"
                          style="position: absolute; inset: 0px; display: flex"
                        >
                          <div
                            class="hover-slider-toggle-pane"
                            data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-15-400x400.jpg"
                            data-hover-slider-i="1"
                            style="flex-grow: 1"
                          ></div>
                          <div
                            class="hover-slider-toggle-pane"
                            data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-2-400x400.jpg"
                            data-hover-slider-i="2"
                            style="flex-grow: 1"
                          ></div>
                          <div
                            class="hover-slider-toggle-pane"
                            data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-3-400x400.jpg"
                            data-hover-slider-i="3"
                            style="flex-grow: 1"
                          ></div>
                          <div
                            class="hover-slider-toggle-pane"
                            data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air3-400x400.jpg"
                            data-hover-slider-i="4"
                            style="flex-grow: 1"
                          ></div>
                          <div
                            class="hover-slider-toggle-pane"
                            data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/air4-400x400.jpg"
                            data-hover-slider-i="5"
                            style="flex-grow: 1"
                          ></div>
                        </div>
                        <div class="hover-slider-indicator">
                          <div
                            data-hover-slider-i="1"
                            class="hover-slider-indicator-dot"
                          ></div>
                          <div
                            data-hover-slider-i="2"
                            class="hover-slider-indicator-dot active"
                          ></div>
                          <div
                            data-hover-slider-i="3"
                            class="hover-slider-indicator-dot"
                          ></div>
                          <div
                            data-hover-slider-i="4"
                            class="hover-slider-indicator-dot"
                          ></div>
                          <div
                            data-hover-slider-i="5"
                            class="hover-slider-indicator-dot"
                          ></div>
                        </div>
                        <div class="product-card">
                          <div id="slidingWindow" ontouchstart="">
                            <div class="slidingSection">
                              <img
                                class="img"
                                src="https://klbtheme.com/machic/wp-content/uploads/2021/09/series1.jpg"
                              />
                              <div class="hover-slider-indicator">
                                <div
                                  data-hover-slider-i="45"
                                  class="hover-slider-indicator-dot active"
                                ></div>
                                <div
                                  data-hover-slider-i="46"
                                  class="hover-slider-indicator-dot"
                                ></div>
                              </div>
                            </div>
                            <div class="slidingSection">
                              <img
                                src="https://klbtheme.com/machic/wp-content/uploads/2021/09/series1.jpgurt-mango 110 g .jpg"
                              />
                              <div class="hover-slider-indicator">
                                <div
                                  data-hover-slider-i="45"
                                  class="hover-slider-indicator-dot"
                                ></div>
                                <div
                                  data-hover-slider-i="46"
                                  class="hover-slider-indicator-dot active"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </router-link>
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
                          :onclick="clickmodal"
                          role="button"
                          tabindex="0"
                          aria-label="Add to Wishlist"
                          class="
                            tinvwl_add_to_wishlist_button
                            d-none
                            tinvwl-icon-heart tinvwl-position-after
                          "
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
                        <a
                          :onclick="clickmodal"
                          v-bind:wishlist_id="item.product.id"
                          href="javascript:void(0)"
                          ><i class="fa fa-heart" aria-hidden="true"></i
                          ><span class="tinvwl_add_to_wishlist-text"
                            >Add to Wishlist</span
                          ></a
                        >

                        <div class="tinv-wishlist-clear"></div>
                        <div class="tinvwl-tooltip">Add to Wishlist</div>
                      </div>
                      <a href="#?featured=yes" class="most-comments"
                        ><img
                          src="https://klbtheme.com/machic/wp-content/themes/machic/assets/images/featured.png"
                          alt="featured" /></a
                      ><a
                        href="javascript::void(0)"
                        class="woosc-btn woosc-btn-521"
                        :onclick="clickcomparemodal"
                        data-id="521"
                        >Compare</a
                      ><span
                        :onclick="clickbigmodal"
                        v-bind:topSeller_id="item.product.slug"
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
                        {{ item.product.review_count
                        }}<span class="rating-text">Ratings</span>
                      </div>
                    </div>
                    <div class="product-price-cart">
                      <span class="price"
                        ><del aria-hidden="true"
                          ><span class="woocommerce-Price-amount amount"
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >{{$t('QAR')}} </span
                              >{{
                                item.product?.uom_products[0]?.previous_price
                              }}</bdi
                            ></span
                          ></del
                        >
                        <ins
                          ><span
                            class="woocommerce-Price-amount amount"
                            style="margin: 4px"
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >{{$t('QAR')}} </span
                              >{{
                                item.product?.uom_products[0]?.regular_price
                              }}</bdi
                            ></span
                          ></ins
                        ></span
                      ><a
                        href="javascript::void(0)"
                        data-quantity="1"
                        class="
                          button
                          product_type_simple
                          add_to_cart_button
                          ajax_add_to_cart
                        "
                        @click="addtoCart(item)"
                        ><i class="klbth-icon-shop-1"></i> Add to cart</a
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
                          class="
                            swiper-container
                            swiper-container-initialized
                            swiper-container-horizontal
                            swiper-container-pointer-events
                            swiper-container-autoheight
                            swiper-container-rtl
                            slider-loaded
                          "
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
                              class="card-carousel"
                              @mouseover="stopTimer"
                              @mouseleave="restartTimer"
                            >
                              <div
                                class="progressbar"
                                v-if="autoSlideInterval && showProgressBar"
                              >
                                <div
                                  :style="{ width: progressBar + '%' }"
                                ></div>
                              </div>
                              <div class="card-img">
                                <img
                                  :src="currentImage"
                                  alt=""
                                  style="
                                    height: 450px !important;
                                    width: 450px !important;
                                  "
                                />
                                <div class="actions">
                                  <span @click="prevImage" class="prev">
                                    &#8249;
                                  </span>
                                  <span @click="nextImage" class="next">
                                    &#8250;
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- swiper-wrapper -->
                        </div>

                        <!-- product-images -->
                      </div>

                      <!-- images-wrapper -->
                      <div class="thumbnails-wrapper">
                        <div
                          id="product-thumbnails"
                          class="
                            swiper-container
                            swiper-container-initialized
                            swiper-container-horizontal
                            swiper-container-pointer-events
                            swiper-container-free-mode
                            swiper-container-rtl
                            swiper-container-thumbs
                            slider-loaded
                          "
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
                            <div class="thumbnails">
                              <div
                                v-for="(image, index) in images"
                                :key="image.id"
                                :class="[
                                  'thumbnail-image',
                                  activeImage == index ? 'active' : '',
                                ]"
                                @click="activateImage(index)"
                              >
                                <img :src="image.thumb" />
                              </div>
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
                    {{ singleProduct.product_name }}
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
                            >{{ sub_products.previous_price }}</bdi
                          ></span
                        ></del
                      >
                      <ins
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >{{ singleProduct.variant_base_price }}</bdi
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
                        action="javascript:void(0)"
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
                          <div
                            class="quantity-button minus"
                            @click="decrement"
                          ></div>
                          <input
                            type="text"
                            id="quantity_61f6cbce294fd"
                            class="input-text qty text"
                            step="1"
                            min="1"
                            max="56"
                            name="quantity"
                            :value="quantity"
                            title="Qty"
                            size="4"
                            placeholder=""
                            inputmode="numeric"
                          />
                          <div
                            class="quantity-button plus"
                            @click="increment"
                          ></div>
                        </div>

                        <button
                          type="submit"
                          name="add-to-cart"
                          @click="
                            cartStore.addMultipleItems(
                              this.singleProduct,
                              this.quantity
                            )
                          "
                          class="
                            button button-primary
                            add_to_cart_button
                            single_add_to_cart_button
                            button
                            alt
                          "
                        >
                          <span>Add to cart</span>
                        </button>
                        <button
                          type="submit"
                          name="add-to-cart"
                          value="408"
                          class="
                            button button-primary
                            add_to_cart_button
                            single_add_to_cart_button
                            button
                            alt
                          "
                        >
                          <span>Buy Now</span>
                        </button>

                        <div
                          class="
                            tinv-wraper
                            woocommerce
                            tinv-wishlist
                            tinvwl-after-add-to-cart
                          "
                          data-product_id="408"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <div class="tinvwl-tooltip">Add to Wishlist</div>
                        </div>
                      </form>

                      <div class="product-actions">
                        <div
                          class="custom-wish-style"
                          :onclick="clickmodal"
                          v-bind:wishlist_id="singleProduct.id"
                        >
                          <a href="javascript:void(0)"
                            ><i class="fa fa-heart" aria-hidden="true"></i
                            ><span class="tinvwl_add_to_wishlist-text"
                              >Add to Wishlist</span
                            ></a
                          >
                          <div
                            class="tinvwl-tooltip-custom"
                            style="margin-left: 7px"
                          >
                            Add to Wishlist
                          </div>
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
    class="
      woosc-area
      woosc-bar-bottom
      woosc-bar-right
      woosc-bar-click-outside-yes
      woosc-hide-checkout
      woosc-area-open-bar
      woosc-area-open-table
    "
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
            class="
              woosc-table-items woosc-table-items-loaded
              ps-container ps-theme-wpc ps-active-y
            "
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
                    <a href="javascript:void(0)" draggable="false"
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
                    <a href="javascript:void(0)" draggable="false"
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
                    <a href="javascript:void(0)"
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
                    <a href="javascript:void(0)" draggable="false"
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
                    <a href="javascript:void(0)" draggable="false"
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
                    <a href="javascript:void(0)" draggable="false"
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
                            >{{$t('QAR')}} </span
                          >189.99</bdi
                        ></span
                      ></del
                    >
                    <ins
                      ><span class="woocommerce-Price-amount amount"
                        ><bdi
                          ><span class="woocommerce-Price-currencySymbol"
                            >{{$t('QAR')}} </span
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
                            >{{$t('QAR')}} </span
                          >699.99</bdi
                        ></span
                      ></del
                    >
                    <ins
                      ><span class="woocommerce-Price-amount amount"
                        ><bdi
                          ><span class="woocommerce-Price-currencySymbol"
                            >{{$t('QAR')}} </span
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
                            >{{$t('QAR')}} </span
                          >478.67</bdi
                        ></span
                      ></del
                    >
                    <ins
                      ><span class="woocommerce-Price-amount amount"
                        ><bdi
                          ><span class="woocommerce-Price-currencySymbol"
                            >{{$t('QAR')}} </span
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
                        class="
                          button
                          product_type_simple
                          add_to_cart_button
                          ajax_add_to_cart
                        "
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
                        class="
                          button
                          product_type_simple
                          add_to_cart_button
                          ajax_add_to_cart
                        "
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
                        class="
                          button
                          product_type_simple
                          add_to_cart_button
                          ajax_add_to_cart
                        "
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
              {{ showmessage }}
            </div>
            <div class="tinvwl-buttons-group tinv-wishlist-clear">
              <button>
                <router-link
                  :to="'/' + langCode + '/wishlist'"
                  class="button tinvwl_button_view tinvwl-btn-onclick"
                >
                  <i class="ftinvwl ftinvwl-heart-o"></i>View
                  Wishlist</router-link
                >
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
import TheLoader from "../Loader/TheLoader.vue";
import axios from "axios";
import.meta.env.VITE_API_KEY;
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useCartStore } from "../../stores/CartStore";

export default {
  components: { TheLoader, Splide, SplideSlide },
  data() {
    return {
      showmessage: "Loading...",
      showmodal: "",
      isloading: true,
      url: "http://baladi-v1.bteamwebs.com/storage/",
      arrivel: [],
      trends: [],
      bestresults: [],
      smartphone: [],
      megadeals: [],
      dealsoftheweek: [],
      showmodalstyle: "",
      showbigmodal: "",
      showbigmodalstyle: "",
      showcomparemodal: "",
      showcomparemodalstyle: "",
      quantity: 1,
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
      wishlist: [],
      langCode: "en",
      token: "",
    };
  },
  computed: {
    // currentImage gets called whenever activeImage changes
    // and is the reason why we don't have to worry about the
    // big image getting updated
    currentImage() {
      this.timeLeft = this.autoSlideInterval;
      console.log(this.images[this.activeImage]);
      return this.images[this.activeImage].thumb;
    },
    progressBar() {
      //Calculate the width of the progressbar
      return 100 - (this.timeLeft / this.autoSlideInterval) * 100;
    },
  },
  mounted() {
    setTimeout(() => (this.isloading = false), 1000);
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/web/product/getcampaign?campaign_name=best-sellers"
      )
      .then((response) => {
        this.bestresults = response.data.data[0].products;
        // console.log(this.bestresults);
        const productStore = useProductStore();
        productStore.BestSellerData(this.bestresults);
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
    addtoCart(item) {
      const cartStore = useCartStore();
      cartStore.addcartapi(item);
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
          this.getWishList();
        })
        .catch((error) => {});

      this.showmodal = "show";
      this.showmodalstyle = "display:block";
    },
    getWishList() {
      if (localStorage.userInfo != null) {
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.token = userInfo.token;
        axios
          .get(
            "http://baladi-v1.bteamwebs.com/api/mobile/product/getWIshlist",
            {
              headers: {
                Authorization: "Bearer " + this.token,
              },
            }
          )
          .then((response) => {
            this.wishlist = response.data.data;
            const productStore = useProductStore();
            productStore.wishListData(this.wishlist);
          })
          .catch((error) => {});
      }
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
            topseller_id
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
  props: ["startingImage", "autoSlideInterval", "showProgressBar"],
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

