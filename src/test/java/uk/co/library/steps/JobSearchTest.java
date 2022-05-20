package uk.co.library.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @And("^I accept cookies$")
    public void iAcceptCookies() throws InterruptedException {
        new HomePage().acceptIFrameAlert();
    }

    @And("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobTitle) {
       new HomePage().enterJobTitle(jobTitle);
    }

    @And("^I enter Location \"([^\"]*)\"$")
    public void iEnterLocation(String location) {
        new HomePage().enterLocation(location);

    }

    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance) {
        new HomePage().selectDistance(distance);

    }

    @And("^I click on moreSearchOptionsLink$")
    public void iClickOnMoreSearchOptionsLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter salaryMin \"([^\"]*)\"$")
    public void iEnterSalaryMin(String minSal) {
        new HomePage().enterMinSalary(minSal);
    }

    @And("^I enter salaryMax \"([^\"]*)\"$")
    public void iEnterSalaryMax(String maxSal) {
        new HomePage().enterMaxSalary(maxSal);
    }

    @And("^I select salaryType \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType) {
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^I select jobType \"([^\"]*)\"$")
    public void iSelectJobType(String jobType) {
        new HomePage().selectJobType(jobType);
    }

    @And("^I click on 'Find Jobs' button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^I can see the result \"([^\"]*)\"$")
    public void iCanSeeTheResult(String result) {
        Assert.assertEquals("error",result, new ResultPage().verifyTheResults());

    }


}
