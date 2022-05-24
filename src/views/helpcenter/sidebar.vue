<template>
  <div class="my-account-navigation">
    <div class="account-toggle-menu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="2.3" y1="12" x2="21.8" y2="12"></line>
        <line x1="2.3" y1="6" x2="21.8" y2="6"></line>
        <line x1="2.3" y1="18" x2="21.8" y2="18"></line>
      </svg>
      Your Menu
    </div>
    <!-- account-toggle-menu -->

    <nav class="woocommerce-MyAccount-navigation">
      <ul>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard nav__list__item__link is-active"
        >
          <router-link to="/helpcenter">About Baladi</router-link>
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--voucher nav__list__item__link"
        >
          <router-link to="/refund">Returns & Replacements</router-link>
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--rewards nav__list__item__link"
        >
          <router-link to="/shoppingrates"
            >Shipping Rates & Policies</router-link
          >
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address nav__list__item__link"
        >
          <router-link to="/refund">Refund and Returns Policy</router-link>
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account nav__list__item__link"
        >
          <router-link to="/privacypolicy">Privacy Policy</router-link>
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--tinv_wishlist nav__list__item__link"
        >
          <router-link to="/termscondition">Terms and Conditions</router-link>
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders nav__list__item__link"
        >
          <router-link to="/covidhelp">Covid-19</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <!-- my-account-navigation -->
</template>
<script>
export default {
  data: () => ({
    // about: "",
    // test: "",
    // shipping: "",
    // refund: "",
    // privacy: "",
    // terms: "",
    // covid: "",
    tabs: "",
  }),
  mounted() {
    // this.test = "";
    // this.shipping = "";
    // this.refund = "";
    // this.privacy = "";
    // this.terms = "";
    // this.covid = "";
    // this.about = "is-active";
    const tabs = document.querySelectorAll(".nav__list__item__link");
    tabs.forEach((clickedTab) => {
      clickedTab.addEventListener("click", (e) => {
        tabs.forEach((tab) => {
          tab.classList.remove("is-active");
        });
        e.target.parentElement.classList.add("is-active");
      });
    });
  },
  // methods: {
  //   clickabout: function () {
  //     this.test = "";
  //     this.shipping = "";
  //     this.refund = "";
  //     this.privacy = "";
  //     this.terms = "";
  //     this.covid = "";
  //     this.about = "is-active";
  //   },
  //   clicktest: function () {
  //     this.about = "";
  //     this.shipping = "";
  //     this.refund = "";
  //     this.privacy = "";
  //     this.terms = "";
  //     this.covid = "";
  //     this.test = "is-active";
  //   },
  //   clickshipping: function () {
  //     this.about = "";
  //     this.test = "";
  //     this.refund = "";
  //     this.privacy = "";
  //     this.terms = "";
  //     this.covid = "";
  //     this.shipping = "is-active";
  //   },
  //   clickrefund: function () {
  //     this.about = "";
  //     this.test = "";
  //     this.shipping = "";
  //     this.privacy = "";
  //     this.terms = "";
  //     this.covid = "";
  //     this.refund = "is-active";
  //   },
  //   clickprivacy: function () {
  //     this.about = "";
  //     this.test = "";
  //     this.shipping = "";
  //     this.refund = "";
  //     this.privacy = "";
  //     this.terms = "";
  //     this.covid = "";
  //     this.privacy = "is-active";
  //   },
  //   clickterms: function () {
  //     this.about = "";
  //     this.test = "";
  //     this.shipping = "";
  //     this.refund = "";
  //     this.privacy = "";
  //     this.terms = "";
  //     this.covid = "";
  //     this.terms = "is-active";
  //   },
  //   clickcovid: function () {
  //     this.about = "";
  //     this.test = "";
  //     this.shipping = "";
  //     this.refund = "";
  //     this.privacy = "";
  //     this.terms = "";
  //     this.covid = "";
  //     this.covid = "is-active";
  //   },
  // },
};
</script>
