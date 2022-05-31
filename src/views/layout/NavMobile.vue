<template>
  <aside class="site-offcanvas" :class="showmenu">
    <div class="site-scroll ps ps--active-y">
      <div class="site-offcanvas-row site-offcanvas-header">
        <div class="column left">
          <div class="site-brand">
            <router-link
              :to="'/' + langCode"
              title="Machic – Electronics Store eCommerce Theme"
            >
              <img
                src="http://english-template.bteamwebs.com/src/img/logo-dark.png"
                alt="Machic – Electronics Store eCommerce Theme"
              />
            </router-link>
          </div>
          <!-- site-brand -->
        </div>
        <!-- column -->
        <div class="column right">
          <div class="site-offcanvas-close" @click="menuchange">
            <i class="klbth-icon-cancel"></i>
          </div>
          <!-- site-offcanvas-close -->
        </div>
        <!-- column -->
      </div>
      <!-- site-offcanvas-header -->
      <div class="site-offcanvas-row site-offcanvas-body">
        <div
          class="offcanvas-menu-container klb-menu"
          style="height: 1019px; transition-duration: 350ms"
        >
          <div
            class="offcanvas-menu-wrapper klb-menu-wrapper"
            style="transition-duration: 350ms"
          >
            <nav class="site-menu vertical categories">
              <a href="#" class="all-categories">
                <div class="departments-icon">
                  <i class="klbth-icon-menu"></i>
                </div>
                <div class="departments-text">All Departments</div>
                <div class="departments-arrow">
                  <i class="klbth-icon-nav-arrow-down"></i>
                </div>
              </a>
              <ul id="menu-sidebar-menu" class="menu departments-menu collapse">
                <li
                  id="menu-item-2121 menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-2122"
                >
                  <img
                    class="strawbarry-icon"
                    src="@/assets/img/icon/strwbarry.png"
                  /><a class="next" href="#">Fresh</a>
                  <ul class="sub-menu">
                    <li
                      id="menu-item-2129"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2129
                      "
                    >
                      <a href="#">Phone Accessories</a>
                    </li>
                    <li
                      id="menu-item-2130"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2130
                      "
                    >
                      <a href="#">Phone Cases</a>
                    </li>
                    <li
                      id="menu-item-2131"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2131
                      "
                    >
                      <a href="#">Postpaid Phones</a>
                    </li>
                    <li
                      id="menu-item-2137"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2137
                      "
                    >
                      <a href="#">Unlocked Phones</a>
                    </li>
                    <li
                      id="menu-item-2132"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2132
                      "
                    >
                      <a href="#">Prepaid Phones</a>
                    </li>
                    <li
                      id="menu-item-2133"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2133
                      "
                    >
                      <a href="#">Prepaid Plans</a>
                    </li>
                    <li
                      id="menu-item-2134"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2134
                      "
                    >
                      <a href="#">Refurbished Phones</a>
                    </li>
                    <li
                      id="menu-item-2136"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2136
                      "
                    >
                      <a href="#">Straight Talk</a>
                    </li>
                    <li
                      id="menu-item-2128"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2128
                      "
                    >
                      <a href="#">iPhone</a>
                    </li>
                    <li
                      id="menu-item-2135"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2135
                      "
                    >
                      <a href="#">Samsung Galaxy</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-2122"
                  class="
                    klbth-icon-laptop
                    menu-item menu-item-type-taxonomy
                    menu-item-object-product_cat
                    menu-item-has-children menu-item-2122
                  "
                >
                  <a href="#" class="next-link">Computers &amp; Accessories</a>
                  <ul class="sub-menu">
                    <li class="menu-header">
                      <a class="back" href="#">Computers &amp; Accessories</a>
                    </li>

                    <li
                      id="menu-item-2142"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2142
                      "
                    >
                      <a href="#">Computer Components</a>
                    </li>
                    <li
                      id="menu-item-2141"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2141
                      "
                    >
                      <a href="#">Computer Accessories</a>
                    </li>
                    <li
                      id="menu-item-2143"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2143
                      "
                    >
                      <a href="#">Desktops</a>
                    </li>
                    <li
                      id="menu-item-2144"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2144
                      "
                    >
                      <a href="#">Laptops</a>
                    </li>
                    <li
                      id="menu-item-2145"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2145
                      "
                    >
                      <a href="#">Monitors</a>
                    </li>
                    <li
                      id="menu-item-2146"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2146
                      "
                    >
                      <a href="#">Networking</a>
                    </li>
                    <li
                      id="menu-item-2147"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2147
                      "
                    >
                      <a href="#">PC Gaming</a>
                    </li>
                    <li
                      id="menu-item-2148"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2148
                      "
                    >
                      <a href="#">Tablets</a>
                    </li>
                  </ul>

                  <a class="next" href="#"></a>
                </li>
                <li
                  id="menu-item-2125"
                  class="
                    klbth-icon-screen
                    menu-item menu-item-type-taxonomy
                    menu-item-object-product_cat
                    menu-item-has-children menu-item-2125
                  "
                >
                  <a href="#" class="next-link">Television &amp; Video</a>
                  <ul class="sub-menu">
                    <li class="menu-header">
                      <a class="back" href="#">Television &amp; Video</a>
                    </li>

                    <li
                      id="menu-item-2149"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2149
                      "
                    >
                      <a href="#">HD DVD Players</a>
                    </li>
                    <li
                      id="menu-item-2150"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2150
                      "
                    >
                      <a href="#">Projection Screens</a>
                    </li>
                    <li
                      id="menu-item-2151"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2151
                      "
                    >
                      <a href="#">Projectors</a>
                    </li>
                    <li
                      id="menu-item-2152"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2152
                      "
                    >
                      <a href="#">Television Accessories</a>
                    </li>
                    <li
                      id="menu-item-2153"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2153
                      "
                    >
                      <a href="#">Televisions</a>
                    </li>
                    <li
                      id="menu-item-2154"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2154
                      "
                    >
                      <a href="#">TV-DVD Combos</a>
                    </li>
                    <li
                      id="menu-item-2155"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2155
                      "
                    >
                      <a href="#">VCRs</a>
                    </li>
                    <li
                      id="menu-item-2156"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2156
                      "
                    >
                      <a href="#">Video Glasses</a>
                    </li>
                  </ul>

                  <a class="next" href="#"></a>
                </li>
                <li
                  id="menu-item-2124"
                  class="
                    klbth-icon-smartwatch
                    menu-item menu-item-type-taxonomy
                    menu-item-object-product_cat
                    menu-item-has-children menu-item-2124
                  "
                >
                  <a href="#" class="next-link">Smartwatches</a>
                  <ul class="sub-menu">
                    <li class="menu-header">
                      <a class="back" href="#">Smartwatches</a>
                    </li>

                    <li
                      id="menu-item-2160"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2160
                      "
                    >
                      <a href="#">Casio Watches</a>
                    </li>
                    <li
                      id="menu-item-2161"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2161
                      "
                    >
                      <a href="#">Chronograph Watches</a>
                    </li>
                    <li
                      id="menu-item-2162"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2162
                      "
                    >
                      <a href="#">Kids Watches</a>
                    </li>
                    <li
                      id="menu-item-2163"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2163
                      "
                    >
                      <a href="#">Luxury Watches</a>
                    </li>
                    <li
                      id="menu-item-2164"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2164
                      "
                    >
                      <a href="#">Men Watches</a>
                    </li>
                    <li
                      id="menu-item-2165"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2165
                      "
                    >
                      <a href="#">Rolex Watches</a>
                    </li>
                    <li
                      id="menu-item-2169"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2169
                      "
                    >
                      <a href="#">Women Watches</a>
                    </li>
                    <li
                      id="menu-item-2168"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2168
                      "
                    >
                      <a href="#">Watch Brands</a>
                    </li>
                    <li
                      id="menu-item-2167"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2167
                      "
                    >
                      <a href="#">Timex Watches</a>
                    </li>
                    <li
                      id="menu-item-2166"
                      class="
                        menu-item menu-item-type-taxonomy
                        menu-item-object-product_cat
                        menu-item-2166
                      "
                    >
                      <a href="#">Sport Watches</a>
                    </li>
                  </ul>

                  <a class="next" href="#"></a>
                </li>
                <li
                  id="menu-item-2123"
                  class="
                    klbth-icon-headphones
                    menu-item menu-item-type-taxonomy
                    menu-item-object-product_cat
                    menu-item-2123
                  "
                >
                  <a href="#">Headphones</a>
                </li>
                <li
                  id="menu-item-2120"
                  class="
                    klbth-icon-camera
                    menu-item menu-item-type-taxonomy
                    menu-item-object-product_cat
                    menu-item-2120
                  "
                >
                  <a href="#">Camera &amp; Photo</a>
                </li>
                <li
                  id="menu-item-2126"
                  class="
                    klbth-icon-play-station
                    menu-item menu-item-type-taxonomy
                    menu-item-object-product_cat
                    menu-item-2126
                  "
                >
                  <a href="#">Video Games</a>
                </li>
                <li
                  id="menu-item-2127"
                  class="
                    klbth-icon-virtual-reality
                    menu-item menu-item-type-taxonomy
                    menu-item-object-product_cat
                    menu-item-2127
                  "
                >
                  <a href="#">Sports &amp; Outdoors</a>
                </li>
                <li
                  id="menu-item-2138"
                  class="
                    klbth-icon-data-transfer-up
                    menu-item
                    menu-item-type-custom
                    menu-item-object-custom
                    menu-item-2138
                  "
                >
                  <a href="#">Best Sellers</a>
                </li>
                <li
                  id="menu-item-2139"
                  class="
                    klbth-icon-shopping-bag-arrow-up
                    menu-item
                    menu-item-type-custom
                    menu-item-object-custom
                    menu-item-2139
                  "
                >
                  <a href="#">Top 100 Offers</a>
                </li>
                <li
                  id="menu-item-2140"
                  class="
                    klbth-icon-timer
                    menu-item
                    menu-item-type-custom
                    menu-item-object-custom
                    menu-item-2140
                  "
                >
                  <a href="#">New Arrivals</a>
                </li>
              </ul>
            </nav>
            <nav class="site-menu vertical primary">
              <ul id="menu-menu-1" class="menu">
                <li
                  class="
                    menu-item menu-item-type-custom menu-item-object-custom
                    current-menu-item current_page_item
                    menu-item-home
                    current-menu-ancestor current-menu-parent
                    menu-item-has-children
                  "
                >
                  <a href="#" class="next-link">Home</a>
                  <ul class="sub-menu">
                    <li class="menu-header">
                      <a class="back" href="#">Home</a>
                    </li>
                    <li class="menu-header">
                      <a class="back" href="#">Home</a>
                    </li>
                    <li
                      class="
                        menu-item menu-item-type-custom menu-item-object-custom
                        current-menu-item current_page_item
                        menu-item-home
                      "
                    >
                      <a href="#">Home 1</a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page
                      "
                    >
                      <a href="#">Home 2</a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page
                      "
                    >
                      <a href="#">Home 3</a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page
                      "
                    >
                      <a href="#">Home 4</a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page
                      "
                    >
                      <a href="#">Home 5</a>
                    </li>
                  </ul>

                  <a class="next" href="#"></a>
                </li>
                <li
                  class="
                    mega-menu
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-has-children
                  "
                >
                  <a href="#" class="next-link">Shop</a>
                  <ul class="sub-menu">
                    <li class="menu-header">
                      <a class="back" href="#">Shop</a>
                    </li>
                    <li class="menu-header">
                      <a class="back" href="#">Shop</a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page menu-item-has-children
                      "
                    >
                      <a href="#" class="next-link">Shop Lists</a>
                      <ul class="sub-menu">
                        <li class="menu-header">
                          <a class="back" href="#">Shop Lists</a>
                        </li>
                        <li class="menu-header">
                          <a class="back" href="#">Shop Lists</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Shop Default</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?opt=right-sidebar">Shop Right Sidebar</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?column=5&amp;opt=wide">Shop Wide</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?column=5&amp;opt=full-width"
                            >Filters Area</a
                          >
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?shop_view=list_view">List Left Sidebar</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?ft=load-more">Load More Button</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#?ft=infinite">Infinite Scrolling</a>
                        </li>
                      </ul>

                      <a class="next" href="#"></a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-product menu-item-has-children
                      "
                    >
                      <a href="#" class="next-link">Product Detail</a>
                      <ul class="sub-menu">
                        <li class="menu-header">
                          <a class="back" href="#">Product Detail</a>
                        </li>
                        <li class="menu-header">
                          <a class="back" href="#">Product Detail</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                        >
                          <a href="#">Product Default</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                        >
                          <a href="#">Product Variable</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                        >
                          <a href="#">Product Grouped</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                        >
                          <a href="#">Product External</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-product
                          "
                        >
                          <a href="#">Product Downloadable</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Zoom Image</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Product With Video</a>
                        </li>
                      </ul>

                      <a class="next" href="#"></a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-custom
                        menu-item-object-custom
                        menu-item-has-children
                      "
                    >
                      <a href="#" class="next-link">Shop Pages</a>
                      <ul class="sub-menu">
                        <li class="menu-header">
                          <a class="back" href="#">Shop Pages</a>
                        </li>
                        <li class="menu-header">
                          <a class="back" href="#">Shop Pages</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Cart</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Checkout</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">My account </a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Wishlist</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-post_type
                            menu-item-object-page
                          "
                        >
                          <a href="#">Order Tracking</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="category.php">Featured Products</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Popup Notice</a>
                        </li>
                      </ul>

                      <a class="next" href="#"></a>
                    </li>
                    <li
                      class="
                        menu-item
                        menu-item-type-custom
                        menu-item-object-custom
                        menu-item-has-children
                      "
                    >
                      <a href="#" class="next-link">Shop Layouts</a>
                      <ul class="sub-menu">
                        <li class="menu-header">
                          <a class="back" href="#">Shop Layouts</a>
                        </li>
                        <li class="menu-header">
                          <a class="back" href="#">Shop Layouts</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Two Columns</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Three Columns</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Three Columns Wide</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Four Columns</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Four Columns Wide</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Five Columns Wide</a>
                        </li>
                        <li
                          class="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                          "
                        >
                          <a href="#">Six Columns Wide</a>
                        </li>
                      </ul>

                      <a class="next" href="#"></a>
                    </li>
                  </ul>

                  <a class="next" href="#"></a>
                </li>
                <li
                  class="
                    menu-item menu-item-type-taxonomy
                    menu-item-object-product_cat
                  "
                >
                  <a href="#"
                    ><i class="klbth-icon-smartphone"></i> Cell Phones</a
                  >
                </li>
                <li
                  class="
                    menu-item menu-item-type-taxonomy
                    menu-item-object-product_cat
                  "
                >
                  <a href="#"
                    ><i class="klbth-icon-headphones"></i> Headphones</a
                  >
                </li>
                <li
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page
                  "
                >
                  <a href="#">Blog</a>
                </li>
                <li
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page
                  "
                >
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <nav class="site-menu vertical thirdy">
              <ul id="menu-top-right" class="menu">
                <li
                  id="menu-item-2233"
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-2233
                  "
                >
                  <router-link :to="'/' + langCode + '/order-tracking'"
                    >Order Tracking</router-link
                  >
                </li>
                <li
                  id="menu-item-2176"
                  class="
                    menu-item
                    menu-item-type-custom
                    menu-item-object-custom
                    menu-item-has-children
                    menu-item-2176
                  "
                >
                  <a href="#" class="next-link">English</a>
                  <ul class="sub-menu">
                    <li class="menu-header">
                      <a class="back" href="#">English</a>
                    </li>
                    <li class="menu-header">
                      <a class="back" href="#">English</a>
                    </li>
                    <li
                      id="menu-item-2177"
                      class="
                        menu-item
                        menu-item-type-custom
                        menu-item-object-custom
                        menu-item-2177
                      "
                    >
                      <a href="#">English</a>
                    </li>
                    <li
                      id="menu-item-2178"
                      class="
                        menu-item
                        menu-item-type-custom
                        menu-item-object-custom
                        menu-item-2178
                      "
                    >
                      <a href="#">Arabic</a>
                    </li>
                  </ul>

                  <a class="next" href="#"></a>
                </li>
              </ul>
            </nav>
            <div class="site-copyright">
              <p>
                Copyright 2021 © Machic WordPress Theme. All right reserved.
                Powered by <strong>KLBTheme</strong>.
              </p>
            </div>
            <!-- site-copyright -->
          </div>
          <!-- offcanvas-menu-wrapper -->
        </div>
        <!-- offcanvas-menu-container -->
      </div>
      <!-- site-offcanvas-body -->
      <div class="ps__rail-x" style="left: 0px; bottom: 0px">
        <div
          class="ps__thumb-x"
          tabindex="0"
          style="left: 0px; width: 0px"
        ></div>
      </div>
      <div class="ps__rail-y" style="top: 0px; height: 937px; right: 0px">
        <div
          class="ps__thumb-y"
          tabindex="0"
          style="top: 0px; height: 782px"
        ></div>
      </div>
      <div class="ps__rail-x" style="left: 0px; bottom: 0px">
        <div
          class="ps__thumb-x"
          tabindex="0"
          style="left: 0px; width: 0px"
        ></div>
      </div>
      <div class="ps__rail-y" style="top: 0px; height: 150px; right: 0px">
        <div
          class="ps__thumb-y"
          tabindex="0"
          style="top: 0px; height: 19px"
        ></div>
      </div>
    </div>
    <!-- site-scroll -->
  </aside>
  <div class="header-mobile hide-desktop">
    <div class="header-wrapper">
      <div class="column left">
        <div class="header-addons menu-toggle">
          <a href="#" @click="menuchange">
            <div class="header-addons-icon">
              <i class="klbth-icon-menu"></i>
            </div>
            <!-- header-addons-icon -->
          </a>
        </div>
        <!-- menu-toggle -->
      </div>
      <!-- column -->
      <div class="column center">
        <div class="site-brand">
          <router-link
            :to="'/' + langCode"
            title="Machic – Electronics Store eCommerce Theme"
          >
            <img
              src="http://english-template.bteamwebs.com/src/img/logo-dark.png"
              alt="Machic – Electronics Store eCommerce Theme"
            />
          </router-link>
        </div>
        <!-- site-brand -->
      </div>
      <!-- column -->
      <div class="column right">
        <div class="header-addons cart-button">
          <router-link :to="'/' + langCode + '/cart'">
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
                    ><span class="woocommerce-Price-currencySymbol">QAR </span
                    >1,218.99</bdi
                  >
                </span>
              </div>
            </div>
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
                      class="swiper-wrapper"
                      id="swiper-wrapper-276c607181dea1066"
                      aria-live="polite"
                      style="transition-duration: 0ms"
                    >
                      <div class="swiper-slide">
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
                                    src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg"
                                    class="
                                      attachment-woocommerce_thumbnail
                                      size-woocommerce_thumbnail
                                    "
                                    alt=""
                                    srcset="
                                      https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg
                                    "
                                /></a>
                              </div>
                              <!-- thumbnail-wrapper -->
                              <div class="content-wrapper">
                                <h3 class="product-title">
                                  <a href="#"
                                    >Samsung Galaxy A52 5G Android Cell Phone</a
                                  >
                                </h3>
                                <div class="entry-price">
                                  <span class="quantity"
                                    >1 ×
                                    <span
                                      class="woocommerce-Price-amount amount"
                                    >
                                      <bdi
                                        ><span
                                          class="
                                            woocommerce-Price-currencySymbol
                                          "
                                          >QAR </span
                                        >469.99</bdi
                                      >
                                    </span></span
                                  >
                                </div>
                                <a
                                  href="#cart/?remove_item=db8e1af0cb3aca1ae2d0018624204529&amp;_wpnonce=acc831cf67"
                                  class="remove remove_from_cart_button"
                                  aria-label="Remove this item"
                                  data-product_id="276"
                                  data-cart_item_key="db8e1af0cb3aca1ae2d0018624204529"
                                  data-product_sku="KGH45YRT"
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
                      <div class="swiper-slide">
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
                                    srcset="
                                      https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg
                                    "
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
                                      class="woocommerce-Price-amount amount"
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
                      class="swiper-button-prev"
                      tabindex="0"
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-276c607181dea1066"
                      aria-disabled="false"
                    ></div>
                    <div
                      class="swiper-button-next"
                      tabindex="0"
                      role="button"
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-276c607181dea1066"
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
                </div>
                <p class="woocommerce-mini-cart__total total">
                  <strong>Subtotal:</strong>
                  <span class="woocommerce-Price-amount amount">
                    <bdi
                      ><span class="woocommerce-Price-currencySymbol">QAR </span
                      >1,218.99</bdi
                    >
                  </span>
                </p>
                <p class="woocommerce-mini-cart__buttons buttons">
                  <a href="#cart/" class="button wc-forward">View cart</a
                  ><a href="#checkout/" class="button checkout wc-forward"
                    >Checkout</a
                  >
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
</template>

<script>
export default {
  data: () => ({
    id: "",
    showmenu: "",
    results: [],
    langCode: "en",
  }),
  mounted() {
    if (this.$route.name == "Home") {
      this.showmenu = "show";
    }
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
    // console.log(this.$route.name);
  },
  methods: {
    menuchange: function () {
      if (this.showmenu == "mobilemenu") {
        this.showmenu = "";
      } else {
        //  document.querySelector(".site-offcanvas").classList.add("mobilemenu");
        this.showmenu = "mobilemenu";
      }
    },
  },
};
</script>
