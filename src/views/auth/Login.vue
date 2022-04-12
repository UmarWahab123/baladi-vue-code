<template>
  <div class="row" v-if="error == ''">
    <p class="alert alert-danger alert-dismissible fade show col-md-6 col-6">
      {{ errors }}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="closealert()"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </p>
  </div>
  <div class="u-column1 col-md-6">
    <h2>Login</h2>
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
    <p class="form-row">
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
      <button
        type="submit"
        class="woocommerce-button button woocommerce-form-login__submit"
        name="login"
        value="Log in"
        @click="submitdata()"
      >
        Log in
      </button>
    </p>
    <p class="woocommerce-LostPassword lost_password">
      <router-link to="/forgot-password">Lost your password?</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formdata: {
        email: null,
        password: null,
        device: "mobile",
      },
      errors: "",
    };
  },
  mounted() {},
  methods: {
    submitdata() {
      axios
        .post("http://baladiweb.bteamwebs.com/api/auth/login", this.formdata)
        .then((response) => {
          // console.log(response.data.status);
          if (response.data.status == 400) {
            this.errors = response.data.message;
          } else {
            this.$router.push("/");
          }
        });
    },
  },
};
</script>
