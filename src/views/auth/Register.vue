<template>
  <div class="u-column2 col-md-6">
    <h2>Register</h2>
    <p
      class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
    >
      <input type="hidden" value="1" v-bind="formdata.customer_type_id" />
      <label for="reg_username"
        >Name&nbsp;<span class="required">*</span></label
      >
      <input
        v-model="formdata.name"
        type="text"
        class="woocommerce-Input woocommerce-Input--text input-text"
        id="reg_username"
      />
    </p>
    <p
      class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
    >
      <label for="reg_username"
        >Phone&nbsp;<span class="required">*</span></label
      >
      <input
        v-model="formdata.phone"
        type="text"
        class="woocommerce-Input woocommerce-Input--text input-text"
        name="phones"
      />
    </p>
    <p
      class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
    >
      <label for="reg_email"
        >Email address&nbsp;<span class="required">*</span></label
      >
      <input
        v-model="formdata.email"
        type="email"
        class="woocommerce-Input woocommerce-Input--text input-text"
        name="email"
        id="reg_email"
        autocomplete="email"
      />
    </p>
    <p
      class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
    >
      <label for="reg_password"
        >Password&nbsp;<span class="required">*</span></label
      >
      <span class="password-input"
        ><span class="password-input"
          ><span class="password-input"
            ><input
              v-model="formdata.password"
              type="password"
              class="woocommerce-Input woocommerce-Input--text input-text"
              id="reg_password"
              autocomplete="new-password" /><span
              class="show-password-input"
            ></span></span
          ><span class="show-password-input"></span
          ><span class="show-password-input"></span></span
        ><span class="show-password-input"></span
        ><span class="show-password-input"></span
        ><span class="show-password-input"></span
      ></span>
    </p>
    <div class="row ml-5">
      <p
        v-if="errors"
        class="alert alert-danger alert-dismissible fade show col-md-6 col-6"
      >
        {{ errors }}
      </p>
    </div>
    <div class="woocommerce-privacy-policy-text">
      <p>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our
        <a
          href="https://klbtheme.com/machic/privacy-policy/"
          class="woocommerce-privacy-policy-link"
          target="_blank"
          >privacy policy</a
        >.
      </p>
    </div>
    <p class="woocommerce-form-row form-row">
      <input
        type="hidden"
        id="woocommerce-register-nonce"
        name="woocommerce-register-nonce"
        value="b98c70acb1"
      /><input
        type="hidden"
        name="_wp_http_referer"
        value="/machic/my-account/?d=rtl"
      />
      <button
        type="submit"
        class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
        name="register"
        value="Register"
        @click="register()"
      >
        Register
      </button>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formdata: {
        customer_type_id: 1,
        name: null,
        phone: null,
        email: null,
        password: null,
      },
      errors: "",
    };
  },
  methods: {
    register() {
      axios
        .post("http://baladiweb.bteamwebs.com/api/auth/register", this.formdata)
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
