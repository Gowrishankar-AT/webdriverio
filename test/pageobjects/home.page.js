const Page = require('./page'); // base page

class HomePage extends Page {
    async getTitle() {
        const title = await browser.getTitle(); // await promise
        console.log('Page title is:', title);
        return title;
    }

     async assertTitleContains(expectedText) {
        
        const title = await browser.getTitle();

await expect(browser).toHaveTitle('ProtoCommerce'); // exact match // partial match

        if (title.includes(expectedText)) {
            console.log(`Title contains the expected text: "${expectedText}"`);
        }
        
        
    }
}
module.exports = new HomePage();
