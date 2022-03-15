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
                                   <div class="col-md-12">
                                    <h3 class="align-items-center p-3">Baladi Wallet</h3>

                                    <div class="col-xl-12 p-3 col-lg-12">
                                        <div class="card l-bg-orange-dark">
                                            <div class="card-statistic-3 p-4">
                                                <h5 class="card-icon fw-bold card-icon-large">Abdullah Ahmed</h5>

                                                <div class="row align-items-center mb-2 d-flex">
                                                    <div class="col-12 mt-4">
                                                        <h6 class="card-title mb-0">Available Balance</h6>
                                                        <h2 class="d-flex align-items-center mt-2 mb-0"> $11.61k</h2>
                                                    </div>
                                                    <small class="col-4 text-right"> <span
                                                            class="position-absolute side-text-date">Friday 4 March 2022
                                                        </span></small>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 p-3">

                                        <div class="col d-flex align-items-start">
                                            <div class="icon-square bg-light text-dark flex-shrink-0 me-3 p-3">
                                                <i class="fa fa-credit-card text-success"></i>
                                            </div>
                                            <div>
                                                <h2>Payments</h2>
                                                <p>Make convenient one-click payments</p>

                                            </div>
                                        </div>
                                        <div class="col d-flex align-items-start">
                                            <div class="icon-square bg-light text-dark flex-shrink-0 me-3 p-3">
                                                <i class="fa fa-bullhorn text-success"></i>
                                            </div>
                                            <div>
                                                <h2>Bonus</h2>
                                                <p>Earn bonus on your purchases</p>

                                            </div>
                                        </div>
                                        <div class="col d-flex align-items-start">
                                            <div class="icon-square bg-light text-dark flex-shrink-0 me-3 p-3">
                                                <i class="fa fa fa-credit-card text-success"></i>
                                            </div>
                                            <div>
                                                <h2>Get Bonus</h2>
                                                <p>Get bonus from Baladi Express</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-center">

                                            <a type="button" class="button " data-toggle="modal"
                                                data-target="#staticBackdrop"> Activate My Wallet
                                            </a>
                                        </div>
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
