<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="klb-blog page-content">
        <div class="container">
          <div class="shop-page-header">
    <nav class="woocommerce-breadcrumb">
          <ul>
                <li><a href="/en">Home</a></li>
                <li>
                   <router-link :to="'/' + langCode + '/blog'"
                      > {{$t('blogs')}}</router-link
                    >
                </li>
            </ul>
        </nav>
    </div>
          <div class="row content-wrapper sidebar-right">
            <div class="col col-12 col-lg-9 content-primary mx-auto">
              <div
                :data="item"
                :key="indextr"
                v-for="(item, indextr) in results"
                class="blog-posts"
              >
                <article
                  id="post-2117"
                  class="
                    klb-article
                    post post-2117
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
                           <time><b>{{
                                moment(String(item.created_at)).format(
                                  "MMMM DD YYYY"
                                )
                              }}</b></time></a
                          ></span
                        >
                        <span class="meta-item entry-tags"
                          ><i class="klbth-icon-cinema"></i
                          >
                          <a href="#" rel="tag"><b>{{ item.title }}</b></a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <figure class="entry-media">
                    <a href="#"
                      ><img
                        :src="url + item.photo"
                        alt="But I must explain to you how all this mistaken idea"
                    /></a>
                  </figure>
                  <div class="entry-content">
                    <div class="klb-post">
                      <p>
                        <span
                          class="content-color"
                          v-html="item.description.substring(0, 500) + ''"
                        ></span>
                      </p>
                      <div class="klb-readmore entry-button">
                        <router-link
                          class="btn read-more"
                          :to="'/' + langCode + '/blog-detail/' + item.id"
                          >{{$t('read_more')}}
                        </router-link>
                      </div>
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
    langCode: "en",
  }),
  mounted() {
    var langCode = localStorage.getItem("lang");

    axios
      // .get(import.meta.env.VITE_API_URL + "/api/web/blog")
      .get("http://baladi-v1.bteamwebs.com/api/web/blog?locale=" +
          langCode)
      .then((response) => {
        this.results = response.data.data;
      })
      .catch((error) => {});
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
  },
};
</script>
