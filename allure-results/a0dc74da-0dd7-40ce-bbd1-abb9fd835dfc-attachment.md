# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: register.test.js >> Demo Web Shop url should open successfully
- Location: tests/register.test.js:4:5

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - generic [ref=f1e4]:
      - generic:
        - link "Tricentis Demo Web Shop":
          - /url: /
          - img "Tricentis Demo Web Shop"
      - list [ref=f1e7]:
        - listitem [ref=f1e8]:
          - link "Register" [ref=f1e9] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f1e10]:
          - link "Log in" [ref=f1e11] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f1e12]:
          - link "Shopping cart (0)" [ref=f1e13] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f1e14]: Shopping cart
            - generic [ref=f1e15]: (0)
        - listitem [ref=f1e16]:
          - link "Wishlist (0)" [ref=f1e17] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f1e18]: Wishlist
            - generic [ref=f1e19]: (0)
      - generic [ref=f1e21]:
        - status [ref=f1e22]
        - textbox [ref=f1e23]: Search store
        - button "Search" [ref=f1e24] [cursor=pointer]
    - list [ref=f1e26]:
      - listitem [ref=f1e27]:
        - link "Books" [ref=f1e28] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f1e29]:
        - link "Computers" [ref=f1e30] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f1e31]:
        - link "Electronics" [ref=f1e32] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f1e33]:
        - link "Apparel & Shoes" [ref=f1e34] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f1e35]:
        - link "Digital downloads" [ref=f1e36] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f1e37]:
        - link "Jewelry" [ref=f1e38] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f1e39]:
        - link "Gift Cards" [ref=f1e40] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f1e41]:
        - generic [ref=f1e42]:
          - strong [ref=f1e44]: Categories
          - list [ref=f1e46]:
            - listitem [ref=f1e47]:
              - link "Books" [ref=f1e48] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f1e49]:
              - link "Computers" [ref=f1e50] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f1e51]:
              - link "Electronics" [ref=f1e52] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f1e53]:
              - link "Apparel & Shoes" [ref=f1e54] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f1e55]:
              - link "Digital downloads" [ref=f1e56] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f1e57]:
              - link "Jewelry" [ref=f1e58] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f1e59]:
              - link "Gift Cards" [ref=f1e60] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f1e61]:
          - strong [ref=f1e63]: Manufacturers
          - list [ref=f1e65]:
            - listitem [ref=f1e66]:
              - link "Tricentis" [ref=f1e67] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f1e68]:
          - strong [ref=f1e70]: Newsletter
          - generic [ref=f1e72]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f1e74]
            - button "Subscribe" [ref=f1e76] [cursor=pointer]
      - generic [ref=f1e79]:
        - heading "Register" [level=1] [ref=f1e81]
        - generic [ref=f1e82]:
          - generic [ref=f1e83]:
            - strong [ref=f1e85]: Your Personal Details
            - generic [ref=f1e86]:
              - generic [ref=f1e87]:
                - generic [ref=f1e88]: "Gender:"
                - generic [ref=f1e89]:
                  - radio "Male" [ref=f1e90]
                  - text: Male
                - generic [ref=f1e91]:
                  - radio "Female" [checked] [ref=f1e92]
                  - text: Female
              - generic [ref=f1e93]:
                - generic [ref=f1e94]: "First name:"
                - textbox "First name:" [ref=f1e95]: Humaira
                - text: "*"
              - generic [ref=f1e96]:
                - generic [ref=f1e97]: "Last name:"
                - textbox "Last name:" [ref=f1e98]: tabassum
                - text: "*"
              - generic [ref=f1e99]:
                - generic [ref=f1e100]: "Email:"
                - textbox "Email:" [ref=f1e101]: sazidul@gamil.com
                - text: "*"
          - generic [ref=f1e102]:
            - strong [ref=f1e104]: Your Password
            - generic [ref=f1e105]:
              - generic [ref=f1e106]:
                - generic [ref=f1e107]: "Password:"
                - textbox "Password:" [ref=f1e108]: "12345678"
                - text: "*"
              - generic [ref=f1e109]:
                - generic [ref=f1e110]: "Confirm password:"
                - textbox "Confirm password:" [active] [ref=f1e111]: "12345678"
                - text: "*"
          - button "Register" [ref=f1e113] [cursor=pointer]
  - generic [ref=f1e114]:
    - generic [ref=f1e115]:
      - generic [ref=f1e116]:
        - heading "Information" [level=3] [ref=f1e117]
        - list [ref=f1e118]:
          - listitem [ref=f1e119]:
            - link "Sitemap" [ref=f1e120] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f1e121]:
            - link "Shipping & Returns" [ref=f1e122] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f1e123]:
            - link "Privacy Notice" [ref=f1e124] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f1e125]:
            - link "Conditions of Use" [ref=f1e126] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f1e127]:
            - link "About us" [ref=f1e128] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f1e129]:
            - link "Contact us" [ref=f1e130] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f1e131]:
        - heading "Customer service" [level=3] [ref=f1e132]
        - list [ref=f1e133]:
          - listitem [ref=f1e134]:
            - link "Search" [ref=f1e135] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f1e136]:
            - link "News" [ref=f1e137] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f1e138]:
            - link "Blog" [ref=f1e139] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f1e140]:
            - link "Recently viewed products" [ref=f1e141] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f1e142]:
            - link "Compare products list" [ref=f1e143] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f1e144]:
            - link "New products" [ref=f1e145] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f1e146]:
        - heading "My account" [level=3] [ref=f1e147]
        - list [ref=f1e148]:
          - listitem [ref=f1e149]:
            - link "My account" [ref=f1e150] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f1e151]:
            - link "Orders" [ref=f1e152] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f1e153]:
            - link "Addresses" [ref=f1e154] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f1e155]:
            - link "Shopping cart" [ref=f1e156] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f1e157]:
            - link "Wishlist" [ref=f1e158] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f1e159]:
        - heading "Follow us" [level=3] [ref=f1e160]
        - list [ref=f1e161]:
          - listitem [ref=f1e162]:
            - link "Facebook" [ref=f1e163] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f1e164]:
            - link "Twitter" [ref=f1e165] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f1e166]:
            - link "RSS" [ref=f1e167] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f1e168]:
            - link "YouTube" [ref=f1e169] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f1e170]:
            - link "Google+" [ref=f1e171] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f1e172]:
      - text: Powered by
      - link "nopCommerce" [ref=f1e173] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f1e174]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { Register } from "../pages/Register";
  3  | 
  4  | test('Demo Web Shop url should open successfully', async ({ page }) => {
  5  | 
  6  |     const pages = new Register(page);
  7  |     await pages.pageOpen();
  8  |     await pages.clickRegisterLink();
  9  |     await pages.genderSelection();
  10 |     await pages.firstName("Humaira");
  11 |     await pages.lastName("tabassum");
  12 |     await pages.email(process.env.EMAIL);
  13 |     await pages.registrationPassword(process.env.PASSWORD);
  14 |     await pages.confirmPassword("12345678");
> 15 |     await expect(pages.verifyLogin).toBeVisible();
     |                                     ^ Error: toBeVisible can be only used with Locator object, was called with undefined
  16 |     await pages.registerButton();
  17 |     // await page.waitForTimeout(5000);
  18 |     await page.pause();
  19 | });
```