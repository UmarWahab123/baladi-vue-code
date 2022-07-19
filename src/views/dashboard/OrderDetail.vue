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
                  <div class="mb-4">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col">
                            <div class="card card-stepper" style="border-radius: 10px;">
                                <div class="card-body p-4">
                                    <div class="track">
                                      <div class="step active"> <span class="icon"> <i class="fa fa-check" style="margin-top: 11px;" aria-hidden="true"></i> </span> <span class="text">04:11 pm</span> <span class="text"> {{$t('Processing')}}</span> </div>
                                      <div class="step"> <span class="icon"> <i class="fa fa-check" style="margin-top: 11px;" aria-hidden="true"></i> </span> <span class="text"></span> <span class="text"></span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="woocommerce-notices-wrapper"></div>
                    <h2 class="woocommerce-order-details__title">
                        {{$t('ORDER')}}# {{
                              results?.id
                             }}
                                <br>
                                <span class="text-muted small mt-1">  <time>{{
                                moment(String(results?.created_at)).format(
                                  "MMMM DD YYYY"
                                )
                              }}</time></span>
                         </h2>
                    <section class="woocommerce-order-details">
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
                            <th scope="row">{{$t('SubTotal')}}:</th>
                            <td>
                              <span class="woocommerce-Price-amount amount"
                                ><span class="woocommerce-Price-currencySymbol"
                                  >{{$t('QAR')}}</span
                                >{{ results?.net_amount }}</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">{{$t('Discount')}}:</th>
                            <td>{{ results?.order_discount }}</td>
                          </tr>
                          <tr>
                            <th scope="row">{{$t('Payment_method')}}:</th>
                            <td>Cash on delivery</td>
                          </tr>
                          <tr>
                            <th scope="row">{{$t('total')}}:</th>
                            <td>
                              <span class="woocommerce-Price-amount amount"
                                ><span class="woocommerce-Price-currencySymbol"
                                  >{{$t('QAR')}}</span
                                >{{ results?.net_amount }}</span
                              >
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </section>
              <div class="row">
                <section class="woocommerce-customer-details col-6">
                    <h2 class="woocommerce-column__title">{{$t('BILLING_ADDRESS')}}</h2>
                    <address>
                      <span>df</span> <br>
                      <span>32</span> <br>
                      <span>3423</span> <br>
                      <span> sdfsd sdfs</span>
                      <p class="woocommerce-customer-details--phone"> 32423</p>
                    </address>
                </section>
                <section class="woocommerce-customer-details col-6">
                    <h2 class="woocommerce-column__title">{{$t('SHIPPING_ADDRESS')}}</h2>
                    <address>
                      <span>df</span> <br>
                      <span>32</span> <br>
                      <span>3423</span> <br>
                      <span> sdfsd sdfs</span>
                      <p class="woocommerce-customer-details--phone"> 32423</p>
                    </address>
                </section>
              </div>
                   <div class="row">
                  <section class="woocommerce-customer-details col-12">
                      <h2 class="woocommerce-column__title">{{$t('Driver_Information')}}</h2>
                      <address>
                        <div class="row">
                            <div class="col-3">
                              <strong>{{$t('Pending')}}</strong> <br>
                            </div>
                        </div>
                      </address>
                  </section>
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
      langCode: "en",
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
    this.langCode = langCode;

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
        console.log("order-details:",this.results);
      })
      .catch((error) => {});
  },
};
</script>
<style>
.align-items-center {
    align-items: center !important;
}
.justify-content-center {
    justify-content: center !important;
}
.col {
    flex: 1 0 0%;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
}
.card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
}
.track {
    position: relative;
    background-color: #ddd;
    height: 7px;
    /* display: -webkit-box;
    display: -ms-flexbox; */
    display: flex;
    margin-bottom: 60px;
    margin-top: 50px;
}
.track .step {
    -webkit-box-flex: 1;
    /* -ms-flex-positive: 1; */
    flex-grow: 1;
    width: 25%;
    margin-top: -18px;
    text-align: center;
    position: relative;
}
.track .step.active:before {
    background: #2ba447;
}

.track .step::before {
    height: 7px;
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    top: 18px;
}
.track .step.active .icon {
    background: #2ba447;
    color: #fff;
}
.track .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: relative;
    border-radius: 100%;
    background: #ddd;
}
.track .step.active .text {
  font-size: 15px;
    color: #000;
}
.track .text {
    display: block;
    margin-top: 7px;
}
</style>