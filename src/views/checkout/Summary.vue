<template>
  <div class="order-review-wrapper">
    <h3 id="order_review_heading">Your order</h3>

    <div id="order_review" class="woocommerce-checkout-review-order">
      <table class="shop_table woocommerce-checkout-review-order-table">
        <thead>
          <tr>
            <th class="product-name">Product</th>
            <th class="product-total">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr class="cart_item">
            <td class="product-name">
              Apple MWP22AM/A AirPods Pro&nbsp;
              <strong class="product-quantity">×&nbsp;5</strong>
            </td>
            <td class="product-total">
              <span class="woocommerce-Price-amount amount"
                ><bdi
                  ><span class="woocommerce-Price-currencySymbol">$</span
                  >749.90</bdi
                ></span
              >
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span class="woocommerce-Price-amount amount"
                ><bdi
                  ><span class="woocommerce-Price-currencySymbol">$</span
                  >749.90</bdi
                ></span
              >
            </td>
          </tr>

          <tr class="woocommerce-shipping-totals shipping">
            <th>Shipping</th>
            <td data-title="Shipping">
              <ul id="shipping_method" class="woocommerce-shipping-methods">
                <li>
                  <input
                    type="radio"
                    name="shipping_method[0]"
                    data-index="0"
                    id="shipping_method_0_flat_rate1"
                    value="flat_rate:1"
                    class="shipping_method"
                    checked="checked"
                  /><label for="shipping_method_0_flat_rate1"
                    >Flat rate:
                    <span class="woocommerce-Price-amount amount"
                      ><bdi
                        ><span class="woocommerce-Price-currencySymbol">$</span
                        >5.00</bdi
                      ></span
                    ></label
                  >
                </li>
                <li>
                  <input
                    type="radio"
                    name="shipping_method[0]"
                    data-index="0"
                    id="shipping_method_0_free_shipping2"
                    value="free_shipping:2"
                    class="shipping_method"
                  /><label for="shipping_method_0_free_shipping2"
                    >Free shipping</label
                  >
                </li>
                <li>
                  <input
                    type="radio"
                    name="shipping_method[0]"
                    data-index="0"
                    id="shipping_method_0_local_pickup3"
                    value="local_pickup:3"
                    class="shipping_method"
                  /><label for="shipping_method_0_local_pickup3"
                    >Local pickup</label
                  >
                </li>
              </ul>
            </td>
          </tr>

          <tr class="order-total">
            <th>Total</th>
            <td>
              <strong
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">$</span
                    >754.90</bdi
                  ></span
                ></strong
              >
            </td>
          </tr>
        </tfoot>
      </table>

      <div id="payment" class="woocommerce-checkout-payment">
        <ul class="wc_payment_methods payment_methods methods">
          <li class="wc_payment_method payment_method_bacs">
            <input
              id="payment_method_bacs"
              type="radio"
              class="input-radio"
              name="payment_method"
              value="bacs"
              checked="checked"
              data-order_button_text=""
            />

            <label for="payment_method_bacs"> Direct bank transfer </label>
            <div class="panel payment_box payment_method_bacs p-3">
              <button
                type="button"
                class="button"
                @click="Modal"
                data-toggle="modal"
                data-target="#staticBackdrop"
              >
                <i class="fa fa-rocket"></i> &nbsp; Pay Now
              </button>
            </div>
          </li>
          <li class="wc_payment_method payment_method_cheque">
            <input
              id="payment_method_cheque"
              type="radio"
              class="input-radio"
              name="payment_method"
              value="cheque"
              data-order_button_text=""
            />

            <label for="payment_method_cheque"> Check payments </label>
            <div
              class="panel payment_box payment_method_cheque"
              style="display: none"
            >
              <p>
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </div>
          </li>
          <li class="wc_payment_method payment_method_cod">
            <input
              id="payment_method_cod"
              type="radio"
              class="input-radio"
              name="payment_method"
              value="cod"
              data-order_button_text=""
            />

            <label for="payment_method_cod"> Cash on delivery </label>
            <div
              class="panel payment_box payment_method_cod"
              style="display: none"
            >
              <p>Pay with cash upon delivery.</p>
            </div>
          </li>
        </ul>
        <div class="form-row place-order">
          <noscript>
            Since your browser does not support JavaScript, or it is disabled,
            please ensure you click the <em>Update Totals</em>
            button before placing your order. You may be charged more than the
            amount stated above if you fail to do so.
            <br /><button
              type="submit"
              class="button alt"
              name="woocommerce_checkout_update_totals"
              value="Update totals"
            >
              Update totals
            </button>
          </noscript>

          <div class="woocommerce-terms-and-conditions-wrapper">
            <div class="woocommerce-privacy-policy-text">
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our
                <a
                  href=""
                  class="woocommerce-privacy-policy-link"
                  target="_blank"
                  >privacy policy</a
                >.
              </p>
            </div>
            <div
              class="woocommerce-terms-and-conditions"
              style="display: none; max-height: 200px; overflow: auto"
            >
              <h3>Our Terms &amp; Conditions</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose injected humour and the like<br />
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn’t anything embarrassing
                hidden in the middle of text.
              </p>
              <h3>Where does it come from?<br /></h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose injected humour and the like
              </p>
              <ol>
                <li>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur
                </li>
                <li>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum fugiat quo voluptas nulla pariatur
                </li>
                <li>
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus.
                </li>
                <li>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </li>
              </ol>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn’t anything embarrassing
                hidden in the middle of text.
              </p>
              <h3>Why do we use it?<br /></h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words
              </p>
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </li>
                <li>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure rationally encounter consequences that are
                  extremely painful.
                </li>
              </ul>
            </div>
            <p class="form-row validate-required">
              <label
                class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox"
              >
                <input
                  type="checkbox"
                  class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                  name="terms"
                  id="terms"
                />
                <span class="woocommerce-terms-and-conditions-checkbox-text"
                  >I have read and agree to the website
                  <a
                    href=""
                    class="woocommerce-terms-and-conditions-link"
                    target="_blank"
                    >terms and conditions</a
                  ></span
                >&nbsp;<span class="required">*</span>
              </label>
              <input type="hidden" name="terms-field" value="1" />
            </p>
          </div>

          <a
            href="/order-confirmation"
            type=""
            class="button alt"
            name=""
            id=""
            value="Place order"
            data-value="Place order"
            >Place order</a
          >

          <input
            type="hidden"
            id="woocommerce-process-checkout-nonce"
            name="woocommerce-process-checkout-nonce"
            value="810eb5aef0"
          /><input
            type="hidden"
            name="_wp_http_referer"
            value="/machic/?wc-ajax=update_order_review"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    :class="showmodal"
    id="staticBackdrop"
    style=""
    :style="stylemodal"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="text-right" style="cursor: pointer">
            <i class="fa fa-times" aria-hidden="true" @click="close"></i>
          </div>
          <div class="tabs mt-3">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  :class="visa"
                  @click="clickvisa"
                  id="visa-tab"
                  data-toggle="tab"
                  href="#visa"
                  role="tab"
                  aria-controls="visa"
                  aria-selected="true"
                >
                  <img src="https://i.imgur.com/sB4jftM.png" width="80" />
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="paypal-tab"
                  :class="paypal"
                  @click="clickpaypal"
                  data-toggle="tab"
                  href="#paypal"
                  role="tab"
                  aria-controls="paypal"
                  aria-selected="false"
                >
                  <img src="https://i.imgur.com/yK7EDD1.png" width="80" />
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade"
                :class="showvisa"
                id="visa"
                role="tabpanel"
                aria-labelledby="visa-tab"
              >
                <div class="mt-4 mx-4">
                  <div class="text-center">
                    <h5>Credit card</h5>
                  </div>
                  <div class="form mt-3">
                    <div class="inputbox">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        required="required"
                      />
                      <span>Cardholder Name</span>
                    </div>
                    <div class="inputbox">
                      <input
                        type="text"
                        name="name"
                        min="1"
                        max="999"
                        class="form-control"
                        required="required"
                      />
                      <span>Card Number</span>
                    </div>
                    <div class="d-flex flex-row">
                      <div class="inputbox">
                        <input
                          type="text"
                          name="name"
                          min="1"
                          max="999"
                          class="form-control"
                          required="required"
                        />
                        <span>Expiration Date</span>
                      </div>
                      <div class="inputbox">
                        <input
                          type="text"
                          name="name"
                          min="1"
                          max="999"
                          class="form-control"
                          required="required"
                        />
                        <span>CVV</span>
                      </div>
                    </div>
                    <div class="pay">
                      <button class="btn btn-success btn-block">
                        Add card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                :class="showpaypal"
                id="paypal"
                role="tabpanel"
                aria-labelledby="paypal-tab"
              >
                <div class="mt-4 mx-4">
                  <div class="px-5 mt-5">
                    <div class="inputbox">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        required="required"
                      />
                      <span>Paypal Email Address</span>
                    </div>
                    <div class="pay">
                      <button class="btn btn-primary btn-block">
                        Add paypal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showmodal: "",
    stylemodal: "",
    visa: "",
    paypal: "",
    showpaypal: "",
    showvisa: "",
  }),
  mounted() {
    this.visa = "active";
    this.showvisa = "active show";
  },
  methods: {
    Modal: function () {
      this.showmodal = "show";
      this.stylemodal = "display: block; padding-right: 0.200073px;";
    },
    close: function () {
      this.showmodal = "";
      this.stylemodal = "";
    },
    clickpaypal: function () {
      this.visa = "";
      this.showvisa = "";
      this.paypal = "active";
      this.showpaypal = "active show";
    },
    clickvisa: function () {
      this.paypal = "";
      this.showpaypal = "";
      this.visa = "active";
      this.showvisa = "active show";
    },
  },
};
</script>
