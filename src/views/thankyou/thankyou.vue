<template>
  <Header />

  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="woocommerce-order">
              <p
                class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"
              >
                Thank you. Your order has been received.
              </p>

              <ul
                class="woocommerce-order-overview woocommerce-thankyou-order-details order_details"
              >
                <li class="woocommerce-order-overview__order order">
                  Order number: <strong>2994</strong>
                </li>

                <li class="woocommerce-order-overview__date date">
                  Date: <strong>March 29, 2022</strong>
                </li>

                <li class="woocommerce-order-overview__total total">
                  Total:
                  <strong
                    ><span class="woocommerce-Price-amount amount"
                      ><bdi
                        ><span class="woocommerce-Price-currencySymbol"
                          >QAR </span
                        >644.99</bdi
                      ></span
                    ></strong
                  >
                </li>

                <li class="woocommerce-order-overview__payment-method method">
                  Payment method: <strong>Cash on delivery</strong>
                </li>
              </ul>

              <p>Pay with cash upon delivery.</p>
              <section class="woocommerce-order-details">
                <h2 class="woocommerce-order-details__title">Order details</h2>

                <table
                  class="woocommerce-table woocommerce-table--order-details shop_table order_details"
                >
                  <thead>
                    <tr>
                      <th class="woocommerce-table__product-name product-name">
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
                      <td class="woocommerce-table__product-name product-name">
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
                            ><span class="woocommerce-Price-currencySymbol"
                              >QAR </span
                            >629.99</bdi
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
                            >QAR </span
                          >629.99</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Shipping:</th>
                      <td>
                        <span class="woocommerce-Price-amount amount"
                          ><span class="woocommerce-Price-currencySymbol"
                            >QAR </span
                          >15.00</span
                        >&nbsp;<small class="shipped_via">via Flat rate</small>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Payment method:</th>
                      <td>Cash on delivery</td>
                    </tr>
                    <tr>
                      <th scope="row">Total:</th>
                      <td>
                        <span class="woocommerce-Price-amount amount"
                          ><span class="woocommerce-Price-currencySymbol"
                            >QAR </span
                          >644.99</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th>Note:</th>
                      <td>zzasdadas</td>
                    </tr>
                  </tfoot>
                </table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- site-content -->
  </main>
  <Footer />
</template>
<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
</script>
