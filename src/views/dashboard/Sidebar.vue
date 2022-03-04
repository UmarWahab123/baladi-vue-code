<template>
 <div class="my-account-navigation">
                                    <div class="account-toggle-menu">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="2.3" y1="12" x2="21.8" y2="12"></line>
                                            <line x1="2.3" y1="6" x2="21.8" y2="6"></line>
                                            <line x1="2.3" y1="18" x2="21.8" y2="18"></line>
                                        </svg>
                                        Your Menu
                                    </div><!-- account-toggle-menu -->

                                    <nav class="woocommerce-MyAccount-navigation">
                                        <ul>
                                            <li
                                                class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard is-active">
                                                  <router-link to="userdashboard">Dashboard
                                               </router-link>
                                            </li>
                                            <li
                                                class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders">
                                                 <router-link to="orders">Orders
                                               </router-link>

                                            </li>
                                            <li
                                                class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--downloads">
                                                <a
                                                    href="https://klbtheme.com/machic/my-account/downloads/">Downloads</a>
                                            </li>
                                            <li
                                                class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address">
                                               <router-link to="shipping">Addresses
                                               </router-link>
                                               
                                            </li>
                                            <li
                                                class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account">
                                             
                                                      <router-link to="account">Account
                                               </router-link>

                                            </li>
                                            <li
                                                class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--tinv_wishlist">
                                                  <router-link to="wishlist">Wishlist
                                               </router-link>
                                            </li>
                                            <li
                                                class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                                                <a
                                                    href="https://klbtheme.com/machic/my-account/customer-logout/?_wpnonce=9691dc2191">Logout</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div><!-- my-account-navigation -->
</template>

<script setup>
	import Header from '../layout/Header.vue'
	import Footer from '../layout/Footer.vue'
</script>
