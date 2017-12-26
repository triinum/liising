import { $, element, by } from "protractor";

export class OtroPerfilPageObject {
    public profileItem: any;


    constructor() {

        this.profileItem = element(by.css('.pv-top-card-section__name'));
    }
}
