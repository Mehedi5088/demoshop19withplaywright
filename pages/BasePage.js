class BasePage{
    constructor(page) {
        this.page = page;
        this.pageUrl = 'https://demowebshop.tricentis.com/'
    }   

// page open
    async pageOpen() {
        await this.page.goto(this.pageUrl,{
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
        await this.page.setViewportSize({ width: 1920, height: 1080 });
    }
// page close
    async pageClose(){
        await this.page.close();
    }
}

export { BasePage };