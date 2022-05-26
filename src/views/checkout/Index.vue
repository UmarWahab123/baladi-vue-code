<template>
  <Header />
  <main id="main" class="site-primary">
    <div class="site-content">
      <div class="shop-content mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="woocommerce-notices-wrapper"></div>
            <div class="woocommerce-form-coupon-toggle">
              <div class="woocommerce-info">
                Have a coupon?
                <a href="#" class="showcoupon" @click="Coupon"
                  >Click here to enter your code</a
                >
              </div>
            </div>

            <form
              class="checkout_coupon woocommerce-form-coupon"
              method="post"
              action="javascript:void(0)"
              v-if="showCoupon"
            >
              <p>If you have a coupon code, please apply it below.</p>

              <p class="form-row form-row-first">
                <input
                  type="text"
                  name="coupon_code"
                  class="input-text"
                  placeholder="Coupon code"
                  id="coupon_code"
                  value=""
                />
              </p>

              <p class="form-row form-row-last">
                <button class="button" name="apply_coupon" value="Apply coupon">
                  Apply coupon
                </button>
              </p>

              <div class="clear"></div>
            </form>
            <div class="woocommerce-notices-wrapper"></div>
            <div class="row content-wrapper sidebar-right">
              <div class="col-12 col-md-12 col-lg-12 content-primary">
                <form
                  name="checkout"
                  method="post"
                  class="checkout woocommerce-checkout"
                  action="https://klbtheme.com/machic/checkout/"
                  enctype="multipart/form-data"
                  novalidate="novalidate"
                >
                  <div class="cart-wrapper">
                    <div class="col2-set" id="customer_details">
                      <div class="col-1 shadow p-3 mb-4">
                        <div class="woocommerce-billing-fields">
                          <h3>Billing details</h3>
                          <div
                            class="woocommerce-billing-fields__field-wrapper"
                          >
                            <p
                              class="form-row form-row-first validate-required"
                              id="billing_first_name_field"
                              data-priority="10"
                            >
                              <label for="billing_first_name" class=""
                                >First name&nbsp;<abbr
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
                                  value=""
                                  autocomplete="given-name"
                              /></span>
                            </p>
                            <p
                              class="form-row form-row-last validate-required"
                              id="billing_last_name_field"
                              data-priority="20"
                            >
                              <label for="billing_last_name" class=""
                                >Last name&nbsp;<abbr
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
                                  value=""
                                  autocomplete="family-name"
                              /></span>
                            </p>
                            <p
                              class="form-row form-row-wide"
                              id="billing_company_field"
                              data-priority="30"
                            >
                              <label for="billing_company" class=""
                                >Company name&nbsp;<span class="optional"
                                  >(optional)</span
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_company"
                                  id="billing_company"
                                  placeholder=""
                                  value=""
                                  autocomplete="organization"
                              /></span>
                            </p>
                            <p
                              class="
                                form-row form-row-wide
                                address-field
                                update_totals_on_change
                                validate-required
                              "
                              id="billing_country_field"
                              data-priority="40"
                            >
                              <label for="billing_country" class=""
                                >Country / Region&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><select
                                  name="billing_country"
                                  id="billing_country"
                                  class="
                                    country_to_state country_select
                                    select2-hidden-accessible
                                  "
                                  autocomplete="country"
                                  data-placeholder="Select a country / region…"
                                  data-label="Country / Region"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option value="">
                                    Select a country / region…
                                  </option>
                                  <option value="AF">Afghanistan</option>
                                  <option value="AX">Åland Islands</option>
                                  <option value="AL">Albania</option>
                                  <option value="DZ">Algeria</option>
                                  <option value="AS">American Samoa</option>
                                  <option value="AD">Andorra</option>
                                  <option value="AO">Angola</option>
                                  <option value="AI">Anguilla</option>
                                  <option value="AQ">Antarctica</option>
                                  <option value="AG">
                                    Antigua and Barbuda
                                  </option>
                                  <option value="AR">Argentina</option>
                                  <option value="AM">Armenia</option>
                                  <option value="AW">Aruba</option>
                                  <option value="AU">Australia</option>
                                  <option value="AT">Austria</option>
                                  <option value="AZ">Azerbaijan</option>
                                  <option value="BS">Bahamas</option>
                                  <option value="BH">Bahrain</option>
                                  <option value="BD">Bangladesh</option>
                                  <option value="BB">Barbados</option>
                                  <option value="BY">Belarus</option>
                                  <option value="PW">Belau</option>
                                  <option value="BE">Belgium</option>
                                  <option value="BZ">Belize</option>
                                  <option value="BJ">Benin</option>
                                  <option value="BM">Bermuda</option>
                                  <option value="BT">Bhutan</option>
                                  <option value="BO">Bolivia</option>
                                  <option value="BQ">
                                    Bonaire, Saint Eustatius and Saba
                                  </option>
                                  <option value="BA">
                                    Bosnia and Herzegovina
                                  </option>
                                  <option value="BW">Botswana</option>
                                  <option value="BV">Bouvet Island</option>
                                  <option value="BR">Brazil</option>
                                  <option value="IO">
                                    British Indian Ocean Territory
                                  </option>
                                  <option value="BN">Brunei</option>
                                  <option value="BG">Bulgaria</option>
                                  <option value="BF">Burkina Faso</option>
                                  <option value="BI">Burundi</option>
                                  <option value="KH">Cambodia</option>
                                  <option value="CM">Cameroon</option>
                                  <option value="CA">Canada</option>
                                  <option value="CV">Cape Verde</option>
                                  <option value="KY">Cayman Islands</option>
                                  <option value="CF">
                                    Central African Republic
                                  </option>
                                  <option value="TD">Chad</option>
                                  <option value="CL">Chile</option>
                                  <option value="CN">China</option>
                                  <option value="CX">Christmas Island</option>
                                  <option value="CC">
                                    Cocos (Keeling) Islands
                                  </option>
                                  <option value="CO">Colombia</option>
                                  <option value="KM">Comoros</option>
                                  <option value="CG">
                                    Congo (Brazzaville)
                                  </option>
                                  <option value="CD">Congo (Kinshasa)</option>
                                  <option value="CK">Cook Islands</option>
                                  <option value="CR">Costa Rica</option>
                                  <option value="HR">Croatia</option>
                                  <option value="CU">Cuba</option>
                                  <option value="CW">Curaçao</option>
                                  <option value="CY">Cyprus</option>
                                  <option value="CZ">Czech Republic</option>
                                  <option value="DK">Denmark</option>
                                  <option value="DJ">Djibouti</option>
                                  <option value="DM">Dominica</option>
                                  <option value="DO">Dominican Republic</option>
                                  <option value="EC">Ecuador</option>
                                  <option value="EG">Egypt</option>
                                  <option value="SV">El Salvador</option>
                                  <option value="GQ">Equatorial Guinea</option>
                                  <option value="ER">Eritrea</option>
                                  <option value="EE">Estonia</option>
                                  <option value="ET">Ethiopia</option>
                                  <option value="FK">Falkland Islands</option>
                                  <option value="FO">Faroe Islands</option>
                                  <option value="FJ">Fiji</option>
                                  <option value="FI">Finland</option>
                                  <option value="FR">France</option>
                                  <option value="GF">French Guiana</option>
                                  <option value="PF">French Polynesia</option>
                                  <option value="TF">
                                    French Southern Territories
                                  </option>
                                  <option value="GA">Gabon</option>
                                  <option value="GM">Gambia</option>
                                  <option value="GE">Georgia</option>
                                  <option value="DE">Germany</option>
                                  <option value="GH">Ghana</option>
                                  <option value="GI">Gibraltar</option>
                                  <option value="GR">Greece</option>
                                  <option value="GL">Greenland</option>
                                  <option value="GD">Grenada</option>
                                  <option value="GP">Guadeloupe</option>
                                  <option value="GU">Guam</option>
                                  <option value="GT">Guatemala</option>
                                  <option value="GG">Guernsey</option>
                                  <option value="GN">Guinea</option>
                                  <option value="GW">Guinea-Bissau</option>
                                  <option value="GY">Guyana</option>
                                  <option value="HT">Haiti</option>
                                  <option value="HM">
                                    Heard Island and McDonald Islands
                                  </option>
                                  <option value="HN">Honduras</option>
                                  <option value="HK">Hong Kong</option>
                                  <option value="HU">Hungary</option>
                                  <option value="IS">Iceland</option>
                                  <option value="IN">India</option>
                                  <option value="ID">Indonesia</option>
                                  <option value="IR">Iran</option>
                                  <option value="IQ">Iraq</option>
                                  <option value="IE">Ireland</option>
                                  <option value="IM">Isle of Man</option>
                                  <option value="IL">Israel</option>
                                  <option value="IT">Italy</option>
                                  <option value="CI">Ivory Coast</option>
                                  <option value="JM">Jamaica</option>
                                  <option value="JP">Japan</option>
                                  <option value="JE">Jersey</option>
                                  <option value="JO">Jordan</option>
                                  <option value="KZ">Kazakhstan</option>
                                  <option value="KE">Kenya</option>
                                  <option value="KI">Kiribati</option>
                                  <option value="KW">Kuwait</option>
                                  <option value="KG">Kyrgyzstan</option>
                                  <option value="LA">Laos</option>
                                  <option value="LV">Latvia</option>
                                  <option value="LB">Lebanon</option>
                                  <option value="LS">Lesotho</option>
                                  <option value="LR">Liberia</option>
                                  <option value="LY">Libya</option>
                                  <option value="LI">Liechtenstein</option>
                                  <option value="LT">Lithuania</option>
                                  <option value="LU">Luxembourg</option>
                                  <option value="MO">Macao</option>
                                  <option value="MG">Madagascar</option>
                                  <option value="MW">Malawi</option>
                                  <option value="MY">Malaysia</option>
                                  <option value="MV">Maldives</option>
                                  <option value="ML">Mali</option>
                                  <option value="MT">Malta</option>
                                  <option value="MH">Marshall Islands</option>
                                  <option value="MQ">Martinique</option>
                                  <option value="MR">Mauritania</option>
                                  <option value="MU">Mauritius</option>
                                  <option value="YT">Mayotte</option>
                                  <option value="MX">Mexico</option>
                                  <option value="FM">Micronesia</option>
                                  <option value="MD">Moldova</option>
                                  <option value="MC">Monaco</option>
                                  <option value="MN">Mongolia</option>
                                  <option value="ME">Montenegro</option>
                                  <option value="MS">Montserrat</option>
                                  <option value="MA">Morocco</option>
                                  <option value="MZ">Mozambique</option>
                                  <option value="MM">Myanmar</option>
                                  <option value="NA">Namibia</option>
                                  <option value="NR">Nauru</option>
                                  <option value="NP">Nepal</option>
                                  <option value="NL">Netherlands</option>
                                  <option value="NC">New Caledonia</option>
                                  <option value="NZ">New Zealand</option>
                                  <option value="NI">Nicaragua</option>
                                  <option value="NE">Niger</option>
                                  <option value="NG">Nigeria</option>
                                  <option value="NU">Niue</option>
                                  <option value="NF">Norfolk Island</option>
                                  <option value="KP">North Korea</option>
                                  <option value="MK">North Macedonia</option>
                                  <option value="MP">
                                    Northern Mariana Islands
                                  </option>
                                  <option value="NO">Norway</option>
                                  <option value="OM">Oman</option>
                                  <option value="PK">Pakistan</option>
                                  <option value="PS">
                                    Palestinian Territory
                                  </option>
                                  <option value="PA">Panama</option>
                                  <option value="PG">Papua New Guinea</option>
                                  <option value="PY">Paraguay</option>
                                  <option value="PE">Peru</option>
                                  <option value="PH">Philippines</option>
                                  <option value="PN">Pitcairn</option>
                                  <option value="PL">Poland</option>
                                  <option value="PT">Portugal</option>
                                  <option value="PR">Puerto Rico</option>
                                  <option value="QA">Qatar</option>
                                  <option value="RE">Reunion</option>
                                  <option value="RO">Romania</option>
                                  <option value="RU">Russia</option>
                                  <option value="RW">Rwanda</option>
                                  <option value="ST">
                                    São Tomé and Príncipe
                                  </option>
                                  <option value="BL">Saint Barthélemy</option>
                                  <option value="SH">Saint Helena</option>
                                  <option value="KN">
                                    Saint Kitts and Nevis
                                  </option>
                                  <option value="LC">Saint Lucia</option>
                                  <option value="SX">
                                    Saint Martin (Dutch part)
                                  </option>
                                  <option value="MF">
                                    Saint Martin (French part)
                                  </option>
                                  <option value="PM">
                                    Saint Pierre and Miquelon
                                  </option>
                                  <option value="VC">
                                    Saint Vincent and the Grenadines
                                  </option>
                                  <option value="WS">Samoa</option>
                                  <option value="SM">San Marino</option>
                                  <option value="SA">Saudi Arabia</option>
                                  <option value="SN">Senegal</option>
                                  <option value="RS">Serbia</option>
                                  <option value="SC">Seychelles</option>
                                  <option value="SL">Sierra Leone</option>
                                  <option value="SG">Singapore</option>
                                  <option value="SK">Slovakia</option>
                                  <option value="SI">Slovenia</option>
                                  <option value="SB">Solomon Islands</option>
                                  <option value="SO">Somalia</option>
                                  <option value="ZA">South Africa</option>
                                  <option value="GS">
                                    South Georgia/Sandwich Islands
                                  </option>
                                  <option value="KR">South Korea</option>
                                  <option value="SS">South Sudan</option>
                                  <option value="ES">Spain</option>
                                  <option value="LK">Sri Lanka</option>
                                  <option value="SD">Sudan</option>
                                  <option value="SR">Suriname</option>
                                  <option value="SJ">
                                    Svalbard and Jan Mayen
                                  </option>
                                  <option value="SZ">Swaziland</option>
                                  <option value="SE">Sweden</option>
                                  <option value="CH">Switzerland</option>
                                  <option value="SY">Syria</option>
                                  <option value="TW">Taiwan</option>
                                  <option value="TJ">Tajikistan</option>
                                  <option value="TZ">Tanzania</option>
                                  <option value="TH">Thailand</option>
                                  <option value="TL">Timor-Leste</option>
                                  <option value="TG">Togo</option>
                                  <option value="TK">Tokelau</option>
                                  <option value="TO">Tonga</option>
                                  <option value="TT">
                                    Trinidad and Tobago
                                  </option>
                                  <option value="TN">Tunisia</option>
                                  <option value="TR">Turkey</option>
                                  <option value="TM">Turkmenistan</option>
                                  <option value="TC">
                                    Turks and Caicos Islands
                                  </option>
                                  <option value="TV">Tuvalu</option>
                                  <option value="UG">Uganda</option>
                                  <option value="UA">Ukraine</option>
                                  <option value="AE">
                                    United Arab Emirates
                                  </option>
                                  <option value="GB">
                                    United Kingdom (UK)
                                  </option>
                                  <option value="US" selected="selected">
                                    United States (US)
                                  </option>
                                  <option value="UM">
                                    United States (US) Minor Outlying Islands
                                  </option>
                                  <option value="UY">Uruguay</option>
                                  <option value="UZ">Uzbekistan</option>
                                  <option value="VU">Vanuatu</option>
                                  <option value="VA">Vatican</option>
                                  <option value="VE">Venezuela</option>
                                  <option value="VN">Vietnam</option>
                                  <option value="VG">
                                    Virgin Islands (British)
                                  </option>
                                  <option value="VI">
                                    Virgin Islands (US)
                                  </option>
                                  <option value="WF">Wallis and Futuna</option>
                                  <option value="EH">Western Sahara</option>
                                  <option value="YE">Yemen</option>
                                  <option value="ZM">Zambia</option>
                                  <option value="ZW">Zimbabwe</option></select
                                ><span
                                  class="
                                    select2
                                    select2-container
                                    select2-container--default
                                  "
                                  dir="rtl"
                                  style="width: 100%"
                                  ><span class="selection"
                                    ><span
                                      class="
                                        select2-selection
                                        select2-selection--single
                                      "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabindex="0"
                                      aria-label="Country / Region"
                                      role="combobox"
                                      ><span
                                        class="select2-selection__rendered"
                                        id="select2-billing_country-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="United States (US)"
                                        >United States (US)</span
                                      ><span
                                        class="select2-selection__arrow"
                                        role="presentation"
                                        ><b
                                          role="presentation"
                                        ></b></span></span></span
                                  ><span
                                    class="dropdown-wrapper"
                                    aria-hidden="true"
                                  ></span></span
                                ><noscript
                                  ><button
                                    type="submit"
                                    name="woocommerce_checkout_update_totals"
                                    value="Update country / region"
                                  >
                                    Update country / region
                                  </button></noscript
                                ></span
                              >
                            </p>
                            <p
                              class="
                                form-row
                                address-field
                                validate-required
                                form-row-wide
                              "
                              id="billing_address_1_field"
                              data-priority="50"
                            >
                              <label for="billing_address_1" class=""
                                >Street address&nbsp;<abbr
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
                                  value=""
                                  autocomplete="address-line1"
                                  data-placeholder="House number and street name"
                              /></span>
                            </p>
                            <p
                              class="form-row address-field form-row-wide"
                              id="billing_address_2_field"
                              data-priority="60"
                            >
                              <label
                                for="billing_address_2"
                                class="screen-reader-text"
                                >Apartment, suite, unit, etc.&nbsp;<span
                                  class="optional"
                                  >(optional)</span
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_address_2"
                                  id="billing_address_2"
                                  placeholder="Apartment, suite, unit, etc. (optional)"
                                  value=""
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
                              data-o_class="form-row form-row-wide address-field validate-required"
                            >
                              <label for="billing_city" class=""
                                >Town / City&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="text"
                                  class="input-text"
                                  name="billing_city"
                                  id="billing_city"
                                  placeholder=""
                                  value=""
                                  autocomplete="address-level2"
                              /></span>
                            </p>
                            <p
                              class="
                                form-row
                                address-field
                                validate-required validate-state
                                form-row-wide
                              "
                              id="billing_state_field"
                              data-priority="80"
                              data-o_class="form-row form-row-wide address-field validate-required validate-state"
                            >
                              <label for="billing_state" class=""
                                >State&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><select
                                  name="billing_state"
                                  id="billing_state"
                                  class="state_select select2-hidden-accessible"
                                  autocomplete="address-level1"
                                  data-placeholder="Select an option…"
                                  data-input-classes=""
                                  data-label="State"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option value="">Select an option…</option>
                                  <option value="AL">Alabama</option>
                                  <option value="AK">Alaska</option>
                                  <option value="AZ">Arizona</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="CA">California</option>
                                  <option value="CO">Colorado</option>
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                  <option value="DC">
                                    District Of Columbia
                                  </option>
                                  <option value="FL">Florida</option>
                                  <option value="GA">Georgia</option>
                                  <option value="HI">Hawaii</option>
                                  <option value="ID">Idaho</option>
                                  <option value="IL">Illinois</option>
                                  <option value="IN">Indiana</option>
                                  <option value="IA">Iowa</option>
                                  <option value="KS">Kansas</option>
                                  <option value="KY">Kentucky</option>
                                  <option value="LA">Louisiana</option>
                                  <option value="ME">Maine</option>
                                  <option value="MD">Maryland</option>
                                  <option value="MA">Massachusetts</option>
                                  <option value="MI">Michigan</option>
                                  <option value="MN">Minnesota</option>
                                  <option value="MS">Mississippi</option>
                                  <option value="MO">Missouri</option>
                                  <option value="MT">Montana</option>
                                  <option value="NE">Nebraska</option>
                                  <option value="NV">Nevada</option>
                                  <option value="NH">New Hampshire</option>
                                  <option value="NJ">New Jersey</option>
                                  <option value="NM">New Mexico</option>
                                  <option value="NY">New York</option>
                                  <option value="NC">North Carolina</option>
                                  <option value="ND">North Dakota</option>
                                  <option value="OH">Ohio</option>
                                  <option value="OK">Oklahoma</option>
                                  <option value="OR">Oregon</option>
                                  <option value="PA">Pennsylvania</option>
                                  <option value="RI">Rhode Island</option>
                                  <option value="SC">South Carolina</option>
                                  <option value="SD">South Dakota</option>
                                  <option value="TN">Tennessee</option>
                                  <option value="TX">Texas</option>
                                  <option value="UT">Utah</option>
                                  <option value="VT">Vermont</option>
                                  <option value="VA">Virginia</option>
                                  <option value="WA">Washington</option>
                                  <option value="WV">West Virginia</option>
                                  <option value="WI">Wisconsin</option>
                                  <option value="WY">Wyoming</option>
                                  <option value="AA">Armed Forces (AA)</option>
                                  <option value="AE">Armed Forces (AE)</option>
                                  <option value="AP">
                                    Armed Forces (AP)
                                  </option></select
                                ><span
                                  class="
                                    select2
                                    select2-container
                                    select2-container--default
                                  "
                                  dir="rtl"
                                  style="width: 100%"
                                  ><span class="selection"
                                    ><span
                                      class="
                                        select2-selection
                                        select2-selection--single
                                      "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabindex="0"
                                      aria-label="State"
                                      role="combobox"
                                      ><span
                                        class="select2-selection__rendered"
                                        id="select2-billing_state-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="New York"
                                        >New York</span
                                      ><span
                                        class="select2-selection__arrow"
                                        role="presentation"
                                        ><b
                                          role="presentation"
                                        ></b></span></span></span
                                  ><span
                                    class="dropdown-wrapper"
                                    aria-hidden="true"
                                  ></span></span
                              ></span>
                            </p>
                            <p
                              class="
                                form-row
                                address-field
                                validate-required validate-postcode
                                form-row-wide
                              "
                              id="billing_postcode_field"
                              data-priority="90"
                              data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
                            >
                              <label for="billing_postcode" class=""
                                >ZIP Code&nbsp;<abbr
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
                                  value=""
                                  autocomplete="postal-code"
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
                                >Phone&nbsp;<abbr
                                  class="required"
                                  title="required"
                                  >*</abbr
                                ></label
                              ><span class="woocommerce-input-wrapper"
                                ><input
                                  type="tel"
                                  class="input-text"
                                  name="billing_phone"
                                  id="billing_phone"
                                  placeholder=""
                                  value=""
                                  autocomplete="tel"
                              /></span>
                            </p>
                            <p
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
                            </p>
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
                                checkbox
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
                              <span>Create an account?</span>
                            </label>
                          </p>

                          <div class="create-account" style="display: none">
                            <p
                              class="form-row validate-required"
                              id="account_username_field"
                              data-priority=""
                            >
                              <label for="account_username" class=""
                                >Account username&nbsp;<abbr
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
                                >Create account password&nbsp;<abbr
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

                      <div class="col-2">
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
                              <span>Ship to a different address?</span>
                            </label>
                          </h3>

                          <div
                            id="shipping_address"
                            class="shipping_address"
                            style="display: none"
                          >
                            <div
                              class="woocommerce-shipping-fields__field-wrapper"
                            >
                              <p
                                class="
                                  form-row form-row-first
                                  validate-required
                                "
                                id="shipping_first_name_field"
                                data-priority="10"
                              >
                                <label for="shipping_first_name" class=""
                                  >First name&nbsp;<abbr
                                    class="required"
                                    title="required"
                                    >*</abbr
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><input
                                    type="text"
                                    class="input-text"
                                    name="shipping_first_name"
                                    id="shipping_first_name"
                                    placeholder=""
                                    value=""
                                    autocomplete="given-name"
                                /></span>
                              </p>
                              <p
                                class="form-row form-row-last validate-required"
                                id="shipping_last_name_field"
                                data-priority="20"
                              >
                                <label for="shipping_last_name" class=""
                                  >Last name&nbsp;<abbr
                                    class="required"
                                    title="required"
                                    >*</abbr
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><input
                                    type="text"
                                    class="input-text"
                                    name="shipping_last_name"
                                    id="shipping_last_name"
                                    placeholder=""
                                    value=""
                                    autocomplete="family-name"
                                /></span>
                              </p>
                              <p
                                class="form-row form-row-wide"
                                id="shipping_company_field"
                                data-priority="30"
                              >
                                <label for="shipping_company" class=""
                                  >Company name&nbsp;<span class="optional"
                                    >(optional)</span
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><input
                                    type="text"
                                    class="input-text"
                                    name="shipping_company"
                                    id="shipping_company"
                                    placeholder=""
                                    value=""
                                    autocomplete="organization"
                                /></span>
                              </p>
                              <p
                                class="
                                  form-row form-row-wide
                                  address-field
                                  update_totals_on_change
                                  validate-required
                                "
                                id="shipping_country_field"
                                data-priority="40"
                              >
                                <label for="shipping_country" class=""
                                  >Country / Region&nbsp;<abbr
                                    class="required"
                                    title="required"
                                    >*</abbr
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><select
                                    name="shipping_country"
                                    id="shipping_country"
                                    class="
                                      country_to_state country_select
                                      select2-hidden-accessible
                                    "
                                    autocomplete="country"
                                    data-placeholder="Select a country / region…"
                                    data-label="Country / Region"
                                    tabindex="-1"
                                    aria-hidden="true"
                                  >
                                    <option value="">
                                      Select a country / region…
                                    </option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Åland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">
                                      Antigua and Barbuda
                                    </option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="PW">Belau</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BQ">
                                      Bonaire, Saint Eustatius and Saba
                                    </option>
                                    <option value="BA">
                                      Bosnia and Herzegovina
                                    </option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">
                                      British Indian Ocean Territory
                                    </option>
                                    <option value="BN">Brunei</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">
                                      Central African Republic
                                    </option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">
                                      Cocos (Keeling) Islands
                                    </option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">
                                      Congo (Brazzaville)
                                    </option>
                                    <option value="CD">Congo (Kinshasa)</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curaçao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">
                                      Dominican Republic
                                    </option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">
                                      Equatorial Guinea
                                    </option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">
                                      French Southern Territories
                                    </option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">
                                      Heard Island and McDonald Islands
                                    </option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="CI">Ivory Coast</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Laos</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia</option>
                                    <option value="MD">Moldova</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="KP">North Korea</option>
                                    <option value="MK">North Macedonia</option>
                                    <option value="MP">
                                      Northern Mariana Islands
                                    </option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PS">
                                      Palestinian Territory
                                    </option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Reunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russia</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="ST">
                                      São Tomé and Príncipe
                                    </option>
                                    <option value="BL">Saint Barthélemy</option>
                                    <option value="SH">Saint Helena</option>
                                    <option value="KN">
                                      Saint Kitts and Nevis
                                    </option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="SX">
                                      Saint Martin (Dutch part)
                                    </option>
                                    <option value="MF">
                                      Saint Martin (French part)
                                    </option>
                                    <option value="PM">
                                      Saint Pierre and Miquelon
                                    </option>
                                    <option value="VC">
                                      Saint Vincent and the Grenadines
                                    </option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">
                                      South Georgia/Sandwich Islands
                                    </option>
                                    <option value="KR">South Korea</option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">
                                      Svalbard and Jan Mayen
                                    </option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syria</option>
                                    <option value="TW">Taiwan</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">
                                      Trinidad and Tobago
                                    </option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">
                                      Turks and Caicos Islands
                                    </option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">
                                      United Arab Emirates
                                    </option>
                                    <option value="GB">
                                      United Kingdom (UK)
                                    </option>
                                    <option value="US" selected="selected">
                                      United States (US)
                                    </option>
                                    <option value="UM">
                                      United States (US) Minor Outlying Islands
                                    </option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VA">Vatican</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Vietnam</option>
                                    <option value="VG">
                                      Virgin Islands (British)
                                    </option>
                                    <option value="VI">
                                      Virgin Islands (US)
                                    </option>
                                    <option value="WF">
                                      Wallis and Futuna
                                    </option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option></select
                                  ><span
                                    class="
                                      select2
                                      select2-container
                                      select2-container--default
                                    "
                                    dir="rtl"
                                    style="width: 100%"
                                    ><span class="selection"
                                      ><span
                                        class="
                                          select2-selection
                                          select2-selection--single
                                        "
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabindex="0"
                                        aria-label="Country / Region"
                                        role="combobox"
                                        ><span
                                          class="select2-selection__rendered"
                                          id="select2-shipping_country-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="United States (US)"
                                          >United States (US)</span
                                        ><span
                                          class="select2-selection__arrow"
                                          role="presentation"
                                          ><b
                                            role="presentation"
                                          ></b></span></span></span
                                    ><span
                                      class="dropdown-wrapper"
                                      aria-hidden="true"
                                    ></span></span
                                  ><noscript
                                    ><button
                                      type="submit"
                                      name="woocommerce_checkout_update_totals"
                                      value="Update country / region"
                                    >
                                      Update country / region
                                    </button></noscript
                                  ></span
                                >
                              </p>
                              <p
                                class="
                                  form-row
                                  address-field
                                  validate-required
                                  form-row-wide
                                "
                                id="shipping_address_1_field"
                                data-priority="50"
                              >
                                <label for="shipping_address_1" class=""
                                  >Street address&nbsp;<abbr
                                    class="required"
                                    title="required"
                                    >*</abbr
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><input
                                    type="text"
                                    class="input-text"
                                    name="shipping_address_1"
                                    id="shipping_address_1"
                                    placeholder="House number and street name"
                                    value=""
                                    autocomplete="address-line1"
                                    data-placeholder="House number and street name"
                                /></span>
                              </p>
                              <p
                                class="form-row address-field form-row-wide"
                                id="shipping_address_2_field"
                                data-priority="60"
                              >
                                <label
                                  for="shipping_address_2"
                                  class="screen-reader-text"
                                  >Apartment, suite, unit, etc.&nbsp;<span
                                    class="optional"
                                    >(optional)</span
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><input
                                    type="text"
                                    class="input-text"
                                    name="shipping_address_2"
                                    id="shipping_address_2"
                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                    value=""
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
                                id="shipping_city_field"
                                data-priority="70"
                                data-o_class="form-row form-row-wide address-field validate-required"
                              >
                                <label for="shipping_city" class=""
                                  >Town / City&nbsp;<abbr
                                    class="required"
                                    title="required"
                                    >*</abbr
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><input
                                    type="text"
                                    class="input-text"
                                    name="shipping_city"
                                    id="shipping_city"
                                    placeholder=""
                                    value=""
                                    autocomplete="address-level2"
                                /></span>
                              </p>
                              <p
                                class="
                                  form-row
                                  address-field
                                  validate-required validate-state
                                  form-row-wide
                                "
                                id="shipping_state_field"
                                data-priority="80"
                                data-o_class="form-row form-row-wide address-field validate-required validate-state"
                              >
                                <label for="shipping_state" class=""
                                  >State&nbsp;<abbr
                                    class="required"
                                    title="required"
                                    >*</abbr
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><select
                                    name="shipping_state"
                                    id="shipping_state"
                                    class="
                                      state_select
                                      select2-hidden-accessible
                                    "
                                    autocomplete="address-level1"
                                    data-placeholder="Select an option…"
                                    data-input-classes=""
                                    data-label="State"
                                    tabindex="-1"
                                    aria-hidden="true"
                                  >
                                    <option value="">Select an option…</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">
                                      District Of Columbia
                                    </option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                    <option value="AA">
                                      Armed Forces (AA)
                                    </option>
                                    <option value="AE">
                                      Armed Forces (AE)
                                    </option>
                                    <option value="AP">
                                      Armed Forces (AP)
                                    </option></select
                                  ><span
                                    class="
                                      select2
                                      select2-container
                                      select2-container--default
                                    "
                                    dir="rtl"
                                    style="width: 100%"
                                    ><span class="selection"
                                      ><span
                                        class="
                                          select2-selection
                                          select2-selection--single
                                        "
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabindex="0"
                                        aria-label="State"
                                        role="combobox"
                                        ><span
                                          class="select2-selection__rendered"
                                          id="select2-shipping_state-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="New York"
                                          >New York</span
                                        ><span
                                          class="select2-selection__arrow"
                                          role="presentation"
                                          ><b
                                            role="presentation"
                                          ></b></span></span></span
                                    ><span
                                      class="dropdown-wrapper"
                                      aria-hidden="true"
                                    ></span></span
                                ></span>
                              </p>
                              <p
                                class="
                                  form-row
                                  address-field
                                  validate-required validate-postcode
                                  form-row-wide
                                "
                                id="shipping_postcode_field"
                                data-priority="90"
                                data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
                              >
                                <label for="shipping_postcode" class=""
                                  >ZIP Code&nbsp;<abbr
                                    class="required"
                                    title="required"
                                    >*</abbr
                                  ></label
                                ><span class="woocommerce-input-wrapper"
                                  ><input
                                    type="text"
                                    class="input-text"
                                    name="shipping_postcode"
                                    id="shipping_postcode"
                                    placeholder=""
                                    value=""
                                    autocomplete="postal-code"
                                /></span>
                              </p>
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
                                >Order notes&nbsp;<span class="optional"
                                  >(optional)</span
                                ></label
                              ><span class="woocommerce-input-wrapper">
                                <textarea
                                  name="order_comments"
                                  class="input-text"
                                  id="order_comments"
                                  placeholder="Notes about your order, e.g. special notes for delivery."
                                  rows="2"
                                  cols="5"
                                ></textarea>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Summary />
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
</script>
<script>
// import.meta.env.VITE_API_KEY;
export default {
  data: () => ({
    // url: import.meta.env.VITE_API_URL + "/storage/",
    showCoupon: false,
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
    Coupon() {
      if (this.showCoupon == false) {
        this.showCoupon = true;
      } else {
        this.showCoupon = false;
      }
    },
  },
};
</script>
