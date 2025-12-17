
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('rahulshettyacademy', 'learning')


 await HomePage.getTitle();

        await HomePage.assertTitleContains('ProtoCommerce');
       
    })
})

