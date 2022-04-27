Feature: Store Admin Login

    I want to Login as Admin

    Scenario: Login as adimin
        Given I navigate to website
        When I enter valid username
        And I enter valid password
        And I click on Login Button
        Then Validate the URL with /admin after login