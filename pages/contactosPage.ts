import { $, element, by } from "protractor";

export class ContactosPageObject {
    public listaContactos: any;


    constructor() {

        this.listaContactos = element.all(by.css(".search-result li"));
    }
}
