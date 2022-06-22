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
                      {{$t('Order')}} #<mark class="order-number">{{
                              results?.id
                            }}</mark> {{$t('was_placed_on')}} <mark class="order-date">{{
                              results?.created_at
                            }}</mark> {{$t('and')}}
                      {{$t('is_currently')}} <mark class="order-status badge bg-success">On hold</mark>.
                    </p>

                    <section class="woocommerce-order-details">
                      <h2 class="woocommerce-order-details__title">
                        {{$t('Order_details')}}
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
                            <th
                              class="
                                woocommerce-table__product-name
                                product-name
                              "
                            >
                               {{$t('Product')}}
                            </th>
                            <th
                              class="
                                woocommerce-table__product-table
                                product-total
                              "
                            >
                              {{$t('total')}}
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr class="woocommerce-table__line-item order_item"
                            v-for="(item, index) in results?.cart">
                            <td
                              class="
                                woocommerce-table__product-name
                                product-name
                              "
                            >
                              <a href="javascript:void(0)"
                                >{{
                                  item?.uom_product?.product?.product_name
                                }}</a>
                              <strong class="product-quantity">×&nbsp;{{ item.quantity }}</strong>
                            </td>

                            <td
                              class="
                                woocommerce-table__product-total
                                product-total
                              "
                            >
                              <span class="woocommerce-Price-amount amount"
                                ><bdi
                                  ><span
                                    class="woocommerce-Price-currencySymbol"
                                    >{{$t('QAR')}} </span
                                  >{{ item?.net_product_amount }}</bdi
                                ></span
                              >
                            </td>
                          </tr>
                        </tbody>

                        <tfoot>
                          <tr>
                            <th scope="row">{{$t('Subtotal')}}:</th>
                            <td>
                              <span class="woocommerce-Price-amount amount"
                                ><span class="woocommerce-Price-currencySymbol"
                                  >{{$t('QAR')}}</span
                                >{{ results.net_amount }}</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">{{$t('Shipping')}}:</th>
                            <td>Local pickup</td>
                          </tr>
                          <tr>
                            <th scope="row">{{$t('Payment_method')}}:</th>
                            <td>Check payments</td>
                          </tr>
                          <tr>
                            <th scope="row">{{$t('total')}}:</th>
                            <td>
                              <span class="woocommerce-Price-amount amount"
                                ><span class="woocommerce-Price-currencySymbol"
                                  >{{$t('QAR')}}</span
                                >{{ results?.sale_amount }}</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <th>{{$t('Note')}}:</th>
                            <td>{{ results?.delivery_note }}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </section>

                    <section class="woocommerce-customer-details">
                      <h2 class="woocommerce-column__title">{{$t('Billing_address')}}</h2>

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
<script>
import axios from "axios";
import moment from "moment";

import TheLoader from "../Loader/TheLoader.vue";
export default {
  components: { TheLoader },
  data() {
    return {
      userdata: { name: "" },
      isloading: true,
      results: [],
      moment: moment,
    };
  },
  mounted() {
    if (localStorage.userInfo != null) {
    } else {
      this.$router.push("myaccount");
    }
    var id = this.$route.params.id;
    console.log(id);
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.token = userInfo.token;
    var langCode = localStorage.getItem("lang");

    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/mobile/driver/orderdetails?order_id=" +
          id + '&locale='+this.langCode,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      )
      .then((response) => {
        this.results = response.data.data[0];
        console.log("blog-details:",this.results);
      })
      .catch((error) => {});
  },
};
</script>
