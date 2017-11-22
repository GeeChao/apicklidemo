const yaml = require('js-yaml');
const fs = require('fs');
const {defineSupportCode} = require('cucumber');


const getTestData = function () {
    return yaml.safeLoad(fs.readFileSync('features/configs/test.yml', 'utf8'));
};

function CustomWorld({attach, parameters}) {

    this.attach = attach
    this.parameters = parameters;

    let a = {};

    this.data = getTestData();

    this.set = function (key, value) {
        a[key] = value;
        logger.debug("Set: ", key + " to " + value);
    };

    this.get = function (key) {
        logger.debug("Key retrieved: ", key in a ? a[key] : null);
        return key in a ? a[key] : null;
    };

}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
});
