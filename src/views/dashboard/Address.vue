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

                    <strong class="">
                      {{$t('addresses_on_checkout_page')}}</strong
                    >
                    <router-link
                      to="shipping"
                      class="woocommerce-button button view ml-180"
                    >
                      <button
                        type="submit"
                        class="
                          woocommerce-Button woocommerce-button
                          button
                          woocommerce-form-register__submit
                        "
                        name="register"
                        value="Register"
                      >
                        {{$t('add_address')}} 
                      </button>
                    </router-link>
                    <table
                      class="
                        woocommerce-orders-table
                        rounded
                        my-3
                        woocommerce-MyAccount-orders
                        shop_table shop_table_responsive
                        my_account_orders
                        account-orders-table
                      "
                    >
                      <thead>
                        <tr>
                          <th
                            class="
                              woocommerce-orders-table__header
                              woocommerce-orders-table__header-order-number
                            "
                          >
                            <span class="nobr">{{$t('Address_Type')}} </span>
                          </th>

                          <th
                            class="
                              woocommerce-orders-table__header
                              woocommerce-orders-table__header-order-total
                            "
                          >
                            <span class="nobr">{{$t('address')}}</span>
                          </th>
                          <th
                            class="
                              woocommerce-orders-table__header
                              woocommerce-orders-table__header-order-actions
                            "
                          >
                            <span class="nobr">{{$t('action')}}</span>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr
                          class="
                            woocommerce-orders-table__row
                            woocommerce-orders-table__row--status-on-hold
                            order
                          "
                          :data="item"
                          :key="indextr"
                          v-for="(item, indextr) in addresses"
                        >
                          <td
                            class="
                              woocommerce-orders-table__cell
                              woocommerce-orders-table__cell-order-number
                            "
                            data-title="Order"
                          >
                            <a v-if="item.shipping==0" href=""> {{$t('Billing')}} </a>
                            <a v-if="item.shipping==1" href=""> {{$t('shipping')}}</a>

                          </td>

                          <td
                            class="
                              woocommerce-orders-table__cell
                              woocommerce-orders-table__cell-order-total
                            "
                            data-title="Total"
                          >
                            <span class="woocommerce-Price-amount amount"
                              ><span
                                class="woocommerce-Price-currencySymbol"
                              ></span
                              >{{item.address_line_1}},&nbsp;{{item.address_line_2}}</span>
                            
                          </td>
                          <td
                            class="
                              woocommerce-orders-table__cell
                              woocommerce-orders-table__cell-order-actions
                            "
                            data-title="Actions"
                          >
                            <router-link
                              :to="'/' + langCode + '/shipping/'+ item.id"
                              class="woocommerce-button button view buttonsalignment"
                              >{{$t('edit')}}
                            </router-link>
                            <router-link
                              :to="'/' + langCode + '/deleteaddress/'+ item.id"
                              style="margin-left: 5px; background-color: red"
                              class="woocommerce-button button view"
                              >{{$t('delete')}}
                            </router-link>
                          </td>
                        </tr>
                    
                      </tbody>
                    </table>
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
      langCode: "en",
      addresses:[],
    };
  },
  mounted() {
    // alert(a);
    if (localStorage.userInfo != null) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.addresses = userInfo.customer_addresses;
      console.log('custaddress',this.addresses);

    } else {
      this.$router.push("myaccount");
    }
    setTimeout(() => (this.isloading = false), 1000);
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
  },
};
</script>
