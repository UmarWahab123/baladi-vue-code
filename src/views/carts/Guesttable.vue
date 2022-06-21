<template>
  <tr
    class="woocommerce-cart-form__cart-item cart_item"
    v-for="(item, name, indextr) in cartStore.grouped"
  >
    <td class="product-thumbnail">
      <a href="javascript:void(0)"
        ><img
          width="90"
          height="90"
          :src="
            'http://baladi-v1.bteamwebs.com/storage/' +
            item[0].product?.gallery?.gallery_images[0]?.image_sm
          "
          class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
          alt=""
          loading="lazy"
          sizes="(max-width: 90px) 100vw, 90px"
        />
      </a>
    </td>
    <td class="product-name" data-title="Product">
      <a href="javascript:void(0)"> {{ item[0]?.product?.product_name }}</a>
    </td>

    <td class="product-price" data-title="Price">
      <span class="woocommerce-Price-amount amount">
        <bdi
          ><span class="woocommerce-Price-currencySymbol">$</span>
          {{ item[0]?.product?.variant_base_price }}
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
          @click="cartStore.setItemdecrementCount(item[0], 1)"
          v-bind:input_Index="indextr"
          v-bind:count="cartStore.groupedCount(name)"
        ></div>
        <input
          type="text"
          id="quantity_621364ed017d6"
          class="input-text qty text"
          step="1"
          min="0"
          max="10"
          name="cart[07563a3fe3bbe7e3ba84431ad9d055af][qty]"
          :value="cartStore.groupedCount(name)"
          v-bind:count="cartStore.groupedCount(name)"
          title="Qty"
          size="4"
          placeholder=""
          inputmode="numeric"
          my-attr="12"
        />
        <div
          class="quantity-button plus"
          v-bind:input_Index="indextr"
          @click="cartStore.setItemCount(item[0], 4)"
        ></div>
      </div>
    </td>

    <td class="product-subtotal" data-title="Subtotal">
      <span class="woocommerce-Price-amount amount">
        <bdi
          ><span class="woocommerce-Price-currencySymbol">$</span>
          {{
            cartStore.groupedCount(name) * item[0]?.product?.variant_base_price
          }}</bdi
        ></span
      >
    </td>

    <td class="product-remove">
      <a
        href="javascript:void(0)"
        class="remove"
        aria-label="Remove this item"
        data-product_id="521"
        data-product_sku="BE45VGRT"
        @click="cartStore.clearItem(name)"
        >×</a
      >
    </td>
  </tr>
</template>

<script setup>
import Guesttable from "./Guesttable.vue";
import Loginuser from "./Loginuser.vue";
import { useCartStore } from "../../stores/CartStore";
setTimeout(function () {
  document.getElementById("menu-sidebar-menu-1").classList.remove("show");
}, 500);

const cartStore = useCartStore();
</script>

<script>
import.meta.env.VITE_API_KEY;
import axios from "axios";
import { useCartStore } from "../../stores/CartStore";
const cartStore = useCartStore();

export default {
  data: () => ({
    showmodal: "",
    url: import.meta.env.VITE_API_URL + "/storage/",
    showmodalstyle: "",
    showbigmodal: "",
    showbigmodalstyle: "",
    showcomparemodal: "",
    changeaddress: 0,
    count: 0,
    showcomparemodalstyle: "",
    results: [],
    langCode: "en",
  }),
  mounted() {
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
    this.getCart();
  },
  methods: {
    incrementcount: function () {
      // const input_index = event.currentTarget.getAttribute("input_Index");
      this.count = this.count + 1;
    },
    decrementcount: function () {
      // const input_index = event.currentTarget.getAttribute("input_Index");

      this.count = this.count - 1;
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

    clickaddress: function (event) {
      if (this.changeaddress === 0) {
        this.changeaddress = 1;
      } else if (this.changeaddress === 1) {
        this.changeaddress = 0;
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
            // this.results.map((item, index) => {
            //   for (var i = 1; i <= item.quantity; i++) {
            //     console.log("item", index, item);
            //     cartStore.items.push(item.uom_product);
            //   }
            // });
          })
          .catch((error) => {});
      }
    },
  },
};
</script>