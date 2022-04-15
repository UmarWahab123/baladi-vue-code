<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content my-account-page mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="woocommerce-notices-wrapper"></div>
            <p>
              Please enter email and verify your password reset code. You will
              receive a link to create a new password via email.
            </p>
            <div class="row ml-10 mt-10">
              <p
                v-if="errors"
                class="alert alert-danger alert-dismissible fade show col-md-6 col-6"
              >
                {{ errors }}
              </p>
            </div>
            <p
              class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first"
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
              class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first"
            >
              <label for="user_login">Enter Code</label>
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
                Submit
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
          import.meta.env.VITE_API_URL + "/api/auth/verifyCode",
          this.formdata
        )
        .then((response) => {
          console.log(response.data.message);
          if (response.data.status == 400) {
            this.errors = response.data.message;
          } else {
            this.$router.push("/updatepassword");
          }
        });
    },
  },
};
</script>
