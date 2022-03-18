<template>
  <TheLoader v-show="this.isloading === true"></TheLoader>

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
                  <div
                    class="woocommerce-MyAccount-content"
                    v-show="this.isloading === false"
                  >
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
                                  $11.61k
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
                            class="
                              icon-square
                              bg-light
                              text-dark
                              flex-shrink-0
                              me-3
                              p-3
                            "
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
                            class="
                              icon-square
                              bg-light
                              text-dark
                              flex-shrink-0
                              me-3
                              p-3
                            "
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
                            class="
                              icon-square
                              bg-light
                              text-dark
                              flex-shrink-0
                              me-3
                              p-3
                            "
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
    class="modal fade"
    :class="showmodal"
    id="staticBackdrop"
    style=""
    :style="stylemodal"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="text-right" style="cursor: pointer">
            <i class="fa fa-times" aria-hidden="true" @click="close"></i>
          </div>
          <div class="tabs mt-3">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  :class="visa"
                  @click="clickvisa"
                  id="visa-tab"
                  data-toggle="tab"
                  href="#visa"
                  role="tab"
                  aria-controls="visa"
                  aria-selected="true"
                >
                  <img src="https://i.imgur.com/sB4jftM.png" width="80" />
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="paypal-tab"
                  :class="paypal"
                  @click="clickpaypal"
                  data-toggle="tab"
                  href="#paypal"
                  role="tab"
                  aria-controls="paypal"
                  aria-selected="false"
                >
                  <img src="https://i.imgur.com/yK7EDD1.png" width="80" />
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade"
                :class="showvisa"
                id="visa"
                role="tabpanel"
                aria-labelledby="visa-tab"
              >
                <div class="mt-4 mx-4">
                  <div class="text-center">
                    <h5>Credit card</h5>
                  </div>
                  <div class="form mt-3">
                    <div class="inputbox">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        required="required"
                      />
                      <span>Cardholder Name</span>
                    </div>
                    <div class="inputbox">
                      <input
                        type="text"
                        name="name"
                        min="1"
                        max="999"
                        class="form-control"
                        required="required"
                      />
                      <span>Card Number</span>
                    </div>
                    <div class="d-flex flex-row">
                      <div class="inputbox">
                        <input
                          type="text"
                          name="name"
                          min="1"
                          max="999"
                          class="form-control"
                          required="required"
                        />
                        <span>Expiration Date</span>
                      </div>
                      <div class="inputbox">
                        <input
                          type="text"
                          name="name"
                          min="1"
                          max="999"
                          class="form-control"
                          required="required"
                        />
                        <span>CVV</span>
                      </div>
                    </div>
                    <div class="pay">
                      <button class="btn btn-success btn-block">
                        Add card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                :class="showpaypal"
                id="paypal"
                role="tabpanel"
                aria-labelledby="paypal-tab"
              >
                <div class="mt-4 mx-4">
                  <div class="px-5 mt-5">
                    <div class="inputbox">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        required="required"
                      />
                      <span>Paypal Email Address</span>
                    </div>
                    <div class="pay">
                      <button class="btn btn-primary btn-block">
                        Add paypal
                      </button>
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
