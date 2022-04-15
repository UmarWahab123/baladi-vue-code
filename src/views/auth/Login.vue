<template>
  <div class="u-column1 col-md-6">
    <h2>Login</h2>
    <div
      class="woocommerce-form woocommerce-form-login login border shadow p-3 h-90"
      method="post"
    >
      <p
        class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
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
      <p
        class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
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
          class="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme"
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

      <p>Or Connect with</p>
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
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import.meta.env.VITE_API_KEY;
import axios from "axios";
export default {
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
  mounted() {},
  methods: {
    submitdata() {
      axios
        .post(import.meta.env.VITE_API_URL + "/api/auth/login", this.formdata)
        .then((response) => {
          if (response.data.status == 200) {
            localStorage.setItem(
              "userInfo",
              JSON.stringify(response.data.data.user)
            );
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
