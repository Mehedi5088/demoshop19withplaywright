import {BasePage} from './BasePage.js';

class OrderPage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.menuBooks = page.locator("//ul[@class='top-menu']//a[contains(text(),'Books')]");
        this.filtered = page.locator('#products-orderby');
         this.productView = page.getByRole('link', {
        name: 'Computing and Internet'
    }).first();
        this.cart = page.locator("//input[@id='add-to-cart-button-13']");
        this.shCart = page.locator("//span[normalize-space()='Shopping cart']");
        this.check = page.locator("#termsofservice");
        this.checkBtn = page.locator("//button[@id='checkout']");
    } 

    async clickMenuBooks(){
        await this.menuBooks.click();
    }

    async filterByPrice(){
        await this.filtered.click();
        await this.filtered.selectOption({label: 'Price: Low to High'});
    }

    async viewProduct(){
        await this.productView.click();
    }
    async addToCart(){
        await this.cart.click();
    }
    async shoppingCart(){
        await this.shCart.click();
        await this.check.click();
        await this.checkBtn.click();
    }
    
}

export {OrderPage};