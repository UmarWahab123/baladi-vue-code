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
                      {{$t('hello')}} <strong>{{ userdata.name }}</strong> ( {{$t('Not')}}
                      <strong>{{ userdata.name }}</strong
                      >?  <a @click="logout()" href="javascript:void(0);">{{$t('logout')}}</a>)
                    </p>

                    <p>
                      {{$t('From_account_dashboard')}} 
                    

                      <router-link :to="'/' + langCode + '/orders'"
                        > {{$t('recent_order')}}</router-link
                      >, {{$t('Manage')}}
                      <router-link :to="'/' + langCode + '/edit-address'"
                        >{{$t('ship_and_bill_address')}}
                        </router-link
                      >, {{$t('And')}}
                      <router-link :to="'/' + langCode + '/account'"
                        >{{$t('edit_password_account_details')}}</router-link
                      >.
                    </p>
                    <router-link class="btn text-white my-3" :to="'/' + langCode + '/account'">{{$t('Update_profile')}}</router-link>
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
import axios from "axios";
import TheLoader from "../Loader/TheLoader.vue";
export default {
  components: { TheLoader },
  data() {
    return {
      userdata: { name: "" },
      isloading: true,
      langCode: "en",
    };
  },
  mounted() {
    var langCode = localStorage.getItem("lang");
    if (localStorage.userInfo != null) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      // this.userdata.name = userInfo.name;
      // console.log(this.userdata);
      axios
        .get("http://baladi-v1.bteamwebs.com/api/auth/getProfile?locale=" +
          langCode, {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          this.userdata.name = response.data.data.name;
        })
        .catch((error) => {});
    } else {
      this.$router.push("myaccount");
    }
    setTimeout(() => (this.isloading = false), 1000);
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
  },
   methods: {
    logout() {
      localStorage.clear();
      localStorage.setItem("lang", "en");
      var lang = localStorage.getItem("lang");
      this.$router.push("/" + lang + "/myaccount");
    },
  },
};
</script>
