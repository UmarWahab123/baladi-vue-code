<template>
  <Header />
  <div class="container">
    <div class="row text-center ml-5 mt-3 mr-5">
      <div class="col-lg-12 col-md-12 col-sm-12" v-for="n in 6">
        <div class="section_title_content pt-20">
          <p>
            I ordered two items from Amazon.com. I received one item although
            the app says both items were delivered. The one item I did not
            receive had a picture of the porch where the item was left. Problem
            is that wasn’t my house! I tried to address with customer service
            through their
          </p>
          <div class="deal-rating color-link">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <br />
          <h2>Test Customer</h2>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
</script>
