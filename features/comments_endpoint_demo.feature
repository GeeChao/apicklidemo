Feature: Comments endpoint demo

  Scenario: GET request demo
    When I GET /comments
    Then response code should be 200
    And test step