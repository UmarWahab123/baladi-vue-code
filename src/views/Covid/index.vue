<template>
  <Header />
  <div class="about_area bg_color pb-60 pt-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="single_about_thumb mb-4">
            <img
              src="https://html.dreamitsolution.net/corona/assets/images/about2.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="section_title left pb-4">
            <div class="section_title_thumb rotateme">
              <img
                src="https://html.dreamitsolution.net/corona/assets/images/lg.png"
                alt=""
              />
            </div>
            <div class="section_title_content pt-20">
              <h5>{{ $t("about_covid") }}</h5>
              <p>
                {{ $t("common_symptoms") }}
              </p>
            </div>
          </div>
          <div class="about_button pt-3">
            <div>
             
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xm-12">
          <div id="accordion">
            <div class="card mb-4">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    {{ $t("policy_lessons") }}
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
                style=""
                aria-expanded="true"
              >
                <div class="card-body">
                  {{ $t("latest_information") }}
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    {{ $t("customer_respondent") }}
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="card-body">
                  {{ $t("throat_diarrhea") }}
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-header" id="headingFour">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    {{ $t("implications") }}
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div class="card-body">
                  {{ $t("coronaviruses") }}
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
</script>