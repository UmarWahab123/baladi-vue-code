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
                  <router-link
                    class="nav-link"
                    :to="'/' + langCode + '/aboutus'"
                    >{{ $t("about_us") }}
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
                  <router-link :to="'/' + langCode + '/category'"
                    >{{ $t("feature_product") }}
                  </router-link>
                </li>
                <li
                  id="menu-item-2229"
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-2229
                  "
                >
                  <router-link :to="'/' + langCode + '/helpcenter'"
                    >{{ $t("help") }}
                  </router-link>
                </li>

                <li
                  id="menu-item-2230"
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-2230
                  "
                >
                  <router-link :to="'/' + langCode + '/replacement'">{{
                    $t("returns_replacements")
                  }}</router-link>
                </li>
              </ul>
            </nav>
          </div>
          <!-- column -->

          <div class="column align-center right lang-bttons">
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
                    &nbsp; {{ $t("location_job") }}
                  </router-link>
                </li>
                <li
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-2233
                  "
                >
                  <router-link :to="'/' + langCode + '/order-tracking'"
                    >{{ $t("orders_tracking") }}
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
                    <div class="switch" @change="changeLang($event)">
                      <input
                        id="language-toggle"
                        class="check-toggle check-toggle-round-flat"
                        type="checkbox"
                        v-model="isChecked"
                      />
                      <label for="language-toggle"></label>
                      <span class="on" data-value="en">EN</span>
                      <span class="off" data-value="en">AR</span>
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
                :to="'/' + langCode"
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
                  dgwt-wcas-search-filled dgwt-wcas-active
                  pre-suggestions
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
                      :placeholder="$t('serach_product') + '...'"
                      autocomplete="off"
                      @keyup="onchangesearch($event)"
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
                      {{ $t("search") }}
                    </button>
                    <input type="hidden" name="post_type" value="product" />
                    <input type="hidden" name="dgwt_wcas" value="1" />
                  </div>
                </form>
              
              </div>
            </div>
       
            <div
              class="
                dgwt-wcas-suggestions-wrapp
                woocommerce
                dgwt-wcas-has-img dgwt-wcas-has-price dgwt-wcas-has-headings
                js-dgwt-wcas-initialized
              "
              unselectable="on"
              style="
                position: absolute;
                max-height: 600px;
                z-index: 999999999;
                width: 700.047px;
                top: 70px;
                left: 165.5px;
                display: none;
              "
            >
            <a href="javascript::void(0)"
                class="dgwt-wcas-suggestion dgwt-wcas-suggestion-product"
                data-index="0"
                data-post-id="521"
                 v-if="resultsnotfound"
                >
                <div class="dgwt-wcas-content-wrapp">
                  <div class="dgwt-wcas-st">
                    <span class="dgwt-wcas-st-title d-flex justify-content-center">
                      <strong
                        > {{$t('No_Data_found')}}</strong
                      ></span
                    >
                  </div>
            
                </div></a
              >
              <a
                href="javascript::void(0)"
                class="dgwt-wcas-suggestion dgwt-wcas-suggestion-product"
                data-index="0"
                data-post-id="521"
                v-for="(searchItem, index) in searchResults"
                ><span class="dgwt-wcas-si"
                  ><img
                    src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-64x64.jpg"
                    alt="Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB"
                  />
                </span>
                <div class="dgwt-wcas-content-wrapp">
                  <div class="dgwt-wcas-st">
                    <span class="dgwt-wcas-st-title">
                      <strong
                        ><router-link
                          :to="
                            '/' +
                            langCode +
                            '/product-detail/' +
                            searchItem.slug
                          "
                          >{{ searchItem.product_name }}</router-link
                        ></strong
                      ></span
                    >
                  </div>
                  <div class="dgwt-wcas-meta">
                    <span class="dgwt-wcas-sp"
                      ><del aria-hidden="true"
                        ><span class="woocommerce-Price-amount amount">
                          <bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >{{
                              searchItem?.uom_products[0]?.previous_price
                            }}</bdi
                          ></span
                        ></del
                      >
                      <ins
                        ><span class="woocommerce-Price-amount amount">
                          <bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >{{ searchItem.variant_base_price }}</bdi
                          ></span
                        ></ins
                      ></span
                    >
                  </div>
                </div></a
              >
            </div>
            <!-- site-search -->

            <div class="header-addons login-button user-icons-style">
              <router-link
                v-if="userdata.name"
                class="primary-text"
                :to="'/' + langCode + '/userdashboard'"
              >
                <div class="header-addons-icon">
                  <i class="klbth-icon-user-1"></i>
                </div>
              </router-link>
              <router-link
                v-else
                class="primary-text"
                :to="'/' + langCode + '/myaccount'"
              >
                <div class="header-addons-icon">
                  <i class="klbth-icon-user-1"></i>
                </div>
              </router-link>

              <div class="header-addons-text">
                <router-link
                  v-if="userdata.name"
                  class="primary-text"
                  :to="'/' + langCode + '/userdashboard'"
                >
                  <div v-if="userdata.name" class="sub-text user-text-style">
                    {{ userdata.name }}
                  </div>
                </router-link>

                <div v-else class="sub-text user-text-style">{{$t('Sign_In')}}</div>
                <router-link
                  v-if="userdata.name"
                  class="primary-text"
                  :to="'/' + langCode + '/userdashboard'"
                >
                  {{ $t("Account") }}
                </router-link>
                <router-link
                  v-else
                  class="primary-text"
                  :to="'/' + langCode + '/myaccount'"
                >
                  {{ $t("Account") }}
                </router-link>
              </div>
              <!-- header-addons-text -->
            </div>
            <!-- header-addons -->
            <div class="header-addons cart-button custom-margin-style">
              <router-link :to="'/' + langCode + '/cart'">
                <div class="header-addons-icon heart-style-custom">
                  <i class="far fa-bell"></i>
                  <div class="button-count cart-count">
                    {{ cartStore.count }}
                  </div>
                </div>
                <!-- header-addons-icon -->

                <!-- header-addons-text -->
              </router-link>
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
                          class="swiper-wrapper sidebar-sticky"
                          id="swiper-wrapper-20bf436108c0df10df "
                          aria-live="polite"
                          style="height: 30vh; overflow: auto"
                        >
                          <div
                            class="swiper-slide swiper-slide-active textBody"
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
                          class="swiper-button-prev"
                          tabindex="-1"
                          role="button"
                          aria-label="Previous slide"
                          aria-controls="swiper-wrapper-20bf436108c0df10df"
                          aria-disabled="true"
                          @click="down"
                        ></div>
                        <div
                          class="swiper-button-next"
                          tabindex="-1"
                          role="button"
                          aria-label="Next slide"
                          aria-controls="swiper-wrapper-20bf436108c0df10df"
                          aria-disabled="true"
                          @click="up"
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

                  <!-- cart-noticy -->
                </div>
                <!-- cart-dropdown-wrapper -->
              </div>
              <!-- cart-dropdown -->
            </div>

            <div class="header-addons wishlist-button">
              <div class="header-addons-icon heart-style-custom">
                <router-link :to="'/' + langCode + '/wishlist'"
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
                    <span class="wishlist_products_counter_number">{{
                      productStore.wishlistcount
                    }}</span>
                  </a>
                </div>
              </div>
              <!-- header-addons-icon -->
            </div>
            <!-- header-addons -->

            <GuestCart v-if="guestCheck" />
            <LoginCart v-if="loginCheck" />

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
                  <div class="departments-text">{{ $t("language") }}</div>
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
                    :data="item"
                    :key="indextr"
                    v-for="(item, indextr) in results?.slice(0, 11)"
                  >
                    <a href="#">
                      <div class="menu-icon">
                        <img
                          style="padding: 1px"
                          :src="
                            'http://baladi-v1.bteamwebs.com/storage/' +
                            item.photo
                          "
                        />
                      </div>
                      {{ item.name }}
                    </a>
                    <ul
                      class="sub-menu"
                      :style="{
                        'background-image': `url( http://baladi-v1.bteamwebs.com/storage/${item.photo})`,
                        width: '580px',
                      }"
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
                                        :data="items"
                                        :key="indextr"
                                        v-for="(
                                          items, indextr
                                        ) in item.sub_categories?.slice(0, 10)"
                                      >
                                        <router-link
                                          :to="
                                            '/' +
                                            langCode +
                                            '/category/' +
                                            items.id
                                          "
                                          >{{ items.name }}</router-link
                                        >

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
                                                    :data="subitems"
                                                    :key="indextr"
                                                    v-for="(
                                                      subitems, indextr
                                                    ) in items.sub_categories"
                                                  >
                                                    <router-link
                                                      :dataid="subitems.id"
                                                      :to="
                                                        '/' +
                                                        langCode +
                                                        '/category/' +
                                                        subitems.id
                                                      "
                                                      >{{
                                                        subitems.name
                                                      }}</router-link
                                                    >
                                                  </li>
                                                </ul>
                                              </li>
                                            </div>
                                          </div>
                                        </ul>
                                      </li>
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
                  <router-link :to="'/' + langCode + '/all_categories'"
                    >{{ $t("top_category") }}
                  </router-link>

                  <ul class="sub-menu">
                    <li
                      class="
                        menu-item menu-item-type-custom menu-item-object-custom
                        current-menu-item current_page_item
                        menu-item-home
                      "
                    :data="item"
                    :key="indextr"
                    v-for="(item, indextr) in topcategory"
                    >
                    <router-link :to="'/' + langCode + '/category/'+ item?.id"
                    >{{item.name}}</router-link>
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
                  <router-link :to="'/' + langCode + '/brands'"
                    >{{ $t("top_brands") }}
                  </router-link>
                  <ul class="sub-menu">
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page menu-item-has-children
                      "
                    >
                      <ul class="sub-menu">
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                    :data="item"
                    :key="indextr"
                    v-for="(item, indextr) in brands?.slice(0, 3)
                        ">
                         <router-link
                              class=""
                              :to="'/' + langCode + '/brandsProduct/' + item?.id"
                              >{{item.name}}
                            </router-link>
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
                      <ul class="sub-menu">
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                           :data="item"
                           :key="indextr"
                           v-for="(item, indextr) in brands?.slice(4, 7)"
                        >
                        <router-link
                              class=""
                              :to="'/' + langCode + '/brandsProduct/' + item?.id"
                              >{{item?.name}}
                        </router-link>
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
                      <ul class="sub-menu">
                       <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                          :data="item"
                           :key="indextr"
                           v-for="(item, indextr) in brands?.slice(8, 11)"
                        >
                         <router-link
                              class=""
                              :to="'/' + langCode + '/brandsProduct/' + item?.id"
                              >{{item?.name}}
                        </router-link>
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
                      <ul class="sub-menu">
                      <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                          :data="item"
                           :key="indextr"
                           v-for="(item, indextr) in brands?.slice(11, 15)"
                        >
                        <router-link
                              class=""
                              :to="'/' + langCode + '/brandsProduct/' + item?.id"
                              >{{item?.name}}
                        </router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page
                  "
                >
                  <router-link :to="'/' + langCode + '/blog'"
                    >{{ $t("blogs") }}
                  </router-link>
                </li>
                <li
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page
                  "
                >
                  <router-link :to="'/' + langCode + '/contact-us'"
                    >{{ $t("Contact") }}
                  </router-link>
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
                    <div class="small-text">{{ $t("this_weeK") }}</div>
                    <div class="main-text">{{ $t("Super_discount") }}</div>
                  </div>
                  <!-- discount-banner-text -->
                  <div class="discount-banner-arrow">
                    <i class="klbth-icon-nav-arrow-down"></i>
                  </div>
                </div>
                <!-- discount-banner -->
                <div class="discount-items">
                  <div class="discount-products-header">
                    <h4 class="entry-title">
                      {{ $t("Items_on_sale_this_week") }}
                    </h4>
                    <p>
                      {{ $t("Top_the_best_selling_products") }}
                    </p>
                  </div>
                  <!-- discount-products-header -->

                  <div class="products column-6">
                    <div class="product"
                      :data="item"
                      :key="indextr"
                      v-for="(item, indextr) in dicount">
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
                                >{{item.product.product_name}}</a
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
                                 {{ item.product.review_count }} <span class="rating-text">Ratings</span>
                              </div>
                            </div>
                            <span class="price"
                              ><del aria-hidden="true"
                                ><span class="woocommerce-Price-amount amount">
                                  <bdi
                                    ><span
                                      class="woocommerce-Price-currencySymbol"
                                      >QAR </span
                                    >{{
                                      item.product?.uom_products[0]
                                        ?.previous_price
                                    }}</bdi
                                  >
                                </span></del
                              >
                              <ins
                                ><span class="woocommerce-Price-amount amount">
                                  <bdi
                                    ><span
                                      class="woocommerce-Price-currencySymbol"
                                      >QAR </span
                                    >{{
                                      item.product?.uom_products[0]
                                        ?.regular_price
                                    }}</bdi
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
<script setup >
import GuestCart from "./GuestCart.vue";
import LoginCart from "./LoginCart.vue";
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
    url: "http://baladi-v1.bteamwebs.com/storage/",
    showmenu: "",
    results: [],
    overflow: "",
    notificationheight: 0,
    isChecked: false,
    langCode: "en",
    searchResults: [],
    dicount:[],
    guestCheck: true,
    loginCheck: false,
    resultsnotfound:false,
    topcategory: [],
    brands:[],
    
  }),
  mounted() {

    if (localStorage.userInfo != null) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.guestCheck = false;
      this.loginCheck = true;

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
     axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/web/product/getcampaign?campaign_name=super_discount" 
      )
      .then((response) => {
        this.dicount = response.data.data[0].products;
        console.log("discount data", this.dicount);
      })
      .catch((error) => {});
    this.langCode = lang;
 
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/web/header/categories?locale=" +
          this.langCode
      )
      .then((response) => {
        this.results = response.data.data.data;
      })
      .catch((error) => {});
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/web/header/topCategories?locale=" +
          lang
      )
      .then((response) => {
        this.topcategory = response.data.data;
        // console.log('hsdg',this.topcategory);
       
      })
      .catch((error) => {});
     var langCode = localStorage.getItem("lang");
    axios
      .get("http://baladiweb.bteamwebs.com/api/web/header/getBrands?locale=" +
          langCode)
      .then((response) => {
        this.brands = response.data.data;
        this.brands = this.split(this.brands,4);
        // console.log('splitedbrands',this.brands);
      })
      .catch((error) => {});
   
    this.getWishList();
    
  },
  methods: {
  split (array, cols) {
    if (cols==1) return array;
    var size = Math.ceil(array.length / cols);
    return array.slice(0, size).concat([null]).concat(this.split(array.slice(size), cols-1));
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
            this.results = response.data.data;
            const productStore = useProductStore();
            productStore.wishListData(this.results);
            console.log(this.results);
          })
          .catch((error) => {});
      }
    },
    menuchange: function (event) {
      if (this.showmenu == "show") {
        this.showmenu = "";
      } else {
        this.showmenu = "show";
      }
    },
    
    searchproducts: function (event) {
     var langCode = localStorage.getItem("lang");
      this.$router.push('/'+langCode+'/category');
    },
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
    changeLang: function (event) {
      if (event.target.checked) {
        this.isChecked = true;
        localStorage.setItem("lang", "ar");

        window.location.reload();
      } else {
        this.isChecked = false;
        localStorage.setItem("lang", "en");
        window.location.reload();
      }
    },

    onchangesearch: function (event) {
      if (event.target.value) {
        const inputsearch = event.target.value;
        const payload = {
          category_id: "",
          search: inputsearch,
          locale: "en",
          price: "",
          compaign_id: "",
        };
        // console.log(payload);
        var preloader = document.querySelector(".dgwt-wcas-preloader");
        var search = document.querySelector(".pre-suggestions");
        var searchsugget = document.querySelector(".js-dgwt-wcas-initialized");
        preloader.style = "dgwt-wcas-close";
        search.style = "dgwt-wcas-search-filled";
        searchsugget.style.display = "block";
        axios
          .post(
            "http://baladi-v1.bteamwebs.com/api/mobile/product/searchProducts",
            payload
          )
          .then((response) => {
          this.searchResults = response.data.data.searchresults;
          if(response.data.data.searchresults==""){
          this.resultsnotfound = true;
          }else{
          this.resultsnotfound = false;

          }
            // this.searchResults.map((item) => {
            //   console.log("map", item);
            // });
            console.log("Search", this.searchResults);
          })
          .catch((error) => {});
        // window.location.reload();
      } else {
        this.resultsnotfound = false;
        var preloader = document.querySelector(".dgwt-wcas-preloader");
        var search = document.querySelector(".pre-suggestions");
        var searchsugget = document.querySelector(".js-dgwt-wcas-initialized");
        preloader.style = "dgwt-wcas-close";
        search.style = "dgwt-wcas-search-filled";
        searchsugget.style.display = "none";
      }
    },
  },
};
</script>
