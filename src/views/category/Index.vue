<template>
  <Header />

  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content">
        <div class="container">
          <Bar />
          <Topcat />

          <div class="shop-page-header">
            <nav class="woocommerce-breadcrumb">
              <ul>
                <li><a href="">Home</a></li>
                <li>Apple</li>
              </ul>
            </nav>
          </div>

          <header class="woocommerce-products-header"></header>
          <div class="woocommerce-notices-wrapper"></div>
          <div class="before-shop-loop">
            <div class="row sidebar-left">
              <div class="col col-12 col-lg-9 content-column">
                <div class="filter-button">
                  <a href="#">
                    <i class="klbth-icon-filter"></i> {{$t('Filter_Products')}}
                  </a>
                </div>
                <div class="filter-wrapper">
                  <div class="sorting-product">
                    <!-- For get orderby from loop -->

                    <form
                      class="woocommerce-ordering product-filter"
                      method="get"
                    >
                      <select
                        name="orderby"
                        class="orderby filterSelect"
                        aria-label="Shop order"
                        data-class="select-filter-orderby"
                        data-select2-id="1"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="popularity">{{$t('Sort_by_popularity')}}</option>
                        <option value="rating">{{$t('Sort_by_average_rating')}}</option>
                        <option
                          value="date"
                          selected="selected"
                          data-select2-id="3"
                        >
                           {{$t('Sort_by_latest')}}
                        </option>
                        <option value="price">
                          {{$t('Sort_by_price')}}
                        </option>
                        <option value="price-desc">
                          {{$t('Sort_by_high_to_low')}}
                        </option>
                      </select>

                      <input type="hidden" name="paged" value="1" />
                    </form>
                  </div>

                  <!-- For perpage option-->
                  <div class="sorting-product hide-mobile">
                    <span>{{$t('Show')}}:</span>
                    <form
                      class="
                        woocommerce-ordering
                        product-filter
                        products-per-page
                      "
                      method="get"
                    >
                      <select
                        name="perpage"
                        class="perpage showing filterSelect"
                        data-class="select-filter-perpage"
                        data-select2-id="4"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="16" data-select2-id="6">16 Items</option>
                        <option value="32">{{$t('Itemss')}}</option>
                        <option value="48">{{$t('Itemsss')}}</option>
                        <option value="64">{{$t('Itemssss')}}</option>
                      </select>
                    </form>
                  </div>
                  <div class="product-views-buttons hide-mobile">
                    <a
                      href="javascript:void(0)"
                      class="grid-view active"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="Grid Products"
                      aria-label="Grid Products"
                      ><i class="klbth-icon-view-grid"></i
                    ></a>
                    <a
                      href="javascript:void(0)"
                      class="list-view"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="List Products"
                      aria-label="List Products"
                      ><i class="klbth-icon-list"></i
                    ></a>
                  </div>
                  <!-- product-views-buttons -->
                </div>
                <!-- filter-wrapper -->
              </div>
              <!-- col -->
              <div class="col col-12 col-lg-3 sidebar-column hide-mobile">
                <p class="woocommerce-result-count">{{$t('Showing_all_results')}}</p>
              </div>
              <!-- col -->
            </div>
            <!-- row -->
          </div>
          <div class="row content-wrapper sidebar-left">
            <Filterproducts/>
            <Filter />
          </div>
        </div>
      </div>
      <Recentproducts />
    </div>
    <!-- site-content -->
  </main>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import Filter from "./Filter.vue";
import Filterproducts from "./Filterproducts.vue";
import Recentproducts from "./Recentproducts.vue";
import Topcat from "../home/Topcat.vue";
import Bar from "../home/partials/Bar.vue";
</script>
<script>
import TheLoader from "../Loader/TheLoader.vue";
export default {
  components: { TheLoader},
  data() {
    return {
      isloading: true,
    };
  },
  mounted() {
    setTimeout(() => (this.isloading = false), 1000);
  },
};
</script>
