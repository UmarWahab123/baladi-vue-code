<template>
  <div class="my-account-navigation remove-border-right">
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
     {{$t('Your_Menu')}}
    </div>
    <!-- account-toggle-menu -->

    <nav class="woocommerce-MyAccount-navigation">
      <ul>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--dashboard
          "
          :class="activeClass"
        >
          <router-link :to="'/' + langCode + '/userdashboard'"
            >{{$t('dashboard')}}
          </router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--orders
          "
          :class="orders"
        >
          <router-link :to="'/' + langCode + '/orders'">{{$t('orders')}} </router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--orders
          "
          :class="mywallet"
        >
          <router-link :to="'/' + langCode + '/my-wallet'"
            >{{$t('my_wallet')}} 
          </router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--orders
          "
          :class="voucher"
        >
          <router-link :to="'/' + langCode + '/voucher'">{{$t('voucher')}}  </router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--orders
          "
          :class="rewardpoints"
        >
          <router-link :to="'/' + langCode + '/reward-points'"
            >{{$t('reward_points')}}
          </router-link>
        </li>

        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--edit-address
          "
          :class="editaddress"
        >
          <router-link :to="'/' + langCode + '/edit-address'"
            >{{$t('addresses')}}
          </router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--edit-account
          "
          :class="account"
        >
          <router-link :to="'/' + langCode + '/account'"
            >{{$t('account_detail')}}
          </router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--tinv_wishlist
          "
        >
          <router-link :to="'/' + langCode + '/wishlist'"
            >{{$t('wish_list')}}
          </router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--customer-logout
          "
        >
          <a @click="logout()" href="javascript:void(0);">{{$t('logout')}}</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- my-account-navigation -->
</template>

<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
</script>
<script>
import TheLoader from "../Loader/TheLoader.vue";
export default {
  components: { TheLoader },
  data() {
    return {
      isloading: true,
      activeClass: "",
      orders: "",
      mywallet: "",
      voucher: "",
      rewardpoints: "",
      editaddress: "",
      account: "",
      wishlist: "",
      langCode: "en",
    };
  },
  mounted() {
    if (this.$route.name == "userdashboard") {
      this.activeClass = "is-active";
      this.orders = "iis-active";
      this.mywallet = "";
      this.voucher = "";
      this.rewardpoints = "";
      this.editaddress = "";
      this.account = "";
    }
    if (this.$route.name == "orders") {
      this.activeClass = "";
      this.orders = "is-active";
      this.mywallet = "";
      this.voucher = "";
      this.rewardpoints = "";
      this.editaddress = "";
      this.account = "";
    }
    if (this.$route.name == "my-wallet") {
      this.activeClass = "";
      this.orders = "";
      this.mywallet = "is-active";
      this.voucher = "";
      this.rewardpoints = "";
      this.editaddress = "";
      this.account = "";
    }
    if (this.$route.name == "voucher") {
      this.activeClass = "";
      this.orders = "";
      this.mywallet = "";
      this.voucher = "is-active";
      this.rewardpoints = "";
      this.editaddress = "";
      this.account = "";
    }
    if (this.$route.name == "reward-points") {
      this.activeClass = "";
      this.orders = "";
      this.mywallet = "";
      this.voucher = "";
      this.rewardpoints = "is-active";
      this.editaddress = "";
      this.account = "";
    }
    if (this.$route.name == "reward-points") {
      this.activeClass = "";
      this.orders = "";
      this.mywallet = "";
      this.voucher = "";
      this.rewardpoints = "is-active";
      this.editaddress = "";
      this.account = "";
    }
    if (this.$route.name == "edit-address") {
      this.activeClass = "";
      this.orders = "";
      this.mywallet = "";
      this.voucher = "";
      this.rewardpoints = "";
      this.editaddress = "is-active";
      this.account = "";
    }
    if (this.$route.name == "account") {
      this.activeClass = "";
      this.orders = "";
      this.mywallet = "";
      this.voucher = "";
      this.rewardpoints = "";
      this.editaddress = "";
      this.account = "is-active";
    }

    if (localStorage.userInfo != null) {
    } else {
      this.$router.push("myaccount");
    }
    setTimeout(() => (this.isloading = false), 1000);

    var lang = localStorage.getItem("lang");
    this.langCode = lang;
  },
  methods: {
    logout() {
      localStorage.clear();
      localStorage.setItem("lang", "en");
      var lang = localStorage.getItem("lang");
      this.$router.push("/" + lang + "/myaccount");
    },
  },
};
</script>
