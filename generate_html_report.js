const reporter = require('cucumber-html-reporter');
const os = require('os');

let options = {
    theme: 'bootstrap',
    jsonFile: 'report/cucumber_report.json',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "PLATFORM": os.type() + " " + os.release() + " " + os.platform(),
    }
};

reporter.generate(options);