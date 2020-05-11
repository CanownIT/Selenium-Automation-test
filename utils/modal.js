const { By, until } = require('selenium-webdriver');

// before opening folder
async function checkModalOverlay(driver) {
    let modal = await driver.findElement(By.className("pm-modalOverlay"))

    if (modal) {
        await driver.wait(until.stalenessOf(modal), 5000);
    }
}

// Closing popup image.
async function checkModalHeader(driver) {

    await driver.wait(until.elementLocated(By.xpath("//header[@class = 'pm-modalHeader']/button")), 5000).click()

}

module.exports = { checkModalHeader, checkModalOverlay }

