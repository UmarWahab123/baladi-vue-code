<template>
      <section
                    class="elementor-section elementor-top-section elementor-element elementor-element-187d03f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="187d03f" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-extended">
                       <div class="elementor-column col-md-6 elementor-top-column elementor-element elementor-element-62d71e4" data-id="62d71e4" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated mt-0">

                                <div class="elementor-element elementor-element-71fe4e1 elementor-widget elementor-widget-image" data-id="71fe4e1" data-element_type="widget" data-widget_type="image.default">
                                    <div class="elementor-widget-container">

                                        <img loading="lazy" width="auto" style="height: 35rem; object-fit: cover;" src="http://staging.baladiexpress.com/frontend/src/img/support.png" class="attachment-full size-full" alt="" sizes="(max-width: 1200px) 100vw, 1200px">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="elementor-column elementor-col-6 elementor-top-column elementor-element elementor-element-e2c097e elementor-hidden-tablet elementor-hidden-mobile"
                            data-id="e2c097e" data-element_type="column">
                            <div class="elementor-widget-wrap">
                            </div>
                        </div>
                        <div class="elementor-column  elementor-top-column elementor-element elementor-element-fa6036d"
                            data-id="fa6036d" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                                <div class="elementor-element elementor-element-4178a16 elementor-widget elementor-widget-machic-contact-form-7"
                                    data-id="4178a16" data-element_type="widget"
                                    data-widget_type="machic-contact-form-7.default">
                                    <div class="elementor-widget-container">
                                        <div class="contact-form">
                                           
                                            <div role="form" class="wpcf7" id="wpcf7-f2012-p1985-o1" lang="en-US"
                                                dir="ltr">
                                                <div class="screen-reader-response">
                                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                    <ul></ul>
                                                </div>
                                                <form action="/machic/contact/?d=rtl#wpcf7-f2012-p1985-o1" method="post"
                                                    class="wpcf7-form init" novalidate="novalidate" data-status="init">
                                                    <div style="display: none;">
                                                        <input type="hidden" name="_wpcf7" value="2012">
                                                        <input type="hidden" name="_wpcf7_version" value="5.5.4">
                                                        <input type="hidden" name="_wpcf7_locale" value="en_US">
                                                        <input type="hidden" name="_wpcf7_unit_tag"
                                                            value="wpcf7-f2012-p1985-o1">
                                                        <input type="hidden" name="_wpcf7_container_post" value="1985">
                                                        <input type="hidden" name="_wpcf7_posted_data_hash" value="">
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-lg-6">
                                                            <label> {{$t('Your_name')}} * </label><br>
                                                            <span class="wpcf7-form-control-wrap your-name"><input
                                                                    type="text" name="your-name" value="" size="40"
                                                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true" aria-invalid="false"></span>
                                                        </div>
                                                        <div class="col-12 col-lg-6">
                                                            <label> {{$t('Your_email')}} *</label><br>
                                                            <span class="wpcf7-form-control-wrap your-email"><input
                                                                    type="email" name="your-email" value="" size="40"
                                                                    class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                    aria-required="true" aria-invalid="false"></span>
                                                        </div>
                                                        <div class="col-12 col-lg-12">
                                                            <label> {{$t('Subject')}} * </label><br>
                                                            <span class="wpcf7-form-control-wrap your-subject"><input
                                                                    type="text" name="your-subject" value="" size="40"
                                                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true" aria-invalid="false"></span>
                                                        </div>
                                                        <div class="col-12 col-lg-12">
                                                            <label> {{$t('Your_message')}} </label><br>
                                                            <span class="wpcf7-form-control-wrap your-message"><textarea
                                                                    name="your-message" cols="40" rows="10"
                                                                    class="wpcf7-form-control wpcf7-textarea"
                                                                    aria-invalid="false"></textarea></span>
                                                        </div>
                                                        <div class="col-12 col-lg-12">
                                                         <input type="submit" :value="$t('Send_Message')"
                                                                class="wpcf7-form-control has-spinner wpcf7-submit"><span
                                                                class="wpcf7-spinner"></span>
                                                        </div>
                                                    </div>
                                                    <div class="wpcf7-response-output" aria-hidden="true"></div>
                                                </form>
                                            </div>
                                        </div><!-- contact-form -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
</template>