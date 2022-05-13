<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="klb-blog page-content">
        <div class="container">
          <div class="row content-wrapper sidebar-right">
            <div class="col col-12 col-lg-9 content-primary">
              <div
                :data="item"
                :key="indextr"
                v-for="(item, indextr) in results"
                class="blog-posts"
              >
                <article
                  id="post-2117"
                  class="klb-article post post-2117 type-post status-publish format-standard has-post-thumbnail hentry category-watches tag-klbtheme tag-themeforest"
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
                            {{ item.created_at }}</a
                          ></span
                        >
                        <span class="meta-item category"
                          ><i class="klbth-icon-bookmark-empty"></i>
                          <a href="#" rel="category tag">Watches</a></span
                        >
                        <span class="meta-item entry-tags"
                          ><i class="klbth-icon-cinema"></i
                          ><a href="#" rel="tag">klbtheme</a>,
                          <a href="#" rel="tag">themeforest</a>
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
                          :to="{
                            name: 'blog-detail',
                            params: { id: item.id },
                          }"
                          >Read More
                        </router-link>
                      </div>
                    </div>
                  </div>
                </article>

                <div class="col col-12">
                  <div class="site-pagination">
                    <ul class="page-numbers">
                      <li>
                        <span aria-current="page" class="page-numbers current"
                          >1</span
                        >
                      </li>
                      <li><a class="page-numbers" href="#">2</a></li>
                      <li>
                        <a class="next page-numbers" href="#"
                          ><i class="klbth-icon-nav-arrow-right"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="sidebar"
              class="col col-12 col-lg-3 content-secondary site-sidebar"
            >
              <div class="widget widget_search">
                <div class="search_form">
                  <form
                    class="search-form"
                    id="search-form"
                    action="https://klbtheme.com/machic/"
                    method="get"
                  >
                    <input
                      class="form_control"
                      type="text"
                      name="s"
                      placeholder="Search..."
                      autocomplete="off"
                    />
                    <button type="submit">
                      <i class="klbth-icon-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="widget widget_categories">
                <h4 class="widget-title">Categories</h4>
                <ul>
                  <li class="cat-item cat-item-16"><a href="#/">Camera</a></li>
                  <li class="cat-item cat-item-17">
                    <a href="#">Smartphone</a>
                  </li>
                  <li class="cat-item cat-item-18"><a href="#">Tablet</a></li>
                  <li class="cat-item cat-item-19"><a href="#">Watches</a></li>
                </ul>
              </div>
              <div class="widget widget_tag_cloud">
                <h4 class="widget-title">Tags</h4>
                <div class="tagcloud">
                  <a
                    href="#"
                    class="tag-cloud-link tag-link-20 tag-link-position-1"
                    style="font-size: 8pt"
                    aria-label="envato (1 item)"
                    >envato</a
                  >
                  <a
                    href="#"
                    class="tag-cloud-link tag-link-21 tag-link-position-2"
                    style="font-size: 8pt"
                    aria-label="iPad (1 item)"
                    >iPad</a
                  >
                  <a
                    href="#"
                    class="tag-cloud-link tag-link-22 tag-link-position-3"
                    style="font-size: 8pt"
                    aria-label="klbtheme (1 item)"
                    >klbtheme</a
                  >
                  <a
                    href="#"
                    class="tag-cloud-link tag-link-23 tag-link-position-4"
                    style="font-size: 8pt"
                    aria-label="phone (1 item)"
                    >phone</a
                  >
                  <a
                    href="#"
                    class="tag-cloud-link tag-link-24 tag-link-position-5"
                    style="font-size: 8pt"
                    aria-label="photo (1 item)"
                    >photo</a
                  >
                  <a
                    href="#"
                    class="tag-cloud-link tag-link-25 tag-link-position-6"
                    style="font-size: 8pt"
                    aria-label="pro (1 item)"
                    >pro</a
                  >
                  <a
                    href="#"
                    class="tag-cloud-link tag-link-26 tag-link-position-7"
                    style="font-size: 8pt"
                    aria-label="standart (1 item)"
                    >standart</a
                  >
                  <a
                    href="#"
                    class="tag-cloud-link tag-link-27 tag-link-position-8"
                    style="font-size: 8pt"
                    aria-label="themeforest (1 item)"
                    >themeforest</a
                  >
                </div>
              </div>
              <div class="widget widget_popular_posts">
                <h4 class="widget-title">Popular Posts</h4>
                <div class="widget-body">
                  <ul class="posts-widget">
                    <li class="post">
                      <figure class="entry-media">
                        <a href="#"
                          ><img
                            src="https://klbtheme.com/machic/wp-content/uploads/2021/10/post-1-100x100.jpg"
                            alt="But I must explain to you how all this mistaken idea"
                        /></a>
                      </figure>
                      <div class="post-content">
                        <div class="entry-category">
                          <a href="#" rel="category tag">Watches</a>
                        </div>
                        <h2 class="entry-title">
                          <a
                            href="#"
                            title="But I must explain to you how all this mistaken idea"
                            >But I must explain to you how all this mistaken
                            idea</a
                          >
                        </h2>
                      </div>
                    </li>
                    <li class="post">
                      <figure class="entry-media">
                        <a href="#"
                          ><img
                            src="https://klbtheme.com/machic/wp-content/uploads/2021/10/post-2-100x100.jpg"
                            alt="The Problem With Typefaces on the Web"
                        /></a>
                      </figure>
                      <div class="post-content">
                        <div class="entry-category">
                          <a href="#/" rel="category tag">Camera</a>
                        </div>
                        <h2 class="entry-title">
                          <a
                            href="#"
                            title="The Problem With Typefaces on the Web"
                            >The Problem With Typefaces on the Web</a
                          >
                        </h2>
                      </div>
                    </li>
                    <li class="post">
                      <figure class="entry-media">
                        <a href="#"
                          ><img
                            src="https://klbtheme.com/machic/wp-content/uploads/2021/10/post-3-100x100.jpg"
                            alt="English Breakfast Tea With Tasty Donut Desserts"
                        /></a>
                      </figure>
                      <div class="post-content">
                        <div class="entry-category">
                          <a href="#" rel="category tag">Tablet</a>
                        </div>
                        <h2 class="entry-title">
                          <a
                            href="#"
                            title="English Breakfast Tea With Tasty Donut Desserts"
                            >English Breakfast Tea With Tasty Donut Desserts</a
                          >
                        </h2>
                      </div>
                    </li>
                  </ul>
                </div>
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
import axios from "axios";
export default {
  data: () => ({
    url: "http://baladiweb.bteamwebs.com/storage/",
    results: [],
  }),
  mounted() {
    axios
      // .get(import.meta.env.VITE_API_URL + "/api/web/blog")
      .get("http://baladiweb.bteamwebs.com/api/web/blog")
      .then((response) => {
        this.results = response.data.data;
      })
      .catch((error) => {});
  },
};
</script>
