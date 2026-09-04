import {BasePage} from './BasePage.js';

class OrderPage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.menuBooks = page.locator("//ul[@class='top-menu']//a[contains(text(),'Books')]");
        this.filtered = page.locator('#products-orderby');
    } 

    async clickMenuBooks(){
        await this.menuBooks.click();
    }

    async filterByPrice(){
        await this.filtered.click();
    }
}

export {OrderPage};