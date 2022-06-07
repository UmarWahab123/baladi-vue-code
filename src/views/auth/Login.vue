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
          <router-link :to="'/' + langCode + '/forgot-password'"
            >Lost your password?</router-link
          >
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
        <a
          class="woocommerce-button button2 woocommerce-form-login__submit"
          name="login"
          value="Log in"
          @click="submitguestData()"
        >
          Continue as Guest
        </a></a
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
            <a href="" class="bg-secondary" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-apple"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"
                ></path>
                <path
                  d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"
                ></path>
              </svg>
            </a>
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
        email: "salman@gmail.com",
        password: "11223344",
        device: "mobile",
        responseData: "null",
        fcm_token: "adsfasda",
      },
      errors: "",
      langCode: "en",
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
  mounted() {
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
  },
  methods: {
    async submitdata() {
      const result = await this.v$.$validate();
      // alert(result);
      if (!result) {
        return;
      }
      axios
        .post("http://baladi-v1.bteamwebs.com/api/auth/login", this.formdata)
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
            var lang = localStorage.getItem("lang");

            // console.log(userInfo);
            this.$router.push("/" + lang + "/userdashboard");
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
              icon: "error",
              title: response.data.data[0]
                ? response.data.data[0]
                : response.data.message,
            });
          }
        });
    },
    submitguestData: function () {
      axios
        .post("http://baladi-v1.bteamwebs.com/api/auth/guestLogin")
        .then((response) => {
          if (response.data.status == 200) {
            console.log(response);
            localStorage.setItem(
              "userInfo",
              JSON.stringify(response.data.data)
            );
            // console.log(response);
            var userInfo = JSON.parse(localStorage.getItem("userInfo"));
            console.log(userInfo);

            // userInfo.token = response.data.data.token;
            // localStorage.setItem("userInfo", JSON.stringify(userInfo));
            // var userInfo = JSON.parse(localStorage.getItem("userInfo"));
            var lang = localStorage.getItem("lang");

            // console.log(userInfo);
            this.$router.push("/" + lang + "/userdashboard");
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
              icon: "error",
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
