<template>
  <div
    id="sidebar"
    class="col col-12 col-lg-3 content-secondary site-sidebar filtered-sidebar"
  >
    <div class="site-scroll ps">
      <div class="sidebar-inner">
        <div class="sidebar-mobile-header">
          <h3 class="entry-title">{{$t('Filter_Products')}}</h3>
          <div class="close-sidebar"><i class="klbth-icon-cancel"></i></div>
        </div>
        <div v-if="id" class="widget widget_klb_product_categories">
          <h4 class="widget-title">{{$t('product_categories')}}</h4>
          <div class="widget-checkbox-list">
            <ul>
              <li
                :data="item"
                :key="indextr"
                v-for="(item, indextr) in relatedcategory"
              >
                <span
                  class="product_cat"
                  ><input
                    @change="filterfunction"
                    :value="item.category_id"
                    type="checkbox"
                    v-model="filterform.categories"
                  /><label class="custome-name-style"><span></span>{{ item?.name }}</label></span
                >
              </li>
            </ul>
          </div>
        </div>
          <div v-if="id==''" class="widget widget_klb_product_categories">
          <h4 class="widget-title">{{$t('product_categories')}}</h4>
          <div class="widget-checkbox-list">
            <ul>
              <li
                :data="item"
                :key="indextr"
                v-for="(item, indextr) in results"
              >
                <a
                  href="/machic/?s=apple&amp;post_type=product&amp;dgwt_wcas=1&amp;filter_cat=29"
                  class="product_cat"
                  ><input
                    name="product_cat[]"
                    value="29"
                    id="Apple"
                    type="checkbox"
                  /><label><span></span>{{ item?.name }}</label></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="woocommerce widget_price_filter">
          <h4 class="widget-title">{{$t('Filter_by_price')}}</h4>
          <form method="get" action="/product-category/apple/">
            <div class="price_slider_wrapper slider">
              <div class="wrapper mt-5">
                <div class="">
                  <div class="slider-track"></div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="30"
                    id="slider-1"
                    oninput="slideOne()"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="70"
                    id="slider-2"
                    oninput="slideTwo()"
                  />
                </div>
              </div>
              <div class="price_slider_amount" data-step="10">
                <input
                  type="text"
                  id="min_price"
                  name="min_price"
                  value="0"
                  data-min="0"
                  placeholder="Min price"
                  style="display: none"
                />
                <input
                  type="text"
                  id="max_price"
                  name="max_price"
                  value="5440"
                  data-max="5440"
                  placeholder="Max price"
                  style="display: none"
                />
                <button type="submit" class="button" style="margin-right: 14px">
                 {{$t('Filter')}}
                </button>
                <div class="price_label values">
                  {{$t('Price')}}: <span id="range1" class="from">27</span> —
                  <span id="range2" class="to">77</span>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </form>
        </div>
        <div
          class="
            widget
            woocommerce
            widget_layered_nav
            woocommerce-widget-layered-nav d-none
          "
        >
          <h4 class="widget-title">{{$t('Filter_by_Color')}}</h4>
          <ul class="woocommerce-widget-layered-nav-list">
            <li
              class="
                woocommerce-widget-layered-nav-list__item
                wc-layered-nav-term
              "
            >
              <div class="type-color">
                <span class="color-box" style="background-color: #000000"></span
                ><a
                  rel="nofollow"
                  href="javascript::void(0)"
                  >Black</a
                >
                <span class="count">(1)</span>
              </div>
            </li>
            <li
              class="
                woocommerce-widget-layered-nav-list__item
                wc-layered-nav-term
              "
            >
              <div class="type-color">
                <span class="color-box" style="background-color: #ff7900"></span
                ><a
                  rel="nofollow"
                  href="avascript::void(0)"
                  >Orange</a
                >
                <span class="count">(1)</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="widget widget_product_status d-none">
          <h4 class="widget-title">{{$t('Product_Status')}}</h4>
          <div class="widget-checkbox-list">
            <ul>
              <li>
                <a href="avascript::void(0)">
                  <input
                    name="stockonsale"
                    value="instock"
                    id="instock"
                    type="checkbox"
                  />
                  <label><span></span>{{$t('in_stock')}}</label>
                </a>
              </li>
              <li>
                <a href="avascript::void(0)e">
                  <input
                    name="stockonsale"
                    value="onsale"
                    id="onsale"
                    type="checkbox"
                  />
                  <label><span></span>{{$t('On_Sale')}}</label>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="
            widget
            woocommerce
            widget_layered_nav
            woocommerce-widget-layered-nav
          "
        >
          <h4 class="widget-title">{{$t('brands')}}</h4>
          <ul
            :data="brand"
            :key="indextr"
            v-for="(brand, indextr) in allbrands?.slice(0, 10)"
            class="woocommerce-widget-layered-nav-list"
          >
            <li
              class="
                woocommerce-widget-layered-nav-list__item
                wc-layered-nav-term
              "
            >
              <div class="type-button">
                <span
                  class="product_cat"
                  ><input
                    @change="filterfunction"
                    :value="brand.id"
                    type="checkbox"
                    v-model="filterform.brands"
                  /><label class="custome-name-style"><span></span>{{ brand?.brand_name }}</label></span
                >
                <span class="count">(12)</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="widget widget_media_image d-none">
          <img
            width="293"
            height="587"
            src="https://klbtheme.com/machic/wp-content/uploads/2021/10/widget-banner.jpg"
            class="image wp-image-2119 attachment-full size-full"
            alt=""
            loading="lazy"
            style="max-width: 100%; height: auto"
          />
        </div>
      </div>
      <div class="ps__rail-x" style="left: 0px; bottom: 0px">
        <div
          class="ps__thumb-x"
          tabindex="0"
          style="left: 0px; width: 0px"
        ></div>
      </div>
      <div class="ps__rail-y" style="top: 0px; right: 0px">
        <div
          class="ps__thumb-y"
          tabindex="0"
          style="top: 0px; height: 0px"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import.meta.env.VITE_API_KEY;
import { async } from "@firebase/util";
import axios from "axios";
export default {
  data: () => ({
    url: import.meta.env.VITE_API_URL + "/storage/",
    results: [],
    allbrands: [],
    filterform:{
    sortBy:"ASC",
    popular_search:"",
    brands: [],
    categories: [],
    },
    relatedcategory: [],
    id:"",
  }),
  mounted() {
    
    var langCode = localStorage.getItem("lang");
    var id = this.$route.params.id;
    this.id = id;
    // alert(id);
    if(id){
    axios
    .get(import.meta.env.VITE_API_URL + "/api/mobile/product/relatedcategories/" + id)
    .then((response) => {
      this.relatedcategory = response.data.data;
      // console.log('relatedproduct',this.results);
        
    })
    .catch((error) => {});
    }else{
    axios
      .get(import.meta.env.VITE_API_URL + "/api/web/header/categories?locale=" +
          langCode)
      .then((response) => {
        this.results = response.data.data;
        // console.log('recentcat',this.results);
      })
      .catch((error) => {});
      }
    axios
      .get(import.meta.env.VITE_API_URL + "/api/web/header/getBrands?locale=" +
          langCode)
      .then((response) => {
        this.allbrands = response.data.data.data;
      })
      .catch((error) => {});
  },
  methods:{
   filterfunction() {
    // console.log('filterfunction',this.filterform);
     axios
       .post(
          "http://baladi-v1.bteamwebs.com/api/mobile/product/filtersearch",
          this.filterform,
        )
        .then((response) => {
          this.filterresults = response.searchresults;
          console.log('filterresults',this.filterresults);
        })
    },
  }
};
</script>
