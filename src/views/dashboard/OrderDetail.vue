<template>
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
                    <p>
                      Order #<mark class="order-number">2931</mark> was placed
                      on <mark class="order-date">February 28, 2022</mark> and
                      is currently <mark class="order-status">On hold</mark>.
                    </p>

                    <section class="woocommerce-order-details">
                      <h2 class="woocommerce-order-details__title">
                        Order details
                      </h2>

                      <table
                        class="woocommerce-table woocommerce-table--order-details shop_table order_details"
                      >
                        <thead>
                          <tr>
                            <th
                              class="woocommerce-table__product-name product-name"
                            >
                              Product
                            </th>
                            <th
                              class="woocommerce-table__product-table product-total"
                            >
                              Total
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr class="woocommerce-table__line-item order_item">
                            <td
                              class="woocommerce-table__product-name product-name"
                            >
                              <a
                                href="https://klbtheme.com/machic/product/apple-10-9-inch-ipad-air-wi-fi-cellular-64gb/"
                                >Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB</a
                              >
                              <strong class="product-quantity">×&nbsp;1</strong>
                            </td>

                            <td
                              class="woocommerce-table__product-total product-total"
                            >
                              <span class="woocommerce-Price-amount amount"
                                ><bdi
                                  ><span
                                    class="woocommerce-Price-currencySymbol"
                                    >$</span
                                  >629.99</bdi
                                ></span
                              >
                            </td>
                          </tr>

                          <tr class="woocommerce-table__line-item order_item">
                            <td
                              class="woocommerce-table__product-name product-name"
                            >
                              <a
                                href="https://klbtheme.com/machic/product/apple-iphone-11-64gb-fully-unlocked-yellow/"
                                >Apple iPhone 11 64GB Yellow Fully Unlocked</a
                              >
                              <strong class="product-quantity">×&nbsp;1</strong>
                            </td>

                            <td
                              class="woocommerce-table__product-total product-total"
                            >
                              <span class="woocommerce-Price-amount amount"
                                ><bdi
                                  ><span
                                    class="woocommerce-Price-currencySymbol"
                                    >$</span
                                  >438.67</bdi
                                ></span
                              >
                            </td>
                          </tr>
                        </tbody>

                        <tfoot>
                          <tr>
                            <th scope="row">Subtotal:</th>
                            <td>
                              <span class="woocommerce-Price-amount amount"
                                ><span class="woocommerce-Price-currencySymbol"
                                  >$</span
                                >1,068.66</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Shipping:</th>
                            <td>Local pickup</td>
                          </tr>
                          <tr>
                            <th scope="row">Payment method:</th>
                            <td>Check payments</td>
                          </tr>
                          <tr>
                            <th scope="row">Total:</th>
                            <td>
                              <span class="woocommerce-Price-amount amount"
                                ><span class="woocommerce-Price-currencySymbol"
                                  >$</span
                                >1,068.66</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <th>Note:</th>
                            <td>Dolorem lorem libero</td>
                          </tr>
                        </tfoot>
                      </table>
                    </section>

                    <section class="woocommerce-customer-details">
                      <h2 class="woocommerce-column__title">Billing address</h2>

                      <address>
                        Jena Benjamin<br />Oneill Mcintyre Associates<br />128
                        East Green Old Road<br />Illum nostrud saepe<br />Quisquam
                        est id aliq<br />Cuscatlán<br />77241<br />El Salvador
                        <p class="woocommerce-customer-details--phone">
                          +1 (701) 969-9051
                        </p>

                        <p class="woocommerce-customer-details--email">
                          wagipihako@mailinator.com
                        </p>
                      </address>
                    </section>
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
