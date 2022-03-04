<template>

	<Header/>
<main id="main" class="site-primary">
    <div class="site-content">
        <div data-elementor-type="wp-page" data-elementor-id="3" class="elementor elementor-3"
            data-elementor-settings="[]">
            <div class="elementor-section-wrap">
              <Part1/>
              <Part2/>

              
            </div>
        </div>

    </div><!-- site-content -->
</main>


<Footer/>
</template>

<script setup>
	import Header from '../layout/Header.vue'
	import Footer from '../layout/Footer.vue'
	import Part1 from './Part1.vue'
	import Part2 from './Part2.vue'
</script>
