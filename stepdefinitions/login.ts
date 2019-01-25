import { browser, protractor, element, by } from "protractor";
import { newProcurementPageObject } from "../pages/newProcurementPage";

const { Given, When, Then } = require("cucumber");
const {defineSupportCode} = require('cucumber');

defineSupportCode(({setDefaultTimeout}) => {
  setDefaultTimeout(50 * 1000);
});

const faker = require('faker');

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const newProcurement: newProcurementPageObject = new newProcurementPageObject();

 let procurementData = {
    //automaat asemel võib panna muu sõna kui tahaks teste pealkirja järgi üles leida
    name: "automaat" + faker.lorem.word(),
    procurementnameField: faker.lorem.word(),
    procurername: faker.lorem.word(99, 99),
    title: faker.random.words(),
    text: faker.lorem.sentence(9, 99)
    
    };

    Given('You are on procurement registers main page', async () => {
    
         await expect(browser.getTitle()).to.eventually.contains("Riigihangete register");
         await newProcurement.myDesktop.click();        
         browser.waitForAngularEnabled(false); //will not observe the ControlFlow for new promises again. Iga kord kui lahkud Angulari lehelt   
         //await expect(browser.getTitle()).to.eventually.contains("Riigihangete register 4.0.0-2018.12.21");
         //await expect(browser.getCurrentUrl()).to.eventually.equal("https://rhr.nortal.com/rhr_sso/login?mode=rhr&locale=et&service=https%3A%2F%2Frhr.nortal.com%3A4443%2F/rhr/j_spring_cas_security_check?url=https%3A%2F%2Frhr.nortal.com%3A4443%2Frhr-web%2F~hash~%2Fdesktop");
         });   

    When('You enter username {string}', async (string) => {
    
         await newProcurement.userName.sendKeys(string);  
         });
         
    Then('You enter password {string}', async (string) => {
        
         await newProcurement.password.sendKeys(string);
         await newProcurement.enterButton.click();
         browser.waitForAngularEnabled(true); //will observe the ControlFlow for new promises again.
         });     

    When('You click on procurement button', async () => {
         
         await newProcurement.newProcurementButton.click();
         browser.waitForAngular();
         browser.sleep(60 * 1000);
         
           });     

    Then('modal appears', async () => {
    
         await expect (element(by.css(".modal-title")).isDisplayed()).to.eventually.equal(true);  
         element(by.id('ng-app')).all(by.tagName('rhr-radio-button')).get(0).click();
         await newProcurement.nameField.sendKeys(procurementData.name);
         });
         
     When('You enter procurer name', async () => {
     
         //Hankija nimi
         await expect (element(by.id("procurer-name")).isPresent()).to.eventually.equal(true); 
         element(by.xpath("/html/body/div[1]/div/div/rhr-modal-body/div/div/ng-transclude/rhr-form/form/div[3]/div/div/rhr-form-group[2]/div/ng-transclude/tet-form-row/div/div/ng-transclude/span/select/option[2]")).click();
         browser.waitForAngular();     
  
      
         });
         
                  
     Then('You enter all relevant data', async () => {
     
         //Vastutav isik
         await expect (element(by.id("responsible-person")).isPresent()).to.eventually.equal(true); 
         element(by.css('#responsible-person /option[@value="123184"]')).click();
         
          //Hankega kaasneb
         await expect (element(by.id("organization-reason")).isPresent()).to.eventually.equal(true); 
         element(by.xpath("/html/body/div[1]/div/div/rhr-modal-body/div/div/ng-transclude/rhr-form/form/div[3]/div/div/rhr-form-group[4]/div/ng-transclude/tet-form-row/div/div/ng-transclude/span/select/option[2]")).click();
         
         //Hanke liik
         await expect (element(by.id("procurement-type")).isPresent()).to.eventually.equal(true); 
         element(by.xpath("/html/body/div[1]/div/div/rhr-modal-body/div/div/ng-transclude/rhr-form/form/div[3]/div/div/rhr-form-group[5]/div/ng-transclude/tet-form-row/div/div/ng-transclude/span/select/option[2]")).click();
         browser.waitForAngular(); 
         
         //Hankemenetluse liik
         await expect (element(by.id("procedure-type")).isPresent()).to.eventually.equal(true); 
         element(by.xpath("/html/body/div[1]/div/div/rhr-modal-body/div/div/ng-transclude/rhr-form/form/div[3]/div/div/rhr-form-group[6]/div/ng-transclude/tet-form-row/div/div/ng-transclude/span/select/option[2]")).click(); 
         
         //Kas on jagatud osadeks - kui ei, siis välja kommenteerida
         //element(by.xpath('//*[@id="ng-app"]/body/div[1]/div/div/rhr-modal-body/div/div/ng-transclude/rhr-form/form/div[3]/div/div/rhr-form-group[7]/div/ng-transclude/tet-form-row/div/div/ng-transclude/rhr-radio-button[1]')).click(); 
         
         
         
         
         
         //jätka nupuke mis sulgeb modaali       
         await newProcurement.closeModal.click();
         await browser.sleep(30000);
         });
         
              
     When('You wait for the desktop to appear', {timeout: 100000}, async () => {
         
         expect(browser.getCurrentUrl()).to.eventually.contains('activities');
         browser.waitForAngular();
         });
         
              
     Then('You click to continue', { timeout: 100000 }, async () => {
         
          
         //jätka tegevust nupuke
         element(by.xpath('/html/body/div[2]/rhr-procurement/rhr-main-content/main/ng-transclude/div/div[2]/div/rhr-procurement-workbench/div/div[2]/div[2]/rhr-procurement-activities/div[2]/ul/li/div[2]/ul/li[1]')).click(); 
         browser.waitForAngular();
         browser.sleep(60 * 1000);
         });           
         
      When('You enter cost {string}',  async (string) => {
      
         //sisesta hake lühiandmeid edasi
         //kirjeldus
         expect(browser.getCurrentUrl()).to.eventually.contains('general-info');
         await expect(newProcurement.bodyField.isDisplayed()).to.eventually.equal(true);
         await newProcurement.bodyField.sendKeys(procurementData.text);
         
         //maksumus
         await expect(newProcurement.costField.isDisplayed()).to.eventually.equal(true);
         await newProcurement.costField.sendKeys(string);
         });     

      Then('You add extra data', async () => {
         
         //hanke etapilisus
         element(by.xpath('//*[@id="ng-app"]/body/div[2]/rhr-procurement/rhr-main-content/main/ng-transclude/div/div[2]/div/rhr-procurement-general-info/div/rhr-form/form/div[3]/rhr-form-group[9]/div/ng-transclude/tet-form-row/div/div/ng-transclude/rhr-radio-button[1]')).click(); 

         element(by.xpath('//*[@id="ng-app"]/body/div[2]/rhr-procurement/rhr-main-content/main/ng-transclude/div/div[2]/div/rhr-procurement-general-info/div/rhr-form/form/div[3]/rhr-form-group[8]/div/ng-transclude/tet-form-row/div/div/ng-transclude/rhr-radio-button[1]')).click(); 
         });
         
      When('You enter CPV code', async (string) => {
         element(by.cssContainingText('ng-scope', 'Lisa CPV kood'))
         browser.waitForAngular();
         
         //kuupäev
          element(by.id('submissionDate')).get(0).click().sendKeys('10/16/1947');
         
         await newProcurement.saveButton.click();
         
         });
         

 


    