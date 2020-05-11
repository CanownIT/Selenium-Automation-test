const { By } = require('selenium-webdriver');
const { checkModalOverlay } = require('../utils/modal');

class Order {
    constructor(driver) {
        this.driver = driver;
    }

    async testChangeOrder() {
        const { driver } = this

        await checkModalOverlay(driver);

        let sourceEle = driver.findElement(By.xpath("//tr[@data-test-id = 'folders/labels:item-type:label']/td[1]/span"));
        let targetEle = driver.findElement(By.xpath("//tr[@data-test-id = 'folders/labels:item-type:folder']/td[1]/span"));
        const actions = driver.actions({ async: true });
        await actions.move({ origin: sourceEle }).press().perform();
        await actions.move({ origin: targetEle }).release().perform();

    }

}

module.exports = { Order }
