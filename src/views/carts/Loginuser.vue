<template>
  <CartLoader v-if="isloading" />

  <tr
    class="woocommerce-cart-form__cart-item cart_item"
    v-for="(item, indextr) in results"
  >
    <td class="product-thumbnail">
      <!-- <a href="javascript:void(0)"
                              ><img
                                width="90"
                                height="90"
                                :src="url + item[0].images[0].photo"
                                class="
                                  attachment-woocommerce_thumbnail
                                  size-woocommerce_thumbnail
                                "
                                alt=""
                                loading="lazy"
                                sizes="(max-width: 90px) 100vw, 90px"
                            />
                            </a> -->
    </td>
    <td class="product-name" data-title="Product">
      <a href="javascript:void(0)">
        {{ item.uom_product.product.product_name }}</a
      >
    </td>

    <td class="product-price" data-title="Price">
      <span class="woocommerce-Price-amount amount">
        <bdi
          ><span class="woocommerce-Price-currencySymbol">$</span>
          {{ item.uom_product.product.variant_base_price }}
        </bdi></span
      >
    </td>

    <td class="product-quantity" data-title="Quantity">
      <div class="quantity">
        <label class="screen-reader-text" for="quantity_621364ed017d6"
          >Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB quantity</label
        >
        <div
          class="quantity-button minus"
          @click="decrement"
          v-bind:input_Index="indextr"
        ></div>
        <input
          type="text"
          id="quantity_621364ed017d6"
          class="input-text qty text"
          step="1"
          :value="item.quantity"
          name="cart[07563a3fe3bbe7e3ba84431ad9d055af][qty]"
          title="Qty"
          size="4"
          placeholder=""
          inputmode="numeric"
          my-attr="12"
        />
        <div
          class="quantity-button plus"
          @click="increment"
          v-bind:input_Index="indextr"
        ></div>
      </div>
    </td>

    <td class="product-subtotal" data-title="Subtotal">
      <span class="woocommerce-Price-amount amount">
        <bdi
          ><span class="woocommerce-Price-currencySymbol"
            >$
            {{
              item.quantity * item.uom_product.product.variant_base_price
            }}</span
          >
        </bdi></span
      >
    </td>

    <td class="product-remove">
      <a
        href="javascript:void(0)"
        class="remove"
        aria-label="Remove this item"
        data-product_id="521"
        data-product_sku="BE45VGRT"
        @click="removeItem(item.uom_product_id)"
        >×</a
      >
    </td>
  </tr>
</template>

<script>
import axios from "axios";
import { useProductStore } from "../../stores/ProductStore";
const productStore = useProductStore();
import CartLoader from "../Loader/CartLoader.vue";

export default {
  components: { CartLoader },

  data: () => ({
    url: import.meta.env.VITE_API_URL + "/storage/",
    results: [],
    langCode: "en",
    isloading: true,
  }),
  mounted() {
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
    this.getCart();
  },
  methods: {
    increment: function (event) {
      const input_index = event.currentTarget.getAttribute("input_Index");
      this.results[input_index].quantity =
        parseInt(this.results[input_index].quantity) + 1;
    },
    decrement: function (event) {
      const input_index = event.currentTarget.getAttribute("input_Index");
      console.log(input_index, this.results[input_index].quantity);
      if (this.results[input_index].quantity > 1) {
        this.results[input_index].quantity =
          parseInt(this.results[input_index].quantity) - 1;
      }
    },
    getCart() {
      if (localStorage.userInfo != null) {
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.token = userInfo.token;
        axios
          .get(
            "http://baladi-v1.bteamwebs.com/api/mobile/product/getUserCart",
            {
              headers: {
                Authorization: "Bearer " + this.token,
              },
            }
          )
          .then((response) => {
            this.results = response.data.data;
            console.log("results", this.results);
            productStore.cartListData(this.results);
            // this.results.map((item, index) => {
            //   for (var i = 1; i <= item.quantity; i++) {
            //     console.log("item", index, item);
            //     cartStore.items.push(item.uom_product);
            //   }
            // });
            this.isloading = false;
          })
          .catch((error) => {});
      }
    },
    removeItem(id) {
      axios
        .delete(
          "http://baladi-v1.bteamwebs.com/api/mobile/product/removeCart?uom_product_id=" +
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

          this.getCart();
        })
        .catch((error) => {});
    },
  },
};
</script>