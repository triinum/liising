import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

//headless brauser
process.env.CHROME_BIN = process.env.CHROME_BIN || require('puppeteer').executablePath();

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://rhr.nortal.com:4443/rhr-web/#/",

     capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--no-sandbox', '--headless', '--window-size=1024,768', binary: process.env.CHROME_BIN]
    }
  },
  
  
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    allScriptsTimeout: 300000,

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
        
    
    },
    


    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../stepdefinitions/*.ts", "../../support/*.ts"],
        strict: true,
        keepAlive: true, //jätab sessiooni ellu pärast testi, et saaks hankega edasi minna
        tags: "@TriinuM",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
