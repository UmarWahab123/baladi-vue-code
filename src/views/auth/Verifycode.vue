<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content my-account-page mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="woocommerce-notices-wrapper"></div>
            <p>
             {{$t('Please_verify_code')}}
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
              <label for="user_login">{{$t('email')}}</label>
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
              <label for="user_login">{{$t('Enter_Code')}}</label>
              <input
                v-model="formdata.code"
                class="woocommerce-Input woocommerce-Input--text input-text"
                type="text"
                id="user_login"
              />
            </p>
            <div class="clear"></div>
            <p class="woocommerce-form-row form-row">
              <input type="hidden" name="wc_reset_password" value="true" />
              <button
                @click="submit()"
                type="submit"
                class="woocommerce-Button button"
              >
                {{$t('Submit')}}
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
        code: null,
      },
      errors: "",
    };
  },
  mounted() {},
  methods: {
    submit() {
      axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/auth/verifyCode",
          this.formdata
        )
        .then((response) => {
          console.log(response.data.message);
          if (response.data.status == 400) {
            this.errors = response.data.message;
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

            this.$router.push("/" + lang + "/updatepassword");
          }
        });
    },
  },
};
</script>
