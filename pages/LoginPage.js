import {BasePage} from './BasePage.js';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        // Locators
        // this.loginButtonLink= page.getByLabel('Log in');
        this.loginButtonLink = page.locator('a[href="/login"]');
        this.emailInput = page.getByLabel('Email');
        this.passwordInput = page.locator('#Password');
        this.rememberMeCheckbox = page.locator('#RememberMe');
        this.loginButton = page.locator('input[value="Log in"]');
    }

    async clickLoginButtonLink() {
        await this.loginButtonLink.click();
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickRememberMeCheckbox() {
        await this.rememberMeCheckbox.check();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}

export { LoginPage };