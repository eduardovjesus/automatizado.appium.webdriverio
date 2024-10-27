import AuthPage from "../../pageObjects/pageAuthentication.ts/objectsAuthentication";
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
    });

    describe('CN01 - Validar reprodução de video', function() {
        it('CT01 - Validar página inicial', async function () {
            await objectsHome.findHomeScreen()
        });

        it('CT02 - Efetuar acesso ao video', async function () {
            await objectsHome.selecionarlatestRecommendation()
        });

        it('CT03 - Efetuar reprodução do video', async function () {
            await objectsVideo.clicarPlay()
        });

        it('CT04 - Validar reprodução do video', async function () {
            await browser.pause(1500); 
            // colocado para verificação manual, não sendo recomendado
            await objectsVideo.verificarVideoPlayback()
        });
    }); 
});
