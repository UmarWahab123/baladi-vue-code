<template>
  <TheLoader v-show="this.isloading === true"></TheLoader>

  <Header v-show="this.isloading === false" />
  <main id="main" class="site-primary" v-show="this.isloading === false">
    <div class="site-content">
      <div
        data-elementor-type="wp-page"
        data-elementor-id="1899"
        class="elementor elementor-1899"
        data-elementor-settings="[]"
      >
        <div class="elementor-section-wrap">
          <Part1 />
          <Part2 />
        </div>
      </div>
    </div>
    <!-- site-content -->
  </main>

  <div v-show="this.isloading === false">
    <Footer />
  </div>
</template>

<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import Part1 from "./Part1.vue";
import Part2 from "./Part2.vue";
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
};
</script>