<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content">
        <div class="container">
          <div class="single-product-wrapper">
            <nav class="woocommerce-breadcrumb">
              <ul>
                <li><a href="javascript:void(0)">Home</a></li>
                <li><a href="">Vegetables</a></li>
                <li>Organic Food with fresh quality</li>
              </ul>
            </nav>

            <div class="woocommerce-notices-wrapper"></div>
            <div
              id="product-521"
              class="
                product
                type-product
                post-521
                status-publish
                first
                instock
                product_cat-apple product_cat-cell-phones
                has-post-thumbnail
                sale
                featured
                shipping-taxable
                purchasable
                product-type-simple
              "
            >
              <div class="single-product-container">
                <div class="row">
                  <div class="col col-12 col-lg-6">
                    <div class="single-thumbnails default">
                      <div
                        class="
                          woocommerce-product-gallery
                          woocommerce-product-gallery--with-images
                          woocommerce-product-gallery--columns-7
                          images
                        "
                        data-columns="7"
                        style="
                          opacity: 1;
                          transition: opacity 0.25s ease-in-out 0s;
                        "
                      >
                        <div class="product-badges">
                          <span class="badge onsale">11%</span>
                        </div>
                        <div
                          class="flex-viewport"
                          style="
                            overflow: hidden;
                            position: relative;
                            height: 602px;
                          "
                        >
                          <div
                            class="card-carousel"
                            @mouseover="stopTimer"
                            @mouseleave="restartTimer"
                          >
                            <div
                              class="progressbar"
                              v-if="autoSlideInterval && showProgressBar"
                            >
                              <div :style="{ width: progressBar + '%' }"></div>
                            </div>
                            <div class="card-img">
                              <img
                                :src="currentImage"
                                alt=""
                                style="
                                  height: 600px !important;
                                  width: 600px !important;
                                "
                              />
                              <div class="actions">
                                <span @click="prevImage" class="prev">
                                  &#8249;
                                </span>
                                <span @click="nextImage" class="next">
                                  &#8250;
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <ol
                          class="
                            flex-control-nav flex-control-thumbs
                            owl-carousel owl-loaded owl-drag
                          "
                          id="product-thumbnails"
                        >
                          <div class="thumbnails">
                            <div
                              v-for="(image, index) in images"
                              :key="image.id"
                              :class="[
                                'thumbnail-image',
                                activeImage == index ? 'active' : '',
                              ]"
                              @click="activateImage(index)"
                            >
                              <img :src="image.thumb" />
                            </div>
                          </div>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div class="col col-12 col-lg-6">
                    <h1 class="product_title entry-title">
                      {{ results.product_name }}
                    </h1>
                    <div class="product-meta">
                      <div class="product-model">
                        <span>weight:</span>
                        {{ results.weight }}
                      </div>
                      <!-- product-model -->
                      <div class="sku-wrapper"></div>
                      <!-- sku-wrapper -->
                    </div>
                    <!-- product-meta -->

                    <div class="product-ratings">
                      <div class="product-rating">
                        <div
                          class="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span style="width: 100%"
                            >Rated <strong class="rating">5.00</strong> out of 5
                            based on <span class="rating">1</span> customer
                            rating</span
                          >
                        </div>
                        <div class="count-rating">
                          <a
                            href="javascript:void(0)"
                            class="woocommerce-review-link"
                            rel="nofollow"
                            ><span class="count">{{
                              results.allow_reviews
                            }}</span>
                            review</a
                          >
                        </div>
                      </div>
                    </div>

                    <div class="klb-single-stock">
                      <div class="product-stock in-stock">In Stock</div>
                    </div>
                    <div class="product-price">
                      <span class="price"
                        ><del
                          ><span class="woocommerce-Price-amount amount"
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >QAR </span
                              >{{ sub_products.previous_price }}</bdi
                            ></span
                          ></del
                        >
                        <ins
                          ><span class="woocommerce-Price-amount amount"
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >QAR </span
                              >{{ sub_products.regular_price }}</bdi
                            ></span
                          ></ins
                        ></span
                      >
                    </div>

                    <div class="product-price">
                      <div class="gap-2">
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="radio1"
                          autocomplete="off"
                        />
                        <label class="button2 btn-outline-dark" for="radio1"
                          >PCS</label
                        >
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="radio3"
                          autocomplete="off"
                        />
                        <label
                          class="button2 btn-outline-dark gaf-btton"
                          for="radio3"
                          >CTN</label
                        >
                      </div>
                    </div>
                    <div class="product-stock in-stock">In Stock</div>

                    <div class="product-info">
                      <div style="width: max-content" class="product-info-top">
                        <form
                          class="cart single-ajax"
                          action="javascript:void(0)"
                        >
                          <div class="quantity">
                            <label
                              class="screen-reader-text"
                              for="quantity_61f3794abda55"
                              >Fresh Vegetables</label
                            >
                            <div
                              class="quantity-button minus"
                              @click="decrement"
                            ></div>
                            <input
                              type="text"
                              id="quantity_61f3794abda55"
                              class="input-text qty text"
                              step="1"
                              min="1"
                              max="41"
                              name="quantity"
                              :value="quantity"
                              title="Qty"
                              size="4"
                              placeholder=""
                              inputmode="numeric"
                            />
                            <div
                              class="quantity-button plus"
                              @click="increment"
                            ></div>
                          </div>

                          <button
                            name="add-to-cart"
                            class="
                              button button-primary
                              add_to_cart_button
                              single_add_to_cart_button
                              button
                              alt
                            "
                            @click="
                              cartStore.addItems(this.quantity, this.results)
                            "
                          >
                            <span>Add to cart</span>
                          </button>
                          <router-link
                            :to="'/' + langCode + '/checkout'"
                            name="add-to-cart"
                            class="
                              button button-primary
                              add_to_cart_button
                              single_add_to_cart_button
                              button
                              alt
                            "
                          >
                            <span>Buy Now</span>
                          </router-link>

                          <!-- <div
                            class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart"
                            data-product_id="521"
                          >
                            <div class="tinv-wishlist-clear"></div>
                            <a
                              role="button"
                              tabindex="0"
                              aria-label="Add to Wishlist"
                              class="tinvwl_add_to_wishlist_button tinvwl-icon-heart tinvwl-position-after"
                              data-tinv-wl-list="[]"
                              data-tinv-wl-product="521"
                              data-tinv-wl-productvariation="0"
                              data-tinv-wl-productvariations="[0]"
                              data-tinv-wl-producttype="simple"
                              data-tinv-wl-action="add"
                              ><span class="tinvwl_add_to_wishlist-text"
                                >Add to Wishlist</span
                              ></a
                            >
                            <div class="tinv-wishlist-clear"></div>
                            <div class="tinvwl-tooltip">Add to Wishlist</div>
                          </div> -->
                        </form>
                        <div class="custom-wish-style">
                          <a :onclick="clickmodal" href="javascript::void(0)"
                            ><i class="fa fa-heart" aria-hidden="true"></i
                            ><span class="tinvwl_add_to_wishlist-text"
                              >Add to Wishlist</span
                            ></a
                          >
                          <div class="tinv-wishlist-clear"></div>
                          <div class="tinvwl-tooltip-custom">
                            Add to Wishlist
                          </div>
                        </div>
                        <div class="product-actions">
                          <div
                            class="
                              tinv-wraper
                              woocommerce
                              tinv-wishlist
                              tinvwl-shortcode-add-to-cart
                            "
                            data-product_id="521"
                          >
                            <div class="tinv-wishlist-clear"></div>
                            <a
                              role="button"
                              tabindex="0"
                              aria-label="Add to Wishlist"
                              class="
                                tinvwl_add_to_wishlist_button
                                tinvwl-icon-heart
                                tinvwl-position-after
                              "
                              data-tinv-wl-list="[]"
                              data-tinv-wl-product="521"
                              data-tinv-wl-productvariation="0"
                              data-tinv-wl-productvariations="[0]"
                              data-tinv-wl-producttype="simple"
                              data-tinv-wl-action="add"
                              ><span class="tinvwl_add_to_wishlist-text"
                                >Add to Wishlist</span
                              ></a
                            >
                            <div class="tinv-wishlist-clear"></div>
                            <div class="tinvwl-tooltip">Add to Wishlist</div>
                          </div>
                          <!-- <a href="#" class="woosc-btn woosc-btn-521" data-id="521">Compare</a> -->
                        </div>
                      </div>
                    </div>
                    <div class="people-have product-message warning">
                      <i class="klbth-icon-shopping-bag-3"></i
                      ><strong>Other people want this. </strong>29 people have
                      this in their carts right now.
                    </div>
                    <div class="product_meta product-categories">
                      <span class="sku_wrapper"
                        >SKU: <span class="sku">BE45VGRT</span></span
                      >

                      <span class="posted_in"
                        >Categories: <a href="#" rel="tag">Vegetables</a>,
                        <a href="#" rel="tag">Fruits</a></span
                      >
                    </div>
                    <div class="social-share site-social colored">
                      <ul class="social-container">
                        <li>
                          <a
                            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fklbtheme.com%2FBaladi%2Fproduct%2Fapple-10-9-inch-ipad-air-wi-fi-cellular-64gb%2F"
                            class="facebook"
                            target="_blank"
                            ><i class="klbth-icon-facebook"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/intent/tweet?text=Apple%2010.9-inch%20iPad%20Air%20Wi-Fi%20Cellular%2064GB%20%E2%80%93%20Baladi%20%E2%80%93%20Electronics%20Store%20eCommerce%20Theme&amp;url=https%3A%2F%2Fklbtheme.com%2FBaladi%2Fproduct%2Fapple-10-9-inch-ipad-air-wi-fi-cellular-64gb%2F&amp;via="
                            class="twitter"
                            target="_blank"
                            ><i class="klbth-icon-twitter"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fklbtheme.com%2FBaladi%2Fproduct%2Fapple-10-9-inch-ipad-air-wi-fi-cellular-64gb%2F&amp;media=https%3A%2F%2Fklbtheme.com%2FBaladi%2Fwp-content%2Fuploads%2F2021%2F09%2Flogo-light.png&amp;description=Apple%2010.9-inch%20iPad%20Air%20Wi-Fi%20Cellular%2064GB%20%E2%80%93%20Baladi%20%E2%80%93%20Electronics%20Store%20eCommerce%20Theme"
                            class="pinterest"
                            target="_blank"
                            ><i class="klbth-icon-pinterest"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="http://www.linkedin.com/shareArticle?mini=true&amp;ro=true&amp;title=Apple%2010.9-inch%20iPad%20Air%20Wi-Fi%20Cellular%2064GB%20%E2%80%93%20Baladi%20%E2%80%93%20Electronics%20Store%20eCommerce%20Theme&amp;url=https%3A%2F%2Fklbtheme.com%2FBaladi%2Fproduct%2Fapple-10-9-inch-ipad-air-wi-fi-cellular-64gb%2F&amp;summary=Apple%2010.9-inch%20iPad%20Air%20Wi-Fi%20Cellular%2064GB%20%E2%80%93%20Baladi%20%E2%80%93%20Electronics%20Store%20eCommerce%20Theme&amp;source=Apple%2010.9-inch%20iPad%20Air%20Wi-Fi%20Cellular%2064GB%20%E2%80%93%20Baladi%20%E2%80%93%20Electronics%20Store%20eCommerce%20Theme&amp;armin=armin"
                            class="linkedin"
                            target="_blank"
                            ><i class="klbth-icon-linkedin"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://wa.me/?text=https%3A%2F%2Fklbtheme.com%2FBaladi%2Fproduct%2Fapple-10-9-inch-ipad-air-wi-fi-cellular-64gb%2F"
                            class="whatsapp"
                            target="_blank"
                            ><i class="klbth-icon-whatsapp"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="
                        product-extra-detail
                        woocommerce-product-details__short-description
                      "
                    >
                      <!-- <ul>
                                            <li class="SpecHighlights-list-label">Screen Size 10.9 in</li>
                                            <li>Operating System Apple iOS</li>
                                            <li>Product Length 9.74 in</li>
                                        </ul> -->
                      <p>&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="woocommerce-tabs wc-tabs-wrapper">
                <ul class="tabs wc-tabs" role="tablist">
                  <li
                    class="description_tab"
                    :class="description"
                    id="tab-title-description"
                    role="tab"
                    aria-controls="tab-description"
                  >
                    <a
                      href="#tab-description"
                      class="nav-link"
                      @click="clickdescription"
                      data-bs-toggle="tab"
                    >
                      Description
                    </a>
                  </li>
                  <li
                    class="specification_tab"
                    :class="specification"
                    id="tab-title-specification"
                    role="tab"
                    aria-controls="tab-specification"
                  >
                    <a
                      href="#tab-specification"
                      class="nav-link"
                      @click="clickspecification"
                      data-bs-toggle="tab"
                    >
                      Specification
                    </a>
                  </li>
                  <li
                    class="reviews_tab"
                    :class="reviews"
                    id="tab-title-reviews"
                    role="tab"
                    aria-controls="tab-reviews"
                  >
                    <a
                      href="#tab-reviews"
                      class="nav-link"
                      @click="clickreviews"
                      data-bs-toggle="tab"
                    >
                      Reviews (1)
                    </a>
                  </li>
                </ul>

                <div
                  class="
                    woocommerce-Tabs-panel woocommerce-Tabs-panel--description
                    panel
                    entry-content
                    wc-tab
                    tab-pane
                    fade
                  "
                  :class="showdescription"
                  id="tab-description"
                  role="tabpanel"
                  aria-labelledby="tab-title-description"
                >
                  <h2>Description</h2>

                  <h6>{{ results.short_description }}</h6>

                  <p>{{ results.description }}</p>
                  <!-- <p>Key Features:</p>
                  <ul>
                    <li>slim body with metal cover</li>
                    <li>
                      latest Intel Core i5-1135G7 processor (4 cores / 8
                      threads)
                    </li>
                    <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                    <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
                    <li>backlit keyboard, touchpad with gesture support</li>
                  </ul> -->
                  <!-- <p>Key Features:</p> -->
                  <!-- <ul>
                                    <li>slim body with metal cover</li>
                                    <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                                    <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                                    <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
                                    <li>backlit keyboard, touchpad with gesture support</li>
                                </ul> -->
                </div>
                <div
                  class="
                    woocommerce-Tabs-panel woocommerce-Tabs-panel--specification
                    panel
                    entry-content
                    wc-tab
                    tab-pane
                    fade
                  "
                  :class="showspecification"
                  id="tab-specification"
                  role="tabpanel"
                  aria-labelledby="tab-title-specification"
                >
                  <div class="specification-content">
                    <h2>General</h2>
                    <!-- <table>
                                        <tbody>
                                            <tr>
                                                <td>Alternate names</td>
                                                <td>iPad 5</td>
                                            </tr>
                                            <tr>
                                                <td>Brand</td>
                                                <td>Apple</td>
                                            </tr>
                                            <tr>
                                                <td>Model</td>
                                                <td>iPad Air Wi-Fi + Cellular</td>
                                            </tr>
                                            <tr>
                                                <td>Release date</td>
                                                <td>September 2013</td>
                                            </tr>
                                            <tr>
                                                <td>Dimensions (mm)</td>
                                                <td>240.00 x 169.50 x 7.50</td>
                                            </tr>
                                            <tr>
                                                <td>Weight (g)</td>
                                                <td>478.00</td>
                                            </tr>
                                            <tr>
                                                <td>Battery capacity (mAh)</td>
                                                <td>8820</td>
                                            </tr>
                                            <tr>
                                                <td>Removable battery</td>
                                                <td>No</td>
                                            </tr>
                                        </tbody>
                                    </table> -->
                    <h2>Display</h2>
                    <!-- <table>
                                        <tbody>
                                            <tr>
                                                <td>Screen size (inches)</td>
                                                <td>9.70</td>
                                            </tr>
                                            <tr>
                                                <td>Touchscreen</td>
                                                <td>No</td>
                                            </tr>
                                            <tr>
                                                <td>Resolution</td>
                                                <td>1536x2048 pixels</td>
                                            </tr>
                                            <tr>
                                                <td>Pixels per inch (PPI)</td>
                                                <td>264</td>
                                            </tr>
                                        </tbody>
                                    </table> -->
                    <h2>Hardware</h2>
                    <table>
                      <tbody>
                        <tr>
                          <td>Processor</td>
                          <td>1.3GHz one-core</td>
                        </tr>
                        <tr>
                          <td>RAM</td>
                          <td>1GB</td>
                        </tr>
                        <tr>
                          <td>Internal storage</td>
                          <td>16GB</td>
                        </tr>
                        <tr>
                          <td>Expandable storage</td>
                          <td>No</td>
                        </tr>
                        <tr>
                          <td>Expandable storage type</td>
                          <td>microSD</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Camera</h2>
                    <table>
                      <tbody>
                        <tr>
                          <td>Rear camera</td>
                          <td>5-megapixel</td>
                        </tr>
                        <tr>
                          <td>Front camera</td>
                          <td>1.2-megapixel</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Software</h2>
                    <table>
                      <tbody>
                        <tr>
                          <td>Operating system</td>
                          <td>iOS 7</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  class="
                    woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews
                    panel
                    entry-content
                    wc-tab
                    tab-pane
                    fade
                  "
                  :class="showsreviews"
                  id="tab-reviews"
                  role="tabpanel"
                  aria-labelledby="tab-title-reviews"
                >
                  <div id="reviews" class="woocommerce-Reviews">
                    <div id="comments">
                      <h2 class="woocommerce-Reviews-title">
                        1 review for <span>Vegetables</span>
                      </h2>

                      <ol class="commentlist">
                        <li
                          class="
                            review
                            byuser
                            comment-author-sinan
                            bypostauthor
                            even
                            thread-even
                            depth-1
                          "
                          id="li-comment-29"
                        >
                          <div id="comment-29" class="comment_container">
                            <img
                              alt=""
                              src="https://klbtheme.com/machic/wp-content/uploads/2021/09/a523-400x400.jpg"
                              srcset="
                                https://secure.gravatar.com/avatar/3384f98a21c5dce2051e8f5a20928b05?s=120&amp;d=mm&amp;r=g 2x
                              "
                              class="avatar avatar-60 photo"
                              height="60"
                              width="60"
                              loading="lazy"
                            />
                            <div class="comment-text">
                              <div
                                class="star-rating"
                                role="img"
                                aria-label="Rated 5 out of 5"
                              >
                                <span style="width: 100%"
                                  >Rated <strong class="rating">5</strong> out
                                  of 5</span
                                >
                              </div>
                              <p class="meta">
                                <strong class="woocommerce-review__author"
                                  >admin
                                </strong>
                                <span class="woocommerce-review__dash">–</span>
                                <time
                                  class="woocommerce-review__published-date"
                                  datetime="2021-09-10T07:56:19+00:00"
                                  >September 10, 2021</time
                                >
                              </p>

                              <div class="description">
                                <p>
                                  Sed perspiciatis unde omnis iste natus error
                                  sit voluptatem accusantium doloremque
                                  laudantium.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <!-- #comment-## -->
                      </ol>
                    </div>

                    <div id="review_form_wrapper">
                      <div id="review_form">
                        <div id="respond" class="comment-respond">
                          <span id="reply-title" class="comment-reply-title"
                            >Add a review
                            <small
                              ><a
                                rel="nofollow"
                                id="cancel-comment-reply-link"
                                href="#respond"
                                style="display: none"
                                >Cancel reply</a
                              ></small
                            ></span
                          >
                          <form
                            action="javascript:void(0)"
                            method="post"
                            id="commentform"
                            class="comment-form"
                          >
                            <p class="comment-notes">
                              <span id="email-notes"
                                >Your email address will not be published.</span
                              >
                              Required fields are marked
                              <span class="required">*</span>
                            </p>
                            <div class="comment-form-rating">
                              <label for="rating"
                                >Your rating&nbsp;<span class="required"
                                  >*</span
                                ></label
                              >
                              <p class="stars">
                                <span>
                                  <a class="star-1" href="#">1</a>
                                  <a class="star-2" href="#">2</a>
                                  <a class="star-3" href="#">3</a>
                                  <a class="star-4" href="#">4</a>
                                  <a class="star-5" href="#">5</a>
                                </span>
                              </p>
                              <select
                                name="rating"
                                id="rating"
                                required=""
                                style="display: none"
                              >
                                <option value="">Rate…</option>
                                <option value="5">Perfect</option>
                                <option value="4">Good</option>
                                <option value="3">Average</option>
                                <option value="2">Not that bad</option>
                                <option value="1">Very poor</option>
                              </select>
                            </div>
                            <p class="comment-form-comment">
                              <label for="comment"
                                >Your review&nbsp;<span class="required"
                                  >*</span
                                ></label
                              ><textarea
                                id="comment"
                                name="comment"
                                cols="45"
                                rows="8"
                                required=""
                              ></textarea>
                            </p>
                            <p class="comment-form-author">
                              <label for="author"
                                >Name&nbsp;<span class="required"
                                  >*</span
                                ></label
                              ><input
                                id="author"
                                name="author"
                                type="text"
                                value=""
                                size="30"
                                required=""
                              />
                            </p>
                            <p class="comment-form-email">
                              <label for="email"
                                >Email&nbsp;<span class="required"
                                  >*</span
                                ></label
                              ><input
                                id="email"
                                name="email"
                                type="email"
                                value=""
                                size="30"
                                required=""
                              />
                            </p>
                            <p class="comment-form-cookies-consent">
                              <input
                                id="wp-comment-cookies-consent"
                                name="wp-comment-cookies-consent"
                                type="checkbox"
                                value="yes"
                              />
                              <label for="wp-comment-cookies-consent"
                                >Save my name, email, and website in this
                                browser for the next time I comment.</label
                              >
                            </p>
                            <p class="form-submit">
                              <input
                                name="submit"
                                type="submit"
                                id="submit"
                                class="submit"
                                value="Submit"
                              />
                              <input
                                type="hidden"
                                name="comment_post_ID"
                                value="521"
                                id="comment_post_ID"
                              />
                              <input
                                type="hidden"
                                name="comment_parent"
                                id="comment_parent"
                                value="0"
                              />
                            </p>
                          </form>
                        </div>
                        <!-- #respond -->
                      </div>
                    </div>

                    <div class="clear"></div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <section
                    class="
                      elementor-section
                      elementor-top-section
                      elementor-element
                      elementor-element-55ef817
                      elementor-section-boxed
                      elementor-section-height-default
                      elementor-section-height-default
                    "
                    data-id="55ef817"
                    data-element_type="section"
                  >
                    <div
                      class="elementor-container elementor-column-gap-extended"
                    >
                      <div
                        class="
                          elementor-column
                          elementor-col-100
                          elementor-top-column
                          elementor-element
                          elementor-element-64c48a6
                        "
                        data-id="64c48a6"
                        data-element_type="column"
                      >
                        <div
                          class="
                            elementor-widget-wrap elementor-element-populated
                          "
                        >
                          <div
                            class="
                              elementor-element
                              elementor-element-57bc36c
                              elementor-widget
                              elementor-widget-machic-product-grid
                            "
                            data-id="57bc36c"
                            data-element_type="widget"
                            data-widget_type="machic-product-grid.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="site-module products-module">
                                <div class="module-header">
                                  <h4 class="entry-title">Related Products</h4>
                                  <div class="product-countdown"></div>
                                  <a href="" class="btn link"
                                    >View All
                                    <i class="klbth-icon-right-arrow"></i
                                  ></a>
                                </div>
                                <div class="module-wrapper">
                                  <div
                                    class="products column-5 mobile-2 total-5"
                                  >
                                    <div
                                      class="product custom-hover"
                                      v-for="n in 5"
                                    >
                                      <div
                                        class="product-wrapper product-type-3"
                                      >
                                        <div class="product-content">
                                          <div class="thumbnail-wrapper">
                                            <div class="product-badges">
                                              <span class="badge onsale"
                                                >11%</span
                                              >
                                            </div>
                                            <a href="#">
                                              <div
                                                class="product-card"
                                                style="position: relative"
                                              >
                                                <div
                                                  class="
                                                    hover-slider-images-toggler
                                                  "
                                                  style="
                                                    position: absolute;
                                                    inset: 0px;
                                                    display: flex;
                                                  "
                                                >
                                                  <div
                                                    class="
                                                      hover-slider-toggle-pane
                                                    "
                                                    data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/a523-400x400.jpg"
                                                    data-hover-slider-i="1"
                                                    style="flex-grow: 1"
                                                  ></div>
                                                  <div
                                                    class="
                                                      hover-slider-toggle-pane
                                                    "
                                                    data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/a523-400x400.jpg"
                                                    data-hover-slider-i="2"
                                                    style="flex-grow: 1"
                                                  ></div>
                                                  <div
                                                    class="
                                                      hover-slider-toggle-pane
                                                    "
                                                    data-hover-slider-image="https://klbtheme.com/machic/wp-content/uploads/2021/09/a523-400x400.jpg"
                                                    data-hover-slider-i="3"
                                                    style="flex-grow: 1"
                                                  ></div>
                                                </div>
                                                <div
                                                  class="hover-slider-indicator"
                                                >
                                                  <div
                                                    data-hover-slider-i="1"
                                                    class="
                                                      hover-slider-indicator-dot
                                                    "
                                                  ></div>
                                                  <div
                                                    data-hover-slider-i="2"
                                                    class="
                                                      hover-slider-indicator-dot
                                                      active
                                                    "
                                                  ></div>
                                                  <div
                                                    data-hover-slider-i="3"
                                                    class="
                                                      hover-slider-indicator-dot
                                                    "
                                                  ></div>
                                                </div>
                                                <img
                                                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/a523-400x400.jpg"
                                                  class="hover-slider-init"
                                                  data-options="undefined"
                                                />
                                              </div>
                                            </a>
                                            <div class="product-buttons">
                                              <div
                                                class="
                                                  tinv-wraper
                                                  woocommerce
                                                  tinv-wishlist
                                                  tinvwl-shortcode-add-to-cart
                                                "
                                                data-product_id="521"
                                              >
                                                <div
                                                  class="tinv-wishlist-clear"
                                                ></div>
                                                <a
                                                  :onclick="clickmodal"
                                                  role="button"
                                                  tabindex="0"
                                                  aria-label="Add to Wishlist"
                                                  class="
                                                    d-none
                                                    tinvwl-position-after
                                                  "
                                                  data-tinv-wl-list="[]"
                                                  data-tinv-wl-product="478"
                                                  data-tinv-wl-productvariation="0"
                                                  data-tinv-wl-productvariations="[0]"
                                                  data-tinv-wl-producttype="simple"
                                                  data-tinv-wl-action="add"
                                                  ><span
                                                    class="
                                                      tinvwl_add_to_wishlist-text
                                                    "
                                                    >Add to Wishlist</span
                                                  ></a
                                                >
                                                <a
                                                  :onclick="clickmodal"
                                                  href="javascript::void(0)"
                                                  ><i
                                                    class="fa fa-heart"
                                                    aria-hidden="true"
                                                  ></i
                                                  ><span
                                                    class="
                                                      tinvwl_add_to_wishlist-text
                                                    "
                                                    >Add to Wishlist</span
                                                  ></a
                                                >
                                                <div
                                                  class="tinv-wishlist-clear"
                                                ></div>
                                                <div class="tinvwl-tooltip">
                                                  Add to Wishlist
                                                </div>
                                              </div>
                                              <a
                                                href="javascript:void(0)"
                                                class="most-comments"
                                                ><img
                                                  src="https://klbtheme.com/machic/wp-content/themes/machic/assets/images/featured.png"
                                                  alt="featured" /></a
                                              ><a
                                                href="javascript::void(0)"
                                                class="
                                                  woosc-btn
                                                  woosc-btn-521
                                                  woosc-btn-added
                                                  woosc-added
                                                "
                                                :onclick="clickcomparemodal"
                                                data-id="521"
                                                >Compare</a
                                              ><span
                                                :onclick="clickbigmodal"
                                                class="
                                                  detail-bnt
                                                  quickview
                                                  animated
                                                "
                                                ><i
                                                  class="klbth-icon-eye-empty"
                                                ></i
                                              ></span>
                                            </div>
                                            <!-- product-buttons -->
                                          </div>
                                          <!-- thumbnail-wrapper -->
                                          <div class="content-wrapper">
                                            <h3 class="product-title">
                                              <a href=""
                                                >Fresh vegetables and organic</a
                                              >
                                            </h3>
                                            <div class="product-rating">
                                              <div
                                                class="star-rating"
                                                role="img"
                                                aria-label="Rated 5.00 out of 5"
                                              >
                                                <span style="width: 100%"
                                                  >Rated
                                                  <strong class="rating"
                                                    >5.00</strong
                                                  >
                                                  out of 5</span
                                                >
                                              </div>
                                              <div class="count-rating">
                                                1
                                                <span class="rating-text"
                                                  >Ratings</span
                                                >
                                              </div>
                                            </div>
                                            <span class="price"
                                              ><del aria-hidden="true"
                                                ><span
                                                  class="
                                                    woocommerce-Price-amount
                                                    amount
                                                  "
                                                  ><bdi
                                                    ><span
                                                      class="
                                                        woocommerce-Price-currencySymbol
                                                      "
                                                      >QAR </span
                                                    >699.99</bdi
                                                  ></span
                                                ></del
                                              >
                                              <ins
                                                ><span
                                                  class="
                                                    woocommerce-Price-amount
                                                    amount
                                                  "
                                                  ><bdi
                                                    ><span
                                                      class="
                                                        woocommerce-Price-currencySymbol
                                                      "
                                                      >QAR </span
                                                    >629.99</bdi
                                                  ></span
                                                ></ins
                                              ></span
                                            >
                                            <!-- price -->

                                            <!-- product-meta -->
                                          </div>
                                          <!-- content-wrapper -->
                                        </div>
                                        <!-- product-content -->
                                        <div class="product-footer">
                                          <div class="product-footer-buttons">
                                            <a
                                              href="javascript:void(0)"
                                              data-quantity="1"
                                              class="
                                                button
                                                product_type_simple
                                                add_to_cart_button
                                                ajax_add_to_cart
                                              "
                                              data-product_id="521"
                                              data-product_sku="BE45VGRT"
                                              aria-label="Add “Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB” to your cart"
                                              rel="nofollow"
                                              ><i class="klbth-icon-shop-1"></i>
                                              Add to cart</a
                                            >
                                          </div>
                                          <!-- product-footer-buttons -->
                                          <div class="product-footer-details">
                                            <ul>
                                              <li
                                                class="
                                                  SpecHighlights-list-label
                                                "
                                              >
                                                Vegetables
                                              </li>
                                              <li>Fresh</li>
                                              <li>2 kg</li>
                                            </ul>
                                            &nbsp;
                                          </div>
                                        </div>
                                        <!-- product-footer -->
                                      </div>
                                      <!-- product-wrapper -->
                                      <div
                                        class="product-content-fade"
                                        style="margin-bottom: -177px"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- site-content -->

    <div
      id="wishlist"
      :class="showmodal"
      style="display: none"
      :style="showmodalstyle"
      class="tinv-wishlist"
    >
      <div class="tinvwl_added_to_wishlist tinv-modal tinv-modal-open">
        <div class="tinv-overlay"></div>
        <div class="tinv-table">
          <div class="tinv-cell">
            <div class="tinv-modal-inner">
              <i class="icon_big_heart_check"></i>
              <div class="tinv-txt">
                Apple iPhone 11 64GB Yellow Fully Unlocked added to Wishlist
              </div>
              <div class="tinvwl-buttons-group tinv-wishlist-clear">
                <button>
                  <router-link
                    :to="'/' + langCode + '/wishlist'"
                    class="button tinvwl_button_view tinvwl-btn-onclick"
                  >
                    <i class="ftinvwl ftinvwl-heart-o"></i>View
                    Wishlist</router-link
                  >
                </button>

                <button
                  @click="closemodal"
                  class="button tinvwl_button_close"
                  type="button"
                >
                  <i class="ftinvwl ftinvwl-times"></i>Close
                </button>
              </div>
              <div class="tinv-wishlist-clear"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="display: none"
      :class="showbigmodal"
      :style="showbigmodalstyle"
      id="myDIV"
    >
      <div class="mfp-bg mfp-ready"></div>
      <div class="mfp-wrap mfp-auto-cursor mfp-ready" tabindex="-1">
        <div class="mfp-container mfp-s-ready">
          <div class="mfp-content">
            <div
              class="
                quickview-product
                single-product-wrapper
                product
                white-popup
              "
            >
              <div class="quick-product-wrapper single-product-container">
                <button
                  @click="closebigmodal"
                  title="Close (Esc)"
                  type="button"
                  class="mfp-close"
                >
                  ×
                </button>
                <div class="row">
                  <div class="col col-12 col-lg-6">
                    <div class="single-thumbnails default">
                      <div class="woocommerce-product-gallery">
                        <div class="images-wrapper">
                          <div
                            id="product-images"
                            class="
                              swiper-container
                              swiper-container-initialized
                              swiper-container-horizontal
                              swiper-container-pointer-events
                              swiper-container-autoheight
                              swiper-container-rtl
                              slider-loaded
                            "
                            data-effect="slide"
                            data-direction="horizontal"
                            data-loop="false"
                            data-speed="1000"
                            data-spacebetween="0"
                            data-autoplay="false"
                            data-autospeed="300"
                            data-items="1"
                            data-mobileitems="1"
                            data-tabletitems="1"
                          >
                            <div
                              class="swiper-wrapper"
                              id="swiper-wrapper-39f31b07e93eaefa"
                              aria-live="polite"
                              style="
                                height: 455px;
                                transform: translate3d(0px, 0px, 0px);
                              "
                            >
                              <div
                                class="card-carousel"
                                @mouseover="stopTimer"
                                @mouseleave="restartTimer"
                              >
                                <div
                                  class="progressbar"
                                  v-if="autoSlideInterval && showProgressBar"
                                >
                                  <div
                                    :style="{ width: progressBar + '%' }"
                                  ></div>
                                </div>
                                <div class="card-img">
                                  <img
                                    :src="currentImage"
                                    alt=""
                                    style="
                                      height: 450px !important;
                                      width: 450px !important;
                                    "
                                  />
                                  <div class="actions">
                                    <span @click="prevImage" class="prev">
                                      &#8249;
                                    </span>
                                    <span @click="nextImage" class="next">
                                      &#8250;
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- product-images -->
                        </div>
                        <!-- images-wrapper -->
                        <div class="thumbnails-wrapper">
                          <div
                            id="product-thumbnails"
                            class="
                              swiper-container
                              swiper-container-initialized
                              swiper-container-horizontal
                              swiper-container-pointer-events
                              swiper-container-free-mode
                              swiper-container-rtl
                              swiper-container-thumbs
                              slider-loaded
                            "
                            data-effect="slide"
                            data-direction="horizontal"
                            data-loop="false"
                            data-speed="1000"
                            data-spacebetween="5"
                            data-autoplay="false"
                            data-autospeed="300"
                            data-items="4"
                            data-mobileitems="1"
                            data-tabletitems="1"
                          >
                            <div
                              class="swiper-wrapper"
                              id="swiper-wrapper-8e71d9468d4e35e1"
                              aria-live="polite"
                              style="transform: translate3d(0px, 0px, 0px)"
                            >
                              <div class="thumbnails">
                                <div
                                  v-for="(image, index) in images"
                                  :key="image.id"
                                  :class="[
                                    'thumbnail-image',
                                    activeImage == index ? 'active' : '',
                                  ]"
                                  @click="activateImage(index)"
                                >
                                  <img :src="image.thumb" />
                                </div>
                              </div>
                              <!-- swiper-slide -->
                            </div>
                            <!-- swiper-wrapper --><span
                              class="swiper-notification"
                              aria-live="assertive"
                              aria-atomic="true"
                            ></span
                            ><span
                              class="swiper-notification"
                              aria-live="assertive"
                              aria-atomic="true"
                            ></span
                            ><span
                              class="swiper-notification"
                              aria-live="assertive"
                              aria-atomic="true"
                            ></span>
                          </div>
                          <!-- product-thumbnails -->
                        </div>
                        <!-- thumbnails-wrapper -->
                      </div>
                      <!-- woocommerce-product-gallery -->
                    </div>
                    <!-- single-thumbnails -->
                  </div>
                  <!-- col -->
                  <div class="col col-12 col-lg-6">
                    <h1 class="product_title entry-title">
                      Cubitt Smart Watch CT2S Waterproof Fitness Tracker
                    </h1>
                    <div class="product-meta">
                      <div class="product-model">
                        <span>Model:</span>
                        A248458
                      </div>
                      <!-- product-model -->
                      <div class="sku-wrapper">
                        <span>SKU:</span>
                        <span class="sku">KM45VGRT</span>
                      </div>
                      <!-- sku-wrapper -->
                    </div>
                    <!-- product-meta -->

                    <div class="product-ratings">
                      <div class="product-rating">
                        <div
                          class="star-rating"
                          role="img"
                          aria-label="Rated 3.00 out of 5"
                        >
                          <span style="width: 60%"
                            >Rated <strong class="rating">3.00</strong> out of 5
                            based on <span class="rating">1</span> customer
                            rating</span
                          >
                        </div>
                        <div class="count-rating">
                          <a
                            href="#reviews"
                            class="woocommerce-review-link"
                            rel="nofollow"
                            ><span class="count">1</span> review</a
                          >
                        </div>
                      </div>
                    </div>

                    <div class="klb-single-stock">
                      <div class="product-stock in-stock">In Stock</div>
                    </div>
                    <div class="product-price">
                      <span class="price"
                        ><del
                          ><span class="woocommerce-Price-amount amount"
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >$</span
                              >95.00</bdi
                            ></span
                          ></del
                        >
                        <ins
                          ><span class="woocommerce-Price-amount amount"
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >$</span
                              >65.00</bdi
                            ></span
                          ></ins
                        ></span
                      >
                    </div>
                    <div class="product-stock in-stock">In Stock</div>

                    <div class="product-info">
                      <div class="product-info-top">
                        <form
                          class="cart single-ajax"
                          action="javascript:void(0)"
                          method="post"
                          enctype="multipart/form-data"
                        >
                          <div class="quantity">
                            <label
                              class="screen-reader-text"
                              for="quantity_61f6cbce294fd"
                              >Cubitt Smart Watch CT2S Waterproof Fitness
                              Tracker quantity</label
                            >
                            <div
                              class="quantity-button minus"
                              @click="decrement"
                            ></div>
                            <input
                              type="text"
                              id="quantity_61f6cbce294fd"
                              class="input-text qty text"
                              step="1"
                              min="1"
                              max="56"
                              name="quantity"
                              :value="quantity"
                              title="Qty"
                              size="4"
                              placeholder=""
                              inputmode="numeric"
                            />
                            <div
                              class="quantity-button plus"
                              @click="increment"
                            ></div>
                          </div>

                          <button
                            type="submit"
                            name="add-to-cart"
                            value="408"
                            class="
                              button button-primary
                              add_to_cart_button
                              single_add_to_cart_button
                              button
                              alt
                            "
                          >
                            <span>Add to cart</span>
                          </button>
                          <router-link
                            :to="'/' + langCode + '/checkout'"
                            name="add-to-cart"
                            value="408"
                            class="
                              button button-primary
                              add_to_cart_button
                              single_add_to_cart_button
                              button
                              alt
                            "
                          >
                            <span>Buy Now</span>
                          </router-link>

                          <div
                            class="
                              tinv-wraper
                              woocommerce
                              tinv-wishlist
                              tinvwl-after-add-to-cart
                            "
                            data-product_id="408"
                          >
                            <div class="tinv-wishlist-clear"></div>
                            <div class="tinvwl-tooltip">Add to Wishlist</div>
                          </div>
                        </form>

                        <div class="product-actions">
                          <div class="custom-wish-style">
                            <a :onclick="clickmodal" href="javascript::void(0)"
                              ><i class="fa fa-heart" aria-hidden="true"></i
                              ><span class="tinvwl_add_to_wishlist-text"
                                >Add to Wishlist</span
                              ></a
                            >
                            <div
                              class="tinvwl-tooltip-custom"
                              style="margin-left: 7px"
                            >
                              Add to Wishlist
                            </div>
                          </div>
                          <a
                            href="#"
                            class="woosc-btn woosc-btn-408"
                            data-id="408"
                            >Compare</a
                          >
                        </div>
                      </div>

                      <div class="product-info-bottom">
                        <div class="">
                          <div class="social-share site-social colored mt-0">
                            <ul class="social-container">
                              <li>
                                <a href="" class="facebook" target="_blank"
                                  ><i class="klbth-icon-facebook"></i
                                ></a>
                              </li>
                              <li>
                                <a href="" class="twitter" target="_blank"
                                  ><i class="klbth-icon-twitter"></i
                                ></a>
                              </li>
                              <li>
                                <a href="" class="youtube" target="_blank"
                                  ><i class="klbth-icon-youtube"></i
                                ></a>
                              </li>
                              <li>
                                <a href="" class="instag" target="_blank"
                                  ><i class="klbth-icon-instagram"></i
                                ></a>
                              </li>
                              <li>
                                <a href="" class="whatsapp" target="_blank"
                                  ><i class="klbth-icon-whatsapp"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-message m-4 mt-2">
                          <i
                            class="fa share-icon fa-share"
                            aria-hidden="true"
                          ></i>
                          <strong>Share</strong>
                        </div>
                      </div>
                    </div>
                    <div class="people-have product-message warning">
                      <i class="klbth-icon-shopping-bag-3"></i
                      ><strong>Other people want this. </strong>5 people have
                      this in their carts right now.
                    </div>
                    <div class="product_meta product-categories">
                      <span class="sku_wrapper"
                        >SKU: <span class="sku">KM45VGRT</span></span
                      >

                      <span class="posted_in"
                        >Category:
                        <a href="javascript:void(0)" rel="tag"
                          >Smartwatches</a
                        ></span
                      >
                    </div>
                  </div>
                  <!-- col -->
                </div>
                <!-- row -->
              </div>
              <!-- quick-product-wrapper -->
            </div>
            <!-- quickview-product -->
          </div>
        </div>
      </div>
    </div>
    <!-- compare model  -->
    <div
      style="display: none"
      :class="showcomparemodal"
      :style="showcomparemodalstyle"
      id="newDiv"
      class="
        woosc-area
        woosc-bar-bottom
        woosc-bar-right
        woosc-bar-click-outside-yes
        woosc-hide-checkout
        woosc-area-open-bar
        woosc-area-open-table
      "
      data-bg-color="#292a30"
      data-btn-color="#00a0d2"
      data-count="3"
    >
      <div class="woosc-inner">
        <div
          class="woosc-table woosc-table-open"
          style="background-color: rgb(41, 42, 48)"
        >
          <div class="woosc-table-inner">
            <a
              href="javascript:void(0);"
              id="woosc-table-close"
              class="woosc-table-close hint--left"
              aria-label="Close"
              ><span
                @click="closecomparemodal"
                class="woosc-table-close-icon fa fa-times"
                aria-hidden="true"
                style="padding: 20px"
              ></span
            ></a>
            <div
              class="
                woosc-table-items woosc-table-items-loaded
                ps-container ps-theme-wpc ps-active-y
              "
              style="overflow: auto"
              data-ps-id="d26f5069-dad8-fe4f-e843-16cb75c95a96"
            >
              <table id="woosc_table" class="woosc_table has-3">
                <thead>
                  <tr>
                    <th
                      style="
                        background-color: rgb(247, 247, 247);
                        position: relative;
                        z-index: 1;
                        top: 0px;
                        left: 0px;
                      "
                    ></th>
                    <th
                      style="
                        background-color: rgb(247, 247, 247);
                        position: relative;
                        top: 0px;
                      "
                    >
                      <a href="javascript:void(0)" draggable="false"
                        >Dragon Touch Max10 Tablet Android 10.0 OS</a
                      >
                    </th>
                    <th
                      style="
                        background-color: rgb(247, 247, 247);
                        position: relative;
                        top: 0px;
                      "
                    >
                      <a href="javascript:void(0)" draggable="false"
                        >Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB</a
                      >
                    </th>
                    <th
                      style="
                        background-color: rgb(247, 247, 247);
                        position: relative;
                        top: 0px;
                        padding: 15px;
                      "
                    >
                      <a href="javascript:void(0)" draggable="false"
                        >Apple iPhone 11 64GB Yellow Fully Unlocked</a
                      >
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="tr-default tr-image">
                    <td
                      class="td-label"
                      style="
                        background-color: white;
                        position: relative;
                        left: 0px;
                      "
                    >
                      Image
                    </td>
                    <td>
                      <a href="javascript:void(0)" draggable="false"
                        ><img
                          width="600"
                          height="600"
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-600x600.jpg"
                          class="attachment-woosc-large size-woosc-large"
                          alt=""
                          loading="lazy"
                          draggable="false"
                          srcset="
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-600x600.jpg    600w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-90x90.jpg       90w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-54x54.jpg       54w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-64x64.jpg       64w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-300x300.jpg    300w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-1024x1024.jpg 1024w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-150x150.jpg    150w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-768x768.jpg    768w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-450x450.jpg    450w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-96x96.jpg       96w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6.jpg           1200w
                          "
                          sizes="(max-width: 600px) 100vw, 600px"
                      /></a>
                    </td>
                    <td>
                      <a href="javascript:void(0)" draggable="false"
                        ><img
                          width="600"
                          height="600"
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-600x600.jpg"
                          class="attachment-woosc-large size-woosc-large"
                          alt=""
                          loading="lazy"
                          draggable="false"
                          srcset="
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-600x600.jpg 600w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-90x90.jpg    90w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-54x54.jpg    54w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-64x64.jpg    64w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-300x300.jpg 300w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-150x150.jpg 150w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-450x450.jpg 450w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg    96w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg         760w
                          "
                          sizes="(max-width: 600px) 100vw, 600px"
                      /></a>
                    </td>
                    <td>
                      <a href="javascript:void(0)" draggable="false"
                        ><img
                          width="600"
                          height="600"
                          src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-600x600.jpg"
                          class="attachment-woosc-large size-woosc-large"
                          alt=""
                          loading="lazy"
                          draggable="false"
                          srcset="
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-600x600.jpg    600w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-90x90.jpg       90w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-54x54.jpg       54w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-64x64.jpg       64w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-300x300.jpg    300w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-1024x1024.jpg 1024w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-150x150.jpg    150w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-768x768.jpg    768w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-450x450.jpg    450w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg       96w,
                            https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2.jpg           1200w
                          "
                          sizes="(max-width: 600px) 100vw, 600px"
                      /></a>
                    </td>
                  </tr>
                  <tr class="tr-default tr-sku">
                    <td
                      class="td-label"
                      style="
                        background-color: rgb(251, 251, 251);
                        position: relative;
                        left: 0px;
                      "
                    >
                      SKU
                    </td>
                    <td>ZR45VGRT</td>
                    <td>BE45VGRT</td>
                    <td>SO4JK74</td>
                  </tr>
                  <tr class="tr-default tr-rating">
                    <td
                      class="td-label"
                      style="
                        background-color: white;
                        position: relative;
                        left: 0px;
                      "
                    >
                      Rating
                    </td>
                    <td>
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style="width: 100%"
                          >Rated <strong class="rating">5.00</strong> out of
                          5</span
                        >
                      </div>
                    </td>
                    <td>
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style="width: 100%"
                          >Rated <strong class="rating">5.00</strong> out of
                          5</span
                        >
                      </div>
                    </td>
                    <td>
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 4.00 out of 5"
                      >
                        <span style="width: 80%"
                          >Rated <strong class="rating">4.00</strong> out of
                          5</span
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="tr-default tr-price">
                    <td
                      class="td-label"
                      style="
                        background-color: rgb(251, 251, 251);
                        position: relative;
                        left: 0px;
                      "
                    >
                      Price
                    </td>
                    <td>
                      <del aria-hidden="true"
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >189.99</bdi
                          ></span
                        ></del
                      >
                      <ins
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >129.99</bdi
                          ></span
                        ></ins
                      >
                    </td>
                    <td>
                      <del aria-hidden="true"
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >699.99</bdi
                          ></span
                        ></del
                      >
                      <ins
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >629.99</bdi
                          ></span
                        ></ins
                      >
                    </td>
                    <td>
                      <del aria-hidden="true"
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >478.67</bdi
                          ></span
                        ></del
                      >
                      <ins
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >$</span
                            >438.67</bdi
                          ></span
                        ></ins
                      >
                    </td>
                  </tr>
                  <tr class="tr-default tr-stock">
                    <td
                      class="td-label"
                      style="
                        background-color: white;
                        position: relative;
                        left: 0px;
                      "
                    >
                      Stock
                    </td>
                    <td>
                      <div class="product-stock in-stock">In Stock</div>
                    </td>
                    <td>
                      <div class="product-stock in-stock">In Stock</div>
                    </td>
                    <td>
                      <div class="product-stock in-stock">In Stock</div>
                    </td>
                  </tr>
                  <tr class="tr-default tr-availability">
                    <td
                      class="td-label"
                      style="
                        background-color: rgb(251, 251, 251);
                        position: relative;
                        left: 0px;
                      "
                    >
                      Availability
                    </td>
                    <td>In Stock</td>
                    <td>In Stock</td>
                    <td>In Stock</td>
                  </tr>
                  <tr class="tr-default tr-add_to_cart">
                    <td
                      class="td-label"
                      style="
                        background-color: white;
                        position: relative;
                        left: 0px;
                      "
                    >
                      Add to cart
                    </td>
                    <td>
                      <p
                        class="product woocommerce add_to_cart_inline"
                        style=""
                      >
                        <a
                          href=""
                          data-quantity="1"
                          class="
                            button
                            product_type_simple
                            add_to_cart_button
                            ajax_add_to_cart
                          "
                          data-product_id="400"
                          data-product_sku="ZR45VGRT"
                          aria-label="Add “Dragon Touch Max10 Tablet Android 10.0 OS” to your cart"
                          rel="nofollow"
                          ><i class="klbth-icon-shop-1"></i> Add to cart</a
                        >
                      </p>
                    </td>
                    <td>
                      <p
                        class="product woocommerce add_to_cart_inline"
                        style=""
                      >
                        <a
                          href=""
                          data-quantity="1"
                          class="
                            button
                            product_type_simple
                            add_to_cart_button
                            ajax_add_to_cart
                          "
                          data-product_id="521"
                          data-product_sku="BE45VGRT"
                          aria-label="Add “Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB” to your cart"
                          rel="nofollow"
                          ><i class="klbth-icon-shop-1"></i> Add to cart</a
                        >
                      </p>
                    </td>
                    <td>
                      <p
                        class="product woocommerce add_to_cart_inline"
                        style=""
                      >
                        <a
                          href=""
                          data-quantity="1"
                          class="
                            button
                            product_type_simple
                            add_to_cart_button
                            ajax_add_to_cart
                          "
                          data-product_id="500"
                          data-product_sku="SO4JK74"
                          aria-label="Add “Apple iPhone 11 64GB Yellow Fully Unlocked” to your cart"
                          rel="nofollow"
                          ><i class="klbth-icon-shop-1"></i> Add to cart</a
                        >
                      </p>
                    </td>
                  </tr>
                  <tr class="tr-default tr-description">
                    <td
                      class="td-label"
                      style="
                        background-color: rgb(251, 251, 251);
                        position: relative;
                        left: 0px;
                      "
                    >
                      Description
                    </td>
                    <td>
                      <ul>
                        <li>3GB RAM</li>
                        <li>10 inch Android Tablets</li>
                        <li>32GB Storage</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li class="SpecHighlights-list-label">
                          Screen Size 10.9 in
                        </li>
                        <li>Operating System Apple iOS</li>
                        <li>Product Length 9.74 in</li>
                      </ul>
                      &nbsp;
                    </td>
                    <td>
                      <ul>
                        <li>Fully Unlocked</li>
                        <li>iPhone 11 Pro Max</li>
                        <li>6.50 in</li>
                      </ul>
                    </td>
                  </tr>
                  <tr class="tr-default tr-content">
                    <td
                      class="td-label"
                      style="
                        background-color: white;
                        position: relative;
                        left: 0px;
                      "
                    >
                      Content
                    </td>
                    <td>
                      The Aspire 5 is a compact laptop in a thin case with a
                      metal cover, a high-quality Full HD IPS display and a rich
                      set of interfaces. Thanks to its powerful components, the
                      laptop can handle resource-intensive tasks perfectly and
                      is also suitable for most games. Key Features:
                      <ul>
                        <li>slim body with metal cover</li>
                        <li>
                          latest Intel Core i5-1135G7 processor (4 cores / 8
                          threads)
                        </li>
                        <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                        <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
                        <li>backlit keyboard, touchpad with gesture support</li>
                      </ul>
                    </td>
                    <td>
                      The Aspire 5 is a compact laptop in a thin case with a
                      metal cover, a high-quality Full HD IPS display and a rich
                      set of interfaces. Thanks to its powerful components, the
                      laptop can handle resource-intensive tasks perfectly and
                      is also suitable for most games. Key Features:
                      <ul>
                        <li>slim body with metal cover</li>
                        <li>
                          latest Intel Core i5-1135G7 processor (4 cores / 8
                          threads)
                        </li>
                        <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                        <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
                        <li>backlit keyboard, touchpad with gesture support</li>
                      </ul>
                    </td>
                    <td>
                      The Aspire 5 is a compact laptop in a thin case with a
                      metal cover, a high-quality Full HD IPS display and a rich
                      set of interfaces. Thanks to its powerful components, the
                      laptop can handle resource-intensive tasks perfectly and
                      is also suitable for most games. Key Features:
                      <ul>
                        <li>slim body with metal cover</li>
                        <li>
                          latest Intel Core i5-1135G7 processor (4 cores / 8
                          threads)
                        </li>
                        <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                        <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
                        <li>backlit keyboard, touchpad with gesture support</li>
                      </ul>
                    </td>
                  </tr>
                  <tr class="tr-default tr-weight" style="display: none">
                    <td
                      class="td-label"
                      style="
                        background-color: rgb(251, 251, 251);
                        position: relative;
                        left: 0px;
                      "
                    >
                      Weight
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="tr-default tr-dimensions">
                    <td
                      class="td-label"
                      style="
                        background-color: white;
                        position: relative;
                        left: 0px;
                      "
                    >
                      Dimensions
                    </td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                  </tr>
                  <tr class="tr-default tr-additional" style="display: none">
                    <td
                      class="td-label"
                      style="
                        background-color: rgb(251, 251, 251);
                        position: relative;
                        left: 0px;
                      "
                    >
                      Additional information
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px">
                <div
                  class="ps-scrollbar-x"
                  tabindex="0"
                  style="left: 0px; width: 0px"
                ></div>
              </div>
              <div
                class="ps-scrollbar-y-rail"
                style="top: 0px; height: 756px; right: 1654px"
              >
                <div
                  class="ps-scrollbar-y"
                  tabindex="0"
                  style="top: 0px; height: 446px"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="woosc-bar woosc-bar-open"
          data-count="3"
          style="background-color: rgb(41, 42, 48)"
        >
          <div class="woosc-bar-notice">
            Click outside to hide the compare bar
          </div>
          <a
            onclick="myFunctiontwo()"
            class="woosc-bar-search hint--top"
            aria-label="Add product"
          ></a>
          <div class="woosc-bar-items woosc-bar-items-loaded ui-sortable">
            <div class="woosc-bar-item" data-id="400">
              <span
                class="woosc-bar-item-img hint--top"
                aria-label="Dragon Touch Max10 Tablet Android 10.0 OS"
                ><img
                  width="96"
                  height="96"
                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-96x96.jpg"
                  class="attachment-woosc-small size-woosc-small"
                  alt=""
                  loading="lazy"
                  srcset="
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-96x96.jpg       96w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-90x90.jpg       90w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-54x54.jpg       54w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-600x600.jpg    600w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-64x64.jpg       64w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-300x300.jpg    300w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-1024x1024.jpg 1024w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-150x150.jpg    150w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-768x768.jpg    768w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6-450x450.jpg    450w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-6.jpg           1200w
                  "
                  sizes="(max-width: 96px) 100vw, 96px" /></span
              ><span
                class="woosc-bar-item-remove hint--top"
                aria-label="Remove"
                data-id="400"
              ></span>
            </div>
            <div class="woosc-bar-item" data-id="521">
              <span
                class="woosc-bar-item-img hint--top"
                aria-label="Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB"
                ><img
                  width="96"
                  height="96"
                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg"
                  class="attachment-woosc-small size-woosc-small"
                  alt=""
                  loading="lazy"
                  srcset="
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg    96w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-90x90.jpg    90w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-54x54.jpg    54w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-600x600.jpg 600w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-64x64.jpg    64w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-300x300.jpg 300w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-150x150.jpg 150w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-450x450.jpg 450w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg         760w
                  "
                  sizes="(max-width: 96px) 100vw, 96px" /></span
              ><span
                class="woosc-bar-item-remove hint--top"
                aria-label="Remove"
                data-id="521"
              ></span>
            </div>
            <div class="woosc-bar-item" data-id="500">
              <span
                class="woosc-bar-item-img hint--top"
                aria-label="Apple iPhone 11 64GB Yellow Fully Unlocked"
                ><img
                  width="96"
                  height="96"
                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg"
                  class="attachment-woosc-small size-woosc-small"
                  alt=""
                  loading="lazy"
                  srcset="
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg       96w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-90x90.jpg       90w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-54x54.jpg       54w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-600x600.jpg    600w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-64x64.jpg       64w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-300x300.jpg    300w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-1024x1024.jpg 1024w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-150x150.jpg    150w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-768x768.jpg    768w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-450x450.jpg    450w,
                    https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2.jpg           1200w
                  "
                  sizes="(max-width: 96px) 100vw, 96px" /></span
              ><span
                class="woosc-bar-item-remove hint--top"
                aria-label="Remove"
                data-id="500"
              ></span>
            </div>
          </div>
          <div
            class="woosc-bar-btn woosc-bar-btn-text woosc-bar-btn-open"
            style="background-color: rgb(0, 160, 210)"
          >
            <div class="woosc-bar-btn-icon-wrapper">
              <div class="woosc-bar-btn-icon-inner">
                <span></span><span></span><span></span>
              </div>
            </div>
            Compare
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
import { useCartStore } from "../../stores/CartStore";
const cartStore = useCartStore();
</script>
<script>
import TheLoader from "../Loader/TheLoader.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import axios from "axios";

export default {
  components: { TheLoader, Splide, SplideSlide },

  data: () => ({
    id: "",
    specification: "",
    description: "",
    showdescription: "",
    showspecification: "",
    reviews: "",
    showsreviews: "",
    results: [],
    showmodal: "",
    showmodalstyle: "",
    showbigmodal: "",
    showbigmodalstyle: "",
    showcomparemodal: "",
    showcomparemodalstyle: "",
    isloading: true,
    quantity: 1,
    url: "http://baladiweb.bteamwebs.com/storage/",

    errors: "",
    //Index of the active image
    activeImage: 0,
    //Hold the timeout, so we can clear it when it is needed
    autoSlideTimeout: null,
    //If the timer is stopped e.g. when hovering over the carousel
    stopSlider: false,
    //Hold the time left until changing to the next image
    timeLeft: 0,
    //Hold the interval so we can clear it when needed
    timerInterval: null,
    //Every 10ms decrease the timeLeft
    countdownInterval: 10,
    langCode: "en",
    sub_products: [],
    results: {
      name: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      price: 233,
      images: [
        {
          photo:
            "images/products/jacobs-kronung-instant-coffee-100-gm/760x760-1649745536648.jpg",
        },
      ],
      sale_price: 233,
    },
    images: {
      0: {
        thumb:
          "https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg",
        length: 1,
      },
      1: {
        thumb:
          "https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg",
        length: 1,
      },
      2: {
        thumb:
          "https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg",
        length: 1,
      },
    },
  }),
  computed: {
    // currentImage gets called whenever activeImage changes
    // and is the reason why we don't have to worry about the
    // big image getting updated
    currentImage() {
      this.timeLeft = this.autoSlideInterval;
      console.log(this.images[this.activeImage]);
      return this.images[this.activeImage].thumb;
    },
    progressBar() {
      //Calculate the width of the progressbar
      return 100 - (this.timeLeft / this.autoSlideInterval) * 100;
    },
  },
  mounted() {
    this.specification = "";
    this.showspecification = "";
    this.showspecification = "d-none";
    this.reviews = "";
    this.showsreviews = "";
    this.showsreviews = "d-none";
    this.description = "active";
    this.showdescription = "active show";
    setTimeout(() => (this.isloading = false), 1000);
    var id = this.$route.params.id;
    console.log(id);
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/mobile/product/getproductbyslug?slug=" +
          id
      )
      .then((response) => {
        console.log(response.data);
        this.results = response.data.data[0];
        this.sub_products = response.data.data[0].uom_products[0];
        console.log("this results", this.results);
      })
      .catch((error) => {});
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
  },
  methods: {
    increment: function () {
      // const input_index = event.currentTarget.getAttribute("input_Index");
      this.quantity = this.quantity + 1;
    },
    decrement: function () {
      // const input_index = event.currentTarget.getAttribute("input_Index");

      this.quantity = this.quantity - 1;
    },
    clickdescription: function () {
      this.specification = "";
      this.showspecification = "";
      this.showspecification = "d-none";
      this.reviews = "";
      this.showsreviews = "";
      this.showsreviews = "d-none";
      this.description = "active";
      this.showdescription = "active show";
    },
    clickspecification: function () {
      this.description = "";
      this.showdescription = "";
      this.showdescription = "d-none";
      this.reviews = "";
      this.showsreviews = "";
      this.showsreviews = "d-none";
      this.specification = "active";
      this.showspecification = "active show";
    },
    clickreviews: function () {
      this.description = "";
      this.showdescription = "";
      this.showdescription = "d-none";
      this.specification = "";
      this.showspecification = "";
      this.showspecification = "d-none";
      this.reviews = "active";
      this.showsreviews = "active show";
    },
    clickmodal(index) {
      this.showmodal = "show";
      this.showmodalstyle = "display:block";
    },
    closemodal() {
      this.showmodal = "";
      this.showmodalstyle = "";
    },
    clickbigmodal(index) {
      this.showbigmodal = "show";
      this.showbigmodalstyle = "display:block";
    },
    closebigmodal() {
      this.showbigmodal = "";
      this.showbigmodalstyle = "";
    },
    clickcomparemodal(index) {
      this.showcomparemodal = "show";
      this.showcomparemodalstyle = "display:block";
    },
    closecomparemodal() {
      this.showcomparemodal = "";
      this.showcomparemodalstyle = "";
    },
    nextImage() {
      var active = this.activeImage + 1;
      if (active >= 3) {
        active = 0;
      }
      this.activateImage(active);
    },
    // Go backwards on the images array
    // or go at the last image
    prevImage() {
      var active = this.activeImage - 1;
      if (active < 0) {
        active = 3 - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    },
    //Wait until 'interval' and go to the next image;
    startTimer(interval) {
      if (interval && interval > 0 && !this.stopSlider) {
        var self = this;
        clearTimeout(this.autoSlideTimeout);
        this.autoSlideTimeout = setTimeout(function () {
          self.nextImage();
          self.startTimer(self.autoSlideInterval);
        }, interval);
      }
    },
    //Stop the timer when hovering over the carousel
    stopTimer() {
      clearTimeout(this.autoSlideTimeout);
      this.stopSlider = true;
      clearInterval(this.timerInterval);
    },
    //Restart the timer(with 'timeLeft') when leaving from the carousel
    restartTimer() {
      this.stopSlider = false;
      clearInterval(this.timerInterval);
      this.startCountdown();
      this.startTimer(this.timeLeft);
    },
    //Start countdown from 'autoSlideInterval' to 0
    startCountdown() {
      if (!this.showProgressBar) return;
      var self = this;
      this.timerInterval = setInterval(function () {
        self.timeLeft -= self.countdownInterval;
        if (self.timeLeft <= 0) {
          self.timeLeft = self.autoSlideInterval;
        }
      }, this.countdownInterval);
    },
  },
  created() {
    //Check if startingImage prop was given and if the index is inside the images array bounds
    if (
      this.startingImage &&
      this.startingImage >= 0 &&
      this.startingImage < this.images.length
    ) {
      this.activeImage = this.startingImage;
    }
    //Check if autoSlideInterval prop was given and if it is a positive number
    if (
      this.autoSlideInterval &&
      this.autoSlideInterval > this.countdownInterval
    ) {
      //Start the timer to go to the next image
      this.startTimer(this.autoSlideInterval);
      this.timeLeft = this.autoSlideInterval;
      //Start countdown to show the progressbar
      this.startCountdown();
    }
  },
  props: ["startingImage", "autoSlideInterval", "showProgressBar"],
};
</script>


<style scoped>
.card-carousel {
  user-select: none;
  position: relative;
}
.progressbar {
  display: block;
  width: 100%;
  height: 5px;
  position: absolute;
  background-color: rgba(221, 221, 221, 0.25);
  z-index: 1;
}
.progressbar > div {
  background-color: rgba(255, 255, 255, 0.52);
  height: 100%;
}
.thumbnails {
  display: flex;
  /* justify-content: space-evenly; */
  flex-direction: row;
}
.thumbnail-image {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
}
.thumbnail-image > img {
  width: 100%;
  height: auto;
  transition: all 250ms;
}
.thumbnail-image:hover > img,
.thumbnail-image.active > img {
  opacity: 0.6;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}
.card-img {
  position: relative;
  margin-bottom: 15px;
}
.card-img > img {
  display: block;
  margin: 0 auto;
}
.actions {
  font-size: 1.5em;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #585858;
}
.actions > span {
  cursor: pointer;
  transition: all 250ms;
  font-size: 45px;
}
.actions > span.prev {
  margin-left: 5px;
}
.actions > span.next {
  margin-right: 5px;
}
.actions > span:hover {
  color: #eee;
}
</style>

