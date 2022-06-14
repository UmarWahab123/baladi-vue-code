import { defineStore } from "pinia";
import { groupBy } from "lodash";
import axios from "axios";
import { useProductStore } from "./ProductStore";
export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    };
  },
  getters: {
    count() {
      return this.items.length;
    },
    isEmpty() {
      return this.count === 0;
    },
    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.product.product_name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },
    groupedCount: (state) => (name) => state.grouped[name].length,
    total: (state) =>
      state.items.reduce(
        (p, c) => p + parseInt(c.product.variant_base_price),
        0
      ),
  },
  actions: {
    addItems(count, item) {
      console.log(item);
      if (item.product == null) {
        const product = {
          product: {
            variant_base_price: item.variant_base_price,
            product_name: item.product_name,
          },
        };
        const fulldata = Object.assign(item, product);
      }

      // console.log(fulldata);

      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
    clearItem(itemName) {
      this.items = this.items.filter(
        (item) => item.product.product_name !== itemName
      );
    },
    setItemCount(item, count) {
      console.log(item);
      let qty = this.groupedCount(item.product.product_name);
      qty = qty + 1;
      this.clearItem(item.product.product_name);
      this.addItems(qty, item);
    },
    setItemdecrementCount(item, count) {
      let qty = this.groupedCount(item.product.product_name);
      qty = qty - 1;
      this.clearItem(item.product.product_name);
      this.addItems(qty, item);
    },
    incrementCount(name) {
      var count = count + 1;
      console.log(count + 1, "count", count);
    },
    addcartapi(item) {
      this.items.push(item);
      this.cartApi(item, "add");
    },
    cartApi(item, type) {
      if (localStorage.userInfo != null) {
        let userInfo = JSON.parse(localStorage.userInfo);
        let token = userInfo.token;
        let url = "";
        var product_id = "";
        let payload = {};
        console.log(item.product_id, type);
        if (type == "add") {
          if (item.product_id != null) {
            product_id = item.product_id;
          } else {
            product_id = item.product.id;
          }
          payload = {
            uom_product_id: product_id,
            quantity: 1,
          };
          url = "http://baladi-v1.bteamwebs.com/api/mobile/product/addToCart";
        } else if (type == "remove") {
          payload = {
            uom_product_id: item.product.id ? item.product.id : item.product_id,
          };
          url = "http://baladi-v1.bteamwebs.com/api/mobile/product/removeCart";
        }

        axios
          .post(url, payload, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            console.log(response.data);
            this.getCart();
          })
          .catch((error) => {});
      }
    },
    addMultipleItems(item, quantity) {
      console.log(item, quantity);
      this.addItems(quantity, item);
      if (localStorage.userInfo != null) {
        let userInfo = JSON.parse(localStorage.userInfo);
        let token = userInfo.token;
        let url = "";
        let payload = {};

        payload = {
          uom_product_id: item.product_id,
          quantity: quantity,
        };
        url = "http://baladi-v1.bteamwebs.com/api/mobile/product/addToCart";

        axios
          .post(url, payload, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            this.getCart();
          })
          .catch((error) => {});
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
            const ProductStore = useProductStore();
            ProductStore.cartListData(this.results);
            // this.results.map((item) => {
            //   this.cartTotal +=
            //     item.quantity *
            //     parseInt(item.uom_product.product.variant_base_price);
            // });
          })
          .catch((error) => {});
      }
    },
  },
});
