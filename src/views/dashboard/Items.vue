<template>
   <div class="klb-orders-style1 custome-rtl-div-alignment" style="margin-top: -15px !important;">
      <table class="woocommerce-orders-table rounded woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders wishliast-account-orders-table account-orders-table">
         <thead>
            <tr>
               <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-number">
                  <span class="nobr">{{$t('Product')}}</span>
               </th>
               <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-date">
                  <span class="nobr">{{ $t("unit_price") }}</span>
               </th>
               <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-status">
                  <span class="nobr">{{ $t("date_added") }}</span>
               </th>
               <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-total">
                  <span class="nobr">{{ $t("stock_status") }}</span>
               </th>
               <th style="width:35% !important" class="woocommerce-orders-table__header woocommerce-orders-table__header-order-actions">
                  <span class="nobr">{{$t('action')}}</span>
               </th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="(item, indextr) in results"
                :key="item.id" class="woocommerce-orders-table__row woocommerce-orders-table__row--status-on-hold order">
               <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
                  <a href="http://staging.baladiexpress.com/product-details/baladna-orange-juice-"> {{ item?.product?.product_name }} </a>
               </td>
               <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date" data-title="Date">
                  <span class="">{{ item?.product?.variant_base_price }}</span>
               </td>
               <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status" data-title="Status">
                  <span class="">
                    <time class="entry-date" :datetime="item.created_at"></time>
            {{ moment(item.created_at).format("MMMM , DD YYYY ") }}</span> 
               </td>
               <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status" data-title="Status">
                  <span class="badge bg-info">
                 {{$t('In_Stock')}}
                  </span>
               </td>
               <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions" data-title="Actions">
                   <button @click="remove(item.product_id)" id="wishlist-remove" data-id="340" class="btn mt-arabic btn-sm bg-danger custome-danger-styles"><i class="fa fa-trash" aria-hidden="true"></i></button>
                  <a @click="addtoCart(item,indextr)" style="width: max-content; margin-left:5px; color:white;" data-uom_product_id="298" data-quantity="1" class="button button-primary mt-3 mt-md-0 add_to_cart_button single_add_to_cart_button button alt add-product-to-cart add-style-to-cart-btn" role="button">
                      <span
                        v-if="isText"
                        id="add-cart-text"
                        class="add-cart-text-238"
                        >{{ $t("add_to_cart") }}</span
                      >
                     <div
                        v-if="isSpinner"
                        class="
                          spinner-border
                          text-white
                          cart-spinner-247
                          text-center
                          spinner-border-sm
                        "
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                  </a>
                     <router-link
                        v-if="item?.check"
                        :to="'/' + langCode + '/cart'"
                        class="added_to_cart wc-forward"
                        title="View cart"
                        >{{ $t("Viewcart") }}</router-link>
               </td>
            </tr>
               <tr v-if="wishlistnotfound">
                <td colspan="9">
                  <h3 class="d-flex justify-content-center">
                    {{ $t("No_Data_found") }}
                  </h3>
                </td>
              </tr>
         </tbody>
      </table>
   </div>
</template>
<script setup>
import { useCartStore } from "../../stores/CartStore";
defineEmits(["addToCart"]);
</script>
<script>
import moment from "moment";
import axios from "axios";
import { useProductStore } from "../../stores/ProductStore";
const cartStore = useCartStore();
export default {
  data: () => ({
    select_all: false,
    selected: [],
    results: [],
    token: "",
    moment: moment,
    items: [],
    langCode: "en",

    wishlistnotfound: false,
      isText: true,
    isSpinner: false,
  }),
  mounted() {
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
    this.getWishList();
  },
  methods: {
    select() {
      this.selected = [];
      this.items = [];
      if (!this.select_all) {
        for (let i in this.results) {
          this.selected.push(this.results[i].id);
        }
        for (let i in this.results) {
          this.items.push(this.results);
        }
      }
      console.log("selected", this.items);
    },
    remove(id) {
      // alert(id);
      axios
        .delete(
          "http://baladi-v1.bteamwebs.com/api/mobile/product/removeWishlist?product_id=" +
            id,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then((response) => {
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
            title: response.data.data[0]
              ? response.data.data[0]
              : response.data.message,
          });

          this.getWishList();
        })
        .catch((error) => {});
    },
    getWishList() {
      if (localStorage.userInfo != null) {
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.token = userInfo.token;
        axios
          .get(
            "http://baladi-v1.bteamwebs.com/api/mobile/product/getWIshlist",
            {
              headers: {
                Authorization: "Bearer " + this.token,
              },
            }
          )
          .then((response) => {
            this.results = response.data.data;
            // console.log("resultswishlist", this.results);
            if (response.data.data == "") {
              this.wishlistnotfound = true;
            } else {
              const productStore = useProductStore();
              productStore.wishListData(this.results);
              this.wishlistnotfound = false;

              // console.log(this.results);
            }
          })
          .catch((error) => {});
      }
    },
    AddSelected() {
      this.results.forEach((item, indextr) => {
        if (this.selected.includes(item.id)) {
          cartStore.items.push(item);
        }
      });
      return false;
    },
    AddAll() {
      // alert("add all to cart");
      console.log(this.items);
      if (this.items.length > 0) {
        this.items.forEach((item, indextr) => {
          console.log("indextr", indextr, "item", item[indextr]);
          cartStore.items.push(item[indextr]);
        });
        // this.selected = [];
      } else {
        alert("Please select All item");
      }
    },
    addtoCart(item,index) {
      // cartStore.items.push(item);
      cartStore.addcartapi(item);
        this.results[index].isSpinner = true;
      if (this.results[index]) {
        setTimeout(() => {
          this.isText = true;
          this.results[index].check = true;
          this.results[index].isSpinner = false;
        }, 1000);
       }
    }
    }

};
      // console.log("product_name", item.product.product_name);
      // console.log("item", item);
      // const quanitiy = cartStore.groupedCount(item.product.product_name);
      // const payload = {
      //   uom_product_id: item.product.id,
      //   quantity: quanitiy,
      // };
      // axios
      //   .post(
      //     "http://baladi-v1.bteamwebs.com/api/mobile/product/addToCart",
      //     payload,
      //     {
      //       headers: {
      //         Authorization: "Bearer " + this.token,
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {});
 
</script>

