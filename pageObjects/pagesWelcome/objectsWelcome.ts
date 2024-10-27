// welcome.page.ts
import { $ } from '@wdio/globals';

class WelcomePage {
    
    get WelcomeScreen() { // tela 
        return $('~WelcomeScreen');
    }

    get btnSignIn() { // botão
        return $('android=new UiSelector().text("Already have a TED account? Sign in")');
    }

    /* ----------------------------------------------------------------*/

    public async navigateToSignInScreen() {    
        // Verifica se o botão está visível na tela
        await browser.pause(1500);
        await expect(this.btnSignIn).toBeDisplayed(); //  obs: usado inserção interna do WEBDRIVERIO
        await this.btnSignIn.click();
    }
    
    public async findWelcomeScreen() {
        // Verifica se a tela de Welcome está visível
        await expect(this.WelcomeScreen).toBeDisplayed(); //  obs: usado inserção interna do WEBDRIVERIO
    }
}

export default new WelcomePage();
