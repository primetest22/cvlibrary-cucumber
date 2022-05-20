package uk.co.library.pages;


import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "gdpr-consent-notice")
    WebElement getInToIFrame;

    @CacheLookup
    @FindBy(xpath = "//button[@id='save']")
    WebElement acceptAllBtn;

    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobRole;

    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")
    WebElement loctn;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distance1;

    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearch;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement minSal;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement maxSal;

    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salType;

    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jpType;

    @CacheLookup
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement jbBtn;


    public void clickOnFindJobsButton() {
        clickOnElement(jbBtn);
        log.info("Click on find job button " + jbBtn.toString());
    }

    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jpType, jobType);
        log.info("Select job type " + jobType.toString());

    }

    public void selectSalaryType(String sType) {
        selectByVisibleTextFromDropDown(salType, sType);
        log.info("Select salary  " + salType.toString());
    }

    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(maxSal, maxSalary);
        log.info("Select max salary " + maxSal.toString());
    }

    public void enterMinSalary(String minSalary) {
        sendTextToElement(minSal, minSalary);
        log.info("Select min salary " + minSal.toString());

    }

    public void clickOnMoreSearchOptionLink() {
        clickOnElement(moreSearch);
        log.info("Click on more search option " + moreSearch.toString());

    }

    public void selectDistance(String distance) {
        selectByVisibleTextFromDropDown(distance1, distance);
        log.info("Select distance " + distance1.toString());
    }

    public void enterLocation(String location) {
        sendTextToElement(loctn, location);
        log.info("Enter location " + loctn.toString());
    }

    public void enterJobTitle(String jobTitle) {
        sendTextToElement(jobRole, jobTitle);
        log.info("Enter job role " + jobRole.toString());
    }

    public void acceptIFrameAlert() throws InterruptedException {
        Thread.sleep(2000);
        driver.switchTo().frame(getInToIFrame);
        clickOnElement(acceptAllBtn);
        driver.switchTo().defaultContent();
        log.info("Accepting cookies: " + acceptAllBtn.toString());
    }


}
