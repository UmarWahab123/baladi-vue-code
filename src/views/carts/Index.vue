<template>

	<Header/>
<main id="main" class="site-primary">
    <div class="site-content">
        <div class="shop-content mt-60">
            <div class="container">
                <div class="woocommerce">
                    <div class="woocommerce-notices-wrapper"></div>
                    <div class="row content-wrapper sidebar-right">
                        <div class="col-12 col-md-12 col-lg-12 content-primary">
                            <div class="cart-wrapper">
                              
<Items/>
<Cartsubtotal/>

                             

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div><!-- site-content -->
</main>


<Footer/>
</template>

<script setup>
	setTimeout(function(){ 
document.getElementById("menu-sidebar-menu-1").classList.remove("show");

			}, 500);
	import Header from '../layout/Header.vue'
	import Footer from '../layout/Footer.vue'
	import Items from './Items.vue'
	import Cartsubtotal from './Cartsubtotal.vue'
</script>
