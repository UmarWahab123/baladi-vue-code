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
                    <!-- <legend>Basic Info change</legend> -->
                    <!-- <input type="hidden" v-bind="formdata.id" /> -->

                    <p
                      class="
                        woocommerce-form-row woocommerce-form-row--last
                        form-row form-row-last
                      "
                    >
                      <label for="account_last_name"
                        >{{$t('name')}}&nbsp;<span class="">*</span></label
                      >
                      <input
                        v-model="formdata.name"
                        type="text"
                        class="
                          woocommerce-Input woocommerce-Input--text
                          input-text
                        "
                        id="account_last_name"
                        autocomplete="family-name"
                      />
                      <span
                        ><em
                          >  {{$t('name_will_be_displayed')}}</em
                        ></span
                      >
                    </p>
                    <div class="clear"></div>

                    <div class="clear"></div>

                    <p
                      class="
                        woocommerce-form-row woocommerce-form-row--wide
                        form-row form-row-wide
                      "
                    >
                      <label for="account_email"
                        >{{$t('email')}}&nbsp;<span class="required"
                          >*</span
                        ></label
                      >
                      <input
                        v-model="formdata.email"
                        type="email"
                        class="
                          woocommerce-Input woocommerce-Input--email
                          input-text
                        "
                        id="account_email"
                        autocomplete="email"
                      />
                    </p>
                    <p
                      class="
                        woocommerce-form-row woocommerce-form-row--last
                        form-row form-row-last
                      "
                    >
                      <label for="account_last_name"
                        >{{$t('phone')}}&nbsp;<span class="">*</span></label
                      >
                      <input
                        v-model="formdata.phone"
                        type="text"
                        class="
                          woocommerce-Input woocommerce-Input--text
                          input-text
                        "
                        id="account_last_name"
                        autocomplete="phone"
                      />
                      <span
                        ><em
                          >{{$t('name_will_be_displayed')}}</em
                        ></span
                      >
                    </p>
                    <button
                      @click="updateprofile()"
                      type="submit"
                      class="woocommerce-Button button mb-3"
                      name="save_account_details"
                      value="Save changes"
                    >
                    {{$t('save_changes')}}
                    </button>

                    <fieldset class="mt-20">
                      <legend>{{$t('pass_change')}}</legend>
                      <input
                        type="hidden"
                        value="1"
                        v-bind="passdata.customer_id"
                      />

                      <p
                        class="
                          woocommerce-form-row woocommerce-form-row--wide
                          form-row form-row-wide
                        "
                      >
                        <label for="password_current"
                          >{{$t('current_pass')}}</label
                        >
                        <span class="password-input"
                          ><input
                            v-model="passdata.current_password"
                            type="password"
                            class="
                              woocommerce-Input woocommerce-Input--password
                              input-text
                            "
                            id="password_current"
                            autocomplete="off" /><span
                            class="show-password-input"
                          ></span
                        ></span>
                      </p>
                      <p
                        class="
                          woocommerce-form-row woocommerce-form-row--wide
                          form-row form-row-wide
                        "
                      >
                        <label for="password_1"
                          >{{$t('new_pass')}}</label
                        >
                        <span class="password-input"
                          ><input
                            v-model="passdata.new_password"
                            type="password"
                            class="
                              woocommerce-Input woocommerce-Input--password
                              input-text
                            "
                            id="password_1"
                            autocomplete="off" /><span
                            class="show-password-input"
                          ></span
                        ></span>
                      </p>
                      <p
                        class="
                          woocommerce-form-row woocommerce-form-row--wide
                          form-row form-row-wide
                        "
                      >
                        <label for="password_2">{{$t('confirm_new_pass')}}</label>
                        <span class="password-input"
                          ><input
                            type="password"
                            class="
                              woocommerce-Input woocommerce-Input--password
                              input-text
                            "
                            name="password_2"
                            id="password_2"
                            autocomplete="off" /><span
                            class="show-password-input"
                          ></span
                        ></span>
                      </p>
                    </fieldset>
                    <div class="clear"></div>

                    <p>
                      <input
                        type="hidden"
                        id="save-account-details-nonce"
                        name="save-account-details-nonce"
                        value="6618061b2b"
                      /><input
                        type="hidden"
                        name="_wp_http_referer"
                        value="/machic/my-account/edit-account/"
                      />
                      <button
                        type="submit"
                        @click="updatepassword()"
                        class="woocommerce-Button button"
                        name="save_account_details"
                        value="Save changes"
                      >
                        {{$t('save_changes')}}
                      </button>
                      <input
                        type="hidden"
                        name="action"
                        value="save_account_details"
                      />
                    </p>
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
export default {
  data() {
    return {
      isloading: true,
      formdata: {
        phone: "",
        name: "",
        email: "",
      },
      errors: "",
      token: "",
      passdata: {
        customer_id: 1,
        current_password: null,
        new_password: null,
      },
      errors: "",
    };
  },
  mounted() {
    //session
    if (localStorage.userInfo != null) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.token = userInfo.token;
      var langCode = localStorage.getItem("lang");
      axios
        .get("http://baladi-v1.bteamwebs.com/api/auth/getProfile?locale=" +
          langCode, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.formdata.name = response.data.data.name;
          this.formdata.email = response.data.data.email;
          this.formdata.phone = response.data.data.phone;
        })
        .catch((error) => {});

      // console.log(userInfo);
    } else {
      this.$router.push("myaccount");
    }
  },
  methods: {
    updateprofile() {
      axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/auth/updateProfile",
          this.formdata,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.data.status == 400 || response.data.status === 401) {
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
              icon: "error",
              title: response.data.data[0]
                ? response.data.data[0]
                : response.data.message,
            });
          } else {
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
                : response.data.message,
            });
          }
        });
    },
    updatepassword() {
      axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/auth/resetPassword",
          this.passdata,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then((response) => {
          // console.log(response);
          if (response.data.status == 400 || response.data.statu === 401) {
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
              icon: "error",
              title: response.data.data[0]
                ? response.data.data[0]
                : response.data.message,
            });
          } else {
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
                : response.data.message,
            });
          }
        });
    },
  },
};
</script>
