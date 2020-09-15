const { Builder, By, Key, until, Capabilities, WebDriver } = require("selenium-webdriver");

const chrome = require('selenium-webdriver/chrome');
const chromeCapabilities = Capabilities.chrome();
const firefox = require('selenium-webdriver/firefox');
const firefoxCapabilities = Capabilities.firefox();

firefoxCapabilities.set('firefoxOptions', {
      'args': ['--headless', '--disable-gpu']
    });

chromeCapabilities.set('chromeOptions', {
  'args': ['--headless', '--disable-gpu']
});

    


describe("Linksignal test", () => {
  let driver = null;
  before(() => {
    driver = new Builder()
      .forBrowser("chrome")
      //.usingServer("http://localhost:4444/wd/hub")
      //.setFirefoxOptions(new firefox.Options().addArguments('--headless'))
      .setChromeOptions(new chrome.Options().addArguments('--headless'))
      .withCapabilities(chromeCapabilities)
      .build();
  });

  it("Should go to linksignal.ai and fill the search form", (done) => {
    driver.get("https://linksignal.ai/").catch(() => {
      driver.quit();
    });
    driver.manage().setTimeouts({ implicit: 1000 });

    driver
      .findElement(By.name("d"))
      .sendKeys("linksignal.ai", Key.TAB)
      .catch(() => {
        driver.quit();
      });
    driver
      .findElement(By.name("k"))
      .sendKeys("Retail Merchant Group", Key.TAB)
      .catch(() => {
        driver.quit();
      });
    driver
      .findElement(By.className("btn btn-green btn-lg"))
      .click()
      .then(done)
      .catch(() => {
        driver.quit();
      });
  });

  it("Chameleon tour checking", (done) => {
    driver
      .wait(
        until.elementLocated(By.id("chmln-button-5f022614f2976e0007a3bb9f")),
        20000
      )
      .click().catch(() => {} )
      .then(() => {
        driver
          .wait(
            until.elementLocated(
              By.id("chmln-button-5f0234e5f2976e00091d70a2")
            ),
            2000
          )
          .click().catch(() => {} )
         
        driver
          .wait(
            until.elementLocated(
              By.id("chmln-button-5f023162f2976e0007a3c48b")
            ),
            4000
          )
          .click()
          .then(() => {
            driver.sleep(10000).then(() => {
              driver.executeScript(
                "document.getElementById('chmln-button-5f02356ff2976e0007a3c553').scrollIntoView();"
              );
              driver
                .wait(
                  until.elementLocated(
                    By.id("chmln-button-5f02356ff2976e0007a3c553")
                  ),
                  10000
                )
                .click().then(done).catch(() => {} )
               
            });
          })
      })
      .catch((e) => done(e) );
  });

  after(() => {
    driver.quit();
  });
});

function ErrorHandler(errorName) {
  if (e.name === "NoSuchElementError") {
    console.log("Element not found");
  }
}
