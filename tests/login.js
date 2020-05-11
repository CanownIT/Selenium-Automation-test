const { By, until } = require('selenium-webdriver');
const { checkModalHeader } = require('../utils/modal')

class Login {
  constructor(driver) {
    this.driver = driver;
  }

  async testLogin() {
    const { driver } = this

    driver.manage().window().maximize();
    await driver.get('https://beta.protonmail.com/login');
    // Type in Username in sendKeys method.
    await driver.wait(until.elementLocated(By.name('username')), 5000).sendKeys('');
    // Type in Password in sendKeys method.
    await driver.wait(until.elementLocated(By.name('password')), 5000).sendKeys('');
    await driver.wait(until.elementLocated(By.id("login_btn")), 5000).click()
    await checkModalHeader(driver)
  }
}

module.exports = { Login }
