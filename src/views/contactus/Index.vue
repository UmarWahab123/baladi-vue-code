<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div data-elementor-id="1985" class="elementor elementor-1985">
        <div class="elementor-section-wrap">
          <Offices />
          <Form />
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
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import Form from "./Form.vue";
import Offices from "./Offices.vue";
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
