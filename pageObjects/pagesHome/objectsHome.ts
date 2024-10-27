// welcome.page.ts
import { $ } from '@wdio/globals';

class HomeScreen {
    
    get TedHomeScreen() { // tela 
        return $('android=new UiSelector().resourceId("HomeScreen")');
    }

    get latestRecommendation() { // tela 
        return $('android=new UiSelector().resourceId("Spotlight_Thumb")');
    }

    /* ----------------------------------------------------------------*/

    public async findHomeScreen() {
        await expect(this.TedHomeScreen).toBeDisplayed();
    }

    public async selecionarlatestRecommendation() {
        // Verifica se o botão Continuar está visível antes de clicar
        await expect(this.latestRecommendation).toBeDisplayed()
        await this.latestRecommendation.click();
    }

}

export default new HomeScreen();
