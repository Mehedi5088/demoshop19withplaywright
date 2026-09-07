import { test } from '@playwright/test';
import { LoginPage as Login } from "../pages/LoginPage.js";
import 'dotenv/config';
import { loginData } from '../testData/logintest.js';
import * as XLSX from 'xlsx';

const users = Object.values(loginData);

// for (let i = 0; i < users.length; i++) {

//     test(`Should Login - Test ${i + 1}`, async ({ page }) => {

//         const pages = new Login(page);

//         const credentials = users[i];

//         await pages.pageOpen();
//         await pages.clickLoginButtonLink();

//         await pages.enterEmail(credentials.email);
//         await pages.enterPassword(credentials.password);

//         await pages.clickRememberMeCheckbox();
//         await pages.clickLoginButton();

//     });
// }

const excelPath = '/home/mehedi/Downloads/test_data.xlsx';
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];

const worksheet = workbook.Sheets[sheetName];

const testData = XLSX.utils.sheet_to_json(worksheet);
for (const data of testData) {

    test(`Login test - ${data.username}`, async ({ page }) => {
         const pages = new Login(page);


        await pages.pageOpen();
        await pages.clickLoginButtonLink();
        await page.getByLabel('Email').fill(data.username);
        await page.getByLabel('Password').fill(data.password);
        await pages.clickRememberMeCheckbox();
        await pages.clickLoginButton();
        await page.waitForTimeout(2000);

    });
}