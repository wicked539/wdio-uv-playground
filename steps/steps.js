const cucumber = require('cucumber');

cucumber.defineSupportCode(function(paramObj) {

  const Given = paramObj.Given;
  const When = paramObj.When;
  const Then = paramObj.Then;

  Given(
    /^We open Urlaubsverwaltung on test system$/,
    () => {
      browser.url('https://urlaubsverwaltung-demo.synyx.de/');
    }
  );

  When(
    /^We have authenticated as user "([^"]*)?" with password "([^"]*)?"$/,
    (user, password) => {
      browser.setValue('input#username', user);
      browser.setValue('input#password', password);

      browser.click('span#submitButton');
    }
  );

  Then(
    /^We expect to see the overview page$/,
    () => {
      expect(browser.getUrl()).to.include('/web/staff/1/overview');
    }
  );
});
