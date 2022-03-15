<template>
	<Header/>
<main id="main" class="site-primary">
    <div class="site-content">
        <div class="shop-content my-account-page mt-60">
            <div class="container">
                <div class="woocommerce">
                    <div class="row content-wrapper sidebar-right">
                        <div class="col-12 col-md-12 col-lg-12 content-primary">
                            <div class="my-account-wrapper">

                               <Sidebar/>

                                   <div class="woocommerce-MyAccount-content">
                                    <div class="woocommerce-notices-wrapper"></div>

                                    <p>
                                        The following addresses will be used on the checkout page by default.</p>

                                    <div class="u-columns woocommerce-Addresses row addresses">


                                        <div class="u-column1 col-md-6 woocommerce-Address">
                                            <header class="woocommerce-Address-title title">
                                                <h3>Billing address</h3>
                                                <a href="billing-update.php" class="edit">Edit</a>
                                            </header>
                                            <address>
                                                Jena Benjamin<br>Oneill Mcintyre Associates<br>128 East Green Old
                                                Road<br>Illum nostrud saepe<br>Quisquam est id
                                                aliq<br>Cuscatlán<br>77241<br>El Salvador </address>
                                        </div>


                                        <div class="u-column2 col-md-6 woocommerce-Address">
                                            <header class="woocommerce-Address-title title">
                                                <h3>Shipping address</h3>
                                                <a href="shipping-update.php" class="edit">Edit</a>
                                            </header>
                                            <address>
                                                Jena Benjamin<br>Oneill Mcintyre Associates<br>128 East Green Old
                                                Road<br>Illum nostrud saepe<br>Quisquam est id
                                                aliq<br>Cuscatlán<br>77241<br>El Salvador </address>
                                        </div>


                                    </div>

                                </div>

                            </div><!-- my-account-wrapper -->
                        </div><!-- content-primary -->
                    </div><!-- row -->
                </div>
            </div>
        </div>
        <!--WPFC_FOOTER_START-->
    </div><!-- site-content -->
</main>
    <Footer/>
</template>

<script setup>
	import Header from '../layout/Header.vue'
	import Footer from '../layout/Footer.vue'
	import Sidebar from './Sidebar.vue'

</script>
