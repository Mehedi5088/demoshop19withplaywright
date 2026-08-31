import { test, expect } from '@playwright/test';
import { Register } from "../pages/Register";

test('Demo Web Shop url should open successfully', async ({ page }) => {

    const pages = new Register(page);
    await pages.pageOpen('https://demowebshop.tricentis.com/');
    await pages.clickRegisterLink();
    await pages.genderSelection();
    await pages.firstName("Humaira");
    await pages.lastName("tabassum");
    await pages.email("humaira@gamil.com");
    await pages.registrationPassword("12345678");
    await pages.confirmPassword("12345678");
    await pages.registerButton();
    await page.waitForTimeout(5000);


    // Add assertions to verify that the page opened successfully
    // await expect(page).toHaveTitle(/Demo Web Shop/);
});