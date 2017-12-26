import { $, element, by } from "protractor";

export class LoginPageObject {
    public emailTextBox: any;
    public passwordTextBox: any;

    public loginButton: any;
    public recoveryButton: any;


    constructor() {
        this.emailTextBox = element(by.name('session_key'));
        this.passwordTextBox = element(by.name('session_password'));
       // this.loginButton = $("input[value='Inicia sesión']");
        this.loginButton = element(by.buttonText('Inicia sesión'));

        this.recoveryButton = by.css('link-forgot-password');
    }
}
