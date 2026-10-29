class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = '.title';
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
  }

  async addToCart(productId) {
    await this.page.click(`[data-test="add-to-cart-${productId}"]`);
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = { InventoryPage };
