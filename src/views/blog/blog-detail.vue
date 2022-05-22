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
            <div class="col col-12 col-lg-9 content-primary">
              <div class="single-post">
                <article
                  id="post-2117"
                  class="klb-article post-2117 post type-post status-publish format-standard has-post-thumbnail hentry category-watches tag-klbtheme tag-themeforest"
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
                      >
                      <!--
                      <img
                        :src="url + item.photo"
                        alt="But I must explain to you how all this mistaken idea"
                    /> -->
                     <img
                        src="http://baladiweb.bteamwebs.com/storage/images/blogs/1650282422_product-3-400x400.webp"
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
                <div class="post-comments">
                  <h5 class="entry-title">
                    2 thoughts on “But I must explain to you how all this
                    mistaken idea”
                  </h5>
                  <ol class="comment-list">
                    <li
                      class="comment byuser comment-author-sinan bypostauthor even thread-even depth-1"
                      id="comment-5"
                    >
                      <div
                        :data="comment"
                        :key="indcomments"
                        v-for="(comment, indcomments) in item.comments"
                        id="div-comment-5"
                        class="comment-body"
                      >
                        <div class="comment-avatar">
                          <div class="comment-author vcard">
                            <img
                              src="https://secure.gravatar.com/avatar/3384f98a21c5dce2051e8f5a20928b05?s=96&amp;d=mm&amp;r=g"
                              alt="admin"
                              class="avatar"
                            />
                          </div>
                        </div>

                        <div class="comment-content">
                          <div class="comment-meta">
                            <b class="fn"><a class="url">admin</a></b>
                            <div class="comment-metadata">
                              <time>October 11, 2021</time>
                            </div>
                          </div>

                          <div class="klb-post">
                            <p>
                              {{ comment.comment }}
                            </p>
                          </div>

                          <div class="reply">
                            <a
                              rel="nofollow"
                              class="comment-reply-link reply-btn"
                              href="#?replytocom=5#respond"
                              data-commentid="5"
                              data-postid="2117"
                              @click="isShow = !isShow"
                              data-belowelement="comment-5"
                              data-respondelement="respond"
                              data-replyto="Reply to admin"
                              aria-label="Reply to admin"
                              >Reply</a
                            >
                          </div>
                        </div>
                      </div>
                    </li>
                    <input type="hidden" value="1" v-bind="formdata1.blog_id" />
                    <input
                      type="hidden"
                      value="1"
                      v-bind="formdata1.comment_id"
                    />
                    <p
                      :class="{ hide: !isShow }"
                      class="comment-form-comment reply-comment"
                    >
                      <label for="comment"
                        >Reply
                        <span class="required" aria-hidden="true"
                          >*</span
                        ></label
                      >
                      <textarea
                        id="comment"
                        v-model="formdata1.comment"
                        cols="45"
                        rows="4"
                        maxlength="65525"
                        required="required"
                      ></textarea>
                    </p>
                    <p
                      v-if="errors"
                      class="alert alert-danger alert-dismissible fade show col-md-6 col-6"
                    >
                      {{ errors }}
                    </p>
                    <p class="form-submit">
                      <input
                        @click="PostReply()"
                        name="submit"
                        type="submit"
                        class="submit"
                        value="Post Reply"
                      />
                    </p>
                    <ul class="children">
                      <li class="comment odd alt depth-2" id="comment-6">
                        <div id="div-comment-6" class="comment-body">
                          <div class="comment-avatar">
                            <div class="comment-author vcard">
                              <img
                                src="https://secure.gravatar.com/avatar/b9d9bd0532ed8921f164c89995783e78?s=96&amp;d=mm&amp;r=g"
                                alt="Elliot Alderson"
                                class="avatar"
                              />
                            </div>
                          </div>
                          <div class="comment-content">
                            <div class="comment-meta">
                              <b class="fn"
                                ><a class="url">Elliot Alderson</a></b
                              >
                              <div class="comment-metadata">
                                <time>October 11, 2021</time>
                              </div>
                            </div>
                            <div class="klb-post">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus
                                commodo viverra maecenas accumsan lacus vel
                                facilisis.
                              </p>
                            </div>
                            <div class="reply">
                              <a
                                rel="nofollow"
                                class="comment-reply-link"
                                href="#?replytocom=6#respond"
                                data-commentid="6"
                                data-postid="2117"
                                data-belowelement="comment-6"
                                data-respondelement="respond"
                                data-replyto="Reply to Elliot Alderson"
                                aria-label="Reply to Elliot Alderson"
                                >Reply</a
                              >
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </ol>
                  <div class="post-comments-form">
                    <div id="respond" class="comment-respond">
                      <h3 id="reply-title" class="comment-reply-title">
                        Leave a Reply
                        <small
                          ><a
                            rel="nofollow"
                            id="cancel-comment-reply-link"
                            href="/machic/blog/but-i-must-explain-to-you-how-all-this-mistaken-idea/#respond"
                            style="display: none"
                            >Cancel reply</a
                          ></small
                        >
                      </h3>

                      <p class="comment-notes">
                        <span id="email-notes"
                          >Your email address will not be published.</span
                        >
                        <span class="required-field-message" aria-hidden="true"
                          >Required fields are marked
                          <span class="required" aria-hidden="true"
                            >*</span
                          ></span
                        >
                      </p>
                      <input
                        type="hidden"
                        value="1"
                        v-bind="formdata.blog_id"
                      />
                      <input
                        type="hidden"
                        value="1"
                        v-bind="formdata.customer_id"
                      />

                      <p class="comment-form-comment">
                        <label for="comment"
                          >Comment
                          <span class="required" aria-hidden="true"
                            >*</span
                          ></label
                        >
                        <textarea
                          id="comment"
                          v-model="formdata.comment"
                          cols="45"
                          rows="8"
                          maxlength="65525"
                          required="required"
                        ></textarea>
                      </p>
                      <p
                        v-if="errors"
                        class="alert alert-danger alert-dismissible fade show col-md-6 col-6"
                      >
                        {{ errors }}
                      </p>
                      <p class="form-submit">
                        <input
                          @click="PostComment()"
                          name="submit"
                          type="submit"
                          class="submit"
                          value="Post Comment"
                        />
                      </p>
                    </div>
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
                    action=""
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
                  <li class="cat-item cat-item-16"><a href="#">Camera</a></li>
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
                          <a href="#" rel="category tag">Camera</a>
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
              <div class="widget widget_media_image">
                <img
                  width="293"
                  height="587"
                  src="https://klbtheme.com/machic/wp-content/uploads/2021/10/widget-banner.jpg"
                  class="image wp-image-2119 attachment-full size-full"
                  alt=""
                  loading="lazy"
                  style="max-width: 100%; height: auto"
                  srcset="
                    https://klbtheme.com/machic/wp-content/uploads/2021/10/widget-banner.jpg         293w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/10/widget-banner-27x54.jpg    27w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/10/widget-banner-150x300.jpg 150w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/10/widget-banner-64x128.jpg   64w
                  "
                  sizes="(max-width: 293px) 100vw, 293px"
                />
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
    formdata: {
      blog_id: 1,
      customer_id: 1,
      comment: null,
    },
    errors: "",
    formdata1: {
      blog_id: 1,
      comment_id: 1,
      comment: null,
    },
    errors: "",
  }),
  mounted() {
    var id = this.$route.params.id;
    axios
      .get("http://baladiweb.bteamwebs.com/api/web/blogdetails/" + id)
      .then((response) => {
        this.results = response.data.data;
        console.log(this.results);
      })
      .catch((error) => {});
  },
  methods: {
    PostComment() {
      axios
        .post(
          "http://baladiweb.bteamwebs.com/api/web/addblogcomment",
          this.formdata
        )
        .then((response) => {
          if (response.data.status == 400) {
            this.errors = response.data.message;
          } else {
            this.errors = response.data.message;
          }
        });
    },
    PostReply() {
      axios
        .post(
          "http://baladiweb.bteamwebs.com/api/web/addcommentreply",
          this.formdata1
        )
        .then((response) => {
          // console.log(response.data);
          if (response.data.status == 400) {
            this.errors = response.data.message;
          } else {
            this.errors = response.data.message;
          }
        });
    },
  },
};
</script>
