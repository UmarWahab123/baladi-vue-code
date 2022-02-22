<template>
<div>
	<Header/>
    <main id="main" class="site-primary" style="transform: none;">
    <div class="site-content" style="transform: none;">
        <div data-elementor-type="wp-page" data-elementor-id="41" class="elementor elementor-41"
            data-elementor-settings="[]" style="transform: none;">
            <div class="elementor-section-wrap" style="transform: none;">
               <Banner/>
               <Brand/>
               
                <div class="elementor-section elementor-top-section elementor-element elementor-element-544c1c4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="544c1c4" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-extended">
                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-165e7da"
                            data-id="165e7da" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                                <div class="elementor-element elementor-element-686e485 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                    data-id="686e485" data-element_type="widget" data-widget_type="divider.default">
                                    <div class="elementor-widget-container">

                                        <div class="elementor-divider"> <span class="elementor-divider-separator">
                                            </span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="elementor-section elementor-top-section elementor-element elementor-element-2948966 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="2948966" data-element_type="section" style="transform: none;">
                    <div class="elementor-container elementor-column-gap-extended" style="transform: none;">
                     <Leftbar/>
                        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-778da95"
                            data-id="778da95" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                            <WeekendDiscount/>
                                <Bestsellers/>
                                <Momentum1/>
                              
                                <Latestdeals/>
                                <Banner2/>
                               
                               <Catproducts/>
                                <Momentum2/>
                               <Newproducts/>
                            </div>
                        </div>
                    </div>
                </div>
              <Topcat/>
            </div>
        </div>
    </div>
    <!-- site-content -->
</main>
</div>
<Footer/>
</template>

<script setup>
	setTimeout(function(){ 
            document.getElementById("menu-sidebar-menu-1").classList.add("show");
			}, 500);
	import Header from '../layout/Header.vue'
	import Footer from '../layout/Footer.vue'
	import Topcat from './Topcat.vue'
	import Banner from './Banner.vue'
	import Brand from './Brand.vue'
	import Leftbar from './Leftbar.vue'
	import Bestsellers from './Bestsellers.vue'
	import Latestdeals from './Latestdeals.vue'
	import Newproducts from './Newproducts.vue'
	import Catproducts from './Catproducts.vue'
    import WeekendDiscount from './partials/WeekendDiscount.vue';
    import Momentum1 from './partials/Momentum1.vue';
    import Momentum2 from './partials/Momentum2.vue';
    import Banner2 from './partials/Banner.vue';


</script>


