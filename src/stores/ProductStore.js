import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
      ids: [],
    };
  },
  actions: {
    async testData(products) {
      this.products = await products;
    },
  },
});
