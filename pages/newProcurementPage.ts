import { $, element, by } from "protractor";

export class newProcurementPageObject {
    
    public myDesktop: any;
    public bodyField: any;
    public nameField: any;
    public titleField: any;
    public saveButton: any;
    public userName: any;
    public password: any;
    public enterButton: any;
    public costField: any;
    public workBench: any;
    public fakesubmitButton: any;
    public newProcurementButton: any;
    public subMenuextra:any;
    public conditionsCheck: any;
    public continueButton: any;
    public infoModal: any;
    public closeModal: any;
    
    constructor() {
    
    

    this.userName = element(by.xpath('//*[@id="username"]'));
    this.password = element(by.xpath('//*[@id="password"]'));
    this.enterButton = element(by.buttonText('Sisene kasutajanimega'));
    this.fakesubmitButton = element(by.id('fakeSubmitButton'));    
    this.closeModal = element(by.buttonText('Jätka')); 
    this.nameField = element(by.id('procurement-name'));
    this.titleField = element(by.id('procurement-title'));
    this.continueButton = element(by.xpath('/html/body/div[1]/div/div/div[2]/rhr-loader-button/button'));
    this.bodyField = element(by.xpath('//*[@id="shortDescription"]'));
    this.costField = element(by.id('cost'));
    this.saveButton = element(by.xpath('//*[@id="ng-app"]/body/div[2]/rhr-procurement/rhr-main-content/main/ng-transclude/div/div[2]/div/rhr-procurement-general-info/div/rhr-form/form/div[3]/div[2]/span/span/rhr-loader-button[1]/button'));
    this.myDesktop = element(by.buttonText('Sisene'));
    this.workBench = element(by.buttonText('Töölaud'));
    this.newProcurementButton = element(by.buttonText('Uus hange'));
    
    this.subMenuextra = element(by.xpath('//*[@id="ng-app"]/body/div[2]/rhr-procurement/rhr-main-content/main/ng-transclude/div/div[1]/rhr-procurement-menu/div/div/nav/ul[2]/li[2]/div/div/ul/li[2]/a'));
    // sellega peab saama expect(element(by.tagName('a')).getText()).toBe('Hankijad');
    
    this.conditionsCheck = element(by.css("label[for='Jessie']"));
    
    this.infoModal = element(by.css('modal-dialog'));
        
    }
    
    
    createProcurement(procurementData) {
    
    this.nameField.sendKeys(procurementData.name);
    this.bodyField.sendKeys(procurementData.text);
    this.saveButton.click();
  }
  
};
