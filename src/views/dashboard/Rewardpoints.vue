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
                    <div class="col-md-12">
                      <h2 class="p-2">{{$t('reward_text')}}</h2>

                      <div class="p-3 pt-0">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab">
                          <li class="nav-item">
                            <a
                              href="#home"
                              class="nav-link"
                              :class="home"
                              @click="clickhome"
                              data-bs-toggle="tab"
                              >{{$t('redeem_point')}}</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="#profile"
                              class="nav-link"
                              :class="profile"
                              @click="clickprofile"
                              data-bs-toggle="tab"
                              >{{$t('redeem_history')}}</a
                            >
                          </li>
                        </ul>
                        <div class="tab-content p-2">
                          <div
                            class="tab-pane fade"
                            :class="showhome"
                            id="home"
                          >
                            <div class="col-xl-12 mt-3 col-lg-12">
                              <div class="card l-bg-orange-dark">
                                <div class="card-statistic-3 p-4">
                                  <h5 class="card-icon card-icon-large">
                                    {{$t('Your_Balance')}}
                                  </h5>
                                  <h6 class="">
                                    <span class="text-warning points fw-bold"
                                      >1580</span
                                    >
                                    {{$t('Points')}}
                                  </h6>

                                  <div
                                    class="row align-items-center mb-2 d-flex"
                                  >
                                    <small class="col-4 text-right date-align-setup">
                                      <span
                                        class="position-absolute side-text-date"
                                        >100 {{$t('points_expires')}} Friday 4 March 2022
                                      </span></small
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div
                                class="col-11 mt-3 col-md-4 col-sm-10 col-xs-10"
                              >
                                <div class="py-3 py-md-3 border rounded shadow">
                                  <div
                                    class="d-flex justify-content-between mx-3 mx-md-4"
                                  >
                                    <div>
                                      <h6 class="">{{$t('off_on_next_order')}}</h6>
                                      <p class="grey">
                                        {{$t('earn_points')}}
                                      </p>
                                    </div>
                                    <div class="align-self-baseline">
                                      <img
                                        src="https://thumbs.dreamstime.com/z/super-discount-symbol-sale-sign-vector-tag-advertising-discounts-shopping-banner-market-offer-147538659.jpg"
                                        height="100px"
                                        width="100px"
                                        alt=""
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <hr class="my-2" />
                                  <div
                                    class="d-flex justify-content-between mx-3 mx-md-4 div2"
                                  >
                                    <div class="">
                                      <h6 class="">{{$t('expire')}}</h6>
                                      <div class="d-flex">
                                        <p class="grey mt-1">{{$t('March')}}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <hr />
                                  <div
                                    class="d-flex justify-content-between mx-3 mx-md-4 btn text-white"
                                  >
                                    <div></div>
                                    <div>{{$t('100_points')}}</div>
                                    <div class=""></div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-11 mt-3 col-md-4 col-sm-10 col-xs-10"
                              >
                                <div class="py-3 py-md-3 border rounded shadow">
                                  <div
                                    class="d-flex justify-content-between mx-3 mx-md-4"
                                  >
                                    <div>
                                      <h6 class="">{{$t('off_on_next_order')}}</h6>
                                      <p class="grey">
                                        {{$t('earn_points')}}
                                      </p>
                                    </div>
                                    <div class="align-self-baseline">
                                      <img
                                        src="https://thumbs.dreamstime.com/z/super-discount-symbol-sale-sign-vector-tag-advertising-discounts-shopping-banner-market-offer-147538659.jpg"
                                        height="100px"
                                        width="100px"
                                        alt=""
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <hr class="my-2" />
                                  <div
                                    class="d-flex justify-content-between mx-3 mx-md-4 div2"
                                  >
                                    <div class="">
                                      <h6 class="">{{$t('expire')}}</h6>
                                      <div class="d-flex">
                                        <p class="grey mt-1">{{$t('March')}}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <hr />
                                  <div
                                    class="d-flex justify-content-between mx-3 mx-md-4 btn text-white"
                                  >
                                    <div></div>
                                    <div>{{$t('100_points')}}</div>
                                    <div class=""></div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-11 mt-3 col-md-4 col-sm-10 col-xs-10"
                              >
                                <div class="py-3 py-md-3 border rounded shadow">
                                  <div
                                    class="d-flex justify-content-between mx-3 mx-md-4"
                                  >
                                    <div>
                                      <h6 class="">{{$t('off_on_next_order')}}</h6>
                                      <p class="grey">
                                       {{$t('earn_points')}}
                                      </p>
                                    </div>
                                    <div class="align-self-baseline">
                                      <img
                                        src="https://thumbs.dreamstime.com/z/super-discount-symbol-sale-sign-vector-tag-advertising-discounts-shopping-banner-market-offer-147538659.jpg"
                                        height="100px"
                                        width="100px"
                                        alt=""
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <hr class="my-2" />
                                  <div
                                    class="d-flex justify-content-between mx-3 mx-md-4 div2"
                                  >
                                    <div class="">
                                      <h6 class="">{{$t('expire')}}</h6>
                                      <div class="d-flex">
                                        <p class="grey mt-1">{{$t('March')}}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <hr />
                                  <div
                                    class="d-flex justify-content-between mx-3 mx-md-4 btn text-white"
                                  >
                                    <div></div>
                                    <div>{{$t('100_points')}}</div>
                                    <div class=""></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            :class="showprofile"
                            id="profile"
                          >
                            <div class="row">
                              <div
                                class="col-12 mt-3 col-md-12 col-sm-12 col-xs-10"
                              >
                                <div class="py-3 py-md-3 border rounded shadow">
                                  <div
                                    class="d-flex justify-content-between align-item-center mx-3 mx-md-4"
                                  >
                                    <div>
                                      <h6 class="">{{$t('off_on_next_order')}}</h6>
                                      <p class="grey">
                                        {{$t('200_points')}}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-content-between mx-3 mx-md-4 div2"
                                    >
                                      <div class="">
                                        <h6 class="">{{$t('Date')}}</h6>
                                        <div class="d-flex">
                                          <p class="grey mt-1">
                                            {{$t('March')}}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="align-self-baseline">
                                      <img
                                        src="https://thumbs.dreamstime.com/z/super-discount-symbol-sale-sign-vector-tag-advertising-discounts-shopping-banner-market-offer-147538659.jpg" style = "width:100px !important"
                                        alt=""
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-12 mt-3 col-md-12 col-sm-12 col-xs-10"
                              >
                                <div class="py-3 py-md-3 border rounded shadow">
                                  <div
                                    class="d-flex justify-content-between align-item-center mx-3 mx-md-4"
                                  >
                                    <div>
                                      <h6 class="">{{$t('off_on_next_order')}}</h6>
                                      <p class="grey">
                                        {{$t('200_points')}}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-content-between mx-3 mx-md-4 div2"
                                    >
                                      <div class="">
                                        <h6 class="">{{$t('Date')}}</h6>
                                        <div class="d-flex">
                                          <p class="grey mt-1">
                                            {{$t('March')}}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="align-self-baseline">
                                      <img
                                        src="https://thumbs.dreamstime.com/z/super-discount-symbol-sale-sign-vector-tag-advertising-discounts-shopping-banner-market-offer-147538659.jpg" style = "width:100px !important"
                                        
                                        alt=""
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-12 mt-3 col-md-12 col-sm-12 col-xs-10"
                              >
                                <div class="py-3 py-md-3 border rounded shadow">
                                  <div
                                    class="d-flex justify-content-between align-item-center mx-3 mx-md-4"
                                  >
                                    <div>
                                      <h6 class="">{{$t('off_on_next_order')}}</h6>
                                      <p class="grey">
                                        {{$t('200_points')}}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-content-between mx-3 mx-md-4 div2">
                                      <div class="">
                                        <h6 class="">{{$t('Date')}}</h6>
                                        <div class="d-flex">
                                          <p class="grey mt-1">
                                            {{$t('March')}}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="align-self-baseline">
                                      <img
                                        src="https://thumbs.dreamstime.com/z/super-discount-symbol-sale-sign-vector-tag-advertising-discounts-shopping-banner-market-offer-147538659.jpg" style = "width:100px !important"
                                        alt=""
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
import TheLoader from "../Loader/TheLoader.vue";

export default {
  components: { TheLoader },

  data: () => ({
    id: "",
    home: "",
    profile: "",
    showprofile: "",
    showhome: "",
    results: [],
    isloading: true,
  }),
  mounted() {
    if (localStorage.userInfo != null) {
    } else {
      this.$router.push("myaccount");
    }
    this.home = "active";
    this.showhome = "active show";
    setTimeout(() => (this.isloading = false), 1000);
  },
  methods: {
    clickprofile: function () {
      this.home = "";
      this.showhome = "";
      this.profile = "active";
      this.showprofile = "active show";
    },
    clickhome: function () {
      this.profile = "";
      this.showprofile = "";
      this.home = "active";
      this.showhome = "active show";
    },
  },
};
</script>
