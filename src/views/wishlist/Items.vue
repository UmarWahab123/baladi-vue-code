<template>
  <form action="javascript:void(0)" method="post" autocomplete="off">
   
    <table class="tinvwl-table-manage-list">
      <thead>
        <tr>
          <th class="product-cb">
            <input
              type="checkbox"
              class="global-cb"
              title="Select all for bulk action"
              @click="select"
              v-model="select_all"
            />
          </th>
          <th class="product-remove"></th>
          <th class="product-thumbnail">&nbsp;</th>
          <th class="product-name">
            <span class="tinvwl-full">{{$t('product_name')}}</span
            ><span class="tinvwl-mobile">{{$t('Product')}}</span>
          </th>
          <th class="product-price">{{$t('unit_price')}}</th>
          <th class="product-date">{{$t('date_added')}}</th>
          <th class="product-stock">{{$t('stock_status')}}</th>
          <th class="product-action">&nbsp;</th>
        </tr>
      </thead>
      
      <tbody>
      
        <tr
          class="wishlist_item"
          v-for="(item, indextr) in results"
          :key="item.id"
        >
          <td class="product-cb">
            <input type="checkbox" :value="item.id" v-model="selected" />
          </td>
          <td class="product-remove">
            <button
              type="submit"
              name="tinvwl-remove"
              value="605"
              title="Remove"
              @click="remove(item.product_id)"
            >
              <i class="ftinvwl ftinvwl-times"></i>
            </button>
          </td>
          <td class="product-thumbnail">
            <a href="javascript:void(0)"
              ><img
                width="90"
                height="90"
                src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-90x90.jpg"
                class="
                  attachment-woocommerce_thumbnail
                  size-woocommerce_thumbnail
                "
                alt=""
                loading="lazy"
                srcset="
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-90x90.jpg    90w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-54x54.jpg    54w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-600x600.jpg 600w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-64x64.jpg    64w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-300x300.jpg 300w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-150x150.jpg 150w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-450x450.jpg 450w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg    96w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg         760w
                "
                sizes="(max-width: 90px) 100vw, 90px"
            /></a>
          </td>
          <td class="product-name">
            <a href="javascript:void(0)">{{ item?.product?.product_name }}</a>
          </td>
          <td class="product-price">
            <del aria-hidden="true"
              ><span class="woocommerce-Price-amount amount"
                ><bdi
                  ><span class="woocommerce-Price-currencySymbol">$</span
                  >{{ item?.product?.uom_products[0]?.previous_price }}</bdi
                ></span
              ></del
            >
            <ins
              ><span class="woocommerce-Price-amount amount"
                ><bdi
                  ><span class="woocommerce-Price-currencySymbol"> $</span
                  >{{ item?.product?.variant_base_price }}</bdi
                ></span
              ></ins
            >
          </td>
          <td class="product-date">
            <time class="entry-date" :datetime="item.created_at"></time>
            {{ moment(item.created_at).format("MMMM , DD YYYY ") }}
          </td>
          <td class="product-stock">
            <p class="stock in-stock">
              <span><i class="ftinvwl ftinvwl-check"></i></span
              ><span>In Stock</span>
            </p>
          </td>
          <td class="product-action">
            <button
              class="button alt"
              name="tinvwl-add-to-cart"
              value="605"
              title="Add to Cart"
              @click="addtoCart(item)"
            >
              <i class="ftinvwl ftinvwl-shopping-cart"></i
              ><span class="tinvwl-txt">{{$t('add_to_cart')}}</span>
            </button>
          </td>
        </tr>
         
         <tr  v-if="wishlistnotfound" >
          <td colspan="9">
                <h3
                 
                  class="d-flex justify-content-center"
                >
                  {{$t('No_Data_found')}}
                </h3>
          </td>
          </tr>

      </tbody>
             
      <tfoot>
        <tr>
          <td colspan="100">
            <div class="tinvwl-to-left look_in">
              <div class="tinvwl-input-group tinvwl-no-full">
                <input
                  type="hidden"
                  name="lists_per_page"
                  value="10"
                  id="tinvwl_lists_per_page"
                /><select
                  name="product_actions"
                  id="tinvwl_product_actions"
                  class="tinvwl-break-input-filed form-control"
                  style="display: none"
                >
                  <option value="" selected="selected">Actions</option>
                  <option value="add_selected">Add to Cart</option>
                  <option value="remove">Remove</option></select
                ><span class="tinvwl-input-group-btn"
                  ><button
                    class="button tinvwl-break-input tinvwl-break-checkbox"
                    name="tinvwl-action"
                    value="product_apply"
                    title="Apply Action"
                    style="display: none"
                  >
                    {{$t('apply')}} <span class="tinvwl-mobile">{{$t('action')}}</span>
                  </button></span
                >
                
              </div>
              
            </div>
       
            <div class="tinvwl-to-right look_in">
              <button
                class="btn"
                name="tinvwl-action"
                value="product_selected"
                title="Add Selected to Cart"
                @click="AddSelected"
              >
               {{$t('Add_Selected_to_Cart')}}
              </button>
              &nbsp;
              <button
                class="btn"
                name="tinvwl-action"
                title="Add All to Cart"
                @click="AddAll"
              >
               {{$t('Add_All_to_Cart')}}
              </button>
            </div>
            <input
              type="hidden"
              id="wishlist_nonce"
              name="wishlist_nonce"
              value="f0ab8a2cc0"
            /><input
              type="hidden"
              name="_wp_http_referer"
              value="/machic/wishlist/"
            />
          </td>
        </tr>
      </tfoot>
       
    </table>
   
  </form>
</template>
<script setup>
import { useCartStore } from "../../stores/CartStore";
const cartStore = useCartStore();
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
    wishlistnotfound:false,
  }),
  mounted() {
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
             if(response.data.data == ""){
          this.wishlistnotfound = true;
         }else{
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
    addtoCart(item) {
      // cartStore.items.push(item);
      cartStore.addcartapi(item);

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
    },
  },
};
</script>

