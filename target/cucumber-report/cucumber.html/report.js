$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HappyPath.feature");
formatter.feature({
  "line": 1,
  "name": "Happy Path",
  "description": "",
  "id": "happy-path",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3299324300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should able to submit form",
  "description": "",
  "id": "happy-path;verify-user-should-able-to-submit-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I click on \u0027START\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \u0027First Name\u0027 and \u0027Last Name\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I upload file",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I draw signature",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select date",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I answer a security question",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I submit form",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I am able to submit form successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HappyPathTest.iClickOnSTARTButton()"
});
formatter.result({
  "duration": 118386000,
  "status": "passed"
});
formatter.match({
  "location": "HappyPathTest.iEnterFirstNameAndLastName()"
});
formatter.result({
  "duration": 1191764000,
  "status": "passed"
});
formatter.match({
  "location": "HappyPathTest.iUploadFile()"
});
formatter.result({
  "duration": 7228614900,
  "status": "passed"
});
formatter.match({
  "location": "HappyPathTest.iDrawSignature()"
});
formatter.result({
  "duration": 6491990900,
  "status": "passed"
});
formatter.match({
  "location": "HappyPathTest.iSelectDate()"
});
formatter.result({
  "duration": 2656366800,
  "status": "passed"
});
formatter.match({
  "location": "HappyPathTest.iAnswerASecurityQuestion()"
});
formatter.result({
  "duration": 3317342500,
  "status": "passed"
});
formatter.match({
  "location": "HappyPathTest.iSubmitForm()"
});
formatter.result({
  "duration": 2868087800,
  "status": "passed"
});
formatter.match({
  "location": "HappyPathTest.iAmAbleToSubmitFormSuccessfully()"
});
formatter.result({
  "duration": 60220400,
  "status": "passed"
});
formatter.after({
  "duration": 103400,
  "status": "passed"
});
});