const { By, until, Key } = require('selenium-webdriver');
const { checkModalOverlay } = require('../utils/modal');

class Label {
    constructor(driver) {
        this.driver = driver;
    }

    async testCreateLabel() {
        const { driver } = this

        await checkModalOverlay(driver);
        await driver.wait(until.elementLocated(By.xpath("//button[@data-test-id = 'folders/labels:addLabel']")), 5000).click()
        await driver.wait(until.elementLocated(By.className("pm-field-container")), 5000).click()
        await driver.wait(until.elementLocated(By.id('accountName')), 5000).sendKeys(`Label name `, Key.ENTER);

    }
    async testEditLabel() {
        const { driver } = this

        await driver.wait(until.elementLocated(By.xpath("//tr[@data-test-id ='folders/labels:item-type:label']/td[4]/div/button")), 5000).click()
        await driver.wait(until.elementLocated(By.xpath("//input[@data-test-id = 'label/folder-modal:name']")), 5000).clear()
        await driver.wait(until.elementLocated(By.className("pm-field-container")), 5000).click()
        await driver.wait(until.elementLocated(By.id('accountName')), 5000).sendKeys(`New Label name`, Key.ENTER);
        //await checkModalOverlay(driver);

    }

}

module.exports = { Label }
