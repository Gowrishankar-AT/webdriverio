const Page = require('./page'); // Make sure page.js exists in same folder

class LoginPage extends Page {
    get inputUsername() { return $('#username'); }
    get inputPassword() { return $('#password'); }
    get inputcheckbox() { return $('#terms'); }
    get roleDropdown() { return $('select.form-control'); }
    get btnSubmit() { return $('input[type="submit"]'); }

    async selectStudent() {
        await this.roleDropdown.waitForDisplayed();
        await this.roleDropdown.selectByAttribute('value', 'stud');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.selectStudent(); // ✅ Call method correctly
        await this.inputcheckbox.click();
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
