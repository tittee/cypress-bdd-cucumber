Feature: Send Contact

  As a customer
  I can send my contact via form

  Scenario: Submit Contact Form
    Given I open contact page
    When I fill contact form
    And I click on send from
    Then I shoud see the popup
    And I click close the pupup
    Then I see "/contact" in the url