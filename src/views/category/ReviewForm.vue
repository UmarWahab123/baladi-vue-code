<template>
   <div id="review_form_wrapper">
                      <div id="review_form">
                        <div id="respond" class="comment-respond">
                          <span id="reply-title" class="comment-reply-title"
                            >{{$t('Add_a_review')}}
                            <small
                              ><a
                                rel="nofollow"
                                id="cancel-comment-reply-link"
                                href="#respond"
                                style="display: none"
                                >{{$t('Cancel_reply')}}</a
                              ></small
                            ></span
                          >
                            <p class="comment-notes">
                              <span id="email-notes"
                                >{{$t('email_address_will_not_be_published')}}</span
                              >
                              {{$t('Required_fields_are_marked')}}
                              <span class="required">*</span>
                            </p>
                            <div class="comment-form-rating">
                              <label for="rating"
                                >{{$t('Your_rating')}}&nbsp;<span class="required"
                                  >*</span
                                ></label
                              >
                              <p class="stars">
                                <span>
                                  <a @click="fstarmethod" class="star-1 onestar" :class='onestar' value="1" href="javascript:void(0)">1</a>
                                  <a @click="sstarmethod" class="star-2 twostar" :class='twostar' value="2" href="javascript:void(0)">2</a>
                                  <a @click="tstarmethod" class="star-3 threestar" :class='threestar' value="3" href="javascript:void(0)">3</a>
                                  <a @click="fostarmethod" class="star-4 fourstar" :class='fourstar' value="4" href="javascript:void(0)">4</a>
                                  <a @click="fistarmethod" class="star-5 fivestar" :class='fivestar' value="5" href="javascript:void(0)">5</a>
                                </span>
                              </p>
                              <select
                                name="rating"
                                id="rating"
                                style="display: none"
                              >
                                <option value="">Rate…</option>
                                <option value="5">Perfect</option>
                                <option value="4">Good</option>
                                <option value="3">Average</option>
                                <option value="2">Not that bad</option>
                                <option value="1">Very poor</option>
                              </select>
                            </div>
                            <div class="error text-danger" v-if="v$.formdata.rating.$error">
                            {{ v$.formdata.rating.required.$message }}
                           </div>
                            <p class="comment-form-comment">
                              <label for="comment"
                                >{{$t('Your_review')}}&nbsp;<span class="required"
                                  >*</span
                                ></label
                              ><textarea
                                id="comment"
                                name="comment"
                                v-model="formdata.comment"
                                cols="45"
                                rows="8"
                                required=""
                              style="height:auto;"></textarea>
                            </p>
                            <div class="error text-danger" v-if="v$.formdata.comment.$error">
                            {{ v$.formdata.comment.required.$message }}
                           </div><br>
                             <p class="form-submit">
                              <input
                                name="submit"
                                type="submit"
                                @click="storereview()"
                                id="submit"
                                class="submit"
                                value="Submit"
                              />
                            </p>
                            <p class="comment-form-cookies-consent d-none">
                              <input
                                id="wp-comment-cookies-consent"
                                name="wp-comment-cookies-consent"
                                type="checkbox"
                                value="yes"
                              />
                              <label for="wp-comment-cookies-consent"
                                >{{$t('Save_my_name')}}</label
                              >
                            </p>
                        </div>
                        <!-- #respond -->
                      </div>
                    </div>


</template>
<script>
import TheLoader from "../Loader/TheLoader.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import axios from "axios";
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
export default {
  setup: () => ({ v$: useVuelidate() }),
  components: { TheLoader, Splide, SplideSlide },
  data: () => ({
    id: "",
    reviews: "",
    showsreviews: "",
    results: [],
    showmodal: "",
    showmodalstyle: "",
    showbigmodal: "",
    showbigmodalstyle: "",
    showcomparemodal: "",
    showcomparemodalstyle: "",
    url: "http://baladiweb.bteamwebs.com/storage/",
    formdata: {
        product_id: "",
        rating: "",
        comment: "",
      },
      token: "",
      error: "",
      onestar:'',
      twostar:'' ,
      threestar:'' ,
      fourstar:'' ,
      fivestar:'',
  
    langCode: "en",
   
  }),
 
validations() {
    return {
      formdata: {
        comment: {
          required: helpers.withMessage("review comment cannot be empty!", required),
        },
        rating: {
          required: helpers.withMessage("rating cannot be empty!", required),
        },
      },
    };
  },
  mounted() {
  
  },
  methods: {
  async storereview() {
    const result = await this.v$.$validate();
    //   alert(result);
    if (!result) {
        return;
      }
      await axios
        .post(
          "http://baladi-v1.bteamwebs.com/api/mobile/product/review/store",
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
          }
        });
    },
  fstarmethod: function () {
      var first = document.querySelector(".onestar");
      var count =first.getAttribute("value");
      this.onestar='active';
      this.twostar='';
      this.threestar='';
      this.fourstar='';
      this.fivestar='';
      this.formdata.rating = count;
   },
  sstarmethod: function () {
      var secound = document.querySelector(".twostar");
      var count =secound.getAttribute("value");
      this.onestar='';
      this.twostar='active';
      this.threestar='';
      this.fourstar='';
      this.fivestar='';
      this.formdata.rating = count;
   },
  tstarmethod: function () {
      var third = document.querySelector(".threestar");
      var count =third.getAttribute("value");
      this.onestar='';
      this.twostar='';
      this.threestar='active';
      this.fourstar='';
      this.fivestar='';
      this.formdata.rating = count;
   },
   fostarmethod: function () {
      var four = document.querySelector(".fourstar");
      var count =four.getAttribute("value");
       this.onestar='';
      this.twostar='';
      this.threestar='';
      this.fourstar='active';
      this.fivestar='';
      this.formdata.rating = count;
   },
  fistarmethod: function () {
      var five = document.querySelector(".fivestar");
      var count =five.getAttribute("value");
       this.onestar='';
      this.twostar='';
      this.threestar='';
      this.fourstar='';
      this.fivestar='active';
      this.formdata.rating = count;
   },
   
    clickreviews: function () {
      this.description = "";
      this.showdescription = "";
      this.showdescription = "d-none";
      this.specification = "";
      this.showspecification = "";
      this.showspecification = "d-none";
      this.reviews = "active";
      this.showsreviews = "active show";
    },
  
  },

};
</script>