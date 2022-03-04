<template>

	<Header/>
<main id="main" class="site-primary">
    <div class="site-content">
        <div class="shop-content mt-60">
            <div class="container">
                <div class="woocommerce">
                    <div class="woocommerce-notices-wrapper"></div>
                    <div class="woocommerce-form-coupon-toggle">

                        <div class="woocommerce-info">
                            Have a coupon? <a href="#" class="showcoupon">Click here to enter your code</a> </div>
                    </div>

                    <form class="checkout_coupon woocommerce-form-coupon" method="post" style="display:none">

                        <p>If you have a coupon code, please apply it below.</p>

                        <p class="form-row form-row-first">
                            <input type="text" name="coupon_code" class="input-text" placeholder="Coupon code"
                                id="coupon_code" value="">
                        </p>

                        <p class="form-row form-row-last">
                            <button type="submit" class="button" name="apply_coupon" value="Apply coupon">Apply
                                coupon</button>
                        </p>

                        <div class="clear"></div>
                    </form>
                    <div class="woocommerce-notices-wrapper"></div>
                    <div class="row content-wrapper sidebar-right">
                        <div class="col-12 col-md-12 col-lg-12 content-primary">
                            <form name="checkout" method="post" class="checkout woocommerce-checkout"
                                action="https://klbtheme.com/machic/checkout/" enctype="multipart/form-data"
                                novalidate="novalidate">
                                <div class="cart-wrapper">
                                    
                                        <Billing/>
                                        <Summary/>


                                   
                                </div>
                            </form>

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

	import Header from '../layout/Header.vue'
	import Footer from '../layout/Footer.vue'
	import Billing from './Billing.vue'
	import Summary from './Summary.vue'
</script>
