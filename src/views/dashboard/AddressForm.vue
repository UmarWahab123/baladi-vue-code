<template>
                  <div class="woocommerce-MyAccount-content">
                    <div class="woocommerce-notices-wrapper"></div>
                    <h3>{{$t('Shipping_address')}}</h3>
                    <div class="woocommerce-address-fields">
                      <div class="woocommerce-address-fields__field-wrapper">
                        <input type="hidden" v-model="formdata.id" />
                        <input type="hidden" v-model="formdata.customer_id" />

                        <p
                          class="form-row form-row-first validate-required"
                          id="shipping_first_name_field"
                          data-priority="10"
                        >
                          <label for="shipping_first_name" class=""
                            >{{$t('first_name')}}&nbsp;<abbr
                              class="required"
                              title="required"
                              >*</abbr
                            ></label
                          ><span class="woocommerce-input-wrapper"
                            ><input
                              type="text"
                              class="input-text"
                              v-model="formdata.first_name"
                              id="shipping_first_name"
                              placeholder=""
                              autocomplete="given-name"
                          /></span>
                        </p>
                        <p
                          class="form-row form-row-last validate-required"
                          id="shipping_last_name_field"
                          data-priority="20"
                        >
                          <label for="shipping_last_name" class=""
                            >{{$t('last_name')}}&nbsp;<abbr
                              class="required"
                              title="required"
                              >*</abbr
                            ></label
                          ><span class="woocommerce-input-wrapper"
                            ><input
                              type="text"
                              v-model="formdata.last_name"
                              class="input-text"
                              id="shipping_last_name"
                              placeholder=""
                              autocomplete="family-name"
                          /></span>
                        </p>
                        <!-- <div class="error text-danger" v-if="v$.formdata.last_name.$error">
                            {{ v$.formdata.last_name.required.$message }}
                         </div> -->
                        <p
                          class="form-row form-row-wide"
                          id="shipping_company_field"
                          data-priority="30"
                        >
                          <label for="shipping_company" class=""
                            >{{$t('Zone')}}&nbsp;<span class="optional"></span></label
                          ><span class="woocommerce-input-wrapper"
                            ><input
                              type="text"
                              class="input-text"
                              v-model="formdata.zone"
                              id="shipping_company"
                              placeholder=""
                              autocomplete="organization"
                          /></span>
                        </p>
                          <div class="error text-danger" v-if="v$.formdata.zone.$error">
                              {{ v$.formdata.zone.required.$message }}
                           </div>
                        <p
                          class="form-row form-row-wide"
                          id="shipping_company_field"
                          data-priority="30"
                        >
                          <label for="shipping_company" class=""
                            >{{$t('Contact')}}&nbsp;<span class="optional"></span></label
                          ><span class="woocommerce-input-wrapper"
                            ><input
                              type="text"
                              class="input-text"
                              v-model="formdata.contact"
                              id="shipping_company"
                              placeholder=""
                              autocomplete="organization"
                          /></span>
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
                            >{{$t('Address_Line1')}}&nbsp;<abbr
                              class="required"
                              title="required"
                              >*</abbr
                            ></label
                          ><span class="woocommerce-input-wrapper"
                            ><input
                              type="text"
                              class="input-text"
                              v-model="formdata.address_line_1"
                              id="shipping_address_1"
                              autocomplete="address-line1"
                              data-placeholder="House number and street name"
                          /></span>
                        </p>
                        <div class="error text-danger" v-if="v$.formdata.address_line_1.$error">
                            {{ v$.formdata.address_line_1.required.$message }}
                           </div>
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
                            >{{$t('Address_Line2')}}&nbsp;<abbr
                              class="required"
                              title="required"
                              >*</abbr
                            ></label
                          ><span class="woocommerce-input-wrapper"
                            ><input
                              type="text"
                              class="input-text"
                              v-model="formdata.address_line_2"
                              id="shipping_address_1"
                              autocomplete="address-line1"
                              data-placeholder="House number and street name"
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
                            >{{$t('town_city')}}&nbsp;<abbr
                              class="required"
                              title="required"
                              >*</abbr
                            ></label
                          ><span class="woocommerce-input-wrapper"
                            ><select
                              type="text"
                              class="input-text"
                              v-model="formdata.city_id"
                              id="shipping_city"
                              placeholder=""
                              autocomplete="address-level2"
                            >
                              <option value="" selected>
                                {{$t('Select_an_option')}}
                              </option>
                              <option
                                :data="item"
                                :key="indextr"
                                v-for="(item, indextr) in results"
                                :value="item.id"
                              >
                                {{ item.name }}
                              </option>
                            </select>
                          </span>
                        </p>
                        <div class="error text-danger" v-if="v$.formdata.city_id.$error">
                            {{ v$.formdata.city_id.required.$message }}
                           </div>
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
                            >{{$t('Latitude')}}&nbsp;<abbr
                              class="required"
                              title="required"
                              >*</abbr
                            ></label
                          ><span class="woocommerce-input-wrapper"
                            ><input
                              type="text"
                              class="input-text"
                              v-model="formdata.latitude"
                              id="shipping_postcode"
                              placeholder=""
                              autocomplete="latitude"
                          /></span>
                        </p>
                        <div class="error text-danger" v-if="v$.formdata.latitude.$error">
                            {{ v$.formdata.latitude.required.$message }}
                           </div>
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
                            >{{$t('Longitude')}}&nbsp;<abbr
                              class="required"
                              title="required"
                              >*</abbr
                            ></label
                          ><span class="woocommerce-input-wrapper"
                            ><input
                              type="text"
                              class="input-text"
                              v-model="formdata.longitude"
                              id="shipping_postcode"
                              placeholder=""
                              autocomplete="latitude"
                          /></span>
                        </p>
                        <div class="error text-danger" v-if="v$.formdata.longitude.$error">
                            {{ v$.formdata.longitude.required.$message }}
                           </div>
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
                            >{{$t('Address_Type')}}&nbsp;<abbr
                              class="required"
                              title="required"
                              >*</abbr
                            ></label
                          ><span class="woocommerce-input-wrapper"
                            >
                            <select
                              type="text"
                              class="input-text"
                              v-model="formdata.shipping"
                              id="shipping_city"
                              placeholder=""
                              autocomplete="address-level2"
                            >
                             <option value="0">
                                0
                              </option>
                              <option value="1">
                                1
                              </option>
                              </select>
                         </span>
                        </p>
                      </div>
                      <p>
                        <button
                          type="submit"
                          class="button"
                          @click="saveaddress()"
                          v-if="formdata.id==''"
                        >
                          {{$t('Save_address')}}
                        </button>
                        <button
                          type="submit"
                          class="button"
                          @click="updateaddress()"
                          v-if="formdata.id"
                        >
                          {{$t('Update_address')}}
                        </button>
                        <input
                          type="hidden"
                          id="woocommerce-edit-address-nonce"
                          name="woocommerce-edit-address-nonce"
                          value="dfa7f825d0"
                        /><input
                          type="hidden"
                          name="_wp_http_referer"
                          value="/machic/my-account/edit-address/shipping/"
                        />
                        <input
                          type="hidden"
                          name="action"
                          value="edit_address"
                        />
                      </p>
                    </div>
                  </div>
                
</template>


<script>
import axios from "axios";
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      isloading: true,
      url: "http://baladi-v1.bteamwebs.com/storage/",
      results: [],
      formdata: {
        id: "",
        city_id: "",
        customer_id: "",
        first_name: null,
        last_name: "",
        zone: "",
        contact: "",
        address_line_1: "",
        address_line_2: "",
        latitude: "",
        longitude: "",
        shipping: "",
      },
      errors: "",
      token: "",
    };
  },
  validations() {
    return {
      formdata: {
        zone: {
          required: helpers.withMessage("zone cannot be empty!", required),
        },
        city_id: {
          required: helpers.withMessage("city cannot be empty!", required),
        },
        address_line_1: {
          required: helpers.withMessage("address Line 1 cannot be empty!", required),
        },
        latitude: {
          required: helpers.withMessage("latitude cannot be empty!", required),
        },
        longitude: {
          required: helpers.withMessage("longitude cannot be empty!", required),
        },
      
      },
    };
  },
  mounted() {
    var id = this.$route.params.id;
    this.token = JSON.parse(localStorage.userInfo).token;
    if (localStorage.userInfo != null && id != "") {
      var addresses = JSON.parse(localStorage.userInfo).customer_addresses;
      this.formdata.id = addresses[0].id;
      this.formdata.customer_id = addresses[0].customer_id;
      this.formdata.city_id = addresses[0].city_id;
      this.formdata.first_name = addresses[0].first_name;
      this.formdata.last_name = addresses[0].last_name;
      this.formdata.address_line_1 = addresses[0].address_line_1;
      this.formdata.address_line_2 = addresses[0].address_line_2;
      this.formdata.zone = addresses[0].zone;
      this.formdata.contact = addresses[0].contact;
      this.formdata.latitude = addresses[0].latitude;
      this.formdata.longitude = addresses[0].longitude;
      this.formdata.shipping = addresses[0].shipping;
    }
    setTimeout(() => (this.isloading = false), 1000);
    axios
      .get("http://baladi-v1.bteamwebs.com/api/customer/cities")
      .then((response) => {
        this.results = response.data.data;
        console.log(this.results);
      })
      .catch((error) => {});
  },
  methods: {
   async updateaddress(){
    await axios
    .post("http://baladi-v1.bteamwebs.com/api/customer/address/update/"+this.formdata.id,this.formdata,
         {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
      )
      .then((response) => {
          console.log('responsemessage',response.data.message);
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
            +console.log(response.data.data[0]);
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

      })
      .catch((error) => {});
    },
    async saveaddress() {
      const result = await this.v$.$validate();
      // alert(result);
      if (!result) {
        return;
      }
      await axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/customer/address/store",
          this.formdata,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then((response) => {
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
            +console.log(response.data.data[0]);
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
             var lang = localStorage.getItem("lang");
            this.$router.push("/" + lang + "/edit-address");
          }
        });
    },
  },
};
</script>
