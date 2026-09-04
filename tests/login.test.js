import { test } from '@playwright/test';
import { LoginPage as Login } from "../pages/LoginPage.js";
import 'dotenv/config';
import { loginData } from '../testData/logintest.js';

const users = Object.values(loginData);

for (let i = 0; i < users.length; i++) {

    test(`Should Login - Test ${i + 1}`, async ({ page }) => {

        const pages = new Login(page);

        const credentials = users[i];

        await pages.pageOpen();
        await pages.clickLoginButtonLink();

        await pages.enterEmail(credentials.email);
        await pages.enterPassword(credentials.password);

        await pages.clickRememberMeCheckbox();
        await pages.clickLoginButton();

    });
}