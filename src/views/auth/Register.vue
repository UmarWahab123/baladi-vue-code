<template>
  <div class="u-column2 col-md-6">
    <h2>{{$t('register')}}</h2>
    <div
      method="post"
      class="
        woocommerce-form
        border
        shadow
        p-3
        h-90
        woocommerce-form-register
        register
      "
    >
      <p
        class="
          woocommerce-form-row woocommerce-form-row--wide
          form-row form-row-wide
        "
      >
        <input type="hidden" value="1" v-bind="formdata.customer_type_id" />
        <label for="reg_username"
          >{{$t('username')}}&nbsp;<span class="required">*</span></label
        >
        <input
          v-model="formdata.name"
          type="text"
          class="woocommerce-Input woocommerce-Input--text input-text"
          id="reg_username"
        />
      </p>
      <div class="error text-danger" v-if="v$.formdata.name.$error">
        {{ v$.formdata.name.required.$message }}
      </div>
      <p
        class="
          woocommerce-form-row woocommerce-form-row--wide
          form-row form-row-wide
        "
      >
        <label for="reg_username"
          >{{$t('phone')}}&nbsp;<span class="required">*</span></label
        >
        <input
          v-model="formdata.phone"
          type="text"
          class="woocommerce-Input woocommerce-Input--text input-text"
          id="reg_username"
        />
      </p>
      <div class="error text-danger" v-if="v$.formdata.phone.$error">
        {{ v$.formdata.phone.required.$message }}
      </div>
      <p
        class="
          woocommerce-form-row woocommerce-form-row--wide
          form-row form-row-wide
        "
      >
        <label for="reg_email"
          >{{$t('email_address')}}&nbsp;<span class="required">*</span></label
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
      <div class="error text-danger" v-if="v$.formdata.email.$error">
        {{ v$.formdata.email.required.$message }}
      </div>
      <p
        class="
          woocommerce-form-row woocommerce-form-row--wide
          form-row form-row-wide
        "
      >
        <label for="reg_password"
          >{{$t('password')}}&nbsp;<span class="required">*</span></label
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
      <div class="error text-danger" v-if="v$.formdata.password.$error">
        {{ v$.formdata.password.required.$message }}
      </div>
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
          {{$t('personal_data')}}
          <router-link :to="'/' + langCode + '/privacy-policy'"
            >{{$t('privacy_policy')}} </router-link
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
          class="
            woocommerce-Button woocommerce-button
            button
            woocommerce-form-register__submit
          "
          name="register"
          value="Register"
          @click="register()"
        >
          {{$t('register')}}
        </button>
      </p>
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
        customer_type_id: 1,
        name: null,
        email: null,
        phone: null,
        password: null,
        fcm_token: null,
        device: "web",
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
        phone: {
          required: helpers.withMessage("phone cannot be empty!", required),
        },
        name: {
          required: helpers.withMessage("name cannot be empty!", required),
        },
      },
    };
  },
  mounted() {
    // console.log(import.meta.env);
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
  },

  methods: {
    async register() {
      this.formdata.fcm_token = this.formdata.name;
      const result = await this.v$.$validate();
      // alert(result);
      if (!result) {
        return;
      }
      console.log(this.formdata);
      axios
        .post("http://baladi-v1.bteamwebs.com/api/auth/register", this.formdata)
        .then((response) => {
          // console.log(response);

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
            console.log(response.data.data[0]);
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
              title: response.data.message,
            });
          }
        });
    },
  },
};
</script>
