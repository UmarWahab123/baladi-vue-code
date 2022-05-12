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
                    <div class="woocommerce-notices-wrapper"></div>
                    <p>
                      Hello <strong>{{ this.userdata.name }}</strong> (not
                      <strong>{{ this.userdata.name }}</strong
                      >?
                      <a
                        href="https://klbtheme.com/machic/my-account/customer-logout/?_wpnonce=9691dc2191"
                        >Log out</a
                      >)
                    </p>

                    <p>
                      From your account dashboard you can view your

                      <router-link to="/orders">recent orders</router-link>,
                      manage your
                      <router-link to="/edit-address"
                        >shipping and billing addresses</router-link
                      >, and
                      <router-link to="/account"
                        >edit your password and account details</router-link
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
  <div>
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
      userdata: { name: "" },
      isloading: true,
    };
  },
  mounted() {
    if (localStorage.userInfo != null) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.userdata.name = userInfo.name;
      console.log(this.userdata);
    } else {
      this.$router.push("myaccount");
    }
    setTimeout(() => (this.isloading = false), 1000);
  },
};
</script>
