Feature: Posts endpoint demo
  As an automation tester,
  I want to learn how to use Apickli,
  So that I can automate my REST-API tests.

  Scenario: GET request demo
    When I GET /posts
    Then response code should be 200
    And response body path $. should be of type array

  Scenario: POST request demo
    Given I set Content-Type header to application/json
    And I set body to {"userId": 1,"id": 999,"title": "STAG TEST","body": "apickli demo"}
    When I POST to /posts
    Then response code should be 201
    And response body should be valid json

  Scenario: Scenario variable injection
    Given I store the value(s) {"userId": 1} as body in scenario scope
    When I POST to /posts
    Then response code should be 201
    And response body should be valid json

  Scenario: Validate against schema
    When I GET /posts
    Then response body should be valid according to schema file posts.schema

