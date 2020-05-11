const { By, until, ExpectedConditions, visibilityOfElementLocated, Browser } = require('selenium-webdriver');
const { checkModalOverlay } = require('../utils/modal');

class Delete {
    constructor(driver) {
        this.driver = driver;
    }

    async testDeleteFiles() {
        const { driver } = this

        await driver.wait(until.elementLocated(By.xpath("//button[@data-test-id = 'dropdown:open']")), 5000).click()
        await driver.wait(until.elementLocated(By.xpath("//button[@data-test-id = 'folders/labels:item-delete']")), 5000).click()
        await driver.wait(until.elementLocated(By.xpath("//form[@class = 'pm-modalContent']/footer/button[2]")), 5000).click()

        await checkModalOverlay(driver);
        await driver.wait(until.elementLocated(By.xpath("//button[@data-test-id = 'dropdown:open']")), 5000).click()
        await driver.wait(until.elementLocated(By.xpath("//button[@data-test-id = 'folders/labels:item-delete']")), 5000).click()
        await driver.wait(until.elementLocated(By.xpath("//form[@class = 'pm-modalContent']/footer/button[2]")), 5000).click()
    }
}

module.exports = { Delete }
