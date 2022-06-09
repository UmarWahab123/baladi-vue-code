import { defineStore } from "pinia";
import { groupBy } from "lodash";
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
  },
});
