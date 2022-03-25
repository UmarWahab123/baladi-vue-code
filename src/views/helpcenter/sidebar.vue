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
            is-active
          "
        >
          <router-link to="/helpcenter">About Baladi</router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--voucher
          "
        >
          <router-link to="/replacement">Returns & Replacements</router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--rewards
          "
        >
          <router-link to="/shoppingrates"
            >Shipping Rates & Policies</router-link
          >
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--edit-address
          "
        >
          <router-link to="/refund">Refund and Returns Policy</router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--edit-account
          "
        >
          <router-link to="/privacypolicy">Privacy Policy</router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--tinv_wishlist
          "
        >
          <router-link to="/termscondition">Terms and Conditions</router-link>
        </li>
        <li
          class="
            woocommerce-MyAccount-navigation-link
            woocommerce-MyAccount-navigation-link--orders
          "
        >
          <router-link to="/covidhelp">Covid-19</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <!-- my-account-navigation -->
</template>