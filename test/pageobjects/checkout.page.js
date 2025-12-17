const Page = require('./page'); // base page

class CheckoutPage extends Page {
async itemexists(productName) {
    const cartItems = await $$('//a[text()="'+productName+'"]');// single element
await expect(cartItems).toHaveText(productName);

const checkout= await $('//button[normalize-space(text())="Checkout"]');    
    await checkout.click();
    const location = await $('//input[@id="country"]');
    location.click();
    await location.setValue('ind');
    const indiaOption = await $('//a[text()="India"]');
    await indiaOption.click();
    const termsCheckbox = await $('//input[@id="checkbox2"]');
    await setTimeout(async () => {
        
    await termsCheckbox.click();
    }, 6000);
    
   const ischeck = await termsCheckbox.isSelected();
   if (!ischeck) {
   
     await setTimeout(async () => {
        await termsCheckbox.click();
    }, 6000);
} else {
    await setTimeout(async () => {
        console.log('Checkbox is already selected');
    }, 1000);
}
    const purchase= await $('//input[@value="Purchase"]');
    await purchase.click();
const successAlert = await $('//div[contains(@class,"alert-success")]');

// Correct way in modern WebDriverIO
await expect(successAlert).toHaveText(
    "Success! Thank you! Your order will be delivered in next few weeks :-).",
    { containing: true } // allows partial/flexible match
);


}
}
module.exports = new CheckoutPage();