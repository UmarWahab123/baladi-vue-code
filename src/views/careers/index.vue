<template>
  <Header />
  <div class="container mt-10">
    <div class="card" v-for="n in 3">
      <div class="row ml-5 mt-3 mr-5">
        <div class="col-lg-10 col-md-10 col-sm-10">
          <h1 class="ml-10">Inflencers</h1>
          <p class="ml-10">
            What is in a job description? A job description is a useful,
            plain-language tool that explains the tasks, duties, function and
            responsibilities of a position. It details who performs a specific
            type of work, how that work is to be completed, and the frequency
            and the purpose of the work as it relates to the organization's
            mission and goals.
          </p>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2">
          <button type="submit" class="">Apply Now</button>
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
