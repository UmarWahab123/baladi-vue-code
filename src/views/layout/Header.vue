<template>
  <div>
    <!-- floating social media -->
    <!-- floating social media -->
    <div class="box">
      <div class="con-icon">
        <div class="icon facebook">
          <div class="tooltip">Facebook</div>
          <span
            ><a href="https://www.multiwebpress.com/"
              ><i class="fab fa-facebook-f"></i></a
          ></span>
        </div>

        <div class="icon youtube">
          <div class="tooltip">Youtube</div>
          <span
            ><a href="https://www.multiwebpress.com/"
              ><i class="fab fa-youtube"></i></a
          ></span>
        </div>

        <div class="icon twitter">
          <div class="tooltip">Twitter</div>
          <span
            ><a href="https://www.multiwebpress.com/"
              ><i class="fab fa-twitter"></i></a
          ></span>
        </div>

        <div class="icon instagram">
          <div class="tooltip">Instagram</div>
          <span
            ><a href="https://www.multiwebpress.com/"
              ><i class="fab fa-instagram"></i></a
          ></span>
        </div>
        <div class="icon whatsapp">
          <div class="tooltip">Whatsapp</div>
          <span
            ><a href="https://www.multiwebpress.com/"
              ><i class="fab fa-whatsapp"></i></a
          ></span>
        </div>
      </div>
    </div>
    <!-- floating social media end -->
    <div
      class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
      tabindex="-1"
      style="overflow: hidden auto; visibility: hidden"
    >
      <div class="mfp-container mfp-s-ready mfp-inline-holder">
        <div class="mfp-content">
          <Quickview />
          <!-- quickview-product -->
        </div>
      </div>
    </div>
    <Topbar />
    <!-- <Modals/> -->

    <header id="masthead" class="site-header border-enable header-type1">
      <NavDesktop />
      <!-- header-desktop -->
      <NavMobileSwitcher />
      <!-- header-mobile-switcher -->
      <NavMobile />
      <!-- header-mobile -->
    </header>
  </div>
</template>
<script setup>
import Quickview from "./Quickview.vue";
import Topbar from "./Topbar.vue";
import NavDesktop from "./NavDesktop.vue";
import NavMobileSwitcher from "./NavMobileSwitcher.vue";
import NavMobile from "./NavMobile.vue";
import Modals from "./NavMobile.vue";
</script>
