<template>
      <div class="u-column1 col-md-6">
                            <h2>Login</h2>
                            <form class="woocommerce-form woocommerce-form-login login" method="post">
                                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label for="username">Username or email address&nbsp;<span
                                            class="required">*</span></label>
                                    <input type="text" class="woocommerce-Input woocommerce-Input--text input-text"
                                        name="username" id="username" autocomplete="username" value="">
                                </p>
                                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label for="password">Password&nbsp;<span class="required">*</span></label>
                                    <span class="password-input"><span class="password-input"><span
                                                class="password-input"><input
                                                    class="woocommerce-Input woocommerce-Input--text input-text"
                                                    type="password" name="password" id="password"
                                                    autocomplete="current-password"><span
                                                    class="show-password-input"></span></span><span
                                                class="show-password-input"></span><span
                                                class="show-password-input"></span></span><span
                                            class="show-password-input"></span><span
                                            class="show-password-input"></span><span
                                            class="show-password-input"></span></span>
                                </p>
                                <p class="form-row">
                                    <label
                                        class="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                        <input class="woocommerce-form__input woocommerce-form__input-checkbox"
                                            name="rememberme" type="checkbox" id="rememberme" value="forever">
                                        <span>Remember me</span>
                                    </label>
                                    <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce"
                                        value="9096d6b682"><input type="hidden" name="_wp_http_referer"
                                        value="/machic/my-account/?d=rtl"> <button type="submit"
                                        class="woocommerce-button button woocommerce-form-login__submit" name="login"
                                        value="Log in">Log in</button>
                                </p>
                                <p class="woocommerce-LostPassword lost_password">
                                    <a href="">Lost your
                                        password?</a>
                                </p>
                            </form>
                        </div>
</template>