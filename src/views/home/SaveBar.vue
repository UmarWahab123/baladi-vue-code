<template>
  <!-- 2nd bar  -->
  <section
    class="
      elementor-section
      elementor-top-section
      elementor-element
      elementor-element-e68bac6
      elementor-section-boxed
      elementor-section-height-default
      elementor-section-height-default
    "
    data-id="e68bac6"
    data-element_type="section"
  >
    <div class="elementor-container elementor-column-gap-extended">
      <div
        class="
          elementor-column
          elementor-col-100
          elementor-top-column
          elementor-element
          elementor-element-0eac08e
        "
        data-id="0eac08e"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="
              elementor-element
              elementor-element-ac47d68
              elementor-widget
              elementor-widget-machic-text-banner2
            "
            data-id="ac47d68"
            data-element_type="widget"
            data-widget_type="machic-text-banner2.default"
          >
            <div class="elementor-widget-container">
              <div class="site-module module-banner-text">
                <div class="banner-wrapper" style="background-color: #f5f5f7">
                  <div class="banner-inner">
                    <h4 class="entry-title">
                      {{$t('Shop_and')}}<strong>{{$t('Save_on_Hottest')}}</strong> {{$t('Products')}}
                    </h4>
                    <div class="banner-details">
                      <div class="banner-price">
                        {{$t('from')}} <span>{{$t('QAR')}}  79.00</span>
                      </div>
                      <!-- banner-price -->
                      <p>{{$t('Donot_miss_opportunity')}}</p>
                    </div>
                    <!-- banner-details -->
                    <div class="banner-button">
                     <router-link  class="btn small rounded link-color" :to="'/' + langCode + '/category'"
                    >{{$t('Shop_now')}}</router-link
                          >
                    </div>
                  </div>
                  <!-- banner-inner -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script >
export default {
  data: () => ({
    url: "http://baladi-v1.bteamwebs.com/storage/",
    langCode:"en"
  }),
  mounted() {
    var langCode = localStorage.getItem("lang");
  },
};
</script>