/**
 * Created by charlesadeeko on 18/06/2016.
 */

var env = require('./environment.js');


// The main suite of Protractor tests.
exports.config = {
    seleniumAddress: env.seleniumAddress,

    framework: 'jasmine2',

    //To print out the names of the test running
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    },

    // Spec patterns are relative to this directory
    specs: [
        // './*/*_spec.js',
        //'homePage_spec.js',
         './*/login_spec.js',
    ],

    multiCapabilities: env.capabilities,

    maxSessions: 1,

    baseUrl: env.baseUrl,


    jasmineNodeOpts: {

        print: function(){},
        showColors: true,
        defaultTimeoutInterval:30000,
        includeStackTrace: true
    }
};
