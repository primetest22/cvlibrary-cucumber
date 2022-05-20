Feature: Search Result Test
  As a user, I can see jobs based on my search

  @smoke @regression
  Scenario Outline: : I can see all the jobs based on search
    Given I am on homepage
    And I accept cookies
    And I enter job title "<jobTitle>"
    And I enter Location "<location>"
    And I select distance "<distance>"
    And I click on moreSearchOptionsLink
    And I enter salaryMin "<salaryMin>"
    And I enter salaryMax "<salaryMax>"
    And I select salaryType "<salaryType>"
    And I select jobType "<jobType>"
    And I click on 'Find Jobs' button
    Then I can see the result "<result>"

    Examples:

      | jobTitle            | location               | distance       | salaryMin      | salaryMax      | salaryType  | jobType   | result                                                  |
      | Tester              | Harrow                 | up to 5 miles  | 30000          | 500000         | Per annum   | Permanent | Permanent Tester jobs in Harrow on the Hill             |
      | Scientist           | Harrow                 | up to 15 miles | 30000          | 50000          | Per annum   | Contract  | Contract Scientist jobs in Harrow on the Hill           |
      | Pharmaceutical      | Cambridgeshire         | up to 7 miles  | 30000          | 60000          | Per annum   | Any       | Pharmaceutical jobs in Cambridgeshire                   |
      | Retail Manager      | West London            | up to 25 miles | 30000          | 50000          | Per annum   | Permanent | Permanent Retail Manager jobs in West London            |
      | Automation Tester   | HA1 1AB                | up to 10 miles | 300            | 400            | Per day     | Contract  | Contract Automation Tester jobs in HA1 1AB              |
      | Research Scientist  | Newcastle upon Tyne    | up to 10 miles | 400            | 500            | Per day     | Contract  | Contract Research Scientist jobs in Newcastle upon Tyne |
