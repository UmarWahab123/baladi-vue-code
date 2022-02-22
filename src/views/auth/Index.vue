<template>
<div>
	<Header/>
 <main id="main" class="site-primary">
    <div class="site-content">
        <div class="shop-content my-account-page mt-60">
            <div class="container">
                <div class="woocommerce">
                    <div class="woocommerce-notices-wrapper"></div>

                    <div class="u-columns row col2-set" id="customer_login">
                        <Login/>
                        <Register/>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- site-content -->
</main>
</div>
<Footer/>
</template>

<script setup>
	setTimeout(function(){ 
document.getElementById("menu-sidebar-menu-1").classList.remove("show");

			}, 500);
	import Header from '../layout/Header.vue'
	import Footer from '../layout/Footer.vue'
	import Login from './Login.vue'
	import Register from './Register.vue'
</script>
