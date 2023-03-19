const CustomReporter = require('../../node_modules/jasmine-spec-reporter').SpecReporter;

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new CustomReporter());