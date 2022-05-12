<template>
  <main class="app" v-if="isloading === false">
    <router-view></router-view>
  </main>
  <main class="app" v-if="isloading === true">
    <TheLoader />
  </main>
</template>

<script>
import TheLoader from "./views/Loader/TheLoader.vue";
export default {
  components: { TheLoader },
  data() {
    return {
      isloading: true,
    };
  },
  mounted() {
    //   this.isloading = false;
    setTimeout(() => (this.isloading = false), 1500);
  },
};
</script>
