import { BasePage } from "./BasePage";
class Register extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        // Locators
        this.registerLink = page.locator('a[href="/register"]');
        this.gender = page.locator('#gender-female');
        this.fName = page.locator('#FirstName');
        this.lName = page.locator('#LastName');
        this.mail = page.locator('#Email');
        this.password = page.locator('#Password');
        this.cPassword = page.locator('#ConfirmPassword');
        this.rButton = page.locator('#register-button');
    }

    async clickRegisterLink() {
        await this.registerLink.click();
    }

    async genderSelection(){
        await this.gender.click()
    }

    async firstName(name){
        await this.fName.fill(name);
    }

    async lastName(name){
        await this.lName.fill(name);
    }

    async email(mail){
        await this.mail.fill(mail);
    }

    async registrationPassword(pass){
        await this.password.fill(pass);
    }

    async confirmPassword(pass){
        await this.cPassword.fill(pass);
    }
  
    async registerButton(){
        await this.rButton.click();
    }
  
}

export {Register};