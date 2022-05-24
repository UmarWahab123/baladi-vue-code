<template>
  <form
    class="woocommerce-cart-form border shadow p-3"
    action="https://klbtheme.com/machic/cart/"
    method="post"
  >
    <table
      class="
        table
        shop_table shop_table_responsive
        cart
        woocommerce-cart-form__contents
      "
      cellspacing="0"
    >
      <thead>
        <tr>
          <th class="product-thumbnail">&nbsp;</th>
          <th class="product-name">Product</th>
          <th class="product-price">Price</th>
          <th class="product-quantity">Quantity</th>
          <th class="product-subtotal">Subtotal</th>
          <th class="product-remove">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="woocommerce-cart-form__cart-item cart_item"
          v-for="(item, indextr) in results"
        >
          <td class="product-thumbnail">
            <a
              href="https://klbtheme.com/machic/product/apple-10-9-inch-ipad-air-wi-fi-cellular-64gb/"
              ><img
                width="90"
                height="90"
                src="https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-90x90.jpg"
                class="
                  attachment-woocommerce_thumbnail
                  size-woocommerce_thumbnail
                "
                alt=""
                loading="lazy"
                srcset="
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-90x90.jpg    90w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-54x54.jpg    54w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-600x600.jpg 600w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-64x64.jpg    64w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-300x300.jpg 300w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-150x150.jpg 150w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-450x450.jpg 450w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1-96x96.jpg    96w,
                  https://klbtheme.com/machic/wp-content/uploads/2021/09/single-1.jpg         760w
                "
                sizes="(max-width: 90px) 100vw, 90px"
            /></a>
          </td>
          <td class="product-name" data-title="Product">
            <a
              href="https://klbtheme.com/machic/product/apple-10-9-inch-ipad-air-wi-fi-cellular-64gb/"
            >
              {{ item.product }}</a
            >
          </td>

          <td class="product-price" data-title="Price">
            <span class="woocommerce-Price-amount amount"
              ><bdi
                ><span class="woocommerce-Price-currencySymbol">QAR </span
                >{{ item.price }}</bdi
              ></span
            >
          </td>

          <td class="product-quantity" data-title="Quantity">
            <div class="quantity">
              <label class="screen-reader-text" for="quantity_621364ed017d6"
                >Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB quantity</label
              >
              <div
                class="quantity-button minus"
                @click="decrement"
                v-bind:input_Index="indextr"
              ></div>
              <input
                type="text"
                id="quantity_621364ed017d6"
                class="input-text qty text"
                step="1"
                min="0"
                max="10"
                name="cart[07563a3fe3bbe7e3ba84431ad9d055af][qty]"
                :value="item.quantity"
                title="Qty"
                size="4"
                placeholder=""
                inputmode="numeric"
              />
              <div
                class="quantity-button plus"
                @click="increment"
                v-bind:input_Index="indextr"
              ></div>
            </div>
          </td>

          <td class="product-subtotal" data-title="Subtotal">
            <span class="woocommerce-Price-amount amount"
              ><bdi
                ><span class="woocommerce-Price-currencySymbol">QAR </span
                >{{ item.subtotal }}</bdi
              ></span
            >
          </td>

          <td class="product-remove">
            <a
              href="https://klbtheme.com/machic/cart/?remove_item=07563a3fe3bbe7e3ba84431ad9d055af&amp;_wpnonce=6d4198d000"
              class="remove"
              aria-label="Remove this item"
              data-product_id="521"
              data-product_sku="BE45VGRT"
              >×</a
            >
          </td>
        </tr>

        <tr>
          <td colspan="6" class="actions">
            <div class="actions-wrapper">
              <div class="coupon">
                <label for="coupon_code">Coupon:</label>
                <input
                  type="text"
                  name="coupon_code"
                  class="input-text"
                  id="coupon_code"
                  value=""
                  placeholder="Coupon code"
                />
                <button
                  type="submit"
                  class="button"
                  name="apply_coupon"
                  value="Apply coupon"
                >
                  Apply coupon
                </button>
              </div>

              <button
                type="submit"
                class="button"
                name="update_cart"
                value="Update cart"
                disabled=""
                aria-disabled="true"
              >
                Update cart
              </button>

              <input
                type="hidden"
                id="woocommerce-cart-nonce"
                name="woocommerce-cart-nonce"
                value="6d4198d000"
              /><input
                type="hidden"
                name="_wp_http_referer"
                value="/machic/cart/"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
<script>
export default {
  data: () => ({
    results: {
      0: {
        id: 1,
        product: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
        price: 233,
        quantity: 1,
        subtotal: 233,
      },
      1: {
        id: 2,
        product: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB 2",
        price: 253,
        quantity: 1,
        subtotal: 253,
      },
    },
  }),
  mounted() {
    console.log(this.results);
  },
  methods: {
    increment: function (event) {
      const input_index = event.currentTarget.getAttribute("input_Index");

      this.results[input_index].quantity =
        this.results[input_index].quantity + 1;
    },
    decrement: function (event) {
      const input_index = event.currentTarget.getAttribute("input_Index");

      this.results[input_index].quantity =
        this.results[input_index].quantity - 1;
    },
  },
};
</script>
