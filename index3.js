const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver");

let fs = require('fs');
const capabilities = Capabilities.firefox();
//const firefox = require("selenium-webdriver/firefox");
const { logger } = require('./loggers.js');

(async function example() {
  let driver = await new Builder().forBrowser("firefox")
       // .usingServer("http://localhost:4444/wd/hub")   
      .withCapabilities(capabilities)
      .build();
  try {
    
    
    await driver.get("https://linksignal.ai/");
    
    await driver
      .findElement(By.name("d"))
      .sendKeys("https://linksignal.ai/", Key.TAB);
    await driver
      .findElement(By.name("k"))
      .sendKeys("Retail Merchant Group", Key.TAB);
      
{
     await driver.findElement(By.className("btn btn-green btn-lg")).click();
     
     
    await driver
      .wait(
        await until.elementLocated(
          By.id("chmln-button-5f022614f2976e0007a3bb9f")
        ),
        25000
      ).click();
      
    await driver
      .wait(
        await until.elementLocated(
          By.id("chmln-button-5f0234e5f2976e00091d70a2")
        ),
        25000
      ).click();
      
    await driver
      .wait(
        await until.elementLocated(
          By.id("chmln-button-5f023162f2976e0007a3c48b")
        ),
        25000
      ).click();
      await driver
      .wait(function() {
        const elmnt = document.getElementById("chmln-button-5f02356ff2976e0007a3c553");
        elmnt.scrollIntoView();
      },
        25000
      );
      
    await driver
      .wait(
        await until.elementLocated(
          By.id("chmln-button-5f02356ff2976e0007a3c553")
        ),
        10
      ).click();
      

      // let ele = await driver.findElement(By.css(".hero-4-img"));
    // Captures the element screenshot
  //  let encodedString = await ele.takeScreenshot(true);
  //   await fs.writeFileSync('./image.png', encodedString, 'base64');
  //   driver.takeScreenshot().then(function(data){
  //     var base64Data = data.replace(/^data:image\/png;base64,/,"")
  //     fs.writeFile("out.png", base64Data, 'base64', function(err) {
  //          if(err) console.log(err);
  //     });
  //  });
  //   await driver.close();
}  
      driver.getTitle().then((title) => {
        console.log("Title is " + title);
        logger.info("Title is " + title + ": From Retail Merchant Group");
        logger.error("No error");

      });

     
      
      
  } catch (e) {
    console.log(e);
  } finally {
     await driver.quit();
  }
})();
