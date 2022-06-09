import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
      budgetDealProducts: [],
      latestDealProducts: [],
      hotDealProducts: [],
      NewarrivalProducts: [],
      BestSellerProducts: [],
      SmartphoneProducts: [],
      wishListProduct: [],
      ids: [],
    };
  },
  getters: {
    wishlistcount() {
      return this.wishListProduct.length;
    },
  },
  actions: {
    async testData(products) {
      //   console.log("products store", products);
      this.products = await products;
    },
    async BudgetDealData(products) {
      //   console.log("products store", products);
      this.budgetDealProducts = await products;
    },
    async LatestDealData(products) {
      // console.log("products store", products);
      this.latestDealProducts = await products;
    },
    async HotDealData(products) {
      // console.log("products store", products);
      this.hotDealProducts = await products;
    },
    async NewarrivalData(products) {
      // console.log("products store", products);
      this.NewarrivalProducts = await products;
    },
    async BestSellerData(products) {
      // console.log("products store", products);
      this.BestSellerProducts = await products;
    },
    async smartphoneData(products) {
      // console.log("products store", products);
      this.SmartphoneProducts = await products;
    },
    async wishListData(products) {
      // console.log("products store", products);
      this.wishListProduct = await products;
    },
  },
});
