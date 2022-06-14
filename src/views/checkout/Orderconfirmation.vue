<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="woocommerce-order">
              <p
                class="
                  woocommerce-notice woocommerce-notice--success
                  woocommerce-thankyou-order-received
                "
              >
                {{ $t("Thank_been_received") }}
              </p>

              <ul
                class="
                  woocommerce-order-overview woocommerce-thankyou-order-details
                  order_details
                "
              >
                <li class="woocommerce-order-overview__order order">
                  {{ $t("Order_number") }}: <strong>{{ results?.id }}</strong>
                </li>

                <li class="woocommerce-order-overview__date date">
                  {{ $t("Date") }}:
                  <strong> {{ results?.created_at }}</strong>
                </li>

                <li class="woocommerce-order-overview__email email">
                  {{ $t("email") }}:
                  <strong>{{ results?.customer?.email }}</strong>
                </li>

                <li class="woocommerce-order-overview__total total">
                  {{ $t("total") }}:
                  <strong
                    ><span class="woocommerce-Price-amount amount"
                      ><bdi
                        ><span class="woocommerce-Price-currencySymbol"
                          >{{ $t("QAR") }} </span
                        >{{ results?.net_amount }}</bdi
                      ></span
                    ></strong
                  >
                </li>

                <li class="woocommerce-order-overview__payment-method method">
                  {{ $t("Payment_method") }}:
                  <strong>{{ $t("Direct_bank_transfer") }}</strong>
                </li>
              </ul>

              <section class="woocommerce-order-details">
                <h2 class="woocommerce-order-details__title">
                  {{ $t("Order_details") }}
                </h2>

                <table
                  class="
                    woocommerce-table woocommerce-table--order-details
                    shop_table
                    order_details
                  "
                >
                  <thead>
                    <tr>
                      <th class="woocommerce-table__product-name product-name">
                        {{ $t("Product") }}
                      </th>
                      <th
                        class="woocommerce-table__product-table product-total"
                      >
                        {{ $t("total") }}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      class="woocommerce-table__line-item order_item"
                      v-for="(item, index) in results?.cart"
                    >
                      <td class="woocommerce-table__product-name product-name">
                        <a
                          href="https://klbtheme.com/machic/product/cubitt-smart-watch-ct2s-waterproof-fitness-tracker/"
                          >{{ item?.uom_product?.product?.product_name }}</a
                        >
                        <strong class="product-quantity"
                          >×&nbsp;{{ item.quantity }}</strong
                        >
                      </td>

                      <td
                        class="woocommerce-table__product-total product-total"
                      >
                        <span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >{{ $t("QAR") }} </span
                            >{{ item?.net_product_amount }}</bdi
                          ></span
                        >
                      </td>
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <th scope="row">{{ $t("Subtotal") }}:</th>
                      <td>
                        <span class="woocommerce-Price-amount amount"
                          ><span class="woocommerce-Price-currencySymbol"
                            >{{ $t("QAR") }} </span
                          >{{ results.net_amount }}</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">{{ $t("Discount") }}:</th>
                      <td>{{ $t("QAR") }} {{ results.order_discount }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ $t("Shipping") }}:</th>
                      <td>Free shipping</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ $t("Payment_method") }}:</th>
                      <td>Direct bank transfer</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ $t("total") }}:</th>
                      <td>
                        <span class="woocommerce-Price-amount amount"
                          ><span class="woocommerce-Price-currencySymbol"
                            >{{ $t("QAR") }} </span
                          >{{ results?.sale_amount }}</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th>{{ $t("Note") }}:</th>
                      <td>{{ results?.delivery_note }}</td>
                    </tr>
                  </tfoot>
                </table>
              </section>

              <section class="woocommerce-customer-details">
                <section
                  class="
                    woocommerce-columns
                    woocommerce-columns--2
                    woocommerce-columns--addresses
                    col2-set
                    addresses
                  "
                >
                  <div
                    class="
                      woocommerce-column
                      woocommerce-column--1
                      woocommerce-column--billing-address
                      col-1
                    "
                  >
                    <h2 class="woocommerce-column__title"></h2>

                    <address>
                      Sajid Qureshi<br />quinin<br />peshawr<br />Temporibus ex
                      dolore<br />Peshawar<br />IsBilling addresslamabad Capital
                      Territory<br />10001<br />Pakistan
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
                    class="
                      woocommerce-column
                      woocommerce-column--2
                      woocommerce-column--shipping-address
                      col-2
                    "
                  >
                    <h2 class="woocommerce-column__title">
                      {{ $t("Billing_address") }}
                    </h2>
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

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      results: [],
      moment: moment,
    };
  },
  mounted() {
    var id = this.$route.params.id;
    console.log(id);
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.token = userInfo.token;
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/mobile/driver/orderdetails?order_id=" +
          id,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      )
      .then((response) => {
        this.results = response.data.data[0];
        console.log(this.results);
      })
      .catch((error) => {});
  },
};
</script>