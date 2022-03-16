<template>
  <TheLoader v-show="this.isloading === true"></TheLoader>

  <Header v-show="this.isloading === false" />
  <main id="main" class="site-primary" v-show="this.isloading === false">
    <div class="site-content">
      <div class="shop-content my-account-page mt-60">
        <div class="container">
          <div class="woocommerce">
            <div class="row content-wrapper sidebar-right">
              <div class="col-12 col-md-12 col-lg-12 content-primary">
                <div class="my-account-wrapper">
                  <Sidebar />

                  <div class="woocommerce-MyAccount-content">
                    <div class="woocommerce-notices-wrapper"></div>
                    <p>
                      Hello <strong>Jena Benjamin</strong> (not
                      <strong>Jena Benjamin</strong>?
                      <a
                        href="https://klbtheme.com/machic/my-account/customer-logout/?_wpnonce=9691dc2191"
                        >Log out</a
                      >)
                    </p>

                    <p>
                      From your account dashboard you can view your
                      <a href="order-list.php">recent orders</a>, manage your
                      <a href="edit-address.php"
                        >shipping and billing addresses</a
                      >, and
                      <a href="account-setting.php"
                        >edit your password and account details</a
                      >.
                    </p>
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
  <div v-show="this.isloading === false">
    <Footer />
  </div>
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
