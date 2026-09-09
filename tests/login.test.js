import {test, expect} from '@playwright/test';
import { LoginPage as Login} from "../pages/LoginPage.js";
import {LoginData} from '../testData/testLogin.js';
import * as excel from 'xlsx';

console.log(LoginData.length);
// const users = Object.values(LoginData);
// Read Excel
const dataFromSheet = excel.readFile('/home/mehedi/Documents/test_data.xlsx');

const sheet = dataFromSheet.Sheets[dataFromSheet.SheetNames[0]];

const users = excel.utils.sheet_to_json(sheet);

console.log(users);

for (let i = 0; i < users.length; i++) {
    test(`Should Login successfully ${i + 1}`, async ({ page }) => {

        const pages = new Login(page);
        await pages.pageOpen();
        await pages.clickLoginButtonLink();
        // await pages.enterEmail("sazidul@gamil.com");
        // await pages.enterPassword("12345678");
        await pages.enterEmail(users[i].username);
        await pages.enterPassword(users[i].password);
        await pages.clickRememberMeCheckbox();
        await pages.clickLoginButton();
        await expect(pages.verifyLogin).toBeVisible();
        // await page.pause();
        await page.waitForTimeout(2000);
    });

}

