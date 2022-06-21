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
  background: #fcfcfd url("http://bteamwebs.com/loading.gif") center center
    no-repeat;
  background-size: 9%;
  height: 47vh;
  width: 101%;
  position: absolute;
  z-index: 100;
}
</style>
