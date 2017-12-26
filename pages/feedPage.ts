import { $, element, by } from "protractor";

export class FeedPageObject {
    public myNetworkButton: any;
    public profileItem: any;


    constructor() {

        this.profileItem = element(by.id('profile-nav-item'));
        this.myNetworkButton = element(by.linkText('Mi Red'));
    }
}
