<template>
      <div class="u-column2 col-md-6">
                            <h2>Register</h2>
                            <form method="post" class="woocommerce-form woocommerce-form-register register">
                                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label for="reg_username">Username&nbsp;<span class="required">*</span></label>
                                    <input type="text" class="woocommerce-Input woocommerce-Input--text input-text"
                                        name="username" id="reg_username" autocomplete="username" value="">
                                </p>
                                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label for="reg_email">Email address&nbsp;<span class="required">*</span></label>
                                    <input type="email" class="woocommerce-Input woocommerce-Input--text input-text"
                                        name="email" id="reg_email" autocomplete="email" value="">
                                </p>
                                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label for="reg_password">Password&nbsp;<span class="required">*</span></label>
                                    <span class="password-input"><span class="password-input"><span
                                                class="password-input"><input type="password"
                                                    class="woocommerce-Input woocommerce-Input--text input-text"
                                                    name="password" id="reg_password" autocomplete="new-password"><span
                                                    class="show-password-input"></span></span><span
                                                class="show-password-input"></span><span
                                                class="show-password-input"></span></span><span
                                            class="show-password-input"></span><span
                                            class="show-password-input"></span><span
                                            class="show-password-input"></span></span>
                                </p>
                                <div class="woocommerce-privacy-policy-text">
                                    <p>Your personal data will be used to support your experience throughout this
                                        website, to manage access to your account, and for other purposes described
                                        in our <a href="https://klbtheme.com/machic/privacy-policy/"
                                            class="woocommerce-privacy-policy-link" target="_blank">privacy
                                            policy</a>.</p>
                                </div>
                                <p class="woocommerce-form-row form-row">
                                    <input type="hidden" id="woocommerce-register-nonce"
                                        name="woocommerce-register-nonce" value="b98c70acb1"><input type="hidden"
                                        name="_wp_http_referer" value="/machic/my-account/?d=rtl"> <button type="submit"
                                        class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                                        name="register" value="Register">Register</button>
                                </p>
                            </form>
                        </div>
</template>