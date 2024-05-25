Feature: Add products to cart

  Background:
    Given User1 navigates to the application
    And User1 click on the login link

  @add
  Scenario Outline: Authenticated Users - Add to cart
    And User1 enter the username as "<username>"
    And User1 enter the password as "<password>"
    And User1 click on the login button
    When User1 search for a "<book>"
    And User1 add the book to the cart
    Then User1 the cart badge should get updated

    Examples:
      | username | password  | book            |
      # | ortoni   | pass1234$ | Roomies         |
      | ortonikc | pass1234  | The Simple Wild |