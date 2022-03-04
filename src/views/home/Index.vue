<template>
	<Header/>
    <main id="main" class="site-primary" style="transform: none;">
    <div class="site-content" style="transform: none;">
        <div data-elementor-type="wp-page" data-elementor-id="41" class="elementor elementor-41"
            data-elementor-settings="[]" style="transform: none;">
            <div class="elementor-section-wrap" style="transform: none;">
               <Banner/>
                <Boxinfo/>
               <!-- <Brand/> -->
           <Topcat/>
             <Bestsellers/>
                <!-- black bar  -->
              <Banner2/>
              <Latestdeals/>
                <!-- 2nd bar  -->
              <Bar/>
                <!-- last section  -->
                <Newproducts/>
                <!-- logo slider  -->
                <Brand/>
            </div>
        </div>
    </div>
    <!-- site-content -->
</main>
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
	import Boxinfo from './Boxinfo.vue'
    import Bar from './partials/Bar.vue';
    import Banner2 from './partials/Banner.vue';


</script>


