<template>
  <form action="javascript:void(0)" method="post" autocomplete="off">
    <table class="tinvwl-table-manage-list">
      <thead>
        <tr>
          <th class="product-cb">
            <input
              type="checkbox"
              class="global-cb"
              title="Select all for bulk action"
              @click="select"
              v-model="select_all"
            />
          </th>
          <th class="product-remove"></th>
          <th class="product-thumbnail">&nbsp;</th>
          <th class="product-name">
            <span class="tinvwl-full">Product Name</span
            ><span class="tinvwl-mobile">Product</span>
          </th>
          <th class="product-price">Unit Price</th>
          <th class="product-date">Date Added</th>
          <th class="product-stock">Stock Status</th>
          <th class="product-action">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="wishlist_item"
          v-for="(item, indextr) in results"
          :key="item.id"
        >
          <td class="product-cb">
            <input type="checkbox" :value="item.id" v-model="selected" />
          </td>
          <td class="product-remove">
            <button
              type="submit"
              name="tinvwl-remove"
              value="605"
              title="Remove"
            >
              <i class="ftinvwl ftinvwl-times"></i>
            </button>
          </td>
          <td class="product-thumbnail">
            <a href="javascript:void(0)"
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
          <td class="product-name">
            <a href="javascript:void(0)">{{ item.product }}</a>
          </td>
          <td class="product-price">
            <del aria-hidden="true"
              ><span class="woocommerce-Price-amount amount"
                ><bdi
                  ><span class="woocommerce-Price-currencySymbol">$</span
                  >699.99</bdi
                ></span
              ></del
            >
            <ins
              ><span class="woocommerce-Price-amount amount"
                ><bdi
                  ><span class="woocommerce-Price-currencySymbol">$</span
                  >{{ item.price }}</bdi
                ></span
              ></ins
            >
          </td>
          <td class="product-date">
            <time class="entry-date" datetime="2022-02-15 04:54:29"
              >February 15, 2022</time
            >
          </td>
          <td class="product-stock">
            <p class="stock in-stock">
              <span><i class="ftinvwl ftinvwl-check"></i></span
              ><span>In Stock</span>
            </p>
          </td>
          <td class="product-action">
            <button
              class="button alt"
              name="tinvwl-add-to-cart"
              value="605"
              title="Add to Cart"
            >
              <i class="ftinvwl ftinvwl-shopping-cart"></i
              ><span class="tinvwl-txt">Add to Cart</span>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="100">
            <div class="tinvwl-to-left look_in">
              <div class="tinvwl-input-group tinvwl-no-full">
                <input
                  type="hidden"
                  name="lists_per_page"
                  value="10"
                  id="tinvwl_lists_per_page"
                /><select
                  name="product_actions"
                  id="tinvwl_product_actions"
                  class="tinvwl-break-input-filed form-control"
                >
                  <option value="" selected="selected">Actions</option>
                  <option value="add_selected">Add to Cart</option>
                  <option value="remove">Remove</option></select
                ><span class="tinvwl-input-group-btn"
                  ><button
                    class="button tinvwl-break-input tinvwl-break-checkbox"
                    name="tinvwl-action"
                    value="product_apply"
                    title="Apply Action"
                  >
                    Apply <span class="tinvwl-mobile">Action</span>
                  </button></span
                >
              </div>
            </div>
            <div class="tinvwl-to-right look_in">
              <button
                class="btn"
                name="tinvwl-action"
                value="product_selected"
                title="Add Selected to Cart"
              >
                Add Selected to Cart
              </button>
              &nbsp;
              <button
                class="btn"
                name="tinvwl-action"
                value="product_all"
                title="Add All to Cart"
              >
                Add All to Cart
              </button>
            </div>
            <input
              type="hidden"
              id="wishlist_nonce"
              name="wishlist_nonce"
              value="f0ab8a2cc0"
            /><input
              type="hidden"
              name="_wp_http_referer"
              value="/machic/wishlist/"
            />
          </td>
        </tr>
      </tfoot>
    </table>
  </form>
</template>

<script>
export default {
  data: () => ({
    select_all: false,
    selected: [],
    results: [
      {
        id: 1,
        product: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB 1",
        price: 233,
        quantity: 1,
        subtotal: 233,
      },
      {
        id: 2,
        product: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB 2",
        price: 253,
        quantity: 1,
        subtotal: 253,
      },
    ],
  }),
  mounted() {
    console.log(this.selected);
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.select_all) {
        for (let i in this.results) {
          this.selected.push(this.results[i].id);
        }
      }
    },
  },
};
</script>

