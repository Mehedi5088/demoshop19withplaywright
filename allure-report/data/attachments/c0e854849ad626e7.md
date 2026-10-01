# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.test.js >> Should Login successfully 2
- Location: tests/login.test.js:18:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[href=\'/logout\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[href=\'/logout\']')

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { LoginPage as Login} from "../pages/LoginPage.js";
  3  | import {LoginData} from '../testData/testLogin.js';
  4  | import * as excel from 'xlsx';
  5  | 
  6  | console.log(LoginData.length);
  7  | // const users = Object.values(LoginData);
  8  | // Read Excel
  9  | const dataFromSheet = excel.readFile('/home/mehedi/Documents/test_data.xlsx');
  10 | 
  11 | const sheet = dataFromSheet.Sheets[dataFromSheet.SheetNames[0]];
  12 | 
  13 | const users = excel.utils.sheet_to_json(sheet);
  14 | 
  15 | console.log(users);
  16 | 
  17 | for (let i = 0; i < users.length; i++) {
  18 |     test(`Should Login successfully ${i + 1}`, async ({ page }) => {
  19 | 
  20 |         const pages = new Login(page);
  21 |         await pages.pageOpen();
  22 |         await pages.clickLoginButtonLink();
  23 |         // await pages.enterEmail("sazidul@gamil.com");
  24 |         // await pages.enterPassword("12345678");
  25 |         await pages.enterEmail(users[i].username);
  26 |         await pages.enterPassword(users[i].password);
  27 |         await pages.clickRememberMeCheckbox();
  28 |         await pages.clickLoginButton();
> 29 |         await expect(pages.verifyLogin).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  30 |         // await page.pause();
  31 |         await page.waitForTimeout(2000);
  32 |     });
  33 | 
  34 | }
  35 | 
  36 | 
```