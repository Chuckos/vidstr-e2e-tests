# VidSTR-E2E-Tests
protractor end-to-end tests for the website vidstr

## E2E Protractor Tests 

A set of End-to-End protractor tests to help regression tests an angular.js website.

## The Basic: Set up Protractor
For more in-depth information about how to install protractor visit the protractor official website, which can be located [here] (http://www.protractortest.org/#/) 

Use npm to install Protractor globally with:

~~~
npm install -g protractor
~~~

This will install two command line tools, `protractor` and `webdriver-manager`. Try running `protractor --version` to make sure it's working.  
The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

```
webdriver-manager update
```
Now start up a server with:

```
webdriver-manager start
```
This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at [http://localhost:4444/wd/hub.](http://localhost:4444/wd/hub/static/resource/hub.html)

## Running Protractor Tests
To run tests, execute the follow command in the terminal in the root of e2e folder.

```
protractor conf.js
```