<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content my-account-page mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="woocommerce-notices-wrapper"></div>
            <p>
              Lost your password? Please enter your email, password and confirm
              the password to update your password.
            </p>
            <div class="row ml-10 mt-10">
              <p
                v-if="errors"
                class="
                  alert alert-danger alert-dismissible
                  fade
                  show
                  col-md-6 col-6
                "
              >
                {{ errors }}
              </p>
            </div>
            <p
              class="
                woocommerce-form-row woocommerce-form-row--first
                form-row form-row-first
              "
            >
              <label for="user_login">Email</label>
              <input
                v-model="formdata.email"
                class="woocommerce-Input woocommerce-Input--text input-text"
                type="text"
                id="user_login"
              />
            </p>
            <p
              class="
                woocommerce-form-row woocommerce-form-row--first
                form-row form-row-first
              "
            >
              <label for="user_login">Password</label>
              <input
                v-model="formdata.password"
                class="woocommerce-Input woocommerce-Input--text input-text"
                type="text"
                id="user_login"
              />
            </p>
            <p
              class="
                woocommerce-form-row woocommerce-form-row--first
                form-row form-row-first
              "
            >
              <label for="user_login">Confirm Password</label>
              <input
                v-model="formdata.confirm_password"
                class="woocommerce-Input woocommerce-Input--text input-text"
                type="text"
                id="user_login"
              />
            </p>
            <div class="clear"></div>
            <p class="woocommerce-form-row form-row">
              <input type="hidden" name="wc_reset_password" value="true" />
              <button
                @click="resetpassword()"
                type="submit"
                class="woocommerce-Button button"
              >
                Reset password
              </button>
            </p>
            <input
              type="hidden"
              id="woocommerce-lost-password-nonce"
              name="woocommerce-lost-password-nonce"
              value="78f5773042"
            /><input type="hidden" name="_wp_http_referer" value="" />
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
import.meta.env.VITE_API_KEY;

import axios from "axios";
export default {
  data() {
    return {
      formdata: {
        email: null,
        password: null,
        confirm_password: null,
      },
      errors: "",
    };
  },
  mounted() {},
  methods: {
    resetpassword() {
      axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/auth/updatePassword",
          this.formdata
        )
        .then((response) => {
          console.log(response.data.message);
          if (response.data.status == 400) {
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
            var lang = localStorage.getItem("lang");

            this.$router.push("/" + lang + "/myaccount");
          }
        });
    },
  },
};
</script>
