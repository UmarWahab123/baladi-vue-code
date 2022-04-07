<!--Submit the form data to API
                                    Make a Form,,,
                                    Install axios,,,
                                    Get Form data 
                                    Submit data to APi 
                                    Test Api Results
                                    Axios API Plus Test Server links-->
<template>
  <div class="row mt-10 ml-10">
    <form @submit="postData" method="post">
      <div class="col-md-4">
        <input
          type="text"
          name="email"
          placeholder="email"
          v-model="posts.email"
        /><br /><br />
      </div>
      <div class="col-md-4">
        <input
          type="text"
          placeholder="password"
          name="password"
          v-model="posts.password"
        /><br /><br />
      </div>
      <div class="col-md-4 text-center">
        <button type="submit">Post</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostComponent",
  data() {
    return {
      posts: {
        email: null,
        password: null,
      },
    };
  },
  mounted() {},
  methods: {
    postData(e) {
      this.axios.post("postapi", this.posts).then((result) => {
        console.warn(result);
      });
      e.preventDefault();
    },
  },
};
</script>
