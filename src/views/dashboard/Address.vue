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
                      {{ $t("addresses_on_checkout_page") }}</strong
                    >
                    <a
                      href="javascript:void(0)"
                      @click="clickcomparemodal"
                      class="woocommerce-button button address-btn view p-0"
                    >
                      <button>
                        {{ $t("add_address") }}
                      </button>
                    </a>
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
                            <span class="nobr">{{ $t("Address_Type") }} </span>
                          </th>

                          <th
                            class="
                              woocommerce-orders-table__header
                              woocommerce-orders-table__header-order-total
                            "
                          >
                            <span class="nobr">{{ $t("address") }}</span>
                          </th>
                          <th
                            class="
                              woocommerce-orders-table__header
                              woocommerce-orders-table__header-order-actions
                            "
                          >
                            <span class="nobr">{{ $t("action") }}</span>
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
                            <a v-if="item.shipping == 0" href="">
                              {{ $t("Billing") }}
                            </a>
                            <a v-if="item.shipping == 1" href="">
                              {{ $t("shipping") }}</a
                            >
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
                              >{{ item.address_line_1 }},&nbsp;{{
                                item.address_line_2
                              }}</span
                            >
                          </td>
                          <td
                            class="
                              woocommerce-orders-table__cell
                              woocommerce-orders-table__cell-order-actions
                            "
                            data-title="Actions"
                          >
                            <router-link
                              :to="'/' + langCode + '/shipping/' + item.id"
                              class="
                                woocommerce-button
                                button
                                view
                                buttonsalignment
                              "
                              >{{ $t("edit") }}
                            </router-link>
                            <a
                              @click="deleteaddress(item.id)"
                              style="
                                margin-left: 5px;
                                background-color: red;
                                cursor: pointer;
                              "
                              class="woocommerce-button button view"
                              >{{ $t("delete") }}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="row text-center mb-5 p-4">
                      <h2 v-if="addressnotfound" class="">
                        {{ $t("No_Data_found") }}
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
  <div
    style="display: none"
    :class="showcomparemodal"
    :style="showcomparemodalstyle"
    id="myDIV"
  >
    <div class="mfp-bg mfp-ready"></div>
    <div class="mfp-wrap mfp-auto-cursor mfp-ready" tabindex="-1">
      <div class="mfp-container mfp-s-ready">
        <div class="mfp-content">
          <div
            class="quickview-product single-product-wrapper product white-popup"
            style="width: 800px"
          >
            <div class="quick-product-wrapper single-product-container">
              <button
                @click="closecomparemodal"
                title="Close (Esc)"
                type="button"
                class="mfp-close"
              >
                ×
              </button>

              <!-- row -->
            </div>
            <div class="row">
              <form
                action="http://staging.baladiexpress.com/customer/addresses/store"
                method="POST"
                class="needs-validation"
                novalidate=""
              >
                <input
                  type="hidden"
                  name="_token"
                  value="G0vgrItzDSzIeAT8zQ8fzmdUnYHn1RlDkcIkJsr0"
                />
                <div class="row">
                  <div class="col-6 mb-3">
                    <label class="form-label" for="first_name"
                      >First Name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="first_name"
                      id="first_name"
                      required=""
                      placeholder="First Name (optional) "
                      value=""
                    />

                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-6 mb-3">
                    <label class="form-label" for="validationCustom01"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="last_name"
                      id="validationCustom01"
                      required=""
                      placeholder="Last Name (optional) "
                      value=""
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>

                  <div class="col-6 mb-3">
                    <label class="form-label" for="validationCustom01"
                      >Zone</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="zone"
                      id="validationCustom01"
                      placeholder="Zone"
                      value=""
                      required=""
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-6 mb-3">
                    <label class="form-label" for="validationCustom01"
                      >Building No
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="building"
                      id="validationCustom01"
                      placeholder="Building No "
                      value=""
                      required=""
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-6 mb-3">
                    <label class="form-label" for="validationCustom01"
                      >Contact</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="contact"
                      id="validationCustom01"
                      placeholder="Contact"
                      value=""
                      required=""
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>

                  <div class="col-6 mb-3">
                    <label class="form-label" for="validationCustom01"
                      >Address Type</label
                    >
                    <select name="address_type" class="" required="" id="">
                      <option value="" selected="" disabled="">
                        Select Address Type
                      </option>
                      <option value="1">Shipping</option>
                      <option value="0">Billing</option>
                    </select>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-12 mb-3">
                    <label class="form-label" for="validationCustom01"
                      >Address Title</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="address_title"
                      id="validationCustom01"
                      placeholder="Address Title"
                      value=""
                      required=""
                    />
                    <small>(Home, Office, Work etc)</small><br />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-6 mb-3">
                    <label class="form-label" for="validationCustom01"
                      >Address line 1</label
                    >
                    <textarea
                      name="address_line_1"
                      class=""
                      required=""
                      id=""
0                      rows="6"
                    ></textarea>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-6 mb-3">
                    <label class="form-label" for="validationCustom01"
                      >Address line 2</label
                    >
                    <textarea name="address_line_2" rows="6"></textarea>
                    <div class="valid-feedback">Looks good!</div>
                  </div>

                  <div class="mb-3 text-end">
                    <button type="submit" class="btn btn-primary">Add</button>
                  </div>
                </div>
              </form>
            </div>
            <!-- quick-product-wrapper -->
          </div>
          <!-- quickview-product -->
        </div>
      </div>
    </div>
  </div>
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
      addresses: [],
      addressnotfound: false,
      error: "",
      showcomparemodal: "",
      showcomparemodalstyle: "",
    };
  },
  mounted() {
    // alert(a);
    this.token = JSON.parse(localStorage.userInfo).token;
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/mobile/product/getcustomeraddresses?locale=" +
          this.langCode,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      )
      .then((response) => {
        this.addresses = response.data.data;
        if (this.addresses == "") {
          this.addressnotfound = true;
        } else {
          this.addressnotfound = false;
        }
      })
      .catch((error) => {});
    setTimeout(() => (this.isloading = false), 1000);
  },
  methods: {
    clickcomparemodal() {
      this.showcomparemodal = "show";
      this.showcomparemodalstyle = "display:block";
    },
    closecomparemodal() {
      this.showcomparemodal = "";
      this.showcomparemodalstyle = "";
    },
    deleteaddress(id) {
      axios
        .delete(
          "http://baladi-v1.bteamwebs.com/api/customer/address/delete/" + id,
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
  },
};
</script>
