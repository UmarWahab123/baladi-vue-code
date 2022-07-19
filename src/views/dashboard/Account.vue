<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content my-account-page mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="row content-wrapper sidebar-right">
              <div class="col-12 col-md-12 col-lg-12 content-primary">
                <div class="my-account-wrapper">
                  <Sidebar />
                    <div class="woocommerce-MyAccount-content">
                      <div class="woocommerce-notices-wrapper"></div>
                      <div>
                      </div>
                          <!--update account form fields -->

                          <input type="hidden" name="_token" value="0cvsPlVbt2T6z4Qv7RZYcZZc5JiMQFKUaQZavTEr">                                        
                          <div class="row">
                            <div class="col-md-12">
                                <div class="py-2">
                                  <img loading="lazy" class="shadow border p-2" src="http://staging.baladiexpress.com/frontend/profile.jpg" hight="100" width="100" alt="" id="showImg">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <p class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                                  <label for="account_first_name">{{$t('First_Name')}}&nbsp;<span class="required">*</span></label>
                                  <input type="text" class="woocommerce-Input woocommerce-Input--text input-text " name="first_name" id="first_name" autocomplete="given-name" value="umar">
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p class="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                                  <label for="last_name">{{$t('Last_Name')}}&nbsp;<span class="required">*</span></label>
                                  <input type="text" class="woocommerce-Input woocommerce-Input--text input-text  " name="last_name" id="last_name" autocomplete="family-name" value="">
                                </p>
                                <div class="clear"></div>
                            </div>
                          </div>
                          <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                            <label for="account_display_name">{{$t('Display_Name')}}&nbsp;<span class="required">*</span></label>
                            <input type="text" disabled="" class="woocommerce-Input woocommerce-Input--text input-text" name="display_name" id="display_name" value="umar">
                            <span><span>{{$t('name-display-msg')}}</span></span>
                          </p>
                          <div class="clear"></div>
                          <div class="row">
                            <div class="col-md-6">
                                <p class="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                                  <label for="phone">{{$t('Phone_No')}}&nbsp;<span class="required">*</span></label>
                                  <input type="tel" class="woocommerce-Input woocommerce-Input--text input-text" name="phone" id="account_last_name" autocomplete="phone no" value="">
                                </p>
                                <div class="clear"></div>
                            </div>
                            <div class="col-md-6">
                                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                  <label for="account_email">{{$t('email_address')}}&nbsp;<span class="required">*</span></label>
                                  <input type="email" disabled="" class="woocommerce-Input woocommerce-Input--email input-text" name="account_email" id="account_email" autocomplete="email" value="umarwahab672@gmail.com">
                                </p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                                <p class="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                                  <label for="phone">{{$t('Date_Of_Birth')}}&nbsp;<span class="required">*</span></label>
                                  <input type="date" class="woocommerce-Input woocommerce-Input--text input-text" name="dob" id="account_last_name" value="" autocomplete="date">
                                </p>
                                <div class="clear"></div>
                            </div>
                            <div class="col-md-6">
                                <p class="woocommerce-form-row woocommerce-form-row--wide form-row mb-0 form-row-wide">
                                  <label>{{$t('Upload_Image')}}&nbsp;<span class="required">*</span></label> <br>
                                </p>
                                <div class="border py-1 px-2 rounded-2">
                                  <label for="custom-file" class="custom-file-upload">{{$t('Choose_file')}}</label>
                                </div>
                                <input type="file" class="form-control border  pt-2" id="custom-file" name="photo" onchange="PreviewImg()" style="display: none">
                                <p></p>
                            </div>
                            <div class="text-end mb-3">
                                <button class="btn btn-success">{{$t('update')}}</button>
                            </div>
                          </div>
                          <!--update password form fields -->
                          <input type="hidden" name="_token" value="0cvsPlVbt2T6z4Qv7RZYcZZc5JiMQFKUaQZavTEr">                                        
                          <fieldset>
                            <legend>{{$t('pass_change')}}</legend>
                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label for="password_current">{{$t('current_pass')}}</label>
                                <span class="password-input"><input type="password" class="woocommerce-Input woocommerce-Input--password input-text  " name="current_password" min="7" id="password_current" autocomplete="off">
                                <span class="show-password-input"></span></span>
                            </p>
                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label for="password_1">{{$t('new_pass')}}</label>
                                <span class="password-input"><input type="password" min="7" class="woocommerce-Input woocommerce-Input--password input-text  " name="password" id="password_1" autocomplete="off">
                                <span class="show-password-input"></span></span>
                            </p>
                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label for="password_2">{{$t('confirm_new_pass')}}</label>
                                <span class="password-input"><input type="password" min="7" class="woocommerce-Input woocommerce-Input--password input-text " name="password_confirmation" id="password_2" autocomplete="off">
                                <span class="show-password-input"></span></span>
                            </p>
                          </fieldset>
                          <p>
                            <input type="hidden" id="save-account-details-nonce" name="save-account-details-nonce" value="6618061b2b"><input type="hidden" name="_wp_http_referer" value="/machic/my-account/edit-account/"> <button type="submit" class="woocommerce-Button button" name="save_account_details" value="Save changes">{{$t('Change_Password')}}</button>
                            <input type="hidden" name="action" value="save_account_details">
                          </p>
                    </div>
                </div>
                <!-- my-account-wrapper -->
              </div>
              <!-- content-primary -->
            </div>
            <!-- row -->
          </div>
        </div>
      </div>
      <!--WPFC_FOOTER_START-->
    </div>
    <!-- site-content -->
  </main>
  <Footer />
</template>

<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import Sidebar from "./Sidebar.vue";
</script>
<script>
import axios from "axios";
export default {
  data() {
    return {
      isloading: true,
      formdata: {
        phone: "",
        name: "",
        email: "",
      },
      errors: "",
      token: "",
      passdata: {
        customer_id: 1,
        current_password: null,
        new_password: null,
      },
      errors: "",
    };
  },
  mounted() {
    //session
    if (localStorage.userInfo != null) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.token = userInfo.token;
      var langCode = localStorage.getItem("lang");
      axios
        .get("http://baladi-v1.bteamwebs.com/api/auth/getProfile?locale=" +
          langCode, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          //temprary commented below line
          // this.formdata.name = response.data.data.name;
          // this.formdata.email = response.data.data.email;
          // this.formdata.phone = response.data.data.phone;
        })
        .catch((error) => {});

      // console.log(userInfo);
    } else {
      this.$router.push("myaccount");
    }
  },
  methods: {
    updateprofile() {
      axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/auth/updateProfile",
          this.formdata,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.data.status == 400 || response.data.status === 401) {
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
          }
        });
    },
    updatepassword() {
      axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/auth/resetPassword",
          this.passdata,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then((response) => {
          // console.log(response);
          if (response.data.status == 400 || response.data.statu === 401) {
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
          }
        });
    },
  },
};
</script>
