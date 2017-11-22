'use strict';

const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Before, After, BeforeAll, AfterAll}) {

    BeforeAll(function() {
        const chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
        global.logger = require('winston');
        logger.level = "info";
    });

    Before(function () {
        this.apickli = new apickli.Apickli(this.data.Scheme, this.data.Domain, this.data.Fixtures);
    });

    After(function () {
    });

    AfterAll(function() {
        logger.info("Completed all scenarios");
    });

});