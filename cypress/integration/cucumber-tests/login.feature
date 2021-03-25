Feature: Login to Application
  As a invalid user
  I can't login Application
  As a valid user
  I wand to login into Application

# @focus
  Scenario: Invalid Login
    Given I open login page
    And I want to wait for 2000 milliseconds
    And I see "Zero - Log in" in the title
    And I see "/login" in the url
    And I reload the browser
    When I fill username with "invalid username"
    And I fill password with "invalid password"
    And I click on submit login
    Then I should see error message

  Scenario: Valid Login
    Given I open login page
    When I fill username with "username"
    And I fill password with "password"
    And I click on submit login
    Then I should see homepage