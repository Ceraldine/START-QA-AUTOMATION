class CartPage {
  constructor(page) {
    this.page = page;
    this.items = '.cart_item';
    this.itemNames = '.cart_item .inventory_item_name';
  }

  async removeItem(productId) {
    await this.page.click(`[data-test="remove-${productId}"]`);
  }
}

module.exports = { CartPage };