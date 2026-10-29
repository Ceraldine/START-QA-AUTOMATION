class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = '[data-test="checkout"]';
    this.firstName = '[data-test="firstName"]';
    this.lastName = '[data-test="lastName"]';
    this.postalCode = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.finishButton = '[data-test="finish"]';
    this.errorMessage = '[data-test="error"]';
    this.completeHeader = '[data-test="complete-header"]';
  }

  async startCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async fillInfo(first, last, zip) {
    if (first) await this.page.fill(this.firstName, first);
    if (last) await this.page.fill(this.lastName, last);
    if (zip) await this.page.fill(this.postalCode, zip);
    await this.page.click(this.continueButton);
  }

  async finish() {
    await this.page.click(this.finishButton);
  }
}

module.exports = { CheckoutPage };