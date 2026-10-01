import { test, expect } from '@playwright/test';
import { Register } from "../pages/Register";

test('Demo Web Shop url should open successfully', async ({ page }) => {

    const pages = new Register(page);
    await pages.pageOpen();
    await pages.clickRegisterLink();
     await page.waitForTimeout(5000);
    await pages.genderSelection();
     await page.waitForTimeout(5000);
    await pages.firstName("Humaira");
     await page.waitForTimeout(5000);
    await pages.lastName("tabassum");
     await page.waitForTimeout(5000);
    // await pages.email(process.env.EMAIL);
    await pages.email('sazidul3@gamil.com');
     await page.waitForTimeout(5000);
    await pages.registrationPassword('12345678');
     await page.waitForTimeout(5000);
    await pages.confirmPassword("12345678");
    await expect(pages.verifyLogin).toBeVisible();
    await pages.registerButton();
    await page.waitForTimeout(5000);
    await page.pause();
});