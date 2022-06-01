<template>
  <div id="loader"></div>
</template>
<script>
export default {
  props: {
    text: {
      required: false,
      type: String,
      default: "Loading",
    },
  },
};
</script>

<style scoped>
#loader {
  background: #fcfcfd url(/../src/assets/img/loading.gif) center center
    no-repeat;
  background-size: 6%;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 100;
}
</style>
