<template>
  <section
    class="
      elementor-section
      elementor-top-section
      elementor-element
      elementor-element-3b0d1a1
      elementor-section-boxed
      elementor-section-height-default
      elementor-section-height-default
    "
    data-id="3b0d1a1"
    data-element_type="section"
  >
    <div class="elementor-container elementor-column-gap-extended">
      <div
        class="
          elementor-column
          elementor-col-25
          elementor-top-column
          elementor-element
          elementor-element-5bbc87b
        "
        data-id="5bbc87b"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="
              elementor-element
              elementor-element-97892be
              elementor-widget
              elementor-widget-machic-icon-box
            "
            data-id="97892be"
            data-element_type="widget"
            data-widget_type="machic-icon-box.default"
          >
            <div class="elementor-widget-container">
              <div class="klb-icon-box site-module iconbox-module">
                <div class="icon">
                  <router-link to="/shipping">
                    <i class="klbth-icon-delivered"></i
                  ></router-link>
                </div>
                <!-- icon -->
                <div class="content">
                  <h4 class="entry-title">{{ $t("Free_Delivery") }}</h4>
                  <p>{{$t("Free_shipping")}}</p>
                </div>
                <!-- content -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          elementor-column
          elementor-col-25
          elementor-top-column
          elementor-element
          elementor-element-065ec1c
        "
        data-id="065ec1c"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="
              elementor-element
              elementor-element-3f0d5e3
              elementor-widget
              elementor-widget-machic-icon-box
            "
            data-id="3f0d5e3"
            data-element_type="widget"
            data-widget_type="machic-icon-box.default"
          >
            <div class="elementor-widget-container">
              <div class="klb-icon-box site-module iconbox-module">
                <div class="icon">
                  <router-link :to="'/' + langCode + '/helpcenter'">
                    <i class="klbth-icon-operator-1"> </i
                  ></router-link>
                </div>
                <!-- icon -->
                <div class="content">
                  <h4 class="entry-title">{{$t('Online_Support')}}</h4>
                  <p>{{$t('Support_online_hours')}}</p>
                </div>
                <!-- content -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          elementor-column
          elementor-col-25
          elementor-top-column
          elementor-element
          elementor-element-0dcd911
        "
        data-id="0dcd911"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="
              elementor-element
              elementor-element-c73a023
              elementor-widget
              elementor-widget-machic-icon-box
            "
            data-id="c73a023"
            data-element_type="widget"
            data-widget_type="machic-icon-box.default"
          >
            <div class="elementor-widget-container">
              <div class="klb-icon-box site-module iconbox-module">
                <div class="icon">
                  <router-link :to="'/' + langCode + '/refund'"
                    ><i class="klbth-icon-credit-card-2"></i
                  ></router-link>
                </div>
                <!-- icon -->
                <div class="content">
                  <h4 class="entry-title">{{$t('Money_Return')}}</h4>
                  <p>{{$t('Back_guarantee')}}</p>
                </div>
                <!-- content -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          elementor-column
          elementor-col-25
          elementor-top-column
          elementor-element
          elementor-element-3f15ab8
        "
        data-id="3f15ab8"
        data-element_type="column"
      >
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="
              elementor-element
              elementor-element-5143c60
              elementor-widget
              elementor-widget-machic-icon-box
            "
            data-id="5143c60"
            data-element_type="widget"
            data-widget_type="machic-icon-box.default"
          >
            <div class="elementor-widget-container">
              <div class="klb-icon-box site-module iconbox-module">
                <div class="icon"><i class="klbth-icon-discount34"></i></div>
                <!-- icon -->
                <div class="content">
                  <h4 class="entry-title">{{$t('Member_discount')}}</h4>
                  <p>{{$t('Onevery_order')}}</p>
                </div>
                <!-- content -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      langCode: "en",
    };
  },
  mounted() {
    var lang = localStorage.getItem("lang");
    this.langCode = lang;
  },
};
</script>