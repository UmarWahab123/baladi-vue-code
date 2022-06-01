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
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },
    groupedCount: (state) => (name) => state.grouped[name].length,
    total: (state) =>
      state.items.reduce((p, c) => p + parseInt(c.sale_price), 0),
  },
  actions: {
    addItems(count, item) {
      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
    clearItem(itemName) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },
    setItemCount(item, count) {
      let qty = this.groupedCount(item.name);
      qty = qty + 1;
      this.clearItem(item.name);
      this.addItems(qty, item);
    },
    setItemdecrementCount(item, count) {
      let qty = this.groupedCount(item.name);
      qty = qty - 1;
      this.clearItem(item.name);
      this.addItems(qty, item);
    },
    incrementCount(name) {
      var count = count + 1;
      console.log(count + 1, "count", count);
    },
  },
});
