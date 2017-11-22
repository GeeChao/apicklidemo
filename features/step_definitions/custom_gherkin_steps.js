var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    Given(/^I store the value\(s\) (.*) as (.*) in scenario scope$/, function (value, key) {
        value = this.apickli.replaceVariables(value);
        this.apickli.storeValueInScenarioScope(key, value);
        logger.debug("Stored in scenario scope key: ", key, ", value: ", value);
    });

    Then(/^check request and response/, function () {
        logger.info("--------------------------------------------------------------------------------");
        logger.info(">>>>> REQUEST BODY:", this.apickli.requestBody);
        logger.info("--------------------------------------------------------------------------------");
        logger.info(">>>>> RESPONSE BODY:", this.apickli.httpResponse.body);
        logger.info("--------------------------------------------------------------------------------");
    });

    Then(/^test step$/, function () {
        let response = JSON.parse(this.apickli.httpResponse.body);;
        response.forEach((result) => {
            expect(result.name).to.not.be.empty;
        });
    });
});