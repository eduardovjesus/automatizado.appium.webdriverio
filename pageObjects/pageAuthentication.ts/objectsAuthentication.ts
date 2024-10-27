// authetication.page.ts
import { $ } from '@wdio/globals';

class AuthPage {

    get AuthScreen() { // tela
        return $('android=new UiSelector().resourceId("AuthScreen")');
    }

    get inputEmail() { // input 
        return $('android=new UiSelector().resourceId("EmailInput>Input")');
    }

    get btnContinuar() { // botão
        return $('android=new UiSelector().resourceId("Next")');
    }

    /* ----------------------------------------------------------------*/

    public async findAuthScreen() {
        // Verifica se a tela de autenticação está visível
        await expect(this.AuthScreen).toBeDisplayed();
    }
    
    public async preencherEmail(email: string) {
        // Verifica se o campo de email está visível antes de preencher
        await expect(this.inputEmail).toBeDisplayed();
        await this.inputEmail.setValue(email);
    }
    
    public async clicarContinuar() {
        // Verifica se o botão Continuar está visível antes de clicar
        await expect(this.btnContinuar).toBeDisplayed()
        await this.btnContinuar.click();
    }
    

}

export default new AuthPage();


