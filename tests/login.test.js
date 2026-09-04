import {test} from '@playwright/test';
import { LoginPage as Login} from "../pages/LoginPage.js";

test('Should Login successfully', async ({ page }) => {

    const pages = new Login(page);
    await pages.pageOpen();
    await pages.clickLoginButtonLink();
    await pages.enterEmail("sazidul@gamil.com");
    await pages.enterPassword("12345678");
    await pages.clickRememberMeCheckbox();
    await pages.clickLoginButton();
    await page.pause();
});