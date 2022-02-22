<template>
	<Header/>
<main id="main" class="site-primary">
    <div class="site-content">



        <div class="shop-content my-account-page mt-60">
            <div class="container">
                <div class="woocommerce">
                    <div class="woocommerce-notices-wrapper"></div>
                    <form method="post" class="woocommerce-ResetPassword lost_reset_password">
                        <p>Lost your password? Please enter your username or email address. You will receive a link to
                            create a new password via email.</p>
                        <p class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                            <label for="user_login">Username or email</label>
                            <input class="woocommerce-Input woocommerce-Input--text input-text" type="text"
                                name="user_login" id="user_login" autocomplete="username">
                        </p>
                        <div class="clear"></div>
                        <p class="woocommerce-form-row form-row">
                            <input type="hidden" name="wc_reset_password" value="true">
                            <button type="submit" class="woocommerce-Button button" value="Reset password">Reset
                                password</button>
                        </p>
                        <input type="hidden" id="woocommerce-lost-password-nonce" name="woocommerce-lost-password-nonce"
                            value="78f5773042"><input type="hidden" name="_wp_http_referer" value="">
                    </form>
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
</script>
