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
                      class="woocommerce-button button address-btn view p-0"
                    >
                      <button
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
                            <a
                              @click="deleteaddress(item.id)"
                              style="margin-left: 5px; background-color: red; cursor: pointer;"
                              class="woocommerce-button button view"
                              >{{$t('delete')}}
                            </a>
                          </td>
                        </tr>
                    
                      </tbody>
                    </table>
                      <div class="row text-center mb-5 p-4">
                      <h2
                        v-if="addressnotfound"
                        class=""
                      >
                        {{$t('No_Data_found')}}
                      </h2>
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
import axios from "axios";
export default {
  components: { TheLoader },
  data() {
    return {
      isloading: true,
      langCode: "",
      addresses:[],
      addressnotfound:false,
      error:"",

    };
  },
  mounted() {
    // alert(a);
    this.token = JSON.parse(localStorage.userInfo).token;
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
    axios
    .get("http://baladi-v1.bteamwebs.com/api/mobile/product/getcustomeraddresses?locale=" +
           this.langCode,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
       .then((response) => {
         this.addresses = response.data.data;
        if(this.addresses == ""){
          this.addressnotfound = true;
         }else{
          this.addressnotfound = false;
       }
      })
    .catch((error) => {});
    setTimeout(() => (this.isloading = false), 1000);
  
  },
  methods:{
   deleteaddress(id){
      axios
        .delete(
          "http://baladi-v1.bteamwebs.com/api/customer/address/delete/" +
            id,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then((response) => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: response.data.data[0]
              ? response.data.data[0]
              : response.data.data.original.message,
          });

          this.getWishList();
        })
        .catch((error) => {});
    },
  }
   
};
</script>
