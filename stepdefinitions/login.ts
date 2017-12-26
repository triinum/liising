import { browser, protractor, element, by } from "protractor";
import { LoginPageObject } from "../pages/loginPage";
import { FeedPageObject } from "../pages/feedPage";
import { ContactosPageObject } from "../pages/contactosPage";
import { OtroPerfilPageObject } from "../pages/otroPerfilPage";

const { Given, When, Then } = require("cucumber");

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const login: LoginPageObject = new LoginPageObject();
const feed: FeedPageObject = new FeedPageObject();
const contac: ContactosPageObject = new ContactosPageObject();
const otroPerfil: OtroPerfilPageObject = new OtroPerfilPageObject();

    Given('Yo estoy en Linkedin', async () => {
            await expect(browser.getTitle()).to.eventually.contains("LinkedIn");
       });

    When('uso el email {string}', async (string) => {
           await login.emailTextBox.sendKeys(string);
         });

    When('la contrasena {string}', async (string) => {
           await login.passwordTextBox.sendKeys(string);
         });

   When('Yo ingreso en linkedin', async () => {
         browser.actions().sendKeys(protractor.Key.ENTER).perform();
         browser.sleep(60 * 1000);
         });


   Then('obtengo el mensaje {string}', async (string) => {
            await expect(element(by.xpath("//*[text()[normalize-space() = '" + string + "']]")));
         });


   When('veo mi perfil', async () => {
           await expect(feed.profileItem.isPresent());

         });


   When('voy a mis contactos',  async () => {

         await browser.get("https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&origin=MEMBER_PROFILE_CANNED_SEARCH")

         });


   When('Selecciono el contacto nro {string} de la lista',  async (string) => {
            await contac.listaContactos[(+string - 1)]
            console.log(contac[(+string - 1)])
         });



   Then('veo su perfil',  async () => {
            await expect(otroPerfil.profileItem.isPresent());
            browser.sleep(60 * 1000);


         });
