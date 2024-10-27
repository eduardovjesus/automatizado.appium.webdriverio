// welcome.page.ts
import { $ } from '@wdio/globals';

class SignUpPage {
    
    get SignUpScreen() { // tela
        return $('android=new UiSelector().resourceId("SignUpScreen")');
    }

    get inputName() { // input 
        return $('android=new UiSelector().resourceId("FirstName>Input")');
    }

    get inputFirstName() { // input 
        return $('android=new UiSelector().resourceId("LastName>Input")');
    }

    get inputPassword() { // input 
        return $('android=new UiSelector().resourceId("Password>Input")');
    }

    get btnNext() { // input 
        return $('android=new UiSelector().resourceId("Next")');
    }

    /* ----------------------------------------------------------------*/

    public async findSignUpScreenScreen() {
        await expect(this.SignUpScreen).toBeDisplayed();
    }

    public async preencherName(name: string) {
        await expect(this.inputName).toBeDisplayed();
        await this.inputName.setValue(name);
    }

    public async preencherFirstName(firstName: string) {
        await expect(this.inputFirstName).toBeDisplayed();
        await this.inputFirstName.setValue(firstName);
    }

    public async preencherPassword(password: any) {
        await expect(this.inputPassword).toBeDisplayed();
        await this.inputPassword.setValue(password);
    }

    public async clicarNext() {
        // Verifica se o botão Continuar está visível antes de clicar
        await expect(this.btnNext).toBeDisplayed()
        await this.btnNext.click();
    }

}

export default new SignUpPage();
