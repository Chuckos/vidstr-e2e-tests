"use strict";

var loginPage = function () {

    this.get = function () {
        browser.get('/');
    };

        this.login_header = element(by.binding('ui.buttons.login')),
        this.enter_Email = element.all(by.model('vm.email')).first(),
        this.enter_Password = element.all(by.model('vm.password')).first(),
        this.login_Button = element(by.buttonText('Login')),
        this.password_help_message = element(by.css('.form-group.has-error'))
};
module.exports = loginPage;