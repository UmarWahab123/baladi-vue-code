<template>
  <Header />
  <div class="container">
    <div class="before-shop-loop" data-select2-id="19">
      <div class="row sidebar-left" data-select2-id="18">
        <div class="col col-12 col-lg-9 content-column" data-select2-id="17">
          <div class="filter-button hide-desktop">
            <a href="#">
              <i class="klbth-icon-filter"></i>
              Filter Products
            </a>
          </div>
          <div class="filter-wrapper" data-select2-id="16">
            <div class="sorting-product" data-select2-id="28">
              <!-- For get orderby from loop -->

              <form
                class="woocommerce-ordering product-filter"
                method="get"
                data-select2-id="27"
              >
                <select
                  name="orderby"
                  class="orderby filterSelect select2-hidden-accessible"
                  aria-label="Shop order"
                  data-class="select-filter-orderby"
                  data-select2-id="7"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option value="popularity" data-select2-id="29">
                    Sort by popularity
                  </option>
                  <option value="rating" data-select2-id="30">
                    Sort by average rating
                  </option>
                  <option value="date" selected="selected" data-select2-id="9">
                    Sort by latest
                  </option>
                  <option value="price" data-select2-id="31">
                    Sort by price: low to high
                  </option>
                  <option value="price-desc" data-select2-id="32">
                    Sort by price: high to low
                  </option>
                </select>
                <input type="hidden" name="paged" value="1" />
                <input type="hidden" name="column" value="5" /><input
                  type="hidden"
                  name="opt"
                  value="full-width"
                /><input
                  type="hidden"
                  name="shop_view"
                  value="grid_view"
                /><input type="hidden" name="_pjax" value=".site-content" />
              </form>
            </div>

            <!-- For perpage option-->
            <div class="sorting-product hide-mobile" data-select2-id="15">
              <span>Show:</span>
              <form
                class="woocommerce-ordering product-filter products-per-page"
                method="get"
                data-select2-id="14"
              >
                <select
                  name="perpage"
                  class="perpage showing filterSelect select2-hidden-accessible"
                  data-class="select-filter-perpage"
                  data-select2-id="10"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option value="20" data-select2-id="12">20 Items</option>
                  <option value="40" data-select2-id="23">40 Items</option>
                  <option value="60" data-select2-id="24">60 Items</option>
                  <option value="80" data-select2-id="25">80 Items</option>
                </select>
                <input type="hidden" name="column" value="5" /><input
                  type="hidden"
                  name="opt"
                  value="full-width"
                /><input
                  type="hidden"
                  name="shop_view"
                  value="grid_view"
                /><input type="hidden" name="_pjax" value=".site-content" />
              </form>
            </div>
          </div>
          <!-- filter-wrapper -->
        </div>
        <!-- col -->
        <div class="col col-12 col-lg-3 sidebar-column hide-mobile">
          <p class="woocommerce-result-count fw-bold">All Categories</p>
        </div>
        <!-- col -->
      </div>
      <!-- row -->
    </div>
    <section
      class="
        elementor-section
        elementor-top-section
        elementor-element
        elementor-element-52524a1
        elementor-section-boxed
        elementor-section-height-default
        elementor-section-height-default
      "
      data-id="52524a1"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-extended">
        <div
          class="
            elementor-column
            elementor-col-100
            elementor-top-column
            elementor-element
            elementor-element-6cf7656
          "
          data-id="6cf7656"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="
                elementor-element
                elementor-element-d96753c
                elementor-widget
                elementor-widget-machic-product-categories
              "
              data-id="d96753c"
              data-element_type="widget"
              data-widget_type="machic-product-categories.default"
            >
              <div class="elementor-widget-container">
                <div class="row my-3">
                  <div
                    :data="item"
                    :key="indextr"
                    v-for="(item, indextr) in results"
                    class="klb-product-category col col-12 col-lg-4 col-sm-4"
                  >
                    <div class="site-module module-category-list style-1">
                      <div class="category-image">
                        <router-link
                          class=""
                          :to="{
                            name: 'category',
                            params: { type: 'maincat', id: item.id },
                          }"
                        >
                          <img
                            :src="
                              'http://baladi-v1.bteamwebs.com/storage/' +
                              item.photo
                            "
                            alt="Cell Phones"
                        /></router-link>
                      </div>
                      <div class="category-detail">
                        <h3 class="category-name">
                          <a href="#">{{ item.name }}</a>
                        </h3>
                        <ul>
                          <li
                            :data="items"
                            :key="indextr"
                            v-for="(items, indextr) in item.sub_categories"
                          >
                            <a href="">{{ items.name }}</a>
                          </li>
                        </ul>
                        <a href="#" class="btn link"
                          >All Fresh Products
                          <i class="klbth-icon-right-arrow"></i
                        ></a>
                      </div>
                      <!-- category-detail -->
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
  <Footer />
</template>
<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
</script>
<script>
import.meta.env.VITE_API_KEY;
import axios from "axios";
export default {
  data: () => ({
    url: import.meta.env.VITE_API_URL + "/storage/",
    results: [],
  }),
  mounted() {
    axios
      .get("http://baladi-v1.bteamwebs.com/api/web/header/categories?locale=en")
      .then((response) => {
        this.results = response.data.data.data;
        console.log(this.results);
      })
      .catch((error) => {});
  },
  methods: {},
};
</script>
