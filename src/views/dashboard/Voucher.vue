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

                  <div class="col-md-8">
                    <h3 class="align-items-center p-3"> {{$t('coupon')}}</h3>
                    <section class="row p-1" id="labels">
                      <div class="col-md-12 my-2">
                        <div class="coupon p-3 bg-coupon-1 text-white">
                          <div class="row no-gutters">
                            <div class="col-md-4 border-right">
                              <div
                                class="d-flex flex-column align-items-center"
                              >
                                <img
                                  class="img-coupon rounded-circle shadow"
                                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/cubitt2-400x400.jpg"
                                /><span class="d-block">{{$t('iPhone')}}</span
                                ><span class="text-white fw-bold">{{$t('watch')}}</span>
                              </div>
                            </div>
                            <div class="col-md-8">
                              <div>
                                <div
                                  class="d-flex flex-row justify-content-end off"
                                >
                                  <h1>50%</h1>
                                  <span>{{$t('off')}}</span>
                                </div>
                                <div
                                  class="d-flex flex-row justify-content-between off px-3 p-2"
                                >
                                  <span>{{$t('promo_code')}}</span
                                  ><span class="btn-sm bg-danger px-5 code"
                                    >BBB50</span
                                  >
                                  <small>{{$t('expiration_date')}}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12 my-2">
                        <div class="coupon p-3 bg-coupon-2 text-white">
                          <div class="row no-gutters">
                            <div class="col-md-4 border-right">
                              <div
                                class="d-flex flex-column align-items-center"
                              >
                                <img
                                  class="img-coupon rounded-circle shadow"
                                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-23.jpg"
                                /><span class="d-block">{{$t('iPhone')}}</span
                                ><span class="text-white fw-bold">{{$t('watch')}}</span>
                              </div>
                            </div>
                            <div class="col-md-8">
                              <div>
                                <div
                                  class="d-flex flex-row justify-content-end off"
                                >
                                  <h1>50%</h1>
                                  <span>{{$t('off')}}</span>
                                </div>
                                <div
                                  class="d-flex flex-row justify-content-between off px-3 p-2"
                                >
                                  <span>{{$t('promo_code')}}</span
                                  ><span class="btn-sm bg-danger px-5 code"
                                    >BBB50</span
                                  >
                                  <small>{{$t('expiration_date')}}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12 my-2">
                        <div class="coupon p-3 bg-coupon-3 text-white">
                          <div class="row no-gutters">
                            <div class="col-md-4 border-right">
                              <div
                                class="d-flex flex-column align-items-center"
                              >
                                <img
                                  class="img-coupon rounded-circle shadow"
                                  src="https://klbtheme.com/machic/wp-content/uploads/2021/09/product-2.jpg"
                                /><span class="d-block">{{$t('iPhone')}}</span
                                ><span class="text-white fw-bold">{{$t('watch')}}</span>
                              </div>
                            </div>
                            <div class="col-md-8">
                              <div>
                                <div
                                  class="d-flex flex-row justify-content-end off"
                                >
                                  <h1>50%</h1>
                                  <span>{{$t('off')}}</span>
                                </div>
                                <div
                                  class="d-flex flex-row justify-content-between off px-3 p-2"
                                >
                                  <span>{{$t('promo_code')}}</span
                                  ><span class="btn-sm bg-danger px-5 code"
                                    >BBB50</span
                                  >
                                  <small>{{$t('expiration_date')}}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
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
    if (localStorage.userInfo != null) {
    } else {
      this.$router.push("myaccount");
    }
    setTimeout(() => (this.isloading = false), 1000);
  },
};
</script>
