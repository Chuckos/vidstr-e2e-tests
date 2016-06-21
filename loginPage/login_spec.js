"use strict";

var LoginWidget = require('./login_po.js');
var PageHeader  = require('.././homePage_header_po.js');
var Helper      = require('../helper.js');

var loginWidget = new LoginWidget();
var pageHeader  = new PageHeader();
var helper      = new Helper();

var email        = helper.emailAddress;
var password     = helper.emailPassword;
var fakeEmail    = 'cadeeko+failed@gmail.com';
var fakePassword = 'sdfsdfasfsafds';

fdescribe('login Widget', function (){

    beforeEach(function(){
        loginWidget.get();
    });

    fit('should login with valid user credentials', function (){
        //browser.sleep(5000);
        //element(by.binding('ui.buttons.login')).click();
        element.all(by.binding('ui.buttons.login')).get(1).click()
        loginWidget.enter_Email.sendKeys(email);
        loginWidget.enter_Password.sendKeys(password);
        loginWidget.login_Button.click();
        
        browser.wait(function(){
            return element.all(by.binding(' App.user.email ')).get(1).isDisplayed();
        }, 5000);
        
        expect(pageHeader.navBar.userName_Field.getText())
            .toEqual(email);
    });

    it('should logout when logout button is clicked', function(){
        pageHeader.navBar.logOut_Button.click();
        expect(pageHeader.navBar.signUp_Button
            .isDisplayed())
            .toBeTruthy();
    });

    it('should NOT login with invalid credentials', function (){
        pageHeader.navBar.login_Button.click();
        loginWidget.enter_Email.sendKeys(fakeEmail);
        loginWidget.enter_Password.sendKeys(fakePassword);
        loginWidget.login_Button.click();
        expect(loginWidget.password_help_message.getText())
            .toEqual('Invalid login or password');
    });
});