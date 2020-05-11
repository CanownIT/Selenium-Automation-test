const { Builder } = require('selenium-webdriver');
const { Capabilities } = require('selenium-webdriver');
const { Login } = require("./tests/login");
const { Folder } = require("./tests/folder");
const { Label } = require("./tests/label");
const { Order } = require("./tests/order");
const { Delete } = require("./tests/deletion");

const caps = new Capabilities();
caps.setPageLoadStrategy("eager");

(async function testTask() {
    let driver = await new Builder().withCapabilities(caps).forBrowser('firefox').build();

    let login = new Login(driver);
    let folder = new Folder(driver);
    let label = new Label(driver);
    let order = new Order(driver);
    let deletion = new Delete(driver);

    await login.testLogin()
    await folder.testCreateFolder()
    await label.testCreateLabel()
    await folder.testEditFolder()
    await label.testEditLabel()
    await order.testChangeOrder()
    await deletion.testDeleteFiles()

}

)();