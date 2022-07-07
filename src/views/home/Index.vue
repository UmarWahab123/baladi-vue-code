<template>
  <!-- <h1>{{ $t("message") }}</h1> -->
  <Header />
  <main id="main" class="site-primary" style="transform: none">
    <div class="site-content" style="transform: none">
      <div
        data-elementor-type="wp-page"
        data-elementor-id="41"
        class="elementor elementor-41"
        data-elementor-settings="[]"
        style="transform: none"
      >
        <div class="elementor-section-wrap" style="transform: none">
           <Banner />
            <Boxinfo />
            <Topcat />
                      <Bestsellers />
            <Banner2 />
          <Brand />
          <BudgetDeal />
            <SaveBar />
          <Newproducts />
        </div>
      </div>
    </div>

    <!-- site-content -->
  </main>
  <div>
    <Footer />
  </div>
</template>
<script setup>
setTimeout(function () {
  // document.getElementById("menu-sidebar-menu-1").classList.add("show");
}, 500);
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import Banner from "./Banner.vue";
import Boxinfo from "./Boxinfo.vue";
import Newproducts from "./Newproducts.vue";
import SaveBar from "./SaveBar.vue";
import Topcat from "./Topcat.vue";
import Banner2 from "./partials/Banner.vue";
import Brand from "./Brand.vue";
import Bestsellers from "./Bestsellers.vue";
import BudgetDeal from "./BudgetDeals.vue";

</script>
<script>
import TheLoader from "../Loader/TheLoader.vue";
export default {
  components: { TheLoader },
  data() {
    return {
      isloading: true,
    };
  },
  mounted() {
    setTimeout(() => (this.isloading = false), 1000);
  },
  methods: {},
};
</script>
