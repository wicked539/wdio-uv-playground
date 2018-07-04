const cucumber = require('cucumber');

cucumber.defineSupportCode(function (paramObj) {

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

      browser.click('button.btn-primary');
    }
  );

  Then(
    /^We expect to see the overview page$/,
    () => {
      expect(browser.getUrl()).to.include('/web/staff/1/overview');
    }
  );

  Then(
    /^We log out$/,
    () => {
      browser.click('button.navbar-toggle');
      browser.waitForVisible('a[href="/logout"]');
      browser.click('a[href="/logout"]');
      expect(browser.getUrl()).to.include('/login');
    }
  );

  When(
    /^We scroll to next month ([^"]*)? times$/,
    (n) => {
      for (let i = 0; i < n; i++) {
        browser.click('button.datepicker-next');
        browser.pause(250);
      }
    }
  );

  When(
    /^We click on day ([^"]*)? of the month$/,
    (n) => {
      let selector = 'span.datepicker-day=\'' + n + '\'';

      console.log('selector: ' + selector)

      browser.waitForVisible(selector);
      browser.click(selector);
    }
  );

  Then(
    /^We expect to see the create vacation request form$/,
    () => {
      expect(browser.getElement('legend=Urlaubsantrag')).toExist();
    }
  );
});
