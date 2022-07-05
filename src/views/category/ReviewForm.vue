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
    specification: "",
    description: "",
    showdescription: "",
    showspecification: "",
    reviews: "",
    showsreviews: "",
    results: [],
    showmodal: "",
    showmodalstyle: "",
    showbigmodal: "",
    showbigmodalstyle: "",
    showcomparemodal: "",
    showcomparemodalstyle: "",
    isloading: true,
    quantity: 1,
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
    //Index of the active image
    activeImage: 0,
    //Hold the timeout, so we can clear it when it is needed
    autoSlideTimeout: null,
    //If the timer is stopped e.g. when hovering over the carousel
    stopSlider: false,
    //Hold the time left until changing to the next image
    timeLeft: 0,
    //Hold the interval so we can clear it when needed
    timerInterval: null,
    //Every 10ms decrease the timeLeft
    countdownInterval: 10,
    langCode: "en",
    sub_products: [],
    results: {
      name: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      price: 233,
      images: [
        {
          photo:
            "images/products/jacobs-kronung-instant-coffee-100-gm/760x760-1649745536648.jpg",
        },
      ],
      sale_price: 233,
    },
    images: {
      0: {
        thumb:
          "https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg",
        length: 1,
      },
      1: {
        thumb:
          "https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg",
        length: 1,
      },
      2: {
        thumb:
          "https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2-96x96.jpg",
        length: 1,
      },
    },
  }),
  computed: {
    // currentImage gets called whenever activeImage changes
    // and is the reason why we don't have to worry about the
    // big image getting updated
    currentImage() {
      this.timeLeft = this.autoSlideInterval;
      console.log(this.images[this.activeImage]);
      return this.images[this.activeImage].thumb;
    },
    progressBar() {
      //Calculate the width of the progressbar
      return 100 - (this.timeLeft / this.autoSlideInterval) * 100;
    },
  },
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
    this.specification = "";
    this.showspecification = "";
    this.showspecification = "d-none";
    this.reviews = "";
    this.showsreviews = "";
    this.showsreviews = "d-none";
    this.description = "active";
    this.showdescription = "active show";
    setTimeout(() => (this.isloading = false), 1000);
    var id = this.$route.params.id;
    var langCode = localStorage.getItem("lang");
    this.token = JSON.parse(localStorage.userInfo).token;
    axios
      .get(
        "http://baladi-v1.bteamwebs.com/api/mobile/product/getproductbyslug?slug=" +
          id + '&locale='+this.langCode
      )
      .then((response) => {
        this.results = response.data.data[0];
        this.formdata.product_id = response.data.data[0].id;
        // console.log("this results", this.results);
        this.sub_products = response.data.data[0].uom_products[0];
      })
      .catch((error) => {});
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
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
    increment: function () {
      // const input_index = event.currentTarget.getAttribute("input_Index");
      this.quantity = this.quantity + 1;
    },
    decrement: function () {
      // const input_index = event.currentTarget.getAttribute("input_Index");

      this.quantity = this.quantity - 1;
    },
    clickdescription: function () {
      this.specification = "";
      this.showspecification = "";
      this.showspecification = "d-none";
      this.reviews = "";
      this.showsreviews = "";
      this.showsreviews = "d-none";
      this.description = "active";
      this.showdescription = "active show";
    },
    clickspecification: function () {
      this.description = "";
      this.showdescription = "";
      this.showdescription = "d-none";
      this.reviews = "";
      this.showsreviews = "";
      this.showsreviews = "d-none";
      this.specification = "active";
      this.showspecification = "active show";
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
    clickmodal(index) {
      this.showmodal = "show";
      this.showmodalstyle = "display:block";
    },
    closemodal() {
      this.showmodal = "";
      this.showmodalstyle = "";
    },
    clickbigmodal(index) {
      this.showbigmodal = "show";
      this.showbigmodalstyle = "display:block";
    },
    closebigmodal() {
      this.showbigmodal = "";
      this.showbigmodalstyle = "";
    },
    clickcomparemodal(index) {
      this.showcomparemodal = "show";
      this.showcomparemodalstyle = "display:block";
    },
    closecomparemodal() {
      this.showcomparemodal = "";
      this.showcomparemodalstyle = "";
    },
    nextImage() {
      var active = this.activeImage + 1;
      if (active >= 3) {
        active = 0;
      }
      this.activateImage(active);
    },
    // Go backwards on the images array
    // or go at the last image
    prevImage() {
      var active = this.activeImage - 1;
      if (active < 0) {
        active = 3 - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    },
    //Wait until 'interval' and go to the next image;
    startTimer(interval) {
      if (interval && interval > 0 && !this.stopSlider) {
        var self = this;
        clearTimeout(this.autoSlideTimeout);
        this.autoSlideTimeout = setTimeout(function () {
          self.nextImage();
          self.startTimer(self.autoSlideInterval);
        }, interval);
      }
    },
    //Stop the timer when hovering over the carousel
    stopTimer() {
      clearTimeout(this.autoSlideTimeout);
      this.stopSlider = true;
      clearInterval(this.timerInterval);
    },
    //Restart the timer(with 'timeLeft') when leaving from the carousel
    restartTimer() {
      this.stopSlider = false;
      clearInterval(this.timerInterval);
      this.startCountdown();
      this.startTimer(this.timeLeft);
    },
    //Start countdown from 'autoSlideInterval' to 0
    startCountdown() {
      if (!this.showProgressBar) return;
      var self = this;
      this.timerInterval = setInterval(function () {
        self.timeLeft -= self.countdownInterval;
        if (self.timeLeft <= 0) {
          self.timeLeft = self.autoSlideInterval;
        }
      }, this.countdownInterval);
    },
  },
  created() {
    //Check if startingImage prop was given and if the index is inside the images array bounds
    if (
      this.startingImage &&
      this.startingImage >= 0 &&
      this.startingImage < this.images.length
    ) {
      this.activeImage = this.startingImage;
    }
    //Check if autoSlideInterval prop was given and if it is a positive number
    if (
      this.autoSlideInterval &&
      this.autoSlideInterval > this.countdownInterval
    ) {
      //Start the timer to go to the next image
      this.startTimer(this.autoSlideInterval);
      this.timeLeft = this.autoSlideInterval;
      //Start countdown to show the progressbar
      this.startCountdown();
    }
  },
  props: ["startingImage", "autoSlideInterval", "showProgressBar"],
};
</script>