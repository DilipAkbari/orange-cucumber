$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrmlive/demo/resources/featurefile/account.feature");
formatter.feature({
  "line": 2,
  "name": "Account feature",
  "description": "as a user i want to navigate to employee page and adding an employee successfully",
  "id": "account-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Account"
    }
  ]
});
formatter.before({
  "duration": 16272776100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to add employee page successfully",
  "description": "",
  "id": "account-feature;user-should-navigate-to-add-employee-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Home  page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username  \"Admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Pin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on add employee buton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see employee id \"Add Employee\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 425303700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 306821700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 229579300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1373168400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnPinButton()"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAddEmployeeButon()"
});
formatter.result({
  "duration": 34500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Employee",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iShouldSeeEmployeeId(String)"
});
formatter.result({
  "duration": 10864887700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Add Employee\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KKCD7HH\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\akbar\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57380}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ab73278853c77ec6241c4d5d173f3f91\n*** Element info: {Using\u003dxpath, value\u003d//h1[contains(text(),\u0027Add Employee\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:52)\r\n\tat com.orangehrmlive.demo.pages.AccountPage.verifyEmployeeIdext(AccountPage.java:69)\r\n\tat com.orangehrmlive.demo.cucumber.stepdefs.MyStepdefs.iShouldSeeEmployeeId(MyStepdefs.java:61)\r\n\tat ✽.Then I should see employee id \"Add Employee\"(src/test/java/com/orangehrmlive/demo/resources/featurefile/account.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4338555100,
  "status": "passed"
});
formatter.uri("src/test/java/com/orangehrmlive/demo/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "As a user I want to login into orange hrm website",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 13134853800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Home  page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username  \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 740956000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 312743500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1677408200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 1374899700,
  "status": "passed"
});
formatter.after({
  "duration": 1752732000,
  "status": "passed"
});
formatter.before({
  "duration": 12408177700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify text on the Home page when user logout successfully",
  "description": "",
  "id": "login-feature;verify-text-on-the-home-page-when-user-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on Home  page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter username  \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on welcome admin link and logout link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see login pannel \"LOGIN Panel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 47100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 436211500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 405996800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1804374500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnWelcomeAdminLinkAndLogoutLink()"
});
formatter.result({
  "duration": 12702638100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN Panel",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.iShouldSeeLoginPannel(String)"
});
formatter.result({
  "duration": 93301600,
  "status": "passed"
});
formatter.after({
  "duration": 1707045500,
  "status": "passed"
});
});