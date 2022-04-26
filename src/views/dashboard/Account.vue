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
                    <legend>Basic Info change</legend>
                    <input type="hidden" value="6" v-bind="formdata.id" />

                    <p
                      class="woocommerce-form-row woocommerce-form-row--last form-row form-row-last"
                    >
                      <label for="account_last_name"
                        >Name&nbsp;<span class="">*</span></label
                      >
                      <input
                        type="text"
                        class="woocommerce-Input woocommerce-Input--text input-text"
                        id="account_last_name"
                        autocomplete="family-name"
                      />
                      <span
                        ><em
                          >This will be how your name will be displayed in the
                          account section and in reviews</em
                        ></span
                      >
                    </p>
                    <div class="clear"></div>

                    <p
                      class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                    >
                      <label for="account_display_name"
                        >Display name&nbsp;<span class="required"
                          >*</span
                        ></label
                      >
                      <input
                        type="text"
                        class="woocommerce-Input woocommerce-Input--text input-text"
                        id="account_display_name"
                      />
                      <label for="account_display_name"
                        >Phone&nbsp;<span class="required">*</span></label
                      >
                      <input
                        v-model="formdata.phone"
                        type="text"
                        class="woocommerce-Input woocommerce-Input--text input-text"
                        id="phone"
                      />
                    </p>
                    <div class="clear"></div>

                    <p
                      class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                    >
                      <label for="account_email"
                        >Email address&nbsp;<span class="required"
                          >*</span
                        ></label
                      >
                      <input
                        type="email"
                        class="woocommerce-Input woocommerce-Input--email input-text"
                        id="account_email"
                        autocomplete="email"
                      />
                    </p>
                    <p>
                      <label for="account_email"
                        >DOB&nbsp;<span class="required">*</span></label
                      >
                      <input
                        type="text"
                        class="woocommerce-Input woocommerce-Input--email input-text"
                        id="account_email"
                        autocomplete="email"
                      />
                    </p>
                    <button
                      @click="updateprofile()"
                      type="submit"
                      class="woocommerce-Button button"
                      name="save_account_details"
                      value="Save changes"
                    >
                      Save changes
                    </button>
                    <div class="row">
                      <p
                        v-if="errors"
                        class="alert alert-danger alert-dismissible fade show col-md-6 col-6"
                      >
                        {{ errors }}
                      </p>
                    </div>
                    <fieldset>
                      <legend>Password change</legend>
                      <input
                        type="hidden"
                        value="1"
                        v-bind="passdata.customer_id"
                      />

                      <p
                        class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                      >
                        <label for="password_current"
                          >Current password (leave blank to leave
                          unchanged)</label
                        >
                        <span class="password-input"
                          ><input
                            v-model="passdata.current_password"
                            type="password"
                            class="woocommerce-Input woocommerce-Input--password input-text"
                            id="password_current"
                            autocomplete="off" /><span
                            class="show-password-input"
                          ></span
                        ></span>
                      </p>
                      <p
                        class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                      >
                        <label for="password_1"
                          >New password (leave blank to leave unchanged)</label
                        >
                        <span class="password-input"
                          ><input
                            v-model="passdata.new_password"
                            type="password"
                            class="woocommerce-Input woocommerce-Input--password input-text"
                            id="password_1"
                            autocomplete="off" /><span
                            class="show-password-input"
                          ></span
                        ></span>
                      </p>
                      <p
                        class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                      >
                        <label for="password_2">Confirm new password</label>
                        <span class="password-input"
                          ><input
                            type="password"
                            class="woocommerce-Input woocommerce-Input--password input-text"
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
                        Save changes
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
import.meta.env.VITE_API_KEY;
import TheLoader from "../Loader/TheLoader.vue";
import axios from "axios";
export default {
  components: { TheLoader },
  data() {
    return {
      isloading: true,
      userdata: { name: "", email: "" },

      formdata: {
        id: 6,
        phone: null,
        name: "",
        email: "",
        dob: "",
      },
      errors: "",

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
      this.userdata = userInfo.name;
      this.userdata1 = userInfo.email;

      // console.log(userInfo);
    } else {
      this.$router.push("myaccount");
    }
    userInfo.token = "5|H9ur6GcusWdc2U0P7KQoYi3HXZjB5xpZtIDcfBzs";
    //userprofile data
    axios
      .get(import.meta.env.VITE_API_URL + "/api/auth/getProfile", {
        headers: {
          Authorization: `${userInfo.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // axios
    //   .get(import.meta.env.VITE_API_URL + "/api/auth/getProfile")
    //   .then((response) => {
    //     // console.log(response);
    //     this.formdata = response.data.data;
    //     // console.log(this.formdata);
    //   })
    //   .catch((error) => {});

    setTimeout(() => (this.isloading = false), 1000);
  },
  methods: {
    updateprofile() {
      axios
        .post(
          "http://baladiweb.bteamwebs.com/api/auth/updateProfile",
          this.formdata
        )
        .then((response) => {
          // console.log(response);
          if (response.data.status == 400) {
            this.errors = response.data.message;
          } else {
            this.errors = response.data.message;
          }
        });
    },
    updatepassword() {
      axios
        .post(
          "http://baladiweb.bteamwebs.com/api/auth/resetPassword",
          this.passdata
        )
        .then((response) => {
          // console.log(response);
          if (response.data.status == 400) {
            this.errors = response.data.message;
          } else {
            this.errors = response.data.message;
          }
        });
    },
  },
};
</script>
