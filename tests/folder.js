const { By, until, Key } = require('selenium-webdriver');
const { checkModalOverlay } = require('../utils/modal');

class Folder {
  constructor(driver) {
    this.driver = driver;
  }

  async testCreateFolder() {
    const { driver } = this

    await driver.wait(until.elementLocated(By.linkText("Folders / Labels")), 5000).click()
    await driver.wait(until.elementLocated(By.className("pm-button pm-button--primary mr1")), 5000).click()
    await driver.wait(until.elementLocated(By.className("pm-field-container")), 5000).click()
    await driver.wait(until.elementLocated(By.id("accountName")), 5000).sendKeys('Folder name', Key.ENTER);

  }

  async testEditFolder() {
    const { driver } = this

    await checkModalOverlay(driver);
    await driver.wait(until.elementLocated(By.className("pm-button pm-group-button pm-button--small")), 5000).click()
    await driver.wait(until.elementLocated(By.xpath("//input[@data-test-id = 'label/folder-modal:name']")), 5000).clear()
    await driver.wait(until.elementLocated(By.className("pm-field-container")), 5000).click()
    await driver.wait(until.elementLocated(By.id('accountName')), 5000).sendKeys(`New Folder name`, Key.ENTER);
    await checkModalOverlay(driver);

  }

}

module.exports = { Folder }
