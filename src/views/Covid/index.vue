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
              <p>On February 11, 2020, the World Health Organization announced an official name for the
                disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan
                China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In
                COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this
                disease was referred to as “2019 novel coronavirus” or “2019-nCoV. The COVID-19 virus is
                caused by the SARS-CoV-2 virus. SARS-CoV-2 is known to cause mild to severe respiratory
                illnesses, and even death. In addition to vaccines, wearing a mask during times of high
                transmission, staying 6 feet apart, washing hands often, and avoiding people who are sick
                are the best ways to prevent contracting the disease. The most common symptoms of COVID-19
                are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal
                congestion, runny nose, sore throat, or diarrhea. These symptoms are usually mild and begin
                gradually. Also, the symptoms may appear 2-14 days after exposure. </p>
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
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                   Policy lesson so far
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="in collapse" aria-labelledby="headingOne" data-parent="#accordion" style="">
                            <div class="card-body">
                                Stay aware of the latest information on the COVID-19 outbreak, available on the WHO
                                website and through your national and local public health authority. Many countries
                                around the world have seen cases of COVID-19 and several have seen outbreaks.
                                Authorities in China and some other countries have succeeded in slowing or stopping
                                their outbreaks. However, the situation is unpredictable so check regularly for the
                                latest news.
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What prevention Baladi Express has
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion" style="">
                            <div class="card-body">
                                <p>Everyone has their part to play in combatting the spread of COVID-19 and it is
                                   essential that people follow the recommendations issued by the Baladi Express to
                                   reduce the risk of infection.</p>
                                <p>
                                    1. Receive the COVID-19 vaccine.
                                    2. Wearing face masks is mandatory for customer service employees working indoors
                                    including cashiers, receptionists, and security personnel.
                                    3. Wash your hands regularly, and avoid touching your eyes, nose, and mouth.
                                    4. Cover your mouth and nose with your sleeve or tissue when you cough or sneeze.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    How do our customers respond to the pandemic?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse show" aria-labelledby="headingFour" data-parent="#accordion" style="">
                            <div class="card-body">
                                The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some
                                patients may have aches and pains, nasal congestion, runny nose, sore throat, or
                                diarrhea. These symptoms are usually mild and begin gradually. Some people become
                                infected but don’t develop any symptoms and don’t feel unwell. Most people (about 80%)
                                recover from the disease without needing special treatment. Around 1 out of every 6
                                people who get COVID-19 becomes seriously ill and develops difficulty breathing. Older
                                people, and those with underlying medical problems like high blood pressure, heart
                                problems, or diabetes, are more likely to develop serious illnesses. People with fever,
                                cough, and difficulty breathing should seek medical attention.
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