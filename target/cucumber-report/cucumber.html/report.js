$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search Result Test",
  "description": "As a user, I can see jobs based on my search",
  "id": "search-result-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": ": I can see all the jobs based on search",
  "description": "",
  "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 21,
      "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 22,
      "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;2"
    },
    {
      "cells": [
        "Scientist",
        "Harrow",
        "up to 15 miles",
        "30000",
        "50000",
        "Per annum",
        "Contract",
        "Contract Scientist jobs in Harrow on the Hill"
      ],
      "line": 23,
      "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;3"
    },
    {
      "cells": [
        "Pharmaceutical",
        "Cambridgeshire",
        "up to 7 miles",
        "30000",
        "60000",
        "Per annum",
        "Any",
        "Pharmaceutical jobs in Cambridgeshire"
      ],
      "line": 24,
      "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;4"
    },
    {
      "cells": [
        "Retail Manager",
        "West London",
        "up to 25 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Retail Manager jobs in West London"
      ],
      "line": 25,
      "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;5"
    },
    {
      "cells": [
        "Automation Tester",
        "HA1 1AB",
        "up to 10 miles",
        "300",
        "400",
        "Per day",
        "Contract",
        "Contract Automation Tester jobs in HA1 1AB"
      ],
      "line": 26,
      "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;6"
    },
    {
      "cells": [
        "Research Scientist",
        "Newcastle upon Tyne",
        "up to 10 miles",
        "400",
        "500",
        "Per day",
        "Contract",
        "Contract Research Scientist jobs in Newcastle upon Tyne"
      ],
      "line": 27,
      "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6321242600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": ": I can see all the jobs based on search",
  "description": "",
  "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 212182100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iAcceptCookies()"
});
formatter.result({
  "duration": 2510373300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 446184700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iEnterLocation(String)"
});
formatter.result({
  "duration": 111095900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iSelectDistance(String)"
});
formatter.result({
  "duration": 144998100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 512166600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 232333500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 135185800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchTest.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 67588100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iSelectJobType(String)"
});
formatter.result({
  "duration": 126873200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 172605600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.iCanSeeTheResult(String)"
});
formatter.result({
  "duration": 13119042000,
  "status": "passed"
});
formatter.after({
  "duration": 860977300,
  "status": "passed"
});
formatter.before({
  "duration": 3901364800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": ": I can see all the jobs based on search",
  "description": "",
  "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Scientist\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the result \"Contract Scientist jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 50100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iAcceptCookies()"
});
formatter.result({
  "duration": 2342934300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scientist",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 197870000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iEnterLocation(String)"
});
formatter.result({
  "duration": 356507000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iSelectDistance(String)"
});
formatter.result({
  "duration": 72824100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 157857800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 242530400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 110821500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchTest.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 61845600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iSelectJobType(String)"
});
formatter.result({
  "duration": 129853700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 231271000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Scientist jobs in Harrow on the Hill",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.iCanSeeTheResult(String)"
});
formatter.result({
  "duration": 14263030800,
  "status": "passed"
});
formatter.after({
  "duration": 888667200,
  "status": "passed"
});
formatter.before({
  "duration": 3853683200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": ": I can see all the jobs based on search",
  "description": "",
  "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Pharmaceutical\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Cambridgeshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 7 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"60000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Any\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the result \"Pharmaceutical jobs in Cambridgeshire\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iAcceptCookies()"
});
formatter.result({
  "duration": 2288691800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pharmaceutical",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 152627400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cambridgeshire",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iEnterLocation(String)"
});
formatter.result({
  "duration": 430780900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 7 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iSelectDistance(String)"
});
formatter.result({
  "duration": 126069300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 173139600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 218207100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 121190700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchTest.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 57991400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iSelectJobType(String)"
});
formatter.result({
  "duration": 59614800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 239427400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pharmaceutical jobs in Cambridgeshire",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.iCanSeeTheResult(String)"
});
formatter.result({
  "duration": 12038179200,
  "status": "passed"
});
formatter.after({
  "duration": 869278000,
  "status": "passed"
});
formatter.before({
  "duration": 4224053600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": ": I can see all the jobs based on search",
  "description": "",
  "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Retail Manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"West London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the result \"Permanent Retail Manager jobs in West London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iAcceptCookies()"
});
formatter.result({
  "duration": 2339420400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Retail Manager",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 142609900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "West London",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iEnterLocation(String)"
});
formatter.result({
  "duration": 474368400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iSelectDistance(String)"
});
formatter.result({
  "duration": 116468500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 153470500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 258647400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 84818800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchTest.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 90064400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iSelectJobType(String)"
});
formatter.result({
  "duration": 98845500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 133396000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Retail Manager jobs in West London",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.iCanSeeTheResult(String)"
});
formatter.result({
  "duration": 12793555500,
  "status": "passed"
});
formatter.after({
  "duration": 896082700,
  "status": "passed"
});
formatter.before({
  "duration": 4274523100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": ": I can see all the jobs based on search",
  "description": "",
  "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Automation Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"HA1 1AB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"400\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per day\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the result \"Contract Automation Tester jobs in HA1 1AB\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 34600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iAcceptCookies()"
});
formatter.result({
  "duration": 2359389000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 206876700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA1 1AB",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iEnterLocation(String)"
});
formatter.result({
  "duration": 395046000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iSelectDistance(String)"
});
formatter.result({
  "duration": 130660900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 172125300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 283134800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 85291800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 21
    }
  ],
  "location": "JobSearchTest.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 189591000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iSelectJobType(String)"
});
formatter.result({
  "duration": 170180600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 173894100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Automation Tester jobs in HA1 1AB",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.iCanSeeTheResult(String)"
});
formatter.result({
  "duration": 24940343400,
  "status": "passed"
});
formatter.after({
  "duration": 857274500,
  "status": "passed"
});
formatter.before({
  "duration": 4182652400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": ": I can see all the jobs based on search",
  "description": "",
  "id": "search-result-test;:-i-can-see-all-the-jobs-based-on-search;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Research Scientist\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Newcastle upon Tyne\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per day\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the result \"Contract Research Scientist jobs in Newcastle upon Tyne\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iAcceptCookies()"
});
formatter.result({
  "duration": 2327263000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Research Scientist",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 135756000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Newcastle upon Tyne",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iEnterLocation(String)"
});
formatter.result({
  "duration": 439729500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iSelectDistance(String)"
});
formatter.result({
  "duration": 114994000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 175441000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 197354700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 86807400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 21
    }
  ],
  "location": "JobSearchTest.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 116948500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iSelectJobType(String)"
});
formatter.result({
  "duration": 101351700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 177878200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Research Scientist jobs in Newcastle upon Tyne",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.iCanSeeTheResult(String)"
});
formatter.result({
  "duration": 10250141200,
  "status": "passed"
});
formatter.after({
  "duration": 801340400,
  "status": "passed"
});
});