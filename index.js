const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver");
const { expect } = require("chai");
const capabilities = Capabilities.chrome();

describe("Linksignal test", () => {
  let driver = null;
  before(() => {
    driver = new Builder()
      .forBrowser("chrome")
      // .usingServer("http://localhost:4444/wd/hub")
      //.withCapabilities(capabilities)
      .build();
    driver.manage().window().maximize();
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
      .click()
      .then(() => {
        driver
          .wait(
            until.elementLocated(
              By.id("chmln-button-5f0234e5f2976e00091d70a2")
            ),
            2000
          )
          .click()
         
        driver
          .wait(
            until.elementLocated(
              By.id("chmln-button-5f023162f2976e0007a3c48b")
            ),
            4000
          )
          .click()
          .then(() => {
            setTimeout(() => {
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
                .click().then(done)
               
            }, 10000);
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
