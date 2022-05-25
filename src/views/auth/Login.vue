<template>
  <div class="u-column1 col-md-6">
    <h2>Login</h2>
    <div
      class="
        woocommerce-form woocommerce-form-login
        login
        border
        shadow
        p-3
        h-90
      "
      method="post"
    >
      <p
        class="
          woocommerce-form-row woocommerce-form-row--wide
          form-row form-row-wide
        "
      >
        <label for="username"
          >Username or email address&nbsp;<span class="required">*</span></label
        >
        <input
          v-model="formdata.email"
          type="text"
          class="woocommerce-Input woocommerce-Input--text input-text"
          id="username"
          autocomplete="username"
        />
      </p>
      <div class="error text-danger" v-if="v$.formdata.email.$error">
        {{ v$.formdata.email.required.$message }}
      </div>
      <p
        class="
          woocommerce-form-row woocommerce-form-row--wide
          form-row form-row-wide
        "
      >
        <label for="password"
          >Password&nbsp;<span class="required">*</span></label
        >
        <span class="password-input"
          ><span class="password-input"
            ><span class="password-input"
              ><input
                class="woocommerce-Input woocommerce-Input--text input-text"
                type="password"
                id="password"
                autocomplete="current-password"
                v-model="formdata.password" /><span
                class="show-password-input"
              ></span></span
            ><span class="show-password-input"></span
            ><span class="show-password-input"></span></span
          ><span class="show-password-input"></span
          ><span class="show-password-input"></span
          ><span class="show-password-input"></span
        ></span>
      </p>
      <div class="error text-danger" v-if="v$.formdata.password.$error">
        {{ v$.formdata.password.required.$message }}
      </div>

      <p class="form-row"></p>
      <div class="row ml-5">
        <p
          v-if="errors"
          class="alert alert-danger alert-dismissible fade show col-md-6 col-6"
        >
          {{ errors }}
        </p>
      </div>
      <div class="d-flex justify-content-between">
        <label
          class="
            woocommerce-form__label woocommerce-form__label-for-checkbox
            woocommerce-form-login__rememberme
          "
        >
          <input
            class="woocommerce-form__input woocommerce-form__input-checkbox"
            name="rememberme"
            type="checkbox"
            id="rememberme"
            value="forever"
          />
          <span>Remember me</span>
        </label>
        <p class="woocommerce-LostPassword lost_password">
          <router-link to="/forgot-password">Lost your password?</router-link>
        </p>
      </div>
      <button
        type="submit"
        class="woocommerce-button button woocommerce-form-login__submit"
        name="login"
        value="Log in"
        @click="submitdata()"
      >
        Log in
      </button>
      <a to="/" class="ml-5">
        <input
          type="hidden"
          id="woocommerce-login-nonce"
          name="woocommerce-login-nonce"
          value="9096d6b682"
        /><input
          type="hidden"
          name="_wp_http_referer"
          value="/machic/my-account/?d=rtl"
        />
        <router-link
          to="/"
          class="woocommerce-button button2 woocommerce-form-login__submit"
          name="login"
          value="Log in"
        >
          Continue as Guest
        </router-link></a
      >
      <p class="mt-3">Or Connect with</p>
      <div class="social-share site-social colored">
        <ul class="social-container">
          <li>
            <a href="" class="facebook" target="_blank"
              ><i class="klbth-icon-facebook"></i
            ></a>
          </li>

          <li>
            <a href="" class="instag" target="_blank"
              ><i class="klbth-icon-instagram"></i
            ></a>
          </li>
          <li>
            <a href="" class="google" target="_blank"
              ><i class="klbth-icon-google"></i
            ></a>
          </li>
          <li>
            <a href="" class="bg-secondary" target="_blank"
              ><i class="klbth-icon-apple"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import.meta.env.VITE_API_KEY;
import axios from "axios";
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      formdata: {
        email: "imwa5i7@gmail.com",
        password: "imwasil",
        device: "mobile",
        responseData: "null",
      },
      errors: "",
    };
  },
  validations() {
    return {
      formdata: {
        email: {
          required: helpers.withMessage("Email cannot be empty!", required),
        },
        password: {
          required: helpers.withMessage("Password cannot be empty!", required),
        },
      },
    };
  },
  mounted() {},
  methods: {
    async submitdata() {
      const result = await this.v$.$validate();
      // alert(result);
      if (!result) {
        return;
      }
      axios
        .post(import.meta.env.VITE_API_URL + "/api/auth/login", this.formdata)
        .then((response) => {
          if (response.data.status == 200) {
            localStorage.setItem(
              "userInfo",
              JSON.stringify(response.data.data.user)
            );
            // console.log(response);
            var userInfo = JSON.parse(localStorage.getItem("userInfo"));
            userInfo.token = response.data.data.token;
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            var userInfo = JSON.parse(localStorage.getItem("userInfo"));

            console.log(userInfo);
            this.$router.push("/userdashboard");
          } else {
            this.errors = response.data.message;
          }
        });
    },
  },
};
</script>
