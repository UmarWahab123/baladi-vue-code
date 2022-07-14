<template>
  <footer class="site-footer">
    <section class="newsletter">
      <div class="newsletter_content">
        <hr class="container newsletter_content-divider" />
        <h4 class="container newsletter_content-head">
          {{$t('our_newsletter')}}
        </h4>
        <p class="" style="font-size: 1rem;font-weight:500;text-align:center">
         {{$t('sign_up_to_our_newsletter')}}
        </p>
        <div class="">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-5">
                <div class="site-newsletter">
                  <!-- site-newsletter-text -->
                  <div class="site-newsletter-form">
                    <div class="subscribe-form">
                      <!-- Mailchimp for WordPress v4.8.6 - https://wordpress.org/plugins/mailchimp-for-wp/ -->
                      <form
                        id="mc4wp-form-1"
                        class="mc4wp-form mc4wp-form-1852"
                        method="post"
                        data-id="1852"
                        data-name="Baladi"
                      >
                        <div class="mc4wp-form-fields d-flex">
                          <input
                            type="email"
                            class="subscribe-input"
                            name="EMAIL"
                            placeholder="Your email address"
                            required=""
                          />
                          <button class="sub-btn" type="submit">{{$t('sign_up')}}</button>
                        </div>
                        <label style="display: none !important"
                          >{{$t('leave_this_field')}}:
                          <input
                            type="text"
                            name="_mc4wp_honeypot"
                            value=""
                            tabindex="-1"
                            autocomplete="off"
                          />
                        </label>
                        <input
                          type="hidden"
                          name="_mc4wp_timestamp"
                          value="1643343130"
                        />
                        <input
                          type="hidden"
                          name="_mc4wp_form_id"
                          value="1852"
                        />
                        <input
                          type="hidden"
                          name="_mc4wp_form_element_id"
                          value="mc4wp-form-1"
                        />
                        <div class="mc4wp-response"></div>
                      </form>
                      <!-- / Mailchimp for WordPress Plugin -->
                    </div>
                  </div>
                  <!-- site-newsletter-form -->
                </div>
                <!-- site-newsletter -->
              </div>
              <!-- col -->
            </div>
            <!-- row -->
          </div>
          <!-- container -->
        </div>
      </div>
    </section>
    <div class="footer-row footer-widgets">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-3">
          <div class="column align-center left">
            <div class="site-brand"><router-link
                :to="'/' + langCode"
                title="Machic – Electronics Store eCommerce Theme"
                v-if="langCode=='en'"
              >
              <img src="http://english-template.bteamwebs.com/src/img/logo-dark.png" alt="Machic2 – Electronics Store eCommerce Theme"></router-link>
              <router-link
                v-if="langCode=='ar'"
                :to="'/' + langCode"
                title="Machic – Electronics Store eCommerce Theme"
              >
              <img src="http://staging.baladiexpress.com/frontend/src/img/logo-arabic.png" alt="Machic2 – Electronics Store eCommerce Theme"></router-link>
              </div><!-- site-brand -->
              </div>
              <div class="menu-make-money-with-us-container py-2">
              
                            <p class="" style="font-size: 0.8125rem;color:#818ea0 ;">
                                {{$t('footertext')}}
                            </p>

                            <strong class="text-dark"><i class="fa fa-phone" aria-hidden="true"></i> &nbsp; <span class="h6 fw-bold">50902222</span></strong>


                        </div>
            <div class="social-share site-social colored">
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
          <!-- col -->
          <div class="col col-12 col-lg-2">
            <div
              class="
                klbfooterwidget
                widget
                woocommerce
                widget_product_categories
              "
            >
              <h4 class="widget-title">{{$t('product_categories')}}</h4>
              <ul class="product-categories">
            <li  :data="item"
                    :key="indextr"
                    v-for="(item, indextr) in results" 
                    class="cat-item cat-item-29"><router-link :to="'/' + langCode + '/category/'+ item?.id"
                    >{{item.name}}</router-link>
                  </li>
              </ul>
            </div>
          </div>
          <!-- col -->
          <div class="col col-12 col-lg-2">
            <div class="klbfooterwidget widget widget_nav_menu">
              <h4 class="widget-title">{{$t('let_us')}}</h4>
              <div class="menu-let-us-help-you-container">
                <ul id="menu-let-us-help-you" class="menu">
                  <!-- <li
                    id="menu-item-2525"
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-2525
                    "
                  >
                    <router-link :to="'/' + langCode + '/replacement'"
                      >{{$t('returns')}} &amp; {{$t('replacements')}}</router-link
                    >
                  </li> -->
                  <!-- <li
                    id="menu-item-2221"
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-2221
                    "
                  >
                    <router-link :to="'/' + langCode + '/shoppingrates'"
                      >{{$t('shipping_rates')}} &amp; {{$t('policies')}}</router-link
                    >
                  </li> -->
                  <li
                    id="menu-item-2524"
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-2524
                    "
                  >
                    <router-link :to="'/' + langCode + '/refund'"
                      >{{$t('refund_and_Returns_Policy')}}</router-link
                    >
                  </li>
                  <li
                    id="menu-item-2223"
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                      menu-item-privacy-policy
                      menu-item-2223
                    "
                  >
                    <router-link :to="'/' + langCode + '/privacy-policy'"
                      >{{$t('privacy_policy')}}
                    </router-link>
                  </li>
                  <li
                    id="menu-item-2523"
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-2523
                    "
                  >
                    <!-- <a href="/termscondition"></a> -->
                    <router-link :to="'/' + langCode + '/terms'"
                      >{{$t('terms_and_condition')}}
                    </router-link>
                  </li>
                  <!-- <li
                    id="menu-item-2185"
                    class="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-2185
                    "
                  >
                    <router-link :to="'/' + langCode + '/helpcenter'"
                      >{{$t('help_center')}}</router-link
                    >
                  </li> -->
                  <li
                    id="menu-item-2182"
                    class="
                      menu-item menu-item-type-custom
                      text-danger
                      menu-item-object-custom menu-item-2182
                    "
                  >
                    <router-link :to="'/' + langCode + '/covid-19'"
                      >{{$t('covid_19')}}</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- col -->
          <div class="col col-12 col-lg-2">
            <div class="klbfooterwidget widget widget_nav_menu">
              <h4 class="widget-title">{{$t('know_us')}}</h4>
              <div class="menu-get-to-know-us-container">
                <ul id="menu-get-to-know-us" class="menu">
                  <li
                    id="menu-item-2186"
                    class="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-2186
                    "
                  >
                    <!-- <router-link to="/careers">Careers </router-link> -->
                  </li>
                  <li
                    id="menu-item-2508"
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-2508
                    "
                  >
                    <router-link :to="'/' + langCode + '/aboutus'"
                      >{{$t('about_us')}}</router-link
                    >
                  </li>
                 
                  <li
                    id="menu-item-2509"
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-2509
                    "
                  >
                    <router-link :to="'/' + langCode + '/contact-us'"
                      >{{$t('contact_us')}}</router-link
                    >
                  </li>
                  <li
                    id="menu-item-2509"
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-2509
                    "
                  >
                    <router-link :to="'/' + langCode + '/faq'"
                      >{{$t('faqs')}}</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- col -->

          <div class="col col-12 col-lg-3">
            <div class="klbfooterwidget widget widget_nav_menu">
              <h4 class="widget-title text-success">{{$t('install_app')}}</h4>
              <div class="site-mobile-app mb-1">
                <div class="app-content d-grid">
                  <strong class="text-dark"
                    >{{$t('scan_code')}}</strong
                  >
                </div>
                <div class="d-flex">
                  <div class="mx-5 ml-0">
                    <div class="app-buttons mt-1 mx-2 ml-0">
                      <a
                        href="https://play.google.com/store"
                        class="google-play"
                      ></a>
                    </div>
                    <img src="/src/assets/img/qr-code.png" alt="app" />
                  </div>
                </div>
              </div>
              <div class="site-mobile-app">
                <div class="app-content d-grid">
                  <strong class="text-dark"
                    >From App Store or Google Play :</strong
                  >
                  <span class="">15% discount on your first purchase</span>
                </div>
                <div class="app-buttons mt-1">
                  <a href="https://play.google.com/store" class="google-play">
                    <img
                      src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/google-play.png"
                      alt="app"
                    />
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    class="google-play"
                  >
                    <img
                      src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/app-store.png"
                      alt="app"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- col -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- footer-row -->

    <!-- footer-row -->
    <button
      type="button"
      :onclick="scrollup"
      class="btn btn-success scroll-btn btn-floating btn-lg"
      :class="displaynone"
      id="btn-back-to-top"
      v-show="scY > 300"
    >
      <i class="fas fa-arrow-up"></i>
    </button>

    <div class="footer-row footer-copyright bordered">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="footer-bottom">
              <div class="site-copyright">
                <p>
                  {{$t('copyrighttext')}} <strong>{{$t('express')}}</strong> {{$t('reservetext')}}
                </p>
              </div>
            </div>
            <!-- footer-bottom -->
          </div>
          <!-- col -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>

    <!-- footer-row -->
  </footer>
  <!-- site-footer -->

  <div class="site-overlay"></div>

  <div class="klb-mobile-search">
    <div
      class="
        dgwt-wcas-search-wrapp dgwt-wcas-has-submit
        woocommerce
        js-dgwt-wcas-layout-classic
        dgwt-wcas-layout-classic
        js-dgwt-wcas-mobile-overlay-enabled
      "
    >
      <form class="dgwt-wcas-search-form" role="search" action="#" method="get">
        <div class="dgwt-wcas-sf-wrapp">
          <label class="screen-reader-text" for="dgwt-wcas-search-input-2"
            >Products search</label
          >
          <input
            id="dgwt-wcas-search-input-2"
            type="search"
            class="dgwt-wcas-search-input"
            name="s"
            value=""
            placeholder="Search for products..."
            autocomplete="off"
          />
          <div class="dgwt-wcas-preloader" style="right: 96.875px"></div>
          <button
            type="submit"
            aria-label="Search"
            class="dgwt-wcas-search-submit"
          >
            Search
          </button>
          <input type="hidden" name="post_type" value="product" />
          <input type="hidden" name="dgwt_wcas" value="1" />
        </div>
      </form>
    </div>
  </div>
  <div class="mobile-bottom-menu">
    <div class="mobile-bottom-menu-wrapper">
      <nav class="mobile-menu">
        <ul>
          <li>
            <router-link :to="'/' + langCode + '/Blog'" class="store">
              <i class="klbth-icon-shop"></i> <span>Blogs</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'/' + langCode + '/brands'" class="search">
              <i class="klbth-icon-search"></i> <span>Brands</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'/' + langCode + '/wishlist'" class="wishlist">
              <i class="klbth-icon-heart"></i> <span>Wishlist</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'/' + langCode + '/myaccount'" class="user">
              <i class="klbth-icon-user-1"></i> <span>Account</span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="'/' + langCode + '/category'" class="categories">
              <i class="klbth-icon-menu-scale"></i> <span>Categories</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- header-mobile-nav -->
    </div>
    <!-- mobile-nav-wrapper -->
  </div>
  <!-- mobile-nav-wrapper -->

  <div class="woosc-popup woosc-search">
    <div class="woosc-popup-inner">
      <div class="woosc-popup-content">
        <div class="woosc-popup-content-inner">
          <div class="woosc-popup-close"></div>
          <div class="woosc-search-input">
            <input
              type="search"
              id="woosc_search_input"
              placeholder="Type any keyword to search..."
            />
          </div>
          <div class="woosc-search-result"></div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="woosc-area"
    class="
      woosc-area
      woosc-bar-bottom
      woosc-bar-right
      woosc-bar-click-outside-yes
      woosc-hide-checkout
    "
    data-bg-color="#292a30"
    data-btn-color="#00a0d2"
    data-count="2"
  >
    <div class="woosc-inner">
      <div class="woosc-table" style="background-color: rgb(41, 42, 48)">
        <div class="woosc-table-inner">
          <a
            href="javascript:void(0);"
            id="woosc-table-close"
            class="woosc-table-close hint--left"
            aria-label="Close"
            ><span class="woosc-table-close-icon"></span
          ></a>
          <div class="woosc-table-items"></div>
        </div>
      </div>
      <div
        class="woosc-bar"
        data-count="2"
        style="background-color: rgb(41, 42, 48)"
      >
        <div class="woosc-bar-notice">
          Click outside to hide the compare bar
        </div>
        <a
          href="javascript:void(0);"
          class="woosc-bar-search hint--top"
          aria-label="Add product"
        ></a>
        <div class="woosc-bar-items"></div>
        <div
          class="woosc-bar-btn woosc-bar-btn-text"
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
<style>
/* @import '/./src/styles/app.css'; */
</style>

<script>
// import * as myKey from '/../src/styles/app.css';
import axios from "axios";

export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
      langCode: "en",
      url: "http://baladi-v1.bteamwebs.com/storage/",
      results: [],

    };
  },
  mounted() {
    // let Script = document.createElement("script");
    // Script.setAttribute("src", "https://cdn.jsdelivr.net/npm/vue/dist/vue.js");
    // document.head.appendChild(Script);
    window.addEventListener("scroll", this.handleScroll);
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/web/header/topCategories?locale=" +
          lang
      )
      .then((response) => {
        this.results = response.data.data;
        // console.log('hsdg',this.results);
       
      })
      .catch((error) => {});
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    scrollup(index) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
