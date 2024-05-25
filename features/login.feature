Feature: User Authentication tests

  # Background:
  #   Given User1 navigates to the application
  #   And User1 click on the login link

  @LoginScrenarios
  Scenario: Login should be success
    Given User1 navigates to the application
    And User1 click on the login link
    Given User2 navigates to the application
    And User2 click on the login link
    And User1 enter the username as "ortoni11"
    And User1 enter the password as "Pass12345"
    When User1 click on the login button
    Given User2 enter the username as "koushik"
    Given User2 enter the password as "Passkoushik"
    When User2 click on the login button
    But User2 login should fail
    Then User1 login should be success

  Scenario: Login should not be success
    Given User1 enter the username as "koushik"
    Given User1 enter the password as "Passkoushik"
    When User1 click on the login button
    But User1 login should fail