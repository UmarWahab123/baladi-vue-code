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
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard"
          :class="about"
          @click="clickabout"
        >
          <router-link to="/helpcenter">About Baladi</router-link>
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--voucher"
          :class="test"
          @click="clicktest"
        >
          <router-link to="/refund">Returns & Replacements</router-link>
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--rewards"
          :class="shipping"
          @click="clickshipping"
        >
          <router-link to="/shoppingrates"
            >Shipping Rates & Policies</router-link
          >
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address"
          :class="refund"
          @click="clickrefund"
        >
          <router-link to="/refund">Refund and Returns Policy</router-link>
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account"
          :class="privacy"
          @click="clickprivacy"
        >
          <router-link to="/privacypolicy">Privacy Policy</router-link>
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--tinv_wishlist"
          :class="terms"
          @click="clickterms"
        >
          <router-link to="/termscondition">Terms and Conditions</router-link>
        </li>
        <li
          class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders"
          :class="covid"
          @click="clickcovid"
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
    about: "",
    test: "",
    shipping: "",
    refund: "",
    privacy: "",
    terms: "",
    covid: "",
  }),
  mounted() {
    this.test = "";
    this.shipping = "";
    this.refund = "";
    this.privacy = "";
    this.terms = "";
    this.covid = "";
    this.about = "is-active";
  },
  methods: {
    clickabout: function () {
      this.test = "";
      this.shipping = "";
      this.refund = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.about = "is-active";
    },
    clicktest: function () {
      this.about = "";
      this.shipping = "";
      this.refund = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.test = "is-active";
    },
    clickshipping: function () {
      this.about = "";
      this.test = "";
      this.refund = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.shipping = "is-active";
    },
    clickrefund: function () {
      this.about = "";
      this.test = "";
      this.shipping = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.refund = "is-active";
    },
    clickprivacy: function () {
      this.about = "";
      this.test = "";
      this.shipping = "";
      this.refund = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.privacy = "is-active";
    },
    clickterms: function () {
      this.about = "";
      this.test = "";
      this.shipping = "";
      this.refund = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.terms = "is-active";
    },
    clickcovid: function () {
      this.about = "";
      this.test = "";
      this.shipping = "";
      this.refund = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.covid = "is-active";
    },
  },
};
</script>
