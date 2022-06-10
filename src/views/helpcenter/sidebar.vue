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
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--dashboard
            nav__list__item__link
          "
          :class="about"
        >
          <router-link :to="'/' + langCode + '/helpcenter'"
            >{{$t('about_baladi')}}</router-link
          >
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--voucher
            nav__list__item__link
          "
          :class="replacement"
        >
          <router-link :to="'/' + langCode + '/replacement'"
            >{{$t('returns_replacements')}}</router-link
          >
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--rewards
            nav__list__item__link
          "
          :class="shipping"
        >
          <router-link :to="'/' + langCode + '/shoppingrates'"
            >{{$t('shipping_rates_policies')}}</router-link
          >
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--edit-address
            nav__list__item__link
          "
          :class="refund"
        >
          <router-link :to="'/' + langCode + '/refund'"
            >{{$t('refund_and_Returns_Policy')}}</router-link
          >
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--edit-account
            nav__list__item__link
          "
          :class="privacy"
        >
          <router-link :to="'/' + langCode + '/privacypolicy'"
            >{{$t('privacy_policy')}}</router-link
          >
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--tinv_wishlist
            nav__list__item__link
          "
          :class="terms"
        >
          <router-link :to="'/' + langCode + '/termscondition'"
            >{{$t('terms_and_condition')}}</router-link
          >
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--orders
            nav__list__item__link
          "
          :class="covid"
        >
          <router-link :to="'/' + langCode + '/covidhelp'"
            >{{$t('covid_19')}}</router-link
          >
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
    tabs: "",
    replacement: "",
    langCode: "en",
  }),
  mounted() {
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
    if (this.$route.name == "helpcenter") {
      this.shipping = "";
      this.refund = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.replacement = "";
      this.about = "is-active";
    }
    if (this.$route.name == "replacement") {
      this.shipping = "";
      this.refund = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.replacement = "is-active";
      this.about = "";
    }
    if (this.$route.name == "shoppingrates") {
      this.shipping = "is-active";
      this.refund = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.replacement = "";
      this.about = "";
    }
    if (this.$route.name == "refund") {
      this.shipping = "";
      this.refund = "is-active";
      this.privacy = "";
      this.terms = "";
      this.covid = "";
      this.replacement = "";
      this.about = "";
    }
    if (this.$route.name == "privacypolicy") {
      this.shipping = "";
      this.refund = "";
      this.privacy = "is-active";
      this.terms = "";
      this.covid = "";
      this.replacement = "";
      this.about = "";
    }
    if (this.$route.name == "termscondition") {
      this.shipping = "";
      this.refund = "";
      this.privacy = "";
      this.terms = "is-active";
      this.covid = "";
      this.replacement = "";
      this.about = "";
    }
    if (this.$route.name == "covidhelp") {
      this.shipping = "";
      this.refund = "";
      this.privacy = "";
      this.terms = "";
      this.covid = "is-active";
      this.replacement = "";
      this.about = "";
    }

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
};
</script>
