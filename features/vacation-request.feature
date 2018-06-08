Feature: Make sure Urlaubsverwaltung base functionality works as expected

    Scenario: Open Urlaubsverwaltung and login
        Given We open Urlaubsverwaltung on test system
        When We have authenticated as user "testUser" with password "secret"
        Then We expect to see the overview page

    Scenario: Create vacation request
        Given We open Urlaubsverwaltung on test system
        When We have authenticated as user "testUser" with password "secret"
        And We scroll to next month 12 times
        And We click on day 5 of the month
        Then We expect to see the create vacation request form
