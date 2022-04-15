<template>
  <TheLoader v-show="this.isloading === true"></TheLoader>

  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content my-account-page mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="row content-wrapper sidebar-right">
              <div class="col-12 col-md-12 col-lg-12 content-primary">
                <div class="my-account-wrapper">
                  <Sidebar />

                  <div class="woocommerce-MyAccount-content">
                    <div class="woocommerce-notices-wrapper"></div>

                    <div class="klb-orders-style1">
                      <table
                        class="woocommerce-orders-table rounded woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table"
                      >
                        <thead>
                          <tr>
                            <th
                              class="woocommerce-orders-table__header woocommerce-orders-table__header-order-number"
                            >
                              <span class="nobr">Order</span>
                            </th>
                            <th
                              class="woocommerce-orders-table__header woocommerce-orders-table__header-order-date"
                            >
                              <span class="nobr">Date</span>
                            </th>
                            <th
                              class="woocommerce-orders-table__header woocommerce-orders-table__header-order-status"
                            >
                              <span class="nobr">Status</span>
                            </th>
                            <th
                              class="woocommerce-orders-table__header woocommerce-orders-table__header-order-total"
                            >
                              <span class="nobr">Total</span>
                            </th>
                            <th
                              class="woocommerce-orders-table__header woocommerce-orders-table__header-order-actions"
                            >
                              <span class="nobr">Actions</span>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr
                            class="woocommerce-orders-table__row woocommerce-orders-table__row--status-on-hold order"
                          >
                            <td
                              class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                              data-title="Order"
                            >
                              <a href=""> #2931 </a>
                            </td>
                            <td
                              class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date"
                              data-title="Date"
                            >
                              <time datetime="2022-02-28T05:29:17+00:00"
                                >February 28, 2022</time
                              >
                            </td>
                            <td
                              class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status"
                              data-title="Status"
                            >
                              <span class="badge bg-info">On hold</span>
                            </td>
                            <td
                              class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-total"
                              data-title="Total"
                            >
                              <span class="woocommerce-Price-amount amount"
                                ><span class="woocommerce-Price-currencySymbol"
                                  >$</span
                                >1,068.66</span
                              >
                              for 2 items
                            </td>
                            <td
                              class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions"
                              data-title="Actions"
                            >
                              <a href="" class="woocommerce-button button view"
                                >View</a
                              >
                            </td>
                          </tr>
                          <tr
                            class="woocommerce-orders-table__row woocommerce-orders-table__row--status-on-hold order"
                          >
                            <td
                              class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                              data-title="Order"
                            >
                              <a href=""> #2931 </a>
                            </td>
                            <td
                              class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date"
                              data-title="Date"
                            >
                              <time datetime="2022-02-28T05:29:17+00:00"
                                >February 28, 2022</time
                              >
                            </td>
                            <td
                              class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status"
                              data-title="Status"
                            >
                              <span class="badge bg-success">In Process</span>
                            </td>
                            <td
                              class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-total"
                              data-title="Total"
                            >
                              <span class="woocommerce-Price-amount amount"
                                ><span class="woocommerce-Price-currencySymbol"
                                  >$</span
                                >1,068.66</span
                              >
                              for 2 items
                            </td>
                            <td
                              class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions"
                              data-title="Actions"
                            >
                              <a href="" class="woocommerce-button button view"
                                >View</a
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="order-list">
                        <div class="order-item">
                          <div class="product-name">
                            <a href=""
                              >Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB</a
                            >
                            <strong class="product-quantity">×&nbsp;1</strong>
                          </div>
                          <div class="product-thumbnail">
                            <img
                              src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-150x150.jpg"
                            />
                          </div>
                        </div>
                        <div class="order-item">
                          <div class="product-name">
                            <a href=""
                              >Apple iPhone 11 64GB Yellow Fully Unlocked</a
                            >
                            <strong class="product-quantity">×&nbsp;1</strong>
                          </div>
                          <div class="product-thumbnail">
                            <img
                              src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-150x150.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- my-account-wrapper -->
              </div>
              <!-- content-primary -->
            </div>
            <!-- row -->
          </div>
        </div>
      </div>
      <!--WPFC_FOOTER_START-->
    </div>
    <!-- site-content -->
  </main>
  <Footer />
</template>

<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import Sidebar from "./Sidebar.vue";
</script>

<script>
import TheLoader from "../Loader/TheLoader.vue";
export default {
  components: { TheLoader },
  data() {
    return {
      isloading: true,
    };
  },
  mounted() {
    if (localStorage.userInfo != null) {
    } else {
      this.$router.push("myaccount");
    }
    setTimeout(() => (this.isloading = false), 1000);
    var value = (100000).toLocaleString(
      undefined, // leave undefined to use the visitor's browser
      // locale or a string like 'en-US' to override it.
      { minimumFractionDigits: 2 }
    );
    console.log(value);
  },
};
</script>
