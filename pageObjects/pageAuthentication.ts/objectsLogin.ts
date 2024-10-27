// login.page.ts
import { $ } from '@wdio/globals';

class loginScreen {
    get SignInScreen() { // tela
        return $('android=new UiSelector().resourceId("SignInScreen")');
    }

    get inputPassword() { // tela 
        return $('android=new UiSelector().resourceId("Password>Input")');
    }

    get btnNext() { // input 
        return $('android=new UiSelector().resourceId("Next")');
    }

    /* ----------------------------------------------------------------*/

    public async findSignInScreen() {
        await expect(this.SignInScreen).toBeDisplayed();
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

export default new loginScreen();
