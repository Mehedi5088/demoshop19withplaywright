import {test} from '@playwright/test';
import { OrderPage } from "../pages/OrderPage.js";
import { LoginPage} from "../pages/LoginPage.js";

test('Should order successfully', async ({ page }) => {

    const orders = new OrderPage(page);
     const login = new LoginPage(page);

// first login 
    await orders.pageOpen();
    
    await login.clickLoginButtonLink();
    await login.enterEmail("sazidul@gamil.com");
    await login.enterPassword("12345678");
    await login.clickRememberMeCheckbox();
    await login.clickLoginButton();

    // after login click on order page
    await orders.clickMenuBooks();
    await page.waitForTimeout(3000);
    await orders.filterByPrice();   
    await page.pause();
}); 