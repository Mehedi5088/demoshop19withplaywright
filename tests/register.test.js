import { test, expect } from '@playwright/test';
import { Register } from "../pages/Register";

test('Demo Web Shop url should open successfully', async ({ page }) => {

    const pages = new Register(page);
    await pages.pageOpen();
    await pages.clickRegisterLink();
    await pages.genderSelection();
    await pages.firstName("Humaira");
    await pages.lastName("tabassum");
    await pages.email("sazidul@gamil.com");
    await pages.registrationPassword("12345678");
    await pages.confirmPassword("12345678");
    await pages.registerButton();
    // await page.waitForTimeout(5000);
    await page.pause();
});