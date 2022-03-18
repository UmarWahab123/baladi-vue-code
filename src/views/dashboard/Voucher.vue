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
                      <h3 class="align-items-center p-3">Voucher Coupon</h3>
                      <section class="row p-3" id="labels">
                        <div class="col-md-12">
                          <div class="coupon p-3 bg-coupon-1 text-white">
                            <div class="row no-gutters">
                              <div class="col-md-4 border-right">
                                <div
                                  class="d-flex flex-column align-items-center"
                                >
                                  <img
                                    class="img-coupon"
                                    src="https://cdnprod.mafretailproxy.com/sys-master-root/h34/hee/16315428110366/246675_main.jpg_200Wx200H"
                                  /><span class="d-block">I phone 12</span
                                  ><span class="text-white">Mobile</span>
                                </div>
                              </div>
                              <div class="col-md-8">
                                <div>
                                  <div
                                    class="
                                      d-flex
                                      flex-row
                                      justify-content-end
                                      off
                                    "
                                  >
                                    <h1>50%</h1>
                                    <span>OFF</span>
                                  </div>
                                  <div
                                    class="
                                      d-flex
                                      flex-row
                                      justify-content-between
                                      off
                                      px-3
                                      p-2
                                    "
                                  >
                                    <span>Promo code:</span
                                    ><span class="btn-sm bg-danger px-5 code"
                                      >BBB50</span
                                    >
                                    <small>Expiration Date : 3 March</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
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
  data() {
    return {
      isloading: true,
    };
  },
  mounted() {
    setTimeout(() => (this.isloading = false), 1000);
  },
};
</script>
