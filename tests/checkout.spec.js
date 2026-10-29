const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const users = require('../fixtures/users.json');

test.describe('Checkout tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL(/inventory.html/);

    const inventory = new InventoryPage(page);
    await inventory.addToCart('sauce-labs-backpack');
    await inventory.openCart();
    await expect(page).toHaveURL(/cart.html/);
  });

  test('complete checkout shows confirmation', async ({ page }) => {
    const checkout = new CheckoutPage(page);

    await checkout.startCheckout();
    await expect(page).toHaveURL(/checkout-step-one.html/);

    await checkout.fillInfo('Juan', 'Dela Cruz', '1000');
    await expect(page).toHaveURL(/checkout-step-two.html/);

    await checkout.finish();
    await expect(page).toHaveURL(/checkout-complete.html/);
    await expect(page.locator(checkout.completeHeader)).toHaveText('Thank you for your order!');
  });

  test('missing first name shows error', async ({ page }) => {
    const checkout = new CheckoutPage(page);

    await checkout.startCheckout();
    await checkout.fillInfo('', 'Dela Cruz', '1000');

    await expect(page.locator(checkout.errorMessage)).toContainText('First Name is required');
  });
});