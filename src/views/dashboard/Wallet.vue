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
                      <h3 class="align-items-center p-3">Baladi Wallet</h3>

                      <div class="col-xl-12 p-3 col-lg-12">
                        <div class="card l-bg-orange-dark">
                          <div class="card-statistic-3 p-4">
                            <h5 class="card-icon fw-bold card-icon-large">
                              Abdullah Ahmed
                            </h5>

                            <div class="row align-items-center mb-2 d-flex">
                              <div class="col-12 mt-4">
                                <h6 class="card-title mb-0">
                                  Available Balance
                                </h6>
                                <h2 class="d-flex align-items-center mt-2 mb-0">
                                  QAR 11.61k
                                </h2>
                              </div>
                              <small class="col-4 text-right">
                                <span class="position-absolute side-text-date"
                                  >Friday 4 March 2022
                                </span></small
                              >
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 p-3">
                        <div class="col d-flex align-items-start">
                          <div
                            class="icon-square bg-light text-dark flex-shrink-0 me-3 p-3"
                          >
                            <i class="fa fa-credit-card text-success"></i>
                          </div>
                          <div>
                            <h2>Payments</h2>
                            <p>Make convenient one-click payments</p>
                          </div>
                        </div>
                        <div class="col d-flex align-items-start">
                          <div
                            class="icon-square bg-light text-dark flex-shrink-0 me-3 p-3"
                          >
                            <i class="fa fa-bullhorn text-success"></i>
                          </div>
                          <div>
                            <h2>Bonus</h2>
                            <p>Earn bonus on your purchases</p>
                          </div>
                        </div>
                        <div class="col d-flex align-items-start">
                          <div
                            class="icon-square bg-light text-dark flex-shrink-0 me-3 p-3"
                          >
                            <i class="fa fa fa-credit-card text-success"></i>
                          </div>
                          <div>
                            <h2>Get Bonus</h2>
                            <p>Get bonus from Baladi Express</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <a
                            type="button"
                            class="button"
                            data-toggle="modal"
                            @click="Modal"
                            data-target="#staticBackdrop"
                            style="color: white"
                          >
                            Activate My Wallet
                          </a>
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
  <div
    id="wishlist"
    :class="showmodal"
    style="display: none"
    :style="showmodalstyle"
    class="tinv-wishlist"
  >
    <div class="tinvwl_added_to_wishlist tinv-modal tinv-modal-open">
      <div class="tinv-overlay"></div>
      <div class="tinv-table">
        <div class="tinv-cell">
          <div class="tinv-modal-inner">
            <i class="icon_big_heart_check"></i>
            <div class="tinv-txt">
              Apple iPhone 11 64GB Yellow Fully Unlocked added to Wishlist
            </div>
            <div class="tinvwl-buttons-group tinv-wishlist-clear">
              <button>
                <router-link
                  to="/wishlist"
                  class="button tinvwl_button_view tinvwl-btn-onclick"
                >
                  <i class="ftinvwl ftinvwl-heart-o"></i>View
                  Wishlist</router-link
                >
              </button>

              <button
                @click="closemodal"
                class="button tinvwl_button_close"
                type="button"
              >
                <i class="ftinvwl ftinvwl-times"></i>Close
              </button>
            </div>
            <div class="tinv-wishlist-clear"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    showmodal: "",
    stylemodal: "",
    visa: "",
    paypal: "",
    showpaypal: "",
    showvisa: "",
    isloading: true,
  }),
  mounted() {
    if (localStorage.userInfo != null) {
    } else {
      this.$router.push("myaccount");
    }
    this.visa = "active";
    this.showvisa = "active show";
    setTimeout(() => (this.isloading = false), 1000);
  },
  methods: {
    Modal: function () {
      this.showmodal = "show";
      this.stylemodal = "display: block; padding-right: 0.200073px;";
    },
    close: function () {
      this.showmodal = "";
      this.stylemodal = "";
    },
    clickpaypal: function () {
      this.visa = "";
      this.showvisa = "";
      this.paypal = "active";
      this.showpaypal = "active show";
    },
    clickvisa: function () {
      this.paypal = "";
      this.showpaypal = "";
      this.visa = "active";
      this.showvisa = "active show";
    },
  },
};
</script>
