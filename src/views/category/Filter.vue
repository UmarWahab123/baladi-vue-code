<template>
    <div id="sidebar" class="col col-12 col-lg-3 content-secondary site-sidebar filtered-sidebar">
                        <div class="site-scroll ps">
                            <div class="sidebar-inner">
                                <div class="sidebar-mobile-header">
                                    <h3 class="entry-title">Filter Products</h3>
                                    <div class="close-sidebar"> <i class="klbth-icon-cancel"></i> </div>
                                </div>
                                <div class=" woocommerce widget_price_filter">
                                    <h4 class="widget-title">Filter by price</h4>
                                    <form method="get" action="/product-category/apple/">
                                        <div class="price_slider_wrapper slider">
                                            <div class="wrapper mt-5">

                                                <div class="">
                                                    <div class="slider-track"></div>
                                                    <input type="range" min="0" max="100" value="30" id="slider-1"
                                                        oninput="slideOne()">
                                                    <input type="range" min="0" max="100" value="70" id="slider-2"
                                                        oninput="slideTwo()">
                                                </div>
                                            </div>
                                            <div class="price_slider_amount" data-step="10">
                                                <input type="text" id="min_price" name="min_price" value="0"
                                                    data-min="0" placeholder="Min price" style="display: none;">
                                                <input type="text" id="max_price" name="max_price" value="5440"
                                                    data-max="5440" placeholder="Max price" style="display: none;">
                                                <button type="submit" class="button">Filter</button>
                                                <div class="price_label values"> Price: <span id="range1" class="
                                                        from">$0</span> — <span id="range2" class="to">$5,440</span>
                                                </div>
                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav">
                                    <h4 class="widget-title">Filter by Color</h4>
                                    <ul class="woocommerce-widget-layered-nav-list">
                                        <li class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                            <div class="type-color"><span class="color-box"
                                                    style="background-color:#000000;"></span><a rel="nofollow"
                                                    href="/product-category/apple/?filter_color=black">Black</a> <span
                                                    class="count">(1)</span></div>
                                        </li>
                                        <li class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                            <div class="type-color"><span class="color-box"
                                                    style="background-color:#ff7900;"></span><a rel="nofollow"
                                                    href="/product-category/apple/?filter_color=orange">Orange</a> <span
                                                    class="count">(1)</span></div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="widget widget_product_status">
                                    <h4 class="widget-title">Product Status</h4>
                                    <div class="widget-checkbox-list">
                                        <ul>
                                            <li><a href="/product-category/apple/?stock_status=instock">
                                                    <input name="stockonsale" value="instock" id="instock"
                                                        type="checkbox">
                                                    <label><span></span>In Stock</label>
                                                </a></li>
                                            <li><a href="/product-category/apple/?on_sale=onsale">
                                                    <input name="stockonsale" value="onsale" id="onsale"
                                                        type="checkbox">
                                                    <label><span></span>On Sale</label>
                                                </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav">
                                    <h4 class="widget-title">Brands</h4>
                                    <ul class="woocommerce-widget-layered-nav-list">
                                        <li class="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                            <div class="type-button"><span class="button-box"></span><a rel="nofollow"
                                                    href="/product-category/apple/?filter_brands=apple">Apple</a> <span
                                                    class="count">(12)</span></div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="widget widget_media_image"><img width="293" height="587"
                                        src="http://localhost/english_baladi/src/img/widget-banner.jpg"
                                        class="image wp-image-2119  attachment-full size-full" alt="" loading="lazy"
                                        style="max-width: 100%; height: auto;"></div>
                            </div>
                            <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                                <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                            </div>
                            <div class="ps__rail-y" style="top: 0px; right: 0px;">
                                <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                            </div>
                        </div>
                    </div>
</template>