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

    async addtocart(productName) {
        // Find the cart button relative to the product name
const cartButton = await $("//a[text()='"+productName+"']/ancestor::div[contains(@class,'card-body')]/following-sibling::div[contains(@class,'card-footer')]//button[contains(@class,'btn btn-info')]");
await cartButton.click();
const checkout = await $('//a[starts-with(text()," Checkout")]');
await checkout.click();


    }
}
module.exports = new HomePage();
