import AuthPage from "../../pageObjects/pageAuthentication.ts/objectsAuthentication";
import homePage from "../../pageObjects/pagesHome/objectsHome";
import loginPage from "../../pageObjects/pageAuthentication.ts/objectsLogin";
import WelcomePage from "../../pageObjects/pagesWelcome/objectsWelcome";
import objectsHome from "../../pageObjects/pagesHome/objectsHome";
import objectsVideo from "../../pageObjects/pagesHome/objectsVideo";
import { emailtest, pass } from '../../global/credenciais';

describe('Funcionalidades de reprodução de video', function() {
    before(async function() {
        await WelcomePage.findWelcomeScreen();
        await WelcomePage.navigateToSignInScreen();
        await AuthPage.findAuthScreen();
        // Autenticação
        await AuthPage.preencherEmail(emailtest);
        await AuthPage.clicarContinuar();
        await loginPage.preencherPassword(pass);
        await loginPage.clicarNext();            
        await homePage.findHomeScreen();
        await objectsHome.selecionarlatestRecommendation()
    });

    describe('CN01 - Validar Download no video', function() {
        it('CT01 - Efetuar Download no video', async function () {
            await objectsVideo.clicarBtnDownload()
        });

        it('CT01 - Verificar Download efetuado com sucesso', async function () {
            await browser.pause(10000);
            await objectsVideo.verificarDownloadEngagement()
        });
    }); 

});
