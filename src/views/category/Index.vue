<template>
  <Header />

  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content">
        <div class="container">
          <Topcat />

          <div class="shop-page-header">
            <nav class="woocommerce-breadcrumb">
              <ul>
                <li><router-link :to="'/' + langCode"
                      >Home</router-link></li>
                <li>Apple</li>
              </ul>
            </nav>
          </div>

          <header class="woocommerce-products-header"></header>
          <div class="woocommerce-notices-wrapper"></div>
          <div class="before-shop-loop">
            <div class="row sidebar-left">
              <div class="col col-12 col-lg-9 content-column">
              <div class="filter-wrapper">
                <div class="d-flex gap-2">
                    <select class="form-select  w-auto px-5" id="product-sort" aria-label="Default select example">
                        <option selected="">Sort By</option>
                        <option value="1">Latest</option>
                        <option value="2">Low To High</option>
                        <option value="3">High To Low</option>
                    </select>
                    <!-- For perpage option-->
                    <select class="form-select w-auto px-5" id="products-paginate" aria-label="Default select example">
                        <option value="16" selected="">16 Items</option>
                        <option value="60">60 Items</option>
                        <option value="80">80 Items</option>
                        <option value="100">100 Items</option>
                    </select>
                </div>
                <div class="product-views-buttons hide-mobile"> <span id="grid" type="button" class="grid-view active" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Grid Products" aria-label="Grid Products"><i class="klbth-icon-view-grid fa-2x"></i></span> <span id="list" type="button" class="list-view" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="List Products" aria-label="List Products"><i class="klbth-icon-list fa-2x"></i></span> </div>
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
</script>
<script>
import TheLoader from "../Loader/TheLoader.vue";
export default {
  components: { TheLoader},
  data() {
    return {
      isloading: true,
      langCode:"en",
    };
  },
  mounted() {
    setTimeout(() => (this.isloading = false), 1000);
    var langCode = localStorage.getItem("lang");

  },
};
</script>
