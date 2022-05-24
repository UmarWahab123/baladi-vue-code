<template>
  <div class="header-desktop hide-mobile">
    <div class="header-top dark border-disable">
      <div class="container">
        <div class="header-wrapper">
          <div class="column align-center left">
            <nav class="site-menu horizontal">
              <ul id="menu-top-left" class="menu">
                <li
                  id="menu-item-2231"
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-2231
                  "
                >
                  <router-link class="nav-link" to="/aboutus"
                    >About Us
                  </router-link>
                </li>
                <li
                  id="menu-item-2199"
                  class="
                    menu-item
                    menu-item-type-custom
                    menu-item-object-custom
                    menu-item-2199
                  "
                >
                  <router-link to="/category">Featured Products </router-link>
                </li>
                <li
                  id="menu-item-2229"
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-2229
                  "
                >
                  <router-link to="/helpcenter">Help </router-link>
                </li>

                <li
                  id="menu-item-2230"
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-2230
                  "
                >
                  <router-link to="/replacement"
                    >Returns &amp; Replacements</router-link
                  >
                </li>
              </ul>
            </nav>
          </div>
          <!-- column -->

          <div class="column align-center right">
            <nav class="site-menu horizontal">
              <ul id="menu-top-right-1" class="menu">
                <li
                  id="menu-item-2233"
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-2233
                  "
                >
                  <router-link to=""
                    ><i class="klbth-icon-earth-grid-symbol text-success"></i>
                    &nbsp; Location
                  </router-link>
                </li>
                <li
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-2233
                  "
                >
                  <router-link to="/order-tracking"
                    >Order Tracking
                  </router-link>
                </li>

                <li
                  class="
                    menu-item
                    menu-item-type-custom
                    menu-item-object-custom
                    menu-item-has-children
                    menu-item-2176
                  "
                >
                  <span>
                    <div class="switch">
                      <input
                        id="language-toggle"
                        class="check-toggle check-toggle-round-flat"
                        type="checkbox"
                      />
                      <label for="language-toggle"></label>
                      <span class="on">EN</span>
                      <span class="off">AR</span>
                    </div>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          <!-- column -->
        </div>
        <!-- header-wrapper -->
      </div>
      <!-- container -->
    </div>
    <!-- header-top -->

    <div class="header-main height-padding">
      <div class="container">
        <div class="header-wrapper">
          <div class="column align-center left">
            <div class="site-brand">
              <router-link
                to="/"
                title="Machic – Electronics Store eCommerce Theme"
              >
                <img
                  src="http://english-template.bteamwebs.com/src/img/logo-dark.png"
                  alt="Machic2 – Electronics Store eCommerce Theme"
                />
              </router-link>
            </div>
            <!-- site-brand -->
          </div>
          <!-- column -->

          <div class="column align-center right">
            <div class="header-form site-search">
              <div
                class="
                  dgwt-wcas-search-wrapp dgwt-wcas-has-submit
                  woocommerce
                  js-dgwt-wcas-layout-classic
                  dgwt-wcas-layout-classic
                  js-dgwt-wcas-mobile-overlay-enabled
                "
              >
                <form
                  class="dgwt-wcas-search-form"
                  role="search"
                  action="javascript::void(0)"
                  method="get"
                >
                  <div class="dgwt-wcas-sf-wrapp">
                    <label
                      class="screen-reader-text"
                      for="dgwt-wcas-search-input-1"
                      >Products search</label
                    >
                    <input
                      id="dgwt-wcas-search-input-1"
                      type="search"
                      class="dgwt-wcas-search-input"
                      name="s"
                      value=""
                      placeholder="Search for products..."
                      autocomplete="off"
                    />
                    <div
                      class="dgwt-wcas-preloader"
                      style="right: 96.875px"
                    ></div>
                    <button
                      type="submit"
                      aria-label="Search"
                      class="dgwt-wcas-search-submit"
                      @click="searchproducts"
                    >
                      Search
                    </button>
                    <input type="hidden" name="post_type" value="product" />
                    <input type="hidden" name="dgwt_wcas" value="1" />
                  </div>
                </form>
              </div>
            </div>
            <!-- site-search -->

            <div class="header-addons login-button">
              <router-link
                v-if="userdata.name"
                class="primary-text"
                to="/userdashboard"
              >
                <div class="header-addons-icon">
                  <i class="klbth-icon-user-1"></i>
                </div>
              </router-link>
              <router-link v-else class="primary-text" to="/myaccount">
                <div class="header-addons-icon">
                  <i class="klbth-icon-user-1"></i>
                </div>
              </router-link>

              <div class="header-addons-text">
                <router-link
                  v-if="userdata.name"
                  class="primary-text"
                  to="/userdashboard"
                >
                  <div v-if="userdata.name" class="sub-text">
                    {{ userdata.name }}
                  </div>
                </router-link>

                <div v-else class="sub-text">Sign In</div>
                <router-link
                  v-if="userdata.name"
                  class="primary-text"
                  to="/userdashboard"
                >
                  Account
                </router-link>
                <router-link v-else class="primary-text" to="/myaccount"
                  >Account
                </router-link>
              </div>
              <!-- header-addons-text -->
            </div>
            <!-- header-addons -->
            <div class="header-addons cart-button">
              <a href="#cart/">
                <div class="header-addons-icon">
                  <i class="far fa-bell"></i>
                  <div class="button-count cart-count">2</div>
                </div>
                <!-- header-addons-icon -->

                <!-- header-addons-text -->
              </a>
              <div class="cart-dropdown hide">
                <div class="cart-dropdown-wrapper">
                  <div class="fl-mini-cart-content">
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
                          class="swiper-wrapper"
                          id="swiper-wrapper-20bf436108c0df10df"
                          aria-live="polite"
                          style="height: 30vh; overflow: auto"
                        >
                          <div
                            class="swiper-slide swiper-slide-active"
                            role="group"
                            aria-label="1 / 2"
                            style="height: 90px"
                          >
                            <div
                              class="
                                product
                                woocommerce-mini-cart-item
                                mini_cart_item
                              "
                            >
                              <div class="product-wrapper">
                                <div class="product-content">
                                  <div class="thumbnail-wrapper">
                                    <a href="#">
                                      <img
                                        width="90"
                                        height="90"
                                        src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-4.jpg"
                                        class="
                                          attachment-woocommerce_thumbnail
                                          size-woocommerce_thumbnail
                                        "
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <!-- thumbnail-wrapper -->
                                  <div class="content-wrapper">
                                    <h3 class="product-title">
                                      <a href="#">Your Order is placed</a>
                                    </h3>
                                    <div class="small-text-1">
                                      Your Order of cheese product is placed
                                    </div>

                                    <a
                                      href="#"
                                      class="remove remove_from_cart_button"
                                      aria-label="Remove this item"
                                      data-product_id="516"
                                      data-cart_item_key="f3f27a324736617f20abbf2ffd806f6d"
                                      data-product_sku="SR4JK74"
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
                          <div
                            class="swiper-slide swiper-slide-next"
                            role="group"
                            aria-label="2 / 2"
                            style="height: 90px"
                          >
                            <div
                              class="
                                product
                                woocommerce-mini-cart-item
                                mini_cart_item
                              "
                            >
                              <div class="product-wrapper">
                                <div class="product-content">
                                  <div class="thumbnail-wrapper">
                                    <a href="#">
                                      <img
                                        width="90"
                                        height="90"
                                        src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-4.jpg"
                                        class="
                                          attachment-woocommerce_thumbnail
                                          size-woocommerce_thumbnail
                                        "
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <!-- thumbnail-wrapper -->
                                  <div class="content-wrapper">
                                    <h3 class="product-title">
                                      <a href="#">Your Order is placed</a>
                                    </h3>
                                    <div class="small-text-1">
                                      Your Order of cheese product is placed
                                    </div>

                                    <a
                                      href="#"
                                      class="remove remove_from_cart_button"
                                      aria-label="Remove this item"
                                      data-product_id="516"
                                      data-cart_item_key="f3f27a324736617f20abbf2ffd806f6d"
                                      data-product_sku="SR4JK74"
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
                          <div
                            class="swiper-slide swiper-slide-next"
                            role="group"
                            aria-label="2 / 2"
                            style="height: 90px"
                          >
                            <div
                              class="
                                product
                                woocommerce-mini-cart-item
                                mini_cart_item
                              "
                            >
                              <div class="product-wrapper">
                                <div class="product-content">
                                  <div class="thumbnail-wrapper">
                                    <a href="#">
                                      <img
                                        width="90"
                                        height="90"
                                        src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-4.jpg"
                                        class="
                                          attachment-woocommerce_thumbnail
                                          size-woocommerce_thumbnail
                                        "
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <!-- thumbnail-wrapper -->
                                  <div class="content-wrapper">
                                    <h3 class="product-title">
                                      <a href="#">Your Order is placed</a>
                                    </h3>
                                    <div class="small-text-1">
                                      Your Order of cheese product is placed
                                    </div>

                                    <a
                                      href="#"
                                      class="remove remove_from_cart_button"
                                      aria-label="Remove this item"
                                      data-product_id="516"
                                      data-cart_item_key="f3f27a324736617f20abbf2ffd806f6d"
                                      data-product_sku="SR4JK74"
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
                          <div
                            class="swiper-slide swiper-slide-next"
                            role="group"
                            aria-label="2 / 2"
                            style="height: 90px"
                          >
                            <div
                              class="
                                product
                                woocommerce-mini-cart-item
                                mini_cart_item
                              "
                            >
                              <div class="product-wrapper">
                                <div class="product-content">
                                  <div class="thumbnail-wrapper">
                                    <a href="#">
                                      <img
                                        width="90"
                                        height="90"
                                        src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-4.jpg"
                                        class="
                                          attachment-woocommerce_thumbnail
                                          size-woocommerce_thumbnail
                                        "
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <!-- thumbnail-wrapper -->
                                  <div class="content-wrapper">
                                    <h3 class="product-title">
                                      <a href="#">Your Order is placed</a>
                                    </h3>
                                    <div class="small-text-1">
                                      Your Order of cheese product is placed
                                    </div>

                                    <a
                                      href="#"
                                      class="remove remove_from_cart_button"
                                      aria-label="Remove this item"
                                      data-product_id="516"
                                      data-cart_item_key="f3f27a324736617f20abbf2ffd806f6d"
                                      data-product_sku="SR4JK74"
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
                          class="swiper-button-prev swiper-button-disabled"
                          tabindex="-1"
                          role="button"
                          aria-label="Previous slide"
                          aria-controls="swiper-wrapper-20bf436108c0df10df"
                          aria-disabled="true"
                        ></div>
                        <div
                          class="swiper-button-next swiper-button-disabled"
                          tabindex="-1"
                          role="button"
                          aria-label="Next slide"
                          aria-controls="swiper-wrapper-20bf436108c0df10df"
                          aria-disabled="true"
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
                  </div>
                  <div class="cart-noticy">
                    Free Shipping on All Orders Over QAR 75
                  </div>
                  <!-- cart-noticy -->
                </div>
                <!-- cart-dropdown-wrapper -->
              </div>
              <!-- cart-dropdown -->
            </div>

            <div class="header-addons wishlist-button">
              <div class="header-addons-icon">
                <router-link to="/wishlist"
                  ><i class="klbth-icon-heart"></i
                ></router-link>
                <div class="button-count">
                  <a
                    href="#"
                    class="
                      wishlist_products_counter
                      top_wishlist-heart top_wishlist-
                      wishlist-counter-with-products
                    "
                  >
                    <span class="wishlist_products_counter_text"
                      >Wishlist -</span
                    >
                    <span class="wishlist_products_counter_number">1</span>
                  </a>
                </div>
              </div>
              <!-- header-addons-icon -->
            </div>
            <!-- header-addons -->

            <div class="header-addons cart-button">
              <a href="#cart/">
                <div class="header-addons-icon">
                  <i class="klbth-icon-simple-cart"></i>
                  <div class="button-count cart-count">2</div>
                </div>
                <!-- header-addons-icon -->
                <div class="header-addons-text hide-mobile">
                  <div class="sub-text">Total</div>
                  <div class="primary-text cart-subtotal">
                    <span class="woocommerce-Price-amount amount">
                      <bdi
                        ><span class="woocommerce-Price-currencySymbol"
                          >QAR </span
                        >1,218.99</bdi
                      >
                    </span>
                  </div>
                </div>
                <!-- header-addons-text -->
              </a>
              <div class="cart-dropdown hide">
                <div class="cart-dropdown-wrapper">
                  <div class="fl-mini-cart-content">
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
                          class="swiper-wrapper"
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
                            v-for="n in 4"
                          >
                            <div
                              class="
                                product
                                woocommerce-mini-cart-item
                                mini_cart_item
                              "
                            >
                              <div class="product-wrapper">
                                <div class="product-content">
                                  <div class="thumbnail-wrapper">
                                    <a
                                      href="#product/apple-11-inch-ipad-pro-2021-wi-fi-128gb/"
                                    >
                                      <img
                                        width="90"
                                        height="90"
                                        src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg"
                                        class="
                                          attachment-woocommerce_thumbnail
                                          size-woocommerce_thumbnail
                                        "
                                        srcset="
                                          https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg
                                        "
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <!-- thumbnail-wrapper -->
                                  <div class="content-wrapper">
                                    <h3 class="product-title">
                                      <a
                                        href="#product/apple-11-inch-ipad-pro-2021-wi-fi-128gb/"
                                        >Apple 11-inch iPad Pro (2021) Wi-Fi
                                        128GB</a
                                      >
                                    </h3>
                                    <div class="entry-price">
                                      <span class="quantity"
                                        >1 ×
                                        <span
                                          class="
                                            woocommerce-Price-amount
                                            amount
                                          "
                                        >
                                          <bdi
                                            ><span
                                              class="
                                                woocommerce-Price-currencySymbol
                                              "
                                              >QAR </span
                                            >749.00</bdi
                                          >
                                        </span></span
                                      >
                                    </div>
                                    <a
                                      href="#cart/?remove_item=f3f27a324736617f20abbf2ffd806f6d&amp;_wpnonce=acc831cf67"
                                      class="remove remove_from_cart_button"
                                      aria-label="Remove this item"
                                      data-product_id="516"
                                      data-cart_item_key="f3f27a324736617f20abbf2ffd806f6d"
                                      data-product_sku="SR4JK74"
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
                          class="swiper-button-prev swiper-button-disabled"
                          tabindex="-1"
                          role="button"
                          aria-label="Previous slide"
                          aria-controls="swiper-wrapper-20bf436108c0df10df"
                          aria-disabled="true"
                        ></div>
                        <div
                          class="swiper-button-next swiper-button-disabled"
                          tabindex="-1"
                          role="button"
                          aria-label="Next slide"
                          aria-controls="swiper-wrapper-20bf436108c0df10df"
                          aria-disabled="true"
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
                          ><span class="woocommerce-Price-currencySymbol"
                            >QAR </span
                          >1,218.99</bdi
                        >
                      </span>
                    </p>
                    <p class="woocommerce-mini-cart__buttons buttons">
                      <router-link class="button wc-forward" to="/cart"
                        >View cart
                      </router-link>

                      <router-link
                        class="button checkout wc-forward"
                        to="/checkout"
                      >
                        Checkout
                      </router-link>
                    </p>
                  </div>
                  <div class="cart-noticy">
                    Free Shipping on All Orders Over QAR 75
                  </div>
                  <!-- cart-noticy -->
                </div>
                <!-- cart-dropdown-wrapper -->
              </div>
              <!-- cart-dropdown -->
            </div>
            <!-- header-addons -->
          </div>
          <!-- column -->
        </div>
        <!-- header-wrapper -->
      </div>
      <!-- container -->
    </div>
    <!-- header-main -->

    <div class="header-nav">
      <div class="container">
        <div class="header-wrapper">
          <div class="column align-center left">
            <div class="site-departments large">
              <div class="site-departments-wrapper">
                <a href="#" class="all-categories" @click="menuchange">
                  <div class="departments-icon">
                    <i class="klbth-icon-menu"></i>
                  </div>
                  <div class="departments-text">All Departments</div>
                  <div class="departments-arrow">
                    <i class="klbth-icon-nav-arrow-down"></i>
                  </div>
                </a>
                <ul
                  id="menu-sidebar-menu-1"
                  class="departments-menu collapse"
                  :class="showmenu"
                >
                  <li
                    class="
                      menu-item menu-item-type-taxonomy
                      menu-item-object-product_cat
                      menu-item-has-children
                      has-image
                      column-1
                    "
                  >
                    <a href="#">
                      <div class="menu-icon">
                        <img
                          style="padding: 1px"
                          src="@/assets/img/icon/fruits.jpg"
                        />
                      </div>
                      Fresh
                    </a>
                    <ul
                      class="sub-menu"
                      style="
                        background-image: url(/../src/assets/img/category-menu-3.png);
                        width: 580px;
                      "
                    >
                      <div class="container">
                        <div class="row">
                          <div class="col">
                            <li
                              class="
                                menu-item menu-item-type-taxonomy
                                menu-item-object-product_cat
                                menu-item-has-children
                                column-1
                              "
                            >
                              <a href="#">Fresh Products</a>
                              <ul class="sub-menu">
                                <li>
                                  <nav>
                                    <ul class="nav-menu nav-vertical">
                                      <li
                                        class="
                                          menu-item
                                          menu-item
                                          menu-item-type-taxonomy
                                        "
                                      >
                                        <a href="#">Bakery</a>

                                        <ul style="width: 720px !important">
                                          <div class="row">
                                            <div class="col">
                                              <li
                                                class="
                                                  menu-item
                                                  menu-item-type-taxonomy
                                                  menu-item-object-product_cat
                                                  menu-item-has-children
                                                  column-1
                                                "
                                              >
                                                <a href="#">Bread Items</a>
                                                <ul class="sub-menu">
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi brown bread</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi burger bun
                                                      1x6pcs</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi burger bun
                                                      260gz</a
                                                    >
                                                  </li>
                                                  <li class="">
                                                    <a class="link" href="#"
                                                      >shop more<img
                                                        src="@/assets/style/icons/arrow-right-short.svg"
                                                    /></a>
                                                  </li>
                                                </ul>
                                              </li>
                                            </div>
                                            <div class="col">
                                              <li
                                                class="
                                                  menu-item
                                                  menu-item-type-taxonomy
                                                  menu-item-object-product_cat
                                                  menu-item-has-children
                                                  column-1
                                                "
                                              >
                                                <a href="#">Cakes Items</a>
                                                <ul class="sub-menu">
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi heart cake</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi assorted
                                                      pasteries</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi baklava
                                                      pistachio</a
                                                    >
                                                  </li>
                                                  <li>
                                                    <a class="link" href="#"
                                                      >shop more<img
                                                        src="@/assets/style/icons/arrow-right-short.svg"
                                                    /></a>
                                                  </li>
                                                </ul>
                                              </li>
                                            </div>
                                            <div class="col">
                                              <li
                                                class="
                                                  menu-item
                                                  menu-item-type-taxonomy
                                                  menu-item-object-product_cat
                                                  menu-item-has-children
                                                  column-1
                                                "
                                              >
                                                <a href="#"
                                                  >Croissant and fatayer</a
                                                >
                                                <ul class="sub-menu">
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi cheese croissant
                                                    </a>
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi cheese fathayer</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi chicken
                                                      fathayer</a
                                                    >
                                                  </li>
                                                  <li>
                                                    <a class="link" href="#"
                                                      >shop more<img
                                                        src="@/assets/style/icons/arrow-right-short.svg"
                                                    /></a>
                                                  </li>
                                                </ul>
                                              </li>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div class="col">
                                              <li
                                                class="
                                                  menu-item
                                                  menu-item-type-taxonomy
                                                  menu-item-object-product_cat
                                                  menu-item-has-children
                                                  column-1
                                                "
                                              >
                                                <a href="#">Sweets</a>
                                                <ul class="sub-menu">
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi mamoul tamar</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi almond biscuit</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      list-sign
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Baladi baklava daimond
                                                      kg</a
                                                    >
                                                  </li>
                                                  <li>
                                                    <a class="link" href="#"
                                                      >shop more<img
                                                        src="@/assets/style/icons/arrow-right-short.svg"
                                                    /></a>
                                                  </li>
                                                </ul>
                                              </li>
                                            </div>
                                            <!-- <div class="col">
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children column-1">
                                                  <a href="#">Bread Items</a>
                                                  <ul class="sub-menu">
                                                    <li class=" menu-item menu-item-type-taxonomy list-sign"><a
                                                        href="#">Baladi brown bread</a></li>
                                                        <li class=" menu-item menu-item-type-taxonomy list-sign"><a
                                                          href="#">Baladi burger bun 1x6pcs</a></li>
                                                          <li class=" menu-item menu-item-type-taxonomy list-sign"><a
                                                            href="#">Baladi burger bun 260gz</a></li>
    
                                                  </ul>
                                                  </li>
                                              </div>
                                              <div class="col">
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children column-1">
                                                  <a href="#">Bread Items</a>
                                                  <ul class="sub-menu">
                                                    <li class=" menu-item menu-item-type-taxonomy list-sign"><a
                                                        href="#">Baladi brown bread</a></li>
                                                        <li class=" menu-item menu-item-type-taxonomy list-sign"><a
                                                          href="#">Baladi burger bun 1x6pcs</a></li>
                                                          <li class=" menu-item menu-item-type-taxonomy list-sign"><a
                                                            href="#">Baladi burger bun 260gz</a></li>
    
                                                  </ul>
                                                  </li>
                                              </div> -->
                                          </div>
                                        </ul>
                                      </li>
                                      <li class="menu-item">
                                        <a href="#">Diary products & egg</a>
                                        <ul>
                                          <li class="menu-item">
                                            <a href="#">Egg</a>
                                          </li>
                                          <li class="menu-item">
                                            <a href="#">Milk</a>
                                          </li>
                                          <li class="menu-item">
                                            <a href="#">Cakes</a>
                                          </li>
                                          <li class="menu-item">
                                            <a href="#">Sweets</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li class="menu-item">
                                        <a href="#">Sweets</a>
                                        <ul style="top: -96px !important">
                                          <li
                                            class="
                                              menu-item menu-item-type-taxonomy
                                              menu-item-object-product_cat
                                              menu-item-has-children
                                              column-1
                                            "
                                          >
                                            <a href="#">Sweet Items</a>
                                            <ul class="sub-menu">
                                              <li
                                                class="
                                                  menu-item
                                                  menu-item-type-taxonomy
                                                  list-sign
                                                "
                                              >
                                                <a href="#">Cheez</a>
                                                <ul>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      menu-item-object-product_cat
                                                      menu-item-has-children
                                                      column-1
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Milk &amp; Products</a
                                                    >
                                                    <ul class="sub-menu">
                                                      <li
                                                        class="
                                                          menu-item
                                                          menu-item-type-taxonomy
                                                          menu-item-object-product_cat
                                                        "
                                                      >
                                                        <a href="#"
                                                          >HD DVD Players</a
                                                        >
                                                      </li>
                                                      <li
                                                        class="
                                                          menu-item
                                                          menu-item-type-taxonomy
                                                          menu-item-object-product_cat
                                                        "
                                                      >
                                                        <a href="#"
                                                          >Projection Screens</a
                                                        >
                                                      </li>
                                                      <li
                                                        class="
                                                          menu-item
                                                          menu-item-type-taxonomy
                                                          menu-item-object-product_cat
                                                        "
                                                      >
                                                        <a href="#"
                                                          >Projectors</a
                                                        >
                                                      </li>
                                                      <li
                                                        class="
                                                          menu-item
                                                          menu-item-type-taxonomy
                                                          menu-item-object-product_cat
                                                        "
                                                      >
                                                        <a href="#"
                                                          >Television
                                                          Accessories</a
                                                        >
                                                      </li>
                                                      <li
                                                        class="
                                                          menu-item
                                                          menu-item-type-taxonomy
                                                          menu-item-object-product_cat
                                                        "
                                                      >
                                                        <a href="#"
                                                          >Televisions</a
                                                        >
                                                      </li>
                                                      <li
                                                        class="
                                                          menu-item
                                                          menu-item-type-taxonomy
                                                          menu-item-object-product_cat
                                                        "
                                                      >
                                                        <a href="#"
                                                          >TV-DVD Combos</a
                                                        >
                                                      </li>
                                                      <li
                                                        class="
                                                          menu-item
                                                          menu-item-type-taxonomy
                                                          menu-item-object-product_cat
                                                        "
                                                      >
                                                        <a href="#">VCRs</a>
                                                      </li>
                                                      <li
                                                        class="
                                                          menu-item
                                                          menu-item-type-taxonomy
                                                          menu-item-object-product_cat
                                                        "
                                                      >
                                                        <a href="#"
                                                          >Video Glasses</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </li>
                                          <li
                                            class="
                                              menu-item menu-item-type-taxonomy
                                              list-sign
                                            "
                                          >
                                            <a href="#">Bread</a>
                                            <ul>
                                              <li
                                                class="
                                                  menu-item
                                                  menu-item-type-taxonomy
                                                  menu-item-object-product_cat
                                                  menu-item-has-children
                                                  column-1
                                                "
                                              >
                                                <a href="#"
                                                  >Milk &amp; Products</a
                                                >
                                                <ul class="sub-menu">
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      menu-item-object-product_cat
                                                    "
                                                  >
                                                    <a href="#"
                                                      >HD DVD Players</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      menu-item-object-product_cat
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Projection Screens</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      menu-item-object-product_cat
                                                    "
                                                  >
                                                    <a href="#">Projectors</a>
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      menu-item-object-product_cat
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Television Accessories</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      menu-item-object-product_cat
                                                    "
                                                  >
                                                    <a href="#">Televisions</a>
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      menu-item-object-product_cat
                                                    "
                                                  >
                                                    <a href="#"
                                                      >TV-DVD Combos</a
                                                    >
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      menu-item-object-product_cat
                                                    "
                                                  >
                                                    <a href="#">VCRs</a>
                                                  </li>
                                                  <li
                                                    class="
                                                      menu-item
                                                      menu-item-type-taxonomy
                                                      menu-item-object-product_cat
                                                    "
                                                  >
                                                    <a href="#"
                                                      >Video Glasses</a
                                                    >
                                                  </li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </li>
                                          <li class="menu-item">
                                            <a href="#">Cakes</a>
                                            <ul>
                                              <li class="menu-item">
                                                <a href="#">Long life milk</a>
                                              </li>
                                              <li class="menu-item">
                                                <a href="#">Fresh Milk</a>
                                              </li>
                                              <li class="menu-item">
                                                <a href="#">Powder Milk</a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li class="menu-item">
                                            <a href="#"
                                              >Croissant And Fatayer</a
                                            >
                                            <ul>
                                              <li class="menu-item">
                                                <a href="#">Long life milk</a>
                                              </li>
                                              <li class="menu-item">
                                                <a href="#">Fresh Milk</a>
                                              </li>
                                              <li class="menu-item">
                                                <a href="#">Powder Milk</a>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                      <li><a href="#">Fish & seafood</a></li>
                                      <li>
                                        <a href="#">Fruits & Vegitables</a>
                                      </li>
                                      <li><a href="#">Meat & Poultry</a></li>
                                    </ul>
                                  </nav>
                                </li>
                              </ul>
                            </li>
                          </div>
                          <div class="col" style="display: none">Column</div>
                          <div class="col" style="display: none">
                            <li
                              class="
                                menu-item menu-item-type-taxonomy
                                menu-item-object-product_cat
                                menu-item-has-children
                                column-1
                              "
                            >
                              <a href="#product-category/smartwatches/"
                                >Smartwatches</a
                              >
                              <ul class="sub-menu">
                                <li
                                  class="
                                    menu-item menu-item-type-taxonomy
                                    menu-item-object-product_cat
                                  "
                                >
                                  <a href="#">Casio Watches</a>
                                </li>
                                <li
                                  class="
                                    menu-item menu-item-type-taxonomy
                                    menu-item-object-product_cat
                                  "
                                >
                                  <a href="#">Chronograph Watches</a>
                                </li>
                                <li
                                  class="
                                    menu-item menu-item-type-taxonomy
                                    menu-item-object-product_cat
                                  "
                                >
                                  <a href="#">Kids Watches</a>
                                </li>
                                <li
                                  class="
                                    menu-item menu-item-type-taxonomy
                                    menu-item-object-product_cat
                                  "
                                >
                                  <a href="#">Luxury Watches</a>
                                </li>
                                <li
                                  class="
                                    menu-item menu-item-type-taxonomy
                                    menu-item-object-product_cat
                                  "
                                >
                                  <a href="#">Men Watches</a>
                                </li>
                                <li
                                  class="
                                    menu-item menu-item-type-taxonomy
                                    menu-item-object-product_cat
                                  "
                                >
                                  <a href="#">Rolex Watches</a>
                                </li>
                                <li
                                  class="
                                    menu-item menu-item-type-taxonomy
                                    menu-item-object-product_cat
                                  "
                                >
                                  <a href="#">Women Watches</a>
                                </li>
                                <li
                                  class="
                                    menu-item menu-item-type-taxonomy
                                    menu-item-object-product_cat
                                  "
                                >
                                  <a href="#">Watch Brands</a>
                                </li>
                                <li
                                  class="
                                    menu-item menu-item-type-taxonomy
                                    menu-item-object-product_cat
                                  "
                                >
                                  <a href="#">Timex Watches</a>
                                </li>
                                <li
                                  class="
                                    menu-item menu-item-type-taxonomy
                                    menu-item-object-product_cat
                                  "
                                >
                                  <a href="#">Sport Watches</a>
                                </li>
                              </ul>
                            </li>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li
                    class="
                      menu-item menu-item-type-taxonomy
                      menu-item-object-product_cat
                      menu-item-has-children
                      has-image
                      column-1
                    "
                  >
                    <a href="#product-category/computers-accessories/">
                      <div class="menu-icon">
                        <img
                          style="padding: 3px"
                          src="@/assets/img/icon/grocery.jpg"
                        />
                      </div>
                      Groceries &amp; Food
                    </a>
                    <ul
                      class="sub-menu"
                      style="
                        background-image: url('#wp-content/uploads/2021/10/computer-2.png');
                        width: 485px;
                      "
                    >
                      <li
                        class="
                          menu-item menu-item-type-taxonomy
                          menu-item-object-product_cat
                          menu-item-has-children
                          column-1
                        "
                      >
                        <a href="#product-category/computers-accessories/"
                          >Computers &amp; Accessories</a
                        >
                        <ul class="sub-menu">
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/computers-accessories/computer-components/"
                              >Computer Components</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/computers-accessories/computer-accessories/"
                              >Computer Accessories</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/computers-accessories/desktops/"
                              >Desktops</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/computers-accessories/laptops/"
                              >Laptops</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/computers-accessories/monitors/"
                              >Monitors</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/computers-accessories/networking/"
                              >Networking</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/computers-accessories/pc-gaming/"
                              >PC Gaming</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/computers-accessories/tablets/"
                              >Tablets</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li
                    class="
                      menu-item menu-item-type-taxonomy
                      menu-item-object-product_cat
                      menu-item-has-children
                      column-1
                    "
                  >
                    <a href="#product-category/television-video/">
                      <div class="menu-icon">
                        <img
                          style="padding: 0px"
                          src="@/assets/img/icon/beg.jpg"
                        />
                      </div>
                      Groceries Non Food
                    </a>
                    <ul class="sub-menu">
                      <li
                        class="
                          menu-item menu-item-type-taxonomy
                          menu-item-object-product_cat
                          menu-item-has-children
                          column-1
                        "
                      >
                        <a href="#product-category/television-video/"
                          >Television &amp; Video</a
                        >
                        <ul class="sub-menu">
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/television-video/hd-dvd-players/"
                              >HD DVD Players</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/television-video/projection-screens/"
                              >Projection Screens</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/television-video/projectors/"
                              >Projectors</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/television-video/television-accessories/"
                              >Television Accessories</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/television-video/televisions/"
                              >Televisions</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/television-video/tv-dvd-combos/"
                              >TV-DVD Combos</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a href="#product-category/television-video/vcrs/"
                              >VCRs</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/television-video/video-glasses/"
                              >Video Glasses</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li
                    class="
                      menu-item menu-item-type-taxonomy
                      menu-item-object-product_cat
                      menu-item-has-children
                      has-image
                      column-1
                    "
                  >
                    <a href="#product-category/smartwatches/">
                      <div class="menu-icon">
                        <img
                          style="padding: 0px"
                          src="@/assets/img/icon/beauty.png"
                        />
                      </div>
                      Health & Beauty
                    </a>
                    <ul
                      class="sub-menu"
                      style="
                        background-image: url('/../src/assets/img/category-menu-3.png');
                        width: 485px;
                      "
                    >
                      <li
                        class="
                          menu-item menu-item-type-taxonomy
                          menu-item-object-product_cat
                          menu-item-has-children
                          column-1
                        "
                      >
                        <a href="#product-category/smartwatches/"
                          >Smartwatches</a
                        >
                        <ul class="sub-menu">
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a href="#">Casio Watches</a>
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a href="#">Chronograph Watches</a>
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/smartwatches/kids-watches/"
                              >Kids Watches</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/smartwatches/luxury-watches/"
                              >Luxury Watches</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a href="#product-category/smartwatches/men/"
                              >Men Watches</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/smartwatches/rolex-watches/"
                              >Rolex Watches</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/smartwatches/women-watches/"
                              >Women Watches</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/smartwatches/watch-brands/"
                              >Watch Brands</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/smartwatches/timex-watches/"
                              >Timex Watches</a
                            >
                          </li>
                          <li
                            class="
                              menu-item menu-item-type-taxonomy
                              menu-item-object-product_cat
                            "
                          >
                            <a
                              href="#product-category/smartwatches/sport-watches/"
                              >Sport Watches</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li
                    class="
                      menu-item menu-item-type-taxonomy
                      menu-item-object-product_cat
                    "
                  >
                    <a href="#product-category/headphones/">
                      <div class="menu-icon">
                        <img
                          src="@/assets/img/icon/headphones.jpg"
                          alt="camera"
                        />
                      </div>
                      Headphones
                    </a>
                  </li>
                  <li
                    class="
                      menu-item menu-item-type-taxonomy
                      menu-item-object-product_cat
                    "
                  >
                    <a href="#product-category/camera-photo/">
                      <div class="menu-icon">
                        <img src="@/assets/img/icon/camera.jpg" alt="camera" />
                      </div>
                      Camera &amp; Photo
                    </a>
                  </li>
                  <li
                    class="
                      menu-item menu-item-type-taxonomy
                      menu-item-object-product_cat
                    "
                  >
                    <a href="#product-category/video-games/">
                      <div class="menu-icon">
                        <img src="@/assets/img/icon/games.jpg" alt="camera" />
                      </div>
                      Video Games
                    </a>
                  </li>
                  <li
                    class="
                      menu-item menu-item-type-taxonomy
                      menu-item-object-product_cat
                    "
                  >
                    <a href="#product-category/sports-outdoors/">
                      <div class="menu-icon">
                        <img src="@/assets/img/icon/sports.jpg" alt="camera" />
                      </div>
                      Sports &amp; Outdoors
                    </a>
                  </li>
                  <li
                    class="
                      menu-item menu-item-type-custom menu-item-object-custom
                    "
                  >
                    <a href="#?orderby=popularity">
                      <div class="menu-icon">
                        <img src="@/assets/img/icon/graph.jpg" alt="camera" />
                      </div>
                      Best Sellers<span class="label danger">Save %25</span>
                    </a>
                  </li>
                  <li
                    class="
                      menu-item menu-item-type-custom menu-item-object-custom
                    "
                  >
                    <a href="#">
                      <div class="menu-icon">
                        <img
                          src="@/assets/img/icon/discount.jpg"
                          alt="camera"
                        />
                      </div>
                      Top 100 Offers
                    </a>
                  </li>
                  <li
                    class="
                      menu-item menu-item-type-custom menu-item-object-custom
                    "
                  >
                    <a href="#">
                      <div class="menu-icon">
                        <img src="@/assets/img/icon/trolley.jpg" alt="camera" />
                      </div>
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </div>
              <!-- site-departments-wrapper -->
            </div>
            <nav class="site-menu horizontal primary shadow-enable">
              <ul id="menu-menu-2" class="menu">
                <li
                  class="
                    menu-item menu-item-type-custom menu-item-object-custom
                    current-menu-item current_page_item
                    menu-item-home
                    current-menu-ancestor current-menu-parent
                    menu-item-has-children
                  "
                >
                  <router-link to="/all_categories"
                    >Top Categories
                  </router-link>

                  <ul class="sub-menu">
                    <li
                      class="
                        menu-item menu-item-type-custom menu-item-object-custom
                        current-menu-item current_page_item
                        menu-item-home
                      "
                    >
                      <a href="#">Top Electronics</a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page
                      "
                    >
                      <a href="#home-2/">Top Baby Products</a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page
                      "
                    >
                      <a href="index-2.html">Top Personal Care </a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page
                      "
                    >
                      <a href="#home-4/">Top Groceries</a>
                    </li>
                  </ul>
                </li>
                <li
                  class="
                    mega-menu
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-has-children
                  "
                >
                  <router-link to="/brands">Top Brands </router-link>
                  <ul class="sub-menu">
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page menu-item-has-children
                      "
                    >
                      <a href="#">Samsung</a>
                      <ul class="sub-menu">
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Mobiles</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?opt=right-sidebar">Waches</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?column=5&amp;opt=wide">Laptops Pcs</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?column=5&amp;opt=full-width">Headphones</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?shop_view=list_view">Tv And Projectors</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?ft=load-more">Gadgets</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?ft=infinite">Small Appliences</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-product menu-item-has-children
                      "
                    >
                      <a href="">Nestle</a>
                      <ul class="sub-menu">
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                        >
                          <a href="">Nestle Milk</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                        >
                          <a href="#">Nestle Powdered Milk</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                        >
                          <a href="#">Nestle Juices</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                        >
                          <a href="#">Nestle Coffee</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                        >
                          <a href="#">Nestle Water</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-custom
                        menu-item-object-custom
                        menu-item-has-children
                      "
                    >
                      <a href="#">Lays</a>
                      <ul class="sub-menu">
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Lays Dips</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Lays Kettle Cooked </a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Lays Layers</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Lays Poppibles</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Lays Stakes</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Lays wavy</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Lays Varaity Pack </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-custom
                        menu-item-object-custom
                        menu-item-has-children
                      "
                    >
                      <a href="#">Baladi Products</a>
                      <ul class="sub-menu">
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Fruits </a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Vegetables </a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Bakery</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?column=4">Eggs</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?column=4&amp;opt=wide">Milk And Laban</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?column=5&amp;opt=wide"
                            >Fish And See Food</a
                          >
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?column=6&amp;opt=wide">Yughurt</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  class="
                    menu-item menu-item-type-taxonomy
                    menu-item-object-product_cat
                  "
                >
                  <router-link to="category"
                    ><i class="klbth-icon-home"></i> Home And
                    Living</router-link
                  >
                </li>

                <li
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page
                  "
                >
                  <router-link to="/blog">Blogs </router-link>
                </li>
                <li
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page
                  "
                >
                  <router-link to="/contact-us">Contact </router-link>
                </li>
              </ul>
            </nav>
            <!-- site-menu -->
          </div>
          <!-- column -->

          <div class="column align-center right">
            <div class="discount-products">
              <div class="discount-products-wrapper">
                <div class="discount-banner">
                  <div class="discount-banner-icon">
                    <i class="klbth-icon-discount-black"></i>
                  </div>
                  <div class="discount-banner-text">
                    <div class="small-text">Only this weekend</div>
                    <div class="main-text">Super Discount</div>
                  </div>
                  <!-- discount-banner-text -->
                  <div class="discount-banner-arrow">
                    <i class="klbth-icon-nav-arrow-down"></i>
                  </div>
                </div>
                <!-- discount-banner -->
                <div class="discount-items">
                  <div class="discount-products-header">
                    <h4 class="entry-title">Items on sale this week</h4>
                    <p>
                      Top picks this week. Up to 50% off the best selling
                      products.
                    </p>
                  </div>
                  <!-- discount-products-header -->

                  <div class="products column-6">
                    <div class="product" v-for="n in 6">
                      <div class="product-wrapper">
                        <div class="product-content">
                          <div class="thumbnail-wrapper">
                            <a href=""
                              ><img
                                src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg"
                                alt="Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB"
                            /></a>
                          </div>
                          <!-- thumbnail-wrapper -->
                          <div class="content-wrapper">
                            <h3 class="product-title">
                              <a href=""
                                >Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB</a
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
                            <span class="price"
                              ><del aria-hidden="true"
                                ><span class="woocommerce-Price-amount amount">
                                  <bdi
                                    ><span
                                      class="woocommerce-Price-currencySymbol"
                                      >QAR </span
                                    >9.00</bdi
                                  >
                                </span></del
                              >
                              <ins
                                ><span class="woocommerce-Price-amount amount">
                                  <bdi
                                    ><span
                                      class="woocommerce-Price-currencySymbol"
                                      >QAR </span
                                    >4.00</bdi
                                  >
                                </span></ins
                              ></span
                            ><!-- price -->
                            <div class="product-meta">
                              <div class="product-message color-light">
                                <!-- 2-day Delivery -->
                              </div>
                            </div>
                            <!-- product-meta -->
                          </div>
                          <!-- content-wrapper -->
                        </div>
                        <!-- product-content -->
                      </div>
                    </div>
                  </div>
                </div>
                <!-- discount-items -->
              </div>
              <!-- discount-products-wrapper -->
            </div>
            <!-- discount-products -->
          </div>
          <!-- column -->
        </div>
        <!-- header-wrapper -->
      </div>
      <!-- container -->
    </div>
    <!-- header-nav -->
  </div>
</template>

<script>
export default {
  data: () => ({
    userdata: { name: "" },
    id: "",
    showmenu: "",
    results: [],
    overflow: "",
  }),
  mounted() {
    if (localStorage.userInfo != null) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.userdata.name = userInfo.name;
    }
    if (this.$route.name == "Home") {
      this.showmenu = "show";
    }
  },
  methods: {
    menuchange: function (event) {
      if (this.showmenu == "show") {
        this.showmenu = "";
      } else {
        this.showmenu = "show";
      }
    },
    searchproducts: function (event) {
      this.$router.push("category");
    },
  },
};
</script>
