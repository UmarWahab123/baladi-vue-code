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
                  Order number: <strong>2864</strong>
                </li>

                <li class="woocommerce-order-overview__date date">
                  Date: <strong>February 15, 2022</strong>
                </li>

                <li class="woocommerce-order-overview__email email">
                  Email: <strong>sajidq046@gmail.com</strong>
                </li>

                <li class="woocommerce-order-overview__total total">
                  Total:
                  <strong
                    ><span class="woocommerce-Price-amount amount"
                      ><bdi
                        ><span class="woocommerce-Price-currencySymbol"
                          >QAR </span
                        >130.00</bdi
                      ></span
                    ></strong
                  >
                </li>

                <li class="woocommerce-order-overview__payment-method method">
                  Payment method: <strong>Direct bank transfer</strong>
                </li>
              </ul>

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
                          href="https://klbtheme.com/machic/product/cubitt-smart-watch-ct2s-waterproof-fitness-tracker/"
                          >Cubitt Smart Watch CT2S Waterproof Fitness Tracker</a
                        >
                        <strong class="product-quantity">×&nbsp;2</strong>
                      </td>

                      <td
                        class="woocommerce-table__product-total product-total"
                      >
                        <span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >QAR </span
                            >130.00</bdi
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
                          >130.00</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Shipping:</th>
                      <td>Free shipping</td>
                    </tr>
                    <tr>
                      <th scope="row">Payment method:</th>
                      <td>Direct bank transfer</td>
                    </tr>
                    <tr>
                      <th scope="row">Total:</th>
                      <td>
                        <span class="woocommerce-Price-amount amount"
                          ><span class="woocommerce-Price-currencySymbol"
                            >QAR </span
                          >130.00</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th>Note:</th>
                      <td>Quis dolor libero vo</td>
                    </tr>
                  </tfoot>
                </table>
              </section>

              <section class="woocommerce-customer-details">
                <section
                  class="woocommerce-columns woocommerce-columns--2 woocommerce-columns--addresses col2-set addresses"
                >
                  <div
                    class="woocommerce-column woocommerce-column--1 woocommerce-column--billing-address col-1"
                  >
                    <h2 class="woocommerce-column__title">Billing address</h2>

                    <address>
                      Sajid Qureshi<br />quinin<br />peshawr<br />Temporibus ex
                      dolore<br />Peshawar<br />Islamabad Capital Territory<br />10001<br />Pakistan
                      <p class="woocommerce-customer-details--phone">
                        03028001920
                      </p>

                      <p class="woocommerce-customer-details--email">
                        sajidq046@gmail.com
                      </p>
                    </address>
                  </div>
                  <!-- /.col-1 -->

                  <div
                    class="woocommerce-column woocommerce-column--2 woocommerce-column--shipping-address col-2"
                  >
                    <h2 class="woocommerce-column__title">Shipping address</h2>
                    <address>
                      Amery Harrington<br />Darrel Bean<br />peshawr<br />Dolores
                      exercitation<br />Peshawar<br />Balochistan<br />41264<br />Pakistan
                    </address>
                  </div>
                  <!-- /.col-2 -->
                </section>
                <!-- /.col2-set -->
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
