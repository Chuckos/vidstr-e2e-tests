"use strict";

var homePageHeader = function () {

    this.navBar = {
        signUp_Button: element(by.binding('ui.buttons.sign_up')),
        login_Button:   element.all(by.binding('ui.buttons.login')).get(1),
        userName_Field: element.all(by.binding(' App.user.email ')).get(1),
        logOut_Button:  element(by.css('.fa.fa-sign-out')),
    };

};
module.exports = homePageHeader;