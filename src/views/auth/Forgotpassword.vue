<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content my-account-page mt-60">
        <div class="container">
          <div class="woocommerce row">
            <div class="col-md-4 col-sm-6 mx-auto">
              <div class="woocommerce-notices-wrapper"></div>

              <p>
                {{$t('Please_enter_your_username_or_email')}}
              </p>
              <div class="row ml-0 mt-10">
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
                <label for="user_login">{{$t('Username_or_email')}}</label>
                <input
                  v-model="formdata.email"
                  class="woocommerce-Input woocommerce-Input--text input-text"
                  type="text"
                  name="user_login"
                  id="user_login"
                  autocomplete="username"
                />
              </p>
              <div class="clear"></div>

              <p class="woocommerce-form-row form-row">
                <input type="hidden" name="wc_reset_password" value="true" />
                <button
                  @click="sendemail()"
                  type="submit"
                  class="woocommerce-Button button"
                  value="Reset password"
                >
                  {{$t('Reset_password')}}
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
export default {
  data() {
    return {
      formdata: {
        email: null,
      },
      errors: "",
    };
  },
  mounted() {},
  methods: {
    sendemail() {
      axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/auth/forgotPassword",
          this.formdata
        )
        .then((response) => {
          // console.log(response.data.message);
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
            var lang = localStorage.getItem("lang");
            this.$router.push("/" + lang + "/verifycode");
          }
        });
    },
  },
};
</script>
