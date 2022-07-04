<template>
  <Header />

  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="klb-blog page-content">
        <div class="container">
          <div
            :data="item"
            :key="indextr"
            v-for="(item, indextr) in results"
            class="row content-wrapper sidebar-right"
          >
            <div class="col col-12 col-lg-9 content-primary mx-auto">
              <div class="single-post">
                <article
                  id="post-2117"
                  class="
                    klb-article
                    post-2117 post
                    type-post
                    status-publish
                    format-standard
                    has-post-thumbnail
                    hentry
                    category-watches
                    tag-klbtheme tag-themeforest
                  "
                >
                  <div class="entry-post-header">
                    <h2 class="entry-title">
                      <a href="#">{{ item.title }}</a>
                    </h2>

                    <div class="entry-footer">
                      <div class="entry-meta">
                        <span class="meta-item entry-published"
                          ><a href="#"
                            ><i class="klbth-icon-clock-outline"></i>
                            {{
                              moment(String(item.created_at)).format(
                                "MMMM DD YYYY"
                              )
                            }}</a
                          ></span
                        >
                           <span class="meta-item entry-tags"
                          ><i class="klbth-icon-cinema"></i
                          >
                          <a href="#" rel="tag">{{ item.title }}</a>
                        </span>
                        <span class="meta-item category" style="display: none">
                          <i class="klbth-icon-bookmark-empty"></i>
                          <a href="#" rel="category tag">Watches</a></span
                        >
                      </div>
                    </div>
                  </div>
                  <figure class="entry-media">
                    <a href="#">
                      <!--
                      <img
                        :src="url + item.photo"
                        alt="But I must explain to you how all this mistaken idea"
                    /> -->
                      <img
                       :src="url + item.photo"
                        alt="But I must explain to you how all this mistaken idea"
                      />
                    </a>
                  </figure>
                  <div class="entry-content">
                    <div class="klb-post">
                      <p>
                        <span
                          class="content-color"
                          v-html="item.description.substring(0, 500) + ''"
                        ></span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
</script>
<script>
import moment from "moment";
import axios from "axios";
export default {
  data: () => ({
    url: "http://baladi-v1.bteamwebs.com/storage/",
    results: [],
    formdata: {
      blog_id: "",
      customer_id: "",
      comment: null,
    },
    errors: "",
    formdata1: {
      blog_id: "",
      comment_id: 1,
      comment: null,
    },
    errors: "",
    showReplyInput: "",
  }),
  mounted() {
    if (localStorage.userInfo != null) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.formdata.customer_id = userInfo.id;
      this.userLogin = true;
    }
    this.postDetail();
  },
  methods: {
    PostComment() {
      axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/web/addblogcomment",
          this.formdata
        )
        .then((response) => {
          if (response.data.status == 400 || response.data.status == 500) {
            const Toast = this.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "error",
              title: response.data.data[0]
                ? response.data.data[0]
                : response.data.message,
            });
          } else {
            const Toast = this.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: response.data.message,
            });
            this.formdata.comment = "";
            this.postDetail();
          }
        });
    },
    PostReply(id) {
      console.log(id);
      this.formdata1.comment_id = id;
      console.log(this.formdata1);
      axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/web/addcommentreply",
          this.formdata1
        )
        .then((response) => {
          // console.log(response.data);
          if (response.data.status == 400) {
            this.errors = response.data.message;
          } else {
            const Toast = this.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
            Toast.fire({
              icon: "success",
              title: response.data.message,
            });
            this.formdata1.comment = "";
            this.postDetail();
          }
        });
    },
    isShowReply(indcomments) {
      // console.log(this.results[0].comments);
      this.results[0].comments[indcomments].reply = true;
      // this.showReplyInput = "display:block";
    },
    hideReplyText(indcomments) {
      this.results[0].comments[indcomments].reply = false;
    },
    postDetail() {
      var langCode = localStorage.getItem("lang");
      var id = this.$route.params.id;
      axios
        .get("http://baladi-v1.bteamwebs.com/api/web/blogdetails/" + id + '&locale='+this.langCode)
        .then((response) => {
          this.results = response.data.data;
          // console.log('blogdetails',this.results);
          this.formdata.blog_id = this.results[0].id;
          this.formdata1.blog_id = this.results[0].id;
        })
        .catch((error) => {});
    },
  },
};
</script>
