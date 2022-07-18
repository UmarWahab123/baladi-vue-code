<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="woocommerce-notices-wrapper"></div>
           
            <form
              class="checkout_coupon woocommerce-form-coupon"
              method="post"
              action="javascript:void(0)"
            >
                <p>{{$t('have_coupon')}}? {{$t('coupon_codes')}}</p>

                <div class="row">
                 <div class="col-auto">
                <div class="input-group">
                <input
                  type="text"
                  name="coupon_code"
                  class="form-control"
                  placeholder="Coupon code"
                  id="coupon_code"
                  v-model="coupon_Code"
                />
                <button
                  class="button"
                  name="apply_coupon"
                  value="Apply coupon"
                  @click="applyCoupon"
                >
                  {{ $t("apply_coupon") }}
                </button>
                </div>
            </div>
        </div>
              <div class="clear"></div>
            </form>
            <div class="woocommerce-notices-wrapper"></div>
            <div class="row content-wrapper sidebar-right">
              <div class="col-12 col-md-12 col-lg-12 content-primary">
                <form
                  name="checkout"
                  method="post"
                  class="checkout woocommerce-checkout"
                  action="javascript:void(0)"
                  enctype="multipart/form-data"
                  novalidate="novalidate"
                >
                  <div class="cart-wrapper">
                    <div class="col2-set" id="customer_details">
                      <div class="col-1 shadow p-3 mb-4">
                        <div class="woocommerce-billing-fields">
                          <h3>{{ $t("billing_details") }}</h3>
                          <div
                            class="woocommerce-billing-fields__field-wrapper"
                          >
                             <div class="form-row">
                                <label style="font-size:1rem; font-weight:600;">Your Saved Addresses:&nbsp;</label>
                            </div>
                            <div class="form-row addresses-row" style="margin-left: 333px;">
                                <div class="py-3" style="width:max-content;">
                                    <span class="existAddress badge bg-theme mx-2" style="cursor: pointer;background-color: #2ba447;color: white;">Add New</span>
                                    
                                </div>
                            </div>
                          <p
                              class="form-row form-row-wide"
                              id="billing_company_field"
                              data-priority="30"
                              style="max-width: 50% !important;"
                            >
                              <label for="billing_company" class=""
                                >{{ $t("AddressTitle") }}<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  v-model="billing_address.address_title"
                                  autocomplete="organization"
                              /></span>
                            </p>
                              <p
                                class="
                                  form-row form-row-wide
                                  validate-required validate-phone
                                "
                                id="billing_phone_field"
                                data-priority="100"
                              >
                                <label for="billing_phone" class=""
                                  >{{ $t("phone") }}&nbsp;<abbr
                                    class="required"
                                    title="required"
                                    >*</abbr
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><input
                                    type="tel"
                                    class="input-text"
                                    placeholder=""
                                    v-model="shipping_address.contact_no"
                                    autocomplete="tel"
                                /></span>
                              </p>
                           <p
                              class="form-row form-row-first validate-required"
                              id="billing_first_name_field"
                              data-priority="10"
                            >
                              <label for="billing_first_name" class=""
                                >{{ $t("first_name") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_first_name"
                                  id="billing_first_name"
                                  placeholder=""
                                  v-model="billing_address.first_name"
                                  autocomplete="given-name"
                              /></span>
                            </p>
                            <p
                              class="form-row form-row-last validate-required"
                              id="billing_last_name_field"
                              data-priority="20"
                            >
                              <label for="billing_last_name" class=""
                                >{{ $t("last_name") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_last_name"
                                  id="billing_last_name"
                                  placeholder=""
                                  v-model="billing_address.last_name"
                                  autocomplete="family-name"
                              /></span>
                            </p>
                            <p
                              class="
                                form-row
                                address-field
                                validate-required validate-postcode
                                form-row-wide
                              "
                               style="max-width: 50% !important;"
                              id="billing_postcode_field"
                              data-priority="90"
                              data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
                            >
                              <label for="billing_postcode" class=""
                                >{{ $t("zip_code") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_postcode"
                                  id="billing_postcode"
                                  placeholder=""
                                  v-model="billing_address.zone_no"
                              /></span>
                            </p>
                            <p
                              class="
                                form-row
                                address-field
                                validate-required validate-state
                                form-row-wide
                              "
                              style="max-width: 50% !important;"
                              id="billing_state_field"
                              data-priority="80"
                              data-o_class="form-row form-row-wide address-field validate-required validate-state"
                            >
                              <label for="billing_state" class=""
                                >{{ $t("BuildingNo") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  placeholder=""
                                  v-model="billing_address.building_no"
                              /></span>
                            </p>
                             <p
                              class="
                                form-row
                                address-field
                                validate-required
                                form-row-wide
                              "
                              style="max-width: 50% !important;"
                              id="billing_address_1_field"
                              data-priority="50"
                            >
                              <label for="billing_address_1" class=""
                                >{{ $t("street_address") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_address_1"
                                  id="billing_address_1"
                                  placeholder="House number and street name"
                                  v-model="billing_address.address_line_1"
                                  autocomplete="address-line1"
                                  data-placeholder="House number and street name"
                              /></span>
                            </p>
                            <p
                              class="form-row address-field form-row-wide"
                              id="billing_address_2_field"
                              data-priority="60"
                              style="max-width: 50% !important;"
                            >
                              <label for="billing_address_1" class=""
                                >{{ $t("optional") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_address_2"
                                  id="billing_address_2"
                                  placeholder="Apartment, suite, unit, etc. (optional)"
                                  v-model="billing_address.address_line_2"
                                  autocomplete="address-line2"
                                  data-placeholder="Apartment, suite, unit, etc. (optional)"
                              /></span>
                            </p>
                           <p
                              class="
                                form-row
                                address-field
                                validate-required
                                form-row-wide
                              "
                              id="billing_city_field"
                              data-priority="70"
                              style="max-width: 50% !important;"
                              data-o_class="form-row form-row-wide address-field validate-required"
                            >
                              <label for="billing_city" class=""
                                >{{ $t("town_city") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper">
                                <select v-model="billing_address.city_id">
                                  <option
                                    :data="item"
                                    :key="indextr"
                                    v-for="(item, indextr) in cities"
                                    :value="item.id"
                                  >
                                    {{ item.name }}
                                  </option>
                                </select>
                              </span>
                            </p>
                          
                            <!-- <p
                              class="
                                form-row form-row-wide
                                validate-required validate-email
                              "
                              id="billing_email_field"
                              data-priority="110"
                            >
                              <label for="billing_email" class=""
                                >Email address&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="email"
                                  class="input-text"
                                  name="billing_email"
                                  id="billing_email"
                                  placeholder=""
                                  value=""
                                  autocomplete="email"
                              /></span>
                            </p> -->
                          </div>
                        </div>

                        <div class="woocommerce-account-fields">
                          <p
                            class="
                              form-row form-row-wide
                              create-account
                              woocommerce-validated
                            "
                          >
                            <label
                              class="
                                woocommerce-form__label
                                woocommerce-form__label-for-checkbox
                                checkbox d-none
                              "
                            >
                              <input
                                class="
                                  woocommerce-form__input
                                  woocommerce-form__input-checkbox
                                  input-checkbox
                                "
                                id="createaccount"
                                type="checkbox"
                                name="createaccount"
                                value="1"
                              />
                              <span>{{ $t("create_account") }}?</span>
                            </label>
                          </p>

                          <div class="create-account" style="display: none">
                            <p
                              class="form-row validate-required"
                              id="account_username_field"
                              data-priority=""
                            >
                              <label for="account_username" class=""
                                >{{ $t("account_username") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="account_username"
                                  id="account_username"
                                  placeholder="Username"
                                  value=""
                              /></span>
                            </p>
                            <p
                              class="form-row validate-required"
                              id="account_password_field"
                              data-priority=""
                            >
                              <label for="account_password" class=""
                                >{{ $t("create_password") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span
                                class="woocommerce-input-wrapper password-input"
                                ><input
                                  type="password"
                                  class="input-text"
                                  name="account_password"
                                  id="account_password"
                                  placeholder="Password"
                                  value="" /><span
                                  class="show-password-input"
                                ></span
                              ></span>
                            </p>
                            <div class="clear"></div>
                          </div>
                        </div>
                      </div>
                       
                       <div class="col-2 shadow p-3 mb-4" id="stripe_card" style="display: none">
                            <div class="woocommerce-shipping-fields">
                                <div class="shipping_address">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="panel panel-default credit-card-box">
                                                <div class="panel-heading display-table">
                                                    <div class="row display-tr">
                                                        <h3 class="panel-title display-td">Payment Details</h3>
                                                        <div class="rightbar-overlay">
                                                            <img loading="lazy" class="img-responsive pull-right" width="200px" src="http://staging.baladiexpress.com/images/stripe-payment-icons.png">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="panel-body">

                                                                                                        
                                                    <div class="require-validation" data-cc-on-file="false" data-stripe-publishable-key="pk_test_QqZqFAlWRHZY0Da341HnZOki" id="payment-form">
                                                        <div class="form-row row mb-3 mt-2">
                                                            <div class="col-xs-12 form-group required">
                                                                <label class="control-label">Name on Card</label> <input class=" owner-name" size="4" type="text">
                                                            </div>
                                                        </div>

                                                        <div class="form-row row mb-3">
                                                            <div class="col-xs-12 form-group required">
                                                                <label class="control-label">Card Number</label> <input autocomplete="off" class=" card-number" size="20" type="text">
                                                            </div>
                                                        </div>

                                                        <div class="form-row row mb-3">
                                                            <div class="col-xs-12 col-md-4 form-group cvc required">
                                                                <label class="control-label">CVC</label> <input autocomplete="off" class=" card-cvc" placeholder="ex. 311" size="4" type="text">
                                                            </div>
                                                            <div class="col-xs-12 col-md-4 form-group expiration required">
                                                                <label class="control-label">Expiration Month</label> <input class=" card-expiry-month" placeholder="MM" size="2" type="text">
                                                            </div>
                                                            <div class="col-xs-12 col-md-4 form-group expiration required">
                                                                <label class="control-label">Expiration Year</label> <input class=" card-expiry-year" placeholder="YYYY" size="4" type="text">
                                                            </div>
                                                        </div>

                                                        <div class="form-row row">
                                                            <div class="col-md-12 error form-group d-none">
                                                                <div class="alert-danger alert">Please correct the errors and try again.</div>
                                                            </div>
                                                        </div>
                                                        <br>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                      <div class="col-2 shadow p-3 mb-4">
                        <div class="woocommerce-shipping-fields">
                          <h3 id="ship-to-different-address">
                            <label
                              class="
                                woocommerce-form__label
                                woocommerce-form__label-for-checkbox
                                checkbox
                              "
                            >
                              <input
                                id="ship-to-different-address-checkbox"
                                :onclick="myAddress"
                                class="
                                  woocommerce-form__input
                                  woocommerce-form__input-checkbox
                                  input-checkbox
                                "
                                type="checkbox"
                                name="ship_to_different_address"
                                value="1"
                              />
                              <span class="ml-10">{{ $t("ship_different_address") }}</span>
                            </label>
                          </h3>

                          <div
                            id="shipping_address"
                            class="shipping_address"
                            style="display: none"
                          >
                             <div
                            class="woocommerce-billing-fields__field-wrapper"
                          >
                          <p
                              class="form-row form-row-wide"
                              id="billing_company_field"
                              data-priority="30"
                              style="max-width: 50% !important;"
                            >
                              <label for="billing_company" class=""
                                >{{ $t("AddressTitle") }}<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  v-model="shipping_address.address_title"
                                  autocomplete="organization"
                              /></span>
                            </p>
                              <p
                                class="
                                  form-row form-row-wide
                                  validate-required validate-phone
                                "
                                id="billing_phone_field"
                                data-priority="100"
                              >
                                <label for="billing_phone" class=""
                                  >{{ $t("phone") }}&nbsp;<abbr
                                    class="required"
                                    title="required"
                                    >*</abbr
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><input
                                    type="tel"
                                    class="input-text"
                                    placeholder=""
                                    v-model="shipping_address.contact_no"
                                    autocomplete="tel"
                                /></span>
                              </p>
                           <p
                              class="form-row form-row-first validate-required"
                              id="billing_first_name_field"
                              data-priority="10"
                            >
                              <label for="billing_first_name" class=""
                                >{{ $t("first_name") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_first_name"
                                  id="billing_first_name"
                                  placeholder=""
                                  v-model="shipping_address.first_name"
                                  autocomplete="given-name"
                              /></span>
                            </p>
                            <p
                              class="form-row form-row-last validate-required"
                              id="billing_last_name_field"
                              data-priority="20"
                            >
                              <label for="billing_last_name" class=""
                                >{{ $t("last_name") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_last_name"
                                  id="billing_last_name"
                                  placeholder=""
                                  v-model="shipping_address.last_name"
                                  autocomplete="family-name"
                              /></span>
                            </p>
                            <p
                              class="
                                form-row
                                address-field
                                validate-required validate-postcode
                                form-row-wide
                              "
                               style="max-width: 50% !important;"
                              id="billing_postcode_field"
                              data-priority="90"
                              data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
                            >
                              <label for="billing_postcode" class=""
                                >{{ $t("zip_code") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_postcode"
                                  id="billing_postcode"
                                  placeholder=""
                                  v-model="shipping_address.zone_no"
                              /></span>
                            </p>
                            <p
                              class="
                                form-row
                                address-field
                                validate-required validate-state
                                form-row-wide
                              "
                              style="max-width: 50% !important;"
                              id="billing_state_field"
                              data-priority="80"
                              data-o_class="form-row form-row-wide address-field validate-required validate-state"
                            >
                              <label for="billing_state" class=""
                                >{{ $t("BuildingNo") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  placeholder=""
                                  v-model="shipping_address.building_no"
                              /></span>
                            </p>
                             <p
                              class="
                                form-row
                                address-field
                                validate-required
                                form-row-wide
                              "
                              style="max-width: 50% !important;"
                              id="billing_address_1_field"
                              data-priority="50"
                            >
                              <label for="billing_address_1" class=""
                                >{{ $t("street_address") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_address_1"
                                  id="billing_address_1"
                                  placeholder="House number and street name"
                                  v-model="shipping_address.address_line_1"
                                  autocomplete="address-line1"
                                  data-placeholder="House number and street name"
                              /></span>
                            </p>
                            <p
                              class="form-row address-field form-row-wide"
                              id="billing_address_2_field"
                              data-priority="60"
                              style="max-width: 50% !important;"
                            >
                              <label for="billing_address_1" class=""
                                >{{ $t("optional") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_address_2"
                                  id="billing_address_2"
                                  placeholder="Apartment, suite, unit, etc. (optional)"
                                  v-model="shipping_address.address_line_2"
                                  autocomplete="address-line2"
                                  data-placeholder="Apartment, suite, unit, etc. (optional)"
                              /></span>
                            </p>
                           <p
                              class="
                                form-row
                                address-field
                                validate-required
                                form-row-wide
                              "
                              id="billing_city_field"
                              data-priority="70"
                              style="max-width: 50% !important;"
                              data-o_class="form-row form-row-wide address-field validate-required"
                            >
                              <label for="billing_city" class=""
                                >{{ $t("town_city") }}&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper">
                                <select v-model="shipping_address.city_id">
                                  <option
                                    :data="item"
                                    :key="indextr"
                                    v-for="(item, indextr) in cities"
                                    :value="item.id"
                                  >
                                    {{ item.name }}
                                  </option>
                                </select>
                              </span>
                            </p>
                          
                            <!-- <p
                              class="
                                form-row form-row-wide
                                validate-required validate-email
                              "
                              id="billing_email_field"
                              data-priority="110"
                            >
                              <label for="billing_email" class=""
                                >Email address&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="email"
                                  class="input-text"
                                  name="billing_email"
                                  id="billing_email"
                                  placeholder=""
                                  value=""
                                  autocomplete="email"
                              /></span>
                            </p> -->
                          </div>
                          </div>
                        </div>
                        <div class="woocommerce-additional-fields">
                          <div
                            class="woocommerce-additional-fields__field-wrapper"
                          >
                            <p
                              class="form-row notes"
                              id="order_comments_field"
                              data-priority=""
                            >
                              <label for="order_comments" class=""
                                >{{ $t("order_notes") }}&nbsp;<span
                                  class="optional"
                                  >({{ $t("optional") }})</span
                                ></label
                              ><span class="woocommerce-input-wrapper">
                                <textarea
                                  name="order_comments"
                                  class="input-text"
                                  id="order_comments"
                                  placeholder="Notes about your order, e.g. special notes for delivery."
                                  rows="2"
                                  cols="5"
                                  v-model="FormData.delivery_note"
                                ></textarea>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Summary v-if="guestCheck" @guetClick="onClickGuest" />
                    <LoginSummary v-if="loginCheck" @clicked="onClickChild" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- site-content -->
  </main>
  <!-- site-primary -->

  <Footer />
</template>

<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import Billing from "./Billing.vue";
import Summary from "./Summary.vue";
import LoginSummary from "./LoginSummary.vue";
</script>
<script>
import axios from "axios";
export default {
  data: () => ({
    // url: import.meta.env.VITE_API_URL + "/storage/",
    guestCheck: true,
    loginCheck: false,
    coupon_Code: "",
    FormData: {
      billing_address_id: "",
      shipping_as_billing: "",
      delivery_note: "",
      payment_method: "cod",
      coupon_code: "",
      shipping_address_id: "",
    },
    billing_address: {
      first_name: "",
      last_name: "",
      zone_no: "",
      contact_no: "",
      building_no: "",
      address_line_1: "",
      address_line_2: "",
      city_id: "",
      address_title: "",
    },
    shipping_address: {
      first_name: "",
      last_name: "",
      zone_no: "",
      building_no: "",
      address_line_1: "",
      address_line_2: "",
      city_id: "",
      address_title: "",
      contact_no: "",
    },
    cities: [],
    token: "",
  }),
  mounted() {
    var acc = document.getElementsByClassName("input-radio");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling.nextElementSibling;
        if (panel.style.display === "none") {
          panel.style.display = "block";
        } else {
          panel.style.display = "block";
        }
      });
    }
    if (localStorage.userInfo != null) {
      this.guestCheck = false;
      this.loginCheck = true;
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      console.log('testuserInfo',userInfo);
      this.token = userInfo.token;
    }
    axios
      .get("http://baladi-v1.bteamwebs.com/api/customer/cities")
      .then((response) => {
        this.cities = response.data.data;
      })
      .catch((error) => {});
  },
  methods: {
    myAddress() {
      // Get the checkbox
      var checkBox = document.getElementById(
        "ship-to-different-address-checkbox"
      );
      // Get the output text
      var text = document.getElementById("shipping_address");

      // If the checkbox is checked, display the output
      if (checkBox.checked == true) {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    },
    // Coupon() {
    //   if (this.showCoupon == false) {
    //     this.showCoupon = true;
    //   } else {
    //     this.showCoupon = false;
    //   }
    // },
    onClickChild() {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.token = userInfo.token;
      const payload = {
        billing_address_id: this.FormData.billing_address_id,
        shipping_as_billing: this.FormData.shipping_as_billing,
        delivery_note: this.FormData.delivery_note,
        payment_method: this.FormData.payment_method,
        coupon_code: this.FormData.coupon_code,
        shipping_address_id: this.FormData.shipping_address_id,
        billing_address: {
          first_name: this.billing_address.first_name,
          last_name: this.billing_address.last_name,
          zone_no: this.billing_address.zone_no,
          contact_no: this.billing_address.contact_no,
          building_no: this.billing_address.building_no,
          address_line_1: this.billing_address.address_line_1,
          address_line_2: this.billing_address.address_line_2,
          city_id: this.billing_address.city_id,
          address_title: this.billing_address.address_title,
        },
        shipping_address: {
          // first_name: this.shipping_address.first_name,
          // last_name: this.shipping_address.last_name,
          // zone_no: this.shipping_address.zone_no,
          // building_no: this.shipping_address.building_no,
          // address_line_1: this.shipping_address.address_line_1,
          // address_line_2: this.shipping_address.address_line_2,
          // city_id: this.shipping_address.city_id,
          // address_title: this.shipping_address.address_title,
          // contact_no: this.shipping_address.contact_no,
          first_name: this.billing_address.first_name,
          last_name: this.billing_address.last_name,
          zone_no: this.billing_address.zone_no,
          contact_no: this.billing_address.contact_no,
          building_no: this.billing_address.building_no,
          address_line_1: this.billing_address.address_line_1,
          address_line_2: this.billing_address.address_line_2,
          city_id: this.billing_address.city_id,
          address_title: this.billing_address.address_title,
        },
      };
      axios
        .post("http://baladi-v1.bteamwebs.com/api/order-checkout", payload, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
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
          this.$router.push({
            name: "order-confirmation",
            params: {
              id: response.data.data.id,
            },
          });
        })
        .catch((error) => {});
      console.log("clicked", payload);
    },
    applyCoupon() {
      console.log(this.coupon_Code);
      const payload = {
        coupon_code: this.coupon_Code,
      };
      axios
        .post("http://baladi-v1.bteamwebs.com/api/verify-coupon", payload, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
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
          if (response.data.status == 200) {
            this.FormData.coupon_code = this.coupon_Code;
          }
        })
        .catch((error) => {});
    },
    onClickGuest() {
      alert("Guest");
      const payload = {
        billing_address_id: this.FormData.billing_address_id,
        shipping_as_billing: this.FormData.shipping_as_billing,
        delivery_note: this.FormData.delivery_note,
        payment_method: this.FormData.payment_method,
        coupon_code: this.FormData.coupon_code,
        shipping_address_id: this.FormData.shipping_address_id,
        billing_address: {
          first_name: this.billing_address.first_name,
          last_name: this.billing_address.last_name,
          zone_no: this.billing_address.zone_no,
          contact_no: this.billing_address.contact_no,
          building_no: this.billing_address.building_no,
          address_line_1: this.billing_address.address_line_1,
          address_line_2: this.billing_address.address_line_2,
          city_id: this.billing_address.city_id,
          address_title: this.billing_address.address_title,
        },
        shipping_address: {
          // first_name: this.shipping_address.first_name,
          // last_name: this.shipping_address.last_name,
          // zone_no: this.shipping_address.zone_no,
          // building_no: this.shipping_address.building_no,
          // address_line_1: this.shipping_address.address_line_1,
          // address_line_2: this.shipping_address.address_line_2,
          // city_id: this.shipping_address.city_id,
          // address_title: this.shipping_address.address_title,
          // contact_no: this.shipping_address.contact_no,
          first_name: this.billing_address.first_name,
          last_name: this.billing_address.last_name,
          zone_no: this.billing_address.zone_no,
          contact_no: this.billing_address.contact_no,
          building_no: this.billing_address.building_no,
          address_line_1: this.billing_address.address_line_1,
          address_line_2: this.billing_address.address_line_2,
          city_id: this.billing_address.city_id,
          address_title: this.billing_address.address_title,
        },
      };
    },
  },
};
</script>
